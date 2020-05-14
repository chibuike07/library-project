document.addEventListener("DOMContentLoaded", load);
let List,
  table = document.querySelector("table");
let tbody = document.getElementById("tbody");
table.addEventListener("click", activateItem);
let userData;
let data = [];
let returnBooks = [];
function add() {
  // getting the input_values
  userData = {
    Name: document.forms.f.name.value.toLowerCase(),
    User_number: document.forms.f.user_number.value.toLowerCase(),
    User_department: document.forms.f.user_department.value.toLowerCase(),
    date: document.forms.f.date.value.toLowerCase(),
    Week_day: document.forms.f.weekday.value.toLowerCase(),
    Author: document.forms.f.author.value.toLowerCase(),
    Title: document.forms.f.title.value.toLowerCase(),
    Isbn: document.forms.f.isbn.value.toLowerCase(),
    Accession_number: document.forms.f.accession_number.value.toLowerCase(),
    Issue_date: document.forms.f.issue_date.value.toLowerCase(),
    Return_day: document.forms.f.return_day.value.toLowerCase(),
    Total_days: document.forms.f.total_days.value.toLowerCase(),
    Added_days: document.forms.f.added_days.value.toLowerCase(),
    Fine: document.forms.f.fine.value.toLowerCase()
  };
  if (userData.Name == "") {
    document.getElementById("N").focus();
    return false;
  } else if (userData.User_number == "") {
    document.getElementById("UN").focus();
    return false;
  } else if (userData.date == "") {
    document.getElementById("D").focus();
    return false;
  } else if (userData.Author == "") {
    document.getElementById("A").focus();
    return false;
  } else if (userData.Accession_number == "") {
    document.getElementById("AN").focus();
    return false;
  } else if (userData.Issue_date == "") {
    document.getElementById("ID").focus();
    return false;
  }
  const row = table.insertRow(table.length);
  (cell1 = row.insertCell(0)),
    (cell2 = row.insertCell(1)),
    (cell3 = row.insertCell(2)),
    (cell4 = row.insertCell(3)),
    (cell5 = row.insertCell(4)),
    (cell6 = row.insertCell(5)),
    (cell7 = row.insertCell(6)),
    (cell8 = row.insertCell(7)),
    (cell9 = row.insertCell(8)),
    (cell10 = row.insertCell(9)),
    (cell11 = row.insertCell(10)),
    (cell12 = row.insertCell(11)),
    (cell13 = row.insertCell(12)),
    (cell14 = row.insertCell(13));

  (cell1.innerHTML = userData.Name),
    (cell2.innerHTML = userData.User_number),
    (cell3.innerHTML = userData.User_department),
    (cell4.innerHTML = userData.date),
    (cell5.innerHTML = userData.Week_day),
    (cell6.innerHTML = userData.Author),
    (cell7.innerHTML = userData.Title),
    (cell8.innerHTML = userData.Isbn),
    (cell9.innerHTML = userData.Accession_number),
    (cell10.innerHTML = userData.Issue_date),
    (cell11.innerHTML = userData.Return_day),
    (cell12.innerHTML = userData.Total_days),
    (cell13.innerHTML = userData.Added_days),
    (cell14.innerHTML = userData.Fine);

  console.log(userData);
  data.push(userData);
  // console.warn("added", data);
  document.getElementById("f").reset();
}

function save() {
  let check = confirm("are sure u want to save this file");
  if (check === true) {
    error = false;
    nmrofdata = Object.keys(data).length;
    try {
      if (localStorage.getItem("collection") === null) {
        localStorage.setItem("collection", JSON.stringify(data));
      } else {
        let newArr = JSON.parse(localStorage.getItem("collection"));
        newArr = [...data];
        localStorage.setItem("collection", JSON.stringify(newArr));
      }
      throw "saved";
    } catch (e) {
      alert(e);
      error = true;
    }
    if (!error) {
      console.log(nmrofdata + " books save");
    }
  } else if (check === false) {
    console.log("fine");
    return false;
  }
  discharge();
  compare();
  location.reload();
}

function load() {
  try {
    if (localStorage.getItem("collection")) {
      data = JSON.parse(localStorage.getItem("collection"));
      throw "loaded";
    }
  } catch (e) {
    // alert(e);
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
  // console.log(tbody);
  // console.log(table)
}

//defining the addEventListener onclick
function activateItem() {
  for (let i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function() {
      List = this.rowIndex;
      console.warn(List);
      document.forms.f.name.value = this.cells[0].innerHTML;
      document.forms.f.user_number.value = this.cells[1].innerHTML;
      document.forms.f.user_department.value = this.cells[2].innerHTML;
      document.forms.f.date.value = this.cells[3].innerHTML;
      document.forms.f.weekday.value = this.cells[4].innerHTML;
      document.forms.f.author.value = this.cells[5].innerHTML;
      document.forms.f.title.value = this.cells[6].innerHTML;
      document.forms.f.isbn.value = this.cells[7].innerHTML;
      document.forms.f.accession_number.value = this.cells[8].innerHTML;
      document.forms.f.issue_date.value = this.cells[9].innerHTML;
      document.forms.f.return_day.value = this.cells[10].innerHTML;
      document.forms.f.total_days.value = this.cells[11].innerHTML;
      document.forms.f.added_days.value = this.cells[12].innerHTML;
      document.forms.f.fine.value = this.cells[13].innerHTML;
    };
  }
}

// editing the click row to set it back to the table
function editTable() {
  // geting the input values
  let Name = document.forms.f.name.value;
  let User_number = document.forms.f.user_number.value;
  User_department = document.forms.f.user_department.value;
  date = document.forms.f.date.value;
  Week_day = document.forms.f.weekday.value;
  Author = document.forms.f.author.value;
  Title = document.forms.f.title.value;
  Isbn = document.forms.f.isbn.value;
  Accession_number = document.forms.f.accession_number.value;
  Issue_date = document.forms.f.issue_date.value;
  Return_day = document.forms.f.return_day.value;
  Total_days = document.forms.f.total_days.value;
  Added_days = document.forms.f.added_days.value;
  Fine = document.forms.f.fine.value;

  //console.log(table.rows[i])
  table.rows[List].cells[0].innerHTML = Name;
  table.rows[List].cells[1].innerHTML = User_number;
  table.rows[List].cells[2].innerHTML = User_department;
  table.rows[List].cells[3].innerHTML = date;
  table.rows[List].cells[4].innerHTML = Week_day;
  table.rows[List].cells[5].innerHTML = Author;
  table.rows[List].cells[6].innerHTML = Title;
  table.rows[List].cells[7].innerHTML = Isbn;
  table.rows[List].cells[8].innerHTML = Accession_number;
  table.rows[List].cells[9].innerHTML = Issue_date;
  table.rows[List].cells[10].innerHTML = Return_day;
  table.rows[List].cells[11].innerHTML = Total_days;
  table.rows[List].cells[12].innerHTML = Added_days;
  table.rows[List].cells[13].innerHTML = Fine;

  let list = List - 1;
  console.log(List);
  let newArr = data.splice(list, 1, {
    Name: Name,
    User_number: User_number,
    User_department: User_department,
    date: date,
    Week_day: Week_day,
    Author: Author,
    Title: Title,
    Isbn: Isbn,
    Accession_number: Accession_number,
    Issue_date: Issue_date,
    Return_day: Return_day,
    Total_days: Total_days,
    Added_days: Added_days,
    Fine: Fine
  });

  // localStorage.setItem("collection", JSON.stringify(arr));
  console.log(data);
}

// removing row in the table
function remove() {
  List && table.deleteRow(List);
  console.warn(List);
  let list = List - 1;
  List && data.splice(list, 1);
  localStorage.setItem("collection", JSON.stringify(data));
}

//create a week function
function week() {
  let date1 = new Date(document.getElementById("ID").value);
  let date2 = new Date(document.getElementById("RD").value);

  let diff;

  if (date1 < date2) {
    diff = new Date(date2 - date1);
  } else {
    diff = new Date(date1 - date2);
  }
  let years = diff.getFullYear() - 1970;
  let months = diff.getMonth();
  let days = diff.getDate();
  console.log(days);

  let yearTxt = "year";
  let monthTxt = "month";
  let dayTxt = "day";

  if (years > 1) yearTxt += "s";
  if (months > 1) monthTxt += "s";
  if (days > 1) dayTxt += "s";

  if (days >= 0) {
    document.forms.f.total_days.value = days;
    TML =
      years +
      " " +
      yearTxt +
      ", " +
      months +
      " " +
      monthTxt +
      ", " +
      days +
      " " +
      dayTxt;
  } else {
    document.forms.f.total_days.value = "Equal dates";
  }

  if (document.forms.f.total_days.value > 7) {
    document.forms.f.added_days.value =
      parseFloat(document.forms.f.total_days.value) - 7;
  } else {
    document.forms.f.added_days.value = 0;
  }
  if (document.forms.f.added_days.value > 0) {
    document.forms.f.fine.value = 100 * document.forms.f.added_days.value;
  } else {
    document.forms.f.fine.value = 0;
  }
}

//initilizing dates
let date = new Date();
let monthname = new Array(
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
);
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
// document.getElementById("demo").innerHTML = "Today is " + day[date.getDay()];
document.forms.f.date.value =
  monthname[date.getMonth()] + "/" + date.getDate() + "/" + date.getFullYear();
document.forms.f.weekday.value = day[date.getDay()];
//initailizing input

function filter() {
  //how to filter tru a list item with with a href
  var input, filter, table, tr, td, txtValue;
  input = document.getElementById("userFil");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// let menuImg = document.getElementById("menu");
// let aGroup = document.querySelector(".agroup");
// menuImg.addEventListener("click", menu);
// function menu() {
//   if (aGroup.style.display == "none") {
//     aGroup.style.display = "block";
//   } else {
//     aGroup.style.display = "none";
//   }
// }
// let guide = document.getElementById("manual");
// guide.addEventListener("click", manual);
// function manual() {
//   let displays = document.querySelector(".manual");
//   let cite = document.getElementById("cite");
//   if (displays.style.display == "none") {
//     displays.style.display = "block";
//   } else {
//     displays.style.display = "none";
//   }
//   cite.innerText =
//     "instruction to filling of collection data. Fill the following empty boxes except; Total_days, Added_days, and Fine. After filling correctly first hit the check button and then submit your datas";
// }

// let staff = document
//   .getElementById("staff")
//   .addEventListener("click", staffRecord);
// function staffRecord() {
//   let storageData = JSON.parse(localStorage.getItem("signup"));
//   let userNotStudent = storageData.filter(gen => {
//     return gen.dsp !== "student";
//   });

//   userNotStudent.filter(function(name) {
//     console.log(name.fname + " " + name.lname);
//   });
// }
// let mem = document.getElementById("mem").addEventListener("click", studentList);
// function studentList() {
//   alert("yes");
//   let storageData = JSON.parse(localStorage.getItem("signup"));
//   let userThatIsStudent = storageData.filter(stu => {
//     return stu.dsp === "student";
//   });

//   userThatIsStudent.filter(function(name) {
//     console.log(name.fname + " " + name.lname);
//   });
// }

function booksHaveReturned(value) {
  return !value.Return_day == "";
}
function booksNotReturned(value) {
  return value.Return_day == "";
}
// document.getElementById("disc").addEventListener("click", discharge);
function discharge() {
  let storageData = JSON.parse(localStorage.getItem("collection"));
  let haveNotReturn = storageData.filter(booksHaveReturned);
  for (datas in haveNotReturn) {
    // console.log(datas)
    returnBooks.push(haveNotReturn[datas]);
  }
  if (localStorage.getItem("return books") === null) {
    localStorage.setItem("return books", JSON.stringify(returnBooks));
    return true;
  } else {
    newlyReturnedBooks = JSON.parse(localStorage.getItem("return books"));
    newlyReturnedBooks = [...haveNotReturn];
    localStorage.setItem("return books", JSON.stringify(newlyReturnedBooks));
    return true;
  }
}
function compare() {
  let storageData = JSON.parse(localStorage.getItem("collection"));
  let returnedbooks = JSON.parse(localStorage.getItem("return books"));
  let filteredReturnedBooks = returnedbooks.filter(booksHaveReturned);
  let notInCatalogue = storageData.filter(booksNotReturned);
  console.log(filteredReturnedBooks);
  console.log(notInCatalogue);
  localStorage.setItem("collection", JSON.stringify(notInCatalogue));
}
compare();
