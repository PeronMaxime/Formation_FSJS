// Tout le code est généré seulement lorsque le DOM est chargé
addEventListener('load', function(){

    // Injection des script JavaScript contenant les objets
    // Script du cadre
    var scriptCadre = document.createElement('script');
    scriptCadre.src = "js/objets/cadre.js";
    document.body.appendChild(scriptCadre);

    // Script de StickMan
    var scriptStickman = document.createElement('script');
    scriptStickman.src = "js/objets/stickman.js";
    document.body.appendChild(scriptStickman);

    // Script du viseur
    var scriptViseur = document.createElement('script');
    scriptViseur.src = "js/objets/viseur.js";
    document.body.appendChild(scriptViseur);

    // Script de la balle
    var scriptBalle = document.createElement('script');
    scriptBalle.src = "js/objets/balle.js";
    document.body.appendChild(scriptBalle);

    // Script du Pnj
    var scriptPnj = document.createElement('script');
    scriptPnj.src = "js/objets/pnj.js";
    document.body.appendChild(scriptPnj);

    // Script des blocs
    var scriptBloc = document.createElement('script');
    scriptBloc.src = "js/objets/bloc.js";
    document.body.appendChild(scriptBloc);

    // Script des events
    var scriptEvent = document.createElement('script');
    scriptEvent.src = "js/event.js";
    document.body.appendChild(scriptEvent);
    
    // Le code principal est exécuté seulement lorsque tous les fichiers JS sont chargés
    scriptStickman.addEventListener('load', function(){
        scriptViseur.addEventListener('load', function(){
            scriptBalle.addEventListener('load', function(){
                scriptPnj.addEventListener('load', function(){
                    scriptBloc.addEventListener('load', function(){

                        // Création du sprite
                        var spriteStickMan = new Image();
                        spriteStickMan.src = stickman.src;
                        // console.log(spriteStickMan);
                        var spriteZombi = new Image();
                        spriteZombi.src = pnj.src;
                        // console.log(spriteZombi);
                        
                        // Initialisation des différentes variables
                        stickman.sourceY = stickman.hauteur*2;
                        stickman.destinationY = cadre.hauteur-stickman.hauteur*stickman.agrandissement;
                        balle.x = stickman.destinationX+stickman.gunX;
                        balle.y = stickman.destinationY+stickman.gunY;
                        pnj.destinationX = cadre.largeur-64;
                        pnj.destinationY = cadre.hauteur-64;
                        
                        // Fonction principal d'animation
                        // Dans cette fonction on exécute les fonctions de dessins et d'update de tous les objets. On commence par les fonctions de mises à jour pour modifier les valeurs du prochain dessin, pour ensuite dessiner les images avec ces nouvelles valeurs
                        var loopDraw = function(){
                            // On envoie les valeurs d'animation de chaque direction pour savoir quelle mise à jour effectuer
                            cadre.context.clearRect(0, 0, cadre.largeur, cadre.hauteur);
                            // bloc1.drawBloc(500, cadre.hauteur-50, 100, 50);
                            // bloc2.drawBloc(350, cadre.hauteur-50, 100, 50);
                            // bloc3.drawBloc(650, cadre.hauteur-100, 100, 100);
                            // bloc4.drawBloc();
                            // bloc5.drawBloc();
                            if(balle.animation){
                                balle.update();
                                balle.draw();
                            }
                            viseur.drawViseur();
                            // viseur.drawLine();
                            stickman.updateStickman(stickman.animationDroite, stickman.animationGauche, stickman.animationJump);
                            stickman.drawStickman(spriteStickMan, stickman.sourceX, stickman.sourceY);
                            pnj.drawPnj(spriteZombi);
                            requestAnimationFrame(loopDraw);
                        }
                        // Premier appel à la fonction principale pour initialiser l'animation du canvas
                        loopDraw();
                    });
                });
            });
        });
    });
    
    

});    

// Commenter le code
// Apparition des zombies
// Gestion de plusieurs zombies
// Amélioration des sprites (couleur, dessin du flingue, animation du tir)
// Apparition des bonus (un bonus apparait tous les 5 zombies tués)
// Bruitage
// Condition de victoire
// Condition de défaite
// Surlignement texte lors d'un clic (pas bien !)
// Vérifier compatibilité navigateurs



