# START HERE — Advisor Review
## Dry Lightning 3000 Kickstarter package, draft v1 (2026-09-17)

**Status: DRAFT WITH LAUNCH BLOCKERS. Not approved, not ready to launch, nothing published or sent.**

Prepared for Jeremy Coon and his business advisor from the Wildfire Watchdog Drive records, the accessible mailbox, and public research. Everything is editable. Where I made a routine decision, it is logged in `10_registers/DECISION_LOG.md` and can be reversed.

---

## 1. One-page summary

**Product.** Dry Lightning 3000 v1: a Honda iGX390 electric-start high-pressure water pump on a steel skid, controlled by a four-button rolling-code key fob (crank, run/stop, throttle, discharge valve) through relays wired so that losing power or signal kills the engine, idles the throttle and closes the valve. Manual switches work with nothing plugged in. No app, no internet, no sensors, no sprinklers. The phone/dashboard prototype is described honestly as demonstrated but not for sale in v1.

**Audience (recommended).** Rural and wildland-urban-interface homeowners and small ranch/camp operators in the western US who already have a water source (tank, pond, pool) and are buying equipment in the October–March planning season. One primary audience; institutional buyers are a secondary, unpaid outreach track.

**Positioning.** "The pump you don't have to stand next to." Between a $1,200 NorthStar pump plus a $300 start/stop remote (no throttle, no valve) and a $20,000+ installed sprinkler system. Sell remote operation and failsafe engineering, never protection guarantees (Kickstarter's prohibited-items rule bars injury/death-prevention claims).

**Funding goal.** $60,000 all-or-nothing, derived from a 10-pump minimum batch plus one-time costs (insurance, FCC declaration, testing, tooling) and 10% contingency.

**Rewards.** Supporter $35 · Remote Control Kit $1,250 (limit 10) · DL3000 Early Bird $4,699 (limit 10) · DL3000 $4,999 (limit 15, equals the MAP proposed to Northern Tool) · DL3000 + Hose & Nozzle $5,599 (limit 10). Freight $349 flat, contiguous US only. Hard cap 35 pumps.

**Timeline.** Prelaunch page Dec 20, 2026 → launch Jan 19, 2027 → end Feb 18 → payout ~Mar 4 → kits ship April → Early Bird pumps June → remaining July 2027.

**Money.** Base case (18 pumps, 5 kits, 80 supporters): ~$104k gross, ~$93k net after fees and dropped pledges, ~$85.5k cost to deliver including a full year of $2M/$4M insurance, ~$7.5k surplus before tax. Founder cash needed before payout: ~$8,000 (video, tooling, half the insurance down payment, optional ads). Conservative case (8 pumps) does not reach the goal, so nothing is charged and nothing is owed.

---

## 2. Every deliverable (all in `kickstarter-campaign/` on the GitHub branch and in the Drive folder "Kickstarter Campaign")

| Deliverable | File | State |
|---|---|---|
| This document (+ PDF) | `00_START_HERE/START_HERE_Advisor_Review.md`, `.pdf` | Complete |
| Research: technical evidence | `01_research/technical_evidence.md` | Complete (some folders skimmed; noted in file) |
| Research: costs, insurance, patent, Northern Tool | `01_research/costs_insurance_legal.md` | Complete |
| Research: founder and history | `01_research/founder_and_history.md` | Complete |
| Research: Kickstarter rules and competitors | `01_research/kickstarter_rules_and_competitors.md` | Complete (rule text from search extracts; re-verify in editor) |
| Research: media inventory | `01_research/media_inventory.md` | Complete |
| Scope and claims register | `02_campaign_copy/01_scope_and_claims.md` | Complete |
| Master campaign copy (title → FAQ → disclosures) | `02_campaign_copy/MASTER_CAMPAIGN.md` | Complete draft, [REVIEW] notes inside |
| Financial workbook (live formulas, 3 scenarios, stress tests, cash timing) | `03_financial_model/WW_Kickstarter_Financial_Model_v1.xlsx` (+ `build_workbook.py`) | Complete, recalculated, 0 formula errors |
| Reward structure | `04_rewards_and_fulfillment/REWARD_STRUCTURE.md` | Complete |
| Manufacturing & fulfillment plan, BOM | `04_rewards_and_fulfillment/MANUFACTURING_FULFILLMENT_PLAN.md` | Complete (no supplier quotes yet) |
| Supplier RFQs (unsent) | `04_rewards_and_fulfillment/SUPPLIER_RFQ_DRAFTS_UNSENT.md` | Complete, unsent |
| Warranty and backer terms | `04_rewards_and_fulfillment/WARRANTY_AND_TERMS_DRAFT.md` | Draft, attorney review recommended |
| Graphics: use of funds, timeline, system diagram, feature panels, reward cards, status panel, cover template | `05_media/*.png` (+ `build_graphics.py`) | Complete; cover needs the real photo |
| Real photos pulled from Drive | `05_media/photos/` (+ `DRIVE_SOURCES.md`) | 10 files; hero set NOT obtained (see blockers) |
| Video script, storyboard, shot list, EN/ES captions | `06_video/VIDEO_SCRIPT_AND_STORYBOARD.md` | Complete; no edited video (footage not transferable, key shots missing) |
| Marketing: 30-day prelaunch, calendar, 7 emails, 10 posts, 5 ads, press release, pitch, templates, EN+ES | `07_marketing/MARKETING_PACKAGE.md` | Complete, unsent |
| Private preview page (mobile-tested) | `08_preview_site/index.html` (+ `preview_mobile.png`) | Complete |
| Prelaunch landing page + signup workflow (test mode) | `08_preview_site/prelaunch_landing.html`, `SIGNUP_WORKFLOW.md` | Complete, inactive |
| Kickstarter field-by-field upload package | `09_upload_package/KICKSTARTER_UPLOAD_PACKAGE.md` | Complete; no draft populated (no account access) |
| Source/assumption register, decision log, change log, task register, verification log | `10_registers/` | Complete |
| Downloadable package | `WW_Kickstarter_Campaign_v1.zip` (GitHub only; 25 MB) | Complete |
| Drive copy | Folder "Kickstarter Campaign" in 02_Wildfire_Watchdog: all documents, workbook, preview pages, START HERE PDF. Graphics PNGs, the combined review PDF and the zip are on GitHub only (connector could not carry binaries reliably); see the README in the Drive folder | Partial by design |

Private preview: open `08_preview_site/index.html` from the zip or the Drive folder in any browser (works offline; phone-width tested, no horizontal scroll).

---

## 3. Major recommendations and why

1. **Fund v1 as the fob pump only; keep phone control as a disclosed development goal.** The insurance being placed, the FCC path and the briefing all define v1 this way. Promising app control would put the campaign outside the policy scope and add a $8k–$200k certification path.
2. **Goal $60,000, not $130,000.** The business plan's $130k covers a 50-unit inventory run for retail. Kickstarter should fund only what backers actually order plus fixed costs; a lower goal is more likely to fund and still covers insurance.
3. **Price at or above the Northern Tool MAP ($4,999) except ten Early Birds.** Protects a future retail relationship and keeps ~$1,875 contribution per pump after fees, parts and freight.
4. **Launch January 19, 2027, 30 days.** Inside the planning season the advisor described, after the holidays, leaves time for a real demo video and supplier quotes, and lands payout before spring builds. Northern Tool listing (target March 1) is not affected.
5. **Order nothing before payout.** Keeps founder cash exposure near $8,000. Honda engines are stocked; the 3-week lead time fits the delivery windows.
6. **US-48 only, freight shown separately at $349.** The crate is 165 lb; international adds regulatory and cost risk for a first batch.
7. **No sprinkler or "whole-house" tiers, no stretch goals.** They change the insurance class and the delivery promise.
8. **Unpaid outreach first, $1,500 optional Meta test with a stop rule.** No ad results exist for Wildfire Watchdog; do not make ads a hidden requirement.
9. **Answer Kickstarter's AI questions truthfully:** text drafted with AI help from Jeremy's records; no AI images of the product.
10. **Bind StarStone ($2M/$4M) if Northern Tool proceeds; otherwise Kinsale ($1M/$2M) saves $6,000.** The model's base case carries the expensive one so the goal is safe either way. Correct the application wording to the v1 product description first.

---

## 4. Assumptions, evidence gaps, genuine blockers

**Launch blockers (must be cleared before submitting to Kickstarter):**
1. **The fob-controlled control box does not exist yet.** The 2026-09-10 briefing is a design and parts list; what runs today is the prototype's ESP wireless link (remote crank/kill confirmed working, phone/dashboard start bench-proven 2026-08-23) and the local toggle. Kickstarter requires the prototype to perform every advertised function on camera, so the fob box must be built (about $200 in parts, a few days of shop time), tested with the failsafe stopwatch, and filmed before submission. This is the single biggest blocker and the first item on the owner list.
2. **Measured numbers.** Flow, pressure, range and failsafe timing have never been measured. The copy says "specified" and "measured before shipping"; the video needs at least one real reading.
3. **Identity, LLC, EIN, bank and Stripe verification** on Kickstarter. Owner only.
4. **Insurance binding plan.** Not a Kickstarter rule, but no pump should ship uninsured. Quotes exist; nothing is bound; the Kinsale application wording must be corrected to the v1 description.
5. **Real photographs of the prototype** in the package (they exist on wildfirewatchdog.com; originals were not reachable from this session).

**Evidence gaps (weaken the plan, do not block):** no supplier quotes for engine, pump end, frame, valve, receivers, FCC lab or freight (RFQs drafted); no DL3000 customers or testimonials; founder background claim ("firefighting, irrigation") unconfirmed; business mailbox not read directly; the Field Unit 001 trailer build has no completion evidence.

**Key assumptions:** per-unit cost $2,665 at 10 units (bottom-up; the business plan's $1,700 is for 50 units on a cheaper engine); 3% dropped pledges; 6 hours per pump; $380 freight cost; StarStone premium in the base case.

---

## 5. Decisions for Jeremy and the advisor (recommended answer first)

| # | Decision | Recommended | Alternative |
|---|---|---|---|
| 1 | Run a Kickstarter at all, versus direct presales on wildfirewatchdog.com | **Yes, Kickstarter** for all-or-nothing protection, deadline, and a public demand signal usable with Northern Tool and lenders | Direct presales with Stripe (no fees on failure, less reach, no deadline) |
| 2 | Goal | **$60,000** | $65,000 (safer if only Early Birds sell) or $50,000 (8 pumps, thinner) |
| 3 | Engine for the batch | **Honda iGX390** (prototype engine) | NorthStar e420 once bench-tested and quoted |
| 4 | Insurance carrier | **StarStone $2M/$4M** if NTE proceeds; **Kinsale** otherwise | — |
| 5 | Prices/caps | **As proposed** ($4,699 ×10 / $4,999 ×15 / $5,599 ×10) | Drop Early Bird to $4,499 if prelaunch list is weak |
| 6 | Offer the $1,250 Remote Control Kit tier | **Yes, capped at 10**, Honda iGX390 only | Skip it to simplify support |
| 7 | Include the spring-return valve in the base package | **Yes** | Make it a $250 add-on (lowers base cost, hurts the "four buttons" story) |
| 8 | Launch date | **Jan 19, 2027** | Feb 2 if video/quotes slip |
| 9 | Paid ads | **$0 required; $1,500 optional test** | None |
| 10 | Bend pickup option | **Yes, refunds freight** | No |
| 11 | Attorney review of warranty/terms | **Yes, ~$900** | Self-review |
| 12 | Tell Northern Tool about the campaign beforehand | **Yes, courtesy note, pricing at MAP** | Do not mention |

---

## 6. Remaining owner-only actions
1. Build the fob control box per the 2026-09-10 briefing (include the starter-isolation relay learned from the 2026-08-02 backfeed fault), then film the shot list in `06_video/` (fob sequence, failsafe with stopwatch, wet test with gauge, range test).
2. Upload the hero photo set (PXL_20260817 series) and the three demo videos into the Drive "Kickstarter Campaign/media" folder.
3. Confirm or rewrite the founder story in your own words; confirm the background claim or drop it.
4. Complete Kickstarter identity/bank/Stripe verification; create the project draft and paste from `09_upload_package/`.
5. Approve and send the RFQs; replace model estimates with quotes.
6. Decide the insurance carrier; correct the application wording; plan to bind on campaign success.
7. USPTO: micro-entity certificate/surcharge due 2026-09-23; non-provisional by 2027-01-11 (not a campaign task, but the "patent pending" claim depends on it).
8. Approve the marketing package; nothing has been sent.
9. Copy this package to KVM 2 if you want it there (`kickstarter-campaign/` on the GitHub branch; no VPS access existed in this session).

---

## 7. Launch and fulfillment checklist (after approval)
**Pre-launch:** quotes in → update Inputs sheet → re-check goal · video edited · real photos placed · [REVIEW] notes cleared · prelaunch page live (Dec 20) · email 1 sent · press release sent · Firewise/HOA notes sent · followers ≥ 300 and ≥ 10 committed pump backers · Late Pledges on · advisor sign-off.
**Campaign:** day-one push · reply to every comment within 4 h · updates on days 1, 2, 7, 14, 21, 28, 30 · live Q&A day 12 · supplier status update day 21.
**Post-campaign:** payout → orders same week → bind insurance → FCC lab booked → backer survey → build sheets per serial → wet-test certificates → freight booked → delivery emails with photos → 30-day check-in → warranty log.

---
Package built by Claude (Anthropic) as campaign producer on 2026-09-17 from the founder's records; all decisions here are recommendations for the founder and advisor.
