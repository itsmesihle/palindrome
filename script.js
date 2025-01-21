const checkBtn = document.getElementById("check-btn");
const inputValue = document.getElementById("text-input");
const resultDisplay = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const inputText = inputValue.value;
  const cleanText = inputText.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  console.log(inputText);

  if (inputText === "") {
    alert("Please input a value");
    return;
  }

  const reversedText = cleanText.split("").reverse().join("");

  if (cleanText === reversedText) {
    resultDisplay.textContent = `${inputText} is a palindrome`;
  } else {
    resultDisplay.textContent = `${inputText} is not a palindrome`;
  }
});
