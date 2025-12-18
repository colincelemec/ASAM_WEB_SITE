# 🌍 ASAM - Associazione di Studenti Africani di Modena

Sito web ufficiale dell'Associazione di Studenti Africani di Modena (Italia).

![ASAM Logo](logo_asam.png)

## ✨ Caratteristiche

- **Design Moderno ed Elegante**: Interfaccia pulita con colori ispirati al logo ASAM
- **Completamente Responsive**: Ottimizzato per desktop, tablet e mobile
- **Pagine Ottimizzate**: Contenuti aggiornati e focalizzati sulla comunità
- **Sistema di Iscrizione**: Form di membership con invio automatico via email
- **Social Media Integrati**: Collegamenti diretti a Instagram e gruppo WhatsApp
- **Performance Elevate**: Sito statico HTML/CSS/JS per caricamento ultra-rapido
- **SEO Friendly**: Meta tag ottimizzati per i motori di ricerca

## 📄 Pagine del Sito

1. **Home** (`index.html`) - Presentazione dell'associazione con valori, statistiche e call-to-action
2. **Chi Siamo** (`about.html`) - Missione dell'associazione e membri dell'esecutivo
3. **Galleria** (`gallery.html`) - Spazio per le foto della comunità (in costruzione)
4. **Notizie** (`news.html`) - Annuncio apertura iscrizioni ASAM 2026
5. **Contatti** (`contact.html`) - Informazioni di contatto e form
6. **Diventa Membro** (`membership.html`) - Form di iscrizione con invio email

## 🎨 Membri dell'Esecutivo

- **Kamdem Cyrille** - Candidato Presidente
- **Kenfack Kana Brayol** - Candidato Vicepresidente
- **Nguesop Rodaise Darison** - Candidato Tesoriere
- **Awoumou M. Serge A.** - Candidato Segretario

## 💳 Iscrizioni ASAM 2026

### Tariffe
- **Matricole**: GRATUITO
- **Altri Studenti**: €25/anno (10€ tessera + 15€ annuali)

### Diritti del Tesserato
- Aiuto e consigli collegiali gratuiti
- Assistenza completa nella gestione dei resoalti
- Iscrizione corsi di inglese e/o socio organizzati dall'associazione
- Sostegno accademico (borse materiale didattico)
- Eventi culturali (escursioni, tornei, africana, ecc.)
- Assistenza nelle ricerche alloggio e lavoretto

## 🛠️ Tecnologie Utilizzate

- **HTML5** - Struttura semantica del sito
- **CSS3** - Stili personalizzati con variabili CSS
- **JavaScript Vanilla** - Funzionalità interattive
- **Font Awesome 6.4.0** - Libreria di icone
- **Google Fonts (Poppins)** - Tipografia moderna e leggibile

## 🎨 Palette Colori

Il design utilizza colori ispirati al panafricanismo:

- **Verde Africano**: `#009639` - Simboleggia natura e speranza
- **Giallo Africano**: `#FCD116` - Rappresenta ricchezza e sole
- **Rosso Africano**: `#CE1126` - Evoca coraggio e passione
- **Arancione Africano**: `#FF6B35` - Calore e vitalità
- **Marrone Africano**: `#8B4513` - Terra e tradizioni

## ⚡ Avvio Rapido

### Metodo 1: Live Server (Consigliato per sviluppo)

1. Installa l'estensione **Live Server** in VS Code
2. Apri la cartella del progetto in VS Code
3. Click destro su `index.html` → **"Open with Live Server"**
4. Il sito si aprirà automaticamente nel browser

### Metodo 2: Apertura Diretta

1. Doppio click su `index.html`
2. Il sito si aprirà nel browser predefinito

### Metodo 3: Server Locale Python

```bash
# Python 3
python -m http.server 8000

# Poi apri http://localhost:8000
```

## 📁 Struttura del Progetto

```
ASAM_SITE_WEB/
├── index.html              # Homepage con presentazione associazione
├── about.html              # Chi siamo e membri esecutivo
├── gallery.html            # Galleria foto (placeholder)
├── news.html               # Notizie e apertura iscrizioni
├── contact.html            # Pagina contatti
├── membership.html         # Form iscrizione membri
├── logo_asam.png           # Logo ufficiale ASAM
├── new_logo_asam.jpeg      # Logo originale
├── apertura_iscrizioni.png # Immagine annuncio iscrizioni
├── membri_esecutivo.png    # Immagine membri esecutivo
├── css/
│   └── style.css           # Stili personalizzati
├── js/
│   └── main.js             # Script principali
└── README.md               # Questo file
```

## 📞 Contatti

**ASAM Modena**
- 📧 Email: asamodena@gmail.com
- 📞 Telefono: +39 333 789 5817
- 📍 Indirizzo: Modena, Italia

**Social Media**
- 📱 Instagram: [@asammodena](https://www.instagram.com/asammodena?igsh=emxzc2cxaDF4MGJ1)
- 💬 Gruppo WhatsApp: [Unisciti al gruppo](https://chat.whatsapp.com/LfA2LtakzXz3R0LHKrM2OE?mode=wwt)

## 🚀 Deployment

Il sito può essere facilmente deployato su diverse piattaforme:

### Vercel (Consigliato)

```bash
# Installa Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Netlify

1. Crea un account su [Netlify](https://www.netlify.com)
2. Connetti il repository GitHub
3. Deploy automatico ad ogni push

### GitHub Pages

1. Vai in **Settings** → **Pages** nel repository GitHub
2. Seleziona branch `main` e cartella `/ (root)`
3. Il sito sarà disponibile su `https://username.github.io/ASAM_SITE_WEB`

## 🔧 Personalizzazione

### Modificare i Contenuti

- **Homepage**: Modifica `index.html` per cambiare valori, statistiche o CTA
- **Chi Siamo**: Aggiorna `about.html` per modificare la missione o i membri
- **Notizie**: Modifica `news.html` per nuovi annunci
- **Contatti**: Aggiorna le informazioni in `contact.html`

### Modificare i Colori

Edita le variabili CSS in `css/style.css`:

```css
:root {
    --african-green: #009639;
    --african-yellow: #FCD116;
    --african-red: #CE1126;
    --african-orange: #FF6B35;
    --african-brown: #8B4513;
}
```

### Modificare il Form di Iscrizione

Il form in `membership.html` invia i dati via email. Per modificare:

1. Cambia l'indirizzo email di destinazione nello script
2. Personalizza i campi del form se necessario
3. Modifica il messaggio di conferma

## 📝 Note Importanti

### Sistema di Invio Email

Il form di iscrizione utilizza il protocollo `mailto:` per aprire il client email dell'utente. Per un sistema più professionale, considera:

1. **Backend API**: Node.js, PHP, o Python per processare i form
2. **Servizi Email**: SendGrid, Mailgun, o Amazon SES
3. **Form Services**: Formspree, Netlify Forms, o Google Forms

### Galleria Foto

La pagina galleria mostra attualmente un messaggio placeholder. Per aggiungere foto:

1. Crea una cartella `images/gallery/`
2. Aggiungi le immagini
3. Modifica `gallery.html` per includerle

## 🤝 Contribuire

Per contribuire al progetto:

1. Fork il repository
2. Crea un branch per la tua feature (`git checkout -b feature/NuovaFeature`)
3. Commit le modifiche (`git commit -m 'Aggiunge nuova feature'`)
4. Push al branch (`git push origin feature/NuovaFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è stato creato per l'ASAM (Associazione di Studenti Africani di Modena).

---

**Sviluppato con ❤️ da MENDJI COLINCE per la comunità africana di Modena**

## 🆕 Ultime Modifiche (Dicembre 2024)

- ✅ Aggiornata email a asamodena@gmail.com
- ✅ Aggiornato telefono a +39 333 789 5817
- ✅ Modificato logo e favicon
- ✅ Aggiornati anni di attività: più di 20 anni
- ✅ Rimossa sezione orari di apertura
- ✅ Rimosso cambio lingua (solo italiano)
- ✅ Aggiunti membri dell'esecutivo
- ✅ Aggiornati link Instagram e WhatsApp
- ✅ Rimossa pagina Eventi
- ✅ Aggiornata pagina Notizie con iscrizioni ASAM 2026
- ✅ Aggiornata pagina Galleria
- ✅ Rimossi social Twitter e Facebook
- ✅ Aggiornato footer con credits sviluppatore
- ✅ Modificato form Diventa Membro con invio email

*Ultimo aggiornamento: Dicembre 2024*
