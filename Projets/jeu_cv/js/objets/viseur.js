var Viseur = function(){
    this.sourisX = 0;
    this.sourisY = 0;
};

Viseur.prototype.drawLine = function(){
    // Dessine la ligne du viseur
    
    cadre.context.beginPath();
    cadre.context.strokeStyle = 'red';
    cadre.context.moveTo(stickman.destinationX+stickman.gunX,stickman.destinationY+stickman.gunY);
    cadre.context.lineTo(this.sourisX,this.sourisY);
    cadre.context.stroke();
}

Viseur.prototype.drawViseur = function(){
    // Dessine le viseur

    cadre.context.beginPath();
    cadre.context.fillStyle = 'red';
    cadre.context.arc(this.sourisX, this.sourisY, 5, 0, 2 * Math.PI); 
    cadre.context.fill();
}

var viseur = new Viseur;