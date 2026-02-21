# Challenge-IT-1-Weather-API-CLI-App

Une petite application Node.js en ligne de commande pour obtenir la météo en temps réel d’une ville grâce à l’API WeatherAPI.com.

---

## Fonctionnalités

- Obtenir la météo actuelle d’une ville
- Affiche :
  - Ville et pays
  - Heure locale
  - Température en °C
  - Conditions météo
  - Humidité
  - Vent
- Utilisation de `async/await` pour les appels API
- Gestion des erreurs (ville invalide, clé API incorrecte, problèmes réseau)
- Clé API sécurisée via `.env`

---

## Installation

1. Cloner le projet :  
```bash
git clone https://github.com/ademboukabes/Challenge-IT-1-Weather-API-CLI-App.git
cd Challenge-IT-1-Weather-API-CLI-
```

2.Installer les dépendances :
```
npm install
```
3.Configurer l'environnement : Créez un fichier .env à la racine du projet et ajoutez votre clé API :
```env
API_KEY=ta_cle_api_weatherapi
```
Utilisation

Lancez l'application en passant le nom d'une ville en argument :
```
node index.js <nom_de_la_ville>
```
Exemple :
```
node index.js Paris
```
Sortie attendue :
```
🌤 Rapport météo
Ville: Paris
Pays: France
Heure locale: 2026-02-21 15:06
Température: 16.3°C
Conditions: Partly cloudy
Humidité: 63%
Vent: 16.2 km/h
```
