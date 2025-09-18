const operator = ["+", "-", "x", "÷", "Del","Cal"];
const nums = [0,1,2,3,4,5,6,7,8,9];
const inputPlace = document.getElementById("inputEqua");

let justCalculated = false; // flag để biết có vừa bấm Cal không

const buttons = document.getElementsByClassName("btn");
for (let btn of buttons) {
  btn.addEventListener("click", e => {
    const value = e.target.innerText;

    // Nếu vừa bấm Cal và bấm số → reset trước khi nhập
    if (justCalculated && nums.includes(+value)) {
      inputPlace.value = "";
      justCalculated = false;
    }

    if (nums.includes(+value)) {
      inputPlace.value += value;
    } else if (operator.includes(value)) {
      if (value === "Del") {
        inputPlace.value = inputPlace.value.slice(0, -1);
      } else if (value === "Cal") {
        try {
          handleCal();
          justCalculated = true; // bật cờ sau khi tính toán
        } catch {
          inputPlace.value = "Error";
        }
      } else {
        inputPlace.value += value;
      }
    }
  });
}

const handleCal = () => {
  const checkInput = inputPlace.value;
  const coefficents = [];
  const operations = [];
  let number = "";

  for (let ch of checkInput) {
    if (!isNaN(ch)) {
      number += ch;
    } else if (operator.includes(ch)) {
      coefficents.push(parseFloat(number));
      operations.push(ch);
      number = "";
    }
  }
  if (number) coefficents.push(parseFloat(number));

  let result = coefficents[0];
  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "+": result += coefficents[i+1]; break;
      case "-": result -= coefficents[i+1]; break;
      case "x": result *= coefficents[i+1]; break;
      case "÷": result /= coefficents[i+1]; break;
    }
  }

  inputPlace.value = result;
};
