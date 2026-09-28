# Pre-Certified Carport Price Wizard

A step-by-step questionnaire that gives customers an instant, itemized price for a **pre-certified** metal carport or garage. It's built to paste into a **Divi Code module**.

**The file you need:** `skyliner-precert-carport-quote.html`

---

## Recommended: host the file, paste a tiny snippet into Divi

The full wizard is too big for the Divi Code module, so it lives in one file on your server and Divi loads it.

1. **Upload `hosted/carport-quote.js` to your server** in a folder named `carport-quote`, inside your website's main folder.
   - WordPress on your Hostinger KVM 2 VPS: use SFTP (FileZilla) or your panel's file manager. The main folder is the one that holds `wp-config.php`, often `/var/www/html` or `/home/USER/htdocs/yourdomain.com`.
   - Check it worked: `https://YOUR-WEBSITE.com/carport-quote/carport-quote.js` should show a page of code in your browser.
2. **Paste `hosted/divi-snippet.html` into the Divi Code module.** Change `YOUR-WEBSITE.com` to your real domain, and fill in `phone`, `email`, and `leadWebhookUrl`.
3. After changing prices, run `python3 precert-carport-quote/build-hosted.py` and upload the new `carport-quote.js`. Visitors may need a hard refresh to see the change.

**No server access?** Install the free **WPCode** plugin, create an "HTML Snippet" containing the full `skyliner-precert-carport-quote.html` file, and put its shortcode (for example `[wpcode id="123"]`) in a Divi **Text** module.

## Alternative: paste the whole file (only if your Code module accepts it)

1. Open your page in the Divi Builder.
2. Add a **Code** module where you want the "Get My Carport Price" box to show.
3. Open `skyliner-precert-carport-quote.html`, copy **everything**, and paste it into the Code module.
4. Save and exit the builder, then view the live page. The Visual Builder preview can look different from the live page.

### Extra buttons anywhere on the page
Add a normal Divi **Button** module and set its **Button Link URL** to:

```
#carport-quote
```

Clicking it opens the price wizard. The same link works in menus, and a shared link like `yoursite.com/carports/#carport-quote` opens the wizard as soon as the page loads.

The Code module holding the wizard has to be on the same page as the button.

### Just a button, or the whole wizard on the page
Near the top of the file, find `<div class="skq-embed" data-style="card">`:

- `data-style="card"` shows a box with a headline, a picture, and the button (the default).
- `data-style="button"` shows only the button.
- `data-mode="inline"` shows the whole questionnaire right on the page with no pop-up.

---

## Settings to fill in first

Open the file and find **section 1, YOUR SETTINGS**. Change the text between the quotes:

| Setting | What it does |
|---|---|
| `phone` | Your phone number. Adds a "Call us" button on the quote. |
| `email` | Your sales email. Adds an "Email this quote to us" button. |
| `leadWebhookUrl` | **Important.** Where customer contact info is sent. See below. |
| `sale` | The Fall Sale: 5% off under $5,000, 10% off $5,000 to $14,999, 15% off $15,000 and up. `endsOn` is the last day, and the sale turns itself off after it. Change `tiers`, `label`, or `endsOn` for the next sale, or set `enabled: false`. |
| `depositPercent` | The deposit shown on the quote (10 right now). |
| `requireContactInfo` | `true` means customers must enter name, phone, and email before they see the price. `false` shows a "Skip" button. |
| `frameOutWithEachDoor` | `true` adds a frame-out charge to every door and window automatically. |
| `accentColor` / `darkColor` | Your brand colors. |
| `disclaimer` | The small print on the quote and PDF. |

### Getting the leads (please read)
Right now the wizard **collects** the customer's name, phone, and email but **doesn't send them anywhere**. To receive leads, set `leadWebhookUrl` to a URL from any of these services:

- **Zapier**: create a Zap with the trigger "Webhooks by Zapier → Catch Hook", paste its URL here, then have Zapier email you or add a row to Google Sheets.
- **Make.com**: create a "Custom webhook" scenario and paste its URL here.
- **Google Sheets**: publish a Google Apps Script web app and paste its URL here.

Every completed quote is sent there with the contact info, the building details, every line item, and the totals.

---

## Changing prices

Everything is in **section 2, PRICE BOOK**. Each table is labeled. For example, `"20x35":4795` means a 20' x 35' building costs $4,795.

- Extra bows are priced by building width in `extraBow`: $225 each up to 20' wide, $310 each for 22' to 30' wide.
- Triple-wide (26', 28', 30') prices are in `tripleWide`. A `null` there means the sheet said NEEDS VERIFY, and customers see **"Call for price"** for that option.
- 60' long buildings are priced as two 30' buildings (`joinedLengths`). Widths 13' to 17' are priced as 18' (`pricedAs18`).

### Two rules so Divi doesn't break the code
1. **Don't leave empty lines** anywhere in the file.
2. **Don't type the "and" symbol** (the one above the 7 key). Write the word "and" instead.

---

## What the customer goes through

1. **Location:** ZIP code and what it sits on (dirt, gravel, concrete, asphalt)
2. **Size:** width and length, with prices on every option
3. **Height:** leg height, with the price of each option
4. **Strength:** 14-gauge or 12-gauge, and standard or 60 lb snow load
5. **Walls:** open, sides, ends, or fully enclosed, with a live building picture
6. **Doors and windows:** roll-up doors, walk-in doors, windows, and framed openings. Only shown if they picked walls. Doors too tall for the legs are blocked.
7. **Anchoring:** ground certification, double leg, mobile home anchors, and concrete bolts. Only the options that fit their surface are shown.
8. **Extras:** extra panels, skylight panels, braces, gable ends, and extra bows
9. **Colors:** roof, trim, and walls. The building picture changes color as they choose.
10. **Contact info**
11. **Quote:** the sale price, deposit, amount due at install, an itemized breakdown, a PDF download, print, email, and call

The price updates live at the bottom the whole time. If a customer closes the wizard and comes back later, their answers are still there.

---

## Tests (for developers)
```
cd precert-carport-quote/tests
npm install --no-save jspdf@2.5.1
cd ../..
NODE_PATH=$(npm root -g) node precert-carport-quote/tests/run-tests.cjs
```
The tests check 1,500 random buildings (12' to 30' wide) against the reference calculator in `tests/fixtures/`, which includes the triple-wide sheets. They also click through the whole questionnaire on desktop and phone inside a fake Divi page, and download the PDF.
