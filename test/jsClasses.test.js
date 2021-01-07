import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import allFunction from "./../something";
import jsclasses from "./../jsClasses";
let sandbox = sinon.createSandbox();
let func1Stub;
describe("testing jsclasses", () => {
  beforeEach(() => {
    func1Stub = sandbox.stub(allFunction, "func1").returns("hi there");
  });
  context("func1 testing", () => {
    it("should call function allFunction.func1()", () => {
      const classInstance = new jsclasses("shishir", "shrestha");
      const hi = classInstance.execute();
      console.log(hi);
      expect(func1Stub).to.be.called;
      expect(hi).to.be.equal("hi there");
    });
  });
});
