array = [];
// console.log("yes");
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function userSignUp() {
  userData = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    gender: document.getElementById("gender").value,
    dsp: document.getElementById("dsp").value,
    num: document.getElementById("num").value,
    email: document.getElementById("email").value,
    pwrd: document.getElementById("pwrd").value,
    img: []
  };

  if (userData.fname === "") {
    alert("First name must not be left empty");
    document.getElementById("fname").focus();
    return false;
  } else if (isNumeric(userData.fname)) {
    alert("Number is not an option");
    document.getElementById("fname").focus();
    return false;
  } else if (isNumeric(userData.lname)) {
    alert("Number is not an option");
    document.getElementById("lname").focus();
    return false;
  } else if (userData.lname === "") {
    alert("Last name must not be left empty");
    document.getElementById("lname").focus();
    return false;
  } else if (userData.gender === "") {
    alert("Gender must not be left empty");
    document.getElementById("gender").focus();
    return false;
  } else if (isNumeric(userData.gender)) {
    alert("Number is not an option");
    document.getElementById("gender").focus();
    return false;
  } else if (userData.dsp === "") {
    alert("Displine  must not be left empty");
    document.getElementById("dsp").focus();
    return false;
  } else if (isNumeric(userData.dsp)) {
    alert("Numbers is not an option");
    document.getElementById("dsp").focus();
    return false;
  } else if (userData.num === "") {
    alert("Number must not be left empty");
    document.getElementById("num").focus();
    return false;
  } else if (userData.email === "") {
    alert("Email must not be left empty");
    document.getElementById("email").focus();
    return false;
  } else if (!userData.email.includes("@")) {
    alert("input a valid email");
    document.getElementById("email").focus();
    return false;
  } else if (userData.pwrd === "") {
    alert("Password must not be left empty");
    document.getElementById("pwrd").focus();
    return false;
  }
  console.log(userData.num);
  console.log(userData);
  if (localStorage.getItem("signup") === null) {
    array.push(userData);
    localStorage.setItem("signup", JSON.stringify(array));
  } else {
    let array = JSON.parse(localStorage.getItem("signup"));
    array.push(userData);
    localStorage.setItem("signup", JSON.stringify(array));
  }
  let btnHide = document.querySelector("#sub");
  let hide = document.querySelector(".hidden");
  let logHide = document.querySelector("#log");
  hide.style.display = "none";
  btnHide.style.display = "none";
  logHide.style.display = "block";
}

function userLogIn(e) {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pwrd").value;
  let userInfo = JSON.parse(localStorage.getItem("signup"));
  if (email === "") {
    alert("email is empty");
    return false;
  }
  let userObjects = userInfo.filter(v => {
    return v.email.includes(email) && v.pwrd.includes(pass);
  });
  // console.log(userObjects);
  if (userObjects == "" || userObjects == false || userObjects == "") {
    alert("Email or Password incorrect");
    return false;
  } else {
    alert("true");
    let userNames;
    for (a of userObjects) {
      if (a) {
        userNames = `${a.fname} ${a.lname}`;
      }
    }
    console.log(userNames);
    window.location.replace("link.html?userName=" + userNames);
    //location.href = "link.html?userNames=" + userNames;
  }
}

let sig = function() {
  alert("clicked");
  let btnHide = document.querySelector("#sub");
  let hide = document.querySelector(".hidden");
  let logHide = document.querySelector("#log");
  let inputs = document.querySelector(".signup");
  let cont = document.querySelector(".cont");
  let signinForm = document.querySelector("form #signinDisplay");
  let reg = document.getElementById("reg");
  let btnSignin = document.querySelector("#signin");

  console.log(signinForm);
  inputs.style.display = "flex";
  cont.style.position = "relative";
  cont.style.top = "200px";
  cont.style.left = "10%";
  hide.style.display = "none";
  reg.style.display = "none";
  btnSignin.style.display = "none";
  logHide.style.display = "block";
  logHide.style.width = "30%";
  logHide.style.position = "absolute";
  logHide.style.left = "50%";
  logHide.style.top = "45%";
};

document.addEventListener("DOMContentLoaded", load);
function load() {
  // let reg = document.getElementById("reg");
  let inputs = document.querySelector(".signup");
  let btnHide = document.querySelector("#sub");
  let logHide = document.querySelector("#log");

  inputs.style.display = "none";
  btnHide.style.display = "none";
  logHide.style.display = "none";
}

function loadSignUp() {
  let inputs = document.querySelector(".signup");
  let btnHide = document.querySelector("#sub");
  let cont = document.querySelector(".cont");
  let btnSignin = document.querySelector("#signin");
  let reg = document.querySelector("#reg");
  reg.style.display = "none";
  inputs.style.display = "flex";
  cont.style.position = "relative";
  cont.style.top = "20px";
  cont.style.left = "10%";
  btnHide.style.display = "block";
  btnHide.style.position = "absolute";
  btnHide.style.top = "60%";
  btnHide.style.width = "30%";
  btnHide.style.left = "50%";
  btnSignin.style.display = "none";
  btnSignin.style.position = "absolute";
  btnSignin.style.left = "83%";
  // btnSignin.style.alignItem  = 'center';
}
