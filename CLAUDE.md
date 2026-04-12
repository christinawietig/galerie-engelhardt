# Galerie Engelhardt - Website

> **Wichtig:** Diese CLAUDE.md ist die zentrale Projektdokumentation und muss bei jeder
> Änderung am Projekt aktuell gehalten werden (Struktur, Entscheidungen).
> **Keine sensiblen oder internen Inhalte** -- nur dokumentieren, was auch öffentlich sein darf.

## Auftraggeber
- **Name:** Thilo Engelhardt
- **Galerie:** Die Otmar Alt Galerie
- **Domain:** galeriee.de
- **X/Twitter:** @galeriee

## Kontaktdaten (für Impressum & Footer)
- Thilo Engelhardt
- Schuberstr. 2
- 68723 Plankstadt
- Fon: 0176 22262539
- Mail: Thilo.engelhardt@galeriee.de

## Design-Entscheidungen
- **Theme:** Modern Dark (schwarzer Hintergrund, damit Kunstfarben leuchten)
- **Schrift:** Serifen (Cormorant Garamond für Überschriften, Inter für UI-Elemente)
- **Layout:** Blog-Style / Single-Column zum Runterscrollen
- **Text unter Bildern:** Ja, Künstlername + Werktitel
- **Verkauf:** Kein Warenkorb, nur "Interesse anfragen"-Button der mailto-Link öffnet
- **Bilder:** Sollen austauschbar sein (einfach hochladen/löschen)

## Aktuelle Kunstwerke (assets/images/)
Beispielbilder. Zuordnungen per Web-Recherche, mit ? wo unsicher -- Thilo muss bestätigen.
1. `Der versteckte Maulwurf.png` - Otmar Alt, 1967, Öl auf Leinwand
2. `ZwiegesprächmitRaben.jpg` - Otmar Alt, 2012 (Signatur im Bild)
3. `LEtreinte.jpg` - Pablo Picasso, 1971, Linogravure
4. `murakami.png` - Takashi Murakami, "Eye Love Superflat (Pink)"?, 2003?, Screenprint
5. `uecker.png` - Günther Uecker, Prägedruck/Nagelrelief
6. `Traumfänger.jpg` - Otmar Alt?
7. `repressione.jpg` - Künstler unbekannt

## Dateistruktur
```
galerie-engelhardt/
├── index.html
├── CLAUDE.md
└── assets/
    ├── css/
    │   └── style.css           # Stylesheet mit @font-face (self-hosted)
    ├── js/
    │   └── lightbox.js         # Lightbox mit Vor/Zurück-Navigation
    ├── fonts/
    │   ├── cormorant-garamond/ # Vollständiger Font (alle Gewichte)
    │   └── inter/              # Vollständiger Font (alle Gewichte)
    └── images/
        ├── *.jpg/*.png         # Originale (für Lightbox)
        └── thumbs/             # Vorschaubilder (für Feed)
```

## Deployment
- **GitHub Pages** auf `main` Branch: https://christinawietig.github.io/galerie-engelhardt/
- Push auf `main` deployt automatisch

## Thumbnails
- Originale liegen in `assets/images/`, Thumbnails in `assets/images/thumbs/`
- Feed zeigt Thumbs (max 800px breit, JPEG), Lightbox lädt Original
- Generierung via `sharp` (npm): `for f in assets/images/*.{jpg,png}; do npx sharp-cli -i "$f" -o "assets/images/thumbs/$(basename "${f%.*}").jpg" resize 600 --withoutEnlargement; done`
- Kein permanentes npm-Setup nötig -- einmal laufen lassen wenn neue Bilder dazukommen

## Technische Entscheidungen
- **Kein CDN** -- Fonts self-hosted wegen DSGVO
- **Fonts:** Komplette @fontsource-Pakete lokal, nur benötigte Gewichte per @font-face eingebunden (300, 400)
- **Kein Build-System** -- Reines HTML/CSS/JS, kein npm zur Laufzeit

## Features
- Sticky Navigation mit Blur-Effekt
- Lightbox (Klick auf Bild = Vollbild, Escape zum Schließen)
- Fade-in Animationen beim Laden
- mailto-Links mit vorausgefülltem Betreff pro Kunstwerk
- Responsive Design (Mobile-optimiert)
- Impressum/Datenschutz-Links vorbereitet (noch Platzhalter)


## Kontext
Website für die Otmar Alt Galerie von Thilo Engelhardt in Plankstadt.
