
// calculate sum within the interval

function gumar(a, b, c, d){
 var sum1 = 0;  //achman kargov
for (i = a; i <= b; i++) {
  if(i >= c && i <= d){continue;}
   sum1 += i;
}
 var sum2 = 0;  //nvazman kargov
for (i = b; i >= a; i--) {
  if(i >= c && i <= d){continue;}
  sum2 += i;
}
  return console.log(sum1, sum2)
}

gumar(0, 50, 10, 20)
