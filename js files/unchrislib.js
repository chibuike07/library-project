// function searchInp() {
const loadClasses = formObj => {
  console.log("got here");
  const formValue = formObj.elements[0].value;
  let foundCourse = mainClasses[formValue];
  //console.log(foundCourse)
  if (typeof foundCourse == "undefined") {
    console.log("nothing found");
  } else {
    // things to do
  }
  // data transfer to main class.html
  var str = formValue;
  var result = str.link("subclass.html ");
  window.location.href = "main class.html?" + formValue;
};

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
  let inputForNewBook = document.querySelector("#auth");
  let collection = JSON.parse(localStorage.getItem("collection"));
  let userLoggedIn = JSON.parse(localStorage.getItem("loggerName"));
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
  //if renew needs
  inputForNewBook.onchange = () => {
    if (inputForNewBook.value === "renew") {
      let pro = prompt("please write down the title", "");
      if (pro) {
        let c = confirm("are sure you are ok with the spellings");
        let userNameMap = collection
          .filter(n => n.Title === pro)
          .map(n => n.Name);
        filtObjUserD = collection
          .filter(n => n.Title === pro)
          .map(n => n.Title);

        if (c == true) {
          if (filtObjUserD[0] === pro && userNameMap[0] == userLoggedIn) {
            issuedMap = collection
              .filter(n => n.Title == pro)
              .map(n => n.Issue_date);
            let dF = issuedMap.map(n =>
              n !== currentDate
                ? new Date(currentDate).getDate() - new Date(n).getDate()
                : new Date(currentDate)
            );
            console.log(dF);
            if (dF - 7 > 0) {
              alert(`${userLoggedIn} you are oweing the library ${dF * 100}`);
            } else {
              let bookDuration = `${userLoggedIn.toUpperCase()} You returned '${filtObjUserD[0].toUpperCase()}' exactly ${dF} days from the ${issuedMap}`;
              console.log(bookDuration);
              let ajustUserObject = collection.filter(n => n.Title === pro);
              for (n of ajustUserObject) {
                let check = collection.findIndex(r => r == n);
                n.Issue_date = currentDate;
                console.log(check);
                if (collection[check]) {
                  console.log(collection[check]);
                  collection.splice(collection[check], 1, collection[check]);
                  localStorage.setItem(
                    "collection",
                    JSON.stringify(collection)
                  );
                  console.log(collection);
                  alert(
                    `${userLoggedIn.toUpperCase()} Thanks.You have successfully renewed '${filtObjUserD[0].toUpperCase()}'. You are to return '${filtObjUserD[0].toUpperCase()}'. in a week time.`
                  );
                }
              }
            }
          } else {
            alert(false);
            return false;
          }
        } else if (c == false) {
          return false;
        }
      }
      // firstDatalist.remove(firstDatalist);
    } else if (inputForNewBook.value == "reserve") {
      let form = document.querySelector(".resNwRvs");
      let firstDatalist = document.querySelector("#books");
      let input = document.querySelector("#auth");
      let proForName = prompt("please write your name", "");
      if (proForName == userLoggedIn) {
        if (collection.indexOf(proForName) !== -1) {
          alert(
            `${userLoggedIn} Please you ar not elible to reserve any library collection`
          );
          alert(
            "This may be because you are have a collection that have not been returned"
          );
        } else {
          let collectionArr = ["Books", "Newspaper", "Journals", "Magazines"];
          console.log("name not found");
          input.setAttribute("list", "reservBokLis");
          input.setAttribute("placeholder", "choose your collections");
          form.autocomplete = false;
          form.reset();
          let dataList = document.createElement("datalist");
          dataList.setAttribute("id", "reservBokLis");
          // trying to delete datalist children revisit
          for (let i = 0; i < firstDatalist.length; i++) {
            firstDatalist.remove(firstDatalist[i]);
          }
          console.log(firstDatalist);
          for (list of collectionArr) {
            let option = document.createElement("option");
            option.innerText = list;
            dataList.appendChild(option);
          }
          console.log(dataList);
          form.appendChild(dataList);
          input.addEventListener("change", reserveList);
        }
      }
    } else {
      return false;
    }
  };
};

renewBooks();
function reserveList() {
  if (this.value === "Books") {
    let inp = document.createElement("input");
    let aElem = document.createElement("a");
    inp.setAttribute("list", "searchPro");
    inp.setAttribute("id", "search");
    let datalistForBokks = document.createElement("datalist");
    datalistForBokks.setAttribute("id", "searchPro");
    let pElem = document.querySelector("#colList");
    let searchByTitleArr = ["title", "author"];
    for (search of searchByTitleArr) {
      let option = document.createElement("option");
      option.innerText = search;
      datalistForBokks.appendChild(option);
    }
    pElem.appendChild(inp);
    pElem.appendChild(datalistForBokks);
    pElem.appendChild(aElem);
    aElem.href = "#search";
  }
}

// searchInp();
