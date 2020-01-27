/**
  Utilisation du module http de Node JS pour créer un serveur http de plus en plus élaboré.

  Votre serveur devra être joignable à l'URL : [protocole]://[adresse IP ou nom de domaine][:port]

  Par exemple :
   - Protocole : http
   - Adresse IP : 100.50.25.12
   - Port : 6666

   Donne l'URL : http://100.50.25.12:6666
**/

/**
  Exercices :
  
  1. Vous devez créer un serveur HTTP qui retourne dans sa réponse HTTP un corps de réponse en format HTML valide.
  Attention, vous devez pensez à retourner dans l'en-tête de votre réponse HTTP le Mime Type correct (pour le HTML,
  il s'agit du Mime Type text/html)
**/

const http = require('http');

const serveurHttp = http.createServer();

serveurHttp.on('request', function(httpRequete, httpReponse){
  console.log('Je viens de recevoir une connexion !');

  const valeurReponse = `
  <h1>Titre</h1>
  <p>Je suis un paragraphe</p>
  `;

  httpReponse.writeHead(200, {
    'content-type': 'text/html',
    'content-length': Buffer.byteLength(valeurReponse, 'utf8'),
  });

  httpReponse.write(valeurReponse, function(){
    httpReponse.end();
  });

})

serveurHttp.listen(1234);