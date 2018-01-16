const utils = require('./utils');


it('should add two numbers', () => {
  var res = utils.add(33, 11);

  if (res !== 44) {
    throw new Error(`Expected 44, but got ${res}.`);
  }
});

it('should subtract a number', () => {
var  res = utils.subtract(10, 5);

if (res !== 5) {
  throw new Error(`Expected 5, but get ${res}.`);
}
});

it('should square a number', () => {
  var res = utils.square(10);

  if (res !== 100) {
    throw new Error(`Expected 100, but get ${res}.`);
}
});
