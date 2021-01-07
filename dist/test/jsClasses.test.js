"use strict";

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require("chai-as-promised");

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _sinon = require("sinon");

var _sinon2 = _interopRequireDefault(_sinon);

var _sinonChai = require("sinon-chai");

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _something = require("./../something");

var _something2 = _interopRequireDefault(_something);

var _jsClasses = require("./../jsClasses");

var _jsClasses2 = _interopRequireDefault(_jsClasses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sandbox = _sinon2.default.createSandbox();
var func1Stub = void 0;
describe("testing jsclasses", function () {
  beforeEach(function () {
    func1Stub = sandbox.stub(_something2.default, "func1").returns("hi there");
  });
  context("func1 testing", function () {
    it("should call function allFunction.func1()", function () {
      var classInstance = new _jsClasses2.default("shishir", "shrestha");
      var hi = classInstance.execute();
      console.log(hi);
      (0, _chai.expect)(func1Stub).to.be.called;
      (0, _chai.expect)(hi).to.be.equal("hi there");
    });
  });
});