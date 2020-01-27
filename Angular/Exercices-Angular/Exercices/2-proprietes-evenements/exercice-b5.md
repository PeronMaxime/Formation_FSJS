# Angular : les liaisons - Exercice B5 - les références de template


## Préparation
Créez un nouveau composant nommé "exercice-b5" dans le dossier `src/app/exercices/2-proprietes-evenements/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).


## Introduction
Avec les références de template on obtient une référence à l'élément HTML qui porte la référence, on peut donc accéder à toutes les propriétés de cet élément HTML.

``` html
<input type="text" name="nom" #inputElementRef>
{{ inputElementRef.name }} <!-- Affichera "nom" qui est la valeur de l'attribut (propriété DOM) "name" -->
```

Note: Le nom de la référence utilisée dans le template doit être unique poour ne pas entrer en conflit avec d'autres références de template.

Nous verrons dans d'autres exercices que les références de template peuvent aussi pointer vers des directives qui fournissent un contenu différent de l'élément HTML.


### Documentation
- Guide : ([les références de template (_`template reference variable`_)](https://angular.io/guide/template-syntax#template-reference-variables-var))
- https://angular.io/guide/template-syntax#ref-vars


## Partie 1
Créez un élément `<h3>` qui contient du texte et qui a un attribut `title` contenant également une valeur texte.

Donnez une référence de template à cet élément `<h3>` et affichez dans 2 paragraphes séparés, en utilisant les propriétés DOM appropriées :
- le contenu texte du `<h3>`
- le contenu de l'attribut `title` du `<h3>`
