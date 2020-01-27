# Angular : les liaisons - Exercice B4 - la directive `NgStyle`


## Préparation
Créez un nouveau composant nommé "exercice-b4" dans le dossier `src/app/exercices/2-proprietes-evenements/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).


## Introduction

La directive `NgStyle` permet de manipuler plusieurs propriétés de style de façon dynamique, en fonction de propriétés du composant.

On pourrait manipuler une propriété de style directement en utilisant la liaisons de propriété (`<div [style.color]="myColor">`) comme pour toutes les propriétés des éléments HTML. Mais la directive `NgStyle` permet de manipuler un objet comportant plusieurs clé représentant chacune une propriété CSS.

### La microsyntaxe `NgFor`

La directive `NgFor` expose des propriétés, comme `index` (représentant l'indice de l'élément en cours dans la boucle) qui peuvent être utilisées dans le template.

``` html
<div *ngFor="let item of items; let i=index">{{i + 1}} - {{item.name}}</div>
```

### Documentation
- [`NgStyle`](https://angular.io/api/common/NgStyle).
- Guide : [`NgStyle`](https://angular.io/guide/template-syntax#ngstyle).
- Guide : [La liaison d'événement](https://angular.io/guide/template-syntax#event-binding-event).
- Guide : [Les événements utilisateur](https://angular.io/guide/user-input).
- Guide : [La directive NgFor](https://angular.io/guide/template-syntax#ngfor).
- Guide : [La microsyntaxe NgFor](https://angular.io/guide/structural-directives#inside-ngfor).

## Partie 1
Créez une propriété qui contient un tableau qui contient lui-même 3 objets qui décrivent des propriétés de style :

- largeur,
- hauteur,
- couleur de fond.

Utilisez la directive `NgFor` pour appliquer ces propriétés de style à 3 éléments `div`.


## Partie 2
Créez une méthode qui prend en argument l'index d'un élément dans le tableau d'objets et qui modifie (incrémente) la propriété de style de largeur
correspondant à l'objet dont l'index est fourni en argument.


## Partie 3
Utilisez l'événement `(click)` pour faire en sorte que lorsqu'on clique sur une de div, on déclenche la méthode qui modifie le style dont l'index est fourni en argument.
