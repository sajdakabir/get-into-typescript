console.log("Hey typescript is there...");

class User {
    email: string
    name: string
    city: string = "Kolkata"
    constructor ( email: string, name: string){
        this.email=email,
        this.name= name
    }
}

const saju = new User ("saju@kabit.com", "sajda")

