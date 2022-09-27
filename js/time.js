let secTime = document.getElementById("time");

// Funksjonen for klokken
setInterval(newTime, 1000);
function newTime(){
  var d = new Date();
  var hour = d.getHours();
  var minute = d.getMinutes();
  var second = d.getSeconds();
  if (second < 10){second = "0" + second;}
  if (minute < 10){minute = "0" + minute;}
  if (hour < 10){hour = "0" + hour;}
  secTime.innerHTML = ` ${hour}:${minute}:${second}`;
}
