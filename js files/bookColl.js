let rIndex,
  table = document.getElementById("table");
let input = {};
let arrForBook = [];
let strorageData = JSON.parse(localStorage.getItem("bookCollection"));
let tbody = document.querySelector("#tbody");
document.addEventListener("DOMContentLoaded", load);
//creating date object
let now = new Date();
//extracting the time info.
let sec = now.getSeconds();
let mn = now.getMinutes();
let hh = now.getHours();
//let ms = now.getMilliseconds();
// setting default greeting
let hi = "Good Morning";
// seting welcome note if after 11 pm

if (hh > 11) hi = "Good Afernoon";
//seting welcome note if after 17 pm

if (hh > 17) hi = "Good Evening";
//displaying the welcome note withthe present time nd month
let time = hi + "\n";
time += "Hours:" + hh + "\n";
time += " Minutes:" + mn + "\n";
time += "seconds:" + sec + "\n";
// alert(time);
const addTableRow = () => {
  //geting the input.values
  let Author = document.forms.Book.Author.value,
    Title = document.forms.Book.Title.value,
    Isbn = document.forms.Book.Isbn.value,
    Year_of_Publication = document.forms.Book.Year_of_Publication.value,
    Place_of_Publication = document.forms.Book.Place_of_Publication.value,
    Number_of_Title = document.forms.Book.Number_of_Title.value,
    Class_Number = document.forms.Book.Class_Number.value,
    Edition = document.forms.Book.Edition.value;

  //validation of form
  if (Author === "") {
    alert("please fill in Author box");
    document.getElementById("Author").focus();
    return false;
  } else if (Title === "") {
    alert("please fill in Title box");
    document.getElementById("Title").focus();
    return false;
  } else if (Isbn === "") {
    alert("please fill in Isbn box");
    document.getElementById("Isbn").focus();
    return false;
  } else if (Year_of_Publication === "") {
    alert("please fill in Year_of_Publication box");
    document.getElementById("Year_of_Publication").focus();
    return false;
  } else if (Place_of_Publication === "") {
    alert("please fill in Place_of_Publication box");
    document.getElementById("Year_of_Publication").fucos();
    return false;
  } else if (Number_of_Title === "") {
    alert("please fill in Number_of_Title box");
    document.getElementById("Number_of_Title").focus();
    return false;
  } else if (Class_Number === "") {
    alert("please fill in Class_Number box");
    document.getElementById("Class_Number").focus();
  } else if (Edition === "") {
    alert("please fill in Edition box");
    document.getElementById("Edition").focus();
    return false;
  }
  //inserting cell to the table row
  let newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3),
    cell5 = newRow.insertCell(4),
    cell6 = newRow.insertCell(5),
    cell7 = newRow.insertCell(6),
    cell8 = newRow.insertCell(7);
  (cell1.innerHTML = Author),
    (cell2.innerHTML = Title),
    (cell3.innerHTML = Isbn),
    (cell4.innerHTML = Year_of_Publication),
    (cell5.innerHTML = Place_of_Publication),
    (cell6.innerHTML = Number_of_Title),
    (cell7.innerHTML = Class_Number),
    (cell8.innerHTML = Edition);
  //initialize form input
  input = {
    Author,
    Title,
    Isbn,
    Year_of_Publication,
    Place_of_Publication,
    Number_of_Title,
    Class_Number,
    Edition,
  };
  //   arrForBook.push(input);
  console.log(arrForBook);
  console.log(input);
  document.querySelector("form").reset();
  selectionRowToInput();
};
//adding a click event to the table to look out for rows edit or remove
const selectionRowToInput = () => {
  let table = document.getElementById("table");
  for (let i = 0; i < table.rows.length; i++) {
    document.getElementById("number of books").innerHTML =
      "Number Of Collections is :" + Object.keys(strorageData).length;
    +" " + Object.keys(strorageData).length;
    console.log(table.rows.length);
    table.rows[i].onclick = function () {
      rIndex = this.rowIndex;
      console.log(rIndex);
      document.forms.Book.Author.value = this.cells[0].innerHTML;
      document.forms.Book.Title.value = this.cells[1].innerHTML;
      document.forms.Book.Isbn.value = this.cells[2].innerHTML;
      document.forms.Book.Year_of_Publication.value = this.cells[3].innerHTML;
      document.forms.Book.Place_of_Publication.value = this.cells[4].innerHTML;
      document.forms.Book.Number_of_Title.value = this.cells[5].innerHTML;
      document.forms.Book.Class_Number.value = this.cells[6].innerHTML;
      document.forms.Book.Edition.value = this.cells[7].innerHTML;
    };
  }
};
selectionRowToInput();

const editTableRow = () => {
  let Author = document.forms.Book.Author.value,
    Title = document.forms.Book.Title.value,
    Isbn = document.forms.Book.Isbn.value,
    Year_of_Publication = document.forms.Book.Year_of_Publication.value,
    Place_of_Publication = document.forms.Book.Place_of_Publication.value,
    Number_of_Title = document.forms.Book.Number_of_Title.value,
    Class_Number = document.forms.Book.Class_Number.value,
    Edition = document.forms.Book.Edition.value;

  table.rows[rIndex].cells[0].innerHTML = Author;
  table.rows[rIndex].cells[1].innerHTML = Title;
  table.rows[rIndex].cells[2].innerHTML = Isbn;
  table.rows[rIndex].cells[3].innerHTML = Year_of_Publication;
  table.rows[rIndex].cells[4].innerHTML = Place_of_Publication;
  table.rows[rIndex].cells[5].innerHTML = Number_of_Title;
  table.rows[rIndex].cells[6].innerHTML = Class_Number;
  table.rows[rIndex].cells[7].innerHTML = Edition;

  let tableIndex = rIndex - 1;
  console.log(tableIndex);
  let editedArr = strorageData.splice(tableIndex, 1, {
    Author: Author,
    Title: Title,
    Isbn: Isbn,
    Year_of_Publication: Year_of_Publication,
    Place_of_Publication: Place_of_Publication,
    Number_of_Title: Number_of_Title,
    Class_Number: Class_Number,
    Edition: Edition,
  });
  localStorage.setItem("bookCollection", JSON.stringify(strorageData));
  document.querySelector("form").reset();
};

const save = () => {
  if (rIndex) {
    let check = confirm("Are u sure you want to save datas");
    if (check === true) {
      if (localStorage.getItem("bookCollection") === null) {
        arrForBook.push(input);
        localStorage.setItem("bookCollection", JSON.stringify(arrForBook));
      } else {
        let newBooks = JSON.parse(localStorage.getItem("bookCollection"));
        newBooks.push(input);
        localStorage.setItem("bookCollection", JSON.stringify(newBooks));
      }
      load();
      selectionRowToInput();
      // location.reload();
      document.querySelector("form").reset();
      return false;
    }
  }
};

function load() {
  if (localStorage.getItem("bookCollection")) {
    data = JSON.parse(localStorage.getItem("bookCollection"));
  }
  for (value of data) {
    let tr = table.insertRow();
    for (values in value) {
      let td = tr.insertCell();
      td.innerHTML = value[values];
      tr.appendChild(td);
      tbody.appendChild(tr);
    }
  }
  console.log(table);
  selectionRowToInput();
}
const removeRowTable = () => {
  rIndex && table.deleteRow(rIndex);
  let changes = rIndex - 1;
  rIndex && strorageData.splice(changes, 1);
  localStorage.setItem("bookCollection", JSON.stringify(strorageData));
  location.reload();
};
