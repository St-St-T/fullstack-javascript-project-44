#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {brainGames} from "../brain-games.js";

const name = brainGames();

console.log('What is the result of the expression?');

for(let i = 0; i < 3; i++){
    
    var num1 = Math.floor(Math.random() * 100);
    var num2 = Math.floor(Math.random() * 100);
    var action = Math.floor(Math.random() * 3);
    var result;

    switch (action){
        case 0:
            console.log(`Question: ${num1} + ${num2}`);
            result = num1 + num2;
            break;
        case 1:
            console.log(`Question: ${num1} - ${num2}`);
            result = num1 - num2;
            break;
        case 2:
            console.log(`Question: ${num1} * ${num2}`);
            result = num1 * num2;
            break;
    }
    
    const answer = readlineSync.question('Your answer: ');
    
    if (answer == result || answer == "no"){
            console.log("Correct!");
            if (i == 2){
                console.log(`Congratulations, ${name}!`);
            }
        }else{
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
            console.log(`Let's try again, ${name}!`);
            break;
    }

}