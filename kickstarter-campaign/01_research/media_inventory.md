# DL3000 (Dry Lightning 3000) Media Inventory

Compiled 2026-09-17 for the Wildfire Watchdog LLC Kickstarter campaign. Sources: Google Drive (read-only), Drive copies of the live website/product page HTML, and the network probes described in section F.

Key finding up front: **the only true DL3000 prototype "hero" photos (the PXL_20260817 set used on the live product page) exist only on wildfirewatchdog.com, which is blocked by this sandbox's egress proxy. They are NOT in Google Drive.** The founder needs to upload those six originals to Drive (or the repo) for the campaign. Everything below in Drive is either (a) build-process close-ups from Aug 2026, (b) earlier-generation Wildfire Watchdog kit/sprinkler/manifold hardware, or (c) video that has not been reviewed frame-by-frame (video files were inventoried by metadata only).

---

## A. Usable authentic photos and videos

### A1. DL3000 prototype photos on the live product page (owned by WW, NOT retrievable from this sandbox)

| File (wildfirewatchdog.com/wp-content/uploads/2026/08/) | Date | What it shows (per product-page alt text) | Real/render | Suitability |
|---|---|---|---|---|
| PXL_20260817_015152815-scaled.jpg | 2026-08-17 | Main gallery hero, badge "ACTUAL PROTOTYPE SHOWN" | Real prototype | Cover image candidate #1 |
| PXL_20260817_015138102-scaled.jpg | 2026-08-17 | "Front view of pump" | Real | Feature panel (product) |
| PXL_20260817_005203272-1-scaled.jpg | 2026-08-17 | "Side view of pump" | Real | Feature panel (product) |
| Untitled-design-6-e1787174145855.jpg | 2026-08 | "Handheld remote" (4-button rolling-code fob; Canva composite, likely photo on styled background) | Real product photo, designed | Feature panel (remote) |
| PXL_20260817_010021766-scaled.jpg | 2026-08-17 | "Motorized valve" (2 in. spring-return electric ball valve) | Real | Feature panel (valve option) |
| Wildfire-Watchdog-Sequence-of-Parts-Please-Do-Not-Share-1.jpg | 2026-08 | "Pump fittings and connections" - annotated parts sequence | Real photo w/ annotations | INTERNAL. Filename says "Please Do Not Share"; it is nevertheless published on the product page. Do not use on Kickstarter without founder sign-off. |

Also referenced in Drive's `WW_Photo_URLs_Master.md` (June 2026) on the same site: 2025/08/41.jpg (eave sprinkler install close-up), 2025/08/39.jpg (two eave sprinklers, wide), 2025/08/50.jpg (control box), 2025/08/20250731_175244 (hose/valve manifold), 2026/05/20.jpg (phone push-button control screenshot). The Master file itself labels `2026/06/ChatGPT-Image-Jun-17-2026-...png` as an "AI illustration".

Download status: all six curl attempts returned `CONNECT tunnel failed, response 403` (agent-proxy: `connect_rejected ... organization policy`). WebFetch returned `EGRESS_BLOCKED` for wildfirewatchdog.com. Nothing was saved from the site. See section F.

### A2. Authentic photos in Google Drive (2026 uploads) - reviewed visually

| Local file / Drive link | Date | What it shows | Real or render | Suitability |
|---|---|---|---|---|
| `ww_off_grid_install_solar_tank_pump_wide.jpg` (Drive 1eWXEPrux0Vw4xLQ4qFSczz5JGJ4bDtCC) | file 2026-02-02 | Real rural install: solar panel, green water tank, red gas pump, satellite dish | Real | Feature panel "off-grid, real install"; web-res only (1600x1200) |
| `ww_gas_pump_manifold_controller_kit_staged.jpg` (1T78HCUl5bxGmoI7zIiRqk0HdpkpNXAha) | 2026-02-02 | Earlier-gen gas pump + blue solenoid manifold + controller staged on table | Real | Feature panel "system overview". CAUTION: the red pump looks like a generic engine, not the Honda iGX390; do not caption as DL3000. |
| `ww_complete_kit_manifold_pump_controller_topdown.jpg` (1kZ2oMOiZZeAkYai_8ABy9UBgfrnzKjNU) | 2026-02-02 | Top-down of kit: manifold trough, controller, pump | Real | Secondary panel / "what's in the ecosystem" |
| `dl3000_electric_starter_motor_closeup.jpg` (1IrwWDVAcN_Ph7XZUq1bskyxCtk-GWzzv) | Drive 2025-12 | 12V electric starter (aftermarket QD168F) on pump engine | Real | Engineering detail panel; 5876x7835 very high res |
| `ww_roof_ridge_sprinkler_head_installed.jpg` (1G0sn9kV1xt9933UYwJOp8Q27z6WS5vbm) | 2026-05-19 | Ridge sprinkler head on riser at a real property | Real | "What the pump feeds" panel; portrait |
| `ww_portable_control_unit_case_branded.jpg` (1amCt4orCRK6Bef7iFaK5GxcPl-btw2SZ) | 2026-05-19 | Branded stacked-case portable control unit with connectors and LEDs ("patent pending mobile unit") | Real | Brand/credibility panel (connected-version story, not the DL3000 fob version) |
| `ww_three_zone_valve_manifold_trough.jpg` (17jWjgKVXE5wBc7F_x5nBEHTu0DtND528) | 2026-05-19 | Three blue zone valves in trough, PVC manifold, customer site | Real | Add-on/ecosystem panel |
| `ww_truck_rapid_deploy_case_stack.jpg` (1j7V2euzWHrwQXtEnkG4Py9VIdxUeMk3W) | 2026-05-19 | Stacked control cases in a pickup bed | Real | Lifestyle / mobile-deploy panel |
| `dl3000_build_2026-08_voltage_regulator_harness.jpg` (1U0RLvI6L903iI4fakpaBgzk8bYDGM_Gm) | 2026-08-05 | SH622A-12 voltage regulator + harness plug, bench shot | Real | Build-journal / update posts only |
| `dl3000_build_2026-08_engine_wiring_starter.jpg` (15I6E9NfB0mAco8LSptcuO_HB0348k50S) | 2026-08-08 | Engine-side wiring at starter/solenoid on pump frame | Real | Build-journal only |

Other Aug-2026 Drive photos reviewed and NOT copied (all PXL_20260805_* in My Drive root, ids 15vH5U…, 1_IfnL…, 1rrrit…, 123f6t…, 1vTQ7M…, 1Pmegb…, 1RwZTu…, 1n9C8R…, 1n5hig…, 1vzJUS…, 1Az30y…): near-duplicate close-ups of the same regulator, 6-pin harness plug, and engine wiring, shot indoors on a stove top. Fine for a "how it was built" update, not for the campaign page. `IMG_20260429_093625.jpg` (1e62wIkQ0mALu9DFjOMeQooQz9kTE3VPn, 2026-04-29) is a shop wall with inverter/charge controller wiring - not product.

### A3. Other authentic photo sets in Drive (not downloaded; listed for reference)

- `06_Photos_and_Videos/Photos/Pumps` (folder 1M5iy_wFHkYTnbtFoQrnKecmQXQZYnpVk): `wildfire-watchdog-honda-water-pump-system035..045.jpg`, `off-grid-wildfire-water-pump046..055.jpg`, `wilfire-watchdog-gas-water-pump-20251111_0003..0009` - Nov 2025 / May 2025 pump conversion photos (4-9 MB each). Likely earlier prototype pump; verify engine model before captioning.
- `Photos/Valves and Manifolds` (1kvGcZgBLAR3KnUT5BMLwSktADhE2UOVK): ~35 manifold/valve photos 2025-2026 incl. described files _007/_008 (Bend, OR backyard install).
- `Photos/sprinklers` (1K42NQJ5qxB3pkfhFS2CkmIUvzY0hdfmJ): ~60 roof/eave sprinkler photos, March-May 2026 (IMG_20260308…, IMG_20260406…, IMG_20260507…, roof00xx series).
- `Photos/control_box_photos` (1i6QCwXxlF3DidHX7miKm6GebXzFWXSfk): ~45 control-box/relay/enclosure photos incl. PXL_20260428_2233xx (Apr 2026) and "portable wildfire watchdog unit", "back porch setup", "set up anywhere wildfire remote sprinklers".
- `Photos/Solar` (1Er77kuUbdjv5ZuHDQKm2kiNvEKUi0lSk): solar charge controller, off-grid panel photos (Mar-May 2026).
- `Photos/sensors_photos` (1skwhKl0ZIsQlfcR5p2xOq3qtsfrs97mf): LoRaWAN sensor nodes, flow meter, dashboard PNG screenshots (2025-2026). Relevant to the "Connected" version, not the DL3000 fob SKU.
- `logos` (14JfQT6yr0luexahn-RDA8gFknbE_-uP6) and `02_Marketing/logos and branding` (1syKGYmgK593JFSOiUgOXLJhYwgCmynD3): red WW logo PNGs, dog logo, round logo, hat mockups. Several files are explicitly `ChatGPT Image …png` (AI).
- `10_Images_and_Photos` (1kJKEe0KwFbNG1b19dseCs-08EfDLxHR1): subfolders Wildfire_Watchdog_Photos, Product_and_Parts_Photos, Website_Images, Logos_and_Branding are EMPTY. Marketing_Images contains only Skyliner Buildings carport material (ignored). Index docs (`Images_Index.md`, `Image_Index.md`) are Spanish-language folder guides.

### A4. Videos (metadata only; not viewed)

| Drive title / id | Created / file date | Size | What it likely shows | Suitability |
|---|---|---|---|---|
| `drylightningpt1.mp4` (1TvFvU5bcVXb8DO4tE-i0G9KFiNZA14qg) | 2026-08-30 | 160 MB | Titled "Dry Lightning pt1" - most likely the DL3000 prototype demo (YouTube short source?) | PRIMARY video candidate - review first |
| `PXL_20260817_025402075.mp4` (12MlbRhJh9WbhHNu4SoIxzKVobMIFu3RS) | 2026-08-17 (same night as hero photos) | 135 MB | Phone video shot alongside the product-page photos - probably prototype running/remote start | PRIMARY video candidate |
| `Wildfire Watchdog Automatic Remote Firefighting Pump.mp4` (1J5DdP8cs4Z1xjDjs6NcbW5YKAv_Od7lY) | 2026-09-03 | 65 MB | Edited/exported piece (title suggests finished cut) | Possible campaign video base |
| `remote-start-wildfire-sprinklers-auto-start-gas-pump.mp4` (1S7oDM2zoPVmfNwXt2Kd8-7Cqnx8zr_1T) | file 2026-01-30 | 645 MB | Earlier remote-start pump + sprinklers demo | B-roll (earlier gen) |
| `lorawan-remote-auto-start-gas-pump-wildfire-watchdog.mp4` (12z9grMckpYT3Moy4wNWJTBYJcCIBHUMi) | 2026-01-30 | 441 MB | LoRaWAN auto-start demo | B-roll (connected version) |
| `gas-pump-electronic-ignition-automatic-start-system.mp4` (1RVxtprzTCUxB5BJIq0ZmuXnpBJT4gEi4) | 2026-01-30 | 470 MB | Ignition conversion | B-roll / build story |
| `time-lapse-pump-ignition-system-installation-build.mp4` (1Ir6CLiocSyBXRcDgTrNhxD2vmO70TVB_) | 2026-01-30 | 280 MB | Time-lapse build | Build-story montage |
| `time-lapse-assembling-pump-sensor-system-wildfire-watchdog.mp4` (1rjvWK30qlioTJoAzCUFyKc76j_T9naCb) | 2026-01-30 | 1.4 GB | Time-lapse assembly | Build-story montage |
| `electric-start-gas-pump-auto-ignition-demo.mp4` (1PbwhfLXQ60ykRjhCIXSDpLU9zdP4UFQS) | 2026-01-30 | 21 MB | Short electric-start demo | Short clip |
| `wildfire-sprinkler-pump-upgrade-WUI-fire-protection.mp4` (12v0H-DuG4Ie0Vyvvj0uGBpEttlpoXNfr) | 2026-02-01 | 24 MB | Pump upgrade explainer | Short clip |
| `automatic-wildfire-pump-prototype-v4-fire-defense.mp4` (1MULDb8Lu0QtTA759gHUqAmZ1EbRqmVWO) | 2026-02-01 | 27 MB | Prototype v4 | Short clip (earlier gen) |
| `portable-wildfire-defense-pump-controller-DIY.mp4` (1UEGRLscNvHSydc_Q2FgiOEvYO-gMBzmG) | 2026-02-01 | 32 MB | Controller | B-roll |
| `pump-inverter-b-roll-footage…`, `pump-setup-wiring-configuration…`, `pump-and-ignition-system-pre-installation-setup…`, `first-step-disassembling…`, `disassembling…detailed` (folder `videos/pumps` 1XRleOJpHrnyywoierVjVa6uk-jLFSjEn) | 2026-01-30 | 47-233 MB | Build b-roll | B-roll |
| `remote-wildfire-pump-system080..091.mp4` (same folder) | 2025-2026 | 47-353 MB | Earlier remote pump system clips | B-roll (earlier gen) |
| `wildfire-watchdog_pump-and-valve-system_003.mp4` (19l-Blo_6kVmoaActkvfSPyhhJi5eIjJ4) | 2026-05-19 | 149 MB | Pump + valve system | B-roll |
| `videos/sprinklers` (1YHEuu7Hk4xgVMwNEO6spf9QQbeRAFBvZ) | May 2026 | ~40 clips, 1.6-62 MB | Roof/eave sprinklers running (VID_20260507_0830xx, VID_20260514_1807xx) | Sprinkler-in-action B-roll (May 2026, real) |
| `videos/valves_and _manifolds`, `system_operation`, `b_rolls`, `controllers` | 2025-2026 | various | Valve demos, flow meter, LoRaWAN sensors, "ww under 1 minute video june 2025", "wildfire-emergency-defense-detroit-fire-response-system" | B-roll; some are the connected/sensor product |

Caveat: file titles like "automatic", "auto-start", "LoRaWAN" describe the app/sensor-triggered version. The DL3000 Kickstarter SKU is the manual RF-fob version (no app, no automatic trigger). Do not use footage that implies automatic/sensor-triggered start for the DL3000 without a clear caption.

---

## B. Downloaded local files (`/home/user/skylinerbuildings/kickstarter-campaign/05_media/photos/`)

All verified with PIL (format, pixel size, EXIF-oriented size). Drive IDs in `DRIVE_SOURCES.md` in the same folder.

| File | Format | Pixels (EXIF-oriented) | Size |
|---|---|---|---|
| ww_off_grid_install_solar_tank_pump_wide.jpg | JPEG | 1600x1200 | 0.65 MB |
| ww_gas_pump_manifold_controller_kit_staged.jpg | JPEG | 1600x1200 | 0.49 MB |
| ww_complete_kit_manifold_pump_controller_topdown.jpg | JPEG | 1600x1200 | 0.68 MB |
| dl3000_electric_starter_motor_closeup.jpg | JPEG | 5876x7835 | 4.04 MB |
| ww_roof_ridge_sprinkler_head_installed.jpg | JPEG | 1536x2048 | 1.27 MB |
| ww_portable_control_unit_case_branded.jpg | JPEG | 3060x4080 | 4.17 MB |
| ww_three_zone_valve_manifold_trough.jpg | JPEG | 3060x4080 | 3.69 MB |
| ww_truck_rapid_deploy_case_stack.jpg | JPEG | 3060x4080 | 4.15 MB |
| dl3000_build_2026-08_voltage_regulator_harness.jpg | JPEG | 3000x4000 | 3.04 MB |
| dl3000_build_2026-08_engine_wiring_starter.jpg | JPEG | 3000x4000 | 2.66 MB |

Not downloaded (failed): the six product-page URLs listed in A1 (proxy 403). Kickstarter cover needs 1024x576 min (16:9); the three 1600x1200 web-res files are usable only as inset/feature images.

AI renders/illustrations identified (do NOT present as product photos):
- `ChatGPT Image Sep 14, 2026, 04_59_17 AM.png` (1YRx-U99z_9ri0N8o8zsQIUpBAyKalDzl) - rendered flow-sensor + black control box on wood.
- `ChatGPT-Image-Jun-16-2026-12_03_36-PM.png` and `…12_22_48-PM.png` on wildfirewatchdog.com (used in the June landing page for the suction/discharge "system sequence" diagrams).
- `ChatGPT-Image-Jun-17-2026-11_20_29-AM-2.png` ("Pump diagram with tank and hose (AI illustration)" per WW_Photo_URLs_Master.md).
- `Default_a_logo_of_a_shield_with_the_face_of_a_wolf…jpg` (2023, Leonardo-style AI logo), `Default_Imagine_a_commemorative_wildland_firefighter_shirt…` (AI drawing).
- Logos folder: `ChatGPT Image Mar 30 2026…` x3, `ChatGPT Image Jan 30 2026…` x2.
- The July build doc explicitly says to "Retire from the site: AI dog/volcano renders".

---

## C. Missing shots needed for the campaign video and page (all must be real, not fabricated)

1. **Fob start from distance** - wide shot: operator 50-100+ ft away presses fob, engine cranks and catches in the same frame (two angles: fob hand + machine). This is the single strongest claim ("Remote start, really works").
2. **Full sequence in one take**: Button 3 valve opens -> Button 1 RUN -> Button 2 crank (2-second auto-stop) -> Button 4 throttle to 3,600 RPM. Matches the Quick Start Guide exactly.
3. **Water discharge at full throttle** - 2 in. camlock/fire hose blasting, and a sprinkler line running from the DL3000 (not an earlier pump).
4. **Remote stop / E-stop** - Button 1 kill from distance; show throttle drop to idle and the valve closing automatically (spring-return). Proves the RUN-line interlock/failsafe.
5. **Motorized valve opening/closing close-up** with audible actuator.
6. **Manual override** - starting/stopping the pump with the on-unit switches with the receiver unplugged (backup claim).
7. **Clean product beauty shots on a 16:9 frame** - front, side, rear, top; remote fob in hand; receiver box and Deutsch 6-pin port; Honda iGX390 badge close-up (proves the engine claim).
8. **"What's in the box"** flat-lay per Quick Start Guide: pump, receiver box, 4-button fob, battery leads (ring + clamp), guide, Honda manual. Note battery NOT included.
9. **Range demonstration** - measured distance markers; only publish a number after testing (site says range "will be published after final production testing").
10. **Off-grid context** - pump on a trailer/at a tank, solar/battery, no grid cord; the Field Unit 001 "finished beauty shot" (S8 in the July shot list) if the trailer/carport pump house was completed.
11. **Founder on camera** in the Bend shop, hands wrenching (S7 in the shot list) - the solo-builder story.
12. **Low-water/tank-float cutoff** - only if the DL3000 SKU actually has it (the fob version spec does not list it; if not, do NOT stage it).
13. **Night/ember scenario** - only real footage of the unit running at dusk/night with sprinklers; no simulated fire, no stock wildfire footage presented as the product in use.
14. **Verified GPM/PSI test** on camera with gauge/flow meter if the "up to 150 GPM / 140 PSI" figure will be used.

---

## D. Existing website and ad messaging - summary and flagged claims

### D1. Landing page `Wildfire_Watchdog_Landing_FINAL_v3.html` (Drive 1IFPs4ecbts3l30Fh7zYFeiZailwMW70v, June 2026)

Messaging: "Move Water Fast When It Matters Most." Remote-ready wildfire preparedness pump systems; off-grid, gas-powered, remote-activated; Honda iGX390; 2" fire hose; ESP32 controller. Sections: The Problem, Engineered Water Path (gravity tank -> 2" valve -> suction hose -> 150 micron Y-strainer -> pump -> camlock -> 50 ft fire hose -> bypass relief), Why a Prepared System Wins, The Engine, Control System (ESP32 + ESP8266 receivers, "Phone, app, or button"), Six Systems One Platform, Real Builds gallery, FAQ, safety disclaimer. Strong disclaimers already present: not a certified fire sprinkler system; cannot replace evacuation; qualified installer recommended.

Flagged risky claims:
- **"the only remote-start gas pump system of its kind in the USA"** and **"The Only Remote-Start Gas Pump System In The USA"** (hero + engine section). Unsupported superlative; the RF briefing itself lists competitors (HPC-2, Pinellas Power Products, Start Smart Box, All West Soft Wash) that offer engine remote start. Do not carry to Kickstarter.
- **"Flame Sensor - Live Detection"** label on the engine card - implies fire-detection capability; the DL3000 SKU is explicitly "not a monitoring, alarm or fire-detection device".
- **"Automated start/stop"**, **"Phone, app, or button"**, **"Activated by phone, app, radio, or button"**, "Solar-backed" - describe the ESP32/app version, not the RF-fob DL3000 (no app, no cloud, no monitoring).
- Images used: 2025/08 series (41, 42, 44, 47, 51 etc. - real install photos) plus two ChatGPT PNGs for the system-sequence diagrams (AI, unlabeled).

### D2. Live DL3000 product page `DL3000_ProductPage_Divi_v2_insurance_clean_2026-09-11.html` (Drive 1gtG1cPmpw3QBWe4be3PMXVWjvS9CTwzr)

Messaging: "Dry Lightning 3000 Gas Engine-Driven Water Pump with Wireless Remote Start"; Honda iGX390 389cc; handheld remote start/stop/throttle/valve; rolling-code RF, local range; no internet/app/account; one-shot starter protection and maximum-run shutdown; manual controls as backup; "Built and tested in Bend, Oregon"; "ACTUAL PROTOTYPE SHOWN" badge. Buy box: **Target retail price $5,500.00**, "Made to order", motorized valve add-on "Price to be confirmed", "Commercial configuration under final development". Fine print: "Specifications are preliminary. Verified flow, pressure, suction lift, dimensions, weight, fuel use and remote range will be published after final production testing." Safety tab + "Preparedness equipment - not a guarantee" box. This version is deliberately insurance-scoped and is the safest copy baseline for Kickstarter.

Flags: none of the "only in USA" claims; watch that "Product support ... from the builder", "Replacement-parts program planned", "Freight-ready pallet planning" stay true. The gallery includes the "Please Do Not Share" parts-sequence image.

### D3. Internal specs that must not be over-stated

- `RF_Remote_Control_DL3000_Project_Briefing.md` (1PHYC9ZoPC3VXtSd3Yvx5E-y2XAcqtcvG, 2026-09-10): "up to 150 GPM / 140 PSI", MSRP $5,500, COGS ~$2,000, "patent pending (2 USPTO provisional filings covering the automatic/sensor-triggered version)" - the briefing itself says the provisionals **do not apply to the manually-operated RF fob**, so "patent pending" should not be attached to the DL3000 fob SKU. Receivers are Solidremote 202U (rolling code, **no AES**, shorter range than 402U) - do not claim "encrypted". Insurance not yet bound; UL/ETL not obtained (not required for direct sales). Required insurance product description must be used verbatim.
- `DL3000_Quick_Start_Guide_v1_2026-09-12.pdf` (1DAi_Jpzp3yorzZ_CXT1l1tvEI40nCbw_): battery not included; "not intended for unattended or automatic operation"; valve closes automatically on shutdown; 2-second starter pulse; 3,600 RPM full throttle.
- `Launch_Checklist_Wireless_Submersible_Pump.md` (1qTcOkeIG0rtGN1qROdPQFiBqrIG_L2xV): Stripe still in TEST mode; disclaimer must say "reduces wildfire risk, does NOT guarantee protection"; get a lawyer hour before taking money.
- `FIELD_UNIT_001_BUILD_SEQUENCE_AND_SHOT_LIST.md` (1WifXw0x_Yvs8gHZWon7KNWCufF4wL69a, 2026-07-05): shot list S1-S8 (phone-tap start, water blasting, auto-prime, solar/battery no cord, float trips, control panel close-up, builder hands, hero wide). Instructs retiring "your house will not burn" claim and AI dog/volcano renders from the site. This doc describes the WP-20 / ESP-NOW / Tago dashboard trailer build, i.e. the connected version.

### D4. Ad copy and Meta material

- **11_Meta_Ads** folder (1gpjUYV3cjBjbk9cDt1LIxRKt2RW_8dX_) is EMPTY. 09_Marketing_and_Sales (1ekp-EktfhrCmcp1jjaahe8zIbmOMBEFb) and 12_Photos_and_Diagrams (1VYA0AaJgATbo-DM3d9UTnNWaW3uB3VrC) are EMPTY.
- The "ad automation pipeline" referenced in the launch checklist (folder 1Ia4icaXK2Ry7rzjPVw1vv5fsyW4sgwNm: `hooks.txt`, `winners.csv`, `bulk_canva.csv`, `Make_Ads.ps1`, `review.html`, `UPLOAD_CHECKLIST.txt`) is entirely **Skyliner Buildings carport** material (30 hooks: price transparency, ownership vs rent, social proof, instant builder, certification; winners.csv = competitor carport ad swipe file). No Wildfire Watchdog Meta ads, spend, CPL or conversion data exist anywhere in Drive. The RF briefing says the demand test (measuring cost-per-lead) is still a TODO.
- `Marketing_Message.md` (1OWwtf1ururdrFTwl0JLG9fUfUmutVpwt, 2026-06-24) - WW angles to test: (1) fear "When the evacuation order comes, will your property be ready?", (2) automation "Your pump starts itself. Your sprinklers run themselves.", (3) off-grid "No internet required. No one needs to be on-site.", (4) community/HOA, (5) testimonial: Matt Vorsenger Metolius River 3-building install. Note angles 2 and 3 ("no one on-site", "starts itself") contradict the DL3000 fob SKU ("operator present to supervise", not automatic). Angle 5 needs a signed release.
- `Facebook_Ad_Template` (1Q4kWzyPNfnZPn8Y8I2bakcquxTSC-WM4dFKBZNnjBNI) and `Website Hero Copy` (19fFFFM2wrN-m16oHOoJdgdPiNoHTq3Hm16VeApT2NUc), May 2026: generic "remote wildfire protection system ... sprinklers, pump automation, sensors, cameras, dashboards" copy - again the connected system, no results data.
- `Winning_Hooks` doc (1ccXQfMJ_E0kaZSerLcZC48RlUNBaHjvcJ1s6tcyTZE4) is empty. `TikTok video script template`, `03_Instagram_Post_Template`, `Craigslist Ad Template` in 02_Marketing are Skyliner/generic templates.

### D5. Live website state

Could not be fetched (egress blocked). Best available proxy is the Drive copy of the Sept 11 product page (D2) plus the June landing page (D1). The product page header notes old posts should be set to Draft/Private; whether that was done is unverified.

---

## E. Usage-rights notes

- All Drive photos/videos are owned by Wildfire Watchdog LLC (Drive owner thewildfirewatchdog@gmail.com; folder 10_Images_and_Photos is owned by installedcarports@gmail.com, same founder). Website uploads are the founder's own site. Safe to use for the campaign.
- Customer-site photos (Bend backyard manifold _007/_008, Metolius River install, `IMG_2026050x` sprinkler photos on a client's stucco house) show private property; get a written release before using them as "reference sites" (the July build doc already calls for a 1-page film/reference-site release for Founding Pilots).
- `Wildfire-Watchdog-Sequence-of-Parts-Please-Do-Not-Share-1.jpg`: treat as internal despite being on the public page; get explicit founder approval.
- AI-generated images (ChatGPT/Leonardo files listed in B): Kickstarter's rules require disclosure of AI-generated content and prohibit misleading product imagery; do not use them as product photos. Logos derived from AI generators may have weak trademark standing.
- Third-party brand names: "Honda iGX390" and "Solidremote" are factual component references only; do not imply endorsement. Stock/"Detroit fire response" video in b_rolls - verify provenance before use.
- No stock footage or licensed music inventoried; any campaign-video music must be licensed separately.

---

## F. Network probe results (2026-09-17)

- `curl` to all six https://wildfirewatchdog.com/wp-content/uploads/2026/08/... URLs: `curl: (56) CONNECT tunnel failed, response 403`; agent-proxy status: `wildfirewatchdog.com:443 connect_rejected (organization policy)` x7.
- `curl -sI https://youtube.com/shorts/BqMepkZrpSg`: 403 from proxy; `youtube.com:443 connect_rejected` x2. Title not retrievable. Probable local source of the same footage: `drylightningpt1.mp4` (Drive 1TvFvU5bcVXb8DO4tE-i0G9KFiNZA14qg, 2026-08-30) or `PXL_20260817_025402075.mp4`.
- `curl https://wildfirewatchdog.com` and WebFetch: EGRESS_BLOCKED. Homepage contents summarized from the Drive HTML copies instead (sections D1/D2).
- Action for the founder: upload the six PXL_20260817 originals (plus the fob composite) to Drive `06_Photos_and_Videos/Photos/Pumps` or to `kickstarter-campaign/05_media/photos/`, and export the YouTube short's source file.
