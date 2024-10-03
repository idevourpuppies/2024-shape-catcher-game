//@ts-check

export class CollectibleItem {
    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y

        this.isColected = false;
        this.value = 0;
    }

    update() {}
    draw() {}
}