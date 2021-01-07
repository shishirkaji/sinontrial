"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _something = require("./something");

var _something2 = _interopRequireDefault(_something);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var jsClasses = function () {
  function jsClasses(arg1, arg2) {
    _classCallCheck(this, jsClasses);

    this.student = arg1;
    this.teacher = arg2;
  }

  _createClass(jsClasses, [{
    key: "func1",
    value: function func1() {
      var value = _something2.default.func1();
      return value;
    }
  }, {
    key: "func2",
    value: function func2() {
      var value = _something2.default.func2();
      return value;
    }
  }, {
    key: "execute",
    value: function execute() {
      return this.func1();
    }
  }]);

  return jsClasses;
}();

exports.default = jsClasses;