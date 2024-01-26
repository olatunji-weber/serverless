'use strict';

module.exports.generateRandomNumber = (event) => {
  const randomNumber = parseInt(Math.random() * 100);
  console.log("The generated Random Integer is: ", randomNumber);
  return randomNumber;
};
