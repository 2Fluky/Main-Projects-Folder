//Comine finctions into anonymous functions
var numButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML);
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

});
}

document.addEventListener("keydown", function(event){
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(key){
  switch (key) {
    case "w":
      var ben = new Audio('sounds/Ben.mp3');
      ben.play();
      break;
    case "a":
      var hangUp = new Audio('sounds/Hang_up.mp3');
      hangUp.play();
      break;
    case "s":
      var no = new Audio('sounds/No.mp3');
      no.play();
      break;
    case "d":
      var yes = new Audio('sounds/Yes.mp3');
      yes.play();
      break;
    case "j":
      var laugh = new Audio('sounds/Laugh.mp3');
      laugh.play();
      break;
    case "k":
      var nanana = new Audio('sounds/NaNaNa.mp3');
      nanana.play();
      break;
    case "l":
      var uhh = new Audio('sounds/uhh.mp3');
      uhh.play();
      break;
    default:

    }
}

function buttonAnimation(currentKey){
  var activateButton = document.querySelector("." + currentKey);
  activateButton.classList.add("pressed");
  setTimeout(function(){
    activateButton.classList.remove("pressed");
  }, 100);
}




// Creat event listener
// document.querySelector("button").addEventListener("click", handleClick)
//
//
// function handleClick(){
//   alert("I got clicked");
// }
