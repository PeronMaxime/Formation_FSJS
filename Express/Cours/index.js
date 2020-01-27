const express = require('express');
const app = express();


app.get('/',(req, res)=>res.send('Bonjour à tous'));
app.get('/test', function(req, res){
  res.send('Bonjour test');
});


app.listen(8080, ()=>console.log('Serveur à l\'écoute'));