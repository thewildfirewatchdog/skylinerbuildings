# Founder Story and Product History — Jeremy Coon / Wildfire Watchdog LLC

Research compiled 2026-09-17 from Google Drive (read-only). Everything below is sourced to a Drive file in the index at the end. Items marked **[inferred]** are reasonable readings of the documents, not explicit statements. Private individuals' names, addresses and contact details are deliberately omitted; only business/organization names appear.

---

## 1. Founder bio facts

| Fact | Status | Source |
|---|---|---|
| Jeremy John Coon, Bend, Oregon 97702; sole founder/operator of Wildfire Watchdog LLC (Oregon LLC; also operates under the name Firewise Automation) | Verified | Business plan 2027 (ES), Master Index, Line Sheet v3, provisional patent ADS |
| "Over a decade of experience in business ownership, firefighting, and irrigation systems" | Verified as a self-description in the 2024 business plan; no supporting detail (agency, years, role) found anywhere in Drive. Treat as **needs confirmation from Jeremy before use** | Business Plan (Aug 2024) |
| Also runs Skyliner Buildings, a Central Oregon metal-building (carport/garage/shop) dealership-installer; documents describe him as a metal-building installer and note that Skyliner jobs help fund the Wildfire Watchdog project | Verified (one-line bio fact only) | Product_Overview.md ("Do Not Confuse With"), OUTREACH_STRATEGY.md, Video_Scripts.md |
| Has a separate 2026 side venture, Remote Control Ranch / Rancho Remoto (business plan dated Sept 2026) | Verified existence only; out of scope | Drive listing |
| Works from a home shop and outdoor workspace in Bend for prototyping, QC and small-batch assembly | Verified | Business plan 2027 (ES) §1.1 |
| Sole inventor on all patent filings | Verified | Patent PDFs |
| Builds firmware himself (ESP32/ESP8266, ESP-NOW, Arduino .ino files in Drive with his date-stamped names), plus a self-hosted PHP/MySQL dashboard | Verified | iGX390_Remote_Start_System folder, WW_Dashboard_Platform_Status |
| Personal wildfire experience / origin anecdote | **Not found.** No document contains a first-person origin story, a personal fire loss, or an "about us" page. The 2024 pitch outline says "Introduce Jeremy Coon" but has no bio text. This must come from an interview with Jeremy. | Search results |
| Uses AI assistants (ChatGPT, Claude) heavily for drafting docs, patents and code; several docs are AI-prepared "from founder notes" | Verified (context for how much of the written record is his own voice) | Business plan 2027 footer; file titles |

## 2. Dated product-history timeline

| Date | Event | Source |
|---|---|---|
| Aug 2024 | First business plan and investor pitch outline written. Concept: LoRaWAN (Dragino) sensor/valve system with Class A foam, remote monitoring "by USFS/fire departments", insurance-partnership thesis, $200K ask. No pump automation yet. Mentions a partner "Pacific Oasis" and "installations on homes" (unverified). | Business Plan; pitch |
| Sep–Oct 2024 | LoRaWAN/Dragino firmware header files in Drive (earliest technical artifacts). | Drive listing (compat-1.3.h, oid.h) |
| Jan 28 2025 | "Modular Box" documentation README v1.0: portable control unit in a stackable Black+Decker toolbox — 12.8V LiFePO4 + solar MPPT, 3× ESP32 + 5× ESP8266, 6-ch relay, ESP-NOW pump trigger. First documented in-house control hardware. | Modular_Unit_READ_ME_FIRST |
| Mar 2025 | "patent" folder created; earliest system photos (remote-fire-sensor-system068.jpg). | Drive listing |
| May 2025 | TagoIO button-to-Acebott ESP32 control notes; pump demo video (remote-wildfire-pump-system091.mp4, Jun 2025). | Drive listing |
| Aug 1–8 2025 | First provisional patent drafting sprint: "Automated Wildfire Prevention and Monitoring System with Wireless Control and Heartbeat Safety Protocols." Describes a retrofitted **Honda GX340** with auto choke, ESP8266 starter/kill relays, 30-second ESP-NOW heartbeat timeout, 3-zone sprinklers, TagoIO. Video scripts for a suitcase/milk-crate kit written the same week. | PDF Patent Wildfire Watchdog; script voice wildwatch; sript 1 |
| Nov 2025 | "patent 2 just pump" folder and Spanish-language pump-patent description; second product-photo set (mobile unit labelled "patent pending"). | Drive listing |
| Dec 11–20 2025 | Two finalized provisional drafts: (a) "Automated Wildfire Prevention System with Multi-Zone Water Distribution, Off-Grid Solar Power, and Redundant Control" (25 claims, toolbox kit); (b) "Wireless Remote Control System for Automated Starting of Carbureted ICEs…" — commercial name **"Watchdog AutoPump System"**, 40 claims, document dated Dec 20 2025. | final provisional patent PDF; FINAL_Complete_USPTO_Patent_40_Claims |
| Jan 11 2026 | Two USPTO provisional applications filed: **63/958,172** (remote-start gas water pump with automatic choke) and **63/958,210** (automatic fire sprinkler program). Non-provisional deadline Jan 11 2027; micro-entity paperwork response due Sep 23 2026. | Business plan 2027 (ES) §1.2, §8 |
| Jan 30 – Feb 2 2026 | Demo video set produced: "remote-start-wildfire-sprinklers-auto-start-gas-pump", "lorawan-remote-auto-start-gas-pump", drain/fill valve demos; Kit 1 prototype photos. | Drive listing (video/photo dates) |
| By May 2026 | **Metolius River, Oregon commercial install completed** — 3-building system, GX390-class 2" pump in a 10×20 metal pump building, 5× ESP8266 via ESP-NOW, Rain Bird 85EHD roof guns + 5000-series ground heads, TagoIO dashboard, solar + 12V backup. Parts via Horizon Distributors. Estimated system cost $7,500–11,500. The only documented completed paid install. | Customer_Lead_System.md; Project_Full_Summary.pdf; Metolius-Overview |
| May 1–5 2026 | Proposals issued: Camp Sherman (Oregon) wildfire-system bid; a "Luxury/Elite" river-fed residential proposal (3 HP electric pump, dual pressure tanks, 48V lithium + 9 kW inverter + 10 kW generator). | 05_Proposals folder |
| May 16–19 2026 | "Skyliner Brain" Drive vault organized; 09_Leads and 05_Proposals folders created; Coldstream, BC ~20-home neighborhood lead opened (proposal delivered May 28). | Drive listing; Customer_Lead_System.md |
| May 25 2026 | Milk-crate "mobile wildfire defense unit" photos published for web/SEO. | Drive listing |
| Jun 8 2026 | Six product lines defined; **Honda iGX390** (Q-type, electric start, built-in auto choke, 389cc/11.1 HP) named as the flagship engine; custom bronze-impeller pump head to be sourced from China. Trailer/Carport Pump House line documented (8×8×7 carport on 4×8 trailer, 3,000-gal tank, gravity prime). | Wildfire_Product_Line_Map; 04 Product_Overview; 06 folder |
| Jun 14 2026 | "Emergency Pump Automation Kit" sales package written (Level 1/2/3), with explicit do-not-launch checklist (legal review, liability insurance, BOM lockdown). | Product_Overview.md; Open_Questions… |
| Jun 15–17 2026 | Trailer Pump Station line: Alibaba sourcing sheets (WP-20 pump end, etc.). | 05_Trailer_Pump_Station folder |
| Jun 24 2026 | Overview states MVP = "Auto-Start Gas-Powered Water Pump System"; second product (Autopump Electric float system) "working build confirmed." | Wildfire_Watchdog_Overview.md |
| Jul 2–5 2026 | Master Index; TagoIO agent integration; "Property Concept Engine" (GIS-based prospecting) built and gated; **Field Unit 001** trailer build sequence written — parts ~6 days out; "do not market before proof exists." | Master Index; BUILD_HISTORY; PROJECT_STATUS; FIELD_UNIT_001 |
| Aug 5–7 2026 | iGX390 remote-start firmware set v3: ESP32 gateway/sender, universal receivers (starter, unground/kill, throttle high/low-eco). "Proven pattern" sender. | iGX390_Remote_Start_System folder |
| Aug 17 2026 | Photos of the actual DL3000 prototype (later used on product page). | Product page HTML image names |
| Aug 23 2026 | First end-to-end cloud control: phone → self-hosted dashboard (watchdog.wildfirewatchdog.com, replacing TagoIO) → ESP-01S relay → pump sequence. Northern Tool line sheet v1 written. **Northern Tool + Equipment vendor onboarding folder created.** | WW_Dashboard_Platform_Status; Line Sheet v1 |
| Aug 25 2026 | Line sheet v3: **"Dry Lightning 3000"** name first appears in Drive as the hero SKU — MSRP $5,500, ~$2,000 COGS, up to 150 GPM / 140 PSI, ~10–11 h on 10 gal, "patent pending (2 USPTO provisional filings)." WW-RS150 wireless switch kit as second SKU. | Line Sheet v3 |
| Aug 27 2026 | RS150 pump-button firmware v3.4 finalized after overnight debugging; decision to rely on a hard-wired manual override switch as the no-electronics fallback. | RS150 session summary |
| Aug 29–31 2026 | Northern Tool merchandise manager (runs ~$160M pressure-washer/generator business) gives the subclass "a bump"; vendor packet, W-9, vendor agreement prepared; demo video sent (YouTube Short). Not a PO. | NT Current Status; NT folder |
| Sep 3 2026 | "Wildfire Watchdog Automatic Remote Firefighting Pump.mp4" demo uploaded. | Drive listing |
| Sep 10 2026 | **RF fob pivot**: v1 launch control = Solidremote TX-134 rolling-code 4-button fob + two 202U receivers (crank / run-kill / throttle / valve) with Deutsch DT 6-pin "Remote Port." No app, no cloud, no firmware — chosen to keep FCC (SDoC) and product-liability insurance cheap. Two GL quotes in hand (Kinsale ~$6.9K/yr; StarStone ~$10.6K). The ESP/app version becomes a future upgrade. | RF_Remote_Control_DL3000_Project_Briefing |
| Sep 11–12 2026 | DL3000 product page (Divi) and Quick Start Guide v1 written; "insurance-clean" copy. | 11_Product_Lines files |
| Sep 15 2026 | 2027 business plan (Spanish draft): v1 = pump + harness + 4-channel fob; **NorthStar e420 EFI (NTE house brand) now the planned base engine with Honda iGX390 as premium alternative**; 50-unit first run, ~$130K financing ask; Kickstarter listed as a pre-sale/validation channel; catalog target March 1 2027. | WW_Plan_Negocios_2027_ES.pdf |

Note on "first trailer system": the trailer/carport pump house was designed in June 2026 and scheduled to be built as "Field Unit 001" in July 2026; Drive contains no completion photos or a build log confirming it was finished. The earlier portable products were the milk-crate/toolbox kits (Jan 2025–May 2026) and the Metolius fixed installation. **[inferred]** the trailer may still be unfinished.

## 3. What Jeremy designed/built vs. third-party components

**Designed / built in-house (evidence in Drive):**
- Control architecture: ESP32 sender/gateway + ESP8266 receivers on ESP-NOW with heartbeat-timeout failsafe (loss of signal → kill ignition, throttle to idle, valve closes). Firmware files authored and date-stamped by him (Aug 2026 set; earlier Acebott ESP32/TagoIO work 2025).
- The start/stop sequence logic: timed crank, run/kill relay on the ignition ground, throttle relay into the iGX390 governor loop, motorized main water valve, gravity-prime timing, "one-shot starter protection and maximum-run shutdown."
- The RF-fob v1 control scheme: two 2-channel receivers mapped to one 4-button fob, the RUN-line power interlock that makes throttle/valve buttons dead unless the engine is enabled, the 3-relay box, the Deutsch 6-pin "Remote Accessory Control Port" spec, and manual override wiring.
- Wiring harnesses, relay boxes and enclosures; labeled weatherproof connectors; bench-test procedures.
- The self-hosted cloud dashboard/PWA (PHP/MySQL on Hostinger) and the earlier TagoIO dashboards.
- The modular toolbox/milk-crate portable kit concept and the trailer/carport pump-house concept (uses Skyliner carport structure).
- Both provisional patent applications (self-filed, micro/small entity).

**Third-party / sourced components (should be credited as such, never claimed as proprietary):**
- Engine: Honda iGX390 Q-type (built-in auto choke, electric start) — and, per the Sept 2026 plan, NorthStar e420 EFI as the volume engine.
- Pump end: imported single-stage bronze-impeller centrifugal head (Alibaba/China-sourced; WP-20 referenced for the trailer line).
- RF remote: Solidremote TX-134 fob and 202U rolling-code receivers (carry Solidremote's FCC IDs).
- Automotive 12V relays, Deutsch DT connectors, ATC fuses, spring-return 2" electric ball valve actuator, Rain Bird 85EHD / 5000 sprinklers, Y-strainers, camlocks.
- Microcontrollers: Espressif ESP32 / Ai-Thinker ESP-12F / ESP-01S modules; TagoIO (cloud, now replaced); earlier Dragino LoRaWAN hardware.
- Optional: Scotty around-the-pump foam proportioner; Citro Tech retardant.

## 4. Evidence of demand

**Proposals (05_Proposals):** 3 documented, all May 2026 —
1. Camp Sherman, Oregon — wildfire system bid (organized camp / community type), May 1 2026.
2. "Luxury/Elite" river-fed residential estate proposal, May 1 2026.
3. A whole-house residential order folder ("20_House…"), May 27 2026, with system design, parts list, vendor quotes and a final-proposal folder — status unknown.

**Leads (09_Leads / 12_Customer_Leads):** 2 tracked —
1. Metolius River, Oregon (rural riverside property, 3 buildings) — **completed commercial install** (by May 2026); described internally as the reference site and a referral source.
2. Coldstream, BC, Canada — ~20-home single-road neighborhood cooperative; proposal delivered May 28 2026; "in progress" as of July 2026.

Only one paid, completed customer is documented. A lead-tracking sheet was specified but no populated lead sheet or count of inbound web leads was found.

**Channel / retail interest:** Northern Tool + Equipment onboarding active since Aug 2026; merchandise manager verbally supportive, subclass "bumped"; three partnership options proposed Sept 12 2026; **no written PO, forecast or commitment yet** (business plan is explicit about this).

**Prospecting:** July 2026 GIS scoring of 12,264 Deschutes County parcels → top-50 → 15 "$1M+ improvement value" targets selected for a founding-pilot mailer; nothing mailed as of last update.

**Ad results:** None documented. A $100 Meta test and five ad variants exist, but they are for Skyliner Buildings, not Wildfire Watchdog. The Sept 2026 briefing plans an off-season Facebook demand test measuring cost-per-lead; no results in Drive. Do not cite ad metrics.

**Testimonials:** none on file. Review-request and customer-message templates exist but no collected reviews.

## 5. Existing "why" language worth reusing (verbatim)

- "Every fire pump on the market today assumes someone is standing next to it. In a wildfire, that person has already evacuated, is asleep, or doesn't want to walk into the ember shower to pull a cord." (translated from Spanish) — WW_Plan_Negocios_2027_ES.pdf §1.3
- "…a professional-grade pump that can be started from the truck, the house, or the exit road, at the price of a good generator." (translated) — same, §1.3
- "When a wildfire threatens a property, the owner is often: away from the property, evacuated and unable to return, without power or internet, relying on a gas-powered pump that requires manual starting." — Wildfire_Watchdog_Overview.md
- "The whole idea is simple. When fire threatens your house, the system automatically starts spraying water to protect it, whether you're there or not, whether you have internet or not, whether you have power or not. It just works." — script 5 patent (Aug 2025; note this describes the automatic sprinkler version, not the fob-controlled DL3000)
- "It's built to survive where we can't." — script voice wildwatch (Aug 2025)
- "Remote pump control for wildfire preparedness… No internet required. The handheld remote is the only control link." — DL3000 product page HTML (Sept 2026)
- "Built and tested in Bend, Oregon." — DL3000 product page
- "Preparedness equipment — not a guarantee. This product does not make your property fireproof, guarantee protection, or replace defensible space, evacuation orders, or professional fire response." — DL3000 Quick Start Guide (required disclaimer; reuse verbatim)
- "The solo-Central-Oregon-builder story = the brand." — FIELD_UNIT_001 shot list (internal note, supports a founder-led campaign narrative)
- "Every job also helps fund my Wildfire Watchdog project to protect homes from fire." — Video_Scripts.md (Skyliner CTA; shows the bootstrapping story)

## 6. Unsupported or risky claims found in older docs (avoid)

- "The only auto-start Honda fire pump in the category" / "nobody else in catalog has auto-start" / "Única bomba… con arranque remoto por menos de $10K" — competitive "only" claims; the Sept 2026 briefing itself lists competing remote-start kits (HPC-2, Pinellas, Start Smart Box). Use "one of the few" or drop.
- "Applicant asserts exclusive provision of this particular GX340-based configuration within the United States market" (2025 patent draft) — not verified; also the engine changed.
- "Patent pending" is accurate for the ESP/sensor-triggered system; the briefing states the RF fob version "isn't novel enough to patent on its own." Do not imply the fob-controlled DL3000 itself is patent-pending without qualification.
- "Firefighters or homeowners can deploy the whole kit in under a minute" / "Install in seconds" (2025 scripts) — untested marketing hyperbole.
- "Protects when you can't," "Protection 24/7," "Ready to defend homes anywhere in the world," "your house will not burn" (website copy flagged for retirement in July 2026) — guarantee-style language; contradicts the required disclaimer.
- 2024 plan/pitch: "remote monitoring by USFS/local fire departments," "$10 billion in insurance claims in 2023," "$25 billion insurance market," "significantly reduces insurance costs," revenue $500K→$5M, "partnerships with Pacific Oasis," "installations on homes" — no sources, no evidence; the Oregon SB 85 note explicitly says do not promise premium reductions.
- Performance specs "up to 150 GPM / 140 PSI," "~10–11 hrs on 10 gal," "~150 ft fob range" — marked preliminary/estimated in the product page ("verified flow… will be published after final production testing"). Present as targets until tested.
- "Over a decade of… firefighting" — unverified in documents; confirm with Jeremy.
- "Not a substitute for evacuation… not a life-safety system… not UL/ETL listed, not fire-department approved" — keep these; do not use "certified," "code compliant," or "fire department approved."
- Engine ambiguity: docs variously cite GX340 (2025), Honda iGX390 (2026), and NorthStar e420 EFI (Sept 2026 plan). The campaign must state which engine ships.
- Runtime "2–2.5 h per tank" (System Overview, June 2026) vs "10–11 h on 10 gal" (Aug 2026) — reconcile before publishing.

## 7. Source index

| File | Date | Link | Key facts used |
|---|---|---|---|
| Business Plan (Google Doc) | 2024-08-20 | https://docs.google.com/document/d/1FPt9gEel2E6uVpCE5ngovj321tlaXBDRA7BGEqys9zc | 2024 LoRaWAN concept; "decade of business ownership, firefighting, irrigation"; unsourced market claims |
| pitch (Google Doc) | 2024-08 | https://docs.google.com/document/d/1YH047AzHCxlE7LoDR6ZEvJ9eVQQcoCOYJUC_HaMp9yk | Insurance-partnership pitch; $200K ask; risky stats |
| Modular_Unit_READ_ME_FIRST | 2025-01-28 | https://docs.google.com/document/d/15_RSK4SFGyTrIa76YRxYp2oQp8U9cqD98gPrqw2bXbY | First toolbox control unit spec |
| PDF Patent Wildfire Watchdog | 2025-08 | https://docs.google.com/document/d/1v6yrDLp4wzPI0acwuptQWIxB193QBMa-Eqt4VnEaM-8 | GX340 auto-choke + heartbeat design; inventor ADS |
| script voice wildwatch / sript 1 / script 5 patent | 2025-08 | https://docs.google.com/document/d/1O1t5DK7rO2yLnU6zqbdWwXxpWR6V4EO35GHT6NwDEp8 | Early "why" language; hyperbole to avoid |
| final provisional patent (PDF) | 2025-12-16 | https://drive.google.com/file/d/1GreQMs-nDfDRlkUCQJ-HiChPKmMewUeG | 25-claim sprinkler/solar/redundant-control filing |
| FINAL_Complete_USPTO_Patent_40_Claims | 2025-12-20 | https://drive.google.com/file/d/13F6PeWM_QxRus33k2kux5SmWz75W8MDU | "Watchdog AutoPump" remote-start engine filing |
| Patent Summary / WW-12-Patent-Summary | 2026-05-29 | https://docs.google.com/document/d/19Xj6eu7Xtw6WPB0ffCmjMDIdZ6wBfFJ4ZEtk1qfh5NY | Plain-language claim summary |
| Wildfire_Watchdog_Project_Full_Summary.pdf | 2026-05-05 | https://drive.google.com/file/d/1d-qm8EiJDq6Tqn8dmnPbNpFNsU_uHB_r | Metolius 3-building system, cost $7.5–11.5K |
| Metolius-Overview-Technical-System-Doc | 2026-05-27 | https://docs.google.com/document/d/1IsGVV7KMwMjtUzl9ihRB9R5LYshtgUZcLt5deHc39gk | Install architecture; "not intended to guarantee" language |
| Camp Sherman proposal PDF | 2026-05-01 | https://drive.google.com/file/d/1f_xVDEAnjsMYwWgRVAfHnEciaMxnwXyD | Proposal count/type |
| Luxury Proposal PDF | 2026-05-01 | https://drive.google.com/file/d/1H-RqxDYW8HNwiHMntMtTtlPf13f9qC13 | Proposal count/type |
| 05_Proposals folder | 2026-05 | https://drive.google.com/drive/folders/1uJqCuTMmPTvm6k7wX3dKzWzWWe-_sPUS | 3 proposals |
| 09_Leads / Active Leads | 2026-05-16 | https://drive.google.com/drive/folders/1FczuehZBuxOXM_CbVi_Re8o4xRm10b2G | Coldstream BC lead |
| Customer_Lead_System.md | 2026-06-24 | https://drive.google.com/file/d/1XRe-lXJbSaQfVYRfG4Pil9i1-0MxRJYv | Completed install + delivered proposal |
| Wildfire_Product_Line_Map.md | 2026-06 | https://drive.google.com/file/d/1QxX6T2XTA1sB2ALQ-I-Ck5kdQvGB2iHI | Six product lines |
| 04 Product_Overview.md (iGX390) | 2026-06-08 | https://drive.google.com/file/d/1oY8yMG-0o_lkit5GG7-PAw3usnyGOrtr | Engine specs; custom pump head |
| 06 Trailer/Carport Product_Overview + How_It_Works + Sales_Description | 2026-06-08 | https://drive.google.com/file/d/1yVt6H9KuuRDhk3IZHR3g_k0hZZIFuIvw | Trailer concept |
| Product_Overview.md (Pump Automation Kit) | 2026-06-14 | https://drive.google.com/file/d/1_rSV5-GBCmK8sAjDA0Nv6UY41jeXjBAX | Positioning phrases; do/don't language |
| Customer_Sales_Description.md | 2026-06-14 | https://drive.google.com/file/d/1ZF7hChjeJ7YwrFOPky16YDX2CARmObyK | Level 1/2/3 packaging |
| Open_Questions_and_Possible_Issues.md | 2026-06-14 | https://drive.google.com/file/d/1KA1TgO76AazmauJ0HaKOS1Tv-62kTUyv | Pre-launch gates |
| Wildfire_Watchdog_Overview.md | 2026-06-24 | https://drive.google.com/file/d/16SfiPQTKESXmRL3fy0slqFTVKTlh6gMm | Core problem statement; MVP definition |
| 00_Master_Index.md + ADDENDUM | 2026-07-02/03 | https://drive.google.com/file/d/1cKy-_Tuz4MrcNiIAvOWBhXehU5vWbl0I | Project status; legal notice |
| WW_System_Overview.md | 2026-07-02 | https://drive.google.com/file/d/1rp73XDOceRnPFDEn2EEP8KCVefm3kBXq | Package tiers; runtime estimate |
| BUSINESS_CASE.md / OUTREACH_STRATEGY.md | 2026-07-04 | https://drive.google.com/file/d/1jVJd7OgmXU-813fL4Uy8kaj93RI3RMRU | Honest critique; one-person capacity; SB 85 caution |
| PROJECT_STATUS.md | 2026-07-05 | https://drive.google.com/file/d/1GLFFNch6Tqe4Bn2B6kBwBzyXKvvKBpB9 | 12,264 parcels scored; "build first" |
| FIELD_UNIT_001_BUILD_SEQUENCE | 2026-07-05 | https://drive.google.com/file/d/1WifXw0x_Yvs8gHZWon7KNWCufF4wL69a | Trailer build plan; retire "will not burn" claim |
| iGX390_Remote_Start_System folder | 2026-08-05/07 | https://drive.google.com/drive/folders/1qQmsNOjUAZioxXg9p2Ar-9gFn_k7c-P5 | Firmware authored by Jeremy |
| WW_Dashboard_Platform_Status | 2026-08-23 | https://drive.google.com/file/d/1pxrYvQCXed9cYKgdT3TZFUNhRRpHGz8i | First end-to-end cloud start |
| Northern_Tool_Line_Sheet_v3.md | 2026-08-25 | https://drive.google.com/file/d/1BZMCltPCpNs4lBxEDNPsggCvBKAuRKKT | DL3000 name, price, specs |
| RS150_PumpButton_Session_Summary | 2026-08-27 | https://drive.google.com/file/d/1-7j7TuWsRwOfPHEEGWLunV7G8fYjS6Qz | Firmware debugging; manual override decision |
| Northern_Tool_Current_Status | 2026-08-29 | https://drive.google.com/file/d/1QPfRCTbvHMTyZNM2F9EEeFEBfpKKPxJ9 | NTE status; demo video |
| RF_Remote_Control_DL3000_Project_Briefing | 2026-09-10 | https://drive.google.com/file/d/1PHYC9ZoPC3VXtSd3Yvx5E-y2XAcqtcvG | Fob pivot; Solidremote parts; insurance; competitor list |
| DL3000 product page HTML | 2026-09-11 | https://drive.google.com/file/d/1gtG1cPmpw3QBWe4be3PMXVWjvS9CTwzr | Public copy; preliminary specs |
| DL3000 Quick Start Guide v1 | 2026-09-12 | https://drive.google.com/file/d/1DAi_Jpzp3yorzZ_CXT1l1tvEI40nCbw_ | Button map; disclaimer |
| WW_Plan_Negocios_2027_ES.pdf | 2026-09-15 | https://drive.google.com/file/d/1N28BwtNlifDaLMnSgy0iSeMgo3OGM4Tj | Patent numbers/dates; engine change; financing; Kickstarter as channel |
| Video_Scripts.md (Skyliner) | 2026-06-10 | https://drive.google.com/file/d/1EKKs3HhYHqrK7MjWZilHVVnnboE0S40- | "helps fund my Wildfire Watchdog project" |
