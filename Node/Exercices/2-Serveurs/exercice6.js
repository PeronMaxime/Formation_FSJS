/**
  Utilisation du module http de Node JS pour créer un serveur http de plus en plus élaboré.

  Votre serveur devra être joignable à l'URL : [protocole]://[adresse IP ou nom de domaine][:port][/ressource]

  Par exemple :
   - Protocole : http
   - Adresse IP : 10.2.1.0
   - Port : 4321
   - Ressource : /ville/paris.html

   Donne l'URL : http://10.2.1.0:4321/ville/paris.html
**/

/**
  Exercices :

  1. Pour cet exercice vous reprendrez le serveur HTTP de l'exercice précédent.
  
  Votre serveur HTTP doit gérer différents Mime Types. Vous devez faire en sorte que
  le Mime Type soit conforme à l'extension obtenue à partir de la ressource dans l'URL.

  Par exemple :
  - Si l'URL est http://10.2.1.0:4321/photo.jpeg (et que le fichier photo.jpeg existe)
  - Alors l'en-tête de la réponse HTTP doit contenir Content-Type : image/jpeg
  
  Vous devez gérer les Mime Types des formats de fichier suivant : css, js, jpeg, png, pdf, gif.

  La liste des Mime Types autorisés est disponible ici : http://www.iana.org/assignments/media-types/media-types.xhtml
**/

/**
  2. Utiliser votre serveur HTTP pour "servir" votre projet Front End (sur le réseau local).

  Pensez à utiliser l'onglet réseau des outils de développement de votre navigateur Internet pour
  vérifier que vous arrivez bien à télécharger toutes les ressources exigées par votre projet.

  Ajoutez la gestion des Mime Types manquants si nécessaire...
**/

const http = require('http');
const path = require('path');
const fs = require('fs');
const server = http.createServer();
let code;
let contentResponse;
let mime;
const listMime = {
  '.html': 'text/html',
  '.txt': 'text/plain',
  '.js': 'application/javascript',
  '.css' : 'text/css',
  '.woff' : 'application/x-font-woff',
  '.png' : 'image/png',
  '.jpg' : 'image/jpeg',
  '.pdf' : 'application/pdf',
  '.mp3' : 'audio/mpeg'
}

const sendResponse = function(response, code, mime, contentResponse){
  response.writeHead(code, {
    'content-type': mime,
    'content-length': Buffer.byteLength(contentResponse, 'utf8'),
  });
  response.write(contentResponse, function(){
    response.end();
  })
}

const sendMime = function(extension){
  if(listMime[extension]){
    return listMime[extension];
  }
  else{
    return listMime['.txt'];
  }
}

const read = function(pathFile, response){
  fs.readFile(pathFile, function(err, data){
    if(err){
      code = 404;
      mime = sendMime('.txt');
      contentResponse = 'Erreur 404';
      sendResponse(response, code, mime, contentResponse);
    }
    else{
      code = 200;
      mime = sendMime(path.extname(pathFile))
      contentResponse = data;
      sendResponse(response, code, mime, contentResponse);
    }
  })
}

server.on('request', function(request, response){
  read('.'+request.url, response);
})

server.listen(1234);
