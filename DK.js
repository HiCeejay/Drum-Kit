var drumButtons = document.querySelectorAll(".drum");


for(var i = 0; i < drumButtons.length; i++){

    // detecting buttonpress
    
    drumButtons[i].addEventListener("click", function(){

        
     var buttonInnerHTML = this.innerHTML;  

     pressMe(buttonInnerHTML);

     buttonAnime(buttonInnerHTML);
    
    })

}

document.addEventListener("keypress", function (event) { 

   pressMe(event.key);
   buttonAnime(event.key);
    
})

function pressMe(keyboard) {
 
    switch (keyboard) {
        case "w":
            var tomOne = new Audio('sounds\\tom-1.mp3'); 
            tomOne.play();
                
            break;

        case "a":
            var tomTwo = new Audio('sounds\\tom-2.mp3'); 
            tomTwo.play();

            break;

        case "s":
            var tomThree = new Audio('sounds\\tom-3.mp3'); 
            tomThree.play();

            break;

        case "d":
            var tomFour = new Audio('sounds\\tom-4.mp3'); 
            tomFour.play();
        
            break;

        case "j":
            var znare = new Audio('sounds\\snare.mp3'); 
            znare.play();

            break;

        case "k":
            var crasher = new Audio('sounds\\crash.mp3'); 
            crasher.play();

            break;

        case "l":
            var kix = new Audio('sounds\\kick-bass.mp3'); 
            kix.play();

            break;

            default: console.log(buttonInnerHTML);

        }

       

}

function buttonAnime(currentkey){

    var otaku = document.querySelector("." + currentkey);

    otaku.classList.add("pressed");

    setTimeout(function(){
        otaku.classList.remove("pressed");
    }, 100);



}





