
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
        calculator.number2 = "0";
        setDisplay(calculator.number1);
            if(calculator.number1 === "bruh"){
                calculator.number1 = "0";
            }
     }
}

display.textContent = 0;

let calculator = {
    number1: "0",
    number2: "0",
    operator: 0,
}

let lastClicked = 0;

function setDisplay(value){
    if(calculator.number1 === "bruh"){
        display.textContent = calculator.number1;
    }
    else{
        if(parseFloat(value) % 1 > 0){
            value = Math.round(value * 1000000) / 1000000;
        }
        display.textContent = value;
    }
}

function addNumber(numSlot, value){
    if(calculator[numSlot] != 0){
        calculator[numSlot] = calculator[numSlot] + value;
    }
    else{
        calculator[numSlot] = value;
    }
    setDisplay(calculator[numSlot]);
}

function delNumber(numSlot){
    calculator[numSlot] = calculator[numSlot].slice(0, -1);
    setDisplay(calculator[numSlot]);
}

function addDot(numSlot){
    if (!calculator[numSlot].includes('.')){
        calculator[numSlot] += '.';
        setDisplay(calculator[numSlot]);
    }
}

function buttonClicked(e){
    let content = e.srcElement.textContent;
    if(parseInt(content) || parseInt(content) === 0){
        switch(lastClicked){
            case 0:
                addNumber("number1", content);
                break;
            case 1:
                addNumber("number2", content);
                break;
            case 2:
                addNumber("number2", content);
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
                if(lastClicked == 0){
                    delNumber("number1");
                }
                else if (lastClicked == 1){
                    delNumber("number2");
                }
                break;
            case "/":
                if(lastClicked == 1) operate(parseFloat(calculator.number1), parseFloat(calculator.number2), calculator.operator);
                calculator.operator = 4;
                lastClicked = 2;
                break;
            case "*":
                if(lastClicked == 1) operate(parseFloat(calculator.number1), parseFloat(calculator.number2), calculator.operator);
                calculator.operator = 3;
                lastClicked = 2;
                break;
            case "-":
                if(lastClicked == 1) operate(parseFloat(calculator.number1), parseFloat(calculator.number2), calculator.operator);
                calculator.operator = 2;
                lastClicked = 2;
                break;
            case "+":
                if(lastClicked == 1) operate(parseFloat(calculator.number1), parseFloat(calculator.number2), calculator.operator);
                calculator.operator = 1;
                lastClicked = 2;
                break;
            case "=":
                if(lastClicked == 1){
                    operate(parseFloat(calculator.number1), parseFloat(calculator.number2), calculator.operator);
                    lastClicked = 2;
                }
                break;
            case ".":
                if (lastClicked == 0){
                    addDot("number1");
                }
                else if(lastClicked == 1){
                    addDot("number2");
                }
                break;
        }
    }
}

const buttonList = document.querySelectorAll(".button");
buttonList.forEach((button)=>{
    button.addEventListener("click", buttonClicked)
});