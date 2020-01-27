// Appel des modules
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.set('view engine','pug');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get('/',(req,res) => {
  res.render('home',{title:'Page d\'accueil'});
});

app.get('/get',(req,res) => {
  // Liste pour le select passée au template dans l'objet, second argument du res.render, avec la propriété couleurs
  const liste = ['Rouge','Bleu','Vert','Orange','Cyan'];
  res.render('formulaire-get',{title:'Formulaire en Get',couleurs:liste});
});

app.get('/traitement-get',(req,res) => {
  res.render('resultat-get',{title:'Résultat du formulaire',datas:req.query});
});

app.get('/post',(req,res) => {
  res.render('formulaire-post',{title:'Formulaire en post'})
});

app.post('/traitement-post',(req,res) => {
  res.render('resultat-post',{title:'Résultat du post',datas:req.body});
});

app.listen(8080,()=>console.log('Port 8080'));