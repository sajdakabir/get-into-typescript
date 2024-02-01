console.log("Hey typescript is there...");

// class User {
//     public email: string
//     name: string
//     private city: string = "Kolkata"
//     constructor ( email: string, name: string){
//         this.email=email,
//         this.name= name
//     }
// }
class User {
    protected _courseCount = 1;
    readonly city: string = "Kolkata"
    constructor (
        public email: string,
        public name: string,
        private userId? : string
         ){
    
    }

    private deleteToken(){
        console.log("token deleted");
    }
// getters and setters

get getAppleId(): string{
    return `apple${this.email}`
}

get courseCount(): number {
    return this._courseCount
}

// setters don't have any retur type not even void
set courseCount( countNum) {
    this._courseCount= countNum;
}
}

class SubUser extends User {
    isFamily: boolean = true

    famailyCourseCount(){
        this._courseCount=4;
    }

}


const saju = new User ("saju@kabit.com", "sajda")

