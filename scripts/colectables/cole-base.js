//@ts-check
import { ctx } from "../common/canvas.js";
export class CollectibleItem {
    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y

        this.width = 10
        this.height = 10

        this.color = "hsla(112.5, 100%, 50%, 100%"

        this.isColectable = true;
        this.isColected = false;
        this.value = 0;
    }

    update(elapsedtime) {}
    
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}