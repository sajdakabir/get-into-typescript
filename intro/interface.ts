// type User = {
//     name : string
//     id: number
// }


interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
}

export {}