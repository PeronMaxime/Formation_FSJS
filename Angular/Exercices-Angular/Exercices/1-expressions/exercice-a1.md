# Angular : les expressions - Exercice 1


## Préparation
Créez un nouveau composant nommé "exercice-a1" dans le dossier `src/app/exercices/1-expressions/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).

## Introduction

La façon la plus simple d'afficher une propriété du composant dans le template est de lier cette propriété via l'interpolation.

Pour utiliser l'interpolation, écrivez une valeur, ou le nom d'une propriété de la classe du composant (définie dans le fichier TypeScript), dans le template associé (fichier HTML) entouré de doubles accolades : `{{ maPropriete }}`.

L'interpolation consiste à évaluer l'expression entres accolades et à afficher le résultat de cette évaluation en texte.

### Documentation
- Guide : [L'interpolation et les expressions de template](https://angular.io/guide/template-syntax).
  - [Les expressions de template](https://angular.io/guide/template-syntax#template-expressions).


## Partie 1

Affichez la résponse à chaque question dans un paragraphe du template à l'aide d'une expression Angular.

- Que donne la somme de 36344.789 et 5422.995432 ?
- Que donne la concaténation de "Bonjour" et "le Monde" ?
- Quel est le reste de la division entière de 4321 par 1234 ?
- Est-il vrai que 0.000005 est strictement supérieur à 0.00005 ?
- Que donne l'équation ((3x + 2) - (43x * (9y + 6))) / (2y - 7) si x vaut 4 et y vaut 19. Vous devez donc créer 2 propriétés numériques dans le composant.

