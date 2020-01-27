/* eslint-disable quotes */
"use strict";
/** Modules natifs */
const fs = require('fs');
const url = require('url');
const http = require('http');
/** Modules de npm */
const mongodb = require('mongodb');

const server = http.createServer();


const envoyerErreur500 = function(response, mongoClient, message) {
  let corpsDeReponseEnTexte = `<!DOCTYPE html><html><head><title>Erreur 500</title></head><body><h1>Erreur 500</h1><p>${message}</p></body></html>`;
  
  let corpsDeReponseEnOctets = Buffer.from(corpsDeReponseEnTexte);

  response.writeHead(500, {
    "Content-Length": corpsDeReponseEnOctets.length,
    "Content-Type": "text/html;charset=utf8"
  });

  response.write(corpsDeReponseEnOctets, function() {
    response.end();
    mongoClient.close();
  });
}


server.on("request", function(request, response) {
  mongodb.MongoClient.connect(`mongodb://192.168.105.82`, {
    useUnifiedTopology: true
  }, function(error, mongoClient) {
    if (error) {
      console.log(`Connexion échouée`);
      envoyerErreur500(response, mongoClient, `Connexion échouée`);
    } else {
      console.log(`Connexion réussie`);
      const db = mongoClient.db(`paris`);
      db.collection(`piscines`, {
        strict: true
      }, function(error, collection) {
        if (error) {
          console.log(`Impossible de récupérer la collection`);
          envoyerErreur500(response, mongoClient, `Impossible de récupérer la collection`);
        } else {
          console.log(`Collection accessible`);
          const cursor = collection.find({});
          cursor.toArray(function(error, documents) {
            if (error) {
              console.log(`Impossible d'extraire les documents de la collection`);
              envoyerErreur500(response, mongoClient, `Impossible d'extraire les documents de la collection`);
            } else { 
              let corpsDeReponseEnTexte = `<!DOCTYPE html><html><head><title>Accueil</title></head><body><ul>`;
              for(let i=0; i < documents.length; i++) {
                if (documents[i].name) {
                  corpsDeReponseEnTexte += `<li><h3>${documents[i].name}</h3></li>`;
                }
              }
              corpsDeReponseEnTexte += `</ul></body></html>`;

              const corpsDeReponseEnOctets = Buffer.from(corpsDeReponseEnTexte);

              response.writeHead(200, {
                "Content-Length": corpsDeReponseEnOctets.length,
                "Content-Type": "text/html;charset=utf8"
              });

              response.write(corpsDeReponseEnOctets, function() {
                response.end();
                mongoClient.close();
              });
            }
          });
        }
      });
    }
  });
});

server.listen(8080, function(){
  console.log("Serveur démarré");
});