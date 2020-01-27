/* eslint-disable quotes */

"use strict";

const path = require("path");

const extension = path.extname("image.jpeg");

extension; // contient le string ".jpeg"

const type = {
  ".jpeg": "image/jpeg",
  ".txt": "text/plain"
};

type[extension]; // équivalent à type[".jpeg"] => pointe sur "image/jpeg"



const chien = {
  cri: "Wiiiff !",
  estFidele: true,
  marcheSurLaQueue: function() {
    console.log(this.cri);
  },
  quiEstLeMeilleurAmiDeLHomme: function() {
    console.log("Alors c'est qui ?");
    if (this.estFidele) {
      console.log("C'est le chien");
    } else {
      console.log("Je sais pas !!!");
    }
  }
};

const chat = {
  cri: "Meroooow !"
};

chat.marcheSurLaQueue = chien.marcheSurLaQueue;
const quiEstLeMeilleurAmiDeLHommeAvecThisFixe = chien.quiEstLeMeilleurAmiDeLHomme.bind(chien);
chat.quiEstLeMeilleurAmiDeLHomme = quiEstLeMeilleurAmiDeLHommeAvecThisFixe;

chat.marcheSurLaQueue();
chat.quiEstLeMeilleurAmiDeLHomme();


"/chemin/vers/un/dossier/"
"/chemin/vers/un/fichier"

path.normalize("/chemin/vers/un/dossier//chemin/vers/un/fichier");
