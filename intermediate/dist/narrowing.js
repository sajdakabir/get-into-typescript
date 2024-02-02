"use strict";
const isAdminAccount = (account) => {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
};
// instanceof -->> it's user when anything create via new keyword
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString);
    }
    else {
        console.log(x.toUpperCase);
    }
}
function isFish(pet) {
    return pet.swim == undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        console.log("fish food");
    }
    else {
        pet;
        console.log("bird food");
    }
}
function getShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else {
        return shape.side * shape.side;
    }
}
// never
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case " square":
            return shape.side * shape.side;
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
