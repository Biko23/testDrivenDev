function fibonacci() {
  let a = 1;
  let b = 0;
  let c;
  let d = [];
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    // c = 0;
    c = a + b;
    d.push(c);
    sum += c;
    a = b;
    b = c;
    console.log(d)
  }
  console.log(sum);
  return sum;
}
fibonacci();
module.exports = fibonacci();




// f(n) = f(n-1) + f(n-2)

// function fibonacci(n){
//   if (n===1){
//     return [0, 1];
//   } 
//   else{
//     var s = fibonacci(n - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }
// };

//  console.log(fibonacci(8));
 
//  module.exports = fibonacci;