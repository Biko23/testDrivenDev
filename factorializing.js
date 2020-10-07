function factorializing(num1) {
    var result = num1;
    if (num1 < 0){
        return -1;}
    else if (num1 === 0 || num1 === 1){ 
      return 1;}
    else {
        while (num1 > 1) { 
        num1--;
        result *= num1;
    }
    }
    return result;
  }
  
  module.exports = factorializing;