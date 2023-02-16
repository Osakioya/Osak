
// document.querySelector("button").addEventListener("click", function() {
  //     alert("It is clicked");
  
  // });

var boom = document.querySelectorAll(".drum").boom
for (let i = 0; i < boom.length; i++) {
  boom[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
   
    makeSound(buttonInnerHtml);

    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key){

    switch (key) {
        case "a":
            var kick = new Audio('sounds/kick-wav.mp3');
            kick.play();
            break;
          case "b":
            var ride = new Audio("sounds/ride-wav.mp3");
            tom1.play();
            break;
          case "c":
            var snare = new Audio("sounds/snare-wav.mp3");
            snare.play();
            break;
          case "d":
            var clap = new Audio("sounds/clap-wav.mp3");
            tom2.play();
            break;
          case "e":
            var tink = new Audio("sounds/tink-wav.mp3");
            tom3.play();
            break;
          case "f":
            var boom = new Audio("sounds/boom-wav.mp3");
            crash.play();
            break;
          case "g":
            var hihat = new Audio("sounds/hihat-wav.mp3");
            tom4.play();
            break;
            break;
          case "h":
            var Openhat = new Audio("sounds/Openhat-wav.mp3");
            crash.play();
            break;
          case "l":
            var tom = new Audio("sounds/tom-wav.mp3");
            tom4.play();
            break;
    
          default: console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(clickk){
    var active = document.querySelector("."+click);
    active.classList.add("pressed");
    setTimeout(function(){active.classList.remove("pressed")},200);

}