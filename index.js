
// for(var i=0;i<document.querySelector(".drum").length)
// document.querySelectorAll("button")[0].addEventListener("click",handleclick);
// //what does this first line that says first button just listen "click" sound and do action as written in function 

// function handleclick()
// {
//     alert("i got clicked !")

// }

//ANOTHER WAY


//detecting button press










var numberOfButton = document.querySelectorAll("button").length;

for (var i = 0; i < numberOfButton; i++) 
{
  document.querySelectorAll("button")[i].addEventListener("click", function () {


    var buttonInnerHtml = this.buttonInnerHtml;

    MakeSound(buttonInnerHtml);


    buttonAnimation(buttonInnerHtml);



  });
}






//HOW TO ADD KEYBOARD STRICKS
//DETECTING KEYBOARD PRESS
document.addEventListener("keypress", function (event) 
{
  MakeSound(event.key);

  buttonAnimation(event.key)
});







function MakeSound(key) {
  switch (key) {
    case "f":
      var audio = new Audio('tom_1.mp3');
      audio.play();
      break;

    case "a":
      var audio_1 = new Audio('tom_2.wav');
      audio_1.play();
      break;

    case "s":
      var audio_3 = new Audio('tom_7.wav');
      audio_3.play();
      break;

    case "d":
      var audio_4 = new Audio('tom_4.wav');
      audio_4.play();
      break;

    case "j":
      var audio_5 = new Audio('tom_5.wav');
      audio_5.play();
      break;

    case "k":
      var audio_6 = new Audio('tom_6.wav');
      audio_6.play();
      break;

    case "l":
      var audio_7 = new Audio('tom_7.wav');
      audio_7.play();
      break;

    default: console.log(buttonInnerHtml);   //default never be trggered
  }

}





function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey + "_drum");
    activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
