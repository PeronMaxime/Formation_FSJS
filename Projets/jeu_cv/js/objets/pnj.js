var sectionGameOver = document.getElementById('section_game_over');
var sectionJeu = document.getElementById('section_jeu');

var Pnj = function(){
    this.src = 'img/stick_man.png';
    this.son = '';
    this.direction = '';
    this.step = 0;
    this.id;
}

Pnj.prototype = personnage;

Pnj.prototype.drawPnj = function(sprite){
    cadre.context.drawImage(sprite, this.sourceX, this.sourceY, 150, 180, this.destinationX, this.destinationY, 150*this.agrandissement, 180*this.agrandissement);
};

Pnj.prototype.updatePnj = function(zombie, compteurZ){
    if(this.destinationX+this.largeur*this.agrandissement-20>=stickman.destinationX+stickman.persoX && this.destinationX+70<=stickman.destinationX+stickman.largeur*stickman.agrandissement+stickman.persoX && this.destinationY<=stickman.destinationY+stickman.hauteur*stickman.agrandissement){
        sectionGameOver.style.display = "block";
        sectionJeu.style.display = "none";
    }
    else if(this.destinationX>cadre.largeur || this.destinationX+this.largeur*this.agrandissement<0){
        zombie.splice(this.id,1,"");
    }
    else{
        if(this.step == 5){
            if(this.sourceX > this.largeur*6){
                this.sourceX = 0;
            }
            this.sourceX += this.largeur;
            this.step = 0;
        }
        if(this.direction == 'gauche'){
            this.destinationX -= 2;
        }
        else{
            this.destinationX += 2;
        }
        this.step++;
    }
};