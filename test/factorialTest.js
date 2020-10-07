const assert = require('chai').assert;

const factorial = require('../factorial');
const factorialize = require('../factorialize');
const factorializing = require('../factorializing');


describe('factorials', function() {

    it('should be a number', function() {
        assert.isNumber(factorial(3));
    });
    it('should be a number', function() {
        assert.isNumber(factorialize(3));
    });
    it('should be a number', function() {
        assert.isNumber(factorializing(3));
    });
    it('should be equal the product of positive numbers equal or less than "n" ', function() {
        assert.equal(24, factorial(4));
    });
    it('should be equal the product of positive numbers equal or less than "n" ', function() {
        assert.equal(24, factorialize(4));
    });
    it('should be equal the product of positive numbers equal or less than "n" ', function() {
        assert.equal(24, factorializing(4));
    });
    it('should error on negative number', function(){
        assert.equal(-1, factorial(-5));
    })
    it('should error on negative number', function(){
        assert.equal(-1, factorialize(-5));
    })
    it('should error on negative number', function(){
        assert.equal(-1, factorializing(-5));
    })
    // it('should be a number', function(){
    //     assert.isNumber(factorial(5));
    // })
})