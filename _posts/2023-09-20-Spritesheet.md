---
toc: false
comments: false
layout: post
title: Spritesheet
description: Horse running for all of eternity
type: hacks
courses: { CompSci: { week: 5 } }
---

<body>
    <div>
        <canvas id="spriteContainer"> <!-- Within the base div is a canvas. An HTML canvas is used only for graphics. It allows the user to access some basic functions related to the image created on the canvas (including animation) -->
            <img id="horseSprite" src="/student/_notebooks/images/horse.png">
        </canvas>
        <div id="controls"> <!--basic radio buttons which can be used to check whether each individual animaiton works -->
            <input type="radio" name="animation" id="idle" checked>
            <label for="idle">Idle</label><br>
            <input type="radio" name="animation" id="barking">
            <label for="barking">Barking</label><br>
            <input type="radio" name="animation" id="walking">
            <label for="walking">Walking</label><br>
        </div>
    </div>
</body>

<script>
    window.addEventListener('load', function () {
        const canvas = document.getElementById('spriteContainer');  // sets the canvas as a variable by calling the canvas element from the HTML code, using the id we set
        const ctx = canvas.getContext('2d'); // the getContext function is a given function within the canvas object. It allows us more functionality with the sprite image.

        // constant variables used for sprite and canvas
        const SPRITE_WIDTH = 160;
        const SPRITE_HEIGHT = 144;
        const SCALE_FACTOR = 2;
        const FRAME_LIMIT = 48;
        const FRAME_RATE = 15;

        // sets canvas properties
        canvas.width = SPRITE_WIDTH * SCALE_FACTOR;
        canvas.height = SPRITE_HEIGHT * SCALE_FACTOR;

        //more code will be placed here later
        class Horse {
            constructor(){  // constructor method for outlining data points about the sprite
                this.image = document.getElementById("horseSprite");
                this.spriteWidth = SPRITE_WIDTH;
                this.spriteHeight = SPRITE_HEIGHT;
                this.width = this.spriteWidth;  //takes sprite dimensions and accounts for it in image generation
                this.height = this.spriteHeight;
                this.x = 0;  //starts image generation in coordinate (0,0) px on sprite sheet
                this.y = 0;
                this.scale = 1;  //scale of image
                this.minFrame = 0;
                this.maxFrame = FRAME_LIMIT;  // how many sprites there are in a row
                this.frameX = 0;  // sets position of sprite that is being generated. There are the two parameters we will be changing in order to crete the animation. 
                this.frameY = 0;
            }
            draw(context) {
                context.drawImage(
                    this.image,
                    this.frameX * this.spriteWidth,
                    this.frameY * this.spriteHeight,
                    this.spriteWidth,
                    this.spriteHeight,
                    this.x,
                    this.y,
                    this.width * this.scale,
                    this.height * this.scale
                );
            }
            update() {
                // increases the horizontal position within sprite
                if (this.frameX < this.maxFrame) {
                    this.frameX++;
                } else {
                    this.frameX = 0;  // resets the origin point to the beginning of the row after the 24th frame
                }
            }
    }
    const horse = new Horse();  // This makes the game object, Dog

// Add event listener to the parent container for event delegation
const controls = document.getElementById('controls');
controls.addEventListener('click', function (event) {
    if (event.target.tagName === 'INPUT') {
        const selectedAnimation = event.target.id;
        switch (selectedAnimation) {
            case 'idle':
                horse.frameY = 0;
                break;
            case 'barking':
                horse.frameY = 1;
                break;
            case 'walking':
                horse.frameY = 2;
                break;
            default:
                break;
        }
    }
});
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // clears canvas from previous run before generating new frame
    horse.draw(ctx); // draw method from Dog class: generates image
    horse.update(); // update method from Dog class: moves origin point for the next frame drawn 
    requestAnimationFrame(animate); // built in function; lets the browser know you want an animation to be displayed; sets the rate of frames per second
}

animate();
    });

</script>