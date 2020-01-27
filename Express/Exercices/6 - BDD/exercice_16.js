/*********************************************************
**********UTILISATION D'UNE BASE DE DONNÉES - 1 **********
*********************************************************/

/*********************************
***********Présentation***********
*********************************/
/*
Il existe de plusieurs modules pour interfacer NodeJS avec MongoDB. Nous utiliserons le pilote officiel(https://www.npmjs.com/package/mongodb).

Pour se connecter à la base de donnée, il faut réaliser deux actions :
- Utilisez le module (écrire en haut de fichier) :
var MongoClient = require('mongodb').MongoClient;

- Conditionnez le démarrage du serveur à la connection au serveur Mongo :
MongoClient.connect(URL, { useNewUrlParser: true },function(err, client) {
  if (err) {
    return;
  }
  app.listen …
}
*/


/*********************************
*************Exercice*************
*********************************/
/*

Créez une base de donnée avec une collection en console.
------ 1 ------
Connectez votre fichier JavaScript à votre base de donnée.
------ 2 ------
Prévoyez une variable globale dans laquelle vous pourrez stocker l'argument db de la méthode connect.
------ 3 ------
Quand l'utilisateur accède à la racine du site, utilisez le code suivant pour afficher le contenu de votre base (maDb est la variable globale, cf. point 2).
  var collection = maDb.collection(<nom de la collection>);
  collection.find().toArray(function(err, data){
    //utilisez data qui est un objet contenant les différentes valeurs retournée par find.
  });
});
*/

const express = require('express');
const app = express();
const mongodb = require('mongodb');
app.set('view engine', 'pug');


app.get('/', (req, res) => {
  mongodb.MongoClient.connect('mongodb://localhost:27017',{useUnifiedTopology: true}, function(err, client){
    if (err) {
      console.log('Impossible de joindre la base de données');
    }
    const db = client.db('ifocop');
    const films = db.collection('films');

    films.find().toArray(function(err, data){
      client.close();
      if (err) {
        console.log('Données non trouvées');
      }
      else {
        res.render('index', {data: data});
      }
    })
  })
})


app.listen(1234);