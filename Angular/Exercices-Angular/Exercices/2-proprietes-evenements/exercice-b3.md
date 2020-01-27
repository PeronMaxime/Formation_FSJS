# Angular : les liaisons - Exercice B3 - la liaison d'événements (_event binding_)


## Préparation
Créez un nouveau composant nommé "exercice-b3" dans le dossier `src/app/exercices/2-proprietes-evenements/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).

### Documentation
- Guide : [La liaison d'événement](https://angular.io/guide/template-syntax#event-binding-event).
- Guide : [Les événements utilisateur](https://angular.io/guide/user-input).


## Partie 1
Ajoutez le contenu suivant dans le template.

``` html
<p>Quelle est la rubrique active ?</p>

<h4>Rubrique 1</h4>
<div>
  <h5>Titre de la rubrique 1</h5>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien nulla, laoreet consectetur urna et, elementum suscipit magna. Aliquam erat volutpat. Quisque felis purus, tempus at accumsan quis, molestie in elit.</p>
</div>

<h4>Rubrique 2</h4>
<div>
  <h5>Titre de la rubrique 2</h5>
  <p>Aliquam erat volutpat. Quisque felis purus, tempus at accumsan quis, molestie in elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien nulla, laoreet consectetur urna et, elementum suscipit magna.</p>
</div>

<h4>Rubrique 3</h4>
<div>
  <h5>Titre de la rubrique 3</h5>
  <p>Sed ligula libero, tristique id vestibulum vel, imperdiet ac est. Nulla venenatis posuere neque eget venenatis. Nulla congue est neque, nec dapibus tellus gravida ac. Donec ligula massa, molestie at placerat eu, hendrerit sed eros. In elementum ipsum sit amet consequat fringilla.</p>
</div>
```


## Partie 2
Le document comporte à présent 3 rubriques. Lorsqu'une des rubriques est chargée et affichée dans le DOM, les autres doivent être retirées du DOM.

Pour atteindre cet objectif, nous allons utiliser la directive `NgIf` et la liaison d'événement.

Dans la classe du composant, créez 1 propriété et 2 méthodes :
- La propriété contient le numéro de la rubrique active,
- La première méthode prend en argument un numéro de rubrique et l'affecte à la propriété contenant le numéro de rubrique active,
- La seconde méthode prend en argument un numéro de rubrique active et retourne `true` si la propriété qui contient le numéro de rubrique active est le même que celui fourni en argument sinon `false`.

Pour tester vos méthodes, vous pouvez utiliser des expressions.


## Partie 3
Utilisez l'événement `(click)` sur chaque titre `<h4>` pour exécuter la méthode qui permet d'affecter le numéro de rubrique active correspondant au titre sur lequel on a cliqué.


## Partie 4
Utilisez la directive `NgIf` sur chaque div qui contient une rubrique pour exécuter la méthode qui indique s'il est vrai ou faux que la rubrique concernée est active.
