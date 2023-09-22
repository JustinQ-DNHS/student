---
toc: false
comments: false
layout: post
title: Shortened Spritesheet
description: Horse running for all of eternity
type: hacks
courses: { CompSci: { week: 5 } }
---
<body>
    <div>
        <!-- Within the base div is a canvas. An HTML canvas is used only for graphics. It allows the user to access some basic functions related to the image created on the canvas (including animation) -->
        <canvas id="spriteContainer"> 
            <img id="horseSprite" src="{{site.baseurl}}/images/horse.png">
        </canvas>
        <!-- Slider type input, with a min and max of 1 and 60, the initial value is 30. The id is "frameSlide" and is referenced for the `slider` variable -->
        <div style="width:75%">
            <input type="range" min="1" max="60" value="30" id="frameSlide">
            <p>Frames Per Second: <span id="frameRate"></span></p>
        </div>
        <!-- Radio type inputs for selecting only one at a time, and also switches selected animation -->
        <div id="controls"> 
            <input type="radio" name="animation" id="running" checked>
            <label for="running">Running</label><br>
            <input type="radio" name="animation" id="stamping">
            <label for="stamping">Stamping</label><br>
            <input type="radio" name="animation" id="test">
            <label for="test">Test</label>
        </div>
    </div>
</body>

> Horse by REIVAXCORP, usable under Creative Commons Attribution 3.0 license.

<script>
    // Runs this whenever the page is loaded
    window.addEventListener('load', function () {
        // Names the parameters of all canvases on the page, using the `get.ElementById`
        const canvas = document.getElementById('spriteContainer');
        const ctx = canvas.getContext('2d');
        const SPRITE_WIDTH = 112;
        const SPRITE_HEIGHT = 84;
        const SCALE_FACTOR = 6;
        let frameRate = 30;
        canvas.width = SPRITE_WIDTH * SCALE_FACTOR;
        canvas.height = SPRITE_HEIGHT * SCALE_FACTOR;

        class Horse {
            constructor() {
                // Describes parameters of sprite based off the Canvas parameters, also uing the `getElementById` to reference it.
                this.image = document.getElementById("horseSprite");
                this.width = SPRITE_WIDTH;
                this.height = SPRITE_HEIGHT;
                this.x = 0;
                this.y = 0;
                this.scale = SCALE_FACTOR;
                this.maxFrame = 5;
                this.frameX = 0;
                this.frameY = 0;
            }
            draw(context) {
                context.drawImage(
                    this.image,
                    this.frameX * this.width,
                    this.frameY * this.height,
                    this.width,
                    this.height,
                    this.x,
                    this.y,
                    this.width * this.scale,
                    this.height * this.scale
                );
            }
            update() {
                if (this.frameX < this.maxFrame) {
                    this.frameX = this.frameX + 0.99;
                } else {
                    this.frameX = 0;
                }
            }
        }

        const horse = new Horse();
        // Add event listener to the parent container for event delegation
        const controls = document.getElementById('controls');
        controls.addEventListener('click', function (event) {
            if (event.target.tagName === 'INPUT') {
                const selectedAnimation = event.target.id;
                switch (selectedAnimation) {
                    case 'running':
                        horse.frameY = 0;
                        horse.frameX = 0;
                        horse.maxFrame = 5;
                        break;
                    case 'stamping':
                        horse.frameY = 1;
                        hose.frameX = 0;
                        horse.maxFrame = 5;
                        break;
                    case 'test':
                        horse.frameY = 2;
                        horse.frameX = 0;
                        horse.maxFrame = 2;
                        break;
                    default:
                        break;
                }
            }
        });

        function animate() {
            const currentFrameRate = parseInt(slider.value, 10);
            setTimeout(function () {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                horse.draw(ctx);
                horse.update();
                requestAnimationFrame(animate);
            }, 1000 / currentFrameRate); // Use the current frame rate here
        }

        animate();
    });

    var slider = document.getElementById("frameSlide");
    var output = document.getElementById("frameRate");
    output.innerHTML = slider.value;

    slider.oninput = function() {
    output.innerHTML = this.value;
    }
</script>