"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var func1 = function func1() {
  console.log("calling func 1");
  var hero = func2();
  console.log(hero);
  return hero;
};
var func2 = function func2() {
  console.log("calling func 2");
  return "this is the secret string.";
};

exports.default = { func1: func1, func2: func2 };