import allFunctions from "./something";
export default class jsClasses {
  constructor(arg1, arg2) {
    this.student = arg1;
    this.teacher = arg2;
  }
  func1() {
    const value = allFunctions.func1();
    return value;
  }
  func2() {
    const value = allFunctions.func2();
    return value;
  }
  execute() {
    return this.func1();
  }
}
