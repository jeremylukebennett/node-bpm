"use strict";


console.log("connected?");

var BPM = require('bpm'),
    b = new BPM();

let button = document.getElementById("tap");

button.addEventListener("click", function(){
    console.log("click");
    
    setTimeout(function() {
      console.log(b.tap());
    }, 1000);
});
