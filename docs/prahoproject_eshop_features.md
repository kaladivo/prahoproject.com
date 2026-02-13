# PRAHO! PROJECT - E-Shop Feature Specification (Detailed)

> Comprehensive e-shop analysis of prahoproject.com for migration/rewrite

---

## 1. E-SHOP LISTING PAGE

### 1.1 URLs
- **CZ**: `/e-shop/`
- **EN**: `/en/e-shop-2/`

### 1.2 Page Title
- H1: "E-shop" (purple `#4d2dff`)

### 1.3 Shipping Notice (EN only — NOT shown on CZ version)
- Italic H3 heading: "Shipping Information"
- Text: "Most of our merchandise is in Czech language (with the exception of compliment cards), and we currently ship only within the Czech Republic and Slovakia."
- Contact for international shipping: `objednavky@prahoproject.cz`
- Link to contact form

### 1.4 Product Grid
- **Layout**: 3-column grid on desktop
- **10 products total**, displayed in a single page (no pagination)
- No filtering, no sorting, no search on the listing page
- No product categories displayed on listing (categories exist but are only visible on detail pages)

### 1.5 Product Card Components
Each card contains:
- **Product image** (square thumbnail, hover triggers overlay with action button)
- **Product name** (H5, linked to detail page)
- **Price display**:
  - Simple: `899,00 Kč`
  - Range: `350,00 Kč – 750,00 Kč`
  - Sale: ~~`2899,00 Kč`~~ `2500,00 Kč` (strikethrough original + new price)
- **"SLEVA" / "Sale" badge** overlay (top-right corner, for discounted items)
- **Action button** (visible on image hover):
  - `Přidat do košíku` / `Add to basket` — simple products (adds directly via AJAX `?add-to-cart={id}`)
  - `Výběr možností` / `Select options` — variable products (links to detail page)
  - `Čtěte více` / `Read more` — bundle/grouped products (links to detail page)

---

## 2. PRODUCT CATALOG

### 2.1 Complete Product List

| # | Product (CZ) | Product (EN) | Slug (CZ) | Slug (EN) | Type | Price (Kč) | Categories |
|---|-------------|-------------|-----------|-----------|------|-----------|------------|
| 1 | Set: Ponožky & Interaktivní hra | Set: Socks & Interactive Game | `set-ponozky-interaktivni-hra` | `set-socks-interactive-game` | Variable | 1,000 | Hry, Oblečení |
| 2 | Ponožky Kam kráčíš? | Socks Where Are You Heading? | `ponozky-kam-kracis` | `socks-where-are-you-walking` | Variable | 350–750 | Oblečení |
| 3 | Interaktivní hra A co teď? | Interactive game And what now? | `interaktivni-hra` | `interactive-game-and-what-now` | Simple | 899 | Hry |
| 4 | PRAHO! kompletní edice & Interaktivní hra A co teď? | PRAHO! complete edition & interactive game And what now? | `publikace-hra` | `praho-complete-edition-interactive-game-and-what-now` | Simple | ~~2,899~~ **2,500** | Hry, Publikace |
| 5 | Komplimentky Chci Ti říct! | Compliment cards I want you to know | `komplimentky` | `compliment-cards-i-want-you-to-know` | Variable | 0–1,790 | Komplimentky |
| 6 | PRAHO! kompletní edice | PRAHO! complete edition | `kompletni-edice` | `praho-complete-edition` | Simple | ~~1,996~~ **1,850** | Publikace |
| 7 | Publikace PRAHO! 1/4 – jaro | Publication PRAHO! 1/4 – spring | `publikace1` | `publication-praho-1-4-spring` | Simple | 499 | Publikace |
| 8 | Publikace PRAHO! 2/4 – léto | Publication PRAHO! 2/4 – summer | `publikace2` | `publication-praho-2-4-summer` | Simple | 499 | Publikace |
| 9 | Publikace PRAHO! 3/4 – podzim | Publication PRAHO! 3/4 – autumn | `publikace3` | `publication-praho-3-4-autumn` | Simple | 499 | Publikace |
| 10 | Publikace PRAHO! 4/4 – zima | Publication PRAHO! 4/4 – winter | `publikace4` | `publication-praho-4-4-winter` | Simple | 499 | Publikace |

### 2.2 Product Categories (WooCommerce taxonomy)

| Category Slug (CZ) | Category Name (CZ) | Category Name (EN) |
|--------------------|--------------------|-------------------|
| `hry-cs` | Hry | Games |
| `obleceni` | Oblečení | Clothing |
| `komplimentky-cs` | Komplimentky | Compliment Cards |
| `publikace-cs` | Publikace | Publications |

### 2.3 URL Structure
- **CZ product detail**: `/produkt/{slug}/`
- **EN product detail**: `/en/produkt/{slug}/`
- **CZ category**: `/product-category/{slug}/`

---

## 3. PRODUCT TYPES & VARIANTS

### 3.1 Simple Products (6 products)
Direct "Add to basket" on listing and detail page. No variant selection needed.
- Interaktivní hra (899 Kč)
- PRAHO! kompletní edice & hra (2,500 Kč — on sale from 2,899)
- PRAHO! kompletní edice (1,850 Kč — on sale from 1,996)
- 4x Publikace 1/4-4/4 (each 499 Kč)

### 3.2 Variable Products (3 products)

#### Ponožky Kam kráčíš? (Socks)
Two variant axes:
- **Počet párů** (Number of pairs): `1 pár`, `2 páry`, `3 páry`
- **Velikost** (Size): `36-40`, `41-46`

Price depends on pair count:
- 1 pair: 350 Kč
- 2 pairs: 550 Kč (estimated from range)
- 3 pairs: 750 Kč

Uses Select2 dropdown UI. Both must be selected before adding to cart.
"Vyčistit" (Clear) link appears after selection.
SKU displayed as "Katalogové číslo: -" (dynamic per variant).

#### Komplimentky Chci Ti říct! (Compliment Cards)
Two variant axes:
- **Množství kusů** (Quantity of pieces): `50 kusů`, `100 kusů`, `200 kusů`, `300 kusů`, `500 kusů`, `1000 kusů`
- **Komplimentky** (Type): `Předvybraný mix komplimentek` (Pre-selected mix), `Komplimentky na míru` (Custom)

Price range: 0 Kč – 1,790 Kč (varies by quantity and type).
Note: 0 Kč indicates some variants may be free or price-on-request.

#### Set: Ponožky & Interaktivní hra (Bundle)
One variant axis:
- **Velikost ponožek** (Sock size): `36-40`, `41-46` (implied from sock product)

Fixed price: 1,000 Kč regardless of size.
Includes: 1 interactive game + 1 pair of socks.

### 3.3 Variant UI Pattern
- Uses **Select2** dropdown components (custom styled)
- Dropdowns show "Vyberte možnost" (Select option) as default placeholder
- After selection, a "Vyčistit" / "Clear" link appears to reset choices
- Price updates dynamically when variant is selected
- "Add to basket" button is always visible but requires variant selection

---

## 4. PRODUCT DETAIL PAGE

### 4.1 Layout
Two-column layout:
- **Left**: Image gallery (thumbnails + main image)
- **Right**: Product info, price, variants, add to cart

### 4.2 Image Gallery
- **Main image**: Large, clickable (opens full-size in lightbox)
- **Thumbnail strip**: 3-4 thumbnails on the left side, vertically stacked
- All images are clickable links to full-resolution JPGs
- Images hosted at: `wp-content/uploads/YYYY/MM/filename-scaled.jpg`

### 4.3 Product Info Section
- **H1**: Product name
- **Price**: Displayed with `Kč` suffix, formatted as `X,XX Kč` (comma decimal separator)
- **Short description**: Bullet list of key features + additional paragraphs
- **Special notices**: e.g., "Dárek při vyzvednutí v Atrium Žižkov" (gift with Atrium pickup) — separated by horizontal rule
- **Quantity selector**: `-` / `+` buttons with text input (default: 1), label "Množství"
- **Add to cart button**: `Přidat do košíku` / `Add to basket` — black background, white text
- **SKU**: Displayed as "Katalogové číslo: {SKU}" (e.g., "22712" for the game)
- **Category links**: "Kategorie: {category}" with linked category names, comma-separated for multiple

### 4.4 Tabs Section (below product info)
Two tabs:
1. **Popis / Description** (default selected):
   - Multiple paragraphs of rich text content
   - Can include H6 headings, paragraphs, emphasis, links
   - Content varies significantly per product
2. **Další informace / Additional Information**:
   - Table layout with "Product Details" heading
   - Fields: Hmotnost (Weight), Rozměry (Dimensions)
   - Example: Weight: 0,3 kg, Dimensions: 11,5 × 11,5 × 4,5 cm
   - Not all products have this data

### 4.5 Related Products Section
- H2: "Související produkty" / "Related products"
- Shows 2-3 related product cards (same card format as listing page)
- Cards include: image, title (H5), category links, price, action button
- Hover effect reveals "Add to basket" or "Select options" overlay

### 4.6 Product-Specific Content Examples

#### Interaktivní hra (Game) — Simple product
- 4 gallery images
- Bullet list: 52 cards, 12 artifacts, cultural discounts, graphic design credit, instructions
- Special section: Free compliment cards when picking up at Atrium Žižkov
- Shipping note: ships anywhere in CZ and SK
- Category: Hry
- Weight: 0.3 kg, Dimensions: 11.5 × 11.5 × 4.5 cm

#### Ponožky (Socks) — Variable product
- 4 gallery images
- Bullet list: original design, cotton material, Czech manufacturing (Ferdinand brand), graphic design credit, unisex
- Cross-link to bundle product
- In-description section: composition (80% cotton, 15% polyamide, 5% elastan), collaboration credit, origin
- Category: Oblečení

#### Komplimentky (Compliment Cards) — Variable product
- 4 gallery images
- Variant descriptions in product text
- Contact email for questions: `objednavky@prahoproject.cz`
- Link to contact form
- Category: Komplimentky
- No related products section visible

#### Set: Ponožky & Hra (Bundle) — Variable product
- 4 gallery images
- Combined description listing both game and socks features
- "Další informace" section embedded in Description tab (not in separate tab) with specs for both items
- External link to Ferdinand brand
- Categories: Hry, Oblečení

---

## 5. MINI-CART (Header Widget)

### 5.1 Trigger
- "Košík 0" / "Cart 0" button in header navigation (right side)
- Number updates dynamically when items are added (AJAX)

### 5.2 Empty State
- Single list item: "Žádné produkty v košíku." / "No products in the cart."

### 5.3 With Items
- **Item list**: Each item shows:
  - Product thumbnail image (linked to product)
  - Product name (H5, linked to product)
  - "Množství: {N}" / "Quantity: {N}"
  - Price
  - Remove button (× icon, links to `cart/?remove_item={hash}&_wpnonce={token}`)
- **Order total**: "Celkem:" / "Order Total:" + price
- **CTA button**: "PROHLÉDNOUT SI KOŠÍK" / "VIEW BAG & CHECKOUT" → links to `/cart/`

---

## 6. CART PAGE (`/cart/`)

### 6.1 Page Title
- H1: "Košík" / "Cart"
- Page title in browser: "KOŠÍK - PRAHO! project"

### 6.2 Empty State
- Message: "Váš košík je prázdný" (Your cart is empty)
- Button: "Zpět do obchodu" (Back to shop) → `/e-shop/`

### 6.3 Cart Table
- **Columns**: Odstranit položku (Remove) | Náhled (Thumbnail) | Produkt (Product) | Cena (Price) | Počet (Quantity) | Mezisoučet (Subtotal)
- **Remove**: × link per item (with nonce-protected URL)
- **Thumbnail**: Small product image, linked to product page
- **Product name**: Linked to product page
- **Price**: Per-unit price
- **Quantity**: `- / input / +` selector (same as product detail page)
- **Subtotal**: Line total

### 6.4 Coupon Section
- Text input with placeholder "Kód kuponu" (Coupon code)
- "Použít kupon" (Apply coupon) button
- "Aktualizovat košík" (Update cart) button (disabled until changes are made)

### 6.5 Cart Totals ("Celkem k platbě")
H2 heading + table:
- **Mezisoučet** (Subtotal): product total
- **Doprava** (Shipping): Radio button selection (see section 7)
- **Cena celkem** (Total): Final amount including shipping
- **CTA**: "Přejít k pokladně" (Proceed to checkout) → `/checkout/`

---

## 7. SHIPPING OPTIONS

### 7.1 Available Methods (as of Feb 2026)

| Method | Price | Notes |
|--------|-------|-------|
| **Vyzvednutí na místě — Kafe Atrium** | Free | In-person pickup at Atrium Žižkov cafe |
| **Vyzvednutí na místě — Kafe v Klidu** | Free | In-person pickup at Kafe v Klidu |
| **POP-UP: 14. února '26 — místo bude přesněno** | Free (assumed) | Event-based pickup, date-specific |
| **Zásilkovna CZ — doručení na výdejnu** | 89 Kč | Zásilkovna (Packeta) pickup point delivery |
| **Zásilkovna CZ — doručení domů** | 109 Kč | Zásilkovna (Packeta) home delivery |

### 7.2 Shipping UI
- Radio button list in cart totals section
- Default: first option selected (Kafe Atrium pickup)
- Note: "Možnosti přepravy budou aktualizovány na stránce pokladny" (Shipping options will be updated on checkout page)
- "Spočítat poštovné" (Calculate shipping) button
- Shipping options are duplicated on the checkout page

### 7.3 Shipping Notes
- CZ and SK only (standard)
- International shipping: email `objednavky@prahoproject.cz`
- Delivery time: 2-5 working days
- Pickup locations are dynamic (can change over time — POP-UP events, seasonal cafes)

---

## 8. CHECKOUT PAGE (`/checkout/`)

### 8.1 Page Title
- H1: "Platba" / (no EN equivalent observed)
- Browser title: "PLATBA - PRAHO! project"

### 8.2 Coupon Section
- Collapsible: "Máte kupon? Klikněte zde a zadejte Váš kód"
- Expandable text input + apply button

### 8.3 Billing Details Form ("Fakturační údaje")

| Field | Label (CZ) | Required | Type |
|-------|-----------|----------|------|
| First name | Křestní jméno | Yes | text |
| Last name | Příjmení | Yes | text |
| Company | Název firmy (volitelný) | No | text |
| Country | Země / Region | Yes | Select2 dropdown (default: Česká republika) |
| Street | Ulice a č.p. | Yes | text (placeholder: "Číslo domu a název ulice") |
| Address line 2 | Např. číslo vchodu, firma, patro... | No | text |
| City | Město | Yes | text |
| Postcode | PSČ | Yes | text |
| Phone | Telefon | Yes | tel |
| Email | E-mailová adresa | Yes | email |

### 8.4 Shipping Address
- Checkbox: "Doručit na jinou adresu?" (Ship to a different address?)
- When checked: reveals duplicate address fields
- Default: unchecked (same as billing)

### 8.5 Order Notes
- Textarea: "Poznámky k objednávce (volitelný)"
- Placeholder: "Poznámky k Vaší objednávce, např. speciální požadavky na doručení."

### 8.6 Order Summary ("Vaše objednávka")
- Table: Produkt | Mezisoučet
- Line items: "{Product name} × {quantity}" | price
- Mezisoučet (Subtotal)
- Doprava (Shipping) — same radio buttons as cart
- Cena celkem (Total)

### 8.7 Payment Methods

| Method | Label | Details |
|--------|-------|---------|
| **Card** | Card | Stripe integration, shows Visa/Mastercard/Amex/+3 logos |
| **Bank transfer** | Bankovním převodem | Czech bank transfer |

- Default: Card (Stripe) selected
- Radio buttons to switch

### 8.8 Terms & Submit
- **Mandatory checkbox**: "Přečetl/a jsem si obchodní podmínky a souhlasím s nimi *"
  - Links to `/vseobecne-obchodni-podminky/`
- **Submit button**: "Odeslat objednávku" (Place order)
  - Black background, white uppercase text

---

## 9. PAYMENT INTEGRATION

### 9.1 Stripe
- Card payment via Stripe Elements
- Supported cards: Visa, Mastercard, American Express, +3 more
- Inline card form in checkout (within the "Card" payment option)
- Secure payment processing

### 9.2 Bank Transfer
- Czech bank account: `325452806/0300` (ČSOB)
- Details likely sent via order confirmation email
- Manual payment confirmation required

---

## 10. E-COMMERCE TERMS & POLICIES

### 10.1 Terms & Conditions (Accordion-style page)
URL: `/vseobecne-obchodni-podminky/` | EN: `/en/terms-and-conditions/`

Sections (expandable tabs):
1. **Objednávka a uzavření smlouvy** (Order & contract)
   - Order via shopping cart
   - Contract forms on order confirmation email
   - Seller can reject orders (unavailability, technical error, abuse)
2. **Cena a platební podmínky** (Price & payment)
   - All prices include DPH (VAT)
   - Payment methods: Stripe online card, cash/card at pickup
   - Seller is a VAT payer
3. **Dodání zboží** (Delivery)
   - Delivered to address in order
   - Standard dispatch: 2-5 business days
   - Risk transfers to buyer on receipt from carrier
4. **Odstoupení od smlouvy** (Withdrawal)
   - 14-day withdrawal period from receipt
   - Email notice to `objednavky@prahoproject.cz` with: name, order number, product name, receipt date
   - Return goods undamaged and complete
   - Refund within 14 days of returned goods receipt, same payment method
5. **Reklamace** (Complaints/warranty)
   - 24-month warranty, resolution within 30 days
6. **Ochrana osobních údajů** (Data protection)
7. **Kontakty** (Contacts)
8. **Závěrečná ustanovení** (Final provisions)

Effective: December 11, 2025

### 10.2 Seller Entity
- Name: PRAHO! project, z.s.
- IČO: 19347197
- Registered address: Korunní 2569/108, Vinohrady, 101 00 Praha 10
- Orders email: `objednavky@prahoproject.cz`

---

## 11. INTERNATIONALIZATION (E-Shop Specific)

### 11.1 Bilingual Product Pages
- Each product exists in CZ and EN versions with separate WooCommerce product IDs
- CZ and EN products have **different WooCommerce IDs** (e.g., game CZ: 18672, game EN: 22712)
- Language switcher in nav bar links to the translated product
- Currency is always CZK (Kč) regardless of language

### 11.2 UI String Translations

| CZ | EN |
|----|----|
| Přidat do košíku | Add to basket |
| Výběr možností | Select options |
| Čtěte více | Read more |
| Sleva | Sale |
| Košík | Cart |
| Mezisoučet | Subtotal |
| Cena celkem | Total |
| Množství | Quantity |
| Kategorie | Categories |
| Katalogové číslo | SKU |
| Související produkty | Related products |
| Popis | Description |
| Další informace | Additional information |
| Hmotnost | Weight |
| Rozměry | Dimensions |
| Přejít k pokladně | Proceed to checkout |
| Odeslat objednávku | Place order |
| Použít kupon | Apply coupon |
| Aktualizovat košík | Update cart |
| Fakturační údaje | Billing details |
| Vaše objednávka | Your order |
| Vyzvednutí na místě | In-store pickup |
| Doručení na výdejnu | Pickup point delivery |
| Doručení domů | Home delivery |
| Bankovním převodem | Bank transfer |
| Žádné produkty v košíku | No products in the cart |
| Prohlédnout si košík | View bag & checkout |

### 11.3 Differences Between CZ and EN Listing Pages
- **CZ**: No shipping notice, products displayed directly
- **EN**: Has italic "Shipping Information" notice at top with contact email for international orders
- **EN Compliment cards**: Shows only "0,00 Kč" (not full range) — possible translation/display bug

---

## 12. DESIGN & STYLING DETAILS

### 12.1 Product Card Styling
- White background, no card borders
- Image: square aspect ratio
- Product name: H5, monospace/uppercase font with letter-spacing
- Price: monospace font, comma decimal, "Kč" suffix
- Sale price: original in `<del>` (strikethrough), new in `<ins>`
- "SLEVA"/"Sale" badge: small black rectangle, top-right of image

### 12.2 Product Detail Styling
- Image gallery: thumbnails on left, main image larger
- Product info: right column
- Price: larger font
- Quantity selector: custom `- / + ` buttons flanking text input
- Add to cart: full-width black button, white uppercase text
- Tabs: horizontal tab bar, underline on active tab
- Tab content: centered text alignment

### 12.3 Cart/Checkout Styling
- Standard WooCommerce table layout
- Black submit buttons with white uppercase text
- Form fields: bottom-border only (no full borders)
- Select2 dropdowns for country selection and variant selection
- Radio buttons for shipping options

---

## 13. TECHNICAL DETAILS FOR REWRITE

### 13.1 WooCommerce Features to Replicate
- Simple products with direct add-to-cart (AJAX)
- Variable products with multiple attribute axes
- Sale pricing (original/discounted display)
- Product image galleries with lightbox
- Product categories/taxonomy
- Related products engine
- Cart with quantity editing, coupon codes
- Multi-step checkout (billing → shipping selection → payment → place order)
- Mini-cart widget in header (updates via AJAX)
- SKU display
- Weight/dimensions display

### 13.2 Third-Party Integrations (E-Shop Related)
- **Stripe**: Card payment processing
- **Zásilkovna (Packeta)**: Shipping provider with pickup point + home delivery
- **Select2**: Dropdown UI for variant selection and country picker
- **WooCommerce AJAX**: Add to cart, cart update, mini-cart refresh
- **reCAPTCHA v3**: Form protection (possibly on checkout)

### 13.3 Data Model Requirements

```
Product {
  id: number
  slug: string
  name: { cs: string, en: string }
  type: 'simple' | 'variable'
  price: number | null           // for simple products
  salePrice: number | null       // for sale items
  regularPrice: number | null    // original price before sale
  description: { cs: richText, en: richText }
  shortDescription: { cs: richText, en: richText }
  images: Image[]                // gallery images
  categories: Category[]
  sku: string | null
  weight: string | null          // e.g., "0,3 kg"
  dimensions: string | null      // e.g., "11,5 × 11,5 × 4,5 cm"
  attributes: Attribute[]        // for variable products
  variations: Variation[]        // for variable products
  relatedProducts: Product[]
  isOnSale: boolean
}

Attribute {
  name: { cs: string, en: string }   // e.g., "Počet párů" / "Number of pairs"
  slug: string                       // e.g., "pocet-paru"
  options: string[]                  // e.g., ["1 pár", "2 páry", "3 páry"]
}

Variation {
  id: number
  attributes: Record<string, string>  // e.g., { "pocet-paru": "1-par", "velikost": "36-40" }
  price: number
  sku: string | null
  inStock: boolean
}

Category {
  slug: string
  name: { cs: string, en: string }
}

CartItem {
  productId: number
  variationId: number | null
  selectedAttributes: Record<string, string>
  quantity: number
  unitPrice: number
  subtotal: number
}

Order {
  items: CartItem[]
  billing: BillingAddress
  shipping: ShippingAddress | null  // null = same as billing
  shippingMethod: ShippingMethod
  paymentMethod: 'stripe_card' | 'bank_transfer'
  couponCode: string | null
  notes: string | null
  termsAccepted: boolean
  subtotal: number
  shippingCost: number
  total: number
}

ShippingMethod {
  id: string
  label: { cs: string, en: string }
  price: number                    // 0 for free pickup
  type: 'pickup' | 'packeta_pickup' | 'packeta_home' | 'popup_event'
}

BillingAddress {
  firstName: string
  lastName: string
  company: string | null
  country: string                  // default: "CZ"
  street: string
  addressLine2: string | null
  city: string
  postcode: string
  phone: string
  email: string
}
```

### 13.4 Cart Behavior
- Add to cart via AJAX (no page reload on listing page)
- Mini-cart updates automatically on add
- Cart page supports quantity changes with "Update cart" button
- Remove items via × link
- Coupon code application
- Shipping method selection with price recalculation
- Persistent cart across pages (session/cookie-based)

### 13.5 Checkout Flow
1. (Optional) Enter coupon code
2. Fill billing details
3. (Optional) Check "Ship to different address" and fill shipping form
4. (Optional) Add order notes
5. Review order summary
6. Select shipping method (radio buttons)
7. Select payment method (Card via Stripe / Bank transfer)
8. Accept terms & conditions (mandatory checkbox)
9. Click "Odeslat objednávku" (Place order)
10. Stripe payment processing (if card selected)
11. Order confirmation page + email

### 13.6 Key Considerations for Rewrite
- **No user accounts**: Checkout is guest-only (no login/register flow observed)
- **No product reviews/ratings**: Not present on any product page
- **No wishlist**: Not implemented
- **No product search**: No search functionality on e-shop listing
- **No category filtering**: All products shown on one page
- **No sorting**: Fixed product order
- **No pagination**: All 10 products fit on one page
- **Dynamic pickup locations**: POP-UP events change over time, need admin management
- **Zásilkovna integration**: May need Packeta API for pickup point selection
- **Currency**: CZK only, formatted with comma decimal separator and "Kč" suffix
- **VAT**: All prices include DPH (VAT), seller is VAT payer
- **Separate product IDs per language**: CZ and EN are separate WooCommerce products, need careful i18n mapping
