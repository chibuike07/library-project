let txtA = document.querySelector("#txtA");
let UserUpload = document.querySelector("form img");
let arr = [];
let pDiv = document.querySelector(".disc");
function libCom() {
  let div = document.createElement("div");
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  li.innerText = txtA.value;
  ul.appendChild(li);
  div.appendChild(ul);
  pDiv.appendChild(div);
  document.querySelector("form").reset();
}
