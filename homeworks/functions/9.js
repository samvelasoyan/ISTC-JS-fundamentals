function is15(x,y){
    if(Number.isInteger(x) === true && Number.isInteger(y) === true){
      return (x == 15 || y == 15 || x + y == 15 || x - y == 15)
    }
    else{
      return false
    }
}
console.log(is15(15,4))