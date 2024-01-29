console.log("Function in TS");


function addTow(num: number){
    return num+2;
}

addTow(5);

function getUpper (val: string){
    return val.toUpperCase()
}

getUpper('sajda')

function signUpUser(name: string, email:string,password:string, biling: number){

}

signUpUser("sajda", 's@s.com',"jsfg", 10)
// in function type is realy improtant


// Right/better way to right function in ts ------------->>>>>


function addNumber(num: number, num1: number): number {
    return num+ num1;
}

addNumber(2,3);


// for arrow function

const test = (val: string): boolean =>{
    if(val=='sajda'){
        return true;
    }
    return false;
}

test('sajda')

// About arrays

const heros = ["naruto", "ironman","itachi"];

heros.map((hero: string): string =>{
    console.log(hero);
    return hero;
})

heros.map((hero): boolean =>{
    return true;
}) 


// there is some more function


function consoleError (err: string ): void{
    console.log(err);
}

function handleError (err: string ): never{
   throw new Error(err);
}


// let my fingers used to with type

const a=10;

const b=1;

const addTowNum = (val1: number, val2:number):number =>{
    return val1+val2; 
}

const ans= addTowNum(a,b);


export {}