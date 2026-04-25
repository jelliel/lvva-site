# LaVeritéVousAffranchira - LVVA

Site statique inter-religieux pour comparer islam, catholicisme romain, protestantisme et tradition kamite, avec bibliothèque de dossiers téléchargeables et références.

## Ouvrir localement

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Puis ouvrir :

```text
http://localhost:4173
```

## Structure

- `index.html` : page principale
- `assets/css/styles.css` : interface visuelle
- `assets/js/main.js` : filtre des dossiers
- `assets/images/` : image hero locale optimisée
- `dossiers/` : fichiers téléchargeables

## Déploiement

Le site ne nécessite aucun serveur applicatif. Il peut être hébergé sur GitHub Pages, Netlify, Cloudflare Pages, Vercel ou tout hébergement statique.
