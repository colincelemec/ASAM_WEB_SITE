# 🌍 ASAM - Associazione di Studenti Africani di Modena

Site web officiel de l'association des étudiants africains de Modène (Italie).

## ✨ Caractéristiques

- **Design Africain Authentique** : Couleurs panafricaines (vert, jaune, rouge) et motifs géométriques améliorés
- **Logo ASAM Officiel** : Logo intégré sur toutes les pages + favicon
- **Système Multilingue Dynamique** : Support complet Italien, Français et Anglais avec changement instantané sur toutes les pages
- **Gestion d'Événements CRUD** : Panneau admin pour créer, modifier et supprimer des événements dynamiquement
- **Système d'Adhésion** : Page dédiée pour l'inscription des membres avec formulaire complet et méthodes de paiement
- **Réseaux Sociaux Intégrés** : Liens vers Facebook, Instagram et WhatsApp sur toutes les pages
- **Copyright Dynamique** : L'année se met à jour automatiquement
- **Responsive** : Design optimisé pour mobile, tablette et desktop
- **Performance** : Site statique HTML/CSS/JS pour un chargement ultra-rapide
- **Navigation Intuitive** : Structure claire avec 8 pages principales
- **Animations Fluides** : Effets de scroll et transitions élégantes

## 📄 Pages

1. **Accueil** (`index.html`) - Présentation de l'association, valeurs, statistiques et événements dynamiques
2. **À Propos** (`about.html`) - Mission, histoire et équipe
3. **Événements** (`events.html`) - Événements à venir et passés
4. **Galerie** (`gallery.html`) - Photos et vidéos des activités
5. **Actualités** (`news.html`) - Communiqués et nouvelles
6. **Contact** (`contact.html`) - Formulaire de contact et informations
7. **Adhésion** (`membership.html`) - Formulaire d'inscription et paiement pour devenir membre (€20/an)
8. **Admin** (`admin.html`) - Panneau d'administration pour la gestion des événements (accès protégé)

## 🛠️ Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles personnalisés avec variables CSS
- **JavaScript Vanilla** - Fonctionnalités interactives (localStorage pour gestion données)
- **Font Awesome** - Bibliothèque d'icônes
- **Google Fonts (Poppins)** - Typographie moderne

## ⚡ Démarrage Rapide

### Configuration Initiale (À FAIRE EN PREMIER)

1. **Configurer les Réseaux Sociaux** : Ouvrez chaque fichier HTML et remplacez les liens dans le footer
2. **Changer le Mot de Passe Admin** : Éditez `js/admin-events.js` ligne 8
3. **Mettre à Jour les Contacts** : Email, téléphone dans tous les fichiers HTML
4. **Ajouter des Événements** : Allez sur `admin.html` et créez vos premiers événements

### Accès Rapide

- 🏠 **Site Principal** : `index.html`
- 🔐 **Admin Événements** : `admin.html` (mot de passe: `ASAM2024Admin`)
- 💳 **Page Adhésion** : `membership.html`

## 🚀 Utilisation

### Méthode 1 : Live Server (Recommandé pour le développement)

1. Installer l'extension **Live Server** dans VS Code
2. Ouvrir le dossier du projet dans VS Code
3. Clic droit sur `index.html` → **"Open with Live Server"**
4. Le site s'ouvrira automatiquement dans votre navigateur

### Méthode 2 : Ouverture directe

1. Double-cliquer sur `index.html`
2. Le site s'ouvrira dans votre navigateur par défaut

### Méthode 3 : Serveur local Python

```bash
# Python 3
python -m http.server 8000

# Puis ouvrir http://localhost:8000
```

## 📁 Structure du Projet

```
ASAM_SITE_WEB/
├── index.html           # Page d'accueil avec événements dynamiques
├── about.html           # Page À propos
├── events.html          # Page Événements
├── gallery.html         # Page Galerie
├── news.html            # Page Actualités
├── contact.html         # Page Contact
├── membership.html      # Page d'adhésion et paiement (NOUVEAU)
├── admin.html           # Panneau admin pour gestion événements (NOUVEAU)
├── logo_asam.png        # Logo officiel ASAM
├── css/
│   └── style.css        # Styles personnalisés avec couleurs et patterns africains
├── js/
│   ├── main.js          # Scripts principaux (navigation, animations, copyright dynamique)
│   ├── translations.js  # Système de traduction multilingue
│   └── admin-events.js  # Système CRUD pour gestion événements (NOUVEAU)
├── images/              # Dossiers pour les images
│   ├── logo/
│   ├── events/
│   ├── gallery/
│   └── hero/
└── README.md
```

## 🎨 Couleurs du Thème

Les couleurs sont inspirées du panafricanisme et de la richesse culturelle africaine :

- **Vert Africain** : `#009639` - Symbolise la nature et l'espoir
- **Jaune Africain** : `#FCD116` - Représente la richesse et le soleil
- **Rouge Africain** : `#CE1126` - Évoque le courage et la passion
- **Orange Africain** : `#FF6B35` - Chaleur et vitalité
- **Brun Africain** : `#8B4513` - Terre et traditions

## 🌐 Système de Traduction Multilingue

Le site supporte 3 langues avec changement instantané sans rechargement de page :

### Langues Disponibles
- **Italien (IT)** - Langue par défaut
- **Français (FR)**
- **Anglais (EN)**

### Comment ça fonctionne

1. **Fichier de traductions** : `js/translations.js` contient toutes les traductions
2. **Attributs HTML** : Les éléments traduisibles ont un attribut `data-i18n="key"`
3. **JavaScript** : `main.js` applique les traductions dynamiquement

### Ajouter une nouvelle traduction

**Étape 1** : Ajouter la clé dans `js/translations.js`

```javascript
const translations = {
    it: {
        'new.key': 'Testo in italiano',
    },
    fr: {
        'new.key': 'Texte en français',
    },
    en: {
        'new.key': 'Text in English',
    }
};
```

**Étape 2** : Ajouter l'attribut dans le HTML

```html
<p data-i18n="new.key">Testo in italiano</p>
```

### Préférence de langue

La langue sélectionnée est sauvegardée dans `localStorage` et appliquée automatiquement lors des prochaines visites.

## 🔐 Système d'Administration des Événements

### Accès au Panneau Admin

1. Ouvrir `admin.html` dans le navigateur
2. Entrer le mot de passe : **`ASAM2024Admin`**
3. Vous avez maintenant accès au panneau de gestion

### Fonctionnalités Admin

- ✅ **Créer** un nouvel événement
- ✅ **Modifier** un événement existant
- ✅ **Supprimer** un événement
- ✅ Les événements sont automatiquement affichés sur la page d'accueil
- ✅ Personnaliser : titre, date, description, couleur du gradient, lien d'inscription

### Changer le Mot de Passe Admin

Éditez le fichier `js/admin-events.js` à la ligne 8 :

```javascript
const ADMIN_PASSWORD = 'VotreNouveauMotDePasse';
```

### Stockage des Événements

Les événements sont sauvegardés dans le `localStorage` du navigateur. Pour une solution de production :
- Intégrer avec un backend (Node.js, PHP, Python, etc.)
- Utiliser une base de données (MySQL, MongoDB, Firebase, etc.)

## 💳 Système d'Adhésion des Membres

### Page d'Adhésion

Accéder via `membership.html` ou le bouton **"Diventa Membro"** sur la page d'accueil.

### Informations Collectées

- **Informations Personnelles** : Nom, prénom, email, téléphone, date de naissance, pays d'origine
- **Informations Académiques** : Université, cours d'étude, année
- **Méthode de Paiement** : Bonifico bancaire, PayPal, Carte de crédit, Contant

### Cotisation Annuelle

**€20 par an** incluant :
- Accès prioritaire aux événements
- Networking avec la communauté
- Support académique et tutoriel
- Opportunités professionnelles

### Gestion des Adhésions

Les inscriptions sont actuellement sauvegardées dans `localStorage`. Pour une gestion complète :
1. Intégrer un système de paiement (Stripe, PayPal API)
2. Connecter à un backend pour traiter les paiements
3. Envoyer des emails de confirmation automatiques
4. Créer un dashboard pour gérer les membres

## 📝 Personnalisation

### Modifier le contenu des événements

**Méthode recommandée** : Utiliser le panneau admin (`admin.html`) pour gérer les événements dynamiquement.

**Méthode manuelle** : Éditez directement le fichier `events.html` si nécessaire

### Modifier les actualités

Éditez le fichier `news.html` - Modifier les articles de blog

### Ajouter des photos à la galerie

1. Placer les images dans `images/gallery/`
2. Éditez `gallery.html` pour ajouter les nouvelles photos

### Personnaliser les couleurs

Éditez les variables CSS dans `css/style.css` :

```css
:root {
    --african-green: #009639;
    --african-yellow: #FCD116;
    --african-red: #CE1126;
    /* ... autres couleurs ... */
}
```

### Modifier le formulaire de contact

Éditez `contact.html` - Pour connecter à un backend, modifiez le `<form>` action

## 🚢 Déploiement

Le site peut être déployé gratuitement sur plusieurs plateformes :

### Netlify (Recommandé)

1. Créer un compte sur [Netlify](https://www.netlify.com)
2. Glisser-déposer le dossier du projet
3. Le site est en ligne en quelques secondes !

**Alternative avec Git :**
```bash
# Connecter au repository GitHub
# Netlify déploiera automatiquement à chaque push
```

### GitHub Pages

1. Pusher le code sur GitHub
2. Aller dans **Settings** → **Pages**
3. Sélectionner la branche `main` et le dossier `/ (root)`
4. Le site sera accessible sur `https://username.github.io/ASAM_SITE_WEB`

### Vercel

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel
```

### Hébergement traditionnel

Le site étant composé de fichiers statiques, il peut être hébergé sur n'importe quel serveur web :
- Apache
- Nginx
- Serveur partagé classique (cPanel, etc.)

Simplement copier tous les fichiers via FTP/SFTP.

## ⚠️ Notes Importantes

### Limitations Actuelles (localStorage)

Le site utilise actuellement `localStorage` pour stocker :
- Les événements créés par l'admin
- Les inscriptions des membres
- La préférence linguistique

**Limitations** :
- Les données sont stockées localement dans le navigateur
- Si vous changez de navigateur ou d'ordinateur, les données ne seront pas transférées
- Pour un site en production, intégrez un backend avec base de données

### Migration vers Production

Pour un déploiement professionnel, considérez :

1. **Backend API** :
   - Node.js + Express
   - PHP + Laravel
   - Python + Django/Flask

2. **Base de Données** :
   - MySQL
   - PostgreSQL
   - MongoDB
   - Firebase Firestore

3. **Système de Paiement** :
   - Stripe
   - PayPal API
   - Revolut Business

4. **Email Service** :
   - SendGrid
   - Mailgun
   - Amazon SES

## 🎯 Fonctionnalités JavaScript

### Menu Mobile Responsive
- Menu hamburger sur petits écrans
- Navigation fluide

### Sélecteur de Langue
- Dropdown avec drapeaux
- Changement instantané du contenu
- Sauvegarde de la préférence
- Disponible sur toutes les pages

### Système d'Administration
- Authentification par mot de passe
- CRUD complet pour événements
- Stockage dans localStorage
- Interface intuitive avec modal

### Gestion Dynamique des Événements
- Chargement automatique sur la page d'accueil
- Filtrage des événements à venir
- Affichage avec gradients personnalisables
- Boutons d'inscription configurables

### Formulaire d'Adhésion
- Validation des champs
- Sélection de méthode de paiement
- Sauvegarde des inscriptions
- Message de confirmation

### Animations au Scroll
- Apparition progressive des sections
- Effets de fade-in

### Bouton Scroll to Top
- Apparaît après scroll
- Retour fluide en haut de page

### Copyright Dynamique
- Mise à jour automatique de l'année
- Appliqué sur toutes les pages

### Validation de Formulaires
- Vérification des champs requis
- Messages d'erreur visuels
- Support pour inputs, textarea et select

## 🔧 Maintenance

### Ajouter une nouvelle page

1. Créer le fichier HTML (ex: `team.html`)
2. Copier la structure de navigation depuis une page existante
3. Ajouter le lien dans le menu de toutes les pages
4. Ajouter les traductions nécessaires dans `js/translations.js`
5. Inclure les scripts :
```html
<script src="js/translations.js"></script>
<script src="js/main.js"></script>
```

### Mettre à jour les informations de contact

Éditez dans **tous les fichiers HTML** (footer) :
- Email : `info@asam-modena.it`
- Téléphone : `+39 XXX XXX XXXX`
- Adresse : `Modena, Italia`

### Configurer les Réseaux Sociaux

Les liens sociaux sont présents dans le footer de toutes les pages. Remplacez les URL par défaut :

```html
<!-- Dans le footer de chaque page HTML -->
<a href="https://www.facebook.com/ASAM.Modena" target="_blank">Facebook</a>
<a href="https://www.instagram.com/asam_modena/" target="_blank">Instagram</a>
<a href="https://wa.me/39XXXXXXXXXX" target="_blank">WhatsApp</a>
```

**Note** : Remplacez `39XXXXXXXXXX` par votre vrai numéro WhatsApp

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche (`git checkout -b feature/NouvelleFonctionnalite`)
3. Commit vos changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/NouvelleFonctionnalite`)
5. Ouvrez une Pull Request

## 📧 Contact

**ASAM Modena**
- 📧 Email : info@asam-modena.it
- 📞 Téléphone : +39 XXX XXX XXXX
- 📍 Adresse : Modena, Italia
- 💻 Site Web : [URL du site déployé]

**Réseaux Sociaux**
- Facebook : https://www.facebook.com/ASAM.Modena
- Instagram : https://www.instagram.com/asam_modena/
- WhatsApp : https://wa.me/39XXXXXXXXXX (à configurer)

## 📄 Licence

Ce projet a été créé pour l'ASAM (Associazione di Studenti Africani di Modena).

---

**Développé avec ❤️ pour la communauté africaine de Modène**

## 🆕 Dernières Mises à Jour (Décembre 2024)

- ✅ Intégration du logo officiel ASAM + favicon
- ✅ Système de gestion d'événements avec panneau admin CRUD
- ✅ Page d'adhésion des membres avec formulaire complet
- ✅ Liens réseaux sociaux (Facebook, Instagram, WhatsApp)
- ✅ Copyright dynamique avec année auto-actualisée
- ✅ Sélecteur de langue sur toutes les pages
- ✅ Amélioration des patterns africains sur le background

*Dernière mise à jour : Décembre 2024*
# ASAM_WEB_SITE
