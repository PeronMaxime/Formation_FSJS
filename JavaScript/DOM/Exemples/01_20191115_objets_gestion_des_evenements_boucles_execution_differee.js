"use strict";

for(var i = 0; i < window.document.body.children.length; i++) {
    // !!! INCORRECT !!!
    /*window.document.body.children[i].onclick = function(){
        window.document.body.children[i];
        i; // 94, lors de l'exécution du gestionnaire d'évènement i aura la dernière valeur atteint à l'issue de la boucle.
    };
    */

    // CORRECT
    window.document.body.children[i].onclick = function(){
        this; // fait référence à l'objet dans lequel se trouve les gestionnaire d'evenement.
        // On peut modifier l'objet qui contient le gestionnaire d'évenement en partant de this.
    };

    // CORRECT
    /*window.document.body.children[i].onclick = (function(){
        // Cette IFE permet de sauvegarder la valeur courant de i lors de son exécution.
        var sauvegarde = i;
        // Elle retourne le gestionnaire d'évenement qui sera référencé dans .onclick
        return function(){
            // ici on utilise pas i mais la valeur sauvegarde qui contient la valeur courant de i lorsque la fonction est retournée.
            window.document.body.children[sauvegarde];
            console.log(sauvegarde);
        }
    })();*/
}

// En ES6 on peut utiliser let. let permet de créer 1 variable i différente de la précédente pour chaque tour de boucle.
for(let i = 0; i < window.document.body.children.length; i++) {
    window.document.body.children[i].onclick = function(){
        // ici on utilise i sachant que "chaque" i sera différent du précédent.
        window.document.body.children[i]; // CORRECT
    };
}
