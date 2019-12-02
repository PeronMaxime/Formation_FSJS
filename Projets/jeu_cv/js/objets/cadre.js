var Cadre = function(){
    this.canvas = document.getElementById('section_jeu');
    var canvas = this.canvas;
    this.context = canvas.getContext('2d');
    this.canvas.width = document.body.offsetWidth;
    this.canvas.height = 500;
    this.context.imageSmoothingEnabled = false;
    this.largeur = canvas.width;
    this.hauteur = canvas.height;
};

var cadre = new Cadre;
