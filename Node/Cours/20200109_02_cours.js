'use strict';

// On charge le module http.
const moduleHTTP = require('http');
// On crée un objet de type http.Server
const serveurHTTP = moduleHTTP.createServer();
// On peut déclarer un gestionnaire d'évènement pour
// l'évènement request (c'est l'évènement qui est déclenché
// par node à chaque fois que le serveur reçoit une requête
// HTTP)
serveurHTTP.on('request', function(requeteHTTP, reponseHTTP) {
  // Dans requeteHTTP un objet du type <http.IncomingMessage>
  // Dans reponseHTTP un objet du type <http.ServerResponse>

  console.log(requeteHTTP.url);

  let typeMime;
  let corpsDeResponse;
  if ('/merguez' === requeteHTTP.url) {
    typeMime = 'text/html;charset=utf-8';
    corpsDeResponse = Buffer.from('<h1>Vive les saucisses <a href="http://192.168.105.80:8080/?toto=42">piquantes !</a></h1>');
  } else {
    typeMime = 'text/plain;charset=utf-8';
    corpsDeResponse = Buffer.from('Salut mémé');
  }


  // On envoie les en-tête de réponse au navigateur qui appelle.
  reponseHTTP.writeHead(200, {
    'Content-Length': corpsDeResponse.length,
    'Content-Type': typeMime
  });

  // On envoie le corps de réponse au navigateur.
  reponseHTTP.write(corpsDeResponse, function(uneErreur){
    // On coupe la connexion.
    reponseHTTP.end();
  });
});

// On exécute la méthode .listen() du serveur HTTP
// pour associer le serveur à un numéro de port.
serveurHTTP.listen(8080, function(uneErreur) {
  if (uneErreur) {
    console.log('Impossible de démarrer le serveur');
  } else {
    console.log('Serveur démarré sur le port 8080');
  }
});
