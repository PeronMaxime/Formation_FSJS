# Angular - Exercice 0


## Méthodologie
Pour chaque exercice, les sections utiles de la documentation sont indiquées soit en introduction, soit dans le cadre d'une partie spécifique. Les exercices sont construits de façon progressive et chaque nouvel exercice peut faire appel à des notions vues dans les précédents.


## Préparation
- Créez un nouveau projet Angular nommé "exercices" avec le [CLI Angular](https://angular.io/cli).<br>
`ng new exercices`.
- Dans cette application, démarrez le serveur de test.<br>
`ng serve`
- Créez un composant nommé "exercice-a0" dans le dossier `src/app/exercices/1-expressions`.<br>
`ng generate component exercices/1-expressions/exercice-a0`.


## Introduction
La façon la plus simple d'afficher une propriété du composant dans le template est de lier cette propriété via l'interpolation.

Pour utiliser l'interpolation, écrivez le nom d'une propriété de la classe du composant (définie dans le fichier TypeScript) dans le template associé (fichier HTML) entouré de doubles accolades : `{{ maPropriete }}`.

### Documentation
- Guide : [L'interpolation et les expressions de template](https://angular.io/guide/template-syntax).
  - [Les expressions de template](https://angular.io/guide/template-syntax#template-expressions).
- [Cheat Sheet](https://angular.io/guide/cheatsheet)


## Premiers pas
- Videz entièrement le template du composant principal (`app.component.html`) et supprimez les propriétés de la classe correspondante.
- Créez une nouvelle propriété `titre` contenat le texte "Exercices Angular" et affichez-la dans dans le template principal en tant que contenu de `<h1>`.
