#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {brainGames} from "../brain-games.js";
import {name} from "../brain-games.js";


console.log('What number is missing in the progression?');

for(let i = 0; i < 3; i++){
    
    var amount = Math.floor(Math.random() * 11);
    if (amount < 5){
        amount = 5;
    }
    var unvisible = Math.floor(Math.random() * (amount + 1));
    var step = Math.floor(Math.random() * 10);
    var nums = "";

    var start = Math.floor(Math.random() * 100);
    for(let i = 0; i <= amount; i++){
        if (i == unvisible){
            nums += `.. `;
            var trueAnswer = start;
        }else{
            nums += `${start} `;
        }
        start = start + step;
    }


    console.log(`Question: ${nums}`);

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