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
let dateArr = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
];
const renewBooks = () => {
  let inputFornewBook = document.querySelector("#auth");
  let collection = JSON.parse(localStorage.getItem("collection"));
  let userLoggedIn = JSON.parse(localStorage.getItem("loggerName"));
  let userNameMap = collection.filter(n => n.Title).map(n => n.Name);
  console.log(userLoggedIn);
  console.log(collection);

  //declaration && initialize of dates
  let yr = new Date().getFullYear();
  let date = new Date().getDate();
  let month = dateArr[new Date().getMonth()];
  let dateFormat = `${yr} ${month} ${date}`;
  let filtObjUserD;
  let issuedMap;
  let result = String(dateFormat)
    .split(" ")
    .join("-");
  let currentDate = result;

  //userObject

  //if renew needs
  inputFornewBook.onchange = () => {
    if (inputFornewBook.value == "renew") {
      let pro = prompt("please write down the title", "");
      if (pro) {
        let c = confirm("are sure you are ok with the spellings");
        filtObjUserD = collection
          .filter(n => n.Title === pro)
          .map(n => n.Title);

        if (c == true) {
          // console.log(new Date(issuedMap[1]).getDate());
          if (
            filtObjUserD[0] === pro &&
            userNameMap.indexOf(userLoggedIn) !== -1
          ) {
            console.log(filtObjUserD);
            issuedMap = collection
              .filter(n => n.Title == pro)
              .map(n => n.Issue_date);

            let dF = issuedMap.map((n, i) =>
              console.log(n) && n == currentDate
                ? new Date(currentDate)
                : new Date(currentDate).getDate() - new Date(n).getDate()
            );
            console.log(dF);
            if (dF > 0) {
              alert(`${userLoggedIn} you are oweing the library ${dF * 100}`);
              return false;
            } else {
              alert(
                `${userLoggedIn} thanks you are to return the book in a week time ${new Date(
                  currentDate
                )}`
              );
              return false;
            }
            // return false;
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
};
renewBooks();

const reserveBook = () => {
  let inputForResBook = document.querySelector("#auth");
  let collection = JSON.parse(localStorage.getItem("collection"));
  let userLoggedIn = JSON.parse(localStorage.getItem("loggerName"));
  console.log(userLoggedIn);
  console.log(collection);

  if (inputForResBook.value == "reserve") {
    let pro = prompt("please write down the book name", "");
    if (pro) {
      let c = confirm("are sure you are ok with the spellings");
      if (c == true) {
        let filtObjUserD = collection.filter(n => n.title).map(n => n.Title);
        console.log(filtObjUserD);
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
