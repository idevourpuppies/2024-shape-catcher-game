//@ts-check
import { canvas, ctx } from "./common/canvas.js"

export class Player {
    constructor(x = 0,y = 0) {
        this.x=x;
        this.y=y;
        this.width = 75;
        this.height = 25;

        this.speed = 1;

        this.keyBinding = {
            up: "ArrowUp",
            down: "ArrowDown",
            right: "ArrowRight",
            left: "Arrowleft",
        };

        this.moving = {
            up: false,
            down: false,
            right: false,
            left: false,
        };

        this.wiredUpKeyBoard();
    }

wiredUpKeyBoard() {
    window.addEventListener("keydown", (e) => {
    // console.log(e);
    
    switch(e.code) {
    case this.keyBinding.up:
        this.moving.up=true;
        break;
        case this.keyBinding.down:
        this.moving.down=true;
        break;
        case this.keyBinding.up:
        this.moving.right=true;
        break;
        case this.keyBinding.left:
        this.moving.left=true;
        break;
    }
    });

    window.addEventListener("keyup", (e) => {
    // console.log(e);
    switch(e.code) {
        case this.keyBinding.up:
            this.moving.up=false;
            break;
            case this.keyBinding.down:
            this.moving.down=false;
            break;
            case this.keyBinding.up:
            this.moving.right=false;
            break;
            case this.keyBinding.left:
            this.moving.left=false;
            break;
        }
    });
}
    update() {
        let dirx = 0;
        let diry = 0;

        if(this.moving.up) {
            diry = -1;
        }

        if(this.moving.down) {
            diry = 1;
        }

        if(this.moving.left) {
            dirx = -1;
        }

        if(this.moving.right) {
            dirx = 1;
        }

        if(this.moving.up && this.moving.down) {
            diry = 0;
        }

        if(this.moving.left && this.moving.right) {
            dirx = 0;
        }

        this.x += this.speed * dirx
        this.y += this.speed * diry
    }

    draw() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}