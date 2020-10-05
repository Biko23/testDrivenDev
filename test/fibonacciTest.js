const assert = require('chai').assert

// const fibonacci = require('../fibonacci')
const fibonacci1 = require('../fibonacci')
// const fibonacci2 = require('../fibonacci')




describe('fibonacci Sequence', function(){

    let m = new fibonacci1(8);


    it('should show 0 comes first in the fibonacci sequence', function(){
        let n = m.indexOf(0) + 1;
        assert.equal(1, n)
    })

    it('Should be an array returned', function(){
        assert.isArray(m)

    })
    it('should show the position of the number 13 in the sequence', function(){
        assert.equal(7, m.indexOf(13))
    })
    it('should include only numbers in the fibonacci sequence', function(){
        assert.includeMembers(m, [0,1,1,2,3,4,5,8,13,21])
    })
})