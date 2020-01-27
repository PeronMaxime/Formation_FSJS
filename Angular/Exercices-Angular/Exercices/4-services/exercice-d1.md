# Angular : Les services - Exercice D1 - Premier service


## Préparation
Créez un nouveau composant nommé "exercice-d1" dans le dossier `src/app/exercices/4-services/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).


## Introduction

### Les services
Les services sont des classes qui offrent des fonctionnalités bien définies et qui peuvent être injectées dans des composants ou d'autres services.

Angular sépare les composants des services pour accroître la modularité et la ré-utilisabilité. La classe d'un composant est dédiée à la gestion de la vue et délègue aux service la gestion de l'accès aux données (via un serveur tiers par exemple) et leur validation.

Le rôle du composant doit être de gérer l'expérience utilisateur. Les propriétés et méthodes de sa classe doivent concerner la liaison de données avec le template et faire l'intermédiaire avec la logique de l'application, située dans des services.

Les services effectuent des tâches comme la requête de données auprès d'autres serveurs, la validation de la saisie utilisateur, la gestion des erreurs et le reporting. En écrivant ces fonctionnalités dans des classes de services, on les rend accessibles à tous les composants et on limite la responsabilité des composants.

L'injection de dépendances permet également de fournir différentes version d'un service en fonction du contexte, par exemple un service simulant certains comportements à des fins de test, sans accéder à la ressource réelle.

### L'injection de dépendances

L'injection de dépendances est un motif de conception (_design pattern_) fondamental dans Angular. Angular dispose de son propre framework d'injection de dépendances.

Une dépendance est un service ou un objet dont une autre classe a besoin pour fonctionner. L'injection de dépendances est un motif de conception dans lequel les classes reçoivent les dépendances dont elles ont besoin, plutôt que de les créer elles-mêmes. Les classes qui consomment ces dépendances n'ont donc pas à connaître leurs modalités d'instanciation.

Dans Angular, le framework d'injection de dépendances fournit les dépendances déclarées par une classe ou un composant au moment de son instanciation via le constructeur.

### Création d'un service

Un service est une simple classe, généralement affublée du décorateur `@Injectable` (pour recevoir elle-même des dépendances injectées).

Lorsque le décorateur `@Injectable` spécifie `providedIn: 'root'` le sercice sera injecté dans le module principal et disponible dans toute l'application.
```typescript
@Injectable({
  providedIn: 'root',
})
```

Si `providedIn` n'est pas spécifié, le service devra être "fourni" explicitement dans un module, dans le tableau `providers`.


Les classes de services sont instanciées une seule fois par injecteur, elles fournissent un "singleton", c'est-à-dire la même instance unique partout où elle est injectée.

#### Générer un service avec le CLI
``` bash
ng generate service mon-dossier/mon-service
```

### Utilisation d'un service

Une fois créé, le service peut être injecté dans un composant ou dans un autre service.

 Il suffit d'affecter un type de classe à un argument passé au constructeur pour qu'Angular comprenne qu'il s'agit d'une instance gérée par l'injection de dépendances.

``` typescript
import { Component} from '@angular/core';

// Services
import { TodoService } from 'src/app/todo/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  tasks: string[]; // Une propriété de notre composant qui pourra être utilisée dans le template.

  constructor(
    /**
     * Le service est injecté dans le constructeur car c'est Angular qui se charge d'instancier les classes.
     * Angular assignera à la propriété "todoService" (propriété de notre classe "TodoListComponent")
     * la valeur du singleton (instance unique) créé à partir de la classe "TodoService".
     * Notez la différence de syntaxe entre le nom de la propriété (qui commence par une minuscule)
     * et le nom de la classe (qui commence par une majuscule par convention).
     */
    private todoService: TodoService,
  ) {
    this.tasks = this.todoService.getTasks(); // On appelle ici une méthode du service injecté.
  }
}
```

### Documentation
- Guide : [Singleton services](https://angular.io/guide/singleton-services)
- Guide : [Introduction aux services et à l'injection de dependances](https://angular.io/guide/architecture-services)
- Guide : [L'injection de dépendances dans Angular](https://angular.io/guide/dependency-injection)
- Guide : [Providers](https://angular.io/guide/providers)
- Guide : [Services and dependency injection](https://angular.io/guide/architecture#services-and-dependency-injection)
- Guide : [Les injecteurs hiérarchiques](https://angular.io/guide/hierarchical-dependency-injection)


## Partie 1
À l'aide du CLI Angular créez un service "compteur" qui contiendra une propriété privée numérique nommée `compteur` et 2 méthodes :
- une méthode publique `incrementer` qui permet d'incrémenter la propriété privée,
- une méthode publique `getCompteur` qui retourne la valeur de la propriété privée.


## Partie 2
Injectez le service créé dans votre composant "exercice-d1".

Dans le composant, créer une propriété `compteur` qui recevra la valeur du compteur du service quand le composant est instancié. Affichez cette valeur dans le template.

Créez également un bouton avec une action au clic, qui appelle la méthode `incrementer()` du service.
