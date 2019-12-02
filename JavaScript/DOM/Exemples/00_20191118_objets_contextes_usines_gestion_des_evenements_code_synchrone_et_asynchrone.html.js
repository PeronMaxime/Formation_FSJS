"use strict";

/**
 * Les objets  
*/
// I. Déclaration littérale :
{};
[];

var referenceVersObjet = {
    propriete1: 42,
    methode1: function(){
        this; // fait référence à l'objet dans lequel se trouve la méthode lors de son exécution
        window.alert(this.propriete1);
    }
};

// 1ère Situation qui peut engendrer des problèmes de contexte :

// Attention ! dans ce cas la fonction .methode1 n'est pas exécutée dans son objet d'origine :
// window.setTimeout(referenceVersObjet.methode1,5000);

// Pour résoudre ce problème de contexte on a 2 possibilités :

/**
 * 1ère Possibilité : passer par une fonction intermédiaire qui permet de
 * faire en sorte que la méthode soit exécutée à l'intérieur de l'objet ou 
 * elle se trouve à l'origine.
 */
/*window.setTimeout(function(){
    referenceVersObjet.methode1();
},5000);*/
/**
 * 2ème Possibilité : Utiliser la méthode .bind des objets de type Function
 * pour fixer la valeur de this
 */
/*var methode1AvecThisFixe = referenceVersObjet.methode1.bind(referenceVersObjet);
window.setTimeout(methode1AvecThisFixe, 5000);*/

// Autre situation avec problème de contexte :

var referenceVersUnAutreObjet = {
    propriete1: 42,
    methode1: function(){
        /*
        this; // fait référence à l'objet dans lequel se trouve la méthode lors de son exécution
        window.setTimeout(function(){
            // Attention ! Ici this fera référence à Window lorsque le NAVIGATEUR exécute la fonction
            window.alert(this.propriete1);
        },5000);  
        */

        // ** 1ère Stratégie pour préserver le contexte :
        // On sauvegarde la référence qui est dans this dans une variable :
        /*
        var ceci = this;
        window.setTimeout(function(){
            // Ici on utilise la variable plutôt que this :
            window.alert(ceci.propriete1);
        },5000); 
        */

        // ** 2ème Stratégie pour préserver le contexte :
        // On utilise la méthode .bind pour fixer la valeur de this
        /*
        // => On déclare la fonction
        var maFonction = function(){
            // Ici on utilise la variable plutôt que this :
            window.alert(this.propriete1);
        };

        // => On créé une copie de la fonction avec le this fixé à la valeur actuelle de this
        var maFonctionAvecThisFixe = maFonction.bind(this);
        
        // => On transmet la copie avec valeur de this fixe à setTimeout pour exécution
        window.setTimeout(maFonctionAvecThisFixe, 5000); 
        */
        // Peut être compacté en :
        /*window.setTimeout(function(){
            window.alert(this.propriete1);
        }.bind(this), 5000);*/

        // ** 3ème Stratégie pour préserver le contexte (ES2016 et plus)
        // Utiliser une fonction flèche :
        window.setTimeout(() => {
            // Ici this fait référence à l'emplacement ou la fonction est déclaré (ici dans cet objet)
            window.alert(this.propriete1);
        },5000); 
    }
};

referenceVersUnAutreObjet.methode1();

// II. Fonctions constructeur :
// => Déclaration :
var FabricantDeVoitures = function(c,p){
    this.portes = 5; // propriété fixée
    this.capaciteDuReservoir = 50; // propriété fixée
    this.carosserie = "aluminium"; // propriété fixée

    this.couleur = c || "Blanc"; // propriété par défaut

    if (p) {
        this.proprietaire = p;
    } else {
        this.proprietaire = "Renault"; // propriété par défaut
    }
    
    // "propriété" privée
    var bruit = "Vroooooom !";
    // On a accès à cette variable dans toutes les méthodes des objets
    // qui seront créés à l'aide de cette fonction constructeur mais
    // on ne peut pas accéder à cette variable depuis l'exterieur de ces objets.

    this.methodeVroom = function(){
        this.capaciteDuReservoir--;
        window.alert(bruit);
    };
};

// => Utilisation :
var voiture1 = new FabricantDeVoitures("vert", "Serge");
var voiture2 = new FabricantDeVoitures("bleu", "Moulay");
var voiture3 = new FabricantDeVoitures();

voiture3.methodeVroom(); // affiche Vroooooom !
// pourtant la propriété voiture.bruit n'EXISTE PAS !

/**
 * Le prototypage :
 */
/**
 * Avec l'objet fondamental Object et la méthode .create()
 */

var donneMoiUnObjet = (function() {
    
    var lePrototype = {
        sePresente: function(){
            window.alert("Je m'appelle " + this.prenom + " " + this.nom + " !");
        }
    };

    return function(unNom, unPrenom){
        var objetDeDefinitionDeProprietes = {
            nom: {
                value: unNom,
                writable: false,
                enumerable: true,
                configurable: false
            },
            prenom: {
                value: unPrenom,
                writable: false,
                enumerable: true,
                configurable: false
            }
        }; 

        return Object.create(lePrototype, objetDeDefinitionDeProprietes);
    }   
}()); // IFE ! - Design pattern : fonction usine

var unObjet = donneMoiUnObjet("Radi", "Sami");
var unAutreObjet = donneMoiUnObjet("Peron", "Maxime");

/**
 * Avec les fonctions constructeur et leur propriété .prototype
 */
// 1 - On déclare le prototype
var lePrototype = {
    // plutôt des méthodes ...
};
// 2 - On déclare la fonction constructeur
var MaFonctionConstructeur = function(){
    // de préférence des propriété propres ...
}

// 3 - On assigne le prototype à la propriété .prototype de la fonction constructeur 
MaFonctionConstructeur.prototype = lePrototype;
// On restaure la référence au constructeur :
MaFonctionConstructeur.prototype.constructor = MaFonctionConstructeur;

// 4 - On peut utiliser la fonction constructeur :
var obj1 = new MaFonctionConstructeur();

// OU ALORS

// 1 - On déclare la fonction constructeur
var MaFonctionConstructeur = function(){
    // de préférence des propriété propres ...
}
// 2 - On "remplit" le prototype par défaut dans la propriété .prototype
MaFonctionConstructeur.prototype.methode1 = function(){
    //blablabla ...
}
MaFonctionConstructeur.prototype.methode2 = function(){
    //blablabla ...
}
// etc ...
// 4 - On peut utiliser la fonction constructeur :
var obj1 = new MaFonctionConstructeur();

/**
 * Le Modèle Objet du Document
 */

// Déclencher du code au chargement du document avant son affichage
// 1 - Soit on assigne une méthode à la propriété qui est relative à l'évenement qu'on souhaite prendre en charge
window.onload = function(){

    // cette méthode qui est déclenchée au chargment de la page s'appelle :
    // - un gestionnaire d'évenement (event handler)
    // - ou encore un écouteur d'évenement (event listener)

    window.alert("Prêt à afficher le rendu du document");

}; // cette méthode sera exécutée PAR le navigateur quand ce dernier sera prêt à afficher le rendu graphique du document.

// 2 - Soit on utilise la méthode .addEventListener (qui est disponible sur TOUS les element du DOM) pour assigner une méthode à déclencher lorsqu'un évenement survient :
window.addEventListener("load", function(unObjetEvenementGenerique){
    // Cette boite de dialogue s'affichera juste avant l'affichage du rendu graphique
    window.alert("Prêt à afficher le rendu du document");
    unObjetEvenementGenerique; // un objet de type Event
});

// On assigne un écouteur d'évenement à l'évnement DOMContentLoaded qui survient juste après le chargement du DOM en mémoire
window.addEventListener("DOMContentLoaded", function(){
    // Cette boite de dialogue s'afficher juste après le chargement du DOM en mémoire
    window.alert("DOM Chargé");
    this; // référence à Window

    var HTMLSpanElement = window.document.getElementById("leSpan");

    // On associe une méthode à l'évenement onclick de l'element de type span
    var gestionnaireDEvenementPourLeSpan = function(abouleDesTrucs){
        window.console.log("Cliqué !");
        window.console.dir(this);
        // this est une référence à l'element qui contient l'écouteur/gestionnaire d'évenement
        this.style.color = "red";

        abouleDesTrucs; // fait référence à un objet de type MouseEvent
        console.log(abouleDesTrucs);

        this.style.position = "absolute";
        this.style.left = abouleDesTrucs.clientX + "px";
        this.style.top = abouleDesTrucs.clientY + "px";
    };

    HTMLSpanElement.addEventListener("click", gestionnaireDEvenementPourLeSpan);

    // Pour supprimer un gestionnaire d'évenement associé à un noeud du DOM
    // HTMLSpanElement.removeEventListener("click", gestionnaireDEvenementPourLeSpan);

    // Attention au valeur par défaut des propriétés de style du DOM
    if ( '' === HTMLSpanElement.style.marginLeft ) {
        // par défaut les propriété de style du DOM on pour valeur une chaine
        // de caractere vide "" qu'il peut être nécessaire d'initialiser
        // pour éviter des bugs.
        HTMLSpanElement.style.marginLeft = "0px";
    }

    // Ici le fait d'avoir initialisé la marge permet de faire un parseFloat
    // sans obtenir de NaN suite à la conversion.
    var unNombreFlottant = parseFloat(HTMLSpanElement.style.marginLeft);
    // unNombreFlottant contient 0

    HTMLSpanElement.style['color'] = "red";
    HTMLSpanElement.style['font-weight'] = "bold";
    HTMLSpanElement.style['font-size'] = "48px";
    // ou alors :
    // HTMLSpanElement.style.fontSize = "48px";
});

/**
* Notion de code asynchrone
*/
console.log("Début");

var suiteDuCodeUtilisantLeResultat = function(leResultat) {
    console.log(leResultat);
}
var resultat;
// La fonction fournie à setTimeout sera exécuté dans le futur.
window.setTimeout(function(){
    // Cette fonction est exécutée de façon Asynchrone
    console.log("Je m'exécute");

    resultat = 56 + 78;

    for(var i = 0; i < 99999; i++) {
        console.log(i);
    }

    // Ici c'est le seul endroit ou on peut utiliser résultat en étant sûr qu'il est défini
    suiteDuCodeUtilisantLeResultat(resultat);
}, 10000);

window.setTimeout(function(){
    // Cette fonction est exécutée de façon Asynchrone
    // Mais après la précedente, quel que soit le temps d'éxécution de cette dernière
    console.log("2ème fonction asynchrone"); 
}, 10000);

console.log("Fin");























