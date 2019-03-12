export class Book {
    id : number;
    name: string;
    price: number;

    constructor(myId : number, name: string, price: number) {
        this.id = myId;
        this.name = name;
        this.price = price;
    }
}