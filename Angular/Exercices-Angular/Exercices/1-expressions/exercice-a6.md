# Angular : les expressions - Exercice 6 - les filtres


## Préparation
Créez un nouveau composant nommé "exercice-a6" dans le dossier `src/app/exercices/1-expressions/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).


## Introduction

Les filtres (_pipes_ en anglais)) sont des fonctions de transformation qui prennent une valeur en argument et qui retournent une valeur modifiée. Angular prévoit de pouvoir utiliser ces fonctions directement dans un template sur une valeur à afficher. Pour utiliser un filtre on écrit le symbole tube ou barre verticale (<kbd>|</kbd>) après une valeur entre accolades, suivi du nom du filtre.

Angular fourni plusieurs filtres répondant à des besoins courants, comme :
- [`CurrencyPipe`](https://angular.io/api/common/CurrencyPipe) pour l'affichage des valeurs monétaires
- [`DatePipe`](https://angular.io/api/common/DatePipe) pour formatter les dates
- [`SlicePipe`](https://angular.io/api/common/SlicePipe) pour afficher une partie d'un tableau ou itérable.

### Documentation
- Guide : [Les filtres](https://angular.io/guide/pipes).
- Guide : [Liste des filtres prédéfinis](https://angular.io/api?type=pipe).


## Partie 1
Initialisez un tableau qui contient 3 objets qui représentent des voitures. Une voiture a pour caractéristiques :
- Son modèle, qui est un texte;
- Sa puissance, qui est un texte;
- Son prix, qui est un nombre;
- Sa date de fabrication, qui est un nombre (un timestamp).


## Partie 2
À l'aide de la directive `NgFor`, affichez pour chacune des voitures :
- Son modèle, formaté avec la première lettre de chaque mot en majuscule,
- Sa puissance, formatée en majuscule,
- Son prix, formaté avec le filtre approprié,
- Sa date de fabrication, formatée avec le filtre approprié.
