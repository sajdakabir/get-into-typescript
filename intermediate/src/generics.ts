
const num: Array <number> =[]
const names: Array <string> =[]

function identityOne(val: boolean | number): boolean | number{
    return val;
}


function identityTwo (val: any) : any{
    return val;
}


function identityThree <Type>(val: Type): Type{
    return val;
}

identityThree(3)


function identityFour <T>(val: T){
    return val;
}
function identityFive <S>(val: S){
    return val;
}

interface Bootle{
    brand: string,
    type: number
} 

// identityFive <Bootle>({})

// generics in array

function getSearchProducts<T>(products: T[]): T{
    // do soe database operations;
    const myIndex =3;
    return products[myIndex];
}

const getSomeMoreProducts = <T> (products: T[]): T => {
    // do soe database operations;
    const myIndex =4;
    return products[myIndex];
}

// there is one more syntex it's mostly used my react developers

const oneMoreSearch = <T,> (products: T[]):T =>{
    return products[5];
}


function anotherFunction <T, U>(val1: T, val2: U): object{
    return {
        val1,
        val2
    }
}

anotherFunction(3, "4")

function anotherFunction1 <T, U extends number>(val1: T, val2: U): object{
    return {
        val1,
        val2
    }
}

// anotherFunction1(3, "4")  now it's giving me error

interface Database {
    conn: string,
    userName: string,
    password: string
}

function anotherFunction2 <T, U extends Database>(val1: T, val2: U): object{
    return {
        val1,
        val2
    }
}
anotherFunction2(3, {conn:"hbds", userName:"bhjsfb", password:"hvah"})


interface Quiz {
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    time: number
}


class sellable<T>{
    public cart: T[]=[]

    addToCart(product: T){
        this.cart.push(product);
    }
}