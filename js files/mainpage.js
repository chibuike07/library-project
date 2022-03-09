let menuImg = document.getElementById("menu");
let aGroup = document.querySelector(".agroup");
// menuImg.addEventListener("onmouseover", menu);

menuImg.onmouseover = function menu() {
  if (aGroup.style.display == "none") {
    aGroup.style.display = "block";
  } else {
    aGroup.style.display = "none";
  }
};
let len = 0;
let array = [
  "/image/e-lib.jpeg",
  "/image/e-lib4-reduce.jpg",
  "/image/e-lib1.jpeg",
];
h4Arr = [
  "nelson mandela interactive innovation exhibition",
  "place your book order",
  "unichris library",
];
pArr = [
  "visit hour to christopher university library",
  "feel free to place your orders of collection at your comfort",
  "come and embrace the knowledge that is what while",
];
let imgId = document.getElementById("library-views");
let h4 = document.getElementById("h4");
let p = document.getElementById("p");
function libraryView() {
  len = len + 1;
  len = len % array.length;
  console.log(len);
  imgId.src = array[len];
  if (array[len]) {
    h4.innerText = h4Arr[len];
    p.innerText = pArr[len];
  }
}
if (imgId.src == array[2]) {
  // alert("am");
}
function prev() {
  if (len === 0) {
    len = array.length;
  } else {
    len = len - 1;
    imgId.src = array[len];
    if (array[len]) {
      h4.innerText = h4Arr[len];
      p.innerText = pArr[len];
    }
  }
}
function weekDay() {
  let date = new Date();
  let day = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  // assigning value to date and weekday
  document.getElementById("demo").innerHTML = "Today is " + day[date.getDay()];
}
weekDay();
let keyArray = [
  "/image/booksInt.jpeg",
  "/image/printer2.jpeg",
  "/image/scana.jpeg",
  "/image/research2.jpeg",
  "/image/wi-fi.jpeg",
];
let servImg = document.getElementById("serv");
// servImg.src = keyArray[len];
let int = document.getElementById("int");
let pri = document.getElementById("pri");
let sca = document.getElementById("sca");
let res = document.getElementById("res");
let wi_fi = document.getElementById("wi-fi");

int.onmouseover = function () {
  servImg.src = keyArray[0];
};
pri.onmouseover = function () {
  servImg.src = keyArray[1];
};
sca.onmouseover = function () {
  servImg.src = keyArray[2];
};
res.onmouseover = function () {
  servImg.src = keyArray[3];
};
wi_fi.onmouseover = function () {
  servImg.src = keyArray[4];
};
function onload() {
  imgId.src = array[0];
  servImg.src = keyArray[0];
  h4.innerText = h4Arr[0];
  p.innerText = pArr[0];
}
