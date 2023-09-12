
//function for switch statment
function decideSwitch(inputpara) {
  switch (inputpara) {
    case "w":
      case"W":
      var crash1 = new Audio('./sounds/crash.mp3');
      crash1.play();
      break;
    case "a":
      case "A":
        var kick = new Audio('./sounds/kick-bass.mp3');
        kick.play();
        break;
    case "s":
      var sanar = new Audio('./sounds/snare.mp3');
      sanar.play();
        break;
    case "d":
      var tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
        break;
    case "j":
      var tom2 = new Audio('./sounds/tom-2.mp3');
        tom2.play();
        break;
    case "k":
      var tom3 = new Audio('./sounds/tom-3.mp3');
        tom3.play();
        break;
    case "l":
      var tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
          break;
  
    default: console.log(inputpara);
      break;
  }   
}

// get the numbers of button on html
var numberOfButtons = document.querySelectorAll(".drum").length;

var i = 0;
//register all buttons to event listener and detecting click
while(i < numberOfButtons)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
      var valueOfInnerHtml = this.innerHTML;
      decideSwitch(valueOfInnerHtml);
      buttonAnimation(valueOfInnerHtml);
    })
    i++;
}
 // detectig keyboard keys press
addEventListener("keydown",function (event) {
  var getKey = event.key;
  decideSwitch(getKey);
  buttonAnimation(getKey);
});

// for animation on pressed buttton
function buttonAnimation(elementHtml) {

  var activeButton = document.querySelector("."+elementHtml);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },250);  
}
// function originalForm(activeBtn) {
//   document.querySelector("."+activeBtn).classList.remove("pressed"); 

// }