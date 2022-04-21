// document.querySelectorAll("h1");
// JQuery("h1");
$("h1").addClass("big-title margin-50");

$("h1").text("Bye");

// $("button").text("Don't Click Me");

$("button").html("<em> Don't Click Me </em>");

$("a").attr("href", "http://www.yahoo.com");


// $("h1").click(function(){
//   $("h1").css("color", "purple");
// })

$("button").click(function(){
  $("h1").css("color", "purple");
});

$("input").keypress(function(event){
  console.log(event.key);
});

$("input").keypress(function(event){
  var str = $("input")[0].value
  $("h1").text(str+event.key);
});

$("h1").on("mouseover", function(){
  $("h1").css("color", "red");
  $("h1").css("font-size", "5rem")
});

$(document).click(function(){
  $("h1").css("color", "blue");
});

$('button').on('click', function(){
  $('h1').toggle();
})
