# Enkomu

Landing page française réalisée avec Next.js App Router, TypeScript et Tailwind CSS.

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvrir `http://localhost:3000`. Pour une compilation de production, lancer `npm run build`
puis `npm start`.

## Déploiement Vercel

Importer le dossier `enkomu` dans Vercel et conserver les commandes Next.js détectées
automatiquement (`npm run build`). Définir `NEXT_PUBLIC_SITE_URL` avec l’URL publique
du site ; Vercel utilise `VERCEL_URL` si cette variable n’est pas renseignée.

## Organisation

- `app/` : layout, métadonnées SEO et styles globaux.
- `components/enkomu/` : composants des sections de la page et typographie locale.
- `public/enkomu/` : visuels fournis avec le mockup.
- `public/hero carousel/` : sept photos utilisées dans le carrousel du hero.
- `public/fonts/` : polices locales Helvetica Now Display disponibles dans l’espace de travail.
