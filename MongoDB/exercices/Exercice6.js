// Revenez sur la base "ifocop"
use ifocop
// Trouver un film dont le nom contient 'vache' (en utilisant une expression régulière)
db.films.find(
    {titre : {$regex: "vache"}}
).pretty()
// équivalent


// Afficher uniquement le prenom des acteurs de ce film
db.films.find(
    {titre : {$regex: "vache"}},
    {"acteurs.prenom":1}
).pretty()
// Trouver les films dont un acteur s'appelle René

db.films.find(
    {"acteurs.prenom":"René"}
).pretty()

