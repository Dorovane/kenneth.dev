# kenneth.dev

> Mon coin personnel sur le web — portfolio développeur full-stack, construit avec React, TypeScript et Tailwind CSS.

[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

## ✨ Aperçu

Portfolio personnel développé from scratch en React + TypeScript + Tailwind CSS. Design dark minimaliste, typographie soignée et animations fluides grâce à Framer Motion.

🔗 **Live** : [kennethdev.vercel.app](https://kennethdev.vercel.app)

## 🛠️ Stack

- **Framework** : React 18 + Vite
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Formulaire de contact** : EmailJS
- **Linting** : ESLint
- **Déploiement** : Vercel

## 🗂️ Structure du projet

```
kenneth.dev/
├── img/                    # Images des projets (captures d'écran)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── projects.ts    # Liste des projets affichés
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── moi.jpg
├── coding.jpg
└── ...fichiers de config (Vite, Tailwind, ESLint, TypeScript)
```

## 📑 Sections du site

- **Hero** : présentation animée (effet machine à écrire sur les différents rôles)
- **About** : présentation personnelle et points forts
- **Skills** : compétences techniques
- **Projects** : projets réalisés avec aperçu, technologies utilisées et liens
- **Contact** : formulaire de contact via EmailJS
- **Footer** : liens sociaux (GitHub, LinkedIn, Facebook)

## 🚀 Lancer le projet en local

```bash
# Cloner le repo
git clone https://github.com/Dorovane/kenneth.dev

# Aller dans le dossier
cd kenneth.dev

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera disponible sur `http://localhost:5173`.

### Autres commandes utiles

```bash
npm run build      # Build de production
npm run preview    # Prévisualiser le build de production
npm run lint       # Vérifier le code avec ESLint
npm run typecheck  # Vérifier les types TypeScript
```

## ⚙️ Variables d'environnement

Si le formulaire de contact (EmailJS) est utilisé, créez un fichier `.env` à la racine avec vos clés :

```env
VITE_EMAILJS_SERVICE_ID=ton_service_id
VITE_EMAILJS_TEMPLATE_ID=ton_template_id
VITE_EMAILJS_PUBLIC_KEY=ta_public_key
```

## 📄 Licence

MIT © [Kenneth Tchegninougbo](https://github.com/Dorovane)
