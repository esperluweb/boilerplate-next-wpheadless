# Boilerplate Next.js avec WordPress Headless

![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?logo=next.js)
![WordPress](https://img.shields.io/badge/WordPress-headless-blue?logo=wordpress)
![Node.js](https://img.shields.io/badge/Node.js-20%2B-green?logo=node.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)

Ce boilerplate permet de créer un site en utilisant **Next.js** avec un backend **WordPress Headless**. Le site affiche une page d'accueil avec tous les posts et une page pour afficher un post individuel. Ce projet utilise React 19, Next.js 15.3.2 et Node.js version 20+.

## Prérequis

Avant de commencer, assure-toi d'avoir les éléments suivants :

- **Node.js** version 20+ (vérifie avec `node -v`)
- **npm** ou **yarn** installé
- **Un site WordPress configuré en mode headless** avec l'API REST activée
  - Le site WordPress doit avoir des permaliens configurés sous la forme `adresseweb.fr/exemple-article`
  - Il faut avoir accès à l'URL de l'API REST (par exemple, `https://tonsite.fr/wp-json/wp/v2`)

## Installation

1. Clone le repository de ce boilerplate :

   ```bash
   git clone <URL-du-repository>
   cd <dossier-du-projet>
   ```

2. Installe les dépendances :

   Si tu utilises **npm** :

   ```bash
   npm install
   ```

   Ou si tu utilises **yarn** :

   ```bash
   yarn install
   ```

3. Crée un fichier `.env` à la racine du projet à partir du fichier `.example_env` fourni. Il contient la variable d'environnement suivante :

   ```env
   NEXT_PUBLIC_WORDPRESS_API=<URL-de-ton-API-WordPress>
   ```

   Remplace `<URL-de-ton-API-WordPress>` par l'URL de l'API REST de ton WordPress headless.

## Structure du Projet

Le projet est organisé de la manière suivante :

```
/src
  /app
    /page.js         - Page d'accueil avec tous les posts
    /[slug]
      /page.js       - Page pour afficher un post individuel
```

- **`/pages/index.js`** : Affiche la liste de tous les posts récupérés depuis l'API WordPress.
- **`/pages/[slug].js`** : Affiche un post individuel en fonction de son "slug" (nom de l'URL).

## Lancer le Projet

Pour lancer le projet en mode développement, utilise la commande suivante :

```bash
npm run dev
```

Ou, si tu utilises **yarn** :

```bash
yarn dev
```

Le site sera accessible à l'adresse suivante : [http://localhost:3000](http://localhost:3000).

## Déploiement

1. Crée une version optimisée du site pour la production :

   ```bash
   npm run build
   ```

2. Lance le serveur de production localement (optionnel) :

   ```bash
   npm start
   ```

## Remarques

- Ce projet utilise la version **Next.js 15.3.2** et **React 19**.
- L'URL de l'API WordPress doit être correctement définie dans la variable `NEXT_PUBLIC_WORDPRESS_API` dans le fichier `.env`.
- Les permaliens de ton WordPress headless doivent être configurés de manière à ressembler à `adresseweb.fr/exemple-article`.

## Contribuer

Les contributions sont les bienvenues ! Si tu souhaites améliorer ce boilerplate, n'hésite pas à ouvrir une **issue** ou une **pull request**.

## Licence

Ce projet est sous licence MIT.
