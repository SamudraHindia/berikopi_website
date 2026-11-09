# Beri Kopi Jatinangor — Menu Extraction Report

**Extracted from:** `MENU MINUMAN.PNG` (beverage & refreshment) and `MENU MAKANAN.PNG` (main course, snack, roti & pisang).  
**Extraction date:** 9 November 2026  
**Data source of truth:** `src/data/menu.ts` — this report is generated from the same data.

## Total products

| Metric | Count |
| --- | ---: |
| Total products | **89** |
| Beverages (excl. Add On) | **37** |
| Add On | **6** |
| Food | **46** |
| Categories | **11** |

## Category breakdown

| Category | Products |
| --- | ---: |
| Special Beri Kopi | 5 |
| Seri Signature | 4 |
| Seri Matcha | 5 |
| Seri Creamy | 4 |
| Espresso Bar | 5 |
| Mocktail | 6 |
| Beri Non Kopi | 8 |
| Add On | 6 |
| Main Course | 15 |
| Snack | 17 |
| Roti & Pisang | 14 |

## Price mapping

Prices on the printed menu use the suffix **K**, e.g. `19K` = **Rp19.000**. All prices in `menu.ts` are stored as integer Rupiah values and rendered with `Intl.NumberFormat("id-ID")`.

- **R** = Regular / Reguler
- **L** = Large
- **Hot** = hot serve
- When a product has variants, `price` is the lowest/base price and the complete size list lives in `variants`.

## Extracted menu

### Special Beri Kopi (5)

| # | Product | Base price | Variants | Description on menu |
| ---: | --- | ---: | --- | --- |
| 1 | Beri Kopi | Rp19.000 | R Rp19.000 · L Rp23.000 | Es kopi susu gula aren special Beri. |
| 2 | Beri Hati | Rp19.000 | R Rp19.000 · L Rp23.000 | Es kopi susu dengan rasa butterscotch. |
| 3 | Beri Kehormatan | Rp19.000 | R Rp19.000 · L Rp23.000 | Es kopi susu dengan rasa caramel. |
| 4 | Beri Inspirasi | Rp19.000 | R Rp19.000 · L Rp23.000 | Es kopi susu dengan rasa vanila. |
| 5 | Beri Caramel Macchiato | Rp21.000 | R Rp21.000 · L Rp25.000 | — |

### Seri Signature (4)

| # | Product | Base price | Variants | Description on menu |
| ---: | --- | ---: | --- | --- |
| 1 | Coffee Creamy | Rp24.000 | R Rp24.000 · L Rp27.000 | Rasa kopi ringan, lembut, dan creamy. |
| 2 | Caramel Cheesecream | Rp24.000 | R Rp24.000 · L Rp27.000 | Rasa kopi intens, manis legit caramel, dan gurih creamy dari cheese cream. |
| 3 | Creamy Latte | Rp24.000 | R Rp24.000 · L Rp27.000 | Espresso, caramel cream, coconut sugar, custom milk. |
| 4 | Love Berry Much | Rp24.000 | R Rp24.000 · L Rp27.000 | Custom milk, espresso, special cream, banana flavour, strawberry, butterscotch. |

### Seri Matcha (5)

| # | Product | Base price | Variants | Description on menu |
| ---: | --- | ---: | --- | --- |
| 1 | Matcha Latte | Rp28.000 | R Rp28.000 · L Rp32.000 | — |
| 2 | Matcha Strawberry | Rp30.000 | R Rp30.000 · L Rp35.000 | — |
| 3 | Matcha Lemonade | Rp30.000 | R Rp30.000 · L Rp35.000 | — |
| 4 | Strawberry Matcha Presso | Rp30.000 | R Rp30.000 · L Rp35.000 | — |
| 5 | Matcha Cheese Cream | Rp30.000 | R Rp30.000 · L Rp35.000 | — |

### Seri Creamy (4)

| # | Product | Base price | Variants | Description on menu |
| ---: | --- | ---: | --- | --- |
| 1 | Beri Creamy | Rp22.000 | R Rp22.000 · L Rp26.000 | Special cream, yogurt, dan strawberry puree. |
| 2 | Mango Creamy | Rp22.000 | R Rp22.000 · L Rp26.000 | Special cream, yogurt, dan mango flavour. |
| 3 | Fortune Cookies | Rp22.000 | R Rp22.000 · L Rp26.000 | Special cream, yogurt, milk, strawberry puree, dan oreo di atasnya. |
| 4 | Choco Lava Cheesecream | Rp22.000 | R Rp22.000 · L Rp25.000 | Special cream, yogurt, milk, chocolate, strawberry puree, dan manis gurih dari cheese cream. |

### Espresso Bar (5)

| # | Product | Base price | Variants | Description on menu |
| ---: | --- | ---: | --- | --- |
| 1 | Espresso | Rp15.000 | — | — |
| 2 | Double Espresso | Rp16.000 | — | — |
| 3 | Americano | Rp16.000 | Hot Rp16.000 · R Rp18.000 · L Rp20.000 | — |
| 4 | Cappucino | Rp19.000 | Hot Rp19.000 · R Rp21.000 · L Rp24.000 | — |
| 5 | Caffe Latte | Rp19.000 | Hot Rp19.000 · R Rp21.000 · L Rp24.000 | — |

### Mocktail (6)

| # | Product | Base price | Variants | Description on menu |
| ---: | --- | ---: | --- | --- |
| 1 | Orange Wish | Rp22.000 | R Rp22.000 · L Rp26.000 | Espresso, lychee syrup, vanilla syrup, orange syrup. |
| 2 | Tropical Blizz | Rp22.000 | R Rp22.000 · L Rp26.000 | Orange syrup, lemon syrup, banana syrup, soursop syrup, lemongrass. |
| 3 | Triple Peach | Rp22.000 | R Rp22.000 · L Rp26.000 | Espresso, triple syrup, peach syrup. |
| 4 | Cold Brew Cheesecream | Rp22.000 | R Rp22.000 · L Rp26.000 | Cold brew coffee, lychee syrup, strawberry puree, special cheese cream. |
| 5 | Summer Cream Berry | Rp22.000 | R Rp22.000 · L Rp26.000 | Cold brew coffee, strawberry syrup, banana syrup, butterscotch syrup, special cheese cream. |
| 6 | Rose Berry | Rp22.000 | R Rp22.000 · L Rp26.000 | Strawberry puree, mojito mint syrup, rosella tea. |

### Beri Non Kopi (8)

| # | Product | Base price | Variants | Description on menu |
| ---: | --- | ---: | --- | --- |
| 1 | Beri Coklat | Rp18.000 | Hot Rp18.000 · R Rp20.000 · L Rp24.000 | — |
| 2 | Beri Red Velvet | Rp18.000 | Hot Rp18.000 · R Rp20.000 · L Rp24.000 | — |
| 3 | Sweet Bubble Gum | Rp20.000 | R Rp20.000 · L Rp24.000 | — |
| 4 | Jeruk Coco | Rp20.000 | R Rp20.000 · L Rp24.000 | — |
| 5 | Yakult Lychee | Rp19.000 | R Rp19.000 · L Rp22.000 | — |
| 6 | Jasmine Tea | Rp19.000 | R Rp19.000 · L Rp22.000 | — |
| 7 | Lychee Tea | Rp19.000 | R Rp19.000 · L Rp22.000 | — |
| 8 | Teh Beri Tetangga | Rp19.000 | R Rp19.000 · L Rp22.000 | — |

### Add On (6)

| # | Product | Base price | Variants | Description on menu |
| ---: | --- | ---: | --- | --- |
| 1 | Ice Cube | Rp5.000 | — | — |
| 2 | Espresso | Rp5.000 | — | — |
| 3 | Whipped Cream | Rp6.000 | — | — |
| 4 | All Syrup | Rp6.000 | — | — |
| 5 | Gula Aren | Rp6.000 | — | — |
| 6 | Air Mineral Botol | Rp8.000 | — | — |

### Main Course (15)

| # | Product | Base price | Variants | Description on menu |
| ---: | --- | ---: | --- | --- |
| 1 | Nasi Goreng Beri Dari Sini | Rp23.000 | — | — |
| 2 | Nasi Goreng Beri Dari Hongkong | Rp19.000 | — | — |
| 3 | Nasi Goreng Bakso Rempah Rendang | Rp23.000 | — | — |
| 4 | Nasi Ayam Geprek Sambal Matah + Telur | Rp25.000 | — | — |
| 5 | Nasi Ayam Geprek Sambal Bawang + Telur | Rp25.000 | — | — |
| 6 | Nasi Kulit Sambal Bawang + Telur | Rp25.000 | — | — |
| 7 | Spaghetti Aglio e Olio | Rp26.000 | — | — |
| 8 | Spaghetti Bolognese | Rp26.000 | — | — |
| 9 | Spaghetti Carbonara | Rp26.000 | — | — |
| 10 | Ricebowl Chicken Sambal Matah | Rp26.000 | — | — |
| 11 | Ricebowl Chicken Oriental | Rp27.000 | — | — |
| 12 | Ricebowl Chicken Salted Egg | Rp26.000 | — | — |
| 13 | Ricebowl Beef Saikoro | Rp36.000 | — | — |
| 14 | Fried Chicken Original | Rp18.000 | — | — |
| 15 | Fried Chicken Spicy | Rp19.000 | — | — |

### Snack (17)

| # | Product | Base price | Variants | Description on menu |
| ---: | --- | ---: | --- | --- |
| 1 | Beri Kentang | Rp16.000 | — | — |
| 2 | Beri Cireng | Rp15.000 | — | — |
| 3 | Beri Tahu Lada Garam | Rp18.000 | — | — |
| 4 | Beri Mix Platter | Rp28.000 | — | — |
| 5 | Beri Tempe | Rp15.000 | — | — |
| 6 | Tahu Gejrot | Rp16.000 | — | Ditulis "Tahu Gejrot" pada menu asli. |
| 7 | Batagor | Rp19.000 | — | — |
| 8 | Pempek | Rp20.000 | — | — |
| 9 | Siomay Udang | Rp25.000 | — | — |
| 10 | Siomay Ayam | Rp25.000 | — | — |
| 11 | Lumpia Kulit Tahu | Rp25.000 | — | — |
| 12 | Wonton Goreng | Rp25.000 | — | — |
| 13 | Chicken Finger | Rp16.000 | — | — |
| 14 | Crispy Chicken Skin | Rp18.000 | — | — |
| 15 | Cimol | Rp16.000 | — | — |
| 16 | Cuanki | Rp19.000 | — | — |
| 17 | Beri Pudding | Rp16.000 | — | — |

### Roti & Pisang (14)

| # | Product | Base price | Variants | Description on menu |
| ---: | --- | ---: | --- | --- |
| 1 | Beri Roti Cokelat | Rp19.000 | — | — |
| 2 | Beri Roti Keju | Rp19.000 | — | — |
| 3 | Beri Roti Strawberry | Rp19.000 | — | — |
| 4 | Beri Roti Tiramisu | Rp19.000 | — | — |
| 5 | Beri Roti Cokelat Keju | Rp21.000 | — | — |
| 6 | Pisang Cokelat | Rp18.000 | — | — |
| 7 | Pisang Keju | Rp18.000 | — | — |
| 8 | Pisang Strawberry | Rp18.000 | — | — |
| 9 | Pisang Tiramisu | Rp18.000 | — | — |
| 10 | Nasi Putih | Rp7.000 | — | — |
| 11 | Kerupuk | Rp4.000 | — | — |
| 12 | Scramble Egg / Telur (Dadar / Ceplok) | Rp5.000 | — | — |
| 13 | Sambal | Rp6.000 | — | — |
| 14 | Topping: Keju, Cokelat, Tiramisu, Strawberry | Rp5.000 | — | — |

## Uncertain / manually verify

The following spellings or readings are transcribed exactly as they appear on the supplied menu images. They must be confirmed by the business before any print or permanent publication:

1. **“Cheesecrcam / cheesecram”** appears in the source description for *Caramel Cheesecream* and *Choco Lava Cheesecream*. It has been normalised to **“cheese cream”** in `menu.ts`; the intended wording should be confirmed.
2. **“CAPPUCINO”** is printed with one “c”. Kept exactly as printed rather than correcting to “Cappuccino”.
3. **“TAHU GEJROT”** is likely **“Tahu Gejrot”**, but the menu spelling is kept. Verify before publishing.
4. **“TROPICAL BLIZZ”** is kept as printed. It may be intended as “Tropical Blizz” / “Tropical Blizzard”.
5. **“RICEBOWL BEEF SAIKORO”** is kept as printed. It may be intended as “Saikoro”.
6. **“NASI GORENG BERI DARI HONGKONG”** is kept exactly as printed (unusual wording, but not altered).
7. **“SCRAMBLE EGG / TELUR (DADAR / CEPLOK)”** is listed as a single 5K add-on line, matching the printed layout.
8. **“TOPPING: KEJU, COKELAT, TIRAMISU, STRAWBERRY”** is a single 5K line item. It is stored as one product with the full topping text in its name; it is not four separate priced items.
9. The beverage menu’s **Hot / R / L** columns were mapped per row. Espresso and Double Espresso have no R/L columns (hot only). *Beri Coklat* and *Beri Red Velvet* show Hot/R/L; other non-coffee drinks show R/L only.
10. Add-on **Espresso 5K** is listed under the “HOT” column on the printed Add On block. It is stored with the Add On category and no variants.
11. Product descriptions are transcribed from the small-print notes on the menu; punctuation and casing were normalised only. Where the source gave no description, the field is omitted.
12. **No individual product photographs were supplied.** Product images remain `undefined`; every card uses the original vector illustration system in `src/components/ProductArt.tsx` as an explicit placeholder. Do not replace these with unrelated stock photos.

## Business information

The supplied assets contain the logo and the two menu posters only. Additional business facts below were cross-checked against the live Google Maps listing for **“beri kopi Jatinangor”** on 9 November 2026.

### Verified via Google Maps

- **Address:** Dekat Pondok Kusuma Orange, Cikeruh, Kec. Jatinangor, Kabupaten Sumedang, Jawa Barat 45363
- **Opening hours:** Buka 24 jam
- **Rating:** 4.6 / 201 reviews

These values live in `src/data/business.ts` and are presented with “Google Maps” attribution. They should still be re-confirmed with the business before print or permanent publication.

### Not found / not presented as verified

- Official Instagram handle / URL
- WhatsApp number
- Email address
- Facilities (WiFi, parking, smoking area, etc.)

The site links to an Instagram keyword search rather than guessing a handle, and directs users to Google Maps for directions and current hours. Replace these with official links once supplied. See `src/data/business.ts`.

## Consistency check

- `src/data/menu.ts` contains **89** products.
- This report contains **89** product rows across **11** categories.
- Product count by category in this report matches `categoryCounts` in `src/data/menu.ts`.

