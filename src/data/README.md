# Données JSON - Africa Petroleum

Ce dossier contient les fichiers de données JSON utilisés par l'application.

## 📄 jobs.json

Fichier contenant toutes les offres d'emploi affichées sur la page "Offres d'emploi".

### Structure

```json
{
  "jobs": [
    {
      "id": 1,
      "title": "Titre du poste",
      "location": "Ville",
      "type": "Type de contrat",
      "salary": "Salaire (optionnel)",
      "department": "Département",
      "description": "Description du poste",
      "requirements": [
        "Exigence 1",
        "Exigence 2",
        ...
      ]
    }
  ]
}
```

### Comment mettre à jour les offres

1. Ouvrez le fichier `src/data/jobs.json`
2. Modifiez, ajoutez ou supprimez des offres dans le tableau `jobs`
3. Sauvegardez le fichier
4. L'application se mettra automatiquement à jour (en mode développement avec hot-reload)

### Champs requis

- **id** : Identifiant unique (nombre)
- **title** : Titre du poste (texte)
- **location** : Localisation (texte)
- **type** : Type de contrat (ex: "CDI - Temps plein")
- **salary** : Salaire (optionnel, texte)
- **department** : Département (texte)
- **description** : Description détaillée du poste (texte)
- **requirements** : Tableau des exigences (tableau de chaînes)

### Exemple d'ajout d'une nouvelle offre

```json
{
  "id": 7,
  "title": "Nouveau Poste",
  "location": "Douala",
  "type": "CDI - Temps plein",
  "salary": "À discuter",
  "department": "Vente",
  "description": "Description du nouveau poste...",
  "requirements": [
    "Exigence 1",
    "Exigence 2"
  ]
}
```

### Notes importantes

- Les IDs doivent être uniques
- Le fichier doit rester un JSON valide
- Après modification, vérifiez que le JSON est bien formaté
- En production, un redémarrage peut être nécessaire pour voir les changements

---

## 📄 news.json

Fichier contenant toutes les actualités affichées sur la page "Actualités".

### Structure

```json
{
  "news": [
    {
      "id": 1,
      "title": "Titre de l'actualité",
      "date": "15 Janvier 2025",
      "author": "Auteur",
      "excerpt": "Résumé de l'actualité...",
      "image": "URL de l'image",
      "category": "Catégorie"
    }
  ]
}
```

### Comment mettre à jour les actualités

1. Ouvrez le fichier `src/data/news.json`
2. Modifiez, ajoutez ou supprimez des actualités dans le tableau `news`
3. Sauvegardez le fichier
4. L'application se mettra automatiquement à jour (en mode développement avec hot-reload)

### Champs requis

- **id** : Identifiant unique (nombre)
- **title** : Titre de l'actualité (texte)
- **date** : Date de publication (format: "Jour Mois Année", ex: "15 Janvier 2025")
- **author** : Auteur de l'actualité (texte)
- **excerpt** : Résumé/description de l'actualité (texte)
- **image** : URL de l'image (texte)
- **category** : Catégorie de l'actualité (texte, ex: "Expansion", "Programme", "Environnement", "Service", "Partenariat")

### Exemple d'ajout d'une nouvelle actualité

```json
{
  "id": 7,
  "title": "Nouvelle Actualité",
  "date": "25 Janvier 2025",
  "author": "Service Communication",
  "excerpt": "Description de la nouvelle actualité...",
  "image": "https://images.unsplash.com/photo-xxx?w=800",
  "category": "Service"
}
```

### Notes importantes

- Les IDs doivent être uniques
- Les actualités sont automatiquement triées par date (plus récentes en premier)
- Le format de date recommandé est "Jour Mois Année" (ex: "15 Janvier 2025")
- Le fichier doit rester un JSON valide
- Après modification, vérifiez que le JSON est bien formaté
- En production, un redémarrage peut être nécessaire pour voir les changements
