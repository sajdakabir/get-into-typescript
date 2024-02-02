"use strict";
console.log("Hey typescript is there...");
// class User {
//     public email: string
//     name: string
//     private city: string = "Kolkata"
//     constructor ( email: string, name: string){
//         this.email=email,
//         this.name= name
//     }
// }
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Kolkata";
    }
    deleteToken() {
        console.log("token deleted");
    }
    // getters and setters
    get getAppleId() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // setters don't have any retur type not even void
    set courseCount(countNum) {
        this._courseCount = countNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    famailyCourseCount() {
        this._courseCount = 4;
    }
}
const saju = new User("saju@kabit.com", "sajda");
