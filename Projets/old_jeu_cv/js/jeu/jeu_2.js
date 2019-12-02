"use strict";

// Appel du canvas et définition du contexte
var cadreJeu = document.getElementById('cadre_jeu');
var contexte = cadreJeu.getContext("2d");
cadreJeu.style.border = "1px solid black";

// Définition paramètres du contexte
contexte.imageSmoothingEnabled = false;

// Chargement du sprite
var spriteStickMan = new Image();
spriteStickMan.src = "img/sprite_stickman.png";

// Définition des constantes
var tailleTuileX = 32;
var tailleTuileY = 64;
var vitesseDeplacement = 5;
var agrandissementTuile = 2;
var largeurCadre = cadreJeu.width;
var hauteurCadre = cadreJeu.height;

// Variable swap animate
var swapAnimate = true;
var idAnimationFrame = 0;

// Définition des valeurs de source et destinations de l'image
var sX = 0;

var dX = 0;
var dY = hauteurCadre-tailleTuileY*agrandissementTuile;

var positionGunX = 50;
var positionGunY = 60;

// Initialisation de l'étape. Il faut passer un certain nombre d'étape avant d'afficher la tuile suivante
var step = 0;

// Définition position de la souris
var sourisX = 0;
var sourisY = 0;

// Initialisation position shot
var positionShotX = tailleTuileX*agrandissementTuile-positionGunX;
var positionShotY = positionGunY;

// Initialisation bool animation shot
var animationShot = false;
var canShoot = true;

// Position de stick au moment du tir
var tmpPositionStickX = null;
var tmpPositionStickY = null;

// Fonction principale qui s'éxecute lors de l'appui d'une touche
function animate(){
    update();
    draw();
    drawLine();
    drawCursor();
    idAnimationFrame = requestAnimationFrame(animate);
    swapAnimate = false;
}

function animateShot(positionStickX, positionStickY){
    if(tmpPositionStickX==null && tmpPositionStickY==null){
        tmpPositionStickX = positionStickX;
        tmpPositionStickY = positionStickY;
    }
    updateShot(tmpPositionStickX, tmpPositionStickY);
    if(animationShot){
        drawShot(tmpPositionStickX+tailleTuileX*agrandissementTuile-positionGunX+positionShotX, tmpPositionStickY+positionGunY+positionShotY);
        requestAnimationFrame(animateShot);
    }
}

// Fonction qui dessine l'image et nettoie derrière l'ancienne image
function draw(){
    contexte.clearRect(dX-vitesseDeplacement, dY, tailleTuileX, tailleTuileY);
    drawStickMan(sX, dX, dY);
}

// Fonction qui dessine l'image de stickman
function drawStickMan(sourceX, destinationX, destinationY){
    contexte.drawImage(spriteStickMan, sourceX, 64*2, tailleTuileX, tailleTuileY, destinationX, destinationY, tailleTuileX*agrandissementTuile, tailleTuileY*agrandissementTuile);
}

function drawLine(){
    contexte.clearRect(0, 0, largeurCadre,hauteurCadre);
    draw();
    contexte.beginPath();
    contexte.strokeStyle = 'red';
    contexte.moveTo(dX+tailleTuileX*agrandissementTuile-positionGunX,dY+positionGunY);
    contexte.lineTo(sourisX,sourisY);
    contexte.stroke();
}

function drawCursor(){
    contexte.clearRect(0, 0, largeurCadre,hauteurCadre);
    draw();
    drawLine();
    contexte.beginPath();
    contexte.fillStyle = 'red';
    contexte.arc(sourisX, sourisY, 5, 0, 2 * Math.PI); 
    contexte.fill();
}

function drawShot(shotX, shotY){
    contexte.clearRect(0, 0, largeurCadre,hauteurCadre);
    draw();
    contexte.beginPath();
    contexte.fillStyle = 'black';
    contexte.arc(shotX, shotY, 3, 0, 2 * Math.PI);
    contexte.fill();
}

// Fonction qui met à jour les positions des sources et destinations
function update(){
    // Au bout de 10 frame on passe à la tuile suivante
    if(step == 5){
        sX += tailleTuileX;
        // Si on arrive à la fin du sprite, on retourne au début
        if(sX == tailleTuileX*9){
            sX = 0;
        }
        step = 0;
    }
    // On déplace l'image de 1px par frame
    if(dX+vitesseDeplacement <= largeurCadre-tailleTuileX*agrandissementTuile && dX+vitesseDeplacement >= 0){
        dX += vitesseDeplacement;
    }
    step++;
}

function updateShot(positionStickX, positionStickY){
    positionShotX += positionStickX;
    console.log('shot : '+positionShotX);
    console.log('stick : '+positionStickX);
    positionShotY += positionStickY;
    if(positionShotX > largeurCadre || positionShotY < 0 || positionShotX < 0 || positionShotY > hauteurCadre){
        animationShot = false;
        tmpPositionStickX = null;
        tmpPositionStickY = null;
        drawLine();
        drawCursor();
    }
    else{
        positionShotX += 50;
        positionShotY -= 0;
    }
}

// Gestion des évènements

document.addEventListener('keypress',function(e){
    switch (e.code){
        // case 'Space':
        //     dY -= 50;
        //     animate();
        case 'KeyD': 
            vitesseDeplacement = 5;
            if(swapAnimate){
                idAnimationFrame = animate();
            }
            break;
        case 'KeyA': 
            vitesseDeplacement = -5;
            if(swapAnimate){
                idAnimationFrame = animate();
            }
            break;
    }
});
document.addEventListener('keyup',function(e){
    switch (e.code){
        // case 'Space':
        //     dY -= 50;
        //     animate();
        case 'KeyD': 
            swapAnimate = true;
            cancelAnimationFrame(idAnimationFrame);
            break;
        case 'KeyA': 
            swapAnimate = true;
            cancelAnimationFrame(idAnimationFrame);
            break;
    }
});



document.addEventListener('mousemove', function(e){
    sourisX = e.offsetX;
    sourisY = e.offsetY;
    
    drawLine();
    drawCursor();
});

document.addEventListener('click', function(e){
    if(canShoot){
        setTimeout(function(){
            canShoot = true;
        },1000);
    }
    if(animationShot==false && canShoot){
        animationShot = true;
        canShoot = false;
        positionShotX = 0;
        positionShotY = 0;
        animateShot(dX, dY);
    }
});

// Mardi : 
    // Dessin des sprites

// Mercredi :
    // Réécriture du code en objet
    // Orientation du tir en fonction de la position de la souris

// Jeudi :
    // Gérer deux évènements en même temps

// Vendredi :
    // Gestion du saut de stickman

// Gestion du pad
// Gestion des sons
// Gestion des PNJ
// Création de la map
// Défilement de la map
// Gestion des collisions des tirs et de la mort
// Disposition des compétences à récolter
// Condition de victoire
// Création du bouton de démarrage du jeu