/*********************************************************
*****************TEMPLATE PUG - HÉRITAGE*****************
*********************************************************/

/*********************************
***********Présentation***********
*********************************/
/*
Une seconde technique permet également de ne pas répéter son code.
Dans ce second cas, on utilise un template parent qui agit comme une structure de base. Le template enfant contient les éléments spécifiques.
On utilise pour se faire le mot clef extends (cf. https://pugjs.org/language/inheritance.html).
*/


/*********************************
*************Exercice*************
*********************************/
/*
------ 1 ------
Reprenez le code de l'exercice précédent.

------ 2 ------
Utilisez le layout pour mettre à part l'en-tête de la page et le menu.
*/

const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views', 'pug');

app.use('/css', express.static(__dirname+'/css'));

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
