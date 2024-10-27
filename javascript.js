
const display = document.querySelector(".display");

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if(num2 === 0 ){
        return "bruh";
    }
    return num1 / num2;
}

function operate(num1, num2, op){
    switch (op){
        case 0:
            break;
        case 1:
            calculator.number1 = add(num1, num2);
            break;
        case 2:
            calculator.number1 = subtract(num1, num2);
            break;
        case 3:
            calculator.number1 = multiply(num1, num2);
            break;
        case 4:
            calculator.number1 = divide(num1, num2);
            break;
    }
    if(op){
        calculator.number2 = 0;
        display.textContent = calculator.number1;
            if(calculator.number1 === "bruh"){
                calculator.number1 = 0;
            }
     }
}

display.textContent = 0;

let calculator = {
    number1: 0,
    number2: 0,
    operator: 0,
}

let lastClicked = 0;

function setDisplay(value){
    display.textContent = value;
}

function addNumber(numSlot, value){
    if(calculator[numSlot]){
        calculator[numSlot] = calculator[numSlot] * 10 + value;
    }
    else{
        calculator[numSlot] = value;
    }
    setDisplay(calculator[numSlot]);
}


function buttonClicked(e){
    console.log(lastClicked);
    let content = e.srcElement.textContent;
    if(parseInt(content) || parseInt(content) === 0){
        switch(lastClicked){
            case 0:;
                addNumber("number1", parseInt(content))
                break;
            case 1:
                addNumber("number2", parseInt(content))
                break;
            case 2:
                addNumber("number2", parseInt(content))
                lastClicked = 1;
                break;
        }
    }
    else{
        switch(content){
            case "AC":
                calculator.number1 = 0;
                calculator.number2 = 0;
                calculator.operator = 0;
                display.textContent = 0;
                lastClicked = 0;
                break;
            case "DEL":

                break;
            case "/":
                if(lastClicked == 1) operate(calculator.number1, calculator.number2, calculator.operator);
                calculator.operator = 4;
                lastClicked = 2;
                break;
            case "*":
                if(lastClicked == 1) operate(calculator.number1, calculator.number2, calculator.operator);
                calculator.operator = 3;
                lastClicked = 2;
                break;
            case "-":
                if(lastClicked == 1) operate(calculator.number1, calculator.number2, calculator.operator);
                calculator.operator = 2;
                lastClicked = 2;
                break;
            case "+":
                if(lastClicked == 1) operate(calculator.number1, calculator.number2, calculator.operator);
                calculator.operator = 1;
                lastClicked = 2;
                break;
            case "=":
                if(lastClicked == 1)operate(calculator.number1, calculator.number2, calculator.operator);
                lastClicked = 2;
                break;
            case ".":

                break;
        }
    }
}

const buttonList = document.querySelectorAll(".button");
buttonList.forEach((button)=>{
    button.addEventListener("click", buttonClicked)
});