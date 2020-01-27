// litteraux-de-gabarits
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Litt%C3%A9raux_gabarits

var monTexte = "Lorem \n" + "ipsum"; // Pour écrire un saut de ligne il faut échapper le caractère en ES5
console.log(monTexte);

// ES6 introduit les Littéraux de gabarit avec les backticks (`).

var superChaine = `Lorem 



ipsum`;
console.log(superChaine);

var animal = 'ornithorynque';
var nom = 'Pascal';
var presentation = 'Mon ' + animal + ' s\'appelle ' + nom;
console.log(presentation);

// On peut interpoler des valeur
var presentationEs6 = `Mon ${animal} s'appelle ${nom}`;
console.log(presentationEs6);

var maChaineCompliquee = `${10 + 2}, ${3 > 5}`;
console.log(maChaineCompliquee);

var obj = {nom: 'Pascal'};
console.log(`${obj.toString()}`);

// Pas une bonne idée : on peut mettre une IIFE dans un template
var maChaineBizarre = `5 + 3 font : ${(() => 5 + 8)()}`;
console.log(maChaineBizarre);

