#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {brainGames} from "../brain-games.js";
import {name} from "../brain-games.js";


console.log('Answer "yes" if the number is even, otherwise answer "no".');

for(let i = 0; i < 3; i++){
    
    var num = Math.floor(Math.random() * 100);
    var trueAnswer
    if (num % 2 == 0){
        trueAnswer = "yes"
    }else{
        trueAnswer = "no"
    }

    console.log(`Question: ${num}`);

    const answer = readlineSync.question('Your answer: ');
    if ((answer == "yes" || answer == "no") && (answer == trueAnswer)){
            console.log("Correct!");
            if (i == 2){
                console.log(`Congratulations, ${name}!`);
            }
        }else{
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            break;
    }

}