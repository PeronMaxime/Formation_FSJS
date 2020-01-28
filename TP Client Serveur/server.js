const express = require('express');
const app = express();
app.set('view engine', 'pug');
const mongodb = require('mongodb');

app.use('/src', express.static('src'))

// Routes

app.get('/', (req,res) => {
  res.render('index');
})

app.get('/liste', (req,res) => {

  mongodb.MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
      console.log('Erreur de connexion à la base de données');
    }
    const db = client.db('acs2couches');
    const ratp = db.collection('ratp');
    ratp.find().toArray((err, data) => {
      client.close();
      res.render('liste', {stations: data});
    });
  })
})

app.get('/carte', (req,res) => {
  mongodb.MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true}, (err, client) => {
    if (err) {
      console.log('Erreur de connexion à la base de données');
    }
    const db = client.db('acs2couches');
    const ratp = db.collection('ratp');
    ratp.find().limit(100).toArray((err, data) => {
      client.close();
      res.render('carte', {stations: data});
    });
  })
})

// Serveur

app.listen(1234);