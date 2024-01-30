"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "test",
    email: "test@gmail.com",
    isActive: true
};
var createUser = function (_a) {
    var string = _a.name, boolean = _a.isPaid;
};
var newUser = {
    name: "sajda",
    isPaid: false,
    email: "s.s@gmail.com"
};
// function createUser({name: string, isPaind: boolean}){
// }
createUser(newUser);
console.log(createUser);
// return object
function retunrObject() {
    return {};
}
var createUser1 = function (user) {
    console.log(user.name);
    return { name: "sajda", email: "s@s.com", isActive: true };
};
