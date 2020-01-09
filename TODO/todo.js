document.addEventListener("DOMContentLoaded", function() {
  let time = new Date().toLocaleTimeString();
  let form = document.querySelector("form input");
  let btn = document.querySelector("form button");
  let date1 = document.querySelector("#dat");
  let em = document.querySelector("em");
  let div = document.querySelector("div");
  em.innerText = time;
  btn.onclick = () => {
    let taskObj = [
      {
        date: date1.value,
        time: new Date().toLocaleTimeString(),
        task: document.querySelector("form input").value
      }
    ];
    console.log(taskObj);
  };
});
function taskAs() {
  let empArr = [];
  let arr = [
    "wakeup",
    "say your prayers",
    "brush your teeth",
    "take your path",
    "go to work",
    "time to eat",
    "your school project",
    "resting time"
  ];
  let time = new Date();
  let hh = time.getHours();
  let mm = time.getMinutes();
  if (hh == 23) {
    for (a of arr) {
      empArr.push(a);
    }
    if (mm == 25) {
      console.log(empArr[0]);
      return false;
    } else if (mm == 27) {
      console.log(empArr[1]);
      return false;
    } else if (mm == 29) {
      console.log(empArr[2]);
      return false;
    } else if (mm == 31) {
      console.log(empArr[3]);
      return false;
    } else if (mm == 33) {
      console.log(empArr[4]);
      return false;
    } else if (mm == 35) {
      console.log(empArr[5]);
      return false;
    } else if (mm == 55) {
      let f = new SpeechSynthesisUtterance(empArr);
      speechSynthesis.speak(f);
      console.log(empArr[5]);
      return false;
    }
  }
}
// taskAs();
let f = new SpeechSynthesisUtterance("how re u");
speechSynthesis.speak(f);