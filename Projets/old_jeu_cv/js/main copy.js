var stickman = document.getElementById('stick_man');
var pierre = document.getElementById('div_pierre');
var section = document.getElementById('section');
var boutonCasser = document.getElementById('bouton_casser');

var tailleSection = section.offsetWidth;
var xStick = 0;
var tailleStick = stickman.offsetWidth;
var xPierre = pierre.offsetLeft;
var taillePierre = pierre.offsetWidth;

onkeypress = function(e){
    if(e.code=="KeyA"){
        if(xStick>0){
            xStick-=5;
        }
    }
    else if(e.code=="KeyD"){
        if(xStick<(tailleSection-tailleStick)-5){
            if(xStick<xPierre-tailleStick || xStick>xPierre+taillePierre){
                xStick+=5;
            }
        }
    }

    stickman.style.left = xStick + "px";
    actualiser();
}

boutonCasser.onclick = function(){
    xPierre = -1000;
    pierre.style.left = xPierre+"px";
}

function actualiser(){
    if(xPierre-(xStick+tailleStick)<2){
        boutonCasser.style.display = "block";
    }
}



