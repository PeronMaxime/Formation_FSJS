// Tout le code est généré seulement lorsque le DOM est chargé
addEventListener('load', function(){
    var sectionRegle = document.getElementById('section_regle');
    var sectionContact = document.getElementById('section_contact');
    var sectionGameOver = document.getElementById('section_game_over');
    var sectionWin = document.getElementById('section_win');
    var sectionCv = document.getElementById('section_cv');
    var sectionJeu = document.getElementById('section_jeu');
    var sonZombie = document.getElementById('son_zombie');

                         
    // Création des zombies
    var compteurZombie = 0;
    var zombie = [];
    setInterval(function(){
        if(sectionRegle.style.display == 'none' && sectionContact.style.display == 'none' && sectionGameOver.style.display == 'none' && sectionCv.style.display == 'none'){
            compteurZombie++;
            zombie.push(new Pnj);
            zombie[compteurZombie-1].largeur = 150;
            zombie[compteurZombie-1].hauteur = 180;
            zombie[compteurZombie-1].agrandissement = 0.5;
            zombie[compteurZombie-1].id = compteurZombie-1;

            if(compteurZombie%2 == 0){
                zombie[compteurZombie-1].direction = 'droite';
            }
            else{
                zombie[compteurZombie-1].direction = 'gauche';
                zombie[compteurZombie-1].sourceY = 180;

            }
            
            if(compteurZombie>0){
                if(zombie[compteurZombie-1].direction == 'gauche'){
                    zombie[compteurZombie-1].destinationX = cadre.largeur-150/2;
                    zombie[compteurZombie-1].destinationY = cadre.hauteur-180/2;
                }
                else{
                    zombie[compteurZombie-1].destinationX = 0;
                    zombie[compteurZombie-1].destinationY = cadre.hauteur-180/2;
                }
            }
        }
    }, 2000);

    setInterval(function(){
        if(sectionRegle.style.display == 'none' && sectionContact.style.display == 'none' && sectionGameOver.style.display == 'none' && sectionCv.style.display == 'none'){
            sonZombie.play();
        }
    }, 5000);


    // Création des bonus
    var bonus = [];
    for(var compteurBonus = 0; compteurBonus < 10; compteurBonus++){
        bonus.push(new Bonus);
        bonus[compteurBonus].sourceX = 32*compteurBonus;
        bonus[compteurBonus].destinationX = 32*compteurBonus*2;
    }
    
    // Création des sprites
    var spriteStickMan = new Image();
    spriteStickMan.src = stickman.src;
    var spriteZombie = new Image();
    spriteZombie.src = 'img/sprite_zombie.png';
    var spriteBonus = new Image();
    spriteBonus.src = 'img/sprite_bonus.png';
    
    // Initialisation des différentes variables
    stickman.sourceY = 0;
    stickman.destinationY = cadre.hauteur-stickman.hauteur*stickman.agrandissement;
    stickman.destinationX = cadre.largeur/2;
    balle.x = stickman.destinationX+stickman.gunX;
    balle.y = stickman.destinationY+stickman.gunY;

    var zombieTue = 0;
    var nombreBonusObtenus = 0;       

    
    // Fonction principal d'animation
    // Dans cette fonction on exécute les fonctions de dessins et d'update de tous les objets. On commence par les fonctions de mises à jour pour modifier les valeurs du prochain dessin, pour ensuite dessiner les images avec ces nouvelles valeurs
    var loopDraw = function(){
        // Effacement du cadre
        cadre.context.clearRect(0, 0, cadre.largeur, cadre.hauteur);

        cadre.context.font = '20px ActionMan';
        cadre.context.fillStyle = 'black';
        cadre.context.fillText('Nombre de zombies tués : '+zombieTue, 0, 17);

        // Update et dessin de la balle
        if(balle.animation){
            var returnBalle = balle.update(zombie, compteurZombie, bonus, nombreBonusObtenus);
            if(returnBalle == 1){
                zombieTue++;
            }
            else if(returnBalle == 2){
                nombreBonusObtenus++;
            }
            balle.draw();
        }

        // Dessin du viseur
        viseur.drawViseur();
        // viseur.drawLine();

        // Update et dessin du stickman
        stickman.updateStickman(stickman.animationDroite, stickman.animationGauche, stickman.animationJump);
        stickman.drawStickman(spriteStickMan, stickman.sourceX, stickman.sourceY);

        // Dessin des zombies
        if(sectionContact.style.display == 'none' && sectionCv.style.display == 'none'){
            if(compteurZombie>0){
                for(var i = 0; i<compteurZombie; i++){
                    if(zombie[i]!=''){
                        zombie[i].drawPnj(spriteZombie);
                        zombie[i].updatePnj(zombie, compteurZombie);
                    }
                }
            }
        }

        
        // Dessin des bonus
        switch(true){
            case zombieTue>=50:
                if(bonus[9]!=''){
                    bonus[9].debloque = true;
                    bonus[9].drawBonus(spriteBonus);
                    bonus[9].updateBonus();
                } 
            case zombieTue>=45:
                if(bonus[8]!=''){
                    bonus[8].debloque = true;
                    bonus[8].drawBonus(spriteBonus);
                    bonus[8].updateBonus();
                } 
            case zombieTue>=40:
                if(bonus[7]!=''){
                    bonus[7].debloque = true;
                    bonus[7].drawBonus(spriteBonus);
                    bonus[7].updateBonus();
                } 
            case zombieTue>=35:
                if(bonus[6]!=''){
                    bonus[6].debloque = true;
                    bonus[6].drawBonus(spriteBonus);
                    bonus[6].updateBonus();
                } 
            case zombieTue>=30:
                if(bonus[5]!=''){
                    bonus[5].debloque = true;
                    bonus[5].drawBonus(spriteBonus);
                    bonus[5].updateBonus();
                } 
            case zombieTue>=25:
                if(bonus[4]!=''){
                    bonus[4].debloque = true;
                    bonus[4].drawBonus(spriteBonus);
                    bonus[4].updateBonus();
                } 
            case zombieTue>=20:
                if(bonus[3]!=''){
                    bonus[3].debloque = true;
                    bonus[3].drawBonus(spriteBonus);
                    bonus[3].updateBonus();
                } 
            case zombieTue>=15:
                if(bonus[2]!=''){
                    bonus[2].debloque = true;
                    bonus[2].drawBonus(spriteBonus);
                    bonus[2].updateBonus();
                } 
            case zombieTue>=10:
                if(bonus[1]!=''){
                    bonus[1].debloque = true;
                    bonus[1].drawBonus(spriteBonus);
                    bonus[1].updateBonus();                                  
                }    
            case zombieTue>=5:
                if(bonus[0]!=''){
                    bonus[0].debloque = true;
                    bonus[0].drawBonus(spriteBonus);
                    bonus[0].updateBonus();
                }
                break;
        }
        if(nombreBonusObtenus == 10){
            sectionWin.style.display = 'block';
            sectionJeu.style.display = 'none';
            setTimeout(function(){
                sectionCv.style.display = 'flex';
                sectionWin.style.display = 'none';
            }, 2000);
            return;
            
        }

        requestAnimationFrame(loopDraw);
    }
    // Premier appel à la fonction principale pour initialiser l'animation du canvas
    loopDraw();
    
});    

// Code
// Zombie aléatoire
// Son mort et son mort zombie

// Dessin
// Amélioration sprite bonus

// Commenter le code



