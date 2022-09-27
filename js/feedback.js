// HTML referanser
let main = document.getElementById("userPosts");
let signedIn = document.querySelector("#signedInText");
let registerButton = document.getElementById("registerButton");
let title = document.querySelector("title");
let secTime = document.getElementById("time");

// Firebase referanser
let db = firebase.database();
let posts = db.ref("posts");
let plantsInfo = db.ref("plantsInfo");

// Koden som henter key-verdien fra forrige side:
var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");

let user;

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
  secTime.innerHTML = `- ${hour}:${minute}:${second}`;
}

// Sjekker om vi er logget inn
firebase.auth().onAuthStateChanged( newuser => {
    if (newuser) {
        user = newuser;
        signedIn.innerHTML = `You are signed in as <a href="user.html?id=${user.displayName}" id="logInName">${user.displayName}</a>`;
        registerButton.innerHTML = `Sign in with another account`;
    } else {
        signedIn.innerHTML = `Welcome to Plantr.<br>
        Start by signing in.`;
        registerButton.innerHTML = `Sign in with Google`;
    }
});
