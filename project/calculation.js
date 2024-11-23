const display = document.querySelector(".display");

let appendtodisplay = (input) => {
  display.value += input;
};

let clearDisplay = () => {
  display.value = "";
};

let calculate = () => {
  display.value = eval(display.value);
};
