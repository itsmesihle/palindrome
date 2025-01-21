const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  //consts
  const userInput = textInput.value.trim();
  const validInput = inputValue.replace(/[^a-zA-Z0-9]/g, "");
  const toLowerCase = validInput.toLowerCase();
  const reversedValue = lowercasedValue.split("").reverse().join("");

  if (userInput === "") {
    alert("Please input a value");
  } else {
    if (toLowerCase === reversedValue) {
      result.innerText = `${userInput} is a palindrome`;
    } else if (toLowerCase !== reversedValue) {
      result.innerText = `${userInput} is a palindrome`;
    }
  }
});

//fix parameter for input
