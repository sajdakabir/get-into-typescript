interface User {
    name:string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

const isAdminAccount = (account: User | Admin) =>{
    if( "isAdmin" in account){
        return account.isAdmin;
    }
}

// instanceof -->> it's user when anything create via new keyword

function logValue (x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString);
    }else{
        console.log(x.toUpperCase);
    }
}

type Fish = {
    swim: ()=> void
}
type Bird = {
    fly: ()=> void
}


function isFish (pet: Fish |Bird) : pet is Fish{
return (pet as Fish).swim! == undefined;
}


function getFood (pet : Fish | Bird){
    if(isFish(pet)){
        pet;
        console.log("fish food");
    }else{
        pet;
        console.log("bird food");
    }
}

// discriminated unions 

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind :" square",
    side: number
}

interface Rectangle {
    kind : "reactangle",
    lengh: number,
    width: number
}

type Shape = Circle | Square


function getShape (shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI* shape.radius** 2;
    }
    else{
        return shape.side * shape.side;
    }
}

// never

function getArea (shape: Shape){
    switch( shape.kind){
        case "circle":
            return Math.PI* shape.radius** 2;
        
        case " square":
            return shape.side * shape.side;

        default:
            const _defaultForShape: never = shape;
            return _defaultForShape;
    }

}