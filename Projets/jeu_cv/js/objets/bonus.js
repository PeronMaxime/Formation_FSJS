var Bonus = function(){
    this.sourceX = 0;
    this.sourceY = 0;
    this.destinationX = 0;
    this.destinationY = 50;
    this.largeur = 32;
    this.hauteur = 32;
    this.vitesseX = 1;
    this.vitesseY = 1;
    this.debloque = false;
    this.obtenu = false;
    this.idObtenu = 0;
}

Bonus.prototype.drawBonus = function(sprite){
    cadre.context.drawImage(sprite, this.sourceX, this.sourceY, this.largeur, this.hauteur, this.destinationX, this.destinationY, this.largeur, this.hauteur);
};

Bonus.prototype.updateBonus = function(){
    if(this.obtenu){
        this.destinationX = cadre.largeur - 320 + this.idObtenu*32;
        this.destinationY = 0;
    }
    else{
        if(this.destinationX+this.largeur > cadre.largeur || this.destinationX < 0){
            this.vitesseX *= -1;
        }
        if(this.destinationY < 50 || this.destinationY+this.hauteur > 150){
            this.vitesseY *= -1;
        }
        this.destinationX += this.vitesseX;
        this.destinationY += this.vitesseY;
    }
};