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
  let accumulateur = [];
  requeteHTTP.on("data", function(portionDeDonneeTelechargee) {
    // Exécuté pour chaque portion de données téléchargées à  partir du corps de la requête
    accumulateur.push(portionDeDonneeTelechargee);
  });

  requeteHTTP.on("end", function() {
    // Exécuté 1 fois que la totalité des données à été téléchargée
    let objetAPartirDuCorpsDeLaRequete;
    if (accumulateur.length) {
      const corpsDeLaRequeteEnOctets = Buffer.concat(accumulateur);
      const corpsDeLaRequeteEnString = corpsDeLaRequeteEnOctets.toString();

      objetAPartirDuCorpsDeLaRequete = queryString.parse(corpsDeLaRequeteEnString);
    }

    // On utilise le module url pour parser
    // l'url qui est contenue dans la requête
    const urlConvertieEnObjet = url.parse(requeteHTTP.url, true);
    const ressource = urlConvertieEnObjet.pathname;

    let chemin = path.normalize(`${__dirname}/mon-site-statique/${ressource}`);

    let mimeType;
    let extension = path.extname(chemin);
    if (extension) {
      mimeType = mimeTypes[extension];
      if (!mimeType) {
        mimeType = mimeTypes[".txt"];
      }
    } else {
      extension = `.samiml`;
      mimeType = mimeTypes[".html"];
      chemin = `${chemin}.samiml`;
    }

    fs.readFile(chemin, function(erreur, donnees1EnOctets) {
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

        corpsDeReponseEnOctets = donnees1EnOctets;

        if (".samiml" === extension) {
          let corpsDeReponseEnChaine = corpsDeReponseEnOctets.toString();

          const date = new Date();
          corpsDeReponseEnChaine = corpsDeReponseEnChaine.replace(/\[DATE\]/gi, date.toString());

          if (urlConvertieEnObjet.query) {
            // eslint-disable-next-line guard-for-in
            for (const propriete in urlConvertieEnObjet.query) {
              corpsDeReponseEnChaine = corpsDeReponseEnChaine.replace(new RegExp(`\\$_GET\\[${propriete}\\]`,'gi'), urlConvertieEnObjet.query[propriete]);
            }
          }

          if (objetAPartirDuCorpsDeLaRequete) {
            // eslint-disable-next-line guard-for-in
            for (const propriete in objetAPartirDuCorpsDeLaRequete) {
              corpsDeReponseEnChaine = corpsDeReponseEnChaine.replace(new RegExp(`\\$_POST\\[${propriete}\\]`,'gi'), objetAPartirDuCorpsDeLaRequete[propriete]);
            }
          }

          corpsDeReponseEnOctets = Buffer.from(corpsDeReponseEnChaine);
        }

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
});

server.listen(8080, function(){
  console.log("Serveur démarré");
});