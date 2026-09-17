# Email signup workflow — prepared, not activated (2026-09-17)

## Recommended (no new tools, no cost): Kickstarter's own prelaunch page
Kickstarter's prelaunch page has a "Notify me on launch" button that emails followers when the project goes live and reports follower counts. It needs no form, no list tool and no privacy policy work beyond Kickstarter's. Use the landing page above only to explain the product and send people to that button.

## If Jeremy also wants his own list (so contacts survive the campaign)
Option 1 — WordPress form on wildfirewatchdog.com (existing Divi site):
1. Add a Divi Contact/Email Optin module with fields first name, email, state, consent checkbox (same wording as `prelaunch_landing.html`).
2. Connect it to an email provider free tier (MailerLite or Brevo; both free under ~1,000 contacts) with double opt-in enabled.
3. Add a webhook to the existing n8n instance on KVM 2 (not touched in this session): trigger on form submit → append a row to a private Google Sheet "WW Kickstarter Prelaunch List" → send the welcome email (Email 1 text in `07_marketing/MARKETING_PACKAGE.md`).
4. Keep the page unpublished (Draft/Private in WordPress) until approval.

Option 2 — No WordPress: MailerLite hosted form embedded in the landing page.

## Test performed in this session
The HTML form validates email and consent and logs the would-be submission to the browser console. No data is stored or sent. A live private test of the n8n path could not be run because KVM 2 was not reachable from this session.

## Privacy line for the form (EN/ES)
EN: "We use your email only to tell you about the Dry Lightning 3000 launch. Unsubscribe any time. We never sell or share your address."
ES: "Usamos su correo solo para avisarle del lanzamiento del Dry Lightning 3000. Puede darse de baja cuando quiera. Nunca vendemos ni compartimos su dirección."
