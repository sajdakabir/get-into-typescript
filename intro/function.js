"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Function in TS");
function addTow(num) {
    return num + 2;
}
addTow(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper('sajda');
function signUpUser(name, email, password, biling) {
}
signUpUser("sajda", 's@s.com', "jsfg", 10);
// in function type is realy improtant
// Right/better way to right function in ts ------------->>>>>
function addNumber(num, num1) {
    return num + num1;
}
addNumber(2, 3);
// for arrow function
var test = function (val) {
    if (val == 'sajda') {
        return true;
    }
    return false;
};
test('sajda');
// About arrays
var heros = ["naruto", "ironman", "itachi"];
heros.map(function (hero) {
    console.log(hero);
    return hero;
});
heros.map(function (hero) {
    return true;
});
// there is some more function
function consoleError(err) {
    console.log(err);
}
function handleError(err) {
    throw new Error(err);
}
// let my fingers used to with type
var a = 10;
var b = 1;
var addTowNum = function (val1, val2) {
    return val1 + val2;
};
var ans = addTowNum(a, b);
