# Guide de Déploiement - Alternatives à Vercel

Ce guide vous explique comment déployer votre application React/Vite sur différentes plateformes.

## 🚀 Options de Déploiement

### 1. **Netlify** (Recommandé - Gratuit)

#### Déploiement via l'interface web :
1. Allez sur [netlify.com](https://www.netlify.com)
2. Connectez votre compte GitHub
3. Cliquez sur "New site from Git"
4. Sélectionnez votre dépôt `Africa-Petroleum`
5. Configuration automatique :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
6. Cliquez sur "Deploy site"

#### Déploiement via CLI :
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

✅ **Avantages** : Gratuit, déploiement automatique, HTTPS, CDN global

---

### 2. **Cloudflare Pages** (Gratuit - Illimité)

1. Allez sur [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connectez votre compte GitHub
3. Sélectionnez votre dépôt `Africa-Petroleum`
4. Configuration :
   - **Framework preset** : Vite
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
5. Cliquez sur "Save and Deploy"

✅ **Avantages** : Gratuit illimité, très rapide, CDN global

---

### 3. **GitHub Pages** (Gratuit)

#### Configuration :
1. Installez le package `gh-pages` :
```bash
npm install --save-dev gh-pages
```

2. Ajoutez dans `package.json` :
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Déployez :
```bash
npm run deploy
```

4. Activez GitHub Pages dans les paramètres du dépôt :
   - Settings → Pages
   - Source : `gh-pages` branch
   - Save

✅ **Avantages** : Gratuit, intégré à GitHub

---

### 4. **Render** (Gratuit)

1. Allez sur [render.com](https://render.com)
2. Créez un compte et connectez GitHub
3. Cliquez sur "New Static Site"
4. Sélectionnez votre dépôt
5. Configuration :
   - **Build Command** : `npm run build`
   - **Publish Directory** : `dist`
6. Cliquez sur "Create Static Site"

✅ **Avantages** : Gratuit, simple, déploiement automatique

---

### 5. **Surge.sh** (Gratuit - Simple)

```bash
npm install -g surge
npm run build
cd dist
surge
```

✅ **Avantages** : Gratuit, très simple, déploiement instantané

---

### 6. **Firebase Hosting** (Gratuit)

1. Installez Firebase CLI :
```bash
npm install -g firebase-tools
firebase login
```

2. Initialisez Firebase :
```bash
firebase init hosting
```

3. Configuration :
   - **Public directory** : `dist`
   - **Single-page app** : `Yes`

4. Déployez :
```bash
npm run build
firebase deploy
```

✅ **Avantages** : Gratuit, intégration avec Firebase

---

## 📝 Fichiers de Configuration

Les fichiers suivants ont été créés pour faciliter le déploiement :

- `netlify.toml` : Configuration pour Netlify
- `_redirects` : Redirections pour les routes SPA

## 🔧 Commandes Utiles

```bash
# Build de production
npm run build

# Prévisualiser le build localement
npm run preview

# Vérifier le build avant déploiement
npm run build && npm run preview
```

## 🌐 URLs de Déploiement

Après déploiement, votre application sera accessible via :
- **Netlify** : `https://votre-site.netlify.app`
- **Cloudflare Pages** : `https://votre-site.pages.dev`
- **GitHub Pages** : `https://reborn-spaceline.github.io/Africa-Petroleum`
- **Render** : `https://votre-site.onrender.com`

---

## 💡 Recommandation

Pour votre projet, je recommande **Netlify** ou **Cloudflare Pages** car :
- ✅ Gratuits
- ✅ Faciles à configurer
- ✅ Déploiement automatique depuis GitHub
- ✅ Performances excellentes
- ✅ HTTPS automatique

