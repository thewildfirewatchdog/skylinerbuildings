# Dry Lightning 3000 (DL3000) — Technical Evidence from Google Drive

Compiled 2026-09-17 from Wildfire Watchdog LLC Drive records (owner thewildfirewatchdog@gmail.com). Drive links use the form `https://drive.google.com/file/d/<id>/view`. Nothing on Drive was modified.

**Naming note:** the ESP32/ESP-NOW firmware folder is titled "Dry Thunder 3000" (README dated 2026-08-08); all September 2026 sales/regulatory docs use "Dry Lightning 3000". They are the same pump platform; "Dry Thunder" is the earlier internal name.

**Coverage:** Folders listed and read: Dry_Thunder_3000, iGX390_Remote_Start_System, 04_Automatic_Honda_iGX390_Gas_Fire_Pump (+ Emergency_Pump_Automation_Kit, Installation_and_Sales_Docs, Optional_Add_Ons/Low_Water_Safety_Shutdown_Box, Auxiliary_Top_Off_Pump), 05_Projects (all five subfolders listed), 09_Testing_Logs, 08_Testing_and_Debug_Logs (empty), 13_Safety_And_Disclaimers, 02_Auto_Start_Gas_Pump, 03_Pump_Receiver_Prime_Valve, 05_Wireless_Ridge_Roof_Sprinkler, Northern Tool folder (1uWOIfd8…), the iGX firmware history folder (1OnX0t8p…). **NOT REVIEWED (empty or not opened):** 05_Pump_System, 06_Sensors_and_Monitoring, 04_Wireless_Controls (all three returned zero files when listed); WW_Cloud_Platform and WW_Tago_Agent_Integration subfolders beyond CURRENT_PLATFORM_STATUS.md; Pump_Flow_Vibration_AUX_Monitor subfolder; Simone_Pilot_System_Concept/Pricing; the .ino source bodies (headers only). Several June 2026 product-line docs (Product_Overview, How_It_Works_v2, Open_Questions_v2, Parts_List, Prototype_Testing_Checklist, MVP, Low-Water box, Aux Top-Off README, Metolius master index, Open_Questions_and_Possible_Issues, Product_Levels, Customer_Disclaimer_and_Installer_Requirements) were retrieved and skimmed; figures from them are marked "(skimmed)".

---

## 1. Prototype status timeline

| Date | Milestone | Evidence |
|---|---|---|
| Jan 11 2026 | Two USPTO provisionals filed: 63/958,172 (gas water pump w/ remote start + auto choke) and 63/958,210 (automatic fire-sprinkler program). | WW_Plan_Negocios_2027_ES.pdf (2026-09-15) https://drive.google.com/file/d/1N28BwtNlifDaLMnSgy0iSeMgo3OGM4Tj/view |
| May 2026 | Metolius River 3-building install (Matt V.): ESP-NOW pump controller "hardware installed and coded"; GX390-class pump; 5 ESP8266 receivers (unground, ignition, full/half choke, valve). Open questions list still asks whether pump was load-tested and what measured GPM is. | 00_MASTER_INDEX.md https://drive.google.com/file/d/14zOLTQEd9qtnbW9amY9_EW1gQcMCdy8P/view ; Matt_Metolius_Reference.md https://drive.google.com/file/d/16WECV8Mi1yURzNh_km4IgnTw4tOl82Dj/view |
| Jun 8–14 2026 | Product-line docs for "Automatic Honda iGX390 Gas Fire Pump" / "Emergency Pump Automation Kit": engine spec sheet, parts list, ESP-NOW start sequence, disclaimers, installer checklist. Status flag: "DO NOT LAUNCH PUBLIC SALES until critical items are resolved" (skimmed). | Product_Overview.md https://drive.google.com/file/d/1oY8yMG-0o_lkit5GG7-PAw3usnyGOrtr/view ; Open_Questions_and_Possible_Issues.md https://drive.google.com/file/d/1KA1TgO76AazmauJ0HaKOS1Tv-62kTUyv/view |
| Jun 24 2026 | Prototype_Testing_Checklist.md created — checklist only, test-log template blank; no logged results. 08_Testing_and_Debug_Logs folder is empty. | https://drive.google.com/file/d/1I8feM1_TDo-HnMb_ud66XXxbNj3UiOeM/view |
| Jul 14–15 2026 | Auxiliary Top-Off Pump v2.2: bench test on Predator 208cc (key-start hack) confirmed relay polarity; "iGX390 arriving by mail as of 2026-07-14" (skimmed). | README_v2.2_FINAL https://drive.google.com/file/d/1ydWBQtkjztggSrGAmlklD0fN7rRRgyb-/view |
| Aug 2 2026 | Sender v4.3 "starter isolation": field-observed failure 8-2 — backfeed/low-battery chatter cranked the starter; 7th receiver added to physically isolate starter circuit. | 8-2-CHANGELOG https://drive.google.com/file/d/1hcvYpe7WiHDTAfLZqCns-yQiZmyyIKul/view |
| Aug 5 2026 | iGX390 wire map verified against Honda shop manual (62Z5F00Y pp. 2-5, 2-7) + field photos; system v2 = gateway ESP32 + sender ESP32 + 3 ESP-01S receivers (RUN/CRANK/THROTTLE); TagoIO dashboard "igx"; 4 multimeter tests still pending. | README-igx-system-v2.md https://drive.google.com/file/d/146eOl79lGgV8Kg021JYsfJ0RhTK_xKE2/view ; WIRE-MAP-and-PENDING-TESTS.md https://drive.google.com/file/d/1-7QBZ6KCM5ZhXJNzJGUGU2zjtrzDTmAK/view |
| Aug 7 2026 | Sender v2 CORRECTED restores water-valve + drain-valve heartbeats (6 receivers). | 8-7-igx390-sender-proven-pattern-v2-CORRECTED.ino https://drive.google.com/file/d/1gtDpsha0sl5z6N2moKP_pu2H4gbDZYs9/view |
| Aug 8 2026 | **"DRY THUNDER 3000 … CONFIRMED WORKING – 2026-08-08."** ESP32 sender + 5 ESP8266 receivers (unground, starter, throttle, water valve, drain valve); sequence valve→unground→throttle→2 s crank; 30-min max-run timer. Note: the README says bench-verify relay clicks first, "only after all 5 boards show clean radio + correct relay timing on the bench: wire to the actual engine" — it does not explicitly log an engine start. | README.md https://drive.google.com/file/d/1_OCd1OZN1VbmU80WnejSlF7zIJUTPcMs/view |
| Aug 10 2026 | Camp Tamarack: design/parts-selection phase; not installed; site visit pending. | https://drive.google.com/file/d/1TbHbLc4ho6xQ_lN75l5kkCMdEkMHiN5q/view |
| Aug 23 2026 | ESP-01S dashboard power switch v3 "BENCH-PROVEN 2026-08-23: dashboard button click -> relay click confirmed"; three control paths (cloud watchdog.wildfirewatchdog.com, local AP "Dry Lightning", home LAN). This is the board behind the phone/cloud on-off in the demo video. | https://drive.google.com/file/d/1CgjwRlLpLvoCqyQYb-fbw54IPl9nbQPK/view |
| Aug 25 2026 | Northern Tool line sheet v3: DL3000 status "READY — proven firmware lineage, bench-confirmed fleet"; MSRP $5,500 / COGS ~$2,000; runtime claim ~10–11 h on 10 gal. Still describes phone/computer remote start + auto-start on trigger. | https://drive.google.com/file/d/1BZMCltPCpNs4lBxEDNPsggCvBKAuRKKT/view |
| Aug 29 2026 | Demo video (YouTube short BqMepkZrpSg) recorded and sent to Northern Tool; planned content = local toggle on/off + phone/cloud on/off only. Video plan says no wiring-harness or sprinkler demo. | Northern_Tool_Current_Status_2026-08-29.md https://drive.google.com/file/d/1QPfRCTbvHMTyZNM2F9EEeFEBfpKKPxJ9/view |
| Sep 10 2026 | Pivot to RF-fob v1 (Solidremote TX-134 fob + 2× 202U receivers, Deutsch DT 6-pin port, K1/K2/K3 relays). ESP/app version deferred for FCC/insurance cost. Open item: "Buy a retail 420cc engine, bench-test the harness fit." | RF_Remote_Control_DL3000_Project_Briefing.md https://drive.google.com/file/d/1PHYC9ZoPC3VXtSd3Yvx5E-y2XAcqtcvG/view |
| Sep 11–12 2026 | Product page (insurance-clean), Quick Start Guide v1, Northern Tool print/sign packet (RF version): "The pump and remote are built and operating; each item above is documented before commercial release" — with pump validation (flow, pressure, suction lift, remote range, runtime, repeated remote starts) and fail-safe testing listed as *remaining* launch work. | Quick Start https://drive.google.com/file/d/1DAi_Jpzp3yorzZ_CXT1l1tvEI40nCbw_/view ; NT packet https://drive.google.com/file/d/1lQa1CPAeBx9jOKJnQ0PNvIR3CfItxvI9/view ; product page https://drive.google.com/file/d/1gtG1cPmpw3QBWe4be3PMXVWjvS9CTwzr/view |
| Sep 15 2026 | 2027 business plan (Spanish draft): v1 scope = pump + harness + 4-channel RF fob; engine now "NorthStar e420 EFI (Honda iGX390 as premium alternative)"; 50-unit first run; Kickstarter listed as a funding source (pre-sell 10–20 units). | https://drive.google.com/file/d/1N28BwtNlifDaLMnSgy0iSeMgo3OGM4Tj/view |

---

## 2. Feature matrix

Legend: **DEMO** = demonstrated with dated evidence; **DEV** = in development / bench-only; **PLAN** = planned or idea; **UNK** = no evidence found. "RF v1" = Solidremote fob launch SKU; "ESP" = ESP32/ESP-NOW/dashboard prototype.

| Feature | Status | Version | Evidence / notes |
|---|---|---|---|
| Engine remote start (crank) | **DEMO** (ESP, bench + video); **DEV** (RF v1) | Both | Dry_Thunder README "CONFIRMED WORKING 2026-08-08"; demo video 8-29 (on/off via toggle + phone). RF fob: briefing 9-10 describes design; NT packet says "built and operating" but "repeated remote starts" still on validation list. No engine-start test log exists. |
| Stop / kill (fail-safe on silence or RUN loss) | **DEMO** (ESP); **DEV** (RF v1) | Both | ESP: "silence = safe state… engine stops" (README 8-08; power-switch v3 8-23). RF: K1 de-energized = ignition killed; "within 2 seconds" is a *required* behavior, not a logged test. |
| Throttle (idle ↔ full 3,600 rpm) | **DEV** | Both | Lg–P loop wired per shop manual; but WIRE-MAP 8-05 lists the "Lg-P pull test (does opening the loop raise or lower RPM?)" as PENDING; README 8-08 says "Confirmed wiring: Lg+P connected = eco/idle, disconnected = full throttle." Conflict noted in §8. Quick Start (9-12) markets it as button 4. |
| Discharge / main water valve | **DEMO** (ESP relay heartbeat, bench); **DEV** (RF: 2" spring-return actuator, parts list only) | Both | Water-valve receiver in 8-08 README; RF briefing lists "1× 2" electric ball valve actuator, spring-return" as a part to buy. |
| Priming (valve opens first, gravity prime) | **DEV** | ESP | Sequence t=0 s valve opens "pump begins priming/purging air" (README 8-08). Not in RF v1 sequence (user opens valve manually, button 3). |
| Auto-start on sensor trigger | **PLAN** (excluded from v1) | ESP | Line sheet 8-25 and 06-08 Product_Overview claim it; RF briefing 9-10 says provisionals cover it and it is the future "Connected" version; NT packet: "no monitoring". Metolius (May 2026) lists sensor triggers as one of 5 pathways but no trigger test evidence. |
| Phone / cloud dashboard control | **DEMO** (bench + video, 8-23/8-29) | ESP | ESP-01S power switch v3; TagoIO "igx" dashboard (8-05). Excluded from RF v1. |
| Local toggle switches / manual overrides | **DEMO** (video 8-29, ESP); **DEV** (RF v1 four switches) | Both | README 8-08: manual start button, e-stop, manual drain switch on sender. RF: 1 momentary + 3 toggles on pump side of port (design). |
| Low-water shutdown | **DEV** (ESP add-on); not in RF v1 | ESP | Low_Water_Safety_Shutdown_Box (float → sender E-STOP input, latched) https://drive.google.com/file/d/1AAJvhFutoQk1eeU7vILdZaitOSN4YPAO/view ; sender v4.3 has debounced low-water float input (8-02). Quick Start 9-12 has no low-water feature. |
| Max-run shutdown | **DEV/DEMO (firmware)** | ESP only | 30-min MAX_RUN_TIME_MS (8-08); v4.3 three-stage shutdown at 275/290/300 s (8-02); How_It_Works_v2 says 20 min (skimmed). RF v1 has no timer. |
| One-shot starter protection | **DEMO (firmware, bench)** | ESP; RF partial | Receiver-side fixed 2 s crank, 5 s re-arm (8-08); v2 receiver 3 s cap (8-05). Starter-isolation relay added after 8-02 backfeed failure. RF v1: fob button A momentary; Quick Start says "starter runs for 2 seconds automatically" — mechanism in 202U receiver DIP mode, not independently verified. |
| Drain valve (freeze prep) | **DEV** | ESP | Manual-switch only, not in auto sequence (8-08); Aux top-off v2.2 drain on GPIO25. Not in RF v1. |
| Sprinklers / zone valves | **DEMO (Metolius install May 2026)**; **PLAN** for DL3000 product | Separate SKUs | Metolius: 6× Rain Bird 85EHD roof + 12× RB 5000 ground, 2" motorized zone valves. Three-Zone Plumbing Kit status "BOM". Insurance answer for DL3000 SKU: "not currently manufacturing/selling sprinkler systems." |
| Roof ridge sprinkler | **PLAN** | ESP | 05_Wireless_Ridge_Roof_Sprinkler docs (06-08) are concept only; all parts "TBD"; line sheet status "BOM". |
| Solar / battery | **DEMO** (Metolius: solar + 12V 100Ah AGM); **PLAN** for DL3000 (business plan lists "USB power bank with solar charging") | Both | Quick Start: 12V battery required, not included. Open question 06-14: battery size/chemistry undecided (suggested 18Ah AGM). |

---

## 3. Pump specs claimed

| Spec | Value | Source | Label |
|---|---|---|---|
| Flow | "up to 150 GPM" | RF briefing 9-10; line sheet 8-25; NT packet 9-12 | **CLAIMED** — no measured flow on file; NT packet lists "document flow, pressure, suction lift" as remaining work; Metolius index asks "measured GPM?" |
| Pressure | "140 PSI" | same | **CLAIMED** (Camp Tamarack doc targets 145–150 PSI part ratings; Metolius relief valve 125 PSI) |
| Engine | Honda iGX390, 389 cc, 11.1 HP (Product_Overview 06-08, skimmed) vs 11.7 hp @ 3,600 rpm (NT packet 9-12); business plan 9-15 switches to NorthStar e420 EFI 420cc with iGX390 as alternative | spec sheet | **CLAIMED** (see conflicts) |
| Runtime | ~10–11 h on 10 gal @ 3,600 rpm | line sheet 8-25; business plan | **ESTIMATE** — engine has 6.4 qt tank; 10 gal implies aux tank (line sheet lists aux fuel tanks as accessory) |
| Suction / discharge | 2" camlock discharge (all Sept docs); business plan: 3" suction / 2.5" discharge; Metolius: 3" suction | various | **CLAIMED / CONFLICTING** |
| Weight / size | ~145 lb, 36×24×18 in; packed 165 lb, 40×28×24 in — "current estimates … must be verified" | NT packet 9-12 | **ESTIMATE** |
| Remote range | ~150 ft line of sight | NT packet; business plan | **CLAIMED** (Solidremote spec; not field-tested on file) |
| Pump head | custom single-stage bronze impeller from China, ~$100; supplier RFQ (Bella Lily / IMBO / Bombas Nilo) in progress; pressure/flow rating "need to confirm" | Parts_List / Open_Questions_v2 (06-08/06-10, skimmed) | **UNVERIFIED** |
| COGS / price | COGS ~$2,000 (line sheet) vs $1,700→$1,255 at 50→300 units (business plan est.); MSRP $5,500; NT cost $3,299 / MAP $4,999 / sell $5,499 | line sheet; NT quote sheet | ESTIMATE |

---

## 4. Pending tests, known issues, unresolved engineering

- **WIRE-MAP 8-05 pending multimeter tests:** (1) key-switch buzz-out R–Bl; (2) Lg–P pull test to set ENERGIZE_FOR_HIGH; (3) Y/Bl–G pull test (possible 3rd speed); (4) all four loop combos for RPM presets. No follow-up file records results.
- **8-02 field failure:** starter cranked from backfeed/low-battery chatter → starter-isolation relay added (ESP path). RF v1 design does not include an equivalent isolation relay; e-stop does not drop the isolation relay until its 290 s mark (known behavior note).
- **8-08 README gotchas:** ESP32 channel-lock bug (esp_wifi_set_promiscuous workaround); old broadcast firmware incompatible with unicast; relay board polarity varies by batch (RELAY_ACTIVE_LOW). Aux top-off 7-14: wrong polarity caused ignition to fire at plug-in.
- **NT packet 9-12 remaining launch work:** DFM/BOM lock, pump validation (flow, pressure, suction lift, remote range, runtime, repeated remote starts), fail-safe testing (lost power, lost signal, low battery, e-stop, manual override), FCC SDoC file + host labeling, engine-emissions docs, warning labels, $2M insurance, warranty, manual, packaging.
- **RF briefing 9-10 open items:** bind insurance (Kinsale ~$6.9K or StarStone ~$10.6K, neither bound); sign vendor agreement/W-9; draft warranty/terms in-house; buy retail 420cc engine and bench-test harness fit; demand test.
- **06-14 Open_Questions_and_Possible_Issues (skimmed):** pump head model, iGX390 model number, battery/fuse, enclosures (IP65), relay modules, wire-color standard, bench-test checklist, pricing, legal review, product-liability insurance — all OPEN; header says do not launch public sales until resolved.
- **Line sheet 8-25:** coordinator ESP32 module FCC ID placeholder unfilled; host-device FCC verification not done.
- **No test logs:** 09_Testing_Logs holds only a blank checklist; 08_Testing_and_Debug_Logs is empty. No dated engine-start, flow, pressure, range, or runtime measurement exists on Drive.
- **Business plan 9-15:** USPTO micro-entity certificate/surcharge response for 63/958,210 due Sep 23 2026; non-provisional due before Jan 11 2027.

---

## 5. Safety and disclaimer language in use

Standard short disclaimer (Sales_Description.md 06-08, Ridge Sprinkler Sales_Description 06-08, line sheet "existing WW standard"):

> "Note: This system is designed to help reduce wildfire risk and improve property protection. It does not guarantee fire protection and does not replace evacuation, defensible space, or fire department response."

Liability disclaimer for customer-facing materials (Safety_And_Liability_Notes.md, 13_Safety_And_Disclaimers, 06-24):

> "Wildfire Watchdog systems are designed to support wildfire preparedness by automating water delivery and pump control. These systems are intended as a supplement to, not a replacement for, professional wildfire response and evacuation procedures. No automated system can guarantee property protection from wildfire. Always follow local emergency management guidelines and evacuation orders. Wildfire Watchdog makes no warranty, express or implied, regarding protection from fire damage."

Quick Start Guide v1 (2026-09-12) boxed text:

> "Preparedness equipment — not a guarantee. This product does not make your property fireproof, guarantee protection, or replace defensible space, evacuation orders, or professional fire response. It is not a monitoring, alarm, or fire-detection device." … "The remote starts and stops the pump only while you are present to supervise it. It is not intended for unattended or automatic operation."

Customer_Warning_and_Disclaimer.md (06-14) headline and limitation of liability:

> "THIS IS EMERGENCY PREPAREDNESS EQUIPMENT — NOT A CERTIFIED FIRE PROTECTION SYSTEM" … "NOT a certified fire protection system. This product has not been tested, listed, or certified under any fire protection, life-safety, or electrical safety standard." … "Wildfire Watchdog and Firewise Automation make no warranty, express or implied, that this product will prevent fire damage, property loss, injury, or death. This product is sold as a preparedness accessory only. Use of this product does not reduce fire risk. Wildfire Watchdog is not liable for any loss, damage, injury, or death resulting from the use, misuse, failure, or improper installation of this product."

Insurance-required product description (RF briefing 9-10, verbatim for policies):

> "Gas Engine Powered Wildfire Water Pump with RF key-fob remote control for start/stop, throttle, and discharge valve — rolling-code, pre-certified FCC-ID components, no app, no internet connection, no monitoring."

Language rules (Wildfire_Safety_and_Legal_Rules.md; Safety_And_Liability_Notes.md): never "stops wildfires", "protects your home from wildfire", "wildfire proof", "guarantees protection", "fire defense system"; use "wildfire preparedness", "emergency water movement", "remote pump starting", "sprinkler support", "off-grid pump control". Do not change patent claims or legal wording without Jeremy's approval; keep prototype notes separate from sales material. Customer_Disclaimer_and_Installer_Requirements.md (06-14, skimmed) requires a qualified installer, momentary-only starter relay, fail-safe run relay, Honda oil alert left active, and customer/installer signatures.

---

## 6. Dependencies as documented

- **Water source:** customer-supplied (tank, pond, pool, well, river). Kit "does not supply water, hoses, or plumbing" (Customer_Warning). Suction line must be submerged; do not run dry (Quick Start). Low-water shutdown is an optional ESP add-on, not in v1.
- **Fuel:** gasoline; iGX390 tank 6.4 qt; 10–11 h claim assumes 10 gal (aux tank accessory). Fuel tank "not included" (Included_and_Not_Included, skimmed).
- **Battery:** 12V automotive-type required, not included (Quick Start); business plan adds USB power bank + solar; ESP prototypes used 12V SLA/LiFePO4 + solar (MVP doc, Metolius 100Ah AGM). Engine charging 10 A.
- **Hoses/fittings:** 2" camlock discharge; 2" lay-flat, camlocks, tripod sprinklers sold as accessories; Camp Tamarack plan uses 2" lay-flat trunk with 1" CR04 zone valves.
- **Sprinklers:** not part of DL3000 SKU (insurance scoping). Rain Bird 85EHD / 5000 used at Metolius.
- **Connectivity:** RF v1 needs none (~150 ft LOS fob). ESP version needs 2.4 GHz channel 1, TagoIO or watchdog.wildfirewatchdog.com cloud, or local AP; "Internet or cellular service … never included."
- **Installer:** June docs require a qualified installer and signed acknowledgement at all levels; Quick Start (Sept) says harness plugs in "no wiring, cutting, or splicing" — see conflicts.

---

## 7. Pilot installs / customer sites

- **Metolius River, Central Oregon (Matt V.)** — commercial 3-building system; hardware installed and coded May 2026; ESP-NOW GX390 pump, solar/12V; Horizon Distributors quote #2C014460. Reference design; measured flow/pressure not recorded.
- **Camp Tamarack** (contacts Charlie and Carrie) — design/parts-selection phase as of 2026-08-10; not installed; site visit pending; 2" lay-flat trunk, ~5 zones, 1" CR04 valves, tripod impact sprinklers.
- **Simone R., Coldstream BC** — pilot "in progress" 2026-07-02; single house first (20-house neighborhood on HOLD); water source undecided (above-ground pool); weak cell, Starlink recommended. No hardware installed per index.
- **"Three Kings pump fleet"** — referenced as the proven ESP-NOW sender pattern (README 8-08); no folder reviewed.
- **Northern Tool + Equipment** — dropship vendor onboarding in progress; no PO or written commitment as of 2026-09-15.
- Private addresses, Wi-Fi passwords, TagoIO/device tokens and bank details present in source files are intentionally omitted here.

---

## 8. Conflicts between documents

1. **Control architecture:** Line sheet 8-25 and 06-08 Product_Overview/Sales_Description sell "remote start from phone/computer, auto-start on trigger, TagoIO dashboard"; RF briefing 9-10, Quick Start and NT packet (9-11/12) state "no app, no cloud, no monitoring… not intended for unattended or automatic operation." The Kickstarter copy must follow the September position.
2. **Engine:** all Aug–Sep 12 docs say Honda iGX390; business plan 9-15 baselines NorthStar e420 EFI 420cc with iGX390 as "premium alternative"; RF briefing open item is to "buy a retail 420cc engine, bench-test the harness fit" (not yet done). Horsepower: 11.1 HP (06-08) vs 11.7 hp (9-12).
3. **Port sizes:** 2" camlock discharge (Aug–Sep 12) vs 3" suction / 2.5" discharge (business plan 9-15).
4. **Throttle polarity:** README 8-08 "Confirmed wiring: Lg+P connected = eco/idle, disconnected = full throttle" vs WIRE-MAP 8-05 lists that exact pull test as pending; RF K2 spec "energized = full throttle." No test record resolves it.
5. **Crank timing:** 2 s fixed (8-08 README; Quick Start) vs 3 s cap / 0.8 s drop (8-05 v2) vs 4 s (How_It_Works_v2 06-10, Metolius ignition receiver).
6. **Max-run timer:** 30 min (8-08) vs 20 min (06-10) vs 275–300 s staged shutdown (v4.3, 8-02); RF v1 has none.
7. **Receiver count:** 3 (v2, 8-05) vs 5 (Dry Thunder 8-08) vs 6 (8-07 sender) vs 7 (v4.3 with isolation relay) vs 2 Solidremote 202U (RF v1).
8. **Installation:** June kit docs require a qualified installer and signed disclaimer; Sept Quick Start positions DL3000 as plug-in, no installer.
9. **Readiness language:** line sheet "READY — bench-confirmed fleet" and NT packet "built and operating" vs 06-14 "DO NOT LAUNCH PUBLIC SALES" list and NT packet's own list of unfinished validation/fail-safe tests; no dated test results anywhere on Drive.
10. **COGS:** ~$2,000 "confirmed" (8-25) vs $1,700 est. at 50 units (9-15); earlier parts estimate $1,600–2,100 (06-08).
11. **Product naming:** "Dry Thunder 3000" (firmware, 8-08) vs "Dry Lightning 3000" (all sales docs); SSID on the demo power switch is "Dry Lightning".
