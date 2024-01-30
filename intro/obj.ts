const User = {
    name: "test",
    email: "test@gmail.com",
    isActive: true
}

const createUser = ({name: string,  isPaid: boolean}) =>{

}

const newUser = {
    name: "sajda",
    isPaid: false,
    email:"s.s@gmail.com"
}

// function createUser({name: string, isPaind: boolean}){

// }

createUser(newUser);
console.log(createUser);


// return object


function retunrObject( ):{}{
    return {};
}

// Type Aliases


type User = {
    name: string,
    email: string,
    isActive: boolean;
}

const createUser1 = (user: User): User=>{
    console.log(user.name);
    return {name: "sajda", email:"s@s.com", isActive: true}
}

// read only and ?

type Hero = {
    readonly _id : string
    name: string,
    power: string,
    email: string,
    complitng? : number
}
// ? -->> make that veriable optinal
let createHero : Hero ={
    _id: "234",
    name: "superman",
    power: "runing",
    email: "superman@gmail.com"

}

// combaine two or more type


type Backend = {
    lang: string,
    version: number
}

type Frontend = {
    lang: string,
    version: number,
    devTeam: string
}

type Project = Backend & Frontend;


let newProject: Project = {
    lang: "node",
    version: 0.9,
    devTeam: "Sajda"
}

// Another hack way not not good 

type ProjectX = Backend & Frontend & {
    name: string
}



export {}