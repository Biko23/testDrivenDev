const assert = require('chai').assert;

// const assert = require('chai')
// const obj = require('./app')
// const fibonacci = require('./fibonacci')
// const factorial = require('./factorial')


// describe('Math', function() {

//     it('should test if 5*3 = 15', function(){
//       assert.equal(15, 5*3)
//     })

//     it('should test if (2-1)*6 = -6', function(){
//       assert.equal(-6, (1-2)*6)
//     })
// })

// describe('Multiplication', function(){
//     describe('multiply', function(){
//         it('should multiply 5 and 1 to equal 5 ', function(){
//             assert.equal(5, obj.multiply(5, 1))
//         })
//     })
// })


describe ('factorials', function(){

  it('should return the product of all numbers less than or equal to it', function(){
    assert.equal(6, factorial)
  })
  it('check if factorial',function(){
    assert.isNumber(factorial);
});

})

// describe('fibonacci', function(){
//   it('Should sum up first 10 fibonacci numbers to 143', function(){
//     assert.equal(143, fibonacci)
//   })
// })





// const assert = require('chai').assert;
// const Factorial = require('./factorial');
// const fib = require('./fibonacci');
// const addNumbers = require('../factorial').addNumbers;

// call a method describe
// describe('testing for factorial', function () {
//     let fact = Factorial;
    
//     it('check if factorial result is a number',function(){
//         assert.isNumber(fact(24));
//     });
//     it('check if factorial funtion works correctly',function(){
//         assert.equal(fact(5),120);
//     });

//     it('sum should be above 5', function(){
//         let result = addNumbers(3,3);
//         assert.isAbove(result,5);
//     })

//     it('check if fibonacci funtion works correctly', function(){
//         let result = fib(8);
//         assert.equal(result, [0, 1,  1,  2, 3, 5, 8, 13, 21]);
//     })

    
// });

//call a method describe
// describe('testing for factorial', function() {
//   let fact = new Factorial();

  
//   it('check if factorial',function(){
//       assert.isNumber(fact(24));
//   });
//   it('check if factorial',function(){
//       assert.equal(fact(4),24);
//   });

  

// });

// group members
// Mike Otieno
// Eva Mirembe
// Biko Jeremy Biteete
// leslie