function factorial(n) {
  let answer = 1; /* Factorial of 0 and 1 should be 1 as factorial returns the product of all
  positive integers less than or equal to that integer. */ 
  
  if (n === 0 || n === 1) {
    return answer;
  } else {
    for(var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }  
}
// const n = 3;
// const answer = factorial(n)
// console.log("The factorial of " + n + " is " + answer);

// module.exports = answer;
module.exports = factorial;




// formular
// n×(n-1)!
// _____ recursive
// function factorial(n){
//   //base case
//   if(n == 0 || n == 1){
//       return 1;
//   //recursive case
//   }else{
//       return n * factorial(n-1);
//   }
// }

// let n = 4;
// answer = factorial(n)
// console.log("The factorial of " + n + " is " + answer);