# Angular : Les modules - Exercice F1 - Modularisation


## Introduction
Nous utilisons déjà un module dans notre application : le module principal `AppModule`, définit dans `src/app/app.module.ts`.

### Le décorateur `@NgModule`

Un module Angular est une classe affublée du décorateur `@NgModule` et qui ne contient généralement aucun code.

``` typescript
@NgModule({
  declarations: [...], // Liste des composants, directives, et filtres ("pipes") appartenant à ce module.
  imports: [...], // Liste de modules à importer dans ce module. Tout ce qui vient d'un module importé ici est disponible pour les déclarations de ce module.
  exports: [...], // Liste des composants, directives, et filtres ("pipes") visibles pour les modules qui importent ce module.
  providers: [...], // Liste de frounisseurs d'injection de dépendances ("providers") visibles à la fois aux contenus de ce module et à ceux qui importent ce module.
  entryComponents: [...], // Liste de composants qui ne sont pas référencés dans des templates, tels que des composants créés dynamiquement en code.
  bootstrap: [...] // Liste de composants à démarrer quand ce module est démarré.
})
class MyModule {}
```

Toute application Angular démarre dans un module, dit "module principal", mais une application Angular sera généralement composée de nombreux modules.

Les modules permettent de regrouper des services et composant par fonctionnalité, afin d'organiser le projet, mais aussi afin de limiter le code à charger initialement lorsqu'on utilise le _lazy-loading_.

On crée couramment un ou plusieurs modules chargés de regrouper des fonctionnalités (pipes, composants, services) qui seront exploitées par d'autres modules.

Il est courant par exemple de créer un module par "page" de l'application, ce module regroupant tous les composants et services propres à cette page, et référençant également des modules partagés.

### Documentation
- Guide : [NgModules](https://angular.io/guide/ngmodules)
- Guide : [Feature Modules](https://angular.io/guide/feature-modules)
- Guide : [Lazy Loading Feature Modules](https://angular.io/guide/lazy-loading-ngmodules)


## Partie 1
Créez un nouveau module nommé "exercice" avec le CLI.

Dans ce module, déclarez tous les composants des exercices précédemment créés et exportez-les.

Importez ce module dans votre module principal. N'oubliez pas de supprimer les exercices des déclarations du module principal (un composant ne peut être déclaré qu'une seule fois par application !)
