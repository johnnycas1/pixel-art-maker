//THIS IS MY MOTIVATION EVENT!!!! )

document.addEventListener("DOMContentLoaded",() => {
alert('YOU CAN DO IT!!!!! Dont give up!!!!');
});

document.addEventListener("DOMContentLoaded", function() {
  let canvas = document.getElementsByClassName("canvas")[0]
  for(let i = 0; i < 10; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    canvas.appendChild(pixel);
  }
});

let pixels = document.createElement('div');
pixels.classList.add('pixels');
canvas.appendChild(pixels);

// let canvas = document.querySelector("canvas");
//
// div.addEventListener("click",function(event) {
//   event.target.className = "canvas";
// console.log(event.target);
// })

//
// let penColor = "red";
//
//     function colorOfPixel(canvas){
//       canvas.style.backgroundColor = penColor;
// }
//     function makePenColor(pen) {
//       penColor = pen;
// }
// /////////////////////////////////////////
//
// //this is a mouseover for my titles//
//
// var title2 = document.getElementById('title');
//
// title2.addEventListener("mouseover",function( event) {
//   event.target.style.color = "red";
//
//   setTimeout(function(){
//     event.target.style.color = '';
//   }, 500);
// }, false);
//
// var title1 = document.getElementById('colorpallette');
//
// title1.addEventListener("mouseover",function( event) {
//   event.target.style.color = "red";
//
//   setTimeout(function(){
//     event.target.style.color = '';
//   }, 500);
// }, false);
// ////////////////////////////////////////
// // this is a test for trying to change the color to white, like an erase button
