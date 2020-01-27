/**
  Utilisation du module http de Node JS pour créer un serveur http de plus en plus élaboré.

  Votre serveur devra être joignable à l'URL : [protocole]://[adresse IP ou nom de domaine][:port][/ressource]

  Par exemple :
   - Protocole : http
   - Adresse IP : 212.121.212.45
   - Port : 8080
   - Ressource : /index.html

   Donne l'URL : http://212.121.212.45:8080/index.html
**/

/**
  Exercices :

  1. Pour cet exercice vous reprendrez le serveur HTTP de l'exercice précédent.

  Créez un fichier HTML dans lequel vous positionnerez une chaîne de caractères 
  facilement reconnaissable. Par exemple : 
  - ##dateDuJour##

  Après avoir lu et obtenu le contenu d'un fichier et avant de retourner sa réponse HTTP,
  votre serveur HTTP doit remplacer dans le contenu du fichier la chaîne de caractères par
  la date du jour.
**/

/**
  2. Pour cet exercice vous reprendrez le serveur HTTP de l'exercice précédent.

  Créez un fichier HTML dans lequel vous positionnerez deux autres chaînes de caractères 
  facilement reconnaissable. Par exemple :
  - {{ nom }}
  - {{ prenom }}

  Après avoir lu et obtenu le contenu d'un fichier et avant de retourner sa réponse HTTP,
  votre serveur HTTP doit remplacer dans le contenu du fichier les deux chaînes de caractères
  par respectivement votre nom et votre prénom.
**/

const http = require('http');
const path = require('path');
const fs = require('fs');
const server = http.createServer();
let code;
let contentResponse;
let mime;
const listMime = {
  param: 52,
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
      let dataTexte = data.toString();
      dataTexte = dataTexte.replace(/##dateDuJour##/, new Date());
      data = Buffer.from(dataTexte);
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