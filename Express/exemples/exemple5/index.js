const express = require('express');
const app = express();

const session = require('express-session');
const cookieParser = require('cookie-parser');

// Utilisation de CookieParser
app.use(cookieParser());

app.use(session({
  secret: 'ma phrase de passe',
  resave: false,
  saveUninitialized: true
}));

app.get('/', (req,res) => {
  if (!req.session.compteur) {
    req.session.compteur = 1;
  } else {
    req.session.compteur++;
  }
  res.send('Compteur : ' + req.session.compteur);
});

app.listen(8080,()=>console.log('Serveur:8080'));