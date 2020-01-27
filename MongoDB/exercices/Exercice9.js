// Mise à jour -> update

// Dans la liste des restaurants
use newyork
// Modifier les restaurants dont la cuisine est Hamburgers pour leur ajouter un champ healthy_food égal à 2
db.restaurants.updateMany(
    {cuisine : "Hamburgers"},
    {$set : { healthy_food : 2}}
)
// Pour les végétariens, leur mettre le champ healthy food à 9.
db.restaurants.updateMany(
    {cuisine : "Vegetarian"},
    {$set : { healthy_food : 9}}
)
// Vérifier ques tous les restaurants ont un tableau grades
db.restaurants.count()
db.restaurants.count( {grades : {$type : "array"}})
// les deux renvoient 25359, donc oui !

// Supprimer le champ building des restaurants situés dans le Bronx et ajouter un booléen
db.restaurants.updateMany(
    {borough: "Bronx"},
    {$unset: {"address.building" : false}, $set : {boule : true}}
)
// équivalent avec Update
db.restaurants.update(
    {borough: "Bronx"},
    {$unset: {"address.building" : false}, $set : {boule : true}},
    { multi : true}
)
//Vérifier
db.restaurants.findOne({ borough : "Bronx"})
// Ajouter un champ rating à 5 à tous les restaurants
db.restaurants.updateMany(
    {},
    {$set : {rating : 5}}
)
// Multiplier le champ rating par 2 pour les restaurants situés dans le Queens
db.restaurants.updateMany(
    {borough : "Queens"},
    {$mul : {rating : 2}}
)
// Trouver les restaurants de Brooklyn
db.restaurants.find({
    borough : "Brooklyn"
}).pretty()
// Limiter les résultats à 100
db.restaurants.find({
    borough : "Brooklyn"
}).limit(100).pretty()
// Appliquer d'abord un count()
db.restaurants.find({
    borough : "Brooklyn"
}).limit(100).count()
// Puis à la place appliquer un size()
db.restaurants.find({
    borough : "Brooklyn"
}).limit(100).size()
// Quelle est la différence ?

// Ajouter une entrée au tableau grades pour le restaurant "Tu-Lu'S Gluten-Free Bakery"
db.restaurants.updateMany(
    {name : "Tu-Lu'S Gluten-Free Bakery"},
    {$push : { grades : { date: new Date(), grade: "A", score: 16}}}
)
// Pour vérifier
db.restaurants.find({name: "Tu-Lu'S Gluten-Free Bakery"}).pretty()
// Modifier le champ rating pour tous les documents pour qu'il soit égal à la moyenne réelle des grades
// Créer un curseur et le manipuler avec un forEach
var tousLesRestos = db.restaurants.find();
tousLesRestos.forEach(function(unResto){
    var moyenne = 0;
    unResto.grades.forEach(function(grade){
        moyenne+= grade.score;
    })
    moyenne = moyenne / unResto.grades.length; 

    db.restaurants.update(
        { _id : unResto._id},
        {$set : {rating : moyenne}}
    )
})

// Avec la méthode save()
var tousLesRestos = db.restaurants.find();
tousLesRestos.forEach(function(unResto){
    var moyenne = 0;
    unResto.grades.forEach(function(grade){
        moyenne+= grade.score;
    })
    moyenne = moyenne / unResto.grades.length; 

    unResto.rating = moyenne;
    db.restaurants.save(unResto)
})
// Quel est le restaurant qui a la meilleure moyenne
db.restaurants.find().sort({rating: -1}).limit(1).pretty()



