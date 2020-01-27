"use strict";

let leExportsDuModuleSecondaire = module.require("./20200108_02_cours-module-secondaire.js");

console.log("Je suis dans le module principal");

console.log(leExportsDuModuleSecondaire.message);

let ici = module.require("./20200108_02_cours-module-secondaire.js");

console.log(ici);

//module.require("20200108_02_cours-module-tertiaire");

//let objet = module.require("20200108_02_cours-module-quaternaire");

//console.log(objet);

//module.require("20200108_02_cours-module-cinq");