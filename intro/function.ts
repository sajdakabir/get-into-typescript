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

export {}