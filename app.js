/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, activePlayer, roundScore, dice, gamePlaying;
init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){
            //1 get random number 
    var dice= Math.floor(Math.random() * 6) + 1;
    //2 display the result
    var diceDom =  document.querySelector('.dice');
    diceDom.style.display= 'block'; 
    diceDom.src = 'dice-' + dice + '.png';
    //3 update the round score if the rolled number is 1

    if(dice !==1){
        //Add Score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer ).textContent = roundScore;
    }else {
        //Next Player
        nextPlayer();
       
    }
    }
} )

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying ){
          //Add current score to the global score
    scores[activePlayer] += roundScore;

    //update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 100){
        document.querySelector('#name-' + activePlayer).textContent = 'winner'
        document.querySelector('.dice').style.display = 'none'; 
        document.querySelector('player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
        gamePlaying= false
    } else {
        nextPlayer();
    }
    nextPlayer();
    }
  
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.player-0-panel').classList.add('active');
    // document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.dice').style.display = 'none'; 
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){

scores = [0,0];
roundScore= 0;
activePlayer= 0;
gamePlaying = true;
dice= Math.floor(Math.random() * 6) + 1;

// document.querySelector('#current-' + activePlayer ).textContent = dice; //this is called setter DOM manupulation
// document.querySelector('#current-' + activePlayer).innerHTML = '<h1>' + dice + '</h1>' ;

// var x = document.querySelector('#current-0').textContent; // this is called a getter Reading from the DOM

document.querySelector('.dice').style.display = 'none'; //Change Css style

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.getElementById('name-0').textContent = 'Player-1'
document.getElementById('name-1').textContent = 'Player-2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}