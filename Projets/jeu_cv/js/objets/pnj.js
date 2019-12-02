var Pnj = function(){
    this.src = 'img/stick_man.png';
    this.son = '';
}

Pnj.prototype = personnage;

Pnj.prototype.drawPnj = function(sprite){
    cadre.context.drawImage(sprite, 0, 0, 64, 64, pnj.destinationX, pnj.destinationY, 64, 64);
};

var pnj = new Pnj;