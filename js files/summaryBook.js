let p = document.getElementById("txt");
let spanWod = document.getElementById("wods");
let spanLet = document.getElementById("let");
let textarea = document.querySelector("textarea");
let input = document.getElementById("tex");
let texObj = {};
let texArray = [];
// let inp;
function countWord() {
  let specifiedCount = document.getElementById("specified");
  let holdWodCount = input.value.trim().split(/\s+/g);
  let holdLetCount = input.value.trim().split(/\s*/g);
  p.innerText = `${input.value}`;
  spanWod.innerText = `word count => ${holdWodCount.length}`;
  spanLet.innerText = ` character count => ${holdLetCount.length}`;
  input.onkeyup = e => {
    if (e.keyCode == 13) {
      e.preventDefault();
    }
  };
  input.onkeypress = e => {
    if (holdWodCount.length % 4 == 0) {
      if (e.keyCode == 32) {
        e.preventDefault();
        input.value += "\n";
        //holdWodCount = ''
      }
    }

    //   input.onkeydown = function(e) {
    //     if (e.keyCode == 13 && !e.shiftKey) {
    //       e.preventDefault();
    //       input.value.length + 1 == '\n'
    //     }
    //   };
    // input.value = `${a}\n`
    // input.value.splice()
  };

  if (input.value.trim().split(/\s+/g).length % specifiedCount.innerText == 0) {
    let c = confirm("continue writing");
    if (c == true) {
      input.readOnly = false;
    } else {
      input.readOnly = true;
      input.value == "";
    }
    // input.readOnly = true;
  }
}
let specifiedCou = document.getElementById("specified");
document.addEventListener("DOMContentLoaded", function() {
  spanWod.innerText = "word count =>";
  spanLet.innerText = "character count =>";
  specifiedCou.innerText = 15;
});
let dropDown = document.querySelector("header .men");
let list = document.querySelector("header .list");
list.style.color = "purple";

dropDown.addEventListener("click", () => {
  list.classList.toggle("list");
  list.style.backgroundColor = "white";
  list.style.padding = "2%";
  list.style.height = "40vh";
  list.style.lineHeight = "3";
  list.style.position = "absolute";
  list.style.zIndex = "3";
});

let lw = document.getElementById("lw");
lw.onclick = () => {
  inp = document.createElement("input");
  inp.setAttribute("type", "number");
  inp.setAttribute("id", "inpu");
  inp.placeholder = "add word length";
  inp.value = 15;
  inp.style.position = "absolute";
  inp.style.left = "100%";
  inp.style.top = "5%";
  inp.style.height = "5vh";
  list.appendChild(inp);
  let inpu = document.getElementById("inpu");
  if (inpu.style.display === "block") {
    inpu.style.display = "none";
  } else {
    inpu.style.display = "block";
  }
  let specifiedCount = document.getElementById("specified");
  inp.oninput = () => {
    specifiedCount.innerText = inp.value;
  };
};

let bc = document.getElementById("bc");
let screen = document.querySelector(".all-cont");
bc.onclick = () => {
  let inpBc = document.createElement("input");
  inpBc.setAttribute("type", "text");
  inpBc.setAttribute("id", "inpuBc");
  inpBc.placeholder = "change the screen color";
  inpBc.style.position = "absolute";
  inpBc.style.left = "100%";
  inpBc.style.top = "20%";
  inpBc.style.height = "5vh";
  list.appendChild(inpBc);
  let inpBcolor = document.getElementById("inpuBc");
  if (inpBcolor.style.display === "block") {
    inpBcolor.style.display = "none";
  } else {
    inpBcolor.style.display = "block";
  }
  inpBc.oninput = () => {
    screen.style.backgroundColor = inpBc.value;
    list.style.color = inpBc.value;
    input.classList.toggle("list");
  };
};

let fs = document.getElementById("sf");
fs.onclick = () => {
  let inpFs = document.createElement("input");
  inpFs.setAttribute("type", "number");
  inpFs.setAttribute("id", "inpuFs");
  inpFs.placeholder = "change font size";
  inpFs.style.position = "absolute";
  inpFs.style.left = "100%";
  inpFs.style.top = "35%";
  inpFs.style.height = "5vh";
  list.appendChild(inpFs);

  let inpFsize = document.getElementById("inpuFs");
  if (inpFsize.style.display === "block") {
    inpFsize.style.display = "none";
  } else {
    inpFsize.style.display = "block";
  }
  inpFs.oninput = () => {
    p.style.fontSize = inpFs.value + "px";
  };
};

let saveText = document.getElementById("st");
// let texArray = [];
saveText.onclick = () => {
  let texObj = {
    text: textarea.value
  };
  alert("yes");
  texArray.push(texObj);
  console.log(texObj);
  console.log(texArray);

  if (localStorage.getItem("savedTex") === null) {
    texArray.push(texObj);
    localStorage.setItem("savedTex", JSON.stringify(texArray));
  } else {
    let newTex = JSON.parse(localStorage.getItem("savedTex"));
    newTex = [...texObj];
    localStorage.setItem("savedTex", JSON.stringify(newTex));
    console.warn(texArray);
  }
};
