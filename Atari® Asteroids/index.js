var angle = 0;
var xPoint = 0;
var yPoint = 0;
var horzMove = 0;
var vertMove = 0;
var hypotenuse = 14.142;
var spaceship = $(".spaceship");
var radian = 0.0174533;
var spaceshipX = document.querySelector('.spaceship').offsetWidth;
var spaceshipY = document.querySelector('.spaceship').offsetHeight;
var rect = document.querySelector('.spaceship').getBoundingClientRect();
var status = "true";

// var offsets = $('spaceship').offset();
// var top = offsets.top;
// var left = offsets.left;

$(document).keypress(function(){
  switch (event.key){
      case "a":
        angle -= 22.5;
        spaceship.css({'transform': 'translate('+ horzMove + 'px,'+ vertMove +'px) rotate('+ angle +'deg)' });
        break;
    case "w":
        move();
        checkOnScreen();
        spaceship.css({'transform': 'translate('+ horzMove + 'px,'+ vertMove +'px) rotate('+ angle +'deg)'});
        break;
    case "d":
        angle += 22.5;
        spaceship.css({'transform': 'translate('+ horzMove + 'px,'+ vertMove +'px) rotate('+ angle +'deg)' });
        break;
    case "s":
        // spaceship.fadeOut(600);
        // setTimeout(getRandomPos, 600); //might have to change position to fixed
        break;
    case " ":
        shoot();
        break;
    }
});


// function getRandomPos(){
//   let windowW = $(window).innerWidth();
//   let windowH = $(window).innerHeight();
//   xPoint = Math.floor(Math.random() * windowW) + 'px';
//   yPoint = Math.floor(Math.random() * windowH) + 'px';
//   spaceship.fadeIn(600).css('top', xPoint);
//   spaceship.css('left', yPoint);
// }
function checkOnScreen(){
  let windowW = window.innerWidth + spaceshipX;
  let windowH = window.innerHeight + spaceshipY;

  if(rect.top < 0 - spaceshipY){
    spaceship.css('bottom', -windowH);
  }

  if(rect.left < 0 - spaceshipX){
    spaceship.css('right', -windowW);
  }

  if(rect.bottom > windowH){
    spaceship.css('top', windowH);
  }

  if(rect.right > windowW){
    spaceship.css('left', windowW);
  }
}

function shoot() {
    $('body').append($('<div>').addClass('bullet').css({'left': rect.left,'top': rect.top})); //not a problem w/ the css
}

let horzMoveBullet = 0;
let vertMoveBullet = 0;
let deg = angle * radian;
let index = -1;
function update() {
    $('.bullet').each(function() {
        horzMoveBullet += (Math.sin(deg) * hypotenuse);
        vertMoveBullet -= (Math.cos(deg) * hypotenuse);
        $(this).css({'transform': 'translate('+ horzMoveBullet + 'px,'+ vertMoveBullet +'px)'});
    });
}
setInterval(update, 30);
setInterval(delBullet, 4000);


function delBullet(){
let elem = $('.bullet').eq('0');
if(elem.length == 0){
  return;
}
elem.remove();
}

function move(){
  let deg = angle * radian;
  horzMove += (Math.sin(deg) * hypotenuse);
  vertMove -= (Math.cos(deg) * hypotenuse);
}
