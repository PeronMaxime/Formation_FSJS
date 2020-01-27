// Aggrégation

// Importer dans une base le fichier website.json



// Quel est l'hébergeur qui héberge le plus de sites ?
db.website.aggregate([
    {$match : {}},
    {$group : { _id : "$hebergeur", nbSite : {$sum : 1}}},
    {$sort : {nbSite : -1}},
    {$limit : 1}

])

// Pour l'hébergeur gandi, quel site a le plus de traffic
db.website.find(
    {hebergeur : "Gandi"},
).sort({traffic : -1})

// Le tri n'est pas cohérent car le traffic est un string...
// On va modifier nos documents pour que le traffic soit un entier


// avec le save()
var allSites = db.website.find();
allSites.forEach(function(site){
    newTraffic = parseInt(site.traffic);

    site.traffic = newTraffic;
    db.website.save(site)
})

// la meme chose avec update
var allSites = db.website.find();
allSites.forEach(function(site){
    newTraffic = parseInt(site.traffic);

    db.website.update(
        {_id : site._id},
        {$set : {traffic : newTraffic}}
    )
})


// Quel est le traffic cumulé des hébergeurs ? Qui est le premier ?
db.website.aggregate([
    {$match : {}},
    {$group : {_id : "$hebergeur", trafficCumule : {$sum : "$traffic"}}},
    {$sort : {trafficCumule : -1}}
])

// Traffic cumulé de tous les hébergeurs
db.website.aggregate([
    {$match : {}},
    {$group : {_id : "tousleshebergeurs", trafficCumule : {$sum : "$traffic"}}},
    {$sort : {trafficCumule : -1}}
])

// Quelle est la moyenne des likes par hébergeur ?
// les likes sont aussi en string, on les passe en int

// avec le save()
var allSites = db.website.find();
allSites.forEach(function(site){
    newLikes = parseInt(site.likes);

    site.likes = newLikes;
    db.website.save(site)
})

// On peut maintenant calculer la moyenne
var allSites = db.website.find();
var nbSite = db.website.find().count();
var moyenne = 0;
allSites.forEach(function(site){
    print(moyenne);
    moyenne += site.likes;
})
moyenne = moyenne / nbSite;
print(moyenne)
// Augmenter le nombre de 50 likes les sites de Gandi 
var siteGandi = db.website.find({hebergeur : "Gandi"});
siteGandi.forEach(function(site){
    site.likes += 50;
    db.website.save(site)
})

// exporter dans un fichier newwebsite.json le contenu de notre collection
./mongoexport --db website --collection website --out C:/Users/Maxime/Documents/Dev/Formation_FSJS/MongoDB/sampleData/newwebsite.json
// Cela permet de faire des sauvegardes ...




