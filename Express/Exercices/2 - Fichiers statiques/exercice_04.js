/***********************************************************
************UTILISATION DES FICHIERS STATIQUES 2************
***********************************************************/

/*********************************
***********Présentation***********
*********************************/
/*
Vous pouvez déclarer autant de dossier statique que vous le souhaitez.
*/

/*********************************
*************Exercice*************
*********************************/
/*

------ 1 ------
Créez deux dossiers à côté de votre fichier. Placez une image dans chaque dossier.

------ 2 ------
Déclarez successivement ces deux dossiers dans votre fichier JavaScript.

------ 3 ------
Quand l'utilisateur se connecte à votre serveur, envoyez-lui la balise image  correspondant au premier dossier.

------ 4 ------
S'il saisit le texte 'image' dans l'URL, affichez lui l'image correspondant au second dossier.
*/


const express = require('express');
const app = express();
const port = 1234;

app.use('/img', express.static(__dirname+'/img'));
app.use('/img2', express.static(__dirname+'/img2'));

app.get('/', function(req, res){
  res.send(`<img src="/img/toto.jpg">`);
})
app.get('/image', function(req, res){
  res.send(`<img src="/img2/tata.jpg">`);
})

app.listen(port, function(){
  console.log('Serveur démarré sur le port '+port);
});