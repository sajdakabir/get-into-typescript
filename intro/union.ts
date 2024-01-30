// When not sure what type of data is going to coming


let score: number | string = 33

score ="44"
score = 40

type User = {
    name : string
    id: number
}

type Admin = {
    username : string
    id: number
}
let sajda : User | Admin ={
    name: "sajda",
    id: 40
}

sajda = {
    username: 'sk',
    id:40
}

const getDbId = (id: number | string)=>{
    console.log(`DB Id id ${id}`);
}
getDbId(4)
getDbId('4')


const getDbId1 = (id: number | string)=>{
    if(typeof(id)=== "string"){
        id.toLowerCase()
    }
}

// array


const data : (number | string)[] = [1,'2',4]

console.log(data[1]);


let pi: 3.14= 3.14

// strict the variable value
let seatAllotment: "aisle" | "middle" | 'window';



export {}