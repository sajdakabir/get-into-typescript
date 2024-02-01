"use strict";
// type User = {
//     name : string
//     id: number
// }
Object.defineProperty(exports, "__esModule", { value: true });
var sajda = {
    dbId: 12,
    email: "sajda@gmail.com",
    userId: 45,
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        return 60;
    }
};
console.log(sajda.email);
sajda.email = "saju@gmail.com";
var createUser = function (u) {
    console.log("this is the user email".concat(u.email));
};
