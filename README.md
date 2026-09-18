# Edilsole — sito corporate

## Sitemap strategica

```
/                    Home
  ├─ Hero video (impianto a terra) + statistiche + doppia CTA
  ├─ Chi siamo (teaser) → rimanda a /azienda
  ├─ Servizi (Residenziale · Industriale · Grandi impianti a terra) → rimanda a /servizi
  ├─ Video secondario + vantaggi del subappalto → rimanda a /partner
  ├─ CTA band (sopralluogo + WhatsApp)
  └─ Form di richiesta B2B (Netlify Forms)

/azienda.html        Chi siamo, mission, team, certificazioni, numeri
/servizi.html         Residenziale · Industriale · Grandi impianti a terra (dettaglio + processo)
/partner.html         Partner & Subappalti — condizioni di collaborazione, requisiti, form dedicato
/contatti.html         Contatti, sede, form B2B, mappa
```

Solo la **Home** (`index.html`) è stata generata per intero in questa fase.
Le altre pagine sono già collegate nella navigazione (header, footer, CTA) e vanno costruite riusando
gli stessi token di design (colori, font, componenti in `css/style.css`).

## Struttura del progetto

```
edilsole/
├─ index.html
├─ netlify.toml
├─ css/style.css
├─ js/script.js
├─ video/
│   ├─ video-cantiere-1.mp4     (hero — impianto a terra, panoramica)
│   └─ video-cantiere-2.mp4     (sezione "Partner & Subappalti")
└─ images/
    └─ hero-poster.jpg          (fallback generato da un frame del video hero)
```

## Cosa manca prima di andare online

Il codice referenzia già i percorsi corretti — basta sostituire i file:

- `images/foto-squadra.jpg` — foto della squadra
- `images/foto-installazione.jpg` — dettaglio installazione
- `images/foto-residenziale.jpg`, `images/foto-industriale.jpg`, `images/foto-impianto-terra.jpg`
- Dati reali al posto dei segnaposto: MW installati, cantieri completati, anni di attività, regioni servite (nella hero), indirizzo sede, P.IVA, email (nel footer)
- Eventuale numero WhatsApp da confermare: attualmente `https://wa.me/393508755887`

## Deploy su Netlify via GitHub

1. Crea una repository GitHub e carica questa cartella.
2. Su Netlify: **Add new site → Import an existing project** → collega la repo.
3. Build command: vuoto — Publish directory: `.` (già configurato in `netlify.toml`).
4. Il form in Home ha già `data-netlify="true"` e `name="contact"`: dopo il primo deploy comparirà
   automaticamente in **Netlify → Forms**. Per le notifiche via email, attiva le notifiche del form
   dalle impostazioni del sito.
