# GalerieE - Website

> **Wichtig:** Diese CLAUDE.md ist die zentrale Projektdokumentation und muss bei jeder
> Änderung am Projekt aktuell gehalten werden (Struktur, Entscheidungen).
> **Keine sensiblen oder internen Inhalte** -- nur dokumentieren, was auch öffentlich sein darf.

## Galerie
- **Name:** GalerieE
- **Schwerpunkt:** Otmar Alt
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
Daten verifiziert aus GalerieE.docx. Preise bewusst nicht auf der Website.
1. `Der versteckte Maulwurf.png` - Otmar Alt, 1967, Öl auf Leinwand, 139×94,5 cm
2. `ZwiegesprächmitRaben.jpg` - Otmar Alt, 2012, Acryl auf Leinwand, 140×110 cm
3. `LEtreinte.jpg` - Pablo Picasso, 1963, L'Etreinte I, Linolschnitt, 54×65 cm, 26/50 (Bloch 1150)
4. `murakami.png` - Takashi Murakami, "We are the Jocular Clan", Offsetdruck, 95/300
5. `uecker.png` - Günther Uecker, 2002, signierter Prägedruck "Graphein", 70×50 cm, 77/120
6. `Traumfänger.jpg` - Otmar Alt, 1975, Radierung, 76×66 cm, 67/75
7. `repressione.jpg` - José Ortega, Repressione, Prägeradierung, 69×70 cm, 1/75

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
- Lightbox mit Vor/Zurück-Navigation (Klick, Pfeiltasten, Escape)
- Fade-in Animationen beim Laden
- mailto-Links mit vorausgefülltem Betreff pro Kunstwerk
- Responsive Design (Mobile-optimiert)
- Impressum/Datenschutz-Links vorbereitet (noch Platzhalter)

## Accessibility
- Landmarks: nav, header, main, footer mit aria-labels
- Skip-Link zur Galerie
- Lightbox: role=dialog, aria-modal, Fokus-Trap, Fokus-Rückgabe
- Bilder in Buttons für Tastatur-Bedienbarkeit
- Beschreibende alt-Texte für alle Kunstwerke
- Korrekte Heading-Hierarchie (h1 → h2)
- focus-visible Outlines
- address-Element für Kontaktdaten


## Kontext
Website der GalerieE in Plankstadt mit Schwerpunkt Otmar Alt.
