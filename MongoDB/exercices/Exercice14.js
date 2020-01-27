// Par défaut, mongo est accessible sans authentification
// Dans un environnement de production, il faut mettre en place cette sécurité !!

use base_protegee
//On créé un  utilisateur et on lui donne un rôle ( = des droits )
db.createUser(
    {
      user: "username",
      pwd: "username",
      roles: [
         { role: "readWrite", db: "base_protegee" },
      ]
    }
)

// Il faut redémarrer le serveur mongod avec le paramètre --auth pour activer l'authentification

// Reconnectez-vous au client mongo et essayez d'insérer un enregistrement
./mongo --authenticationDatabase "base_protegee" -u "username" -p

// Ou après la connexion
db.auth("username", passwordPrompt())
// On vous le refuse car vous n'avez pas les droits.

