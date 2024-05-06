#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber : number = Math.floor(10000 + Math.random() * 90000)

let myBalance : number = 0;

let answer = await inquirer.prompt(
    [
        {
            name:"students",
            type:"input",
            message:"Enter student name:",
            validate: function (value){
                if(value.trim() !== ""){
                    return true;
                }
                return "Please enter a non-empty value"
            }
        },
        {
            name:"courses",
            type:"list",
            message:"Select the courses to enrolled",
            choices:["Ms.Office","HTML","Javascript","Typescript","Python"]
        }
    ]
)

const tutionFee : {[key:string]:number}= {
    "Ms.Office":2000,
    "HTML":2500,
    "Javascript":5000,
    "Typescript":6000,
    "Python":10000,
} 

console.log(`\n Tution Fess : ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance ${myBalance}`);

let paymentType = await inquirer.prompt(
    [
        {
            name:"payment",
            type:"list",
            message:"Select payment method",
            choices:["Bank Transfer","Easypasisa","Jazzcash"]
        },
        {
            name:"amount",
            type:"input",
            message:"Transfer Money",
            validate:function (value){
                if(value.trim() !== ""){
                    return true;
                }
                return "Please enter a non-empty value."
            }
        }
    ]
)

console.log(`\n you select payment method ${paymentType.payment}\n`);

const tutionFees = tutionFee[answer.courses]
const paymentAmount = parseFloat(paymentType.amount)

if(tutionFees === paymentAmount){
    console.log(`Congratulation , you have successfullay enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt(
        [
            {
                name:"Select",
                type:"list",
                message:"What would you like to do next?",
                choices:["Veiw status","exit"]
            }
        ]
    )
    if(ans.select === "Veiw status"){
        console.log("\n *********status**********\n");
        console.log(`student Name: ${answer.students}`);
        console.log(`student ID: ${randomNumber}`);
        console.log(`course : ${answer.courses}`);
        console.log(`Tution fees paid : ${paymentAmount}`);
        console.log(`Balance ${myBalance += paymentAmount}`);
        
    }else{
        console.log("\n exiting student management system \n");
        
    }
}else{
    console.log(`\n Invalid amount due to course`);
}