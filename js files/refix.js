let joi = document.getElementById("join");
let ren = document.getElementById("ren");
let onl = document.getElementById("onl");
let navImg = document.getElementById("img");
joi.onmouseover = () => {
  navImg.src = imageArr[0];
};
ren.onmouseover = () => {
  navImg.src = imageArr[1];
};
onl.onmouseover = () => {
  navImg.src = imageArr[2];
};
let servImg = document.getElementById("serv");
// servImg.src = keyArray[len];
let int = document.getElementById("int");
let pri = document.getElementById("pri");
let sca = document.getElementById("sca");
let res = document.getElementById("res");
let wi_fi = document.getElementById("wi-fi");

int.onmouseover = function() {
  servImg.src = keyArray[0];
};
pri.onmouseover = function() {
  servImg.src = keyArray[1];
};
sca.onmouseover = function() {
  servImg.src = keyArray[2];
};
res.onmouseover = function() {
  servImg.src = keyArray[3];
};
wi_fi.onmouseover = function() {
  servImg.src = keyArray[4];
};
document.addEventListener("DOMContentLoaded", () => {
  servImg.src = keyArray[0];
});

// let LinkMemb = document.getElementById('memb');
$("#memb").click(function() {
  alert("clicked");
  $(".all-cont").load("mem.html");
});

$("#ren").click(function() {
  alert("am ren");
});
document.addEventListener("DOMContentLoaded", () => {
  // let interv = setInterval(vistedMem, 5000);
  let count = 0;
  let week = new Date();
  function vistedMem() {
    count++;
    if (localStorage.getItem("visitedMem") === null) {
      localStorage.setItem("visitedMem", JSON.stringify(count));
    } else {
      let array = JSON.parse(localStorage.getItem("visitedMem"));
      array += count;
      localStorage.setItem("visitedMem", JSON.stringify(array));
      console.log(day[week.getDay()], array);
    }
    // clearInterval(interv);
  }
  $(".sta").click(() => {
    alert("click");
    let storageD = JSON.parse(localStorage.getItem("signup"));
    function memCo() {
      let memLen = `Total number of members is ${storageD.length}`;
      console.log(memLen);
    }
    memCo();
    function studCo() {
      let studLen = storageD.filter(n => n.dsp === "student");
      console.log("number of student is " + studLen.length);
    }
    studCo();
    let notSchMem = () => {
      let nSchMem = storageD.filter(
        n => n.dsp !== "student" && n.dsp !== "staff"
      );
      console.log("Number of users are " + nSchMem.length);
    };
    notSchMem();

    let cou = () => {
      let visitedMem = JSON.parse(localStorage.getItem("visitedMem"));
      let citedMem = `${visitedMem} people visited our page`;
      console.log(citedMem);
    };
    cou();
  });
  $(".hel").click(() => {
    alert("click");
    // let hel = document.querySelector(".hel a");
    let inp = document.createElement("input");
    inp.setAttribute("list", "help");
    let dataList = document.createElement("datalist");
    dataList.setAttribute("id", "help");
    option.map(values => {
      let options = document.createElement("option");
      options.value = values;
      dataList.appendChild(options);
    });
    console.log(dataList);
    console.log(inp);
    let a = document.createElement("a");
  });
  $("#rc").click(function() {
    alert("yes");
    $(".all-cont").load("unichris library.html");
    // location.replace("unichris library.html");
  });
});
