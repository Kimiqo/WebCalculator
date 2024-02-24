//variables for buttons 
//numbers

const numButtons = {};
for (let i=0; i<=9; i++){
    numButtons[`num${i}`] = document.getElementById(`num${i}`);
}
console.log(numButtons);

//display 
const display = document.getElementById("display");
display.value = "";

//symbols
const plus = document.getElementById("plus");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const minus = document.getElementById("minus");
const equal = document.getElementById("equal");
const decimal = document.getElementById("decimal");
const percent = document.getElementById("percent");
const clear = document.getElementById("clear");


//calculator functionality with event listeners for all

function displayNum(value){ //append value to display
    let num = value.textContent; //get value of button
    //add button pressed to display screen
    display.value += `${num}`;
}

function calcEqual(operT, displayString){
    let total = 0;
    //splitting display content with operator as splitter
    let splitArr  = displayString.split(operT).map(Number);
    let numb1 = splitArr[0]; //first num
    let numb2 = splitArr[1]; //second num
    
    //operator calculations
    if(operT === "+"){
        total = numb1 + numb2;
    }else if(operT === "-"){
        total = numb1 - numb2;
    }else if(operT === "x"){
        total = numb1 * numb2;
    }else if(operT === "/"){
        total = numb1 / numb2;
    }else if(operT === "%"){
        total = numb1/100;
    }

    //checking for Infinity
    if (total === Infinity || total === NaN){
        display.value = "ERROR";
        setTimeout(() => {
            display.value = "";  
        },1000);
          
    }else {
        display.value = total;
    }
    
}

//numbers to screen
//shortened eventListener implementation
document.addEventListener("click", (event) => {
    const clickedElement = event.target;

    if (clickedElement.id && clickedElement.id.startsWith("num")) {
        displayNum(clickedElement);
    }
});


//symbols
let operator = "";
plus.addEventListener("click", () => {
    displayNum(plus);
    minus.disabled = true;
    divide.disabled = true;
    multiply.disabled = true;
    percent.disabled = true;
    operator = "+";
});
minus.addEventListener("click", () => {
    displayNum(minus);
    plus.disabled = true;
    divide.disabled = true;
    multiply.disabled = true;
    percent.disabled = true;
    operator = "-";
});
divide.addEventListener("click", () => {
    displayNum(divide);
    minus.disabled = true;
    plus.disabled = true;
    multiply.disabled = true;
    percent.disabled = true;
    operator = "/";
});
multiply.addEventListener("click", () => {
    displayNum(multiply);
    minus.disabled = true;
    divide.disabled = true;
    plus.disabled = true;
    percent.disabled = true;
    operator = "x";
});
equal.addEventListener("click", () => {
    calcEqual(operator,display.value);
    minus.disabled = false;
    divide.disabled = false;
    multiply.disabled = false;
    plus.disabled = false;
    percent.disabled = false;
});
decimal.addEventListener("click", () => {
    display.value += "."
});
percent.addEventListener('click', () => {
    displayNum(percent);
    operator = "%";
});


//clear display
clear.addEventListener('click', () => {display.value = ""});