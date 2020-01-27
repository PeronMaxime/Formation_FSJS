// Vélib


// Récupérer un fichier json des velib chez jcdecaux developer
// Importer dans la base paris, le fichier jcdecaux.json dans une collection velib
./mongoimport --db paris --collection velib --file C:/Users/Maxime/Documents/Dev/Formation_FSJS/MongoDB/sampleData/jcdecaux.json --jsonArray
// Cette fois-ci les données sous fournies sous la forme d'un tableau d'objets, il faut donc ajouter l'option --jsonArray pour importer


// syntaxe avec la fonction flèche

// Problème ! On n'a pas de champ codepostal ... On retrouve le code postal dans l'adresse.

// Mettez à jour tous les enregistrements en leur ajoutant un champ zipCode
var toutesLesStations = db.velib.find();

toutesLesStations.forEach(function(station){
    var cp = station.address.match(/[0-9]{5}/);
    db.velib.update(
        {_id : station._id},
        {$set : {zipCode : parseInt(cp[0])}}
    )
})
// Quel est l'arrondissement de Paris ou il y a le plus de stations ? (avec un $in)  

db.velib.aggregate(
    {$match : {zipCode : {$in: [75001,75002,75003,75004,75005,75006,75007,75008,75009,75010,75011,75012,75013,75014,75015,75016,75017,75018,75019,75020]}}},
    {$group : {_id : "$zipCode", nbStation : {$sum : 1}}},
    {$sort : {nbStation : -1}}
)

// OU plus élégant 
db.velib.aggregate(
    {$match : {zipCode : {$lt : 75021}}},
    {$group : {_id : "$zipCode", nbStation : {$sum : 1}}},
    {$sort : {nbStation : -1}}
)

// Quelle est la ville (hors Paris) qui a le plus de stations

// OU plus élégant
db.velib.aggregate(
    {$match : {zipCode : {$gt : 75021}}},
    {$group : {_id : "$zipCode", nbStation : {$sum : 1}}},
    {$sort : {nbStation : -1}}
)
// Cherchez la piscine Dunois .
db.piscines.find(
   {name: "Piscine Dunois"}
)
// Quelles sont les 5 stations velib les plus proches de la piscine Dunois ?
// Première version : en utilisant une fonction de calcul de distance
https://www.geodatasource.com/developers/javascript

function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}

var lonDunois = 2.366437;
var latDunois = 48.832973;

var allStations = db.velib.find();
allStations.forEach(function(station){
    var distanceDunois = distance(latDunois, lonDunois, station.latitude, station.longitude, "K")
    station.distanceDunois = distanceDunois;
    db.velib.save(station)
})

db.velib.find().sort({distanceDunois : 1}).limit(5).pretty()

// Seconde version : en modifiant la structure de la collection et en utilisant l'opérateur géographique $near
// Pour utiliser $near il faut :
 // - respecter l'organisation de GeoJSON (geoJson.org)
 // - avoir un index de type 2dsphere
 
db.velib.updateMany(
    {},
    {$set : {"geometry" : {
        "type": "point",
        "coordinates" : ["$longitude","$latitude"]
    }}}
)

var toutesLesStations = db.velib.find();
toutesLesStations.forEach(function(station){
    station.geometry = { "type" : "Point", "coordinates" : [station.longitude, station.latitude]};
    db.velib.save(station)
})

// Maintenant, on indique que notre champ emplacement est un index de type 2dsphere
db.velib.createIndex({geometry : "2dsphere"})
// On peut à présent faire notre find() avec l'opérateur $near
db.velib.find({
    geometry: {
      $near: {
        $geometry: {
           type: "Point" ,
           coordinates: [ lonDunois , latDunois ]
        },
        $maxDistance: 1000,
        $minDistance: 0
      }
    }
 }, {name : 1, _id : 0}).limit(5).pretty()
 
 


