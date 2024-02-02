abstract class TakePhoto {
    constructor(
        cameraMode: string,
        filter: string
    ){}

    abstract getSepia():void

    getReelTime (): number{
        return 8
    }
}
// abstractes are like blue print you can't create a object from a abstract class


class Instagram extends TakePhoto{
     constructor(
        cameraMode: string,
        filter: string,
        burst: number
             ){
            super(cameraMode,filter)

}
getSepia(): void {
    console.log("hii");
}
}

const sajda = new Instagram ("test", "Test",3)