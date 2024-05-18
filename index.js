import inquirer from 'inquirer';
let input = await inquirer.prompt([{
        type: "number",
        name: "number1",
        message: "Enter First Number"
    }, {
        type: "number",
        name: "number2",
        message: "Enter Second Number"
    }, {
        type: "list",
        name: "operator",
        message: "please Select Operator",
        choices: ["+", "-", "*", "/"]
    },
]);
console.log(input);
let operator = input.operator;
let number1 = input.number1;
let number2 = input.number2;
function opereations(number1, number2) {
    if (operator === "+") {
        console.log("Yours Answer is ", number1 + number2);
    }
    else if (operator === "-") {
        console.log("Yours Answer is ", number1 - number2);
    }
    else if (operator === "*") {
        console.log("Yours Answer is ", number1 * number2);
    }
    else if (operator === "/") {
        if (number2 == 0) {
            console.log("divide By 0 is Not Allowed");
        }
        else {
            console.log("Yours Answer is ", number1 / number2);
        }
    }
}
opereations(number1, number2);
