/***********************************************************
****************ROUTES ET FICHIERS STATIQUES****************
***********************************************************/

/*********************************
***********Présentation***********
*********************************/
/*
En utilisant la gestion des routes et l'utilisation des fichiers statiques, vous allez réaliser un mini site.
*/


/*********************************
*************Exercice*************
*********************************/
/*
------ 1 ------
Créez trois documents HTML :
- Chacun contient un titre et un menu,
- Le même fichier CSS est utilisé par les trois documents,
- Prévoyez une image d'en-tête utilisée dans tous les documents.

------ 2 ------
Un menu, présent dans les trois pages, comportera trois liens : page d'accueil, page 1 et page 2. Ceux-ci permettront de naviguer entre les trois pages.
Utilisez un app.use et trois app.get.

*/

const express = require('express');
const app = express();
const port = 1234;

app.use('/img', express.static(__dirname+'/img'));
app.use('/css', express.static(__dirname+'/css'));
app.use('/html', express.static(__dirname+'/html'));

app.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname+'/html'});
})

app.listen(port, function(){
  console.log('Serveur démarré sur le port '+port);
});

