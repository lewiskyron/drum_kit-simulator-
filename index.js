
// event listeners tell us when a users does something 
var numberOfButtons =  document.querySelectorAll(".drum").length;
for(var i =0;  i < numberOfButtons; i ++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function  (){
       var buttonInnerHTML = this.innerHTML;
       makeSound(buttonInnerHTML)
       buttonAnimation(buttonInnerHTML)
        
      
    } );

}

document.addEventListener("keydown", e => {
    makeSound(e.key);
    buttonAnimation(e.key);
});
   


function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds\\crash.mp3")
             audio.play();
            
            break;
    
        case "a":
            var audio = new Audio("sounds\\kick-bass.mp3")
             audio.play();
            
             break;
        
        case "s":
        var audio = new Audio("sounds\\snare.mp3")
            audio.play();
    
            break;
    
        case "d":
            var audio = new Audio("sounds\\tom-1.mp3")
                audio.play();
    
            break;
    
        case "j":
            var audio = new Audio("sounds\\tom-2.mp3")
                audio.play();
    
            break;
    
        case "k":
            var audio = new Audio("sounds\\tom-3.mp3")
                audio.play();
    
            break;
    
        case "l":
            var audio = new Audio("sounds\\tom-3.mp3")
                audio.play();
    
            break;
    
        default:
            break;
       }


}

function buttonAnimation(currentButton){
    var activeButtton = document.querySelector("." + currentButton);
    console.log(activeButtton)
    activeButtton.classList.add("pressed")

    setTimeout(function(){
        activeButtton.classList.remove("pressed")
    }, 150);
}
   

// var audio = new Audio("sounds\\crash.mp3")
// audio.play();

// we 
// var Bellboy = {
//     name: Timmy 
//     age: 19 
//     hasworkPermit : True 
//     languages : ["English", "Kiswahili"]
// }  --> creating a variable as an object with various properties.



// we use the dot notation when calling a method or a property.
// on needs to understand constructor functions. 
// we use this when referencing an object that has had an action done on it. 


//