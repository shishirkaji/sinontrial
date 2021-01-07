import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import mainFunc from "./../something.js";

chai.use(sinonChai);
chai.use(chaiAsPromised);
// allFunctions.func2();
const sandbox = sinon.createSandbox();
let func2stub;
describe("something", () => {
  beforeEach(() => {
    // func2stub = sandbox.stub(mainFunc, "func2");
  });
  context("func1", () => {
    it("must call the func2", () => {
      func2stub = sandbox.stub(mainFunc, "func2");
      mainFunc.func2();
      expect(func2stub).to.have.been.calledOnce;
    });
  });
});
