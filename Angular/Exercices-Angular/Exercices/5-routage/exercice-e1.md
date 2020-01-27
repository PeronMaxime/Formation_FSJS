# Angular : Le routage - Exercice E1


## Introduction

Le routage dans Angular est un routage côté client. Il ne s'agit en aucun cas de faire appel au serveur car nous sommes dans le contexte d'une SPA.

Le principe du routage consiste tout simplement à faire correspondre une URL à un composant de l'application. Par exemple je souhaite que l'adresse `https://example.com/user/profile` affiche mon composant "profile" qui affiche les détails de mon compte utillsateur.

Pour pouvoir utiliser le routage dans Angular il faut importer le module `RouterModule`, soit dans le module principal soit dans un module dédié au routage.

Lorsqu'on crée un projet avec le CLI en intégrant le routage, cette configuration est déjà faite et un module dédié au routage (`AppRoutingModule`) est créé.

### Définir des routes

Un objet de définition de route typique est constitué de 2 propriétés :
- `path` qui est un texte correspondant au chemin,
- `component` qui le nom d'une classe de composant.

``` typescript
const routes: Routes = [
  {
    path: 'exercices/1-expressions/exercice2',
    component: Exercice2Component,
  }
]
```

La liste des routes est passée via la méthode `forRoot` de `RouterModule` dans les imports de notre module de routage.

``` typescript
@NgModule({
  imports: [
    RouterModule.forRoot(routes) // tableau de routes.
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### Chargement des composants routés

Maintenant que nous avons défini une route, nous devons définir l'endroit ou charger le composant correspondant dans notre application.

Angular propose le composant `<router-outlet>` qui sera le point d'injection du composant correspondant au chemin actif.

À chaque changement d'URL, le nouveau composant sera chargé dans `<router-outlet>` à la place du précédent.

### Documentation
- Guide : [Routage & Navigation](https://angular.io/guide/router)


## Partie 1
Mettez en place un routage pour tous les exercices créés précédemment.


## Partie 2
Créez un composant "menu" qui rassemble tous les liens vers les différents exercices et affichez-le au-dessus de `<router-outlet>` dans `app.component.html`.
