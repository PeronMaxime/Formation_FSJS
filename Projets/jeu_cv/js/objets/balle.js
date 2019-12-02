var Balle = function(){
  this.x = 0;
  this.y = 0;
  this.animation = false;
  this.canShoot = true; 
  this.son = ''; 
};

Balle.prototype.draw = function(){
  // Dessine la balle

  cadre.context.beginPath();
  cadre.context.fillStyle = 'black';
  cadre.context.arc(balle.x, balle.y, 3, 0, 2 * Math.PI);
  cadre.context.fill();
}

Balle.prototype.update = function(){
  // Update la position de la balle
  var distanceX = viseur.sourisX-(stickman.destinationX+stickman.gunX);

  var distanceY = viseur.sourisY - (stickman.destinationY+stickman.gunY);

  var hypothenuse = Math.sqrt(distanceX*distanceX + distanceY*distanceY);

  if(balle.x > cadre.largeur || balle.x < 0 || balle.y > cadre.hauteur || balle.y < 0){
    balle.animation = false;
    
  }else{
    balle.x += distanceX*32/hypothenuse;
    balle.y += distanceY*32/hypothenuse;
  }

  if(balle.x >= pnj.destinationX && balle.x <= pnj.destinationX+64 && balle.y >= pnj.destinationY && balle.y <= pnj.destinationY+64){
    alert('touché');
    balle.animation = false;
  }
  
  

}


var balle = new Balle;