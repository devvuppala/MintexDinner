export class User {
    id: number;
    name: string;
    emailID: string;
    password: string;

    constructor(name: string, emailID: string, password: string) {
        this.name = name;
        this.emailID = emailID;
        this.password = password;
    }
}