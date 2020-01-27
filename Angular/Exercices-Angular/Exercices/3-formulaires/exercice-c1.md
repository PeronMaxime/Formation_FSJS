# Angular : les formulaires - Exercice C1 - `NgModel` et `ngSubmit`


## Préparation
Créez un nouveau composant nommé "exercice-c1" dans le dossier `src/app/exercices/3-formulaires/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).


## Introduction
La directive `NgModel` fait partie de la gestion des formulaires dans Angular, pour l'utiliser nous devons importer le module `FormsModule` dans notre application.

Dans le module principal (défini dans le fichier `src/app/app.module.ts`) ajoutez le module `FormsModule` à la liste des imports.

Une fois le mmodule `FormsModule` importé dans l'application, la directive `NgForm` est automatiquement active sur tous les formulaires. Cette directive a pour effet de bloquer le fonctionnement normal des formulaires : en effet ils ne seront pas soumis à l'adresse indiquée dans l'attribut `action`, et la page ne sera pas rechargée. Cela nous donne l'opportunité de traiter le formulaire entièrement en JavaScript.

L'événement `ngSubmit` permet d'associer une expression Angular à l'événement `submit` des formulaires. Les actions utilisateurs qui ont pour conséquence de soumettre le formulaire (clic sur un bouton de type `submit`, ou appui sur la touche entrée dans un champ) exécuterons l'expression (qui peut être une méthode de la classe).

### Exemple : L'expression ci-dessous assigne une valeur à la propriété `resultat` quand l'événement JavaScript `submit` sera émis.

``` html
<form (ngSubmit)="resultat = texte">
```

### Exemple : La méthode `traiterLeFormulaire()` du composant sera invoquée quand l'événement JavaScript `submit` sera émis.

``` html
<form (ngSubmit)="traiterLeFormulaire()">
```

### Documentation
- [Description de `NgForm`](https://angular.io/api/forms/NgForm#description).
- Guide : [La liaison de propriété](https://angular.io/guide/template-syntax#property-binding).
- Guide : [La directive `ngModel`](https://angular.io/guide/template-syntax#ngModel).
- Guide : [La liaison de données dans les 2 sens](https://angular.io/guide/template-syntax#two-way-binding-).
- Guide : [La liaison de données dans les 2 sens dans les formulaires](https://angular.io/guide/forms#two-way-data-binding-with-ngmodel).
- Guide : [`ngsubmit`](https://angular.io/guide/forms#submit-the-form-with-ngsubmit).


## Partie 1
- Dans la classe créez une propriété `adresseDeLImage` de type texte avec comme valeur une chaîne vide.
- Créez une seconde propriété `saisieUtilisateur` de type texte avec comme valeur une chaîne vide.


## Partie 2
Créez un formulaire contenant un champ de saisie texte et un bouton contenant le texte "afficher". Avec `NgModel`, associez le contenu du champ de saisie à la propriété `saisieUtilisateur`.

Via l'interpolation, affichez la valeur de `saisieUtilisateur` sous le chammp.

## Partie 3
Créez une balise image dont la propriété `src` est associée à la propriété `adresseDeLImage` de la classe du composant.

Utilisez `ngSubmit` pour assigner à la propriété `adresseDeLImage` la valeur de `saisieUtilisateur`.
