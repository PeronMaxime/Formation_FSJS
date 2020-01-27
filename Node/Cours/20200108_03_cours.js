"use strict";

const moduleFileSystem = module.require("fs");

console.log(`Avant la lecture du fichier`);

// Méthode asynchrone
moduleFileSystem.readFile(`./20200108_03_cours.txt`, function(uneErreur, desDonnees){
    if (uneErreur) {
        console.log(`Fichier illisible`);
    } else {
        // Ici je suis sûr que le contenu du fichier est disponible
        console.log(desDonnees.toString());
    }
});

console.log(`Après la lecture du fichier`);