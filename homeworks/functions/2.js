
function month(startDate, endDate, today){
for (var i = startDate; i <= endDate; i.setDate(i.getDate() + 1)) {
  
  switch(i.getDate()){
    case today.getDate():
      console.log(i.getDate() + "+")
  }
  if(i.getDate() === today.getDate()){continue;}
    console.log(i.getDate());
 }
}  

month(new Date(2019, 06, 01), new Date(2019, 06, 31), new Date())
