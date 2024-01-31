"use strict";
// When not sure what type of data is going to coming
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = "44";
score = 40;
var sajda = {
    name: "sajda",
    id: 40
};
sajda = {
    username: 'sk',
    id: 40
};
var getDbId = function (id) {
    console.log("DB Id id ".concat(id));
};
getDbId(4);
getDbId('4');
var getDbId1 = function (id) {
    if (typeof (id) === "string") {
        id.toLowerCase();
    }
};
// array
var data = [1, '2', 4];
console.log(data[1]);
