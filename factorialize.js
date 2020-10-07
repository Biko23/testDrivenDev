function factorialize(num) {
    /* Factorials are for positive integers so as long as the integer is less than 0,
     it will return -1 to represent an error */
    if (num < 0) {
          return -1;}
    /* The factorial of 0 is 1 */
    else if (num == 0) {
        return 1;}
    /* All positive integers will return the product of themselves and all
    positive integers less than they are */
    else {
        return (num * factorialize(num - 1));
    }
  }
  
  module.exports = factorialize;