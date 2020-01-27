# Angular : les liaisons - Exercice B1 - la liaison de propriété (_property binding_)


## Préparation
Créez un nouveau composant nommé "exercice-b1" dans le dossier `src/app/exercices/2-proprietes-evenements/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).


## Introduction

En HTML on peut définir les propriétés de certains éléments en utilisant des attributs, comme l'attribut `src` pour la balise `img`. Cet attribut permet de spécifier l'adresse de l'image à afficher. Mais la valeur de l'attribut est statique et ne peut être constituée que d'une chaîne de caractères.

Angular permet de lier une propriété (par exemple `src`) d'un élément (par exemple `img`) à une propriété de la classe du composant. Si la valeur de la propriété change dans la classe, la nouvelle valeur sera automatiquement reflétée dans la vue.

De plus la valeur d'une propriété liée peut être de n'importe quel type, y compris des tableaux ou des objets.

### Note : différence entre attribut et propriété
Un **attribut** est une partie de la balise écrite, en texte, dans le code source qui sert à générer le DOM. Une **propriété** d'un élément est une caractéristique générée par le DOM et manipulable en JavaScript. En général, les attributs sont un moyen pour fournir les valeurs au éléments du DOM. L'attribut `src` en texte dans le code source fournit la valeur (URL) associée à la propriété du même nom pour le noeud DOM de type `Image` créé par le navigateur.

Angular exploite cette syntaxe familiaire, celle des attributs, pour créer un mécanisme plus puissant et plus flexible.

### Exemple
Lorsqu'on veut affecter la valeur d'une propriété d'élément à partir d'une propriété du composant on utilise la syntaxe `[]`, par exemple pour la propriété `src` d'une image on écrira :

``` html
<img [src]="monImage" alt="">
```

**Attention :** dans ce cas la propriété `monImage` contient soit une chaîne de caractères (qui pourra être utilisée directement), soit une expression qui devra être évaluée pour obtenir une chaîne de caractères valide pour ce type de propriété.

Lorsqu'Angular rencontre un propriété liée avec la syntaxe `[]` dans le template, il évalue cette valeur et utilise la valeur produite qui doit être une valeur valide pour la propriété de l'élément considéré. Dans le cas de la propriété `src` d'une image, il doit s'agir d'une chaîne de caractère.

### Documentation
- Guide : [La liaison de propriété](https://angular.io/guide/template-syntax#property-binding).


## Partie 1
Trouvez sur Internet une image de chien et utilisez son URL comme valeur d'une propriété `chien` dans votre composant.

Dans le template, créez une balise `img` qui utilise la liaison de propriété pour afficher l'image du chien.


## Partie 2
Trouvez sur Internet 3 images de chats et initialisez dans le composant un tableau à 3 éléments, nommé `chats`, qui sont les URLs de ces 3 images.

Dans le template, créez 3 balises `img` qui utilisent la liaison de propriété pour afficher chacune une image de chat issue de votre tableau.


## Partie 3
Améliorez votre template en limitant les répétitions : utilisez la directive `NgFor`.
