function factorializing(num1) {
    var result = num1;
    /* Factorials for negative numbers will return -1 to represent an error */
    if (num1 < 0){
        return -1;}
    /* Factorials for 0 and 1 will return 1 as that is their factorial */
    else if (num1 === 0 || num1 === 1){ 
      return 1;}
    else {
    /* Otherwise numbers greater than 1 will have their values initialize the result variable 
    decrement themselves and have the product of their new value and the result value put
     as the new value of the result variable  */
        while (num1 > 1) { 
        num1--;
        result *= num1;
    }
    }
    return result;
  }
  
  module.exports = factorializing;