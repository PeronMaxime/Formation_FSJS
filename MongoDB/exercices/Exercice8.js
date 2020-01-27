// Exercices de mises � jour

// db.collection.update(query, update, options)

// Reprendre la base paris
use paris
// On ajoute un champ 'acces_handicape' � true aux piscines du 13�me
db.piscines.update(
    { zipCode : 75013 },
    { $set : { acces_handicape : true} },
    { multi : true }
)
// Par d�faut update() ne modifie que le premier �l�ment qui matche

//Il faut ajouter l'option multi:true pour que la mise � jour se fasse pour tous les enregistrements

// On peut aussi la m�thode updateMany() pour obtenir le m�me r�sultat
db.piscines.updateMany(
    { zipCode : 75013 },
    { $set : { acces_handicape : true} }
)

// L'option upsert : true ajoute un document si aucun document ne correspond ou modifie si un document correspond 
db.piscines.updateMany(
    { zipCode : 75051 },
    { $set : { acces_handicape : true} },
    { upsert : true}
)

// On peut d�finir des champs et en supprimer dans la meme requete
// Ajouter un champ verif true et supprimer l'acc�s handicap�

db.piscines.updateMany(
    { zipCode : 75013 },
    { $set : { verif : true}, $unset : {acces_handicape : ""}}
)


