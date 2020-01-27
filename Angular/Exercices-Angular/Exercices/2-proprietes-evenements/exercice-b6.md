# Angular : les liaisons - Exercice B6 - `$event`


## Préparation
Créez un nouveau composant nommé "exercice-b6" dans le dossier `src/app/exercices/2-proprietes-evenements/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).


## Introduction
Lorsqu'on crée une liaison d'événement, sur un événement de souris par exemple, on peut récupérer l'événement DOM lui-même en paramètre en utilisant le mot-clé réservé `$event`. Ces événements DOM sont porteurs d'informations utilisables dans le composant.

``` html
<p (click)="gestionDuClic($event)">lorem ipsum</p>
```
Dans le code ci-dessus, la méthode de composant `gestionDuClic()` recevra en argument l'événement DOM de type [`MouseEvent`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent).


### Documentation
- Guide : [Passer un événement avec `$event`](https://angular.io/guide/user-input#get-user-input-from-the-event-object)
- Guide : [`$event` et les déclarations de gestion d'événements](https://angular.io/guide/template-syntax#event-and-event-handling-statements)


## Partie 1
Créez un champ texte exploitant l'événement `keyup` pour exétuer une méthode du composant. Cette méthode doit recevoir en argument l'événement DOM.

Dans la méthode vous devez typer l'argument reçu. Créez une propriété du composant qui recevra la propriété [`keyCode`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) de l'événement reçu. Affichez cette propriété sous le champ dans le template.


## Partie 2
Créez une `<div>` et  donnez-lui une hauteur et une largeur en CSS.

Ajoutez un gestionnaire d'événement `mousemove` sur la `<div>` associée à une méthode `suivre()` que vous devrez créer dans la classe du composant. Au lieu de passer l'événement lui-même en argument, passez directement les propriétés `x` et `y`. Dans Angular [on évitera de passer l'événement lui-même au composant](https://angular.io/guide/user-input#passing-event-is-a-dubious-practice) afin d'éviter de faire porter au composant la responsabilité de connaître l'implémentation réelle du template. Cela facilite les tests unitaires et sécurise le composant pour des usages avec des [Service Workers](https://angular.io/guide/service-worker-intro#angular-service-worker-introduction) par exemple.

Dans le composant créez deux propriétés `x` et `y` qui seront mises à jour par la méthode `suivre()`. Affichez ces deux propriétés dans la `<div>`.
