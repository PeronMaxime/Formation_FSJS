// Appel du module express et instanciation
const express = require('express');
const app = express();
// Déclaration du moteur de template
app.set('view engine','pug');

// Liste des templates disponible pour le test dans la route
const pages = ['accueil','page1']; // raccourcis

// Route pour les fichiers statiques
app.use('/src',express.static(__dirname + '/src'));

app.get('/',(req,res)=>{
  // Nous récupérons dans l'url la valeur de p pour cibler le template correspondant
  let cible = req.query.p;
  if(pages.indexOf(cible) == -1) {
    cible = 'accueil';
  }
  res.render(cible,{titre:cible});
});

app.get('/cas_particulier',(req,res) => {
  // Illustration de l'appel d'un document pug dans un sous-dossier de views
  res.render('special/cas');
});

app.listen(8080,()=> console.log('Serveur sur le port 8080'));