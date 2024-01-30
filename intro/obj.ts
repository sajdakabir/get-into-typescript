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





export {}