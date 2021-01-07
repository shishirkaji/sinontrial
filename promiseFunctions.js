import mainFunc from "./something.js";
export const asyncFunction = () => {
  return new Promise((resolve) => {
    let hello = mainFunc();
    console.log(hello);
    resolve(hello);
  });
};

asyncFunction().then((data) => {
  console.log(data + "hi");
});
