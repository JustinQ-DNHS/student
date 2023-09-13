---
toc: true
comments: true
layout: post
title: Creation of Snake
description: How I created and edited the snake game
type: tangibles
courses: { CompSci: { week: 2 } }
---
<style>
    /* Makes all <span> elements with the class of hc highlighted in light gray */
    span.hc {
        background-color: #454545 !important;
        padding-left: 4px;
        padding-right: 4px;
    }
    /* This part is copy and pasted from W3Schools */
    /* Designs the button for collapsable text */
    .collapsible {
        background-color: #777;
        color: white;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
    }
    .active, .collapsible:hover {
        background-color: #171717;
    }
    .content {
        padding: 0 18px;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
        background-color: #171717;
    }
</style>

<body>
<!--Creation of Base Game -->
<div>
<h2>Creation of the Base Game</h2>
I created the base of the game / the snake eatting apple part by following a tutorial by Mr. Mortensen. I will summarize it here
</div>
<div>
First, I created a new <span class="hc">.md</span> file in the <span class="hc">_posts</span> folder. I then went to this link <span class="hc"><a href="https://raw.githubusercontent.com/nighthawkcoders/APCSA/master/_posts/2022-07-08-PBL-FE-snake.md">SNAKE SOURCE</a></span> and copied and pasted all the code on that page into the <span class="hc">.md</span> file. This'll create the base page, you can play snake however I edited the code and will explain how to further on.
</div>
<br>
<button class="collapsible">How to Create empty <span class="hc">.md</span> file</button>
    <div class="content">
        The easiest way to create an empty <span class="hc">.md</span> file is to take an existing one and copy and paste it into the <span class="hc">_posts</span> folder. Then delete everything inside the file.
    </div>
<br>
<div>
  
</body>



<!-- Next part is copy and pasted from W3 School
Script for the collapsable button -->
<script>
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
</script>