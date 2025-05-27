# 📘 Pokédex Angular

Un projet Pokédex développé avec **Angular 18** pour explorer et apprendre les principales fonctionnalités d'Angular. L'application permet de naviguer parmi les Pokémon, voir leurs détails, et tirer parti d’une architecture moderne basée sur les composants, le routing, les services, etc.

🚀 Déployé sur **Firebase Hosting** : [Voir le Pokédex en ligne](https://ton-url.firebaseapp.com)

## 🔍 Fonctionnalités

- 🔄 Liste des Pokémon avec pagination
- 🔎 Recherche par nom
- 📄 Détail d’un Pokémon avec ses stats, types, images, etc.
- 🌙 Mode sombre (si applicable)
- 🧭 Navigation fluide grâce au **Router Angular**
- 📦 Appels API via **HttpClient** (PokéAPI)
- 🔥 Déploiement via **Firebase Hosting**

## 🛠️ Technologies utilisées

- [Angular 18](https://angular.io)
- [TypeScript](https://www.typescriptlang.org/)
- [RxJS](https://rxjs.dev/)
- [PokéAPI](https://pokeapi.co/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

## 📦 Installation et développement local

### 1. Cloner le dépôt

```bash
git clone https://github.com/ton-utilisateur/mon-pokedex-angular.git
cd mon-pokedex-angular
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le serveur de développement

```bash
ng serve
```

Accède ensuite à l'application sur `http://localhost:4200`.

## 🚀 Déploiement sur Firebase

### Étapes de déploiement

1. Installer Firebase CLI (si ce n’est pas déjà fait) :
   ```bash
   npm install -g firebase-tools
   ```

2. Se connecter à Firebase :
   ```bash
   firebase login
   ```

3. Initialiser Firebase dans le projet :
   ```bash
   firebase init
   ```

   > Choisir **Hosting**, associer à un projet existant ou en créer un, et configurer `dist/pokedex` comme dossier public (à adapter selon le nom du projet Angular).

4. Construire le projet Angular :
   ```bash
   ng build --prod
   ```

5. Déployer :
   ```bash
   firebase deploy
   ```

## 🧪 Améliorations possibles

- ✅ Ajout d’un système de favoris
- ✅ Filtrage par type de Pokémon
- ✅ Internationalisation (i18n)
- ✅ Tests unitaires et d’intégration
- ✅ Progressive Web App (PWA)

## 📸 Captures d'écran

> *(Ajoute ici quelques screenshots de ton application si tu veux)*


## 📄 Licence

Ce projet est open-source et disponible sous la licence [MIT](LICENSE).

---

Développé avec ❤️ pour apprendre Angular.

