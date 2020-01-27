const express = require('express');
const app = express();

// Utilisation du pilote MongoDB
const MongoClient = require('mongodb').MongoClient;

app.set('view engine','pug');


app.get('/',(req,res) => {
  MongoClient.connect('mongodb://localhost:27017',{useUnifiedTopology: true},(err,client) => {
    let db = client.db('ifocop');
    let collection = db.collection('films');
    collection.find().toArray((err,data) => {
      client.close();
      res.render('home',{lesFilms:data});
    })
  });

});


app.listen(8080,()=>console.log('Serveur sur le port 8080'));