/**
 * ECMASCRIPT - Les objets - bases
*/
// JSON : JavaScript Object Notation : Notation Objet JavaScript
{};

/**
 * Rappel sur les fonctions
 */
// Exemple de fonction avec Arguments
voiture = function(passager1, passager2) {
    var avisDuPassager1 = passager1 + ' a peur';
    var comportementDuPassager2 = passager2 + ' roule vite';

    alert(avisDuPassager1);
    alert(comportementDuPassager2);
}

voiture("Eric", "Sami");

voiture("Amirouche", "Eric");

// Number 
34;

// Boolean
true;

// String
"Douglas Crockford";

// Les fonctions
(function(){});

// Les objets
{}
//sous type => les objets spécialisé (Array)
[]

// Les variable permttent de stocker un de ces type en mémoire
var emplacementMemoire;

// Stocker la référence à une fonction dans une variable
emplacementMemoire = function(four, vase){
    var maVariable = 10;

    var maFonctionALInterieur = function(){

        alert(maVariable);
    };

    // renvoi l'adresse mémoire de la fonction
    return maFonctionALInterieur;
};

// Ici on copie la référence à la même fonction dans un autre emplacement mémoire
var autreEmplacementMemoire = emplacementMemoire;

// Ces 2 instructions consistent à exécuter la MEME fonction
var retour = emplacementMemoire(function quiche(){}, {variete: "roses", sentBon: true, estDelicat: true, taille: 30});
autreEmplacementMemoire();

// exéce la fonction renvoyée
retour(); // exécute la fonction qui été créé dans le contexte d'exécution de la fonction "emplacementMemoire"

var monObjet = {
    nom: "Michel",
    prenom: "Jean"
};


var fonctionChangementDeNom = function(bonhomme){
    bonhomme.nom = "Luc";
}

/**
 * Les objets
 */

/**
* Notation objet littéral:
*/

{};
[];

// Objet littéral complexe :
var tarabiscote = {
    propriete1: 14, // Number
    propriete2: true, // Boolean
    propriete3: "Hello", // String
    propriete4: function(){
        this; // référence à l'objet dans lequel se trouve la méthode lors de son exécution.
        this.propriete3;
        this['propriete3'];
    }, // Function => appelle cette propriété METHODE
    propriete5: {
        propriete1: "Bonjour",
        propriete2: false,
        propriete3: [45, true, function(){}, {
            propriete7: [function(){
                alert('Trouvé !');
            }], 
        }, "Guten Tag"],
        propriete4: function(){}
    }
};

tarabiscote.propriete5.propriete3[3].propriete7[0]();

/**
* Fonctions constructeur :
*/

// Mécanisme basé sur l'utilisation du mot clé new

// On crée une fonction constructeur
var FabricantDeToilettesBluetooth = function(p){
    // Les fonctions constructeur ne se distingue des fonction que par le fait que la variable à laquelle elles sont assignée commence par une MAJUSCULE.
    // Cette fonction défini les caractèristiques des objets qu'elle permettra de créer.
    this.proprietaire = p;
    this.prix = 2500;
    this.estCompatibleBlueTooth = true;
    this.capaciteDeReservoir = 50;
    this.aUneDouchette = true;
    this.aUnSiegeChauffant = true;
}

// On utilisé la fonction constructeur avec le mot clé new
var t1 = new FabricantDeToilettesBluetooth("Amirouche");
var t2 = new FabricantDeToilettesBluetooth("Moulay");
var t3 = new FabricantDeToilettesBluetooth("Serge");

/**
 * Objets fondamentaux et fonctions constructeur fondamentales
 */

// Exemple : Date
// Fonction constructeur Date permet des créer des objets qui représentent une date (par défaut, la date actuelle)
var date = new Date();

// Exemple : Array
var objet = new Array('a','b','c');
// la notation ['a','b','c'] c'est un "raccourci" pour l'utilistation de Array

// Mon propre constructeur d'objets indexés :
var FabricantDeTableau = function(le1erTruc, le2emeTruc, le3emeTruc, le4emeTruc) {
    
    this[0] = le1erTruc;
    this[1] = le2emeTruc;
    this[2] = le3emeTruc;
    this[3] = le4emeTruc;

    this.taille = 4;
}

var monTableauFaitALaMain = new FabricantDeTableau('a','b','c','d');

// Exemple : Function
var objetExecutable1 = new Function("var message = 'bonjour'; alert(message);");
// IDENTIQUE A 
var objetExecutable2 = function(){
    var message = 'bonjour';
    alert(message);
}

/**
 * Prototype avec Fonction Constructeurs
 */
// Soit on crée l'objet qui fera office de prototype à l'aide d'une fonction constructeur :
/*
var FabricantDeCaleche = function(){
    this.roues = 4;
    this.fauteuils = 4;
}

var uneCaleche = new FabricantDeCaleche();
*/
// Soit on le crée à l'aide d'une déclaration littérale :
var uneCaleche = {
    roues: 4,
    fauteuils:4
};

// On crée une fonction constructeur pour fabriquer des voitures
var FabricantDeVoiture = function(){
    this.aUnMoteurThermique = true;
    this.vitesse = "Elevée";
};

// uneCaleche sera le prototype de toutes les voitures
FabricantDeVoiture.prototype = uneCaleche;
// Propriété .prototype des fonctions constructeur est PREVUE et existe pour définir les prototype des objets CONSTRUITS à l'aide de la fonction

var voiture1 = new FabricantDeVoiture();
var voiture2 = new FabricantDeVoiture();
var voiture3 = new FabricantDeVoiture();

/**
 * Résumé :
 */

/**
 * 2 Façons de créer des objets :
 */

// Notation littérale :
var objetA = {}; // objet vide
// ou
var objetB = []; // sous-type d'objet (vide) de type Array

// A l'aide fonctions constructeurs
var MaFonctionConstructeur = function(){}

var objetC = new MaFonctionConstructeur(); // objet vide

/**
 * 2 Façons de définir le prototype d'un objet
 */

// 1ère etape : Créer un objet qui sera le prototype
var lapinPrehistorique = {
    cri: "Gnaaarl",
    intelligence: "limitée",
    aDesDentsDeSabre: true,
    caractere: "Méchant",
    sePresente: function(){
        alert(this.cri);
    }
};

// 2ème étape :
// Soit créer un descendant à l'aide de Object.create();

var lapinContemporain = Object.create(lapinPrehistorique);

lapinContemporain.cri = 'Squiiik';
lapinContemporain.aDesDentsDeSabre = false;

// Soit créer une fonction constructeur et définir le prototype des objets qui seront créés à l'aide de cette fonction

var ConstructeurDeLapinsBioniques = function(){
    this.cri = "Bonjour je m'appelle Henri";
    this.intelligence = "Surelevée";
    this.caractere = "Sympathique";
}

// On définit le prototype des lapin bionique
ConstructeurDeLapinsBioniques.prototype = lapinContemporain;
// On créé un lapin bionique du futur :

var lapinDuFutur = new ConstructeurDeLapinsBioniques();

lapinDuFutur.cri; // "Bonjour je m'appelle Henri", propriété propre du lapin du futur.
lapinDuFutur.aDesDentsDeSabre; // false, propriété qui provient du lapinContemporain
lapinDuFutur.sePresente(); // méthode qui provient du lapinPrehistorique.

/**
 * Objet fondamentaux
 */

// Math est uniquement un objet
Math.PI;
var nombreAleatoire = Math.random();

// Object est un objet et en même temps une fonction constructeur
var monObjet = new Object({prop1: true, prop2: 1234, prop4: 'Mouloud'});
// revient au même que (syntaxe raccourcie):
var monObjet = {prop1: true, prop2: 1234, prop4: 'Mouloud'};

// Function est un objet et en même temps une fonction constructeur
var maFonction = new Function("var test = true;");
// on préfére la syntaxe raccourcie :
var maFonction = function(){
    var test = true; 
}

// Date est un objet et en même temps une fonction constructeur
var objetQuiRepresenteLaDate = new Date();
objetQuiRepresenteLaDate.getDay(); // renvoi le jour de la semaine

// Array est un objet et en même temps une fonction constructeur
var monTableau = new Array('a','b','c');
// mais on préfére la syntaxe raccourcie
var monTableau = ['a','b','c'];


/**
 * Objet de définition de propriétés
 */

var maMaison = {
    rezDeChaussee: ['salon', 'cuisine', 'entrée'],
    etage1: ['chambre des parents', 'chambre des enfants']
};
// Ajouter une propriété à un objet avec des caractéristiques particulières :
Object.defineProperties(maMaison, {
    cave: {
        value: 'du vin et un congélateur',
        configurable: false, // on peut ou pas supprimer la propriété
        writable: false, // on peut ou pas modifier la valeur
        enumerable: true // on peut ou pas boucler sur la propriété
    }
});
// Le 2ème argument est un objet de définition de propriétés dont la structure est définie dans la documentation ici : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties.

// Créer un objet avec des propriétés à partir d'un prototype :
var taMaison = Object.create(maMaison, {
    grenier: {
        value: "Salle de jeu",
        configurable: true,
        writable: false,
        enumerable: true
    }
});

// Le 2ème argument est également objet de définition de propriétés dont la structure est définie dans la documentation ici : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties.

/**
 * Coercition 
 */
// 2 types composés :
// Function et Object (+Array)
// Types de données qui ne sont pas concernés par la coercition
// La coercition elle concerne les types primitifs :
// - Number
// - String
// - Boolean

"Mon texte".length;
// Le moteur fait :
(new String("Mon texte")).length;

(42).toString();
// Le moteur fait :
(new Number(42)).toString();

(false).toString();
// Le moteur fait :
(new Boolean(false)).toString();

// Le moteur force un changement de type le temps de l'exécution de l'instruction

/**
 * L'objet global de type Window est un objet créé pour chaque onglet ou fenêtre de navigateur
 */

 // Toutes les variables  (et les fonctions) créés dans le programme principal sont rattaché en tant que propriété et méthodes de window.

for(var compteur = 0; compteur < 100; compteur = compteur + 1) {
    window['maVariable' + compteur] = 'Hello';
}


