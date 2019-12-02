document.addEventListener('keypress',function(e){
    switch (e.code){
        case 'Space':
            stickman.animationJump = true;
            if(stickman.jumpDown==false){
                stickman.jumpUp = true;
            }
            break;
        case 'KeyD': 
            stickman.animationDroite = true;
            stickman.animationGauche = false;
            break;
        case 'KeyA': 
            stickman.animationGauche = true;
            stickman.animationDroite = false;
            break;
    }
});

document.addEventListener('keyup',function(e){
    switch (e.code){
        case 'Space':
            stickman.jumpUp = false;
            break;

        case 'KeyD': 
            stickman.animationDroite = false;
            stickman.animationGauche = false;
            stickman.sourceX = 0;
            break;
        case 'KeyA': 
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
    if(balle.canShoot){
        setTimeout(function(){
            balle.canShoot = true;
        },1000);
        balle.canShoot = false;
        balle.x = stickman.destinationX+stickman.gunX;
        balle.y = stickman.destinationY+stickman.gunY;
        balle.animation = true;
    }
});