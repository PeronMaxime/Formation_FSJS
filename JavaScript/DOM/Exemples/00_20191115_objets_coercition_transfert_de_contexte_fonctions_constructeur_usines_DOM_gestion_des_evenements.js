"use strict"
/**
 * Types de données
 */

// Immutables : types primitifs
// Number
var unNombre = 2;
// Fonction constructeur de coercition
Number;
// Si on écrit :
(2).toString(); // le moteur fait : (new Number(2)).toString();
// Boolean
var unBooleen = true;
// Fonction constructeur de coercition
Boolean;
// Si on écrit :
(false).toString(); // le moteur fait : (new Boolean(false)).toString();
// String
var unChaine = "Bonjour";
// Fonction constructeur de coercition
String;
// Si on écrit :
("Hello !").toLowerCase(); // le moteur fait : (new String("Hello !")).toLowerCase()

// Type mutables : type de données composés
// Les fonctions :
// Quand on écrit :
var maFonction = function(nbr1, nbr2){
    var resultat = nbr1 + nbr2;
    return resultat;
}
// Le moteur en réalité utilise la fonction constructeur Function pour créer la fonction :
var maFonction = new Function("nbr1","nbr2", "var resultat = nbr1 + nbr2;return resultat;");

// On peut exécuter le code à l'intérieur d'une fonction en utilisant les ()
maFonction();
// On peut également exécuter des méthodes de l'objet référencé dans la variable ma fonction

// Les objets :
// Quand on écrit :
var monObjet = {
    propriete1: 'toto',
    methode1: function(){
        // instructions
    }
};
// Le moteur en réalité utilise la fonction constructeur Object pour créer l'objet :
var monObjet = new Object({
    propriete1: 'toto',
    methode1: function(){
        // instructions
    }
});

/**
 * Les contextes 
 */
var monChien = {
    prenom: 'Medor',
    aboiement: 'Wouf wouf !',
    aboit: function(){
        this; // pointe vers l'objet dans lequel se trouve la méthode...
        this.aboiement; // pointe vers la propriété .aboiement de l'objet dans lequel se trouve la méthode...
        // => LORS DE SON exécution
        return this.aboiement;
        window.alert(this.prenom);
    }
};

monChien.aboit(); // j'obtiens 'Wouf wouf !'

var sePresente = function(){
    window.alert(this);
    window.alert(this.prenom);
};

// sePresente(); // this lors de l'exécution de la fonction pointera vers rien du tout => affiche undefined
sePresente.call(monChien); // this lors de l'exécution de la fonction pointera vers le chien => affiche Medor

/**
 * Les objets 
 */
/* Créer des objets */
// Notation littérale (Notation Objet JavaScript):
{};
[];
// A l'aide fonctions constructeur :
// 1 - Créer une fonction constructeur
var FabriqueDeFurby = function(c){
    this.couleur = c;
    this.estVelu = true;
    this.parle = function(){
        window.alert("Ho Ho soleil couché !");
    };
}
// 2 - Créer un objet à partir de la fonction constructeur
// => Utiliser le mot-clé new
var furby1 = new FabriqueDeFurby("rouge");
var furby2 = new FabriqueDeFurby("green");
var furby3 = new FabriqueDeFurby("blue");

/**
 * Design patterns (patrons de conception / bonnes pratiques)
 */
// Patron de conception : "Sub-Class"
var FabriqueDeTurby = function(col){
    /**
     * On appelle une fonction constructeur en lui transmettant
    * l'objet qu'on est en train de créer ainsi que les 
    * paramétres dont cette fonction constructeur à besoin
    */
    FabriqueDeFurby.call(this,col);
    // Ici toutes les propriété définies par la fonction constructeur FabriqueDeFurby ont été à attachée à this.
    // On peut désormais rattacher les "notres"
    this.estVelu = false;
    this.aDesEcailles = true;
};

// EN ES6+ on écrirait le même design pattern comme suit :
/*class FabriqueDeTurby extends FabriqueDeFurby {
    constructor(col){
        super(col); // correspond à FabriqueDeFurby.call(this,col);
        this.estVelu = false;
        this.aDesEcailles = true;
    }
}*/

var turby1 = new FabriqueDeTurby("multicolore");

// Patron de conception : Fonction usine (Factory Function)
var laFonctionUsineQuiCreeUneTel = (function(){
    var Huawei = function(c){
        this.ecran = "IPS";
        this.taille = "5 pouces";
        this.sonnerie = "Tatatitata !";
        this.couleur = c;
        this.puceDeApl = true;
        this.os = "Android";
    };

    Huawei.prototype.sonne = function(){
        window.alert(this.sonnerie);
    }

    Huawei.prototype.casseEcran = function(){
        this.ecran = "craaaaac !";
    }

    Huawei.prototype.camera = function(){
        // balbalbala
    }

    // Closure: on retourne une référence à une rféren
    return function(couleur) {
        return new Huawei(couleur);
    };
}()); // Fonction exécutée immédiatement

var unTel = laFonctionUsineQuiCreeUneTel("jaune");
var unAutreTel = laFonctionUsineQuiCreeUneTel("rouge");

/**
 * Le Modèle Objet du Document
 */

/**
 * On peut ajouter une fonction dans une propriété d'un objet du DOM 
 * qui correspond à un évènement.
 * Cette fonction sera exécutée PAR le navigateur lorsque l'évènement
 * sera détécté par le navigateur.
 * Ce type de fonctions s'appelle :
 * - gestionnaire d'évenement (event handler en anglais)
 * - ou écouteur d'évenement (event listener en anglais)
 */
window.onload = function(){
    // Cette fonction sera exécutée uniquement lorsque le navigateur aura fini de chargé l'ensemble du document
    // Dans cette fonction on peut écrire SANS risques des instructions qui manipulent des elements du DOM.
    // Par exemple :
    window.document.body.children[9].onclick = function(){alert("pouet");}

    for(var i = 0; i < window.document.body.children.length; i++) {
        window.document.body.children[i].style.color = "red";
    }

    window.document.body.children[0].children[0].children[0].children[0].children[0].style.fontWeight = "bold";

    var referenceAObjetQuiCorrespondAuSpan = window.document.getElementById("leSpan");

    referenceAObjetQuiCorrespondAuSpan.style.fontSize = "24px"

    var tableauDeReferencesADesObjetDuDom = window.document.getElementsByClassName("toto");

    tableauDeReferencesADesObjetDuDom[1].style.border = "2px solid pink";
};

/**
 * Interêt des IFE : meilleures performances et moins de mémoire consommée
 * IFE : Immediate Function Execution
 */
var uneFonctionQuiManipuleUnTableau = (function(){
    // le tableau est créé
    var monTableau = ["des choses", "d'autres choses", "et encore d'autres choses"];
    // la fonction IFE retourne tout de suite une fonction
    return function(){
        for( var i = 0; i < monTableau.length; i++) {
            var aAfficher = monTableau[i] + " belles";
            window.alert(aAfficher);
        }
    }
}());

uneFonctionQuiManipuleUnTableau; // contient la fonction retournée qui boucle sur le tableau

// A chaque fois qu'on exécute cette fonction
uneFonctionQuiManipuleUnTableau();
// On ne re crée pas le tableau
uneFonctionQuiManipuleUnTableau();










