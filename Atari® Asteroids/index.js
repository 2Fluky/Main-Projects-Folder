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
var shootDeg = 0;
var horzMoveBullet = 0;
var vertMoveBullet = 0;
var shotDelay = 0;

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
        if(shotDelay == 0){
          shotDelay = 1;
          shoot();
        }
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
  let rect = document.querySelector('.spaceship').getBoundingClientRect();
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
    let rect = document.querySelector('.spaceship').getBoundingClientRect();
    $('body').append($('<div>').addClass('bullet').css({'left': rect.left,'top': rect.top}));
    shootDeg = angle * radian;
    horzMoveBullet = 0;
    vertMoveBullet = 0;
}

function update() {
    $('.bullet').each(function() {
        horzMoveBullet += (Math.sin(shootDeg) * hypotenuse);
        vertMoveBullet -= (Math.cos(shootDeg) * hypotenuse);
        console.log(horzMoveBullet, vertMoveBullet)
        $(this).css({'transform': 'translate('+ horzMoveBullet +'px,'+ vertMoveBullet +'px)'});
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
shotDelay = 0;
}

function move(){
  let deg = angle * radian;
  horzMove += (Math.sin(deg) * hypotenuse);
  vertMove -= (Math.cos(deg) * hypotenuse);
}
