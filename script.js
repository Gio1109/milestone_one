/*Variables*/
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter =0;
/*eventlisteners*/
hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = -(top) + "px";
    counter++;
});
/*gravity*/
setInterval(function(){
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
    character.style.top = (characterTop+3)+"px;"
    }
    /*hit detection, ADD SOUND*/
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if(characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130))));{
        alert("UH OH, Your dead. Score "+counter);
        character.style.top = 100 + "px";
        counter=0;
    }
    
},10);
/*jumping function, jump fucntion is similar to the gravity fucntion*/
function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){ 
        var characterTop = 
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(counter<15)){
        character.style.top = (characterTop-5)+"px;"
        }
        if(jumpCount>20){
            /*change clearinterval for testing*/
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}