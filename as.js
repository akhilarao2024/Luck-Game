var activePlayer=0;
var playerScore=[0,0];
var currentScore=[0,0];
function init()
{
   activePlayer=0;
   playerScore=[0,0];
   currentScore=[0,0];
  document.getElementById('score-0').textContent='0';
  document.getElementById('score-1').textContent='0';
  document.getElementById('current-0').textContent='0';
  document.getElementById('current-1').textContent='0';
  document.getElementById('score-0').textContent='0';
  document.getElementById('score-1').textContent='0';
  document.querySelector('#dice').style.display='none';
}
init();


  //On clicking rollDice button
   document.querySelector('.btn-rolldice').addEventListener('click',function(){
    var diceScore=(Math.floor(Math.random()*6))+1;
   document.querySelector("#dice").src='dice-'+diceScore+'.png';
   document.querySelector("#dice").style.display='block';
   if(diceScore==1)
   {
     currentScore[activePlayer]=0;
     document.querySelector('#current-'+activePlayer).textContent=currentScore[activePlayer];
    document.querySelector('.panel-'+activePlayer).classList.remove('active');
    document.querySelector("#dice").style.visibility='hidden';
    activePlayer=(activePlayer==0? 1 : 0);
    document.querySelector('.panel-'+activePlayer).classList.add('active');

    }
   else{
   currentScore[activePlayer]+=diceScore;
   document.querySelector('#current-'+activePlayer).textContent=currentScore[activePlayer];
   document.querySelector("#dice").style.visibility='visible';
 }
  return currentScore[activePlayer];

});

//On clicking hold button
  document.querySelector('.btn-hold').addEventListener('click',function(){
     playerScore[activePlayer]+=currentScore[activePlayer];
     document.getElementById('score-'+activePlayer).textContent=playerScore[activePlayer];
     currentScore[activePlayer]=0;
     document.querySelector('#current-'+activePlayer).textContent=currentScore[activePlayer];
     if(playerScore[activePlayer]>100)
     {
       document.getElementById("name-"+activePlayer).style.color='coral';
       document.getElementById("name-"+activePlayer).textContent=" Winner! ";
       document.querySelector('.panel-'+activePlayer).classList.remove('active');
       document.querySelector("#dice").style.visibility='hidden';
       document.querySelector(".btn-rolldice").disabled = true;
       document.querySelector(".btn-hold").disabled = true;
     }
     else{
     document.querySelector('.panel-'+activePlayer).classList.remove('active');
     document.querySelector("#dice").style.visibility='hidden';
     activePlayer=(activePlayer==0? 1 : 0);
     document.querySelector('.panel-'+activePlayer).classList.add('active');
   }
   return playerScore[activePlayer];
 });

 //on clicking newgame button
 document.querySelector('.btn-newgame').addEventListener('click',function(){
  init();
  document.querySelector(".btn-rolldice").disabled = false;
  document.querySelector(".btn-hold").disabled = false;
  document.getElementById("name-0").textContent=" Player 1 ";
  document.getElementById("name-1").textContent=" Player 2 ";
  document.querySelector(".panel-0").classList.add('active');

  });
