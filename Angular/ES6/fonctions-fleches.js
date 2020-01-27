// Expression
var additionner = function(a, b) {
    return a + b;
}
console.log(additionner(2, 3));
/*
// Déclaration
function additionnerAussi(a, b) {
    return a + b;
}
*/

// Pas d'accolades, on retourne automatiquemnt la valeur produite par l'expression (le mot-clé return est implicite).
var additionFleche = (a, b) => a + b;

console.log(additionFleche(3, 5));


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// Exemple de MDN (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter) écrit en ES5 avec le mot-clé function.
const motsDe7CarEtPlus = words.filter(function(mot) {
    return mot.length > 7;
});

// Ici reprise de l'exemple de MDN.
const result = words.filter(word => word.length > 6);
console.log('motsDe7CarEtPlus', motsDe7CarEtPlus);

// Avec des accolades le mot-clé return est obligatoire pour retourner la valeur.
var fonctionVide = () => {
    return 'coucou';
};
console.log(fonctionVide());

// Fonction constructeur classique avec le mot-clé function ES5.
var MaVoiture = function() {
    // this = {}
    this.couleur = 'rouge';
    this.afficherDescription = function() {
        return 'J\'ai une voiture ' + this.couleur;
    }
    // return this;
}
var voiture1 = new MaVoiture();
console.log(voiture1.afficherDescription());


this.titi = 'toto'; // Illustration du fait que this === window dans le contexte global.

var monScooter = () => {
    this.puissance = 'faible'; // Ici on crée une nouvelle propriété sur l'objet global "window", parce que la fonction flèche ne crée pas de contexte.
}
monScooter();

/**
 * Attention au fonction flèches dans un objet, "this" n'a pas de valeur propre au sein de la méthode afficherAussiVitesses(), car c'est une fonction flèche.
 */
var monVelo = {
    vitesses: 15,
    afficherVitesses: function() {
        console.log('Nombre de vitesses ' + this.vitesses);
    },
    afficherAussiVitesses: () => {
        console.log('Nombre de vitesses ' + this.vitesses);
    }
}
monVelo.afficherVitesses();
monVelo.afficherAussiVitesses();

// ES6 introduit la possibilité de donner des valeurs par défaut aux arguments
var multiplier = function(a, b = 1) {
    // b vaudra 1 si on ne passe pas de deuxième valeur.
    return a * b;
}
console.log(multiplier(1, 2));
console.log(multiplier(2, 3));
console.log(multiplier(5)); // Ici 5 sera multiplié par 1
