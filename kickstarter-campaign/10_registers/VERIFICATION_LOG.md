# Verification Log (2026-09-17)

| Check | Method | Result |
|---|---|---|
| Workbook formulas | Rebuilt from `build_workbook.py`; recalculated with the `formulas` Python engine (LibreOffice could not load files in this sandbox) | 0 formula errors across 9 sheets |
| Fee math | Rewards sheet: $4,999 + $349 pledge → $267.40 KS fee, $160.64 processing, $4,919.96 net | Matches 5% + 3% + $0.20 |
| Goal derivation | Funding_Goal sheet: 10 units × ($2,665 + $380) + $17,438 one-time + 10% contingency = $52,677 ÷ 0.892 take-home = $59,041 → $60,000 | Consistent |
| Prices in copy vs model | Script compared MASTER_CAMPAIGN, rewards, preview, upload package against Inputs | All 7 values match |
| Banned claims | Regex over all copy for only/guaranteed/saves lives/prevents injury/fireproof/patented/encrypted/partnered | Only negations, disclaimers and the policy text itself matched |
| Source support | Every factual statement in MASTER_CAMPAIGN traced to a row in SOURCE_INDEX or marked [REVIEW] | Done; 5 [REVIEW] notes remain for the founder |
| Links | Drive links in research files are the IDs returned by the Drive connector | Valid at time of writing |
| Graphics | Rendered and inspected (7 PNGs, 1024×576) | Title clipping fixed; diagram overflow fixed |
| Mobile layout | Playwright, Chromium, 390×844: scrollWidth = 390 on both pages (no horizontal scroll) | Pass |
| Signup form | Test-mode submit with valid email + consent | Logged to console only; nothing sent or stored |
| Spreadsheet ↔ copy agreement | Use-of-funds graphic values equal Funding_Goal/Scenarios values | Consistent |
| Skeptical backer pass | Questions a backer would ask were folded into the 23-item FAQ and Risks | Done |
| Advisor pass | Break-even, stress tests, minimum cash and caps checked for plausibility | Base surplus is thin (~$7.5k) mainly because a full year of $10.6k insurance is loaded on the campaign; flagged in START HERE decisions 2 and 4 |

Not verified in this session: Kickstarter character limits and the reward-description limit (proxy blocked Kickstarter pages; re-check in the editor), YouTube short contents, live website hero photos, KVM 2 state.
