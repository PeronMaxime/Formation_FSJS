/*********************************************************
*******************GESTION DES ROUTES 1*******************
*********************************************************/

/*********************************
***********Présentation***********
*********************************/
/*
Un serveur Web doit pouvoir répondre de façon appropriée en fonction de l'URL envoyée par le client.
Dans un premier temps, nous allons nous intéresser à la gestion simple de requête avec la méthode get.
*/


/*********************************
*************Exercice*************
*********************************/
/*
Dans le premier exercice, nous avons envoyé un unique message.

------ 1 ------
Reprenez le code de l'exercice précédent.Lorsque l'utilisateur saisit l'URL de base, affichez un message.

------ 2 ------
À l'aide d'une seconde méthode get de l'objet contenu dans app, affichez un autre message dans le navigateur quand l'utilisateur ajoute le mot "fin" à l'URL de base.
*/

const express = require('express');
const app = express();
const port = 1234;

app.get('/', function(req, res){
  res.send('Coucou');
})
app.get('/fin', function(req, res){
  res.send('Fin');
})

app.listen(port, function(){
  console.log('Serveur démarré sur le port '+port);
});