"use strict";
const num = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(3);
function identityFour(val) {
    return val;
}
function identityFive(val) {
    return val;
}
// identityFive <Bootle>({})
// generics in array
function getSearchProducts(products) {
    // do soe database operations;
    const myIndex = 3;
    return products[myIndex];
}
const getSomeMoreProducts = (products) => {
    // do soe database operations;
    const myIndex = 4;
    return products[myIndex];
};
// there is one more syntex it's mostly used my react developers
const oneMoreSearch = (products) => {
    return products[5];
};
function anotherFunction(val1, val2) {
    return {
        val1,
        val2
    };
}
anotherFunction(3, "4");
function anotherFunction1(val1, val2) {
    return {
        val1,
        val2
    };
}
function anotherFunction2(val1, val2) {
    return {
        val1,
        val2
    };
}
anotherFunction2(3, { conn: "hbds", userName: "bhjsfb", password: "hvah" });
class sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
