const express = require('express');
const app = express();
app.set('view engine','pug');

app.use('/img',express.static(__dirname + '/src/images'));
app.use('/css',express.static(__dirname + '/src/css'));

// routes

app.get('/',(req,res)=>res.render('accueil',{title:'Accueil', h1:'Page d\'accueil',menu:[['#','Accueil'],['/autre','Autre page']]}));

app.get('/autre',(req,res)=>res.render('autre',{title:'Une autre page', h1:'Une autre page', laClass:'information',menu:[['/','Accueil'],['#','Autre page']]}));


// lancement de serveur

const server = app.listen(8080,()=> {
  const adresseHote = server.address().address;
  const portEcoute = server.address().port;
  console.log(`Serveur en action à l'adresse ${adresseHote} sur le port ${portEcoute}`);
});