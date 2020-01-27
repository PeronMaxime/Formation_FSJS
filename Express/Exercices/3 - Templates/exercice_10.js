/**********************************************************
*****************TEMPLATE PUG - INCLUSION*****************
**********************************************************/

/*********************************
***********Présentation***********
*********************************/
/*
Pour ne pas répéter plusieurs fois les mêmes lignes de code dans différents template Pug, il est possible d'utiliser l'inclusion.
Cela consiste à déporter la partie du code qui se répète dans un autre fichier pour l'appeler ensuite dans les fichiers qui en ont l'usage.
On utilise pour se faire le mot clef include (cf. https://pugjs.org/language/includes.html)
*/


/*********************************
*************Exercice*************
*********************************/
/*
------ 1 ------
Reprenez le code de l'exercice précédent.

------ 2 ------
Utilisez l'inclusion pour mettre à part l'en-tête de la page et le menu.
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
