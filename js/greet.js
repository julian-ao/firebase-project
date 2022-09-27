var d = new Date();
var hour = d.getHours();
var greet = "<p id='greet'>";
if(hour<6){
  greet += "Good night";
}else if(hour<12){
  greet += "Good morning";
}else if(hour<17){
  greet += "Good afternoon";
}else if(hour<20){
  greet += "Good evening";
}else{
  greet += "Good night";
}
greet += " : )</p>";
document.write(greet);
