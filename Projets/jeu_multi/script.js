class Game {

        constructor(){
            this.modifierLigne = document.getElementById("modifier_ligne");
            this.avancer = document.getElementById("avancer");
            
            /****************************************************************
             ***************************VARIABLES**************************** 
             ****************************************************************/
        
            // Variables plateau
            this.tailleBody = document.body.offsetWidth;
            // Variables blocs
            this.nombreBlocLargeur = 10;
            this.nombreBlocHauteur = 7;
            this.tableauBloc = [];
            // Variables joueurs
            this.positionJ1X = 0;
            this.positionJ1Y = 3;
            this.direction = "";
        }

        /*****************************************************************
        ****************************Méthodes****************************** 
        *****************************************************************/
        createElements(){
            // Création du plateau
            this.plateau = document.createElement("div");
            this.plateau.style.width = this.tailleBody/2+"px";
            this.plateau.style.height = this.plateau.offsetWidth*0.7+"px";
            this.plateau.style.display = "flex";
            this.plateau.style.flexWrap = "wrap";
            this.plateau.style.margin = "auto";
            document.body.appendChild(this.plateau);
            // Définition de la taille d'un bloc en fonction de la taille du plateau
            this.tailleBloc = this.plateau.offsetWidth/10-3;
        
            // Création du joueur 1 
            this.joueur1 = document.createElement("div");
            this.joueur1.style.width = this.joueur1.style.height = this.tailleBloc+"px";
            this.joueur1.style.backgroundColor = "blue";
            this.joueur1.style.borderRadius = this.tailleBloc+"px";
            this.joueur1.style.position = "absolute";
            document.body.appendChild(this.joueur1);
        
            // Création des flèches de direction
            this.flecheHaut = document.createElement("div");
            this.flecheHaut.style.width = this.flecheHaut.style.height = this.tailleBloc+"px";
            this.flecheHaut.style.backgroundImage = "url('img/up.png')";
            this.flecheHaut.style.backgroundSize = "cover";
            this.flecheHaut.style.position = "absolute";
            document.body.appendChild(this.flecheHaut);
        
            this.flecheBas = document.createElement("div");
            this.flecheBas.style.width = this.flecheBas.style.height = this.tailleBloc+"px";
            this.flecheBas.style.backgroundImage = "url('img/down.png')";
            this.flecheBas.style.backgroundSize = "cover";
            this.flecheBas.style.position = "absolute";
            document.body.appendChild(this.flecheBas);
        
            this.flecheDroite = document.createElement("div");
            this.flecheDroite.style.width = this.flecheDroite.style.height = this.tailleBloc+"px";
            this.flecheDroite.style.backgroundImage = "url('img/right.png')";
            this.flecheDroite.style.backgroundSize = "cover";
            this.flecheDroite.style.position = "absolute";
            document.body.appendChild(this.flecheDroite);
        
            this.flecheGauche = document.createElement("div");
            this.flecheGauche.style.width = this.flecheGauche.style.height = this.tailleBloc+"px";
            this.flecheGauche.style.backgroundImage = "url('img/left.png')";
            this.flecheGauche.style.backgroundSize = "cover";
            this.flecheGauche.style.position = "absolute";
            this.flecheGauche.style.display = "none";
            document.body.appendChild(this.flecheGauche);
        }

        initBlocs(){
            for(let i=0;i<this.nombreBlocHauteur;i++){
                this.tableauBloc.push([]);
                for(let j=0; j<this.nombreBlocLargeur;j++){
    
                    this.tableauBloc[i][j] = document.createElement("div");
                    this.tableauBloc[i][j].className = "bloc";
                    this.tableauBloc[i][j].style.display = "inline-block";
                    this.tableauBloc[i][j].style.width = this.tailleBloc+"px";
                    this.tableauBloc[i][j].style.height = this.tailleBloc+"px";
                    this.plateau.appendChild(this.tableauBloc[i][j]);
    
                    let randomCase = Math.random();
    
                    if(randomCase>0.3){
                        this.tableauBloc[i][j].style.backgroundColor = "black";
                    }
                    else{
                        this.tableauBloc[i][j].style.backgroundColor = "white";
                    }
                }
            }
    
        }

        initJoueur1(){
            // Définition des positions de départ du joueur 1 et de ses flèches de directions
            this.joueur1.style.top = this.tableauBloc[3][0].offsetTop+1+"px";
            this.joueur1.style.left = this.tableauBloc[3][0].offsetLeft-this.tailleBloc+"px";
    
            this.flecheHaut.style.top = this.joueur1.offsetTop-this.tailleBloc-1+"px";
            this.flecheHaut.style.left = this.joueur1.offsetLeft+"px";
    
            this.flecheBas.style.top = this.joueur1.offsetTop+this.tailleBloc+1+"px";
            this.flecheBas.style.left = this.joueur1.offsetLeft+"px";
    
            this.flecheDroite.style.top = this.joueur1.offsetTop+"px";
            this.flecheDroite.style.left = this.joueur1.offsetLeft+this.tailleBloc+1+"px";

            this.flecheGauche.style.top = this.joueur1.offsetTop+"px";
            this.flecheGauche.style.left = this.joueur1.offsetLeft-this.tailleBloc+1+"px";
        }

        deplacerJoueur1(x, y){
            // Modification de la position du joueur 1 seulement si une case est blanche    
            if(this.tableauBloc[y][x].style.backgroundColor == "white"){
                if(this.direction == "droite"){
                    this.joueur1.style.left = this.tableauBloc[y][x].offsetLeft+1+"px";
                    this.positionJ1X+=1;
                }
                else if(this.direction == "gauche"){
                    this.joueur1.style.left = this.tableauBloc[y][x].offsetLeft+1+"px";
                    this.positionJ1X-=1;
                }
                else if(this.direction == "haut"){
                    this.joueur1.style.top = this.tableauBloc[y][x].offsetTop+1+"px";
                    this.positionJ1Y-=1;
                }
                else if(this.direction == "bas"){
                    this.joueur1.style.top = this.tableauBloc[y][x].offsetTop+1+"px";
                    this.positionJ1Y+=1;
                }
    
            }
            else{
                alert("Déplacement impossible");
            }
            
            // On déplace les flèches par rapport à la position du joueur 1 à chaque déplacement
            this.flecheHaut.style.top = this.joueur1.offsetTop-this.tailleBloc+1+"px";
            this.flecheHaut.style.left = this.joueur1.offsetLeft+"px";
    
            this.flecheBas.style.top = this.joueur1.offsetTop+this.tailleBloc+1+"px";
            this.flecheBas.style.left = this.joueur1.offsetLeft+"px";
    
            this.flecheDroite.style.top = this.joueur1.offsetTop+"px";
            this.flecheDroite.style.left = this.joueur1.offsetLeft+this.tailleBloc+1+"px";
    
            this.flecheGauche.style.top = this.joueur1.offsetTop+"px";
            this.flecheGauche.style.left = this.joueur1.offsetLeft-this.tailleBloc+1+"px";
    
        }

};

// Création d'une nouvelle instance de ma class Game
const jeuMulti = new Game();
// Lancement des méthodes du jeu qui permet de l'initialiser
jeuMulti.createElements();
jeuMulti.initBlocs();
jeuMulti.initJoueur1();


/*****************************************************************
***************************Evenements***************************** 
*****************************************************************/
    
jeuMulti.modifierLigne.addEventListener('click', function(){
    for(let i=0;i<jeuMulti.nombreBlocHauteur;i++){
        let randomCase = Math.random();
        if(randomCase>0.3){
            jeuMulti.tableauBloc[i][jeuMulti.positionJ1X].style.backgroundColor = "black";
        }
        else{
            jeuMulti.tableauBloc[i][jeuMulti.positionJ1X].style.backgroundColor = "white";
        }
    }
});

jeuMulti.flecheDroite.addEventListener('click', function(){
    jeuMulti.flecheGauche.style.display = "block";
    jeuMulti.direction = "droite";
    jeuMulti.deplacerJoueur1(jeuMulti.positionJ1X, jeuMulti.positionJ1Y);
});
jeuMulti.flecheGauche.addEventListener('click', function(){
    jeuMulti.direction = "gauche";
    jeuMulti.deplacerJoueur1(jeuMulti.positionJ1X-2, jeuMulti.positionJ1Y);
});
jeuMulti.flecheHaut.addEventListener('click', function(){
    jeuMulti.direction = "haut";
    jeuMulti.deplacerJoueur1(jeuMulti.positionJ1X-1, jeuMulti.positionJ1Y-1);
});
jeuMulti.flecheBas.addEventListener('click', function(){
    jeuMulti.direction = "bas";
    jeuMulti.deplacerJoueur1(jeuMulti.positionJ1X-1, jeuMulti.positionJ1Y+1);
});


    


    
