/**
  Utilisation du module http de Node JS pour créer un serveur http de plus en plus élaboré.

  Votre serveur devra être joignable à l'URL : [protocole]://[adresse IP ou nom de domaine][:port][/ressource]

  Par exemple :
   - Protocole : http
   - Adresse IP : 31.42.53.64
   - Port : 5555
   - Ressource : /accueil

   Donne l'URL : http://31.42.53.64:5555/home
**/

/**
  Exercices :
    
  1. Créez deux fichiers HTML valides : home.html et about.html

  Vous devez créer un serveur HTTP qui retourne dans sa réponse HTTP
  - le contenu du fichier home.html si l'URL utilisé pour effectuer la requête HTTP contient
  la ressource /accueil
  - le contenu du fichier about.html si l'URL utilisé pour effectuer la requête HTTP contient
  la ressource /apropos
**/
const http = require('http');
const fs = require('fs');

const serveurHttp = http.createServer();

serveurHttp.on('request', function(httpRequete, httpReponse){
  console.log('Je viens de recevoir une connexion !');
  
  let code = 404;
  let valeurReponse = fs.readFileSync('404.html', 'UTF-8');
   
  if (httpRequete.url === '/accueil') {
    code = 200;
    valeurReponse = fs.readFileSync('home.html', 'UTF-8');
  } else if (httpRequete.url === '/apropos') {
    valeurReponse = fs.readFileSync('about.html', 'UTF-8');
  }
  
  httpReponse.writeHead(code, {
    'content-type': 'text/html',
    'content-length': Buffer.byteLength(valeurReponse, 'utf8'),
  });

  httpReponse.write(valeurReponse, function(){
    httpReponse.end();
  });


})

serveurHttp.listen(1234);
/**
  Exercices :
    
  2. Créez un fichier HTML valide : 404.html

  Votre serveur HTTP doit retourner dans sa réponse HTTP le contenu du fichier 404.html
  si l'URL utilisé pour effectuer la requête HTTP ne contient pas la ressource /accueil ou
  /apropos. N'oubliez pas de préciser le code 404 dans les en-têtes de la réponse HTTP.
**/