# Guide des Images - Africa Petroleum

Ce document liste toutes les images utilisées dans l'application et comment les ajouter localement.

## Structure des dossiers

Les images doivent être placées dans les dossiers suivants :
- `public/images/` - Images publiques accessibles directement (pour les URLs absolues)
- `src/assets/images/` - Images importées dans les composants React

## Images à ajouter

### 1. Hero Section (`src/styles/Hero.css`)
- **Fichier**: `public/images/hero-background.jpg` ou `src/assets/images/hero-background.jpg`
- **Usage**: Image de fond de la section Hero
- **URL actuelle**: `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80`
- **Dimensions recommandées**: 1920x1080px minimum

### 2. Services (`src/components/Services.tsx`)
- **Vente de Carburants**: `src/assets/images/services/carburants.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1609940330034-37c18f547f0e?w=800`
- **Lavage Auto**: `src/assets/images/services/lavage.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1611876094264-3fdbb105ff88?w=800`
- **Vidange Express**: `src/assets/images/services/vidange.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1581093588401-9dcdb18dc33d?w=800`
- **Boutique Station**: `src/assets/images/services/boutique.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1592928302452-c2a94ad3392d?w=800`
- **Gonflage Pneus**: `src/assets/images/services/gonflage.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1611599536427-bdb3e6aede71?w=800`
- **Service Express**: `src/assets/images/services/express.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1620407932223-79fa4d78ec09?w=800`

### 3. Boutique (`src/components/Boutique.tsx`)
- **Huiles Moteur**: `src/assets/images/boutique/huiles.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800`
- **Accessoires Auto**: `src/assets/images/boutique/accessoires.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800`
- **Outils et Pièces**: `src/assets/images/boutique/outils.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800`
- **Snacks et Boissons**: `src/assets/images/boutique/snacks.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800`
- **Articles Cadeaux**: `src/assets/images/boutique/cadeaux.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800`
- **Produits Nettoyants**: `src/assets/images/boutique/nettoyants.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800`

### 4. Restaurant (`src/components/Restaurant.tsx`)
- **Poulet DG**: `src/assets/images/restaurant/poulet-dg.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800`
- **Ndolè**: `src/assets/images/restaurant/ndole.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800`
- **Sanga**: `src/assets/images/restaurant/sanga.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1558030006-450675393462?w=800`
- **Jus de Bissap**: `src/assets/images/restaurant/bissap.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1546173159-315724a31696?w=800`
- **Café Camerounais**: `src/assets/images/restaurant/cafe.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800`
- **Beignets Camerounais**: `src/assets/images/restaurant/beignets.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800`

### 5. Actualités (`src/components/News.tsx`)
- **Expansion des Stations**: `src/assets/images/news/expansion.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800`
- **Nouveau Programme de Fidélité**: `src/assets/images/news/fidelite.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800`
- **Initiatives Environnementales**: `src/assets/images/news/environnement.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800`
- **Amélioration des Services**: `src/assets/images/news/services.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800`

### 6. À Propos (`src/components/About.tsx`)
- **Image principale**: `src/assets/images/about/station.jpg`
  - URL actuelle: `https://images.pexels.com/photos/34636185/pexels-photo-34636185.jpeg?auto=compress&cs=tinysrgb&w=1080`

### 7. Piscine (`src/components/Piscine.tsx`)
- **Image principale**: `src/assets/images/piscine/piscine.jpg`
  - URL actuelle: `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800`

## Comment ajouter les images

1. Téléchargez ou créez les images nécessaires
2. Placez-les dans les dossiers appropriés selon la structure ci-dessus
3. Les images seront automatiquement chargées une fois que vous aurez mis à jour les imports dans les composants

## Note importante

Les images externes (Unsplash, Pexels) peuvent ne pas se charger si :
- Il n'y a pas de connexion Internet
- Les URLs changent ou expirent
- Il y a des restrictions de CORS

Il est recommandé de télécharger toutes les images et de les ajouter localement pour garantir leur disponibilité.



