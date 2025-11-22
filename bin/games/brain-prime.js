#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {brainGames} from "../brain-games.js";

const name = brainGames();

console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

for(let i = 0; i < 3; i++){
    
    var num = Math.floor(Math.random() * 100);
    var trueAnswer;
    
    if (num < 2){
        trueAnswer = "no";
    }else if (num == 2){
        trueAnswer = "yes";
    }else if (num % 2 == 0){
        trueAnswer = "no";
    }else{
        for(let i = 2; i <= Math.sqrt(num); i++)
            if (num % i == 0){
                trueAnswer = "no";
                break;
            }else{
                trueAnswer = "yes";
            }
    }

    console.log(`Question: ${num}`);

    const answer = readlineSync.question('Your answer: ');
    
    if (answer == trueAnswer){
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