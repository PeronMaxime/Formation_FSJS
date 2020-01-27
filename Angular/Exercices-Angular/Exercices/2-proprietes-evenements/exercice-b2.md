# Angular : les liaisons - Exercice B2 - la liaison d'événements (_event binding_)


## Préparation
Créez un nouveau composant nommé "exercice-b2" dans le dossier `src/app/exercices/2-proprietes-evenements/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).


## Introduction

Nous avons vu dans l'exercice précédant qu'il est possible d'affecter des valeurs utilisées dans le template à partir de la classe du composant, c'est la laison de propriété.

Il existe un moyen de communniquer dans l'autre sens : du template vers la classe, ou de la _vue_ vers le _modèle_. Il s'agit de la liaison événementielle.

Angular nous fournit un moyen de gérer les actions de l'utilisateur, à travers les événements DOM que vous connaissez déjà, comme `click`, `mouseover`, etc. ou bien comme nous le verrons plus tard avec des événements custom.

Pour gérer un évément sur une élément de la vue, on indique le nom de l'événement **entre parenthèses* suivi du nom d'une méthode de la classe.

Exemple :
``` html
<div (click)="faireQuelqueChose()">Action !</div>
```

Dans ce cas `faireQuelqueChose()` est une méthode qui doit exister dans la classe du composant.

La liaison événementielle (`(event)`) est unidirectionnelle, cette fois depuis la vue (template / HTML) vers le modèle (classe).

### Remarque :
Nous avons déjà rencontré cette syntaxe (les parenthèses entourant le nom de l'événement) avec `NgModel`, qui effectue une liaison automatique dans les 2 sens. C'est pour cette raison que `NgModel` combine les crochets (liaison de propriété) et les parenthèses (liaison d'événement).

### Documentation
- Guide : [La liaison d'événement](https://angular.io/guide/template-syntax#event-binding-event).
- Guide : [Les événements utilisateur](https://angular.io/guide/user-input).


## Partie 1
Créez une propriété numérique dans la classe du composant avec une valeur initiale de 0, ainsi qu'une méthode qui incrémente cette valeur de 1.


## Partie 2
Dans le template :
- affichez la valeur numérique dans un paragraphe,
- ajoutez un bouton qui exécute la méthode d'incrémentation à chaque clic.


## Partie 3
Modifiez la méthode pour faire en sorte que si l'incrémentation du nombre atteint 10, une décrémentation se produise et que si la décrémentation atteint 0 une incrémentation se produise (vous allez devoir créer un propriété qui vous indique si vous devez incrémenter/décrémenter).


## Partie 4
Faites en sorte que le texte du bouton affiche le mot "incrémentation" lorsque l'incrémentation se produit mais le mot "décrémentation" lorsque la décrémentation se produit. Pour cela remplacez le texte du bouton par une expression qui utilise une propriété de la classe que la méthode modifiera selon le cas de figure.
