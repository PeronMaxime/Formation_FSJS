# Angular : les expressions - Exercice 4 - la directive NgModel


## Préparation
Créez un nouveau composant nommé "exercice-a4" dans le dossier `src/app/exercices/1-expressions/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).

### Important

La directive `NgModel` fait partie de la gestion des formulaires dans Angular, pour l'utiliser nous devons importer le module `FormsModule` dans notre application.

Dans le module principal (défini dans le fichier `src/app/app.module.ts`) ajoutez le module `FormsModule` à la liste des imports.


## Introduction

La directive `NgModel` permet d'afficher la valeur d'une propriété de la classe et de refléter automatiquement la nouvelle valeur si l'utilisateur la modifie. De même la valeur sera mise à jour dans le template si elle est modifiée dans la classe (par exemple via un setter ou un appel à une méthode de la classe).

La directive `NgModel` permet communément d'associer le contenu d'un champ de formulaire de type `input`, `select` ou `textarea` à une propriété de classe et d'effectuer automatiquement la liaison de données dans les 2 sens.

### Exemple
``` html
<input type="password" name="my-password" [(ngModel)]="userPassword">
```

### Documentation
- Guide : [La directive `ngModel`](https://angular.io/guide/template-syntax#ngModel).
- Guide : [La liaison de données dans les 2 sens](https://angular.io/guide/template-syntax#two-way-binding-).
- Guide : [La liaison de données dans les 2 sens dans les formulaires](https://angular.io/guide/forms#two-way-data-binding-with-ngmodel).


## Partie 1
Dans la classe créez un propriété `nom` de type texte avec comme valeur une chaîne vide.


## Partie 2
Créez une propriété `nom` dans la classe du composant, qui est une chaîne de caractères vide.

Créez un formulaire dans le template, contenant un champ texte.

Sur le champ texte ajoutez la directive `ngModel` avec pour valeur la propriété `nom` (propriété de la classe).

Dans un paragraphe sous le champ texte, affichez la valeur de la propriété `nom` via l'interpolation (`{{  }}`).

Observez ce qui se passe lorsque vous modifiez le contenu du champ texte.

C'est le mécanisme de **"liaison de données dans les 2 sens"** qui permet de partager une donnée entre le template et sa classe.

Modifiez la valeur initiale de la propriété `nom` et observez l'affichage dans le template.
