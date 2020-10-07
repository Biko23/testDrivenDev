function fibonacciLoop() {
  let a = 1;
  let b = 0;
  let c;
  let d = [];
  // let sum = 0;
  for (let i = 1; i <= 10; i++) {
    // c = 0;
    c = a + b;
    d.push(c);
    // sum += c;
    a = b;
    b = c;
    // console.log(d)
  }
  // console.log(sum);
  return d;
}
// fibonacci();
 
module.exports = fibonacciLoop;