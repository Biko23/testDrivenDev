const assert = require('chai').assert;
const factorial = require('../factorial');


describe('factorials', function(){

    it('should be a number', function(){
        assert.isNumber(factorial(3));
    })
    it('should be equal the product of positive numbers equal or less than "n" ', function(){
        assert.equal(24, factorial(4));
    })
    // it('should be a number', function(){
    //     assert.isNumber(factorial(5));
    // })
})