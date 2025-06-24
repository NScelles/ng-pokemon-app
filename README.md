
# 🧬 ng‑pokemon‑app

ng‑pokemon‑app est une **application web Angular** servant de Pokédex personnel. Elle permet de gérer votre collection de Pokémon avec une interface moderne et une authentification Firebase.

---

## 🎯 Fonctionnalités principales

- **Liste des Pokémon** avec noms et images.
- **Fiche détaillée** : types, taille, poids, statistiques, etc.
- **Création / édition** de Pokémon.
- **Suppression** de Pokémon.
- **Recherche dynamique** par nom.
- **Authentification** (Firebase Auth) : seuls les utilisateurs inscrits peuvent gérer la collection.
- **Déploiement prête à l’emploi** sur Firebase Hosting.

---

## 🧱 Architecture & mise en place du projet

Voici les étapes et outils utilisés pour bâtir ce projet Pokédex Angular :

### 📁 1. Création du projet Angular

- Projet initialisé avec la CLI Angular :

  ```bash
  ng new ng-pokemon-app
  ```

- Structure typique Angular générée :
  - `src/app`: logique métier
  - `src/assets`: images des Pokémon
  - `environments`: variables d’environnement

### 🧩 2. Modélisation des données

- Un modèle TypeScript `Pokemon` a été défini dans `pokemon.ts` pour représenter chaque Pokémon avec ses attributs (id, nom, type, hp, cp, etc.).
- Utilisation de **types énumérés** pour les types de Pokémon, facilitant la validation.

### 🔗 3. Services Angular (PokemonService)

- Un service central (`pokemon.service.ts`) encapsule toutes les opérations métier :
  - Accès aux données (mock ou Firebase)
  - Recherches, création, édition, suppression
- Utilisation de `Observable<Pokemon[]>` avec **RxJS** pour rester réactif.

### 🧭 4. Routage Angular

- Mise en place du **Router Angular** pour naviguer entre les vues :
  - `/pokemons`, `/pokemon/:id`, `/edit/:id`, etc.
- Activation des **routes enfants** (child routes) et de **guards** (authentification à venir ou déjà prévue).

### 💄 5. Composants Angular

- Création manuelle des composants :
  - `pokemon-list`, `pokemon-detail`, `pokemon-form`, `page-not-found`, etc.
- Utilisation des `@Input()` / `@Output()` pour la communication inter-composants.

### 🎨 6. Styling et UI

- Feuilles CSS propres à chaque composant (`component.css`)
- Icônes et sprites statiques dans `assets/`
- Responsive minimal via Flexbox

### 🔒 7. Intégration Firebase

- Ajout du SDK Firebase via `npm install firebase @angular/fire`
- Utilisation de :
  - **Firestore** (ou Realtime DB) pour stocker les Pokémon
  - **Firebase Auth** pour l’authentification des utilisateurs
  - **Firebase Hosting** pour le déploiement
- Clés stockées dans `environment.ts`

### 🚀 8. Déploiement continu

- Déploiement par la commande Firebase CLI :

  ```bash
  firebase deploy
  ```

- Configuration du `firebase.json` pour router les URL Angular

---

## 🔧 Technologies

- **Angular** (v15.x)
- **TypeScript**, CSS, HTML
- **Firebase** : Authentication + Firestore (ou Realtime Database) + Hosting
- **RxJS**, Angular CLI

---

## 🛠️ Installation & démarrage

1. Cloner le repo :

   ```bash
   git clone https://github.com/NScelles/ng-pokemon-app.git
   cd ng-pokemon-app
   ```

2. Installer les dépendances :

   ```bash
   npm install
   ```

3. (Facultatif) installer les outils CLI globalement :

   ```bash
   npm install -g @angular/cli firebase-tools
   ```

4. Lancer un serveur de développement :

   ```bash
   ng serve
   ```

5. Accéder à l’application :  
   [http://localhost:4200](http://localhost:4200)

---

## ⚙️ Configuration Firebase

1. Créez un projet sur [console.firebase.google.com](https://console.firebase.google.com).
2. Dans le répertoire du projet, connectez-vous :

   ```bash
   firebase login
   firebase init
   ```

3. Sélectionnez **Hosting**, puis liez à votre projet.
4. Configurez les clés Firebase dans `src/environments/environment.ts` :

   ```ts
   export const environment = {
     production: false,
     firebase: {
       apiKey: '…',
       authDomain: '…',
       projectId: '…',
       storageBucket: '…',
       messagingSenderId: '…',
       appId: '…'
     }
   };
   ```

---

## 🚀 Déploiement

Une fois prêt·e à mettre en ligne :

```bash
ng build --prod
firebase deploy
```

Le site sera accessible via l’URL fournie par Firebase, par exemple `https://votre-projet.web.app`.

---

## 📚 Ressources & inspirations

- Ce projet a été réalisé à la suite d'un tutoriel en ligne “Pokédex Angular” pour apprendre Angular CLI
- Démo en ligne : `https://ng-pokemon-app-98632.web.app/`

---

## 📝 Licence

Sous licence **MIT** — consulte le fichier `LICENSE` pour les détails.

---

## 🧍 Auteurs

- **NScelles**

---
