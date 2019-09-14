
function countryName(){
    let arg = [...arguments];
    let x = arg[0]
    for(let i = 0; i < arg.length; i++){
      if(arg[i].length > x.length){
        x = arg[i];
      }
    }
    console.log(x)
  }
  
  countryName("Great Britain", "United States of America", "San Marino", "Armenia")
  