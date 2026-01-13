# Images de Stations Africa Petroleum

Ce dossier contient les images des stations Africa Petroleum à utiliser dans le Hero et autres sections du site.

## Structure recommandée

- `station-douala.jpg` - Image de la station de Douala
- `station-yaounde.jpg` - Image de la station de Yaoundé
- `station-bafoussam.jpg` - Image de la station de Bafoussam
- `station-moderne.jpg` - Image d'une station moderne
- `station-premium.jpg` - Image d'une station premium

## Format recommandé

- **Résolution**: 1920x1080px minimum (format 16:9)
- **Format**: JPG ou WebP
- **Taille**: Optimisée pour le web (< 500KB par image)
- **Qualité**: Haute qualité pour un rendu professionnel

## Utilisation

Pour utiliser des images locales au lieu des URLs Unsplash, modifiez `src/components/Hero.tsx` :

```typescript
import stationDouala from '../assets/images/stations/station-douala.jpg';
import stationYaounde from '../assets/images/stations/station-yaounde.jpg';
// ...

const stationImages = [
  {
    url: stationDouala,
    title: 'Station Douala',
    location: 'Douala, Cameroun'
  },
  // ...
];
```

