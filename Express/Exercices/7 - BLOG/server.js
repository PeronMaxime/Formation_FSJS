const express = require('express');
const app = express();
app.set('view engine', 'pug');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const mongodb = require('mongodb');
const session = require('express-session');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(session({
  secret:'123456789SECRET',
  saveUninitialized : false,
  resave: false
}));

app.get('/', (req, res) => {
  res.render('index', {title: 'Index'});
})

app.get('/admin', (req, res) => {
  console.log(req.session);
  if(req.session.idUser){
    res.render('admin_connect');
  }
  else{
    res.render('admin', {title: 'Administration'});
  }
})

//C'est la requête que tu reçois en post, suite à ton formulaire
app.post('/admin', (req, res) => {
  //Ici tu récupères tout ce qui a été envoyé en POST grâce à req.body, je le stock dans une variable body pour plus tard
  const body = req.body;
  // Ici on veut comparer ce qu'on a reçu en post avec ce qu'il y a dans la base de données, du coup on s'y connecte.
  mongodb.MongoClient.connect('mongodb://localhost:27017',{useUnifiedTopology: true}, function(err, client){
    // Si on arrive pas à se connecter à la base de données
    if (err) {
      console.log('Impossible de se connecter à la base de données');
    }
    // Si on arrive à se connecter à la base
    else {
      // On récupère la base de données qu'on veut utiliser, ici j'en ai créée une sous le nom de blog au préalable avec compass (tu peux aussi le faire en ligne de commande, mais c'est plus simple par compass)
      const db = client.db('blog');
      //ON récupère la collection de la base sur laquelle on veut travailler. Ici on veut les utilisateurs
      const utilisateurs = db.collection('utilisateurs');
      // Ca c'est la requête, le plus important. On cherche dans la collection utilisateurs s'il y a un document qui correpond avec le pseudo et le mot de passe qu'on a récupéré dans le post via body. Le "toArray" sert à transformer le résultat de la requête sous forme de tableau. L'argument data du "toArray" contient le tableau de résultat
      utilisateurs.find({pseudo: body.pseudo, mdp: body.mdp}).toArray(function(err, data){
        // S'il y a eu une erreur dans la requête
        if (err) {
          console.log('Erreur lors de la récupération des données');
        }
        // Si la requête est bonne
        else {
          // Si data contient des données, il a une propriété length. Ce qui veut dire qu'un document correspond au pseudo et mdp envoyé via le post
          if(data.length){
            // T'as pas besoin de ça pour le moment, c'est pour gérer les sessions
            if(!req.session.pseudo){
              req.session.idUser = data[0]._id;
              req.session.pseudo = data[0].pseudo;
              console.log(req.session);
            }
            //Tu affiches un nouveau template d'une page disant que tu es connectée
            res.render('admin_connect');
          }
          // Si la requête était bonne mais qu'il n'y avait aucun document qui correspondait, data est vide, du coup tu rentres dans le else
          else {
            // Dans ce cas tu envoies un autre template, soit celui du formulaire lui même puisque tu veux que l'utilisateur retente de se connecter. La variable err que je donne au template ici, je la récupère dans le template du formulaire. Dans ce template j'affiche err s'il existe, qui indique qu'il y a eu une erreur
            res.render('admin', {err: 'Erreur d\'identification'});
          }
        }
      })
    }
  })
})

app.get('/create_article', (req, res) => {
  res.render('create_article');
})

app.post('/create_article', (req,res) => {
  const body = req.body;
  mongodb.MongoClient.connect('mongodb://localhost:27017',{useUnifiedTopology: true}, function(err, client){
    if (err) {
      console.log('Impossible de se connecter à la base de données');
    }
    else{
      const db = client.db('blog');
      const articles = db.collection('articles');
      if(body.titre){
        articles.insertOne({
          titre: body.titre,
          contenu: body.contenu,
          auteur: body.auteur,
          date: body.date
        });
        res.render('create_article', {done: 'Article ajouté avec succès'});
      }
      else {
        res.render('create_article', {err: 'Erreur de saisie, veuillez renseigner au moins un titre'});
      }
    }
  })
})

app.listen(1234);