function openCity(cityName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(cityName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

let len = 0;
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
  alert("am");
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