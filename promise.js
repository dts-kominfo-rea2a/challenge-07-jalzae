const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

const promiseOutput = async (string) => {

  let data = await promiseTheaterIXX();
  let data2 = await promiseTheaterVGC();

  let result = data.filter((e) => e.hasil == string);
  let result1 = data2.filter((e) => e.hasil == string);

  return result.length + result1.length;
};

module.exports = {
  promiseOutput,
};
