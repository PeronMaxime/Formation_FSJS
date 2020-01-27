/* eslint-disable quotes */

"use strict";

const mimeTypes = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".txt": "text/plain;charset=utf8",
  ".html": "text/html;charset=utf8"
};

const fs = require('fs');
const url = require('url');
const path = require('path');
const http = require('http');

const server = http.createServer();

server.on("request", function(requeteHTTP,reponseHTTP) {
  // On utilise le module url pour parser
  // l'url qui est contenue dans la requête
  const urlDemandee = url.parse(requeteHTTP.url, true);
  const ressource = urlDemandee.pathname;

  const chemin = path.normalize(`${__dirname}/mon-site-statique/${ressource}`);

  fs.readFile(chemin, function(erreur, donnees1EnOctets) {
    let mimeType;
    let statusCode;
    let corpsDeReponseEnOctets;
    if (erreur) {
      let chemin404 = path.normalize(`${__dirname}/mon-site-statique/404.html`);
      fs.readFile(chemin404, function(erreur, donnees2EnOctets) {
        if (erreur) {
          statusCode = 500;
          mimeType = mimeTypes[".txt"];
          corpsDeReponseEnOctets = Buffer.from("Erreur 500 : Erreur Interne du Serveur");
        } else {
          statusCode = 404;
          mimeType = mimeTypes[".html"];
          corpsDeReponseEnOctets = donnees2EnOctets;
        }

        reponseHTTP.writeHead(statusCode, {
          "Content-Type": mimeType,
          "Content-Length": corpsDeReponseEnOctets.length
        });

        reponseHTTP.write(corpsDeReponseEnOctets, function() {
          reponseHTTP.end();
        });
      });
    } else {
      statusCode = 200;
      const extension = path.extname(chemin);
      mimeType = mimeTypes[extension];
      if (!mimeType) {
        mimeType = mimeTypes[".txt"];
      }
      corpsDeReponseEnOctets = donnees1EnOctets;

      reponseHTTP.writeHead(statusCode, {
        "Content-Type": mimeType,
        "Content-Length": corpsDeReponseEnOctets.length
      });

      reponseHTTP.write(corpsDeReponseEnOctets, function() {
        reponseHTTP.end();
      });
    }
  });
});

server.listen(8080, function(){
  console.log("Serveur démarré");
});