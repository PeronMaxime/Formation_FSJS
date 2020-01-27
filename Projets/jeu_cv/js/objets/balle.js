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

Balle.prototype.update = function(zombie, compteurZ, bonus, nombreBonusObtenus){
  // Update la position de la balle
  var distanceX = viseur.sourisXFixe - (stickman.destinationX+stickman.gunX);

  var distanceY = viseur.sourisYFixe - (stickman.destinationY+stickman.gunY);

  var hypothenuse = Math.sqrt(distanceX*distanceX + distanceY*distanceY);

  if(balle.x > cadre.largeur || balle.x < 0 || balle.y > cadre.hauteur || balle.y < 0){
    balle.animation = false;
    return 0;
    
  }else{
    balle.x += distanceX*32/hypothenuse;
    balle.y += distanceY*32/hypothenuse;
  }
  if(zombie.length>0){
    for(var i=0; i<compteurZ; i++){
      if(balle.x >= zombie[i].destinationX && balle.x <= zombie[i].destinationX+150 && balle.y >= zombie[i].destinationY && balle.y <= zombie[i].destinationY+180){
        balle.animation = false;
        zombie.splice(i, 1, '');
        return 1;
      }
    }
  }

  for(var j=0; j<bonus.length; j++){
    if((balle.x >= bonus[j].destinationX && balle.x <= bonus[j].destinationX+64 && balle.y >= bonus[j].destinationY && balle.y <= bonus[j].destinationY+64) && bonus[j].debloque && bonus[j].obtenu == false){
      balle.animation = false;
      // bonus.splice(j, 1, '');
      bonus[j].obtenu = true;
      bonus[j].idObtenu = nombreBonusObtenus;
      return 2;
    }
  }

  return 0;
  
  

}


var balle = new Balle;