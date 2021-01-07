const func1 = () => {
  console.log("calling func 1");
  let hero = func2();
  console.log(hero);
  return hero;
};
const func2 = () => {
  console.log("calling func 2");
  return "this is the secret string.";
};

export default { func1, func2 };
