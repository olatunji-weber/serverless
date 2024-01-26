'use strict';

module.exports.generateRandomNumber = (event) => {
  const randomNumber = parseInt(Math.random() * 100);
  console.log("The generated Random Integer is: ", randomNumber);
  console,log("YINKUZE DID THIS....")
  return randomNumber;
};
