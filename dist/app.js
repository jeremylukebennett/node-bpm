(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"bpm":2}],2:[function(require,module,exports){
/**
 * Calculate BPM
 */

if (typeof exports !== 'undefined') {
  module.exports = BPM;
  module.exports.BPM = BPM;
}

function BPM() {
  this.count = 0;
  this.ts = 0;
  this.old_ts = 0;
}

BPM.prototype.tap = function() {
  this.ts = Date.now();
  if (!this.first_ts) this.first_ts = this.ts;

  var ret = {};

  // ignore the first tap
  if (this.old_ts) {
    var ms = this.ts - this.old_ts;

    var avg = 60000 * this.count / (this.ts - this.first_ts);

    ret.avg = avg;
    ret.ms = ms;
  }

  ret.count = ++this.count;

  // Store the old timestamp
  this.old_ts = this.ts;
  return ret;
};

BPM.prototype.reset = function() {
  this.count = 0;
  this.ts = 0;
  this.old_ts = 0;
  this.first_ts = 0;
};

},{}]},{},[1]);
