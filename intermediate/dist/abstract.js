"use strict";
class TakePhoto {
    constructor(cameraMode, filter) { }
    getReelTime() {
        return 8;
    }
}
// abstractes are like blue print you can't create a object from a abstract class
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
    }
    getSepia() {
        console.log("hii");
    }
}
const sajda = new Instagram("test", "Test", 3);
