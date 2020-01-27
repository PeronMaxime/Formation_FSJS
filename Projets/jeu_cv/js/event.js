// Récupération des sons
var sonGun = document.getElementById('son_gun');
var sectionJeu = document.getElementById('section_jeu');

document.addEventListener('keypress',function(e){
    switch (e.keyCode){
        case 32:
            stickman.animationJump = true;
            if(stickman.jumpDown==false){
                stickman.jumpUp = true;
            }
            break;
        case 100:
        case 68:
            stickman.animationDroite = true;
            stickman.animationGauche = false;
            break;
        case 113:
        case 81:
            stickman.animationGauche = true;
            stickman.animationDroite = false;
            break;
    }
});

document.addEventListener('keyup',function(e){
    switch (e.keyCode){
        case 32:
            stickman.jumpUp = false;
            break;

        case 68: 
            stickman.animationDroite = false;
            stickman.animationGauche = false;
            stickman.sourceX = 0;
            break;
        case 81: 
            stickman.animationDroite = false;
            stickman.animationGauche = false;
            stickman.sourceX = 0;
            break;
    }
});

document.addEventListener('mousemove', function(e){
    viseur.sourisX = e.offsetX;
    viseur.sourisY = e.offsetY;
});

document.addEventListener('click', function(){
    if(sectionJeu.style.display != 'none'){
        if(balle.canShoot){
            sonGun.play();
            setTimeout(function(){
                balle.canShoot = true;
            },1000);
            viseur.sourisXFixe = viseur.sourisX;
            viseur.sourisYFixe = viseur.sourisY;
            balle.canShoot = false;
            balle.x = stickman.destinationX+stickman.gunX;
            balle.y = stickman.destinationY+stickman.gunY;
            balle.animation = true;
        }
    }
});