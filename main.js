//THIS IS MY MOTIVATION EVENT!!!! :)////

document.addEventListener("DOMContentLoaded",() => {
alert('YOU CAN DO IT!!!!! Dont give up!!!!');
});
////////////////////////////////////////
//this is my function for the color pallete color picker//

let penColor = "red";

    function colorOfPixel(square){
      square.style.backgroundColor = penColor;
}
    function makePenColor(pen) {
      penColor = pen;
}
/////////////////////////////////////////

//this is a mouseover for my titles//

var title2 = document.getElementById('jc');

title2.addEventListener("mouseover",function( event) {
  event.target.style.color = "red";

  setTimeout(function(){
    event.target.style.color = '';
  }, 500);
}, false);

var title1 = document.getElementById('colorpallette');

title1.addEventListener("mouseover",function( event) {
  event.target.style.color = "red";

  setTimeout(function(){
    event.target.style.color = '';
  }, 500);
}, false);
////////////////////////////////////////
// this is a test for trying to change the color to white, like an erase button


let squares = document.getElementById('pix');

squares.addEventListener("click",function( event) {
  event.target.style.color = "black";

  setTimeout(function(){
    event.target.style.color = '';
  }, 500);
}, false);
