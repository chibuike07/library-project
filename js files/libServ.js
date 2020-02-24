let tranferedForm = decodeURIComponent(window.location.search);
tranferedForm = tranferedForm.substr(1);

const input = input => {
  let form = document.querySelector("form");
  let inputSplit = input.split(" ");
  let firstInput = `${inputSplit[1]} ${inputSplit[2]}`;
  let secondInput = `${inputSplit[3]} ${inputSplit[4]}`;

  form.appendChild(input);
//   console.log(form);
};
input(tranferedForm);

// form.appendChild(split[1]);
