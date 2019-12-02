/**
 * ECMASCRIPT - Les objets - bases
*/

/**
 * Types de données
 */
// String : chaînes de caractères
"Bonjour";
'Gunten tag';

`Good morning`; // A partir de ES2016 uniquement

// Boolean : Boolééns
true;
false;

// Number : Nombres (rééls)
-1;
2;
3.4;
0.9;
.4;

// Functions : Fonctions
(function(){
    // patati patata...
    // instructions
});

// Objets :
{}; // notation littéral
[]; // => sous-type d'objet array

// Type non défini :
undefined;

// Les variables :
var emplardccementMemoire; // undefined - reserve un pointeur vers un espace memoire

emplacementMemoire = "Bonjour"; // assignation de valeur à cette espace memoire

// Créer un objet en notation littéral :
var grosseBoite;

grosseBoite = {
  a: 99,
  bis: function(){
      // balblalalba
  }, // une fonction dans une variable dans un objet : UNE METHODE de l'objet
  xyz: 3,
  toto: "yes", // "variable" dans un objet : UNE PROPRIETE de l'objet
  tata: true
};

// Accessibilité :

grosseBoite.xyz; // pointe vers 3
grosseBoite['xyz']; // pointe vers 3

grosseBoite.bis; // pointe vers function(){}
grosseBoite.bis(); // EXECUTE la fonction

// Déclaration d'objet littéral
var billy;

billy = {
    etagereDuHaut: 'des bédés',
    etagereDuMilieu: 'des livres voyage',
    etagereDuBas: 'Mes papiers administratif',
    compartimentSecret: {
        chemiseplastifiee: 'fortune de pépé',
        petiteboite: 'bague en or' 
    }
};

billy.compartimentSecret.petiteboite; // 'bague en or' 
billy['compartimentSecret']['petiteboite']; // 'bague en or' 
billy['compartimentSecret'].petiteboite; // 'bague en or' 
billy.compartimentSecret['petiteboite']; // 'bague en or' 

// Ajouter une propriété dans un objet
billy.compartimentSecret.nouvelArtefact = "louis d'or"; // ajouter une propriété
billy.compartimentSecret['autreArtefact'] = "dents en or";

billy.compartimentSecret[42] = "Mystère de l'univers";

billy.compartimentSecret[42]; // pointe sur "Mystère de l'univers"

// Un objet vide :
{};

/**
 * Mot clé delete : Permet de supprimer une propriété d'un objet
 */

delete billy.compartimentSecret[42];
delete billy.compartimentSecret.nouvelArtefact;

/**
 * Objet et assignations
 */

var titine = {
    modele: "2CV",
    siege: "cuir",
    proprietaire: "Sami",
    estGeniale: true,
    demarre: function(){
       alert("Vroooooom !");
    }
};

var la2CVdeEric = titine;

la2CVdeEric.proprietaire = "Eric";
titine.proprietaire; // contient "Eric"

// la variable la2CVdeEric et la variable titine pointent vers le même objet. Ces 2 variables contiennent une référence ("pointeur vers adresse mémoire") à l'objet qui représente la voiture.

// On NE PEUT PAS DUPLIQUER OU CLONER un objet par ASSIGNATION.
// Si on veut créer un nouvel objet, on doit le réécrire entièrement.

/**
 * Focus sur les méthodes
 */

var medor = {
    cri: "Woauuuuf !",
    aboit: function() {
        //alert("Woauuuuf !");
        // Mot-clé this : référence vers l'objet dans lequel se trouve la méthode.

        this; // pointe sur l'objet dans lequel je me trouve lors de mon exécution

        alert(this.cri);
        // Le mot clé this peut être utilisé uniquement dans les méthodes.
    },
    caractere: "stupide",
    estomac: {
        prenom: "Michel",
        sePresente: function(){
            // this pointe ici sur le vers solitaire dans l'estomac du chien
            alert("Je m'appelle " + this.prenom);
        }
    }
};

medor.aboit();

/**
 * Quelques objets fondamentaux
 */

Math; // Objet fondamental

Math.PI; // contient le nombre correspondant à PI
Math.random(); // méthode qui retourne un nombre aléatoire en 0 et 1

Object; // Objet fondamental

Object.keys(medor); // renvoi ["cri", "aboit", "caractere", "estomac"]
// la méthode .keys() renvoi un tableau contenant la liste des propriété de l'objet fourni en paramétre

// La méthode .create() permet de créer un objet à partir d'un autre objet
Object.create({});

/**
 * Prototypes avec Object.create()
 */
var darkVador = {
    nom: "Skywalker",
    prenom: "Anakin",
    orientation: "Coté Obscur"
};

var enfant1 = Object.create(darkVador);
var enfant2 = Object.create(darkVador);

// Les propriété propres des objets supplantent celles de leur prototype
enfant1.prenom = "Leia";
enfant1.orientation = "Coté lumineux";

enfant1.prenom; // "Leia" => Propriété propre de l'objet référencé dans enfant1
enfant1.nom; // "Skywalker" => Propriété obtenu depuis le prototype de enfant1

var enfantIllegitime = Object.create(enfant1);

enfantIllegitime.prenom = "Ray";

/**
 * Bonne pratique: design pattern/ patron de conception prototype
 */
// Optimiser l'utilisation de la mémoire en mettant les méthodes d'objets dans leur prototype.

// exemple :

// Cet objet sert de prototype contenant les méthode communes aux 3 objets :
var boiteAMethode = {
    joueDeLaMusique: function(){
        // tatatititia
    }
};

// Création de 3 objet ayant le même objet comme prototype
var musicien1 = Object.create(boiteAMethode);
var musicien2 = Object.create(boiteAMethode);
var musicien3 = Object.create(boiteAMethode);

// Définition des propriété PROPRES des 3 objets
musicien1.prenom = "Johnny";
musicien2.prenom = "Georges";
musicien3.prenom = "Jacques";

// exécution de la méthode "héritée" du prototype
musicien2.joueDeLaMusique();
musicien3.joueDeLaMusique();

/**
 * Fonctions constructeurs
 */
// Comment créer des objets à la chaine ne JavaScript ?

// La variable à laquelle on assigne une fcn constructeur commence
// TOUJOURS 
// par une majuscule
var ContructeurDeMaisonDeMontignyLeBretonneux = function(proprio){
   // Dans les fonctions constructeur on peut utiliser le mot-clé this
   // pour définir les propriété et méthode des futurs objets qui seront
   // créés à l'aide la fonction constructeur

   // Ici on utilise l'argument comme valeur pour la propriété propriétaire
   this.proprietaire = proprio;

   this.sonnerie = "Driiing";
   this['salleAManger'] = "grande";
   this.jardin = "100 m² avec barbecue";
   this.etage = {
       chambreDesEnfant: "lit et papier peint papillon",
       chmabreDesParents: "lit king size"
   };
   this.cave = {
       buanderie: "Machine à laver et pinard"
   };
};

// Utilisation avec le mot-clé new
var maison1 = new ContructeurDeMaisonDeMontignyLeBretonneux("Maxime");
var maison2 = new ContructeurDeMaisonDeMontignyLeBretonneux("Eric");
var maison3 = new ContructeurDeMaisonDeMontignyLeBretonneux("Sébastien");
var maison4 = new ContructeurDeMaisonDeMontignyLeBretonneux("Amirouche");
var maison5 = new ContructeurDeMaisonDeMontignyLeBretonneux("Serge");
var maison6 = new ContructeurDeMaisonDeMontignyLeBretonneux("Valentin");
var maison7 = new ContructeurDeMaisonDeMontignyLeBretonneux("Véronique");
var maison8 = new ContructeurDeMaisonDeMontignyLeBretonneux("Fantine");
var maison9 = new ContructeurDeMaisonDeMontignyLeBretonneux("Babacar");
var maison10 = new ContructeurDeMaisonDeMontignyLeBretonneux("Crytel");
var maison11 = new ContructeurDeMaisonDeMontignyLeBretonneux("Moulay");
var maison12 = new ContructeurDeMaisonDeMontignyLeBretonneux("Serge");

// Les fonctions constructeur permettent de créer des objets "en série".
maison7.proprietaire; //  "Véronique"
delete maison9.proprietaire; // efface le proprietaire de la maison9

maison10.cave.pieceCachee = {
    ilYaUnCadavre: true
};
