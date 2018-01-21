const expect = require('expect');
const utils = require('./utils');


it('should add two numbers', () => {
  var res = utils.add(33, 11);

expect(res).toBe(44).toBeA('number');
});

it('should subtract a number', () => {
var  res = utils.subtract(10, 5);

if (res !== 5) {
  throw new Error(`Expected 5, but get ${res}.`);
}
});

it('should square a number', () => {
  var res = utils.square(10);

expect(res).toBe(100).toBeA('number');
});

it('should verify firstName and lastName', () =>{
  let user = {location: 'Newyork', age: '25'};
  let res = utils.setName(user, 'Don Tamayo');

  expect(res).toInclude({
    firstName: 'Don',
    lastName: 'Tamayo'
  });
});


// it('should expect some values', () => {
//   //expect(12).toNotBe(11);  //toNotBe is good for number, strings, bolean BUT not on objects and arrays
//   // expect({name: 'Andrew'}).toEqual({name: 'Andrew'}); //toEqual is good for object and arrays
//   // expect({name: 'Andrew'}).toNotEqual({name: 'Don'}); // toNotEqual is used for not equal obeject
//   // expect([2,3,4]).toExclude(1); // toExclude - is used to exclude otthers
//   expect({
//     name: 'Don',
//     age: 29,
//     location: 'Newyork',
//     hungry: true
//   }).toInclude({
//     location: 'Newyork'
//   })
//   //toInclude should have the exact number or arguments
// });
