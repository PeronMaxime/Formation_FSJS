'use strict';

const moduleURL = module.require('url');
const moduleHTTP = module.require('http');
const moduleFileSystem = module.require('fs');

const serveurHTTP = moduleHTTP.createServer();

serveurHTTP.on('request', function(unObjetDeTypeIncomingMessage, unObjetDeTypeServerResponse) {
  // http://192.168.105.80:8080/ => page d'acceuil
  // http://192.168.105.80:8080/salutation => Bonjour à tous
  // http://192.168.105.80:8080/salutation?prenom=toto => Bonjour toto
  // http://192.168.105.80:8080/salutation?prenom=titi => Bonjour titi

  const lURLRecu = unObjetDeTypeIncomingMessage.url;
  const lURLParse = moduleURL.parse(lURLRecu, true);

  const ressourceDemandee = lURLParse.pathname;
  const queryStringEnObjet = lURLParse.query;

  let codeStatut = 200;
  let corpsDeMaReponseEnChaine = ``;

  let repondu = false;

  switch(ressourceDemandee) {
    case '/salutation':
      if (queryStringEnObjet && queryStringEnObjet.prenom) {
        repondu = true;
        // corpsDeMaReponseEnChaine = `Bienvenue sur ma page d'acceuil !`;
        moduleFileSystem.readFile(`${__dirname}/bonjourx.html`, function(erreur, contenu) {
          if (erreur) {
            codeStatut = 500;
            contenu = Buffer.from(`<!DOCTYPE html><html><head></head><body><p>Erreur interne du serveur. Le fichier est impossible à lire</p></body></html>`);
          }

          // Rechercher/Remplacer
          let contenuEnTexte = contenu.toString();
          contenuEnTexte = contenuEnTexte.replace(new RegExp(/#!XYZ!#/,'g'), queryStringEnObjet.prenom);
          contenu = Buffer.from(contenuEnTexte);

          // Création d'une réponse HTTP :
          const corpsDeMaReponseEnOctets = contenu;

          // Ecrire l'en-tête de réponse HTTP :
          // (opération synchrone).
          unObjetDeTypeServerResponse.writeHead( codeStatut, {
            "Content-Type": "text/html;charset=utf8", // type mime
            "Content-Length": corpsDeMaReponseEnOctets.length
          });
  
          // Ecrire le corps de la réponse HTTP :
          // (opération asynchrone, nécessite un callback).
          unObjetDeTypeServerResponse.write(corpsDeMaReponseEnOctets, function() {
            // Une fois que le corps de la réponse HTTP a été écrit,
            // On coupe la connexion avec le client.
            unObjetDeTypeServerResponse.end();
  
          });
        });
      } else {
        corpsDeMaReponseEnChaine = `Bonjour à tous`;
      }
      break;
    case '/':
      repondu = true;
      // corpsDeMaReponseEnChaine = `Bienvenue sur ma page d'acceuil !`;
      moduleFileSystem.readFile(`${__dirname}/accueil.html`, function(erreur, contenu) {
        if (erreur) {
          codeStatut = 500;
          contenu = Buffer.from(`<!DOCTYPE html><html><head></head><body><p>Erreur interne du serveur. Le fichier est impossible à lire</p></body></html>`);
        }
        // Création d'une réponse HTTP :
        const corpsDeMaReponseEnOctets = contenu;

        // Ecrire l'en-tête de réponse HTTP :
        // (opération synchrone).
        unObjetDeTypeServerResponse.writeHead( codeStatut, {
          "Content-Type": "text/html;charset=utf8", // type mime
          "Content-Length": corpsDeMaReponseEnOctets.length
        });

        // Ecrire le corps de la réponse HTTP :
        // (opération asynchrone, nécessite un callback).
        unObjetDeTypeServerResponse.write(corpsDeMaReponseEnOctets, function() {
          // Une fois que le corps de la réponse HTTP a été écrit,
          // On coupe la connexion avec le client.
          unObjetDeTypeServerResponse.end();

        });
      });
      break;
    default:
      codeStatut = 404;
      corpsDeMaReponseEnChaine = `Page 404 dans ta face !`;
      break;
  }

  if (repondu === false) {
    // Création d'une réponse HTTP :
    //const corpsDeMaReponseEnChaine = `Ceci est le corps de ma réponse`;
    const corpsDeMaReponseEnOctets = Buffer.from( corpsDeMaReponseEnChaine );

    // Ecrire l'en-tête de réponse HTTP :
    // (opération synchrone).
    unObjetDeTypeServerResponse.writeHead( codeStatut, {
      "Content-Type": "text/plain;charset=utf8", // type mime
      "Content-Length": corpsDeMaReponseEnOctets.length
    });

    // Ecrire le corps de la réponse HTTP :
    // (opération asynchrone, nécessite un callback).
    unObjetDeTypeServerResponse.write(corpsDeMaReponseEnOctets, function() {
      // Une fois que le corps de la réponse HTTP a été écrit,
      // On coupe la connexion avec le client.
      unObjetDeTypeServerResponse.end();

    });
  }
});

serveurHTTP.listen(8080, function() {
  console.log(`L'URL du serveur est : `, `http://192.168.105.80:8080/`)
  console.log(`Serveur HTTP associé au numéro de port 8080`);
});