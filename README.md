# Gestion d'Utilisateurs - React Native

Application mobile complète développée avec React Native (Expo) pour gérer une liste d'utilisateurs via une API REST.

## 📋 Fonctionnalités

✅ **Récupération des utilisateurs** - Fetch depuis JSONPlaceholder API
✅ **Affichage en liste** - FlatList scrollable avec informations complètes
✅ **Modification** - Appui simple pour éditer un utilisateur
✅ **Suppression** - Long press pour supprimer directement
✅ **Ajout** - Bouton pour créer de nouveaux utilisateurs
✅ **Styles dynamiques** - Couleurs selon le genre (rose/bleu)
✅ **Validation** - Vérification des champs du formulaire
✅ **État global** - Context API pour gestion centralisée

## 🏗️ Architecture du Projet

```
project/
├── App.js                          # Point d'entrée principal
├── package.json                    # Dépendances
├── app.json                        # Configuration Expo
│
├── context/
│   └── UserContext.js             # Context API + Provider
│
├── services/
│   └── UserService.js             # Service API (fetch)
│
├── screens/
│   └── HomeScreen.js              # Écran principal
│
├── components/
│   ├── UserList.js                # Composant liste (FlatList)
│   └── UserForm.js                # Composant formulaire
│
└── README.md                       # Documentation
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (v14 ou supérieur)
- npm ou yarn
- Expo CLI (optionnel)

### Étapes

1. **Cloner ou télécharger le projet**
```bash
cd gestion-utilisateurs
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
```

3. **Démarrer l'application**
```bash
npm start
# ou
expo start
```

4. **Lancer sur un appareil**
- **iOS** : Appuyez sur `i` dans le terminal
- **Android** : Appuyez sur `a` dans le terminal
- **Web** : Appuyez sur `w` dans le terminal

Ou scannez le QR code avec l'application Expo sur votre téléphone.

## 📱 Utilisation

### Consulter les utilisateurs
- L'application charge automatiquement les utilisateurs au démarrage
- Scrollez dans la liste pour voir tous les utilisateurs

### Modifier un utilisateur
- **Appuyez** simplement sur une carte utilisateur
- Le formulaire s'ouvre avec les données pré-remplies
- Modifiez les champs (nom, email, genre)
- Cliquez sur "Enregistrer"
- La couleur de fond change selon le genre (femme→rose, homme→bleu)

### Supprimer un utilisateur
- **Long press** (appuyez longtemps) sur la carte d'un utilisateur
- L'utilisateur est supprimé de la liste

### Ajouter un utilisateur
- Cliquez sur le bouton **"+ Ajouter"** en haut à droite
- Remplissez le formulaire (nom, email, genre)
- Cliquez sur "Enregistrer"
- L'utilisateur est ajouté à la liste

## 🎨 Styles et Couleurs

- **Fond utilisateur femme** : Rose clair (#FFE0F0)
- **Fond utilisateur homme** : Bleu clair (#E0F0FF)
- **Couleur primaire** : Bleu (#2196F3)
- **Couleur accent** : Rose (#E91E63)

## 🔧 Détails Techniques

### Technologies utilisées
- **React Native** - Framework mobile
- **Expo** - Plateforme de développement
- **Context API** - Gestion d'état global
- **Fetch API** - Appels HTTP

### Composants principaux

#### App.js
Point d'entrée de l'application avec SafeAreaView et UserProvider

#### UserContext.js
- Gestion de l'état global (users, loading, error)
- Fonctions : addUser, updateUser, deleteUser
- Fetch automatique au démarrage

#### UserService.js
- Appel à l'API JSONPlaceholder
- Enrichissement des données avec genre aléatoire

#### HomeScreen.js
- Gestion des interactions utilisateur
- Affichage du formulaire en Modal
- Confirmations pour suppression

#### UserList.js
- FlatList avec les utilisateurs
- Gestion des appuis et long press
- État de chargement

#### UserForm.js
- Formulaire réactif
- Validation des champs
- Changement de couleur selon genre

## 📝 API Utilisée

**Endpoint** : https://jsonplaceholder.typicode.com/users

**Structure de réponse** :
```json
{
  "id": 1,
  "name": "Leanne Graham",
  "email": "leanne@example.com",
  "username": "Bret",
  ...
}
```

**Note** : L'API est en lecture seule. Les modifications/suppression/ajout sont gérés côté application.

## ⚠️ Remarques importantes

1. **Genre aléatoire** - Les utilisateurs récupérés de l'API n'ont pas de genre. Un genre aléatoire est assigné à chaque user lors du fetch.

2. **État local** - Les modifications, ajouts et suppressions ne sont conservés que pendant la session en cours.

3. **Validation email** - Un format email simple est validé (xxxxx@xxxx.xxx)

4. **Confirmation suppression** - Une alerte de confirmation est affichée avant suppression (contrairement au TP qui demandait sans confirmation).

## 🐛 Dépannage

### Erreur "Network request failed"
- Vérifier la connexion internet
- Vérifier que l'API JSONPlaceholder est accessible

### Le formulaire ne s'affiche pas
- Vérifier que Modal est bien supporté sur votre plateforme
- Vérifier les permissions nécessaires

### Problème de scroll
- FlatList fonctionne mieux avec des données limitées
- Vérifier que showsVerticalScrollIndicator est bien défini

## 📚 Ressources

- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [Context API Guide](https://react.dev/reference/react/useContext)

## ✨ Améliorations possibles

- Persistance des données avec AsyncStorage
- Animations de transition
- Recherche/filtre d'utilisateurs
- Pagination de la liste
- Images de profil
- Connexion à une vraie API
- Tests unitaires avec Jest
- Mode sombre

---

**Auteur** : TP React Native  
**Date** : 2024  
**Version** : 1.0.0
