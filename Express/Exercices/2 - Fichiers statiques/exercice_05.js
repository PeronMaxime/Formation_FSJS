/*********************************************************
***********UTILISATION DES FICHIERS STATIQUES 3***********
*********************************************************/

/*********************************
***********Présentation***********
*********************************/
/*
La méthode sendFile de l'objet res permet d'envoyer un fichier spécifique au client.
Elle s'utilise comme suit :
res.sendFile('<nom du fichier>', options);
options: un objet contenant le dossier racine. Par exemple : {root: 'files'}
*/


/*********************************
*************Exercice*************
*********************************/
/*
------ 1 ------
Créez un document HTML. Intégrez au-moins un titre et une balise image.
Placez ce document et l'image dans un dossier.

------ 2 ------
Utilisez la méthode sendFiles pour envoyer le fichier au client.


*/

const express = require('express');
const app = express();
const port = 1234;

app.use('/img', express.static(__dirname+'/img'));

app.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname+'/html'});
})

app.listen(port, function(){
  console.log('Serveur démarré sur le port '+port);
});
