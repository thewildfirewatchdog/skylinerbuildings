# Campaign Scope and Claims Register (DRAFT v1, 2026-09-17)

Purpose: the single place that says what this campaign delivers, what is demonstrated, what is still development, and which claims are allowed in public copy. Labels: VERIFIED (document, receipt, test or code on file), ESTIMATE (basis and range stated), PROPOSED (campaign decision awaiting approval), UNKNOWN (no evidence). Sources in `01_research/`.

## 1. The product being funded
**Dry Lightning 3000 (DL3000) v1**: Honda iGX390 electric-start engine + high-pressure pump end on a steel skid, controlled by a four-button rolling-code RF key fob through two Solidremote 202U receivers and three relays (kill, throttle, valve), with a spring-return 2 in. discharge valve, manual override switches, 12 V battery/solar maintainer, and a documented 6-pin Remote Port. No app, no internet, no monitoring, no sensors, no sprinklers.
Basis: RF briefing 2026-09-10 (VERIFIED as the current design intent), product page 2026-09-11, Quick Start Guide 2026-09-12, business plan 2026-09-15.

## 2. What still needs development before delivery
| Item | Status | Evidence |
|---|---|---|
| Fob control box (Solidremote receivers + relays) built and tested on the actual pump | NOT BUILT — design and parts list only (briefing 2026-09-10); demo video shows the ESP/dashboard path; a 2026-08-02 field fault (starter cranked from battery backfeed) was fixed in the ESP path with an isolation relay and must be designed into the RF box too | briefing 2026-09-10; NT status 2026-08-29 |
| Spring-return (fail-closed) valve actuator | IN DEVELOPMENT — prototype uses a motorized CR04 valve without spring return | sourcing sheet 2026-07-05; briefing parts list |
| Failsafe timing test (≤ 2 s) | NOT YET MEASURED | briefing §2 "required failsafe behavior" |
| Flow / pressure / range measurements | NOT YET MEASURED (product page: "specifications are preliminary") | product page 2026-09-11 |
| Pump end supplier and sample test | UNKNOWN — RFQ targets identified, no quote | Master_Parts_Categories 2026-07-02 |
| FCC Supplier's Declaration of Conformity for the control box | NOT STARTED (budgeted) | briefing §5 |
| Product-liability insurance | QUOTED, NOT BOUND (Kinsale $4,598 / StarStone $10,598) | quote 2026-09-01; plan 2026-09-15 |
| Warranty and terms of sale | DRAFTED in this package; attorney review recommended | plan §8 |
| Engine choice (Honda iGX390 vs NorthStar e420) | DECIDED FOR THIS CAMPAIGN: Honda iGX390 (the prototype engine and the one on both Northern Tool packets); e420 remains an option for later retail runs | conflict noted in costs research §7 |

## 3. Role of each component in v1
| Component | Role | In reward? |
|---|---|---|
| Pump (engine + pump end) | Moves water; the product | Yes |
| Local remote (RF fob) | Only control link: crank, run/stop, throttle, valve | Yes |
| Manual switches | Backup control with nothing plugged in | Yes |
| Phone control / dashboard | Prototype only; future development; depends on power, connectivity, water and hoses in place | No (described honestly) |
| Sensors / auto-start | Prototype/patent-application concept; not v1 | No |
| Valve | 2 in. spring-return discharge valve, opened by button D, closes on stop/power loss | Yes |
| Hoses, nozzle, strainer | Required to use the pump; optional package | Only in Tier 5 / add-on |
| Sprinklers | Customer-supplied; not sold in this campaign | No |
| Water source, fuel, operator | Customer-supplied dependencies | No |

## 4. Feature status matrix (public copy must match)
| Feature | Status | Say in copy |
|---|---|---|
| Remote engine start (timed crank) | DEMONSTRATED on prototype via ESP link (README 2026-08-08 'confirmed working'); fob path DESIGNED, not built | "Demonstrated on the prototype" |
| Remote stop/kill | DEMONSTRATED via ESP link; fob path designed | "Demonstrated on the prototype (wireless link)" |
| Remote throttle idle/full | IN DEVELOPMENT (ESP throttle receiver built; polarity test pending per 2026-08-05 wire map; fob channel designed) | "Built in the prototype; final test pending" |
| Remote discharge valve | IN DEVELOPMENT (motorized valve receiver exists; spring-return actuator not fitted) | "Spring-return actuator is the production part" |
| Interlock (C/D dead unless RUN) | DESIGNED (wiring spec) | "wired so that…"; measure before launch video |
| Failsafe on signal/power loss | DESIGNED; ESP version had heartbeat failsafe in firmware | "Design target within 2 s; measured on every unit" |
| Manual override | DESIGNED (in spec and product page) | "Manual controls remain available" |
| One-shot starter protection, max-run shutdown | Listed on product page (ESP firmware features) | Only claim if present in fob v1 wiring; otherwise omit [REVIEW] |
| Phone/cloud start | DEMONSTRATED 2026-08-23 (prototype) | "Prototype only, not in v1" |
| Auto-start on sensor | CONCEPT / patent application | Do not claim |
| Low-water shutdown, drain valve, sprinklers, solar system | Other product lines / prototypes | Do not claim for DL3000 |
| 150 GPM / 140 PSI | CLAIMED class spec, unmeasured | "specified … class"; publish measured |
| ~10 h on 10 gal | ESTIMATE, unmeasured | "design estimate" or omit |
| ~150 ft range | Receiver-maker spec, unmeasured | "as specified; measured before shipping" |
| Patent pending | VERIFIED for the automatic system (2 provisionals, 2026-01-11); NOT the fob v1 | "Patent pending on the automatic version; v1 fob not its subject" |
| "Only remote-start pump" / "only in category" | UNSUPPORTED (competitors listed in the founder's own briefing and research §4) | Never |
| Northern Tool | Onboarding in progress; no PO, listing or commitment | Do not mention as partner/endorsement; courtesy notice only |
| Customers / testimonials | One completed install (Metolius River, May 2026), sprinkler system not DL3000; no DL3000 customers | Only "a three-building system I installed"; no testimonials |
| Test results | None recorded for DL3000 | Never invent; promise per-unit certificate |

## 5. Claims policy for all public copy
Never: "only," "guaranteed," "saves lives," "prevents injury or death," "protects your home," "fireproof," "patented," "encrypted," "partnered with Northern Tool," any statistic without a cited source, any customer quote not on file, any AI image of the product.
Always: the standard disclaimer; "preparedness equipment"; "operator present"; "requires water source, fuel, hoses"; "estimated delivery"; "patent pending (provisional)".

## 6. Insurance scope check
The Kinsale application wording ("Fire Suppression Systems – installation, servicing or repair"; "Installation Contractor") does not match the v1 product description the briefing requires for both carriers ("gas engine powered wildfire water pump with RF key-fob remote… no app, no internet, no monitoring"). Before binding, the application must be corrected to the v1 description, and the campaign copy must stay inside it: no sprinklers, no monitoring, no installation, no app. This package complies.

## 7. Decisions made in this draft (for approval)
1. Honda iGX390 is the campaign engine.
2. Spring-return valve is included in the base package (not an upgrade).
3. Phone control is described as a demonstrated prototype and future development, not a reward or stretch goal.
4. Sprinklers excluded; hoses/nozzle only as Tier 5 and add-ons.
5. Shipping contiguous US only; no international.
6. Goal $60,000; 30 days; launch 2027-01-19.
