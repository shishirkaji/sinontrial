"use strict";

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require("chai-as-promised");

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _sinon = require("sinon");

var _sinon2 = _interopRequireDefault(_sinon);

var _sinonChai = require("sinon-chai");

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _something = require("./../something.js");

var _something2 = _interopRequireDefault(_something);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_sinonChai2.default);
_chai2.default.use(_chaiAsPromised2.default);
// allFunctions.func2();
var sandbox = _sinon2.default.createSandbox();
var func2stub = void 0;
describe("something", function () {
  beforeEach(function () {
    // func2stub = sandbox.stub(mainFunc, "func2");
  });
  context("func1", function () {
    it("must call the func2", function () {
      func2stub = sandbox.stub(_something2.default, "func2");
      _something2.default.func2();
      (0, _chai.expect)(func2stub).to.have.been.calledOnce;
    });
  });
});