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
//display content of header bar
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
//creating a slide text
let len = 0;
let imgId = document.getElementById("library-views");
let h4 = document.getElementById("h4");
let p = document.getElementById("p");
//viewin the next post
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
//viewing the previous post
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
//set a default behaviour of the webpage
document.addEventListener("DOMContentLoaded", () => {
  imgId.src = array[0];
  h4.innerText = h4Arr[0];
  p.innerText = pArr[0];
});
//array for date
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
//renew of collection
const renewBooks = () => {
  let inputForNewBook = document.querySelector("#auth");
  let collection = JSON.parse(localStorage.getItem("collection"));
  let userLoggedIn = JSON.parse(localStorage.getItem("loggerName"));
  console.log(userLoggedIn);
  // console.log(collection);

  //declaration && initialize of dates
  let yr = new Date().getFullYear();
  let date = new Date().getDate();
  let month = dateArr[new Date().getMonth()];
  let dateFormat = `${yr} ${month} ${date}`;
  let renewBook;
  let mapIssuedDate;
  let result = String(dateFormat)
    .split(" ")
    .join("-");
  let currentDate = result;
  //if renew needs
  inputForNewBook.onchange = () => {
    if (inputForNewBook.value === "renew") {
      //getting the user input for the exact collection to renew
      let proForRenewBooks = prompt("please write down the title", "");
      if (proForRenewBooks) {
        let confirmInputValue = confirm(
          "are sure you are ok with the spellings"
        );
        //checking if the renewer already have the library material
        let getUserNameMap = collection
          .filter(renewerObject => renewerObject.Title === proForRenewBooks)
          .map(renewerName => renewerName.Name);
        renewBook = collection
          .filter(renewerObject => renewerObject.Title === proForRenewBooks)
          .map(bookTitleToRenew => bookTitleToRenew.Title);
        //things ton happen if the user continues
        if (confirmInputValue == true) {
          if (
            renewBook[0] === proForRenewBooks.trim() &&
            getUserNameMap[0] === userLoggedIn
          ) {
            //get the issued date from data
            mapIssuedDate = collection
              .filter(renewerObject => renewerObject.Title == proForRenewBooks)
              .map(dateString => dateString.Issue_date);
            //comparing dates to check if the renewer have already exceeded his book return date
            let dateDifferent = mapIssuedDate.map(dateString =>
              dateString !== currentDate
                ? new Date(currentDate).getDate() -
                  new Date(dateString).getDate()
                : new Date(currentDate)
            );
            console.log(dateDifferent);
            //minusing the the actual duration from the date different
            if (dateDifferent - 7 > 0) {
              //message if the renewer has exceeded and the amount to be paid to the library
              alert(
                `${userLoggedIn} you are oweing the library ${dateDifferent *
                  100}`
              );
            } else {
              //if the renewer time ius still with in range of expected date
              let bookDuration = `${userLoggedIn.toUpperCase()} You returned '${renewBook[0].toUpperCase()}' exactly ${dateDifferent} days from the ${mapIssuedDate}`;
              console.log(bookDuration);
              //filtering collection that matches the renewer search
              let ajustUserObject = collection.filter(
                bookTitle => bookTitle.Title === proForRenewBooks
              );
              for (values of ajustUserObject) {
                //get the index of the the found collection from the collectionData for update.
                let userIndex = collection.findIndex(
                  userProperty => userProperty == values
                );
                values.Issue_date = currentDate;
                console.log(userIndex);
                //geting the collection that have the matches the renewer input
                if (collection[userIndex]) {
                  console.log(collection[userIndex]);
                  //updating the collection data with the current date
                  collection.splice(
                    collection[userIndex],
                    1,
                    collection[userIndex]
                  );
                  // updating the data
                  localStorage.setItem(
                    "collection",
                    JSON.stringify(collection)
                  );
                  console.log(collection);
                  alert(
                    `${userLoggedIn.toUpperCase()} Thanks.You have successfully renewed '${renewBook[0].toUpperCase()}'. You are to return '${renewBook[0].toUpperCase()}'. in a week time.`
                  );
                }
              }
            }
          } else {
            alert(false);
            return false;
          }
        } else if (confirmInputValue == false) {
          return false;
        }
      } //reserve purposes
    } else if (inputForNewBook.value == "reserve") {
      let form = document.querySelector(".resNwRvs");
      let firstDatalist = document.querySelector("#books");
      let input = document.querySelector("#auth");
      let proForName = prompt("please write your name", "");
      //running check to see if it matches with the user logged in
      if (proForName === userLoggedIn) {
        //checking if the user name already exist in the discharge collection. if yes the person is not eligible
        let borrowersName = collection.map(v => v["Name"]);
        console.log(borrowersName);
        if (borrowersName.includes(proForName)) {
          alert(
            `${userLoggedIn} Please you are not elible to reserve any library collection`
          );
          alert(
            "This may be because you are having a collection that have not been returned"
          );
        } else {
          //if the user has not borrowed before now
          let collectionArr = ["Books", "Newspaper", "Journals", "Magazines"];
          input.setAttribute("list", "reservBokLis");
          input.setAttribute("placeholder", "choose your collections");
          form.autocomplete = false; //remove autocompletion of text
          form.reset(); //set input to empty string
          //creating of dropdown list
          let dataList = document.createElement("datalist");
          //changing the state of the input to hold the new lists
          dataList.setAttribute("id", "reservBokLis");
          console.log(firstDatalist);
          for (list of collectionArr) {
            let option = document.createElement("option");
            option.innerText = list;
            dataList.appendChild(option);
          }
          console.log(dataList);
          form.appendChild(dataList);
          input.addEventListener("change", reserveList); //adding an event to lookout for onchange values
        }
      }
    } else {
      return false;
    }
  };
};

renewBooks();
const generateString = () => {
  //getting reserve key for clarifcation in the library
  const randomStr =
    "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ#%$*?><";
  shuffle = randomStr
    .toString()
    .split("")
    .sort(n => 0.5 - Math.random(n))
    .join("");
  let reserveBookKey = shuffle.slice(shuffle, 8);
  return reserveBookKey;
};
let shuffle;
function reserveList() {
  //call back for the input onchange event
  const randomStr =
    "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ#%$*?><";
  shuffle = randomStr
    .toString()
    .split("")
    .sort(n => 0.5 - Math.random(n))
    .join("");
  let reserveBookKey = shuffle.slice(shuffle, 8);
  // console.log(reserveKey);
  if (this.value === "Books") {
    //thing to check if input value is books
    let inputSearchForBooks = document.createElement("input");
    inputSearchForBooks.setAttribute("list", "searchPro");
    window.scrollTo("200", "1150"); //setting the scroll to the exact input for search collection
    inputSearchForBooks.setAttribute("id", "searchs");
    let datalistForBokks = document.createElement("datalist"); //creating a dropdown list
    datalistForBokks.setAttribute("id", "searchPro");
    let pElem = document.querySelector("#colList");
    let searchByTitleArr = ["title", "author"]; // array for dropdown value
    for (searchValue of searchByTitleArr) {
      let option = document.createElement("option");
      option.innerText = searchValue;
      datalistForBokks.appendChild(option);
    }
    pElem.appendChild(inputSearchForBooks);
    pElem.appendChild(datalistForBokks);
    document.getElementById("searchs").focus();
    inputSearchForBooks.onchange = () => {
      //setting an event listerner on the input onchange
      let handleSignUpData = JSON.parse(localStorage.getItem("signup"));
      if (inputSearchForBooks.value === "title") {
        //things to dcheck if value is title
        let proForTitle = prompt("please add the title of the book", "");
        //retrieve the bok collections array from the data
        const handleStorageBooksByTitle = JSON.parse(
          localStorage.getItem("bookCollection")
        );
        //getting object of the reserver collection the matches the reserver search
        let founBooksByTitle = handleStorageBooksByTitle.filter(
          booksByTitle => booksByTitle.Title
        );
        //getting the exact title from the object
        let mapedTitledBook = founBooksByTitle.map(title => title.Title);
        // console.log(mapedTitledBook);
        if (mapedTitledBook.includes(proForTitle)) {
          console.log(mapedTitledBook);
          console.log(founBooksByTitle);
          let nameData = handleSignUpData.filter(
            user =>
              `${user.fname + " " + user.lname}` ===
              JSON.parse(localStorage.getItem("loggerName"))
          );

          for (userObject of nameData) {
            //find object of the renewer
            userObjectIndex = handleSignUpData.findIndex(
              userObjectIndex => userObjectIndex === userObject
            );
            console.log(userObjectIndex);
          }

          if (handleSignUpData[userObjectIndex]) {
            handleSignUpData[userObjectIndex].id = reserveBookKey; //update the reserver id with the generated key
            handleSignUpData[userObjectIndex].reserveBook.push(
              //updating the reserver array for with the collection reserved
              `${proForTitle}`
            );
            alert(
              `you have successfully reserve '${proForTitle}' Your reserve key is : ${reserveBookKey}`
            );
            //splicing the reserve object and replacing with the recent update
            handleSignUpData.splice(
              handleSignUpData[userObjectIndex],
              1,
              handleSignUpData[userObjectIndex]
            );
            localStorage.setItem("signup", JSON.stringify(handleSignUpData)); //updating the data with the recent change
            console.log(handleSignUpData);
            return false;
          } else {
            return false;
          }
        }
      } else if (inputSearchForBooks.value === "author") {
        let proForAuthor = prompt("add Author of the book", ""); //input for author name
        let handleTable = document.createElement("table");
        handleTable.setAttribute("id", "tbl");
        let handleThead = document.createElement("thead");
        let handleTableBody = document.createElement("body");
        let ArrayForAuthorAndTitle = []; //declaring and array for authors name and title only
        const handleBooksByAuthor = JSON.parse(
          //get the collection from storage
          localStorage.getItem("bookCollection")
        );
        let retrieveBooksByAuthor = handleBooksByAuthor.filter(
          //filtering books by the author
          authors => authors.Author === proForAuthor
        );
        let rowsForHead = document.createElement("tr"); //crete rows
        let bookObjKeys, bookObjValues;
        for (values of retrieveBooksByAuthor) {
          //getting the values of the array
          let objectForTitleAndAuthor = {};
          let Author = values.Author; //got the authors name
          let Title = values.Title; //got the book title
          Object.assign(objectForTitleAndAuthor, {
            Author,
            Title
          });
          ArrayForAuthorAndTitle.push(objectForTitleAndAuthor); //pushing the object into an array
          console.log(ArrayForAuthorAndTitle);
        }
        ArrayForAuthorAndTitle.map(key => {
          bookObjKeys = Object.keys(key); //getting keys of the object
        });
        bookObjKeys.map(keys => {
          let tableHeading = document.createElement("th"); //create tableheading
          tableHeading.innerText = keys; //assigning keys to table headings
          rowsForHead.appendChild(tableHeading);
        });
        handleThead.appendChild(rowsForHead);
        handleTable.appendChild(handleThead);
        ArrayForAuthorAndTitle.map(bookProperties => {
          let rowsForBody = document.createElement("tr"); //create rows
          rowsForBody.setAttribute("display", "flex"); //set styles
          rowsForBody.setAttribute("justify-content", "space-between");
          let tdForTitle = document.createElement("td"); // table data
          let tdForAuthor = document.createElement("td"); // table data
          let a = document.createElement("a"); // create link
          a.setAttribute("href", "#");
          a.innerText = bookProperties["Title"]; //assign titles to aElment
          tdForAuthor.innerText = bookProperties["Author"];
          tdForTitle.appendChild(a);
          rowsForBody.appendChild(tdForAuthor);
          rowsForBody.appendChild(tdForTitle);
          handleTableBody.appendChild(rowsForBody);
          a.addEventListener("click", subscribeBook); //adding an event for title
        });
        handleTable.appendChild(handleTableBody);
        if (handleTable) {
          $("#table").show();
          document.getElementById("table").appendChild(handleTable);
          document.getElementById("table").style.width = "50.7%";
          $("#btns").val("click.remove table");
          $("#btns").css("color", "red");
          $("#btns").click(() => {
            $("#table").hide();
            $("#btns").val("submit");
            $("#btns").css("color", "#fff");
          });
          // console.log(handleTable);
        }
        return false;
      }
    };
  } else if (this.value === "Newspaper") {
    alert(true);
  }
}

function subscribeBook() {
  //call back function on the titles
  const handleSignUpData = JSON.parse(localStorage.getItem("signup"));
  let nameData = handleSignUpData.filter(
    user =>
      `${user.fname + " " + user.lname}` ===
      JSON.parse(localStorage.getItem("loggerName"))
  );

  for (userObject of nameData) {
    userObjectIndex = handleSignUpData.findIndex(
      userObjectIndex => userObjectIndex === userObject
    );
    console.log(userObjectIndex);
  }

  if (handleSignUpData[userObjectIndex]) {
    handleSignUpData[userObjectIndex].id = `${generateString()}`;
    handleSignUpData[userObjectIndex].reserveBook.push(`${this.innerText}`);
    alert(
      `you have successfully reserve '${
        this.innerText
      }' Your reserve key is : ${generateString()}`
    );
    $("#table").hide();
    $("#btns").val("submit");
    $("#btns").css("color", "#fff");
    handleSignUpData.splice(
      handleSignUpData[userObjectIndex],
      1,
      handleSignUpData[userObjectIndex]
    );
    localStorage.setItem("signup", JSON.stringify(handleSignUpData));
    console.log(handleSignUpData);
    return false;
  }
}

const useLibraryServices = () => {
  let res = $(".lin a").toArray();
  for (v of res) {
    v.addEventListener("click", librayServices);
  }
};
useLibraryServices();

let systemAvailable = 3;
function librayServices() {
  const handleSignUpData = JSON.parse(localStorage.getItem("signup"));
  if (this.innerText === "use the library computer") {
    let arrayForSystemReserver = [];
    let proForName = prompt("add your full name", "");
    let form = document.createElement("form");
    form.style.display = "none";
    form.setAttribute("width", "100vw");
    form.setAttribute("height", "100vh");
    let button = document.createElement("button");
    button.innerText = "submit";
    let timeInput = document.createElement("input");
    timeInput.setAttribute("type", "time");
    if (proForName) {
      if (proForName === JSON.parse(localStorage.getItem("loggerName"))) {
        form.style.display = "block";
        form.appendChild(timeInput);
        form.appendChild(button);
        $("#table").append(form);
        if ($("#table")) {
          form.onsubmit = () => {
            let timeValue = timeInput.value;
            if (timeValue === "" || null) {
              alert("please add time");
              timeInput.focus();
              return;
            }
            //things to do here? filter through arrayForSystemReserver and check if the user already had reserved the library computer
            alert(timeInput.value);
            console.log(arrayForSystemReserver);
            if (systemAvailable > 0) {
              systemAvailable = systemAvailable - 1;
              arrayForSystemReserver.push({
                proForName,
                timeValue
              });
              console.log(`${systemAvailable} remaining`);
              return;
            } else {
              alert(
                `${proForName.toUpperCase()} sorry no system is available for now. thanks`
              );
            }
          };
        } else {
          return;
        }
      }
    }
  } else if (this.innerText === "sumarize a book") {
    location.href = "summaryBooks.html";
  }
}
