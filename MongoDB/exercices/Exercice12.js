// Suppression de documents

// db.collection.remove(query, options)


// Importer le fichier seas.json dans la db world
./mongoimport --db seas --collection seas --file C:/Users/Maxime/Documents/Dev/Formation_FSJS/MongoDB/sampleData/seas.json
// Suppression de tous les enregistrements
db.seas.remove({})

// Réimporter !! ;-)

// Supprimer l'océan Atlantique
db.seas.remove(
    {name : "Atlantic Ocean"}
)
// Supprimer les mers bordant l'océan atlantique
db.seas.remove(
    {bordering : /sea-Atlantic/}
)
// Quelle est la mer la plus profonde ?
db.seas.find().sort({depth : -1}).limit(1).pretty()
// Ajouter la mer 'Océan Atlantique'
db.seas.insert({
    "secureName" : "sea-Atlantique", 
    "name" : "Atlantique Ocean",
    "depth" : 8000
})

// Ajouter un tableau à toutes les mers
db.seas.updateMany(
    {},
    {$set : {myArray : []}}
)
// Quelle est la profondeur cumulé de toutes les mers ?
var toutesLesMers = db.seas.find();
var sommeProfondeurMers = 0;
toutesLesMers.forEach(function(mer){
    if(mer.depth){
        sommeProfondeurMers += mer.depth;
    }
})
print(sommeProfondeurMers);