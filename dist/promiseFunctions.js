"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncFunction = undefined;

var _something = require("./something.js");

var _something2 = _interopRequireDefault(_something);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var asyncFunction = exports.asyncFunction = function asyncFunction() {
  return new Promise(function (resolve) {
    var hello = (0, _something2.default)();
    console.log(hello);
    resolve(hello);
  });
};

asyncFunction().then(function (data) {
  console.log(data + "hi");
});