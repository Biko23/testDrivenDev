let obj = {}
    obj.multiply = function(x, y){
        if(!Number.isInteger(x) && !Number.isInteger(y))
        return undefined;
        return x + y
    }

    module.exports = obj