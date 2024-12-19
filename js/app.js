const inputs = document.querySelectorAll(".input1");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input1) => {
  input1.addEventListener("focus", focusFunc);
  input1.addEventListener("blur", blurFunc);
});
