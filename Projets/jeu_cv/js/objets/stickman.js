// Fonction constructeur de stickman
var Stickman = function(){
    this.src = 'img/sprite_stickman.png';
    this.gunX = 64;
    this.gunY = 50;
    this.animationDroite = false;
    this.animationGauche = false;
    this.animationJump = false;
    this.jumpUp = false;
    this.jumpDown = false;
    this.vitesseJump = 7;
    this.idAnimation = 0;
    this.step = 0;
};

// Définition du prototype de stickman et de la source de son sprite
Stickman.prototype = personnage;

// Définition des méthodes de stickman
Stickman.prototype.drawStickman = function(sprite, sourceX, sourceY){
    
    // Dessiner stickman(sprite, sourceX, sourceY, sourceLargeur, sourceHauteur, destinationX, destinationY, destinationLargeur, destinationHauteur)
    cadre.context.drawImage(sprite, sourceX, sourceY, stickman.largeur, stickman.hauteur, stickman.destinationX, stickman.destinationY, stickman.largeur*stickman.agrandissement, stickman.hauteur*stickman.agrandissement);
    
};

Stickman.prototype.updateStickman = function(droite, gauche, jump){
    // Update des positions de stickman
    
    // On change la sourceY du sprite et la vitesse de déplacement en fonction de si l'animation est droite ou gauche
    if(droite){
        stickman.sourceY = stickman.hauteur*2;
        stickman.vitesse = 5;
    }
    if(gauche){
        stickman.sourceY = stickman.hauteur;
        stickman.vitesse = -5;
    }
    
    
    // Si au moins une animation est active, alors on fait les mises à jour
    if(droite || gauche){
        
        // A chaque update on incrémente step, et si step vaut 5 (soit toutes les 5 updates), alors on change d'image
        if(stickman.step == 5){
            
            // Changement d'image
            stickman.sourceX += stickman.largeur;
            // Si on arrive à la fin du sprite, on retourne au début pour continuer la boucle d'animation
            if(stickman.sourceX == stickman.largeur*9){
                stickman.sourceX = 0;
            }
            // Réinitialisation de step pour la prochaine image
            stickman.step = 0;
        }
        
        // Déplacement de la destination de stickman par rapport à sa vitesse (ici 5px) s'il se trouve dans le cadre du jeu
        if(stickman.destinationX+stickman.vitesse <= cadre.largeur-stickman.largeur*stickman.agrandissement && stickman.destinationX+stickman.vitesse >= 0){
            stickman.destinationX += stickman.vitesse;
        }
        else{
            stickman.sourceX = 0;
        }
        
        // Incrémentation de step
        stickman.step++;
        
    }
    
    // Si jump est à true, alors on modifie la valeur Y de stickman
    if(jump){
        // Changement de la source du sprite pour afficher l'image du saut
        stickman.sourceY = 0;
        stickman.sourceX = stickman.largeur;
        
        // Si la position Y de stickman est supérieur à la valeur maximale du saut on diminue son Y pour la phase montante du saut
        if(stickman.destinationY > cadre.hauteur-(stickman.hauteur*stickman.agrandissement)-150 && stickman.jumpUp){
            stickman.destinationY -= stickman.vitesseJump;
        }
        // Si la position Y de stickman inférieur ou égale à la valeur maximale du saut, on passe en phase descendante du saut, et on augmante sa valeur Y
        else{
            stickman.jumpUp = false;
            stickman.jumpDown = true;
            
            // Si stickman revient à sa position initiale alors on réinitialise les sources du sprite, on quitte la phase descendante et on quitte l'animation du saut
            if(stickman.destinationY >= cadre.hauteur-stickman.hauteur*stickman.agrandissement){
                stickman.sourceY = stickman.hauteur*2;
                stickman.sourceX = 0;
                stickman.jumpDown = false;
                stickman.animationJump = false;
            }
            stickman.destinationY += stickman.vitesseJump;
        }

    }
    
};


var stickman = new Stickman;



