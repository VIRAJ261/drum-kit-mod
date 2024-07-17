// var x = document.getElementById("myAudio");
// function playClick(){
//   x.play();
// }
// function pauseClick(){
//     x.pause();
// }
// var y = document.getElementById("myAudio2");
// function playClick1(){
//   y.play();
// }
// function pauseClick1(){
//     y.pause();
// }
// var z = document.getElementById("myAudio3");
// function playClick2(){
//   z.play();
// }
// function pauseClick2(){
//     z.pause();
// }
// var m = document.getElementById("myAudio4");
// function playClick4(){
//   m.play();
// }
// function pauseClick4(){
//     m.pause();
// }
// var n = document.getElementById("myAudio5");
// function playClick5(){
//   n.play();
// }
// function pauseClick5(){
//     n.pause();
// }
// var o = document.getElementById("myAudio6");
// function playClick6(){
//   o.play();
// }
// function pauseClick6(){
//     o.pause();
// }
// var p = document.getElementById("myAudio7");
// function playClick7(){
//   p.play();
// }
// function pauseClick7(){
//     p.pause();
// }
var numberOfButtons = document.querySelectorAll(".drum").length;
for(var i = 0;i<numberOfButtons;i++){
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   var m = this.innerHTML;
   switch (m) {
      case 'w':
         var audio = new Audio('./sounds/tom-1.mp3');
           audio.play();
         break;
      case 'a':
         var audio = new Audio('./sounds/tom-2.mp3');
           audio.play();
         break;
      case 's':
         var audio = new Audio('./sounds/tom-3.mp3');
           audio.play();
         break;
      case 'd':
         var audio = new Audio('./sounds/tom-4.mp3');
           audio.play();
         break;
      case 'j':
         var audio = new Audio('./sounds/snare.mp3');
           audio.play();
         break;
      case 'k':
         var audio = new Audio('./sounds/crash.mp3');
           audio.play();
         break;
      case 'l':
         var audio = new Audio('./sounds/kick-bass.mp3');
           audio.play();
         break;   
      
   }
   });
}
