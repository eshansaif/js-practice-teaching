document.getElementById("checkBtn").addEventListener("click", () => {
  const textField = document.getElementById("numTextField");
  const textFieldNumber = textField.value;
  try {
    if (textFieldNumber < 5) {
      throw "your digit is too low";
    } else if (textFieldNumber > 10) {
      throw "your digit too high";
    }
  } catch (error) {
    console.log(error);
  }
  const displayDiv = document.getElementById("display-div");
  const p = document.createElement("p");
  p.innerText = textField.value;
  displayDiv.appendChild(p);
  textField.value = "";
});
