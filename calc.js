//variables for buttons 
//numbers

// const numButtons = {};
// for (let i=0; i<=9; i++){
//     numButtons[`num${i}`] = document.getElementById(`num${i}`);
// }
// console.log(numButtons);

const num0 = document.getElementById("num0");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");

//display 
const display = document.getElementById("display");
display.value = "";

//symbols
const plus = document.getElementById("plus");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const minus = document.getElementById("minus");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");


//calculator functionality with event listeners for all

function displayNum(value){ //append value to display
    let num = value.textContent; //get value of button
    //add button pressed to display screen
    display.value += `${num}`;
}

function calcEqual(operT, displayString){
    let total = 0;
    let splitArr  = displayString.split(operT).map(Number);
    let numb1 = splitArr[0];
    let numb2 = splitArr[1];
    if(operator === "+"){
        total = numb1 + numb2;
    }else if(operator === "-"){
        total = numb1 - numb2;
    }else if(operator === "x"){
        total = numb1 * numb2;
    }else if(operator === "/"){
        total = numb1 / numb2;
    }else{
        total = "error";
    }
    display.value = total;
}

//numbers to screen
num0.addEventListener("click", () => {displayNum(num0)});
num1.addEventListener("click", () => {displayNum(num1)});
num2.addEventListener("click", () => {displayNum(num2)});
num3.addEventListener("click", () => {displayNum(num3)});
num4.addEventListener("click", () => {displayNum(num4)});
num5.addEventListener("click", () => {displayNum(num5)});
num6.addEventListener("click", () => {displayNum(num6)});
num7.addEventListener("click", () => {displayNum(num7)});
num8.addEventListener("click", () => {displayNum(num8)});
num9.addEventListener("click", () => {displayNum(num9)});

//symbols
let operator = "";
plus.addEventListener("click", () => {
    displayNum(plus);
    operator = "+";
});
minus.addEventListener("click", () => {
    displayNum(minus);
    operator = "-";
});
divide.addEventListener("click", () => {
    displayNum(divide);
    operator = "/";
});
multiply.addEventListener("click", () => {
    displayNum(multiply);
    operator = "x";
});
equal.addEventListener("click", () => {
    calcEqual(operator,display.value)
});


//clear display
clear.addEventListener('click', () => {display.value = ""});