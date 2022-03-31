//create a random number for the dice
var score1 = 0;

var score2 = 0;

function rollDie(){

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;//1-6

  var randomDiceImage = "dice" + randomNumber1 + ".png"//dice1.png-dice6.collapsing

  var randomImageSource = "Images/" + randomDiceImage;

  var image1 = document.querySelectorAll("img")[0]; //fetches first img tag

  image1.setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;//1-6

  var randomImageSource2 = "Images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🎲 Player 1 wins!"
    score1 = score1 + 1;
    document.querySelectorAll("h2")[0].innerHTML = score1
  }
  else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🎲"
    score2 = score2 + 1;
    document.querySelectorAll("h2")[1].innerHTML = score2
  }
  else {
    document.querySelector("h1").innerHTML = "It's a draw!"
  }

}
