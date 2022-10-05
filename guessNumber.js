'use strict';

const result=document.querySelector('#result')
, guessNumber=document.querySelector('#guessNumber')
, checkBtn=document.querySelector('#check')
, yourGuess=document.querySelector('#yourguess')
, score=document.querySelector('#score')
, highScore=document.querySelector('#highscore');
let highscore=Number(highScore.textContent=0)
// creating variable chancesLeft to stop the game after 15 chance 
let chancesLeft=15;
// genrating random number from 1-20
const  secretNumber=Math.trunc(Math.random()*20)+1;
console.log(secretNumber)
// when checkBtn is clicked this will run 
checkBtn.addEventListener("click",()=>{


// converting guessNumber from string to number
const number=Number(guessNumber.value)
if(number){

    if(number===secretNumber&&chancesLeft>0){
        yourGuess.innerHTML=`🎉 correct number`
        document.querySelector('body').style.backgroundColor='#60b347'
        result.innerHTML=secretNumber
    chancesLeft>highscore?highScore.textContent=chancesLeft:highScore.textContent}
        
        else if(number!=secretNumber && chancesLeft>0){
            chancesLeft-=1
            yourGuess.innerHTML=number>secretNumber?'📈 TOO high':' 📉 TOO low'
            score.textContent=chancesLeft}    
        }else yourGuess.innerHTML=`🥲 please enter some number`



})

function playAgain(){

}