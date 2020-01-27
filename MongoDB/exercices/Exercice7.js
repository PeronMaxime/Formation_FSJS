// Créer une base de données newyork et une collection restaurants
// Importer le fichier restaurant.json
// sur PC : Se mettre dans le dossier où il y l'executable mongoimport


// Combien y a-t-il de restaurants ?

// Identique à


// Trouver les restaurants qui sont dans la rue "Morris Park Ave"


// Pour aussi récupérer ceux qui ont pour rue "Morris Park Avenue"

// L'utilisation d'une regex permet de récupérer les 2 orthographes (et éventuellement les orthographes alternatives en minuscules avec le flag i(nsensitive) )

// Combien y en-a-t-il ?

// Afficher uniquement (sans l'id) les champs quartier, type de cuisine et adresse


// Trouver la liste des restaurants situés à Staten Island qui font des hamburgers OU de la boulangerie.
// Avec un $or

// Avec le $and implicite

// Avec un $in
db.restaurants.find({
    borough: "Staten Island",
    cuisine : { $in :[ "Hamburgers", "Bakery"]}
}).count()

// La variable restaurants est un objet. Dans mongo, ils appellent cela un curseur...

// Parcours d'un curseur avec un while
var tousLesRestos = db.restaurants.find().limit(100)
while(tousLesRestos.hasNext()) {
    printjson(tousLesRestos.next());
}

// Parcours d'un curseur avec un foreach
var tousLesRestos = db.restaurants.find().limit(100)
tousLesRestos.forEach(function(unResto){
    print(unResto.name);
})


// Quel est le type de restaurant le plus présent ?
// Vous pouvez le faire en vanillaJS
var tousLesRestos = db.restaurants.find();
var toutesLesCuisines = ['toto'];
tousLesRestos.forEach(function(unResto){
    if(toutesLesCuisines.indexOf(unResto.cuisine) == -1){
        toutesLesCuisines.push(unResto.cuisine);
    }
})
print(toutesLesCuisines);
toutesLesCuisines

var maxCuisine = 0;
var nomCuisine = "";

toutesLesCuisines.forEach(function(uneCuisine){
    if(db.restaurants.count({cuisine : uneCuisine}) > maxCuisine){
        maxCuisine = db.restaurants.count({cuisine : uneCuisine})
        nomCuisine = uneCuisine;
    }
})

nomCuisine;
maxCuisine;

// Autre méthode. Plus élégante ??
// C'est le pipeline d'aggregation

db.restaurants.aggregate([
    { $match : {}},
    { $group : { _id : "$cuisine", nbRestos : { $sum : 1}}},
    { $sort : {nbRestos : -1}},
    { $limit : 5}
])

// Pour limiter aux restos de Staten Island
db.restaurants.aggregate([
    { $match : { borough : "Staten Island"}},
    { $group : { _id : "$cuisine", nbRestos : { $sum : 1}}},
    { $sort : {nbRestos : -1}},
    { $limit : 5}
])
