    function colorOfPixel(square){
  square.style.backgroundColor = penColor;
}

let penColor = "red";

function makePenColor(pen) {
penColor = pen;
}



var title1 = document.getElementById('colorpallette');

title1.addEventListener("mouseover",function( event) {
  event.target.style.color = "red";

  setTimeout(function(){
    event.target.style.color = '';
  }, 500);
}, false);

let squares = document.getElementById('pix');

title3.addEventListener("mouseover",function( event) {
  event.target.style.color = "white";

  setTimeout(function(){
    event.target.style.color = '';
  }, 500);
}, false);

var title2 = document.getElementById('jc');

title2.addEventListener("mouseover",function( event) {
  event.target.style.color = "red";

  setTimeout(function(){
    event.target.style.color = '';
  }, 500);
}, false);


function clearall(){
  document.getElementById('row').value = '';

}
// when the clear button is clicked
var clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click",function(evt) {
    div.width = div.width; // this is all it takes to clear!

    // make sure the canvas' background is actually white for saving.
    context.fillStyle = "#ffffff";
    context.fillRect(0,0,div.width,div.height);
});

square.addEventListener("mousedown",function (evt) {
    isMouseDown = true;

    mouseX = evt.offsetX;
    mouseY = evt.offsetY;

    context.beginPath();
    context.moveTo(mouseX, mouseY);
});

// function eventHandler(event) {
//   if (event.type == onmouseover) {
//     /* handle a full screen toggle */
//   } else /* fullscreenerror */ {
//     /* handle a full screen toggle error */
//   }
// }
// function CheckOtherArt() {
//     var str = "View Beautiful rock formations on pixel art!!!";
//     var result = str.link('https://pbs.twimg.com/media/Da7LOWlXUAANa0F.png:large');
//     document.getElementById("Rock").innerHTML = result;
// }
//
// function bigSqr(x) {
//     x.style.height = "64px";
//     x.style.width = "64px";
// }
//
// function normalSqr(x) {
//     x.style.height = "32px";
//     x.style.width = "32px";
// }



//
// function bigSqr(x) {
//     x.style.height = "64px";
//     x.style.width = "64px";
// }
//
// function normalSqr(x) {
//     x.style.height = "32px";
//     x.style.width = "32px";
// }
//
// document.addEventListener("DOMContentLoaded",() => {
// alert('YOU CAN DO IT!!!!! dont give up!!!!');
// });
//
// var test = document.getElementById("test");
//
//
//   // this handler will be executed only once when the cursor moves over the unordered list
//   test.addEventListener("mouseenter", function( event ) {
//     // highlight the mouseenter target
//     event.target.style.color = "purple";
//
//     // reset the color after a short delay
//     setTimeout(function() {
//       event.target.style.color = "";
//     }, 500);
//   }, false);
//
//
//   // this handler will be executed every time the cursor is moved over a different list item
//   test.addEventListener("mouseover", function( event ) {
//     // highlight the mouseover target
//     event.target.style.color = "orange";
//
//     // reset the color after a short delay
//     setTimeout(function() {
//       event.target.style.color = "";
//     }, 500);
//   }, false);
