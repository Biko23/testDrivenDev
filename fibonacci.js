// function fibonacci() {
//   let a = 1;
//   let b = 0;
//   let c;
//   let d = [];
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     // c = 0;
//     c = a + b;
//     d.push(c);
//     sum += c;
//     a = b;
//     b = c;
//     console.log(d)
//   }
//   console.log(sum);
//   return d;
// }
// fibonacci();

function fibonacci1(n){
  if (n===1){
    return [0, 1];
  } 
  else{
    var s = fibonacci1(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    let M = s.indexOf(13);
    console.log(M)
    return s;
  }
};

 console.log(fibonacci1(8));





 
// module.exports = fibonacci();
module.exports = fibonacci1;


//  function fibonacci2() {
//   let a = 1;
//   let b = 0;
//   let c;
//   let d = [];
//   let sum = 0;
//   let k = 0;
//   for (let i = 1; i <= 10; i++) {
//     // c = 0;
//     c = a + b;
//     d.push(c);
//     k = d.indexOf(13)
//     sum += c;
//     a = b;
//     b = c;
//     console.log(d)
//   }
//   console.log(sum);
//   return k;
// }
// module.exports = fibonacci2();