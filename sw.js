// Reminders & Notes — Service Worker
// Receives reminder data via postMessage, stores in IndexedDB,
// schedules notifications via setTimeout, re-schedules on SW activation.

const DB_NAME  = 'rm_sw_db';
const DB_STORE = 'reminders';
let timers = [];

// ── IndexedDB helpers ──────────────────────────────────────────
function openDB() {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open(DB_NAME, 1);
        req.onupgradeneeded = e => e.target.result.createObjectStore(DB_STORE);
        req.onsuccess  = e => resolve(e.target.result);
        req.onerror    = () => reject(req.error);
    });
}

async function persistReminders(list) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(DB_STORE, 'readwrite');
        tx.objectStore(DB_STORE).put(list, 'list');
        tx.oncomplete = resolve;
        tx.onerror    = () => reject(tx.error);
    });
}

async function readReminders() {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx  = db.transaction(DB_STORE, 'readonly');
        const req = tx.objectStore(DB_STORE).get('list');
        req.onsuccess = () => resolve(req.result || []);
        req.onerror   = () => reject(req.error);
    });
}

// ── Notification scheduling ────────────────────────────────────
function scheduleAll(reminders) {
    timers.forEach(clearTimeout);
    timers = [];

    const now = Date.now();

    reminders.forEach(r => {
        if (r.done) return;

        const dt    = new Date(`${r.date}T${r.time}`).getTime();
        const delta = dt - now;

        // 5-minute warning
        const warnDelta = delta - 5 * 60 * 1000;
        if (warnDelta > 0) {
            timers.push(setTimeout(() => {
                self.registration.showNotification(`⏰ Coming up: ${r.name}`, {
                    body: 'Due in 5 minutes',
                    icon: '/icon-192.png',
                    badge: '/icon-192.png',
                    tag: `${r.id}_warn`,
                    silent: false,
                    data: { id: r.id }
                });
            }, warnDelta));
        }

        // Fire at due time (schedule up to 30 days ahead)
        if (delta > 0 && delta < 30 * 24 * 60 * 60 * 1000) {
            timers.push(setTimeout(() => {
                self.registration.showNotification(`🔔 ${r.name}`, {
                    body: r.desc || `Due now`,
                    icon: '/icon-192.png',
                    badge: '/icon-192.png',
                    tag: r.id,
                    requireInteraction: true,
                    data: { id: r.id },
                    actions: [
                        { action: 'open',    title: 'Open App' },
                        { action: 'dismiss', title: 'Dismiss'  }
                    ]
                });
            }, delta));
        }
    });
}

// ── Lifecycle ─────────────────────────────────────────────────
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
    event.waitUntil(
        self.clients.claim().then(() =>
            readReminders().then(list => { if (list.length) scheduleAll(list); })
        )
    );
});

// ── Message from page ─────────────────────────────────────────
self.addEventListener('message', async event => {
    if (event.data?.type === 'SYNC_REMINDERS') {
        const list = event.data.reminders || [];
        await persistReminders(list);
        scheduleAll(list);
    }
});

// ── Notification interactions ─────────────────────────────────
self.addEventListener('notificationclick', event => {
    event.notification.close();
    if (event.action === 'dismiss') return;

    event.waitUntil(
        self.clients
            .matchAll({ type: 'window', includeUncontrolled: true })
            .then(clientList => {
                for (const c of clientList) {
                    if ('focus' in c) return c.focus();
                }
                if (self.clients.openWindow) return self.clients.openWindow('./');
            })
    );
});

// ── Periodic background sync (Chrome/Android) ─────────────────
self.addEventListener('periodicsync', event => {
    if (event.tag === 'check-reminders') {
        event.waitUntil(
            readReminders().then(list => { if (list.length) scheduleAll(list); })
        );
    }
});
