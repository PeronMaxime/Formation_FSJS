/************************************************************
************UTILISATION DES TEMPLATES - MINI SITE************
************************************************************/

/*********************************
*************Exercice*************
*********************************/
/*
------ 1 ------
Reprenez le code de l'exercice 6.

------ 2 ------
Utilisez Pug pour transformer vos trois documents HTML en template.

*/

const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views', 'pug');

app.use('/css', express.static(__dirname+'/css'));
app.use('/img', express.static(__dirname+'/img'));


app.get('/', function(req, res){
  res.render('index', {titre: 'Accueil', nomPage: 'page1'});
})
app.get('/page2', function(req, res){
  res.render('index2', {titre: 'Accueil', nomPage: 'page2'});
})
app.get('/page3', function(req, res){
  res.render('index3', {titre: 'Accueil', nomPage: 'page3'});
})

app.listen(1234, function(){
  console.log('Serveur démarré sur le port 1234');
})