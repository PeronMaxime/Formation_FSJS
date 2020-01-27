/* eslint-disable quotes */

"use strict";

const mimeTypes = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".txt": "text/plain;charset=utf8",
  ".html": "text/html;charset=utf8",
  ".samiml": "text/html;charset=utf8"
};

const fs = require('fs');
const url = require('url');
const path = require('path');
const http = require('http');
const queryString = require('querystring');

const server = http.createServer();

server.on("request", function(requeteHTTP,reponseHTTP) {
  let sessionId;
  let cookies = requeteHTTP.headers["cookie"];
  if (cookies) {
    let cookiesArray = cookies.split(";");
    for(let i=0; i < cookiesArray.length; i++) {
      let cookie = cookiesArray[i];
      cookie = cookie.split("=");
      if( "identifiant_de_session" === cookie[0] ) {
        if ( cookie[1] ) {
          sessionId = cookie[1];
        }
      }
    }
  }

  if (!sessionId) {
    sessionId = `session_${Math.round(Math.random()*100000000)}_utilisateur`;
  }

  const cheminVersLaSession = path.normalize(`${__dirname}/sessions/${sessionId}`);
 
  
  let nombrePersonnalise;
  fs.readFile(cheminVersLaSession, function(erreur, donneesDeLaSessionEnOctets) {
    if (erreur) {
      nombrePersonnalise = 0;
    } else {
      nombrePersonnalise = parseFloat(donneesDeLaSessionEnOctets.toString());
    }

    nombrePersonnalise++;

    fs.writeFile(cheminVersLaSession, nombrePersonnalise, function(error) {
      let corpsDeLaReponseEnOctets;
      switch (nombrePersonnalise) {
        case 1:
          corpsDeLaReponseEnOctets = Buffer.from(`Bienvenue !`);
          break;
        case 20:
          corpsDeLaReponseEnOctets = Buffer.from(`Bravo vous êtes persistants !`);
          break;
        default:
          corpsDeLaReponseEnOctets = Buffer.from(`Vous avez affiché cette page ${nombrePersonnalise} fois`);
      }

      reponseHTTP.writeHead(200, {
        "Content-Length": corpsDeLaReponseEnOctets.length,
        "Content-Type": "text/plain;charset=utf8",
        "Set-Cookie": `identifiant_de_session=${sessionId}`
      });
    
      reponseHTTP.write(corpsDeLaReponseEnOctets, function() {
        reponseHTTP.end();
      });
    });
  });

  
  


});

server.listen(8080, function(){
  console.log("Serveur démarré");
});