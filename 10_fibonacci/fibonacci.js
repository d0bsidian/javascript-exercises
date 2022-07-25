const fibonacci = function(n) {
    if(n < 0) return "OOPS";
    if (n === 0) return 0;
 
    let f1 = 0;
    let f2 = 1;
   
   for (let i = 1; i < n; i ++){
    const temp = f2;
    f2 = f1 + f2;
    f1 = temp;
   }
   return f2
};

// Do not edit below this line
module.exports = fibonacci;
