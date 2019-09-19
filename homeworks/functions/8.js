
function isPrime(){
  var arg = [...arguments]; 
    for(var j = 0; j < arg.length; j++){
      for(var i = 2; i < arg[j]; i++){
        if(Number.isInteger(arg[j]/i) === true){
          arg.splice(j, 1)
        }
      }
    }
console.log(arg)
}

isPrime(7, 8, 9, 11, 37, 78)
