'use strict';

const fileSystem = module.require('fs');

console.log('Avant de lancer la lecture');

//let donneesLues;

fileSystem.readFile('gros.txt', function(erreur, donnees) {
  if (erreur) {
    console.log('Erreur de lecture');
  } else {
    console.log('Fichier lu');
    // donneesLues = donnees;
    // le code qui dépend des données lues doit être écrit à partir d'ici
    console.log('Les données sont lues');
  }
});

console.log('Après le lancement de la lecture');


/*let verification = function() {
  if (donneesLues) {
    // console.log(donneesLues);
    console.log('Les données sont lues');
  } else {
    console.log('Les données ne sont pas encore lues');
  }
  setTimeout(verification, 1);
}

verification();*/

/********************************************** */
// On crée un objet d'exécution asynchrone :
let dansLeTurfu = new Promise(function(quandToutSePasseBien, siCaSePasseMal) {
  setTimeout(function() {

    quandToutSePasseBien(`Le future c'est bien`);

  }, 10000);
});
// On définit le callback à exéxuter à l'issue de l'exécution asynchrone
dansLeTurfu.then(function(laValeurQuandToutSePasseBien) {

  console.log(`10 secondes se sont écoulées`);
  console.log(laValeurQuandToutSePasseBien);
});
/**************************************************/

// Sans objet d'exécution asynchrone on aurait écrit :
/*
let monCallback = function(laValeurQuandToutSePasseBien) {
  console.log(`10 secondes se sont écoulées`);
  console.log(laValeurQuandToutSePasseBien);
}

setTimeout(function() {
  monCallback(`Le future c'est bien`);
}, 10000);
*/

const executeurAsynchrone = new Promise(function(aExecuterSiToutSePasseBien, aExecuterSiCaVaPas) {
  fileSystem.readFile(`gros.txt`, function(uneErreurSiIlYEnUne, lesDonneesSiEllesSontLues) {
    if (uneErreurSiIlYEnUne) {
      aExecuterSiCaVaPas(new Error(`C'est la crise !`));
    } else {
      aExecuterSiToutSePasseBien(lesDonneesSiEllesSontLues);
    }
  });
});
// Le callback en paramètre correspond à aExecuterSiToutSePasseBien
executeurAsynchrone.then( function( laValeurSiToutSEstBienPasse ) {

  console.log(`Tout s'est bien passé`, laValeurSiToutSEstBienPasse);

});
// Le callback en paramètre correspond à aExecuterSiCaVaPas
executeurAsynchrone.catch(function( laValeurSiCaNaPasMarche ) {

  console.log(laValeurSiCaNaPasMarche.message);

});
