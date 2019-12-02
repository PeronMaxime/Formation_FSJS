"use strict";
// Le "use strict" permet de s'assurer que les "erreurs silencieuses" ne sont pas ignorées

var maFonction = function(){
   var ceciEstUnTest = "hello";
}

maFonction();

/**
 * Références circulaires
 */

var vaisseau = {
    nom: 'Enterprise',
    equipage: [],
    quelSonMesEquipers: function(){
        // pour i = 0 jusqu'à la taille de l'équipage
        for (var i = 0; i < this.equipage.length; i++) {
            this.equipage[i].nom; // pointe sur "Picard" puis "Spock"
        }
    }
};

var equipier1 = {
    nom: "Kirk",
    prenom: "James",
    sonVaisseau: vaisseau,
    quelEstMonLeNomDeMonVaisseau: function(){
        this.sonVaisseau.nom; // pointe sur "Enterprise"
    }
};

var equipier2 = {
    nom: "Spock",
    prenom: "Robert",
    sonVaisseau: vaisseau,
    quelEstMonLeNomDeMonVaisseau: function(){
        this.sonVaisseau.nom; // pointe "Enterprise"
    }
};

vaisseau.equipage = [equipier1, equipier2];


equipier1.sonVaisseau.equipage[1].sonVaisseau.equipage[0].sonVaisseau.equipage[1].nom; // "Spock"

equipier2.sonVaisseau.equipage[0].nom = "Picard";

/**
 * Le Browser Object Model (BOM) le Document Object Model (Modèle Objet du Document - DOM)
 */
window.onload = function(){
    window.document.body.children[0].style.border = "2px solid purple";

    window.onmousewheel = function(){
        window.alert('Scrolllé !');
    };

    window.setInterval(function(){
        if(window.document.body.children[0].style.backgroundColor === 'red') {
            window.document.body.children[0].style.backgroundColor = "green";
        } else {
            window.document.body.children[0].style.backgroundColor = "red";
        }

    }, 1000);
}

