var Bloc = function(){
    
}

Bloc.prototype.drawBloc = function(x, y, largeur, hauteur){
    cadre.context.fillStyle = 'black';
    cadre.context.fillRect(x, y, largeur, hauteur);
}

var bloc1 = new Bloc;
var bloc2 = new Bloc;
var bloc3 = new Bloc;
var bloc4 = new Bloc;
var bloc5 = new Bloc;