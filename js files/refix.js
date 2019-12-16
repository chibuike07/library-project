let joi = document.getElementById("join");
let ren = document.getElementById("ren");
let onl = document.getElementById("onl");
let navImg = document.getElementById("img");
joi.onmouseover = () => {
  navImg.src = imageArr[0];
};
ren.onmouseover = () => {
  navImg.src = imageArr[1];
};
onl.onmouseover = () => {
  navImg.src = imageArr[2];
};
let servImg = document.getElementById("serv");
// servImg.src = keyArray[len];
let int = document.getElementById("int");
let pri = document.getElementById("pri");
let sca = document.getElementById("sca");
let res = document.getElementById("res");
let wi_fi = document.getElementById("wi-fi");

int.onmouseover = function() {
  servImg.src = keyArray[0];
};
pri.onmouseover = function() {
  servImg.src = keyArray[1];
};
sca.onmouseover = function() {
  servImg.src = keyArray[2];
};
res.onmouseover = function() {
  servImg.src = keyArray[3];
};
wi_fi.onmouseover = function() {
  servImg.src = keyArray[4];
};
document.addEventListener("DOMContentLoaded", () => {
  servImg.src = keyArray[0];
});

// let LinkMemb = document.getElementById('memb');
$("#memb").click(function() {
  alert("clicked");
  $(".all-cont").load("mem.html");
});

$("#ren").click(function() {
  alert("am ren");
});
