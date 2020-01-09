function showDate() {
  let time = document.getElementById("time");
  time.innerHTML = Date();
}

function clearDate() {
  let time = document.getElementById("time");
  time.innerHTML = "";
}

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
  let str = formValue;
  let result = str.link("subclass.html ");
  let queryString = "?<h3>" + result + "</h3><br>";
  window.location.href = "main class.html?" + formValue;
};
