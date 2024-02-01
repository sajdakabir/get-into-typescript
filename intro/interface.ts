// type User = {
//     name : string
//     id: number
// }


// we can use readonly and ? inside interface too.
interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: ()=> string,
    startTrail(): string,
    getCoupon( couponname: string, value: number): number
    // getCoupon: (couponname: string, value: number)=>number
}

const sajda : User = {
    dbId:12,
    email: "sajda@gmail.com",
    userId:45,
    startTrail: ()=>{
        return "trail started"
    },
    getCoupon: (name:"saju50", off: 50) =>{
        return 60
    }

}

console.log(sajda.email);

sajda.email="saju@gmail.com"

const createUser = (u: User)=>{
    console.log(`this is the user email${u.email}`);
}


export {}