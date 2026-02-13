# PRAHO! PROJECT - Website Feature Specification

> Comprehensive analysis of https://prahoproject.com for migration to Next.js + Vercel

---

## 1. GLOBAL ELEMENTS (Present on ALL pages)

### 1.1 Header / Navigation Bar

- **Logo**: `p!` stylized logo (available in 3 variants: standard, dark, light)
- **Sticky/fixed header** with background change on scroll
- **Primary Navigation** with dropdown submenus (hover-triggered):

| Menu Item | Type | Submenu Items |
|-----------|------|---------------|
| **Informace** | Dropdown | O projektu, Evropske projekty, O autorech, Partneri, Manifest, Napsali o nas, Oceneni a uznani, Blog (with sub-dropdown: Novinky, A co Ty?, Statistiky) |
| **Umelecke vystupy** | Dropdown | Realizace, Autorska tvorba |
| **E-shop** | Link | Links to e-shop page |
| **PODPOR NAS** | Highlighted Link | Links to donation page (purple text) |
| **Kontakt** | Dropdown | Pro Tebe, Pro media, O spolku, STOCKHOLM! project |
| **English** | Language Toggle | Switches to English version |

- **Shopping Cart Widget**: "Kosik 0" with mini-cart dropdown showing cart contents or "No products in cart"
- **Hamburger Menu** for mobile (3-line icon, right side)
- **Font**: Monospace/uppercase tracking for nav items

### 1.2 Footer

**Three-column layout on dark (#000) background:**

**Column 1 - Contact Info:**
- T: +420 724 005 615 (tel: link)
- E: ahoj@prahoproject.cz (mailto: link)
- A: H40, Bubenske nabrezi 306/13, Praha 7 (Google Maps link)

**Column 2 - Legal Links:**
- Zasady ochrany osobnich udaju (Privacy Policy)
- Pouzivani souboru cookies (Cookie Policy)
- Vseobecne obchodni podminky (Terms & Conditions)

**Column 3 - Newsletter:**
- "Newsletter" label
- Email input field with checkmark submit button
- Contact Form 7 (CF7) / WPForms integration

**Bottom Bar:**
- Left: "(c) 2026 PRAHO! PROJECT. ALL RIGHTS RESERVED." with link to prahoproject.cz
- Right: Social media icons (Instagram, Facebook, LinkedIn, YouTube)

### 1.3 Cookie Consent Banner

- **Bilingual** (Czech + English)
- Heading: "Vase soukromi je pro nas dulezite."
- Three buttons: "Prizpusobit ~ Customize", "Odmitnout ~ Decline", "Prijmout vse ~ Accept all"
- Close button (X)

### 1.4 Newsletter Popup (Ecomail Widget)

- Triggered after cookie acceptance
- Heading: "Skrze umeni a otevrenost vytvarime prostor pro sdileni."
- Fields: First name, Email
- Submit button: "Objevovat krasu (ne)vsednosti"
- Privacy policy link
- Close button
- Desktop display disabled (mobile only based on logs)

### 1.5 reCAPTCHA

- Google reCAPTCHA v3 badge in bottom-right corner
- Used for form protection

### 1.6 Design System

- **Primary Color**: `#4d2dff` (purple/violet) - used for accent text, links, highlights
- **Background**: White (#fff) for content, Black (#000) for footer
- **Typography**: Monospace fonts (Inconsolata-like), Montserrat for headings
- **Text Transform**: Uppercase with wide letter-spacing for subtitles and nav
- **Layout**: Clean, minimal, lots of white space
- **Image Style**: Black & white photography mixed with color, artistic/documentary feel

---

## 2. PAGES - DETAILED BREAKDOWN

### 2.1 HOME PAGE (`/`)

**URL (CZ)**: `/` | **URL (EN)**: `/en/english/`

**Hero Section:**
- Full-viewport slider/animation
- Large artistic illustration: Blue/purple gradient blob with white outline of Prague map/river
- Overlaid text: "Skrze umeni a uprimna slova navracime mistum jejich lidskost." (Through art and sincere words we return humanity to places.)
- "PRAHO! PROJECT" link to `/o-projektu/`
- Animated/interactive background element
- "PRAHO!" label floating on the right side

**Layout**: Single-page with hero taking full viewport + footer below.

---

### 2.2 O PROJEKTU - About the Project (`/o-projektu/`)

**URL (CZ)**: `/o-projektu/` | **URL (EN)**: `/en/about-the-project/`

**Layout**: Long-form content page with alternating left/right aligned sections.

**Sections:**

1. **Page Title**: "O projektu" (large heading, purple)

2. **Vznik projektu (Project Origin)** - 2021-2024
   - H4 heading + H6 subtitle
   - Two paragraphs about project founding in October '21
   - Details about stickers, posters, billboards, art installations with QR codes
   - Stats: 30,000+ testimonials collected

3. **Zakladni pilire (Fundamental Pillars)** - right-aligned heading
   - H4 + H6 "Fundamentalni idea"
   - Three core aspects of the project

4. **Umelecke vystupy (Artistic Outputs)** - left-aligned
   - H4 + H6 "Kombinace ruznych formatu"
   - Multiple paragraphs with inline links to specific realizations:
     - Ctyrldilna PRAHO! publikace
     - Zmeny (underground passage)
     - Queer All Year
     - We Should Have a Talk
     - Mas cas? (Kacerov metro station)
     - A co ted? (interactive game)
     - Crossroads (KCP)
   - Link to all realizations

5. **E-shop** - right-aligned
   - H4 + H6 "Kousek PRAHO! pro Tebe"
   - Description paragraph
   - CTA button: "Najdu si neco pro sebe!" -> `/e-shop/`

6. **Smerovani projektu (Project Direction)** - left-aligned
   - H4 + H6 "Pokracovani pribehu"
   - Future plans paragraph

7. **Podpora nasi prace (Support Our Work)** - right-aligned
   - H4 + H6 "Jak nase prace pokracuje"
   - Nonprofit description
   - CTA button: "PODPORIT PRAHO! PROJECT" -> `/podpor-nas`

**Sidebar**: Complementary (empty/minimal)

---

### 2.3 EVROPSKE PROJEKTY - European Projects (`/evropske-projekty/`)

**URL (CZ)**: `/evropske-projekty/` | **URL (EN)**: `/en/european-projects/`

**Layout**: Long-scroll single-column page with multiple sub-sections, image gallery grid, partner logos, and EU project documentation.

**Section 1: O nas (About Us)**
- Heading: "Umeni jako nastroj participace, rovnosti a dialogu"
- Describes expansion since 2025 through grants and partnerships
- Sister organization: STOCKHOLM! project (Sweden)
- Bilingual operations (Czech/English)
- Practical info: PIC: 886696789, OID: E10337581, EU portal profile link, downloadable Partner Info Form

**Section 2: Vizualni reference (Visual References)**
- Image gallery: Grid of 13 photographs showing workshops, interventions, collaborative activities (3-column grid)

**Section 3: Partners**
- References complete partner list on /partneri/

**Section 4: Memberships**
- ENCC (European Network of Cultural Centres)
- CAE (Culture Action Europe)

**Section 5: Aktualni projekty (Current Projects)**
- "Art & Design Without Borders: Creative Synergies Between Czech Republic and Sweden"
  - Program: Erasmus+ (KA210-ADU), Duration: 2025-2027 (18 months)
  - Partners: PRAHO! (coordinator), Subtopia (Sweden), STOCKHOLM! project, Studio P.A.N.K., Kollektivet Livet
  - Outputs: Participatory interventions, community methodology, shared digital tools

**Section 6: Pripravovane projekty (Upcoming Projects)**
- CERV, Horizon Europe, Creative Europe (CREA), Nordic Culture Fund, Czech National Grants
- Governance docs: Gender Equality Plan (PDF), Risk Management & Ethics Protocol (PDF)

**Section 7: Tym (Team)**
- Annamarie Cermakova (founder, Stockholm-based), Veronika Matejkova (co-founder, Prague-based)
- ~20 team members, external Strategic Commission
- Contact for EU projects: eu@prahoproject.cz

---

### 2.4 O AUTORECH - About the Authors (`/o-autorech/`)

**URL (CZ)**: `/o-autorech/` | **URL (EN)**: `/en/about-the-authors/`

**Layout**: Grid-based team showcase page (3-4 columns on desktop)

**Section 1: Recruitment Call**
- Heading: "Chces se stat soucasti naseho tymu?"
- Contact: ahoj@prahoproject.cz, +420 724 005 615
- Note: "Momentalne nejsou vypsane zadne open-cally" (no current open calls)

**Section 2: Team Member Grid (12 members)**
Each card: Square photo + name + Czech title/role, clickable to individual profile

| Name | Role |
|------|------|
| Annamarie | Zakladatelka & kreativni reditelka (Founder & Creative Director) |
| Klara | Obsahova dramaturgyne (Content Dramaturg) |
| Nina | Vizualni designerka (Visual Designer) |
| Jakub | Analytik & spravce webu (Analyst & Website Manager) |
| Veronika | Spoluzakladatelka & financni reditelka (Co-founder & Financial Director) |
| Ema | Vedouci marketingu & PR (Marketing & PR Lead) |
| Ema | Produkcni & projektova koordinatorka (Producer & Project Coordinator) |
| Magdalena | Spravkyne komunity (Community Manager) |
| Katerina | Spoluzakladatelka & vedouci HR (Co-founder & HR Lead) |
| Apolena | Vedouci produkce (Production Lead) |
| Kristina | Kuratorka realizaci (Curator of Implementations) |
| Beta | Produkcni & projektova koordinatorka (Producer & Project Coordinator) |

---

### 2.5 PARTNERI - Partners (`/partneri/`)

**URL (CZ)**: `/partneri/` | **URL (EN)**: `/en/partners/`

**Layout**: Logo grid page organized by partner category

**Institutional Partners** (logo grid with links):
- Magistrat (Prague City Hall), TSK, GHMP, Umeni pro mesto, IPR, Kreativni Praha

**Prague District Partners** (10 districts):
- Praha 1, 2, 3, 5, 7, 8, 9, 12, 17, 18

**International Partners**:
- Swedish Embassy (Prague), Netherlands Embassy (Prague)

**Strategic Partners**:
- ReKola (bike-sharing), Knihobudka (book exchange)

**Media Partners**:
- Czech Design

---

### 2.6 MANIFEST (`/manifest-2/`)

**URL (CZ)**: `/manifest-2/`

**Layout**: Elegant, text-focused page. No images. Vision statement + 5 core values with headings and paragraphs.

**Vision**: "Through art and sincere words, we restore humanity to places."

**Mission**: Creating spaces for sharing intimate thoughts and authentic feelings. Art as an accessible, natural part of city life.

**5 Core Values:**

| Value | Keywords | Description |
|-------|----------|-------------|
| **Kreativita** (Creativity) | Innovation, discovery, inspiration | New themes, techniques, playful/interactive/collective work |
| **Lidskost** (Humanity) | Community, connection, friendliness | Dialogues across differences, kindness, respect, openness |
| **Inkluze** (Inclusion) | Openness, diversity, accessibility | Art as shared process, physically/linguistically/mentally accessible |
| **Svoboda** (Freedom) | Innovation, liberation, autonomy | Creative freedom, flexible non-hierarchical structure |
| **Dlouhodobost** (Longevity) | Return, care, continuity | Sustainable projects, revisiting places, maintaining community relationships |

---

### 2.7 NAPSALI O NAS - Press (`/napsali-o-nas/`)

**URL (CZ)**: `/napsali-o-nas/` | **URL (EN)**: `/en/press/`

**Layout**: Text-based directory, alphabetical by publication. No images.

**Format**: Each entry: Publication name + date + article title (hyperlinked to original)

**Sample Media Mentions (alphabetical):**
- A2 Magazine, Aktualne.cz, Art 2 Friends, Blesk, CT Art, Czechdesign, Daily Coffee, Denik N, Earch.cz, Forbes, Heroine, iDnes, iList, Kultura 21, Metro, Mlada Fronta, Novinky Prahy 5, Prazsky denik, Refresher, TV Prima, UMPRUM, Vecerni Praha, Zeny.cz, and many more

**Key Themes**: Street poetry with QR codes, LGBTQ+ initiatives, public space revitalization, interactive art, community engagement

---

### 2.8 OCENENI A UZNANI - Awards (`/oceneni-a-uznani/`)

**URL (CZ)**: `/oceneni-a-uznani/`

**Layout**: Awards showcase with intro text + detailed award documentation

**Featured Award: Opera Pragensia 2025**
- Full name: Ceny hl. m. Prahy za architekturu a pamatkovou peci
- Category: Mayor's Prize of Prague 9 District
- Project: "Ozveny" (Echoes) installation in Park Zahradky, Prague 9
- Awarded by: Mgr. Tomas Portlik, Prague 9 Mayor
- Date: October 8, 2025, at Czech National Bank
- Jury citation: "Thoughtful, contemporary approach to public space connecting architecture, art, and community life"

**Downloadable Resources**: Award diploma (JPG), Press release (PDF)

---

### 2.9 NOVINKY - Blog/News (`/novinky/`)

**URL (CZ)**: `/novinky/`

**Layout**: Grid-based blog listing (appears to be 4-column on desktop)

**Article Card Components:**
- Featured image thumbnail (square, ~650x650px)
- Post title (clickable)
- Category tags below title (e.g., "Cestina", "Novinky", "Terapeuticke okenko")
- No visible date or author on listing page

**Sample Articles:**
1. "Vypovedi, ktere dostavaji tvar - Misky 'Rikam si'" (Jan 2026)
2. "Ctyri roky na ceste. A novy krok pred nami." (Oct 2025)
3. "Ceho si na Praze nejvic vazis?" (Oct 2025)
4. "Terapeuticke okenko: Umis ukazat svou zranitelnost?" (Aug 2025)
5. Workshop articles, product announcements, etc.

**Features:**
- Category filtering
- Pagination (if more than visible posts)
- Individual article detail pages

---

### 2.10 A CO TY? - Quiz Listing Page (`/a-co-ty/`)

**URL (CZ)**: `/a-co-ty/`

**Introduction:**
- Heading: "A co Ty? - Kvizy k zamysleni"
- Description: "Protoze radi klademe otazky a snazime se, abychom se obcas v tom kazdodennim shonu zastavili..." (Because we like to ask questions and try to occasionally pause in daily rush to reflect...)
- Format explanation: 5 multiple-choice questions + 1 open-ended per quiz
- Monthly delivery via email newsletter (Ecomail)
- Results published in Statistics section (`/statistiky-2/`)
- Access: via newsletter signup OR directly on the website

**Quiz Directory - 24 numbered quizzes as clickable links:**

| Quiz # | URL | URL Pattern |
|--------|-----|-------------|
| 1 | `/acoty1` | `acoty` + number |
| 2 | `/acoty2` | `acoty` + number |
| 3 | `/acoty3` | `acoty` + number |
| 4 | `/acoty4` | `acoty` + number |
| 5 | `/acoty5` | `acoty` + number |
| 6 | `/acoty6/` | `acoty` + number (trailing slash) |
| 7 | `/a-co-ty-7` | `a-co-ty-` + number |
| 8 | `/a-co-ty-8` | `a-co-ty-` + number |
| 9 | `/a-co-ty-9` | `a-co-ty-` + number |
| 10 | `/a-co-ty-10/` | `a-co-ty-` + number (trailing slash) |
| 11 | `/acoty11/` | `acoty` + number (trailing slash) |
| 12 | `/acoty12/` | `acoty` + number (trailing slash) |
| 13-24 | `/a-co-ty-13/` ... `/a-co-ty-24/` | `a-co-ty-` + number (trailing slash) |

**URL Pattern Issues:** Three different slug conventions used: `acoty{N}`, `acoty{N}/`, `a-co-ty-{N}/`. Should be normalized in migration.

---

### 2.10.1 INDIVIDUAL QUIZ PAGES (`/acoty1/` through `/a-co-ty-24/`)

**Layout**: Single-column conversational form page. Each quiz is a standalone interactive page built with **WPForms** (conversational form mode).

#### Page Structure

**1. Header Section:**
- Page title: "A co Ty? #{number}" (e.g., "A co Ty? #1")
- Subtitle: "Kvizy k zamysleni" (Quizzes for Reflection)
- Intro paragraph (same across all quizzes): Explains the monthly quiz concept, encourages self-reflection during daily routines, mentions newsletter access

**2. Conversational Form (WPForms):**
- **Progress indicator** at top: `"1/{N} - temer v cili! | almost there!"` where N = total number of form steps (varies per quiz: 5-8 steps)
- **Navigation**: Left/right arrow buttons (`<-` `->`) for stepping through questions one at a time
- **Form mode**: Conversational/one-question-at-a-time (NOT traditional form layout)

**3. Footer Section:**
- Standard site footer with contact info and legal links

#### Quiz Content Structure

Each quiz follows a consistent template with these sections in order:

**Section A: Multiple-Choice Questions (5-7 per quiz)**
- **Bilingual text**: Czech (primary) + English translation separated by `|` pipe character
- **Radio button answers**: 2-5 options per question, also bilingual
- **Question count varies**: Most quizzes have 5-6 MC questions, some (like #1, #2, #3) have 6-7
- **Question themes**: Deeply personal/philosophical - about self-reflection, relationships, values, happiness, creativity, community, identity

**Section B: Open-Ended Question (1 per quiz)**
- Single text input field (textarea)
- Bilingual prompt
- Examples: "Co nas spojuje?" (What connects us?), "V co doufas?" (What are you hoping for?), "Jak by se jmenoval parfem, ktery by Te dokonale vystihoval?" (What would your perfect perfume be named?)

**Section C: Demographic & Closing Fields (same across ALL quizzes)**
1. **Age category** (optional dropdown/radio):
   - "Pokud chces, uved, do jake vekove kategorie spadas. | If you want, indicate which age category you fall into."
   - Options: `mene nez 17` | `17-22` | `23-28` | `29-35` | `36-48` | `49 a vic`
2. **Happiness reflection** (open text):
   - "Citis se v tuto chvili stastne? Proc? | Do you feel happy at the moment? Why?"
3. **Newsletter opt-in** (checkbox):
   - "Chces zustat v kontaktu? | Do you want to stay in touch?"
4. **GDPR consent** (checkbox, mandatory):
   - "Souhlasim se zpracovanim osobnich udaju dle Zasad ochrany osobnich udaju. Moje vypoved muze byt anonymne pouzita pro statisticke a umelecke ucely PRAHO! project."
   - (I agree to data processing per Privacy Policy. My testimony may be anonymously used for statistical and artistic purposes of PRAHO! project.)
5. **Privacy policy link**: Links to `/zasady-ochrany-osobnich-udaju/`

**Section D: Submit**
- Button text: "ODESLAT | SEND"
- Loading spinner animation on submit
- Black background button, white text; hover: inverted (white bg, black text + border)

#### Sample Quiz Questions (by quiz number)

**Quiz #1** (7 MC + 1 open):
- "Mas nekdy potrebu vyresit vsechny problemy sveta?" (Do you sometimes want to solve all world problems?)
- "Povazujes se za kreativniho cloveka?" (Do you consider yourself creative?)
- "Jsi rad/a stredem pozornosti?" (Do you enjoy being in the spotlight?)
- "Mas oblibene misto ve verejnem prostoru?" (Do you have a favorite public place to sit?)
- "Chces nekdy zastavit cas?" (Do you sometimes wish you could stop time?)
- "Mas momentalne v zivote system?" (Is your life structured now?)
- Open: "Co nas spojuje?" (What makes us connected?)

**Quiz #5** (4 MC + 1 open):
- "Myslis, ze si clovek musi vsechno zaslouzit?" (Must we deserve things in life?)
- "O svych rozhodnutich: casto pochybuji" (I often doubt my decisions)
- "Kdy jsi naposledy vylezl/a na strom?" (When did you last climb a tree?)
- "Veris, ze toho praveho/tu pravou potkas, kdyz to nejmín cekas?" (Do you believe love comes when you least expect it?)
- Open: "Co Ti naposledy prislo nefer?" (What felt unfair recently?)

**Quiz #13** (5 MC + 1 open):
- "Ktere rocni obdobi nejvic odpovida Tvemu vnitrnimu svetu?" (Which season matches your inner world?)
- "Jsi spis clovek minulosti, pritomnosti, budoucnosti?" (Are you a person of past, present, or future?)
- "Jsi spis posluchac nebo vypravec?" (Listener or storyteller?)
- "Citis se byt soucasti nejake komunity?" (Do you feel part of a community?)
- "Je Ti komfortni byt jen tak v tichu?" (Are you comfortable in silence?)
- Open: "Jak by se jmenoval parfem, ktery by Te dokonale vystihoval?" (What would your perfect perfume be named?)

**Quiz #24** (5 MC + 1 open):
- "Nabiji Te vic samota nebo spolecnost?" (What recharges you: solitude or company?)
- "Dokazes byt na sebe hodny/a, i kdyz se Ti neco nepovede?" (Can you be kind to yourself when failing?)
- "Mas ted v zivote neco, co Ti dava smysl?" (Does something give your life meaning?)
- "Umis naslochat svemu telu?" (Can you listen to your body?)
- "Udelalo Ti dnes neco radost?" (Did anything make you happy today?)
- Open: "Co ma pro Tebe v zivote nejvetsi smysl?" (What gives life the greatest purpose for you?)

#### Answer Option Patterns

Multiple-choice answers follow several common patterns:

| Pattern | Options | Used In |
|---------|---------|---------|
| **4-point Likert** | Urcite ano / Spise ano / Spise ne / Urcite ne | Many quizzes |
| **Yes/No/Maybe** | Ano / Ne / Jak kdy (or similar) | Most quizzes |
| **Binary** | Ano / Ne | Some questions |
| **Spectrum** | 3-4 descriptive options specific to question | Most quizzes |
| **Emotional** | Options describe feelings/attitudes | Philosophical questions |

**Answer option count**: Ranges from 2 to 5 options per question. Most common: 3-4 options.

#### Form Technical Details

- **Form engine**: WPForms (WordPress plugin) in conversational mode
- **Form rendering**: Each question displayed one at a time with slide animation
- **Navigation**: Arrow buttons (`<-` `->`) for forward/back between questions
- **Validation**: Required fields enforced before allowing next step
- **Submission**: AJAX-based (no page reload), shows loading spinner
- **Styling**: Custom CSS with purple (#4d2dff) accent for radio buttons, checkboxes, and interactive elements
- **Radio buttons**: Custom styled - purple border, transparent background, purple dot when selected
- **Text inputs**: Bottom-border only styling (no top/left/right borders)
- **Font**: Montserrat family, 14px base size
- **Responsive**: Mobile-friendly conversational layout

#### Data Collection & Usage

- All responses collected for statistical analysis (displayed on `/statistiky-2/`)
- Responses may be anonymously used for artistic purposes (installations, publications)
- Age demographic data collected optionally
- Happiness tracking ("Citis se stastne?") appears on EVERY quiz - longitudinal sentiment data
- Newsletter opt-in for ongoing engagement
- GDPR-compliant with explicit consent checkbox

#### QR Code Distribution

- Quizzes are distributed via **QR codes on physical installations** (stickers, posters, billboards) placed in Prague's public spaces
- QR codes link directly to individual quiz URLs
- This is a core mechanic of the PRAHO! project: physical art installations -> QR scan -> digital quiz -> data collection -> statistics/art
- Over 30,000 testimonials collected through this mechanism

---

### 2.11 STATISTIKY - Statistics (`/statistiky-2/`)

**URL (CZ)**: `/statistiky-2/`

**Content:**
- Introduction paragraph explaining data collection methodology
- Note: "Individual graphs display answers in percentages"

**Data Visualizations:**
- **50+ survey questions** each with interactive chart
- Percentage-based response data with color-coded segments
- Categories: Personal/Emotional, Social/Community, Philosophical, Lifestyle

**Sample Questions:**
- "Do you ever return to places from your childhood?"
- "Do you feel safe in your city?"
- "Do you believe there is a soul in every place?"
- "Can you find joy in small things?"

**Technical**: Charts appear to be rendered via a table/chart plugin (Tablesome or similar)

---

### 2.12 REALIZACE - Portfolio/Installations (`/realizace/`)

**URL (CZ)**: `/realizace/` | **URL (EN)**: `/en/installations/`

**Layout**: Portfolio grid - 3 columns on desktop

**Introduction:**
- Page title: "Realizace" (purple heading)
- Italic notice about winter maintenance pause
- Explanation paragraph

**Portfolio Grid - 11 items:**

| # | Title | URL |
|---|-------|-----|
| 1 | CROSSROADS | `/portfolio-item/crossroads/` |
| 2 | MAS CAS? | `/portfolio-item/mas-cas/` |
| 3 | KAM KRACIS? | `/portfolio-item/kam-kracis/` |
| 4 | PRISTI STANICE | `/portfolio-item/pristi-stanice/` |
| 5 | OZVENY | `/portfolio-item/realizace-ozveny/` |
| 6 | WE SHOULD HAVE A TALK | `/portfolio-item/we-should-have-a-talk/` |
| 7 | MLUVME SPOLU! | `/portfolio-item/mluvme-spolu/` |
| 8 | QUEER ALL YEAR | `/portfolio-item/queer-all-year/` |
| 9 | ZMENY | `/portfolio-item/zmeny/` |
| 10 | DOTEKY PRAHY | `/portfolio-item/doteky-prahy/` |
| 11 | ANONYMNI INTIMITA | `/portfolio-item/anonymni-intimita/` |

**Card Components:**
- Large thumbnail image (hover effect)
- Title overlay on hover
- Category label "Realizace"
- Click links to detail page

**Category**: All tagged as `realizace-cs` portfolio category

---

### 2.13 PORTFOLIO ITEM DETAIL (e.g., `/portfolio-item/crossroads/`)

**Layout**: Single project detail page

**Sections:**
1. **Title + Subtitle**: H1 project name + H5 "Soucasna realizace" (Current realization)
2. **Description**: Multiple paragraphs of project description
3. **Image Gallery**: 2 rows of 3 images each (6 total), each clickable to full-size version (lightbox)
4. **Partners Section**: H4 "Partneri" with partner links
5. **Information Section**: H4 "Informace"
   - Name, Address details
   - Interactive content links (organized by category: Odkud?, Kudy?, Kam?)
   - Additional project information

**Each portfolio item has CZ and EN versions** (e.g., `/en/portfolio-item/crossroads-2/`)

---

### 2.14 AUTORSKA TVORBA - Author's Creations (`/autorska-tvorba`)

**URL (CZ)**: `/autorska-tvorba` | **URL (EN)**: similar pattern

**Layout**: Portfolio grid (same component as Realizace)

**Items (8):**
1. Interactive Game "A co ted?" (And What Now?)
2. PRAHO! Complete Edition & Interactive Game Bundle
3. "Chci ti rict" (I Want to Tell You) - Compliment cards
4. PRAHO! Complete Edition
5. PRAHO! 1/4 - Spring
6. PRAHO! 2/4 - Summer
7. PRAHO! 3/4 - Autumn
8. PRAHO! 4/4 - Winter

---

### 2.15 E-SHOP (`/e-shop/` CZ, `/en/e-shop-2/` EN)

**URL (CZ)**: `/e-shop/` | **URL (EN)**: `/en/e-shop-2/`

**Shipping Notice (italic heading):**
- "Most of our merchandise is in Czech language (with the exception of compliment cards), and we currently ship only within the Czech Republic and Slovakia."
- Contact email for international shipping: objednavky@prahoproject.cz
- Link to contact form

**Product Grid - 10 products (3 columns):**

| # | Product | Price | Features |
|---|---------|-------|----------|
| 1 | Set: Socks & Interactive Game | Variable | "Read more" (bundle) |
| 2 | Socks Where Are You Heading? | 350-750 Kc | "Select options" (size variants) |
| 3 | Interactive game And what now? | 899 Kc | "Add to basket" |
| 4 | PRAHO! complete edition & game | ~~2,899~~ **2,500 Kc** | SALE badge, "Add to basket" |
| 5 | Compliment cards I want you to know | 0 Kc | "Select options" (free/variable) |
| 6 | PRAHO! complete edition | ~~1,996~~ **1,850 Kc** | SALE badge, "Add to basket" |
| 7 | Publication PRAHO! 1/4 - spring | 499 Kc | "Add to basket" |
| 8 | Publication PRAHO! 2/4 - summer | 499 Kc | "Add to basket" |
| 9 | Publication PRAHO! 3/4 - autumn | 499 Kc | "Add to basket" |
| 10 | Publication PRAHO! 4/4 - winter | 499 Kc | "Add to basket" |

**Product Card Components:**
- Product image (square thumbnail)
- Product name (linked)
- Price display (supports sale/strikethrough pricing)
- "SALE" badge overlay
- Action button (Add to basket / Select options / Read more)
- Hover effects on images

**E-commerce Platform**: WooCommerce with Stripe payments

---

### 2.16 PRODUCT DETAIL PAGE (e.g., `/en/produkt/interactive-game-and-what-now/`)

**Layout**: Standard WooCommerce product page

**Elements:**
- Product image gallery (multiple angles)
- Product title
- Price: 899 Kc
- Quantity selector
- "Add to basket" button
- Product description (52 thematic cards in 4 categories + 12 artifacts)
- **Tabs**: Description, Additional Information (weight: 0.3 kg, dimensions: 11.5x11.5x4.5 cm)
- Product category: Games
- SKU: 22712
- Related products section (2 suggestions)
- Special pickup info (Atrium Zizkov, free compliment cards)

**Variable products** support size/option selection (e.g., socks have size variants)

---

### 2.17 SHOPPING CART (`/cart/`)

**Empty State:**
- Heading: "Kosik" (Cart)
- Message: "Vas kosik je prazdny" (Your cart is empty)
- Button: "Zpet do obchodu" (Back to shop)

**Features (WooCommerce standard):**
- Item quantity management
- Shipping calculation
- Coupon/discount code field
- Cart totals
- Proceed to checkout

---

### 2.18 PODPOR NAS - Support/Donate (`/podpor-nas/`)

**URL (CZ)**: `/podpor-nas/` | **URL (EN)**: `/en/support-us/`

**Layout**: Long-form page with inline donation form

**Section 1: Proc nas podporit (Why Support Us)**
- H4 heading
- Description of what donations enable:
  - Running the entire PRAHO! project
  - Supporting artists
  - Maintaining public space installations
  - Bringing art outside galleries
- CTA button: "Chci prispet!" (I want to contribute!) -> scrolls to #podpora

**Section 2: Jak nas muzes podporit (How You Can Support)**
- Description text
- **Multi-step Donation Form** with progress bar:
  - Step 1: "Zpusob financni podpory" (Method of financial support)
  - Step 2: "Osobni udaje" (Personal details)
  - Step 3: "Platba & shrnuti" (Payment & summary)

**Donation Form Details:**
- **Donation Type** (radio buttons):
  - "Pravidelny mesicni dar" (Regular monthly donation)
  - "Mimoradny dar" (One-time donation)
- **Amount Selection**:
  - Custom amount text input
  - 6 preset amounts with stylized typography/images:
    - 1,500 Kc
    - 1,250 Kc
    - 1,000 Kc
    - 750 Kc
    - 500 Kc
    - 250 Kc
  - Each preset has a radio button + decorative image
- Navigation arrow button to proceed

**Step 2 (hidden initially)**: Personal information fields - Name/Business name (required), Phone (required), Tax ID (optional), Email (required), Address (required)

**Step 3 (hidden initially)**: Payment via Stripe secure gateway, visibility option (publish name on transparent account or remain anonymous), total display, confirmation

**Section 3: Navracet s nami mestu jeho lidskost**
- "PRAHO! collective" explanation
- Mission description

**Section 4: Jeste vahas? (Still Hesitating?)**
- H4 heading
- "Write to us" prompt

**Section 5: Contact People (2-column)**
- **Karolina Loskotova** - Vedouci PRAHO! collective - karolina@prahoproject.cz (with photo)
- **Sara Polaharova** - Koordinatorka PRAHO! collective - sara@prahoproject.cz (with photo)

---

### 2.19 KONTAKT - Contact (`/kontakt`)

**URL (CZ)**: `/kontakt` | **URL (EN)**: `/en/contact/`

**Layout**: Two-column

**Left Column:**

1. **Page Title**: "Kontakt"
2. **Intro**: "Contact us via email, phone, or contact form. All inquiries handled within 24 hours."
   - Link to Instagram account for urgent matters
3. **Direct Contact** (H5):
   - T: +420 724 005 615
   - E: ahoj@prahoproject.cz
   - A: Hala 40, Bubenske nabrezi 306/13, Praha 7
4. **Organization Details** (H5 "Udaje o spolku"):
   - Nazev: PRAHO! project, z.s.
   - Druh spolecnosti: zapsany spolek
   - IC: 19347197
   - Sidlo: Korunni 2569/108, Praha 10
   - Bankovni spojeni: 325452806/0300
   - Datova schranka: 6d7k43a

**Right Column - Contact Form:**
- Fields: Jmeno (Name), E-mail, Zprava (Message)
- Submit button: "Odeslat"
- Contact Form 7 integration with reCAPTCHA

**Below: Team Contacts (3-column grid):**
- **Annamarie Cermakova** - Kreativni reditelka (Creative Director) - annamarie@prahoproject.cz
- **Veronika Matejkova** - Financni reditelka (Financial Director) - veronika@prahoproject.cz
- **Petra Sterbova** - Vedouci PR (PR Lead) - petra@prahoproject.cz

---

### 2.20 PRO MEDIA - For Media (`/pro-media/`)

**URL (CZ)**: `/pro-media/`

**Intro**: "Dekujeme, ze davate nasim slovum prostor!" (Thank you for giving our words space!)

**3 Media Contact Cards:**

| Name | Title | Email | Phone |
|------|-------|-------|-------|
| Annamarie Cermakova | Creative Director | annamarie@prahoproject.cz | +420 724 005 615 |
| Veronika Matejkova | Financial Director | veronika@prahoproject.cz | +420 723 640 642 |
| Petra Sterbova | PR Lead | petra@prahoproject.cz | +420 731 990 801 |

**Press Center:**
- Link to Google Drive with press releases, logos, and photographs
- Link to activity overview 2021-2025 (`/prehled-dosavadni-cinnosti/`)

---

### 2.21 O SPOLKU - About the Association (`/o-spolku/`)

**URL (CZ)**: `/o-spolku/` | **URL (EN)**: `/en/about-the-association/`

**Layout**: Document-heavy page with downloadable PDFs

**Section 1: Introduction**
- Description of transparent operation
- Promise of access to important documents

**Section 2: Pravni a strategicke dokumenty (Legal & Strategic Documents)**
- Grid of downloadable document cards (2 columns):

| Document | Last Updated | Format |
|----------|-------------|--------|
| Stanovy (Statutes) | December '25 | PDF |
| Memorandum o porozumeni (MoU) | February '26 (English) | PDF |
| Plan Genderove rovnosti (Gender Equality Plan) | October '25 | PDF |
| Protokol pro rizeni rizik a eticke standarty (Risk & Ethics Protocol) | October '25 | PDF |

**Each card has:** Icon/thumbnail + Title (linked) + Last updated date

**Section 3: Vyrocni zpravy (Annual Reports)**
- Description of annual reporting
- Link to: "Prehled dosavadni cinnosti" (Overview of activities) - 2021-2025

**Section 4: Valne hromady (General Assemblies)**
- Description of governance
- "Verejny zapis" (Public record) - Protocol from General Assembly 0 (PDF)

**Section 5: Poradni organ (Advisory Body)**
- **Tabbed interface** with 3 tabs:
  - "Zakladatelky" (Founders) - selected by default
  - "Exekutivni komise" (Executive Committee)
  - "Strategicka komise" (Strategic Committee)
- Founders tab content:
  - MgA. Annamarie Cermakova - hlavni zakladatelka, predsedkyne spolku
  - BcA. Veronika Matejkova - spoluzakladatelka
  - Mgr. Katerina Moric - spoluzakladatelka

---

### 2.22 STOCKHOLM! PROJECT (`/stockholm-project/`)

**URL (CZ)**: `/stockholm-project/`

**Content:**
- Origin story: Started in Stockholm in 2019 during Annamarie's studies at Stockholm University of the Arts
- Swedish Film Institute funding
- Evolution into PRAHO! project
- June 2025: Erasmus+ shared grant obtained
- STOCKHOLM! project established as sister nonprofit

**FAQ Section** with expandable questions:
1. Organizational structure (separate entities, shared values)
2. Why Stockholm
3. Collaborative projects (EU grants)
4. Operational differences
5. Participation opportunities

**Referenced Documents:** Memorandum of Understanding (English)

---

### 2.23 LEGAL PAGES

#### Privacy Policy (`/zasady-ochrany-osobnich-udaju/`)
- Full GDPR compliance document
- Data controller: PRAHO! project, z.s. (ICO: 19347197)
- Data categories: identification, creative submissions, technical, communication preferences
- Retention periods: 12 months (communication), 5 years (forms), until unsubscribe (newsletter), 10 years (accounting)
- User rights: access, correction, deletion, portability, objection
- Effective: December 11, 2025

#### Cookie Policy (`/pouzivani-souboru-cookies/`)
- Cookie types: Essential (always active), Analytical (optional), Marketing (optional)
- Cookie management: browser settings, cookie panel at page bottom
- Third-party processors: hosting providers, analytics (YesCookies)
- Effective: December 11, 2025

#### Terms & Conditions (`/vseobecne-obchodni-podminky/`)
- E-commerce terms for the shop
- Payment: Stripe (online cards), cash/card at pickup
- Delivery: 2-5 working days within CZ/SK
- Withdrawal: 14-day period, email to objednavky@prahoproject.cz
- Warranty: 24 months, resolution within 30 days
- Effective: December 11, 2025

---

## 3. INTERNATIONALIZATION (i18n)

### Language Support
- **Czech (primary)**: All pages at root URLs
- **English (secondary)**: All pages under `/en/` prefix

### URL Mapping (CZ -> EN)

| Czech URL | English URL |
|-----------|-------------|
| `/` | `/en/english/` |
| `/o-projektu/` | `/en/about-the-project/` |
| `/evropske-projekty/` | `/en/european-projects/` |
| `/o-autorech/` | `/en/about-the-authors/` |
| `/partneri/` | `/en/partners/` |
| `/e-shop/` | `/en/e-shop-2/` |
| `/podpor-nas/` | `/en/support-us/` |
| `/kontakt` | `/en/contact/` |
| `/realizace/` | `/en/installations/` |
| `/o-spolku/` | `/en/about-the-association/` |
| `/portfolio-item/crossroads/` | `/en/portfolio-item/crossroads-2/` |

### Language Switcher
- In navigation bar as the last menu item
- Shows "English" on Czech pages, "Cestina" on English pages
- Links directly to the translated version of the current page

---

## 4. E-COMMERCE FEATURES

### Platform
- **Current**: WooCommerce (WordPress)
- **Payment**: Stripe integration
- **Currency**: CZK (Kc)

### Product Types
1. **Simple products** - fixed price, direct "Add to basket" (e.g., publications, game)
2. **Variable products** - price range, "Select options" (e.g., socks with sizes)
3. **Bundle products** - combined items with "Read more" (e.g., Set: Socks & Game)
4. **Free/variable products** - 0 Kc with options (e.g., compliment cards)

### Product Features
- Sale pricing (strikethrough original + new price)
- SALE badge overlay
- Image galleries
- Weight and dimensions
- SKU numbers
- Category taxonomy
- Related products
- Add to cart with quantity selector

### Cart & Checkout
- Mini-cart in header (dropdown)
- Full cart page with quantity editing
- Shipping calculation
- Coupon/discount codes
- Stripe checkout integration

### Shipping
- Czech Republic and Slovakia only (standard)
- International shipping on request (email)
- Delivery: 2-5 working days

---

## 5. FORMS & INTERACTIVE ELEMENTS

### Contact Form (`/kontakt`)
- Fields: Name, Email, Message
- Submit button
- reCAPTCHA v3 protection
- CF7/WPForms integration

### Newsletter Signup (footer)
- Email field + submit
- CF7 integration

### Newsletter Popup (Ecomail)
- First name + Email fields
- Third-party: Ecomail widget (d70shl7vidtft.cloudfront.net)

### Donation Form (`/podpor-nas/`)
- Multi-step wizard (3 steps with progress bar)
- Radio buttons for donation type
- Custom amount input
- Preset amount cards with images
- Payment integration (likely Stripe or bank transfer)

### Quiz Pages (`/a-co-ty/`, `/acoty1`-`/a-co-ty-24/`)
- **Engine**: WPForms conversational form mode (one question at a time with slide transitions)
- **Per quiz**: 5-7 multiple-choice questions (bilingual CZ/EN) + 1 open-ended text question
- **Common closing fields on every quiz**: Age category (optional), happiness reflection (open text), newsletter opt-in (checkbox), GDPR consent (mandatory checkbox)
- **Navigation**: Arrow buttons for stepping through questions
- **Submit**: AJAX-based, no page reload, "ODESLAT | SEND" button
- **Data flow**: Responses -> Statistics page (`/statistiky-2/`) + artistic use (anonymized)
- **Distribution**: QR codes on physical installations in Prague public spaces link to individual quiz URLs
- **24 quizzes total** with inconsistent URL patterns (see section 2.10.1 for full details)

---

## 6. THIRD-PARTY INTEGRATIONS

| Service | Purpose |
|---------|---------|
| **Stripe** | Payment processing for e-shop |
| **Google Analytics** (GT-5D93S6L2) | Website analytics |
| **Facebook Pixel** | Social media tracking |
| **Google reCAPTCHA v3** | Form spam protection |
| **Ecomail** | Newsletter popup & email marketing |
| **WooCommerce** | E-commerce (to be replaced) |
| **Contact Form 7 / WPForms** | Form handling |
| **Revolution Slider** | Hero slider on homepage |
| **Google Maps** | Address linking |
| **YouTube** | Video embedding (channel: UCTGj65SICgA1aaojQzFjqbQ) |

---

## 7. TECHNICAL NOTES FOR MIGRATION

### Current Stack
- WordPress CMS
- WooCommerce e-commerce
- jQuery + jQuery Migrate 3.4.1
- Various WP plugins (WPForms, Tablesome, Revolution Slider)
- Ecomail widget (external script)

### SEO Considerations
- All pages have proper titles (format: "PAGE NAME - PRAHO! project")
- URL structure should be preserved for SEO
- Bilingual content (CZ/EN) with proper hreflang tags needed
- Meta descriptions and OG tags should be migrated

### Content Types to Model
1. **Pages** - Static content pages (About, Contact, Support, etc.)
2. **Portfolio Items** - Art installations/realizations with galleries
3. **Products** - E-commerce items with variants, pricing, images
4. **Blog Posts** - News articles with categories, featured images
5. **Quizzes** - Interactive survey/quiz pages (24 quizzes, each with 5-7 MC questions + open-ended, bilingual CZ/EN, WPForms conversational format, common closing fields: age/happiness/consent)
6. **Statistics** - Data visualization charts
7. **Legal Documents** - Policy pages (Privacy, Cookies, Terms)
8. **PDF Documents** - Downloadable files (statutes, reports, etc.)

### Special Interactive Pages
- **Quiz system** (`/acoty1`-`/a-co-ty-24/`) - 24 conversational forms, each needs:
  - Conversational form UI (one question at a time with slide transitions + arrow navigation)
  - Radio button questions with bilingual labels (CZ | EN pattern)
  - Open-ended text inputs
  - Common closing section: age category, happiness reflection, newsletter opt-in, GDPR consent
  - AJAX form submission with loading state
  - Data storage for statistical analysis and display on `/statistiky-2/`
  - URL normalization (3 different slug patterns currently: `acoty{N}`, `acoty{N}/`, `a-co-ty-{N}/`)
  - QR code generation for physical installations (each quiz has unique QR linking to its URL)
- **Statistics page** - needs chart rendering library (displays aggregated quiz response data)
- **Donation form** - multi-step wizard with payment integration
- **Homepage hero** - animated/interactive art element (blue blob with Prague map outline)

### Assets to Extract
- Logo variants (standard, dark, light)
- Social media icons (Instagram, Facebook, LinkedIn, YouTube)
- Product images (all e-shop items)
- Portfolio images (all realizations)
- Team member photos
- PDF documents (statutes, reports, MoU, etc.)
- Chart/graph data for statistics page

---

## 8. SITEMAP SUMMARY

```
/                                    # Homepage (CZ)
/o-projektu/                         # About the project
/evropske-projekty/                  # European projects
/o-autorech/                         # About the authors
/partneri/                           # Partners
/manifest-2/                         # Manifest
/napsali-o-nas/                      # Press / Written about us
/oceneni-a-uznani/                   # Awards
/novinky/                            # Blog / News listing
/a-co-ty/                            # Quiz listing page
/acoty1 ... /acoty5                  # Quiz pages 1-5 (no trailing slash)
/acoty6/                             # Quiz page 6 (trailing slash)
/a-co-ty-7 ... /a-co-ty-9           # Quiz pages 7-9 (different slug pattern)
/a-co-ty-10/                         # Quiz page 10
/acoty11/ ... /acoty12/              # Quiz pages 11-12 (back to acoty pattern)
/a-co-ty-13/ ... /a-co-ty-24/       # Quiz pages 13-24 (a-co-ty pattern)
/statistiky-2/                       # Statistics with charts
/realizace/                          # Portfolio: Installations
/autorska-tvorba                     # Portfolio: Author creations
/portfolio-item/crossroads/          # Portfolio detail (x11 items)
/portfolio-item/mas-cas/
/portfolio-item/kam-kracis/
/portfolio-item/pristi-stanice/
/portfolio-item/realizace-ozveny/
/portfolio-item/we-should-have-a-talk/
/portfolio-item/mluvme-spolu/
/portfolio-item/queer-all-year/
/portfolio-item/zmeny/
/portfolio-item/doteky-prahy/
/portfolio-item/anonymni-intimita/
/e-shop/                             # E-shop product listing
/en/e-shop-2/                        # E-shop (English)
/produkt/[slug]/                     # Product detail pages (x10)
/cart/                               # Shopping cart
/checkout/                           # Checkout (assumed)
/podpor-nas/                         # Support / Donate
/kontakt                             # Contact
/pro-media/                          # For media
/o-spolku/                           # About the association
/stockholm-project/                  # Stockholm sister project
/zasady-ochrany-osobnich-udaju/      # Privacy policy
/pouzivani-souboru-cookies/          # Cookie policy
/vseobecne-obchodni-podminky/        # Terms & conditions
/prehled-dosavadni-cinnosti/         # Activity overview
/en/english/                         # English homepage
/en/[equivalent-slugs]/              # All English versions
```

**Total estimated pages**: ~60-70 unique pages (including 24 quiz pages, 11+ portfolio items, 10 product pages, and all English equivalents)

---

## 9. KNOWN ISSUES / NOTES

- **Instagram URL typo**: Footer links to `https://instragram.com/prahoproject` (missing 'g' - should be `instagram.com`)
- **E-shop URL inconsistency**: Czech version at `/e-shop/`, English at `/en/e-shop-2/` (slug mismatch)
- **Mixed URL patterns**: Some pages use trailing slash, some don't (e.g., `/kontakt` vs `/novinky/`)
- **Quiz URL patterns**: Three distinct slug conventions used across 24 quizzes:
  - `/acoty1` through `/acoty5` (no trailing slash, compact slug)
  - `/acoty6/`, `/acoty11/`, `/acoty12/` (compact slug with trailing slash)
  - `/a-co-ty-7` through `/a-co-ty-9` (hyphenated slug, no trailing slash)
  - `/a-co-ty-10/` through `/a-co-ty-24/` (hyphenated slug with trailing slash)
  - Recommendation: Normalize all to `/a-co-ty-{N}/` pattern with redirects from old URLs
- **Quiz question count varies**: Most quizzes have 5 MC questions but some (#1, #2, #3) have 6-7, creating inconsistency with the "5 questions" description on the listing page
- **Quiz bilingual inconsistency**: Questions are bilingual (CZ | EN) but the listing page `/a-co-ty/` appears Czech-only
