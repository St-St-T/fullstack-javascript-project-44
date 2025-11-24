#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {brainGames} from "../brain-games.js";
import {name} from "../brain-games.js";


console.log('Find the greatest common divisor of given numbers.');

for(let i = 0; i < 3; i++){
    
    var num1 = Math.floor(Math.random() * 100);
    var num2 = Math.floor(Math.random() * 100);
    var result;

    function gcd (x, y) {
        if (y > x) return gcd(y, x);
        if (!y) return x;
        return gcd(y, x % y);
    }
    
    var trueAnswer = gcd(num1, num2);
    console.log(`Question: ${num1} ${num2}`);

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