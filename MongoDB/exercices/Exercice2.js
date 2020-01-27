mongoimport --db paris --collection piscines --file piscines_paris.json

db.collection.find(query, projection)

use paris

// Pour compter les éléments
db.piscines.count()
// ou
db.piscines.find().count()

// Pour les piscines du 11ème
db.piscines.find({zipCode: 75011}).pretty()

// Pour les piscines du 11ème, n'affichez que les champs nom et code postal
db.piscines.find(
    {zipCode: 75011},
    {name:1, zipCode:1}
).pretty()

// La projection sert à limiter les champs renvoyés par une requête


// Par défaut, le champ _id est présent. Il faut l'exclure explicitement
db.piscines.find(
    {zipCode: 75011},
    {name:1, zipCode:1, _id:0}
).pretty()


// Pour limiter le nombre de résultats, on utilise
db.piscines.find().limit(4)

// Pour trier par nom
db.piscines.find().sort({name:1})









