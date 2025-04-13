# Site Web Marbo Finance

Ce dépôt contient le code source du site web officiel de Marbo Finance, basé sur [Docusaurus 3](https://docusaurus.io/).

## À propos de Marbo Finance

Marbo Finance est un cabinet de gestion de patrimoine indépendant nouvelle génération situé en Île-de-France. Notre mission est d'allier expertise juridique/financière et approche digitale moderne pour offrir à nos clients un service de gestion patrimoniale transparent et personnalisé.

## Technologies utilisées

- **Docusaurus 3** - Framework React pour sites statiques
- **React** - Bibliothèque JavaScript pour l'interface utilisateur
- **Markdown/MDX** - Format de rédaction pour le contenu
- **AWS S3** - Hébergement du site statique
- **AWS Lambda** - Gestion des formulaires et emails

## Déploiement

Le site est déployé sur AWS S3 avec une fonction Lambda pour gérer les envois d'emails.

## Structure du contenu

Le site est organisé selon les axes stratégiques de Marbo Finance :
- Expertise patrimoniale
- Solutions financières
- Blog et actualités

## Développement local

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm start

# Construction du site statique
npm run build
```
