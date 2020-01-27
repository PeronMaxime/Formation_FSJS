/*****************************************
********TRAITEMENT AVEC REQ.PARAMS********
*****************************************/
// http://localhost:8888/traitement/marc/boussoulade

app.get('/traitement/:prenom/:nom',(req,res) => {
  console.log(req.params);
  /* ceci affiche :
  {
    prenom: 'marc',
    nom: 'boussoulade'
  }
  */
});


/*****************************************
*********TRAITEMENT AVEC REQ.QUERY*********
*****************************************/
// http://localhost:8888/traitement?prenom=marc&nom=boussoulade

app.get('/traitement', (req,res) => {
  console.log(req.query);
  /* ceci affiche :
  {
    prenom: 'marc',
    nom: 'boussoulade'
  }
  */
});