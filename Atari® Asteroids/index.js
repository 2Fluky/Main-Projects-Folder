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
    console.log("Triggered psoition shift");
    spaceship.css('bottom', '');
    spaceship.css('bottom', -windowH);
  }

  if(rect.left < 0 - spaceshipX){
    console.log("Triggered psoition shift");
    spaceship.css('right', -windowW);
  }

  if(rect.bottom > windowH){
    console.log("Triggered psoition shift");
    spaceship.css('top', windowH);
  }

  if(rect.right > windowW){
    console.log("Triggered psoition shift");
    spaceship.css('left', windowW);
  }
}

function shoot() {
    $('body').append($('<div>').addClass('bullet').css({'left': rect.left,'top': rect.top + (spaceshipY/1.5)}));
}
let horzMoveBullet = 0;
let vertMoveBullet = 0;
function update() {
    $('.bullet').each(function() {
        let deg = angle * radian;
        horzMoveBullet += (Math.sin(deg) * hypotenuse);
        vertMoveBullet -= (Math.cos(deg) * hypotenuse);
        $(this).css({'transform': 'translate('+ horzMoveBullet + 'px,'+ vertMoveBullet +'px)'});
    });
}
setInterval(update, 30);

function move(){
  let deg = angle * radian;
  horzMove += (Math.sin(deg) * hypotenuse);
  vertMove -= (Math.cos(deg) * hypotenuse);
}
