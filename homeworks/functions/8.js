
function isPrime(p1, p2, p3, p4){
    let arg = [...arguments];
      for(let j = 0; j < arg.length; j++){
      for(let i = 1; i < arg[j] + 1; i++){
        if(Number.isInteger(arg[j]/i) === true){
          console.log(i)
        }
      }
     }
}

isPrime(78, 4, 7, 8)
