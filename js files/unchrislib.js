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

document.addEventListener("DOMContentLoaded", () => {
  imgId.src = array[0];
  h4.innerText = h4Arr[0];
  p.innerText = pArr[0];
});

function reserveBooks() {
  let inputForResBook = document.querySelector("#auth");
  let collection = JSON.parse(localStorage.getItem("collection"));
  console.log(collection);
  inputForResBook.onchange = () => {
    if (inputForResBook.value == "renew") {
      let pro = prompt("please write down the title", "");
      if (pro) {
        let c = confirm("are sure you are ok with the spellings");
        if (c == true) {
          let titleMap = collection.map(n => n.Title);
          console.log(titleMap);
          if (titleMap.includes(pro)) {
            alert("yes");
            console.log(pro);
            return false;
          } else {
            alert(false);
            return false;
          }
        }
      } else {
        return false;
      }
    }
    if (inputForResBook.value == "reserve") {
      let pro = prompt("please write down the author's name", "");
      if (pro) {
        let c = confirm("are sure you are ok with the spellings");
        if (c == true) {
          let titleMap = collection.map(n => n.Author);
          console.log(titleMap);
          if (titleMap.indexOf(pro) !== -1) {
            alert("yes");
            console.log(pro);
            return false;
          } else {
            alert(false);
            return false;
          }
        }
      } else {
        return false;
      }
    }
  };
}
reserveBooks();

// function searchInp() {
const loadClasses = formObj => {
  console.log("got here");
  const formValue = formObj.elements[0].value;
  let foundCourse = mainClasses[formValue];
  //console.log(foundCourse)

  if (typeof foundCourse == "undefined") {
    console.log("nothing found");
  } else {
    //ToDo: pass the foung course to course-dsiplay.html
  }
  // data transfer to main class.html
  var str = formValue;
  var result = str.link("subclass.html ");
  var queryString = "?<h3>" + result + "</h3><br>";
  window.location.href = "main class.html?" + formValue;

  //var queryString = "?<h3>" + result + "</h3><br>" ;
  //window.location.href = "main class.html" + queryString;//var mainclass = foundCourse;
};


// searchInp();
