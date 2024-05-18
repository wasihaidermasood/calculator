
import inquirer from 'inquirer';
import { userInfo } from 'os';
let input = await inquirer.prompt([{
    type:"number",
    name:"number1",
    message:"Enter First Number"
},{
    type:"number",
    name:"number2",
    message: "Enter Second Number"

},{
    type:"list",
    name:"operator",
    message:"please Select Operator",
    choices:["+","-","*","/"]
},
]);
console.log(input)
let operator = input.operator;
let number1:number = input.number1
let number2:number = input.number2
function opereations(number1:number,number2:number){
    if(operator === "+"){
console.log("Yours Answer is ",number1+number2)
    }
else if (operator === "-"){
    console.log("Yours Answer is ",number1-number2)
}else if(operator === "*"){
    console.log("Yours Answer is ",number1*number2)
}else if(operator === "/"){
    if(number2==0){
        console.log("divide By 0 is Not Allowed")
     } else
     {console.log("Yours Answer is ",number1/number2)}
}
}
opereations(number1,number2)