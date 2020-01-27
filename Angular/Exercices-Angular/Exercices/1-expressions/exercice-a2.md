# Angular : les expressions - Exercice 2


## Préparation
Créez un nouveau composant nommé "exercice-a2" dans le dossier `src/app/exercices/1-expressions/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).

## Introduction

La façon la plus simple d'afficher une propriété du composant dans le template est de lier cette propriété via l'interpolation.

Pour utiliser l'interpolation, écrivez une valeur, ou le nom d'une propriété de la classe du composant (définie dans le fichier TypeScript), dans le template associé (fichier HTML) entouré de doubles accolades : `{{ maPropriete }}`.

L'interpolation consiste à évaluer l'expression entres accolades et à afficher le résultat de cette évaluation en texte.

### Documentation
- Guide : [L'interpolation et les expressions de template](https://angular.io/guide/template-syntax).
  - [Les expressions de template](https://angular.io/guide/template-syntax#template-expressions).


## Partie 1
Dans le composant, créez une propriété `promotions`, de type tableau, qui contient 5 éléments numériques qui sont les 5 dernières années (2015 à 2019).
À l'aide d'une expression affichez votre année de promotion dans un paragraphe du template.


## Partie 2
Créez une nouvelle propriété « classe » qui est un objet avec des propriétés définisant votre classe :
- Son nom, qui est une chaîne de caractère,
- Sa spécialité, qui est une chaîne de caractère,
- Son nombre d'inscrits, qui est un nombre

À l'aide d'une expression, affichez dans le template le nom de votre classe avec sa spécialité sur une même ligne.

Affichez sur une autre ligne le nombre d'inscrits de votre classe.
