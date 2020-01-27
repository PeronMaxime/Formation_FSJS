/***********************************************************
************UTILISATION DES FICHIERS STATIQUES 1************
***********************************************************/

/*********************************
***********Présentation***********
*********************************/
/*
Un serveur délivre de nombreux fichiers statiques : CSS, JavaScript, image, son, vidéo …
Express permet de faire référence à ces fichiers en les plaçant dans un sous-dossier. Celui-ci est déclaré dans le fichier js, avant la gestion des routes (app.get(), …) de la façon suivante :
app.use("/<nom du dossier>", express.static(__dirname + '/<nom du dossier>'));
Vous pouvez ensuite appeler l'élément dans le document html envoyé au client en spécifiant une URL relative.
*/

/*********************************
*************Exercice*************
*********************************/
/*
Vous devez envoyer au client avec la méthode send de l'objet res une balise image. Pour se faire, suivez la procédure ci-dessous :

------ 1 ------
Reprenez le code de l'exercice 1.

------ 2 ------
Créez un dossier à côté de votre fichier contenant une image. Déclarez ce dossier dans votre fichier JavaScript grâce à la méthode présentée ci-dessus.

------ 3 ------
Quand l'utilisateur se connecte à votre serveur, envoyez-lui une balise image qui affichera l'image contenue dans le dossier dans le navigateur.
*/

const express = require('express');
const app = express();
const port = 1234;

app.use('/img', express.static(__dirname+'/img'));

app.get('/', function(req, res){
  res.send(`<img src="/img/toto.jpg">`);
})

app.listen(port, function(){
  console.log('Serveur démarré sur le port '+port);
});