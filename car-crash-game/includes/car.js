
function start(){
  $( ".block" ).animate({left: 1000}, {duration: 2000, step: step});
}

function stop(){
  $(".block").stop();
}

function reset(){
  $(".block").css("left",0);
}

$("#stop").click(stop);
$("#start").click(start);
$("#reset").click(reset);

function step(now, fx){
  $( ".block:gt(0)" ).css( "left", now);
  if (isCollidedWith($(".block"), $(".mine"))) {
    stop();
    showBoom();
  }
}

function isCollidedWith(elem1 , elem2){
  var p1 = getPosition(elem1);
  var p2 = getPosition(elem2);
  return comparePositions( p1.topLeft, p2.topLeft ) && comparePositions( p1.bottomRight, p2.bottomRight);
}

function getPosition(element){
  var pos    = $(element).position();
  var width  = $(element).width();
  var height = $(element).height();
  return  {topLeft : {x:pos.left,y:pos.left + width}, bottomRight : {x:pos.top,y:pos.top + height}}
}

function comparePositions(p1, p2){
  var r1, r2;
  r1 = p1.x < p2.x ? p1 : p2;
  r2 = p1.x < p2.x ? p2 : p1;
  return r1.y > r2.x || r1.x === r2.x;
}

function showBoom(){
    $(".movement").hide();
    $(".boom").show().delay(3000).fadeOut(700);
    setTimeout(function() {
      reset();
      $(".movement").show();
    }, 4000);
}
