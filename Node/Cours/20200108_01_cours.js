"use strict";

/**
 * Nouveauté concernant les chaînes caractères :
*/

// ES3/5
"Sami aime les radis"; // string
'Sami aime les radis'; // string
// ES6+
`Sami aime les radis`;
// Avec les ` on peut effectuer des interpolations :
var legume = "radis";
var autreLegume = `rutabagas`;
`Sami aime les ${legume} et les ${autreLegume}`; // autre façon de faire une concatenation

/**
 * Nouveauté concernant les variables :
 */

// ES3/5
console.log(maVariable); // undefined
var maVariable = `Hello !`; // Problème : On peut utiliser la variable maVariable n'importe quand avant ou après son initialisation.
console.log(maVariable); // Hello !

// ES6+
// console.log(monAutreVariable); // Plante !
let monAutreVariable = `Bonjour !`; // Solution : On ne peut utiliser la variable monAutreVariable qu'à partir de son initialisation.
console.log(monAutreVariable); // Bonjour !

/**
 * Portée des variables :
 */
// ES3/5
if (true) {
    var secret = `J'aime pas les radis`;
}
console.log(secret); // J'aime pas les radis
// La variable secret est accessible à l'extérieur ou à l'intérieur du bloc if

// ES6+
if (true) {
    let autreSecret = `J'aime pas les rutabagas`;
}
// console.log(autreSecret); // Plante ! autreSecret n'est pas défini à l'extérieur du bloc if
// On ne pas utiliser une variable initialisée avec le mot-clé let à l'extérieur du bloc dans lequel elle a été créé.

// Autre mot clé : const
// const se comporte comme let mais l'assignation à une variable déclarée avec const
// ne peut avoir lieur qu'UNE fois
const uneFois = "On peut mentir 1 fois à mille personne."; // Première et dernière assignation.

// uneFois = "On ne pas mentire mille fois à une personne"; // PLANTE !

/**
 * Les blocs pour isoler du code :
 */
// ES3/5 :
// Généralement on utilise une IFE :
(function(){
    var ouSuisJe = "Caché ! :p "; // la variable est "function scoped"
}());

// console.log(ouSuisJe); // PLANTE ! not defined

// En ES6+ : on crée un bloc et on utilise let
{
    let ouEtesVous = "Cachés ! ^o^ "; // on dit que la variable est "bloc scoped"
}

// console.log(ouEtesVous); // PLANTE ! not defined

/**
 * Les fonctions
 */
// Les déclarations de fonction ou de méthodes :
// En ES3/5
var sami = {
    legumes: [
        `radis`,
        `rutabagas`
    ],
    waitForIt: function(){
        // Transfert de contexte
        // Solution 1 :
        /**
        var contexte = this;
        setTimeout(function(){
            console.log("J'aime les " + contexte.legumes[0] + " et les " + contexte.legumes[1] + " !");
        }, 1000);
        */
        // Solution 2 :
        /** Version détaillée
        var maFonction = function(){
            console.log("J'aime les " + this.legumes[0] + " et les " + this.legumes[1] + " !");
        }

        var uneFonctionAvecThisFixeALaValeurActuelle = maFonction.bind(this);

        setTimeout(uneFonctionAvecThisFixeALaValeurActuelle, 1000);
        */
        // Version compacte
        setTimeout(function(){
            console.log("J'aime les " + this.legumes[0] + " et les " + this.legumes[1] + " !");
        }.bind(this), 1000);
    }
};

sami.waitForIt();

// En ES6+
let sami1AnPlusTard = {
    legumes: [
        `patates`,
        `choucroutes`
    ],
    waitForIt: function() {
        // Transfert de contexte :
        // Avec fonction flèche
        setTimeout(() => {
            this; // Référence à l'objet dans lequel la fonction est délcarée
            console.log(`J'aime les ${this.legumes[0]} et les ${this.legumes[1]} !`);
        }, 1000);
    }
};

sami1AnPlusTard.waitForIt();

// Simplifications sur les déclarations de fonction flèche :
let maFonctionSomme = (a, b) => {
    let resultat = a + b;
    return resultat;
}
// Si la fonction n'a qu'une seule ligne de code avec un return, on peut écrire :
let maFonctionSomme1 = (a, b) => a + b; // omission des {} et du return
// Si la fonction n'a qu'un seul argument :
let maFonctionSomme2 = (a) => a + 10;
// On peut écrire :
let maFonctionSomme3 = a => a + 10; // omission des {}, du return et des ()

// Les fonctions constructeur :
// ES3/5 : 
var FabricantDeChocolat = function(prix, pourcentage){
    this.prix = prix;
    this.poids = 100;
    this.gout = "Subtil";
    this.pourcentageDeCacao = pourcentage;
}

// quelGout : méthode d'instance (doit être appelée à partir d'un OBJET créé à l'aide de la fonction constructeur)
FabricantDeChocolat.prototype.quelGout = function(){
    console.log("Le gout est " + this.gout + " ...");
}

// quiEstLeFabricant : méthode statique (doit être appelée à partir de la fonction constructeur)
FabricantDeChocolat.quiEstLeFabricant = function(){
    console.log("Le fabricant de chocolat est Nestlé !");
}

var t1 = new FabricantDeChocolat();
var t2 = new FabricantDeChocolat();

t2.quelGout();
FabricantDeChocolat.quiEstLeFabricant();

// ES6+
// mot clé class et constructor 
class FabricantDeMeilleurChocolat {
    // On déclare le code du contructeur à l'aide du mot clé constructor
    constructor(prix, pourcentage){ // on utilise pas le mot clé function
        this.prix = prix;
        this.poids = 100;
        this.gout = "Subtil";
        this.pourcentageDeCacao = pourcentage; 
    }

    // Cette méthode va dans le prototype (on utilise pas le mot clé function ici non plus)
    // quelGout : méthode d'instance (doit être appelée à partir d'un OBJET créé à l'aide de la fonction constructeur)
    quelGout() {
        console.log(`Le gout est ${this.gout} ...`);
    }

    // quiEstLeFabricant : méthode statique (doit être appelée à partir de la fonction constructeur)
    static quiEstLeFabricant() {
        console.log("Le fabricant de chocolat est Nestlé !");
    }
}

let t3 = new FabricantDeMeilleurChocolat();
let t4 = new FabricantDeMeilleurChocolat();

t4.quelGout();
FabricantDeMeilleurChocolat.quiEstLeFabricant();
console.log(FabricantDeMeilleurChocolat);

/**
 * Design pattern "Sub class"
 */

 var FabricantDePCAmericain = function(){
     this.cpu = "Intel";
     this.marque = "Dell";
     this.ram = "8Go";
     this.prix = 1200;
 }

 FabricantDePCAmericain.prototype.demarrage = function(){
     console.log("Tadaaaaaa !");
 }

 FabricantDePCAmericain.prototype.arret = function(){
    console.log("Tuduuuu !");
}
 
 var FabricantDePCChinois = function(){
    // On exécute la fonction constructeur FabricantDePC en lui transmettant la référence vers le this actuel
    FabricantDePCAmericain.call(this);
    this.marque = "Lenovo";
    this.prix = 1000;
}

// On copie toutes les propriété du prototype du PC Américain dans le prototype du PC chinois
for (var property in FabricantDePCAmericain.prototype) {
    FabricantDePCChinois.prototype[property] = FabricantDePCAmericain.prototype[property];
}

var pc1 = new FabricantDePCChinois();
var pc2 = new FabricantDePCChinois();

console.log(pc2);
pc2.demarrage();
pc2.arret();

// Même Design Pattern en ES6+ avec le mot clé extends et la méthode clée super() :

class FabricantDePCAmericainES6 {
    constructor(){
        this.cpu = "Intel";
        this.marque = "Dell";
        this.ram = "8Go";
        this.prix = 1200;
    }

    demarrage(){
        console.log("Tadaaaaaa !");
    }

    arret(){
        console.log("Tuduuuu !");
    }
}

class FabricantDePCChinoisES6 extends FabricantDePCAmericainES6 {
    constructor(){
        super(); // équivalent au .call(this)
        this.marque = "Lenovo";
        this.prix = 1000; 
    }
}

let pc3 = new FabricantDePCChinoisES6();
let pc4 = new FabricantDePCChinoisES6();

console.log(pc3);
pc4.demarrage();
pc4.arret();
