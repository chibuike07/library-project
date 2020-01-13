let txtA = document.querySelector("#txtA");
let UserUpload = document.querySelector("form img");
let arr = ["upload image", "summarize a book", "threads"];
let pDiv = document.querySelector(".disc");
let ulId = document.querySelector(".menu ul");

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

function menuBar() {
  let menuBar = document.querySelector(".line-bars");
  let menuUl = document.querySelector(".menu ul");
  let menuUlLIst = document.querySelector(".menu li");
  menuBar.onclick = () => {
    if (menuUl.style.display == "none") {
      menuUl.style.display = "block";
      menuUl.style.zIndex = "3";
    } else {
      menuUl.style.display = "none";
    }
  };
  function ulChildren() {
    for (val of arr) {
      let liEle = document.createElement("li");
      liEle.innerText = val;
      liEle.addEventListener("click", lst);
      ulId.appendChild(liEle);
    }
    console.log(ulId);
    function lst() {
      if (this.innerText == arr[0]) {
        let pEle = document.createElement("p");
        let inp = document.createElement("input");
        inp.setAttribute("type", "file");
        inp.setAttribute("accept", "image/*");
        inp.setAttribute("name", "image");
        inp.setAttribute("id", "file");
        let pLabel = document.createElement("p");
        let label = document.createElement("label");
        label.setAttribute("for", "file");
        label.style.cursor = "pointer";
        label.innerText = "upload image";
        console.log(label);
        pLabel.appendChild(label);
        document.querySelector("#ul").appendChild(inp);
      } else if (this.innerText == arr[1]) {
        let form = document.createElement("form");
        let textArea = document.createElement("textarea");
        let button = document.createElement("button");
        button.setAttribute("type", "submit");
        button.innerText = "submit";
        form.appendChild(textArea);
        form.appendChild(button);
        form.style.zIndex = '-3'
        document.querySelector(".userTexHolder").appendChild(form);

        console.log(form);
      }
      let inpId = document.getElementById("file");
      inpId.onclick = event => {
        let image = document.createElement("img");
        image.style.width = "200px";
        let pHolder = document.createElement("p");
        image.src = URL.createObjectURL(event.target.files[0]);
        pHolder.append(image);
        document.querySelector(".userTexHolder").appendChild(pHolder);
      };
    }
  }
  ulChildren();
}
menuBar();
