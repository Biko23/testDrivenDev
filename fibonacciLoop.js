function fibonacciLoop(r) {
  let a = 1;
  let b = 0;
  let c;
  let d = [];
  // let sum = 0;
  for (let i = 0; i <= r; i++) {
      if (i == 0) {
          c = 0;
      }
      else{
        // c = 0;
        c = a + b;
        // sum += c;
        a = b;
        b = c;
        // console.log(d)
      }
    d.push(c);
    
  }
  console.log(d);
  return d;
}
//fibonacciLoop(2);
 
module.exports = fibonacciLoop;