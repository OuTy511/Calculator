const display = document.getElementById("display");
const numbers = document.getElementsByClassName("number");
const signs = document.getElementsByClassName("sign");

const dot = document.querySelector('[value="."]');
const percent = document.querySelector('[value="per"]');
const equal = document.querySelector('[value="equal"]');

let value = "";

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    let button = numbers[i].getAttribute("value");

    display.innerHTML += button;
    value += button;
    value = parseFloat(value);
  });
}

for (let i = 0; i < signs.length; i++) {
  signs[i].addEventListener("click", () => {
    let button = signs[i].getAttribute("value");

    if (
      !isNaN(parseInt(display.innerHTML.charAt(display.innerHTML.length - 1)))
    ) {
      switch (button) {
        case "divide":
          display.innerHTML += ` / `;
          value = 0;
          break;
        case "multiply":
          display.innerHTML += ` * `;
          value = 0;
          break;
        case "minus":
          display.innerHTML += ` - `;
          value = 0;
          break;
        case "plus":
          display.innerHTML += ` + `;
          value = 0;
          break;
      }
    }
  });
}

dot.addEventListener("click", () => {
  if (
    !value.toString().includes(".") &&
    display.innerHTML.charAt(display.innerHTML.length - 1) != "."
  ) {
    display.innerHTML += ".";
  }
});

percent.addEventListener("click", () => {
  value = parseFloat(value);
  display.innerHTML = display.innerHTML.replace(value, value / 100);
  value = +display.innerHTML;
});

equal.addEventListener("click", () => {
  display.innerHTML = eval(display.innerHTML);
});
