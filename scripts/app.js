//@ts-check
import { canvas, ctx } from "./common/canvas.js";
import { Player } from "./player.js";
import { SimpleGoodItem } from "./colectables/good.js"

let player = new Player();

let item1 = new SimpleGoodItem(canvas.width / 2, canvas.height / 2)

let lastTimeStamp = 0;

function gameloop(timeSatmp) {
    let elapsedtime = timeSatmp - lastTimeStamp;
    lastTimeStamp = timeSatmp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    item1.update(elapsedtime);
    item1.draw();


player.update();
player.draw();
window.requestAnimationFrame(gameloop);
}

window.requestAnimationFrame(gameloop);