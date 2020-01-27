// Importer dans une base us, dans la collection companies le fichier companies.json
./mongoimport --db us --collection companies --file C:/Users/Maxime/Documents/Dev/Formation_FSJS/MongoDB/sampleData/companies.json
// Quelle est la société la plus ancienne ?
db.companies.find({},{name : 1, created_at : 1, _id : 0}).sort({created_at: -1}).limit(1).pretty()
// Quelle est la société qui emploie le plus de personnes ?

db.companies.find({},{name : 1, number_of_employees : 1, _id : 0}).sort({number_of_employees: -1}).limit(1).pretty()
// Quelle est la société qui emploie le plus de personnes dans la publicité ?
db.companies.find({category_code : /advertising/},{name : 1, number_of_employees : 1, category_code : 1, _id : 0}).sort({number_of_employees: -1}).limit(1).pretty()
// Quel est l'effectif cumulé des entreprises de 'network_hosting' ?
db.companies.aggregate(
    {$match : {category_code : /network_hosting/}},
    {$group : {_id : "$category_code", effectifCumule : {$sum : "$number_of_employees"}}}
)
// Quelle entreprise est dirigé par Rich Langdale ?

// Supprimer les entreprises de finance

// Mettre à jour les entreprises de publicité en leur ajoutant un champ 'likes'

// Créer un index sur le champ nom de la compagnie

// Supprimer cet index

// Recréer l'index en spécifiant que la valeur doit être unique

// Insérer une société My Little Compagnie en respectant l'organisation actuelle de la base

// Trouver les sociétés qui ont un bureau situé à moins de 20 kilomètres de la statue de la Liberté

// Ajouter un champ phone dans l'adresse du premier bureau des sociétés qui sont situées dans l'état de NY

// Créer une autre collection 'awards', créer quelques récompenses en les reliant à une société en utilisant une référence

// Créer une fonction qui prend en paramètre un _id et qui calcule la moyenne des likes d'une entreprise

// Ajouter quelques likes dans un tableau et tester votre fonction

