# Manufacturing and Fulfillment Plan — DL3000 Kickstarter batch (DRAFT v1, 2026-09-17)

Scope: 10–35 DL3000 units plus up to 10 Remote Control Kits, founder-built in Bend, Oregon, shipped to contiguous-US backers between April and July 2027. Labels: VERIFIED / ESTIMATE / PROPOSED / UNKNOWN.

## 1. Bill of materials (per DL3000) and sourcing status

| # | Part | Qty | Unit cost (Base, 10 units) | Status | Sourcing status | Notes |
|---|---|---|---|---|---|---|
| 1 | Honda iGX390 electric start (Q-type, 389 cc, 12V charge coil) | 1 | $1,150 | ESTIMATE | UNKNOWN — no dealer quote on file; "Honda quote" is a listed closeout item | Prototype uses this engine. Retail list is ~$1,100–$1,300. Ask 2 Honda engine distributors for 10/20/35-unit pricing. |
| 2 | High-pressure pump end, 2 in. NPT, bronze closed impeller, 3,600 rpm | 1 | $260 | ESTIMATE | UNKNOWN — RFQ targets identified (IMBO, Bombas Nilo, Roarkit/Alibaba) but no quote or sample record | Prototype pump head listed at ~$90 in the sourcing sheet; small-batch price used is higher. Sample must be wet-tested before ordering the batch. |
| 3 | Steel skid/roll-cage frame, powder coat | 1 | $260 | ESTIMATE | UNKNOWN — no fabricator quote | Local Bend fab shops; ask for a 10-piece and 35-piece price. |
| 4 | Solidremote KIT-1 (202U receiver + TX-134 fobs) | 2 | ~$95 (both) | ESTIMATE | Available (KIT-2/402U out of stock everywhere per briefing) | Price not documented in Drive; check Solidremote direct. |
| 5 | 12V 30A 5-pin automotive relays with pigtail | 3 | $15 | ESTIMATE | Commodity | |
| 6 | 2 in. 12V spring-return normally-closed electric ball valve | 1 | $180 | ESTIMATE | UNKNOWN — prototype uses a CR04 motorized valve ($102, VERIFIED bought), not spring-return | Spring-return is what the failsafe design specifies; confirm supplier and price. |
| 7 | Float valve, 2 in. camlock fittings, strainer, unions | 1 set | $50 | ESTIMATE | Partly bought for prototype (VERIFIED) | |
| 8 | Deutsch DT 6-pin connector kit, ATC fuse holders (5A, 10A), 16 AWG GXL wire, terminals | 1 set | $35 | ESTIMATE | Commodity | |
| 9 | Manual override switches (1 momentary, 3 toggle), sealed ABS enclosure, glands | 1 set | $45 | ESTIMATE | IP65 enclosures bought at $15 (VERIFIED) | |
| 10 | 12V battery (AGM or LiFePO4 20Ah), USB power bank, solar maintainer, cabling | 1 set | $140 | ESTIMATE | Amazon list prices on file (ESTIMATE) | |
| 11 | Warning labels, Quick Start Guide print, wet-test certificate | 1 | $15 | ESTIMATE | In-house | |
| 12 | Assembly + wet test labor (6 h × $40) | 1 | $240 | ESTIMATE | Founder + helper | |
| 13 | QC consumables (test fuel, oil) | 1 | $30 | ESTIMATE | | |
| 14 | Warranty reserve | 1 | $150 | ESTIMATE | | |
| 15 | Crate (2-way pallet, corner posts, strapping, corrugated) | 1 | ~$60 (inside freight line) | ESTIMATE | Local | |
| | **Total per unit ex freight** | | **$2,665** | | | Conservative +15% = $3,065; modeled 20+ unit discount = $2,487 |

Kickstarter-specific: no supplier has been asked for a quote yet. The RFQ drafts below are ready to send after approval. Ordering nothing before payout is the cash-minimizing path (Cash_Timing sheet).

## 2. Assembly and test sequence (per unit)
1. Receive and inspect engine, pump end, frame (serial numbers logged in the build sheet).
2. Mount engine and pump end to frame; torque check; fit suction/discharge fittings and float valve.
3. Build harness on the bench from the harness drawing: battery → 5A fuse → Remote Port pin 1; relay box K1 (kill), K2 (throttle), K3 (valve); starter via receiver 10A contact; Receiver 2 powered from RUN line (interlock).
4. Bench-test relay logic with a test fob before installing on the pump: crank pulse, run toggle, throttle toggle, valve toggle; confirm C and D are dead when RUN is off.
5. Failsafe timing test: with engine running, remove RUN signal; record time to ignition kill, throttle to idle, valve closed (must be ≤ 2 s per design spec).
6. Manual override test with nothing plugged into the Remote Port.
7. Wet test: 20–30 minutes on a tank, record flow (calibrated flow meter) and discharge pressure at full throttle and idle; record on the unit's wet-test certificate.
8. Remote range test at 50, 100 and 150 ft line-of-sight; record.
9. Drain, dry, apply warning labels and serial plate, pair and label spare fobs, pack Quick Start Guide.
10. Photograph the finished unit (front, side, control box, serial) for the backer's delivery email.
11. Crate, strap, label; book LTL with liftgate and residential delivery; email tracking.

Time per unit: ~6 hours founder-built (ESTIMATE). Fixtures that cut this: harness jig, pre-cut wire kits, a relay-box sub-assembly built in batches of 10.

## 3. Capacity limits
- Founder time: ~25 h/week → about 4 pumps/week (Capacity sheet).
- 18 pumps (Base) → ~5 build weeks; 28 (Optimistic) → ~7 weeks; plus 3-week parts lead time and 1 week freight. That fits the June/July delivery windows with a month of buffer.
- Above 35 pumps: contract assembly (OMEP referral from SBDC on 2026-09-16 is the lead) or a part-time helper. The reward caps prevent this in v1.
- Space: home shop and outdoor workspace (business plan §1.1). Ten crated pumps need roughly 100 sq ft of covered storage.

## 4. Quality checks and documentation
- Build sheet per serial: parts lot numbers, torque checks, harness continuity, failsafe timing, wet-test flow/pressure, range test, inspector initials, photos.
- Retain build sheets for the life of the product (insurer "written QC procedure" requirement noted in the business plan).
- Warning label set: hot surfaces, CO/outdoor use only, pressurized hose, "REMOTE ENGINE CONTROL PORT — DO NOT DISCONNECT WHILE ENGINE MAY BE ARMED", "preparedness equipment, not a guarantee".

## 5. Packaging and shipping assumptions
- Packed 40 × 28 × 24 in, 165 lb (Northern Tool quote sheet, 2026-09-12; unit ~36 × 24 × 18 in, ~145 lb).
- Ship drained, no fuel, battery disconnected with a shipping tag; oil either drained (ship "dry") or filled with a hang tag. Batteries: AGM ships ground without hazmat paperwork; if LiFePO4 is used, ship under UN3481-compliant packaging or switch to AGM for simplicity (PROPOSED: AGM).
- Freight class 85–100; LTL residential with liftgate, from Bend OR 97702. Charged to backer: $349 flat (ESTIMATE, cost modeled at $380 including crate). Get two carrier quotes before launch.
- Kits: UPS Ground, ~8 lb box, $22 cost.
- Supporter decals: first-class envelope.

## 6. Support workflow
- Channel: support@ or admin@wildfirewatchdog.com and 541-419-3203 (business hours); backer messages on Kickstarter answered within 2 business days.
- Delivery email includes: serial, wet-test certificate, photos, Quick Start Guide PDF, first-start video link, warranty terms.
- 30-day check-in email after delivery; 6-month reminder for oil change and fob battery.
- Warranty claim: photo/video first, phone diagnosis, parts shipped for backer-replaceable items (relays, fob, fuses, valve actuator), return-to-shop for engine/pump issues (Honda engine warranty handled through Honda dealer network).
- Log every contact in a simple sheet (date, serial, issue, fix) — feeds the QC loop and the insurer's audit.

## 7. Timeline (Base)
| Week of | Milestone |
|---|---|
| 2026-10-05 | Photos, video shot list, landing page, email tool |
| 2026-11-02 | Fixtures and crimp tooling; RFQs sent (after approval); carrier quotes |
| 2026-12-07 | Kickstarter prelaunch page live; demo video edit |
| 2027-01-19 | Launch |
| 2027-02-18 | Campaign ends |
| 2027-03-04 | Payout; engines, pump ends, frames ordered; insurance bound; FCC SDoC started |
| 2027-03-29 | Parts in; batch 1 assembly |
| 2027-04-12 | Kits and supporter rewards ship |
| 2027-05-03 | Early Bird pumps wet-tested and shipped |
| 2027-06-14 | Tier 4/5 pumps ship |
| 2027-07-15 | Fulfillment complete; final backer update |

## 8. Risks specific to fulfillment and how they are handled
- Pump-end supplier fails sample test → fallback to a US-stocked 2 in. high-pressure pump end (higher cost; covered by contingency).
- Engine price/availability → order within a week of payout; Honda distributors stock iGX390.
- Spring-return valve actuator lead time → order at payout; substitute a motorized valve with a capacitor-backed close circuit only if the failsafe test still passes.
- Freight damage → crate with corner posts; photograph before pickup; declared value on the BOL.
- Founder illness/time → build order is Early Birds first; kits can be built by a helper from the jig.
