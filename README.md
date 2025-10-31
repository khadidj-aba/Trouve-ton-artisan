# 🧰 Trouve ton artisan

Application web régionale permettant aux particuliers de **l’Auvergne-Rhône-Alpes** de trouver facilement un artisan de confiance (plombier, électricien, maçon, boulanger, etc.), de consulter sa fiche détaillée et de le contacter directement via un formulaire intégré.

Ce projet s’inscrit dans le cadre de ma formation en **conception et développement web**, et vise à valider mes compétences sur un environnement **full-stack React / Node / MySQL**.

---

## 👩‍💻 Auteur

- **Nom :** Khadidja Abakar  
- **GitHub :** [khadidj-aba](https://github.com/khadidj-aba)  
- **Région :** Île-de-France  
- **Formation :** Concepteur & Développeur Web  
- **Année :** 2025  

---

## 🎨 Conception du projet

Avant de passer au développement, **j’ai moi-même conçu toute la maquette sur Figma**.  
➡️ [Voir la maquette Figma ici](https://www.figma.com/proto/EsxRCxA18Av22J1LZNGlIG/Untitled?node-id=42-455&p=f&t=0dAhlKprndNWSseP-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=42%3A455&show-proto-sidebar=1)  
Cette étape a permis de définir :

- L’**identité visuelle** du site (*charte couleur, typographies, boutons, icônes*),  
- La **structure des pages** (Accueil, Services, Artisan, Contact…),  
- La **hiérarchie des informations** pour une navigation claire,  
- Et la **cohérence responsive** entre mobile, tablette et desktop.  

La maquette Figma a ensuite servi de **référence directe** pour coder le frontend React.  
---

## 🎯 Objectifs pédagogiques

Ce projet m’a permis de :

- Créer une **application web complète (frontend + backend + base de données)**  
- Utiliser **React** pour le front et **Express / MySQL** pour le back  
- Respecter les bonnes pratiques d’**accessibilité**, de **responsive design** et de **structuration sémantique**  
- Gérer les **routes dynamiques**, les **pages 404** et les **états de chargement**  
- Documenter le projet de manière professionnelle avec ce **README**

---

## 🧱 Stack technique

| Partie | Technologie |
|--------|--------------|
| Frontend | React (Vite) |
| Backend | Node.js + Express |
| Base de données | MySQL |
| Librairies principales | `mysql2/promise`, `cors`, `dotenv`, `react-router-dom`, `react-helmet-async` |
| Outils | VSCode, MySQL Workbench, Figma, GitHub |

---

## 🚀 Installation et lancement du projet

### 1️⃣ Cloner le dépôt

```bash
git clone https://github.com/khadidj-aba/trouve-ton-artisan.git
cd trouve-ton-artisan


## 🗂 Arborescence du projet

trouve-ton-artisan/
│
├── backend/                        # Serveur Node.js + Express
│   ├── server.js                   # Point d'entrée du backend
│   ├── routes/                     # Routes API (artisans, messages)
│   ├── controllers/                # Logique métier pour chaque ressource
│   ├── models/                     # Connexion et requêtes MySQL
│   ├── .env.example                # Exemple des variables d'environnement
│   └── package.json
│
├── frontend/                       # Application React (Vite)
│   ├── src/
│   │   ├── pages/                  # Toutes les pages React
│   │   │   ├── Home.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Batiment.jsx
│   │   │   ├── Fabrication.jsx     # Page en construction
│   │   │   ├── Alimentation.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── ArtisanFiche.jsx    # Page fiche artisan + formulaire
│   │   │   ├── Confirmation.jsx
│   │   │   ├── NotFound.jsx        # Page 404
│   │   │   └── Construction.jsx    # Message "page en construction"
│   │   ├── components/             # Éléments réutilisables (Header, Footer, etc.)
│   │   ├── styles/                 # Feuilles de style CSS
│   │   │   ├── base.css
│   │   │   ├── home.css
│   │   │   ├── artisans.css
│   │   │   └── services.css
│   │   └── App.jsx                 # Structure principale du site (Router, Layout)
│   ├── vite.config.js
│   └── package.json
│
├── README.md                       # Documentation complète du projet
└── .gitignore                      # Fichiers à ignorer dans Git


## 🧩 Base de données

La base de données **MySQL** permet de stocker les artisans et les messages du formulaire de contact.

- Nom de la base : `trouve_ton_artisan`
- Tables :  
  - `artisans` : contient les informations des artisans (nom, ville, métier, note, contact).  
  - `messages` : stocke les demandes envoyées via le formulaire de contact.  

Les scripts SQL sont fournis dans le dossier `/database` :
- `create_database.sql` : création des tables
- `seed.sql` : insertion d’exemples d’artisans
