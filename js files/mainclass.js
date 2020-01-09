let extractedFormValue = decodeURIComponent(window.location.search);
extractedFormValue = extractedFormValue.substring(1);
//creating the load function
loadMainClassFor = formValue => {
  let mainClassMapToRender = [];
  const mainClassValues = mainClasses[formValue];
  console.log(mainClassValues);
  //main class not found
  if (mainClassValues == null) {
    //javascript spread of the whole formValue
    mainClassMapToRender = { ...mainClasses };
  } else {
    mainClassMapToRender[formValue] = mainClassValues;
  }
  renderMainClass(mainClassMapToRender);
};
//passing the search key that is found to load just the found value and load with a list
// and a href and passing the load href substring to another html file // function is in the second page
renderMainClass = mainClassesMapForRendering => {
  const orderedMainClassList = document.getElementById("our-listItem");
  Object.keys(mainClassesMapForRendering).map(mainClass => {
    //setting the values to append in list
    const liElement = document.createElement("li");

    //creating a tag for for created values
    const aElement = document.createElement("a");
    //setting a href for the string to load its substring
    aElement.setAttribute("href", "subclass.html?mainclass=" + mainClass);
    //adjusting the innertext to href the list that is listed
    aElement.innerText = mainClass;
    //malkinf the list item to append href to the values
    liElement.appendChild(aElement);
    //making the values toappend in a list pattern
    orderedMainClassList.appendChild(liElement);
  });
};

// alert(mainClasses["literature and language"]) extracting the sub the array inside the value key
loadMainClassFor(extractedFormValue);

let pause = 3000;
let n = 0;
let imgs = new Array(
  "../www/library image/books images3.png",
  "../www/library image/booksimages2.png",
  "../www/library image/library logo.png",
  "../www/library image/plane book.png"
);
let preload = new Array();
for (let i = 1; i < imgs.length; i++) {
  preload[i] = new Image();
  preload[i].src = imgs;
}
function rotate() {
  document.images.pic.src = imgs[n];
  n == imgs.length - 1 ? (n = 0) : n++;
  setTimeout("rotate()", pause);
}
window.onload = rotate;
