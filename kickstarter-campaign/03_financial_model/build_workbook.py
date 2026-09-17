#!/usr/bin/env python3
"""Builds the Wildfire Watchdog Kickstarter financial workbook with live formulas.
Every number the advisor may want to change lives on the Inputs sheet (blue cells).
Run: python3 build_workbook.py  -> writes WW_Kickstarter_Financial_Model_v1.xlsx
"""
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.table import Table, TableStyleInfo

wb = Workbook()
BLUE = Font(color="1F4E9E", bold=False)
BOLD = Font(bold=True)
HDR = PatternFill("solid", fgColor="1C1C1C")
HDRF = Font(bold=True, color="FFFFFF")
INPUT_FILL = PatternFill("solid", fgColor="E8F0FE")
NOTE = Font(italic=True, color="5D5D5D", size=9)
MONEY = '"$"#,##0;[Red]-"$"#,##0'
MONEY2 = '"$"#,##0.00;[Red]-"$"#,##0.00'
PCT = '0.0%'
thin = Side(style="thin", color="DCDCDC")
BOX = Border(top=thin, bottom=thin, left=thin, right=thin)


def hdr(ws, row, values, widths=None):
    for i, v in enumerate(values, 1):
        c = ws.cell(row=row, column=i, value=v)
        c.fill, c.font, c.alignment = HDR, HDRF, Alignment(wrap_text=True, vertical="center")
    if widths:
        for i, w in enumerate(widths, 1):
            ws.column_dimensions[get_column_letter(i)].width = w


def inp(ws, row, label, value, fmt=None, status="ESTIMATE", basis="", low=None, high=None, name=None):
    ws.cell(row=row, column=1, value=label)
    c = ws.cell(row=row, column=2, value=value)
    c.font, c.fill, c.border = BLUE, INPUT_FILL, BOX
    if fmt:
        c.number_format = fmt
    ws.cell(row=row, column=3, value=status)
    ws.cell(row=row, column=4, value=basis).font = NOTE
    if low is not None:
        lc = ws.cell(row=row, column=5, value=low); lc.number_format = fmt or "General"
    if high is not None:
        hc = ws.cell(row=row, column=6, value=high); hc.number_format = fmt or "General"
    if name:
        wb.defined_names[name] = __import__("openpyxl").workbook.defined_name.DefinedName(name, attr_text=f"Inputs!$B${row}")
    return f"Inputs!$B${row}"


# ---------------------------------------------------------------- README
ws = wb.active
ws.title = "README"
ws.column_dimensions["A"].width = 120
lines = [
    ("Wildfire Watchdog — Dry Lightning 3000 Kickstarter Financial Model v1 (DRAFT for advisor review)", BOLD),
    ("Built 2026-09-17. All formulas are live. Change blue cells on the Inputs sheet only; every other sheet recalculates.", None),
    ("", None),
    ("Status labels used in column C of Inputs:", BOLD),
    ("  VERIFIED = supported by a receipt, quote, signed document or measured test in the Wildfire Watchdog Drive records.", None),
    ("  ESTIMATE = founder or producer estimate with a stated basis and a low/high range (columns E and F).", None),
    ("  PROPOSED = a campaign design choice (price, quantity, policy) awaiting Jeremy's and the advisor's approval.", None),
    ("  UNKNOWN = no evidence yet; a placeholder that must be replaced before launch.", None),
    ("", None),
    ("Sheets:", BOLD),
    ("  Inputs — every assumption (costs, fees, prices, quantities, timing).", None),
    ("  Unit_Cost — per-unit bill of materials for the DL3000 in three cost scenarios.", None),
    ("  Rewards — each reward tier: price, shipping, fees, per-unit cost, contribution margin.", None),
    ("  Scenarios — Conservative / Base / Optimistic backer mixes → gross pledges, fees, dropped pledges, net cash, costs, surplus.", None),
    ("  Funding_Goal — the goal derived from one-time costs plus the minimum production batch; break-even backer counts.", None),
    ("  Cash_Timing — month-by-month cash from prelaunch through fulfillment, including the minimum cash Jeremy needs before Kickstarter pays out.", None),
    ("  Stress_Tests — cost overruns, delays, worse reward mixes.", None),
    ("  Capacity — assembly hours and units per week (fulfillment capacity limit).", None),
    ("", None),
    ("Fee treatment: Kickstarter's 5% fee and the payment-processing fee (3% + $0.20 per pledge) are charged on the TOTAL pledge including shipping. Dropped (failed) pledges are removed before fees. Shipping is charged as a separate line inside each pledge and is shown separately from reward price.", None),
    ("No sales tax is collected via Kickstarter; Oregon has no state sales tax. Backers in other states may owe use tax (their responsibility). Income tax on any surplus is the company's responsibility and is shown as a reserve line.", None),
    ("Volume discounts on parts are MODELED (not quoted) and are labeled as such on Inputs.", None),
]
for i, (t, f) in enumerate(lines, 1):
    c = ws.cell(row=i, column=1, value=t)
    c.alignment = Alignment(wrap_text=True)
    if f:
        c.font = f

# ---------------------------------------------------------------- INPUTS
ws = wb.create_sheet("Inputs")
hdr(ws, 1, ["Input", "Value", "Status", "Basis / source", "Low", "High"], [46, 14, 12, 90, 10, 10])
r = 2
def section(title):
    global r
    r += 1
    ws.cell(row=r, column=1, value=title).font = BOLD
    r += 1

section("A. Platform fees and collections")
KS_FEE = inp(ws, r, "Kickstarter platform fee (% of collected pledges)", 0.05, PCT, "VERIFIED", "Kickstarter fees page (US): 5% of funds collected on successful projects", name="ks_fee"); r += 1
PP_FEE = inp(ws, r, "Payment processing fee (% of pledge)", 0.03, PCT, "VERIFIED", "Kickstarter fees page (US): 3% + $0.20 per pledge", name="pp_fee"); r += 1
PP_FIX = inp(ws, r, "Payment processing fixed fee per pledge ($)", 0.20, MONEY2, "VERIFIED", "Kickstarter fees page (US)", name="pp_fix"); r += 1
DROP = inp(ws, r, "Dropped / failed pledges (% of pledged $)", 0.03, PCT, "ESTIMATE", "Typical reported range 1–5% for hardware; conservative 3% used", 0.01, 0.05, name="drop_rate"); r += 1
PAYOUT_DAYS = inp(ws, r, "Days after campaign end until funds arrive", 14, None, "VERIFIED", "Kickstarter: funds transferred ~14 days after a successful campaign ends", name="payout_days"); r += 1

section("B. Campaign design (PROPOSED)")
CAMP_DAYS = inp(ws, r, "Campaign length (days)", 30, None, "PROPOSED", "Kickstarter recommends 30 days or fewer; prelaunch page 4–6 weeks before", name="camp_days"); r += 1
LAUNCH = inp(ws, r, "Planned launch date", "2027-01-19", None, "PROPOSED", "After holidays, inside the Oct–Mar planning season, before Northern Tool listing; allows Jan demo video", name="launch_date"); r += 1
MIN_BATCH = inp(ws, r, "Minimum production batch the goal must fund (units)", 10, None, "PROPOSED", "Business plan (2026-09-15) sizes Kickstarter at 10–20 units; 10 = smallest sensible parts order", 8, 15, name="min_batch"); r += 1

section("C. Reward prices and shipping (PROPOSED) — see Rewards sheet for inclusions")
P_SUPPORT = inp(ws, r, "Tier 1 — Supporter (decal + backer wall) price", 35, MONEY, "PROPOSED", "Low tier for friends/family/community; keeps backer count and social proof up", name="p_support"); r += 1
P_FOBKIT = inp(ws, r, "Tier 2 — Remote Control Kit (retrofit for Honda iGX390 electric-start pumps) price", 1250, MONEY, "PROPOSED", "Harness + 2 rolling-code receivers + fob + relay/valve box; only for owners of a compatible pump (see compatibility note on Rewards)", 995, 1495, name="p_fobkit"); r += 1
P_EARLY = inp(ws, r, "Tier 3 — DL3000 Early Bird price", 4699, MONEY, "PROPOSED", "6% below the $4,999 MAP proposed on the Northern Tool quote sheet (2026-09-12 packet); rewards first movers; limited to 10", 4499, 4999, name="p_early"); r += 1
P_STD = inp(ws, r, "Tier 4 — DL3000 Kickstarter price", 4999, MONEY, "PROPOSED", "Equal to the $4,999 MAP proposed to Northern Tool, so the campaign never undercuts a future retail partner", 4799, 5499, name="p_std"); r += 1
P_HOSE = inp(ws, r, "Tier 5 — DL3000 + Hose & Nozzle Package price", 5599, MONEY, "PROPOSED", "Kickstarter price + $600 package: 2 in. discharge hose (50 ft), adjustable nozzle, suction hose, strainer, spare fob", 5399, 5899, name="p_hose"); r += 1
SHIP_PUMP = inp(ws, r, "Shipping charged to backer per pump (US contiguous, LTL freight to residential w/ liftgate)", 349, MONEY, "ESTIMATE", "Packed 40×28×24 in, 165 lb per Northern Tool quote sheet (2026-09-12); LTL residential + liftgate from Bend OR typically $250–$450; get 2 carrier quotes", 250, 450, name="ship_pump"); r += 1
SHIP_KIT = inp(ws, r, "Shipping charged per Remote Control Kit (UPS Ground)", 25, MONEY, "ESTIMATE", "~8 lb box", 18, 35, name="ship_kit"); r += 1
SHIP_SUP = inp(ws, r, "Shipping charged per Supporter tier (USPS)", 0, MONEY, "PROPOSED", "Decal mailed first-class; cost absorbed", name="ship_sup"); r += 1

section("D. Actual shipping cost paid by Wildfire Watchdog")
COST_SHIP_PUMP = inp(ws, r, "Actual freight cost per pump (crate + LTL residential + liftgate)", 380, MONEY, "ESTIMATE", "Includes ~$60 crate materials; verify with 2 LTL quotes before launch", 300, 500, name="cost_ship_pump"); r += 1
COST_SHIP_KIT = inp(ws, r, "Actual shipping cost per kit", 22, MONEY, "ESTIMATE", "UPS Ground 8 lb, box", 15, 30, name="cost_ship_kit"); r += 1
COST_SHIP_SUP = inp(ws, r, "Actual mailing cost per supporter reward", 2.5, MONEY2, "ESTIMATE", "First-class envelope + decal", 1.5, 4, name="cost_ship_sup"); r += 1

section("E. Per-unit DL3000 parts (Base = 10-unit pricing). Volume discounts are MODELED, not quoted.")
C_ENGINE = inp(ws, r, "Honda iGX390 electric-start engine (with 12V charging coil)", 1150, MONEY, "ESTIMATE", "Retail iGX390 ES lists ~$1,100–$1,300 at US dealers; no dealer quote on file yet", 1050, 1300, name="c_engine"); r += 1
C_PUMPEND = inp(ws, r, "High-pressure pump end (2 in./3 in., matched to iGX390)", 260, MONEY, "ESTIMATE", "Business plan 2026-09-15 lists $130 imported at 50 units; single-unit purchase pricing is higher", 130, 350, name="c_pumpend"); r += 1
C_FRAME = inp(ws, r, "Frame / skid / roll cage (steel, powder coat)", 260, MONEY, "ESTIMATE", "Business plan: $220 at 50 units; small batch local fab higher", 200, 350, name="c_frame"); r += 1
C_REMOTE = inp(ws, r, "RF remote system: 2× Solidremote 202U kits (4 fobs), 3 relays, Deutsch 6-pin, fuses, wire, switches, enclosure", 190, MONEY, "ESTIMATE", "Briefing 2026-09-10 parts list; business plan: $140 at 50 units", 140, 240, name="c_remote"); r += 1
C_VALVE = inp(ws, r, "2 in. 12V spring-return electric ball valve + float valve + camlock fittings", 230, MONEY, "ESTIMATE", "Business plan: $180 at 50 units; spring-return actuators are the cost driver", 180, 300, name="c_valve"); r += 1
C_POWER = inp(ws, r, "12V battery, USB power bank, solar maintainer, cabling", 140, MONEY, "ESTIMATE", "Business plan: $120 at 50 units", 100, 180, name="c_power"); r += 1
C_LABOR = inp(ws, r, "Assembly + test labor per unit (hours × rate)", 240, MONEY, "ESTIMATE", "~6 h per unit in small batch (founder + helper) × $40/h loaded; business plan assumes 3 h subcontracted at 50+", 160, 320, name="c_labor"); r += 1
C_QC = inp(ws, r, "Quality check: wet test fuel, consumables, labels, manual printing", 45, MONEY, "ESTIMATE", "Fuel for 30-min wet test, oil, warning labels, printed quick-start guide", 30, 70, name="c_qc"); r += 1
C_PACK = inp(ws, r, "Packaging: pallet, crate, straps, foam (excluding freight)", 0, MONEY, "ESTIMATE", "Included in actual freight line above to avoid double counting", name="c_pack"); r += 1
C_WARR = inp(ws, r, "Warranty reserve per pump (% of reward price basis, applied as $)", 150, MONEY, "ESTIMATE", "~3% of price, per business plan practice (3%)", 100, 250, name="c_warr"); r += 1
C_HOSEPKG = inp(ws, r, "Hose & Nozzle Package parts cost (2 in. × 50 ft hose, nozzle, suction hose, strainer, spare fob)", 420, MONEY, "ESTIMATE", "Commodity fire hose $180–$250, nozzle $60–$120, suction kit $80–$120, fob $25", 340, 520, name="c_hosepkg"); r += 1
C_KIT = inp(ws, r, "Remote Control Kit parts cost (harness, 2 receivers, fob, relays, valve actuator, enclosure) + 2 h labor", 470, MONEY, "ESTIMATE", "Remote parts $190 + valve actuator $180 + labor $80 + labels/manual $20", 380, 560, name="c_kit"); r += 1
C_SUPPORT = inp(ws, r, "Supporter reward cost (decal, printing)", 3, MONEY2, "ESTIMATE", "Vinyl decal $1–$2 + backer wall = website page", 1, 5, name="c_support"); r += 1
VOL_DISC = inp(ws, r, "Modeled parts discount at 20+ units (%)", 0.08, PCT, "ESTIMATE", "MODELED, NOT QUOTED. Business plan shows ~15% from 50→150 units; 8% assumed for 10→20+", 0.0, 0.12, name="vol_disc"); r += 1
COST_OVER = inp(ws, r, "Conservative scenario cost overrun (%)", 0.15, PCT, "ESTIMATE", "Stress factor applied to all parts + labor", 0.10, 0.30, name="cost_over"); r += 1

section("F. One-time campaign and production costs (before or during fulfillment)")
O_INSUR = inp(ws, r, "Product/general liability insurance, year 1", 10598, MONEY, "VERIFIED (quote)", "StarStone via RPS: $10,598.05, $2M/$4M occurrence (the limits Northern Tool requires; business plan 2026-09-15 budgets this). Alternative Kinsale quote 2026-09-01 #07520376: $4,597.91 ($1M/$2M claims-made). Neither bound.", 4598, 10598, name="o_insur"); r += 1
O_FCC = inp(ws, r, "FCC Supplier's Declaration of Conformity (host device with pre-certified modules)", 2500, MONEY, "ESTIMATE", "Briefing 2026-09-10: SDoC path ~$1K–$5K", 1000, 5000, name="o_fcc"); r += 1
O_TEST = inp(ws, r, "Engineering validation: flow/pressure test with calibrated gauge & flow meter, failsafe timing test, 3rd-party review of harness", 1500, MONEY, "ESTIMATE", "Flow meter + gauges ~$400, test fixture, 1 day outside review", 800, 3000, name="o_test"); r += 1
O_TOOL = inp(ws, r, "Assembly fixtures, crimp tools, crate template, labels design", 1200, MONEY, "ESTIMATE", "Business plan: $5,000 for storage/jigs/QC tools at 50 units; scaled to 10–20", 800, 2500, name="o_tool"); r += 1
O_VIDEO = inp(ws, r, "Campaign video & photos (self-shot; gimbal/mic/lights, editing)", 500, MONEY, "ESTIMATE", "Business plan: ~$500 one-time for demo video", 200, 1500, name="o_video"); r += 1
O_LEGAL = inp(ws, r, "Warranty, terms of sale and backer agreement review (attorney, 2–3 h)", 900, MONEY, "ESTIMATE", "Optional but recommended; in-house drafts prepared", 0, 2500, name="o_legal"); r += 1
O_PATENT = inp(ws, r, "USPTO non-provisional filing (micro entity, self-filed) — due 2027-01-11", 1500, MONEY, "ESTIMATE", "Business plan 2026-09-15 line item; NOT a Kickstarter delivery cost, listed as use-of-funds option", 1000, 4000, name="o_patent"); r += 1
O_ADS = inp(ws, r, "Optional paid advertising during campaign (separately costed; can be $0)", 1500, MONEY, "PROPOSED", "See marketing plan: $0 organic path + optional $1,500 Meta test; not required for goal", 0, 5000, name="o_ads"); r += 1
O_SOFT = inp(ws, r, "Software/support tools (email service, backer survey tool, domain) for 6 months", 240, MONEY, "ESTIMATE", "$30–$40/month", 120, 400, name="o_soft"); r += 1
O_CONT = inp(ws, r, "Contingency (% of one-time + per-unit costs)", 0.10, PCT, "PROPOSED", "Standard 10% hardware contingency", 0.05, 0.20, name="contingency"); r += 1
O_TAXRES = inp(ws, r, "Income tax reserve on surplus (%)", 0.25, PCT, "ESTIMATE", "Single-member LLC pass-through; federal + Oregon combined estimate", 0.20, 0.35, name="tax_res"); r += 1

section("G. Backer mix — Conservative / Base / Optimistic (units per tier)")
mix_rows = {}
for label, cons, base, opt, nm in [
    ("Tier 1 Supporter backers", 40, 80, 150, "supporters"),
    ("Tier 2 Remote Control Kit backers", 2, 5, 10, "kits"),
    ("Tier 3 DL3000 Early Bird backers (cap 10)", 5, 10, 10, "early"),
    ("Tier 4 DL3000 Kickstarter price backers", 2, 5, 12, "std"),
    ("Tier 5 DL3000 + Hose package backers", 1, 3, 6, "hose"),
]:
    ws.cell(row=r, column=1, value=label)
    for col, v in zip((2, 5, 6), (base, cons, opt)):
        c = ws.cell(row=r, column=col, value=v); c.font = BLUE; c.fill = INPUT_FILL; c.border = BOX
    ws.cell(row=r, column=3, value="PROPOSED")
    ws.cell(row=r, column=4, value="Column B = Base, E = Conservative, F = Optimistic. Pump tiers sized to business-plan Kickstarter target of 10–20 pumps.").font = NOTE
    mix_rows[nm] = r
    r += 1

section("H. Capacity and timing")
HRS_WK = inp(ws, r, "Founder assembly hours available per week", 25, None, "ESTIMATE", "Part-time alongside other work", 15, 40, name="hrs_wk"); r += 1
HRS_UNIT = inp(ws, r, "Hours per pump (assembly + wet test + crate)", 6, None, "ESTIMATE", "Small-batch, founder-built; falls to ~3 h with jigs/subcontract", 4, 9, name="hrs_unit"); r += 1
LEAD_ENG = inp(ws, r, "Engine + pump-end lead time after order (weeks)", 3, None, "ESTIMATE", "Honda iGX390 stocked by US distributors; pump ends 2–6 weeks", 2, 8, name="lead_eng"); r += 1
DEPOSIT_PCT = inp(ws, r, "Supplier deposit required before Kickstarter payout (% of parts)", 0.0, PCT, "PROPOSED", "Path that minimises cash: order engines/parts only after payout (day ~14). Set >0 to model pre-ordering", 0, 0.5, name="deposit_pct"); r += 1

# ---------------------------------------------------------------- UNIT COST
ws = wb.create_sheet("Unit_Cost")
hdr(ws, 1, ["DL3000 per-unit cost", "Base (10 units)", "Conservative (+overrun)", "Optimistic (20+ units, modeled discount)", "Notes"], [58, 18, 22, 30, 60])
items = [("Engine", "c_engine"), ("Pump end", "c_pumpend"), ("Frame / skid", "c_frame"), ("RF remote system", "c_remote"),
         ("Valve, float, camlock", "c_valve"), ("Battery / power", "c_power"), ("Assembly + test labor", "c_labor"),
         ("QC consumables, labels, manual", "c_qc"), ("Packaging (see freight)", "c_pack"), ("Warranty reserve", "c_warr")]
row = 2
for label, nm in items:
    ws.cell(row=row, column=1, value=label)
    ws.cell(row=row, column=2, value=f"={nm}").number_format = MONEY
    if nm in ("c_labor", "c_warr", "c_qc"):
        ws.cell(row=row, column=3, value=f"={nm}*(1+cost_over)").number_format = MONEY
        ws.cell(row=row, column=4, value=f"={nm}").number_format = MONEY
        ws.cell(row=row, column=5, value="Labor/QC/warranty not discounted at volume").font = NOTE
    else:
        ws.cell(row=row, column=3, value=f"={nm}*(1+cost_over)").number_format = MONEY
        ws.cell(row=row, column=4, value=f"={nm}*(1-vol_disc)").number_format = MONEY
    row += 1
ws.cell(row=row, column=1, value="TOTAL per-unit cost (ex freight)").font = BOLD
for col in (2, 3, 4):
    L = get_column_letter(col)
    c = ws.cell(row=row, column=col, value=f"=SUM({L}2:{L}{row-1})"); c.font = BOLD; c.number_format = MONEY
UNIT_TOTAL_ROW = row
wb.defined_names["unit_cost_base"] = __import__("openpyxl").workbook.defined_name.DefinedName("unit_cost_base", attr_text=f"Unit_Cost!$B${row}")
wb.defined_names["unit_cost_cons"] = __import__("openpyxl").workbook.defined_name.DefinedName("unit_cost_cons", attr_text=f"Unit_Cost!$C${row}")
wb.defined_names["unit_cost_opt"] = __import__("openpyxl").workbook.defined_name.DefinedName("unit_cost_opt", attr_text=f"Unit_Cost!$D${row}")
row += 2
ws.cell(row=row, column=1, value="Reference: business plan 2026-09-15 estimated $1,700/unit at 50 units (NorthStar e420 engine) and line sheet 2026-08-25 stated ~$2,000 COGS (Honda iGX390). This model uses Honda iGX390 at 10-unit pricing, which is why Base is higher.").font = NOTE

# ---------------------------------------------------------------- REWARDS
ws = wb.create_sheet("Rewards")
hdr(ws, 1, ["Tier", "Reward price", "Shipping charged", "Total pledge", "KS fee 5%", "Processing 3%+$0.20", "Net cash to WW", "Reward cost (base)", "Actual shipping cost", "Contribution margin $", "Margin % of net", "Qty cap", "Est. delivery"],
    [40, 13, 13, 13, 11, 14, 14, 16, 14, 16, 12, 9, 14])
tiers = [
    ("T1 Supporter — decal, backer wall, updates", "p_support", "ship_sup", "c_support", "cost_ship_sup", "no cap", "Mar 2027"),
    ("T2 Remote Control Kit (Honda iGX390 electric-start retrofit)", "p_fobkit", "ship_kit", "c_kit", "cost_ship_kit", 10, "May 2027"),
    ("T3 DL3000 Early Bird", "p_early", "ship_pump", "unit_cost_base", "cost_ship_pump", 10, "Jun 2027"),
    ("T4 DL3000 Kickstarter price", "p_std", "ship_pump", "unit_cost_base", "cost_ship_pump", 15, "Jul 2027"),
    ("T5 DL3000 + Hose & Nozzle Package", "p_hose", "ship_pump", "unit_cost_base+c_hosepkg", "cost_ship_pump", 10, "Jul 2027"),
]
for i, (name, p, s, c, sc, cap, deliv) in enumerate(tiers, 2):
    ws.cell(row=i, column=1, value=name)
    ws.cell(row=i, column=2, value=f"={p}").number_format = MONEY
    ws.cell(row=i, column=3, value=f"={s}").number_format = MONEY
    ws.cell(row=i, column=4, value=f"=B{i}+C{i}").number_format = MONEY
    ws.cell(row=i, column=5, value=f"=D{i}*ks_fee").number_format = MONEY2
    ws.cell(row=i, column=6, value=f"=D{i}*pp_fee+pp_fix").number_format = MONEY2
    ws.cell(row=i, column=7, value=f"=D{i}-E{i}-F{i}").number_format = MONEY2
    ws.cell(row=i, column=8, value=f"={c}").number_format = MONEY
    ws.cell(row=i, column=9, value=f"={sc}").number_format = MONEY2
    ws.cell(row=i, column=10, value=f"=G{i}-H{i}-I{i}").number_format = MONEY2
    ws.cell(row=i, column=11, value=f"=IF(G{i}=0,0,J{i}/G{i})").number_format = PCT
    ws.cell(row=i, column=12, value=cap)
    ws.cell(row=i, column=13, value=deliv)
ws.cell(row=8, column=1, value="Contribution margin = net cash after fees minus reward cost minus actual shipping. Dropped pledges are applied at the scenario level, not per tier. Shipping regions: contiguous US only (see reward structure document).").font = NOTE
ws.cell(row=9, column=1, value="Add-ons (PROPOSED, priced on Rewards doc): spare fob $45; 2nd 50 ft hose $220; extended 2-year warranty $350. Not included in scenario totals (upside only).").font = NOTE

# ---------------------------------------------------------------- SCENARIOS
ws = wb.create_sheet("Scenarios")
hdr(ws, 1, ["Line", "Conservative", "Base", "Optimistic", "Notes"], [52, 16, 16, 16, 70])
mix_cols = {"Conservative": "E", "Base": "B", "Optimistic": "F"}
unit_cost_name = {"Conservative": "unit_cost_cons", "Base": "unit_cost_base", "Optimistic": "unit_cost_opt"}
lines = []
def sc_row(r_, label, fmls, fmt=MONEY, note="", bold=False):
    ws.cell(row=r_, column=1, value=label).font = BOLD if bold else Font()
    for j, scen in enumerate(["Conservative", "Base", "Optimistic"]):
        c = ws.cell(row=r_, column=2 + j, value=fmls(scen, mix_cols[scen]))
        c.number_format = fmt
        if bold:
            c.font = BOLD
    ws.cell(row=r_, column=5, value=note).font = NOTE
r_ = 2
sc_row(r_, "Supporter backers", lambda s, col: f"=Inputs!{col}{mix_rows['supporters']}", "0"); R_SUP = r_; r_ += 1
sc_row(r_, "Remote Control Kit backers", lambda s, col: f"=Inputs!{col}{mix_rows['kits']}", "0"); R_KIT = r_; r_ += 1
sc_row(r_, "DL3000 Early Bird backers", lambda s, col: f"=Inputs!{col}{mix_rows['early']}", "0"); R_EB = r_; r_ += 1
sc_row(r_, "DL3000 Kickstarter-price backers", lambda s, col: f"=Inputs!{col}{mix_rows['std']}", "0"); R_STD = r_; r_ += 1
sc_row(r_, "DL3000 + Hose backers", lambda s, col: f"=Inputs!{col}{mix_rows['hose']}", "0"); R_HOSE = r_; r_ += 1
sc_row(r_, "Total pumps to build", lambda s, col: f"={get_column_letter(0)}", "0") if False else None
ws.cell(row=r_, column=1, value="Total pumps to build").font = BOLD
for j in range(3):
    L = get_column_letter(2 + j)
    c = ws.cell(row=r_, column=2 + j, value=f"={L}{R_EB}+{L}{R_STD}+{L}{R_HOSE}"); c.font = BOLD
R_PUMPS = r_; r_ += 1
ws.cell(row=r_, column=1, value="Total backers (pledges)")
for j in range(3):
    L = get_column_letter(2 + j)
    ws.cell(row=r_, column=2 + j, value=f"={L}{R_SUP}+{L}{R_KIT}+{L}{R_PUMPS}")
R_BACKERS = r_; r_ += 2

ws.cell(row=r_, column=1, value="Gross pledged (rewards + shipping)").font = BOLD
for j in range(3):
    L = get_column_letter(2 + j)
    c = ws.cell(row=r_, column=2 + j, value=(
        f"={L}{R_SUP}*Rewards!$D$2+{L}{R_KIT}*Rewards!$D$3+{L}{R_EB}*Rewards!$D$4+{L}{R_STD}*Rewards!$D$5+{L}{R_HOSE}*Rewards!$D$6"))
    c.number_format = MONEY; c.font = BOLD
R_GROSS = r_; r_ += 1
ws.cell(row=r_, column=1, value="  of which shipping charged")
for j in range(3):
    L = get_column_letter(2 + j)
    ws.cell(row=r_, column=2 + j, value=f"={L}{R_SUP}*Rewards!$C$2+{L}{R_KIT}*Rewards!$C$3+({L}{R_PUMPS})*Rewards!$C$4").number_format = MONEY
R_SHIPREV = r_; r_ += 1
ws.cell(row=r_, column=1, value="Less dropped / failed pledges")
for j in range(3):
    L = get_column_letter(2 + j)
    ws.cell(row=r_, column=2 + j, value=f"=-{L}{R_GROSS}*drop_rate").number_format = MONEY
R_DROP = r_; r_ += 1
ws.cell(row=r_, column=1, value="Collected pledges")
for j in range(3):
    L = get_column_letter(2 + j)
    ws.cell(row=r_, column=2 + j, value=f"={L}{R_GROSS}+{L}{R_DROP}").number_format = MONEY
R_COLL = r_; r_ += 1
ws.cell(row=r_, column=1, value="Less Kickstarter fee (5%)")
for j in range(3):
    L = get_column_letter(2 + j)
    ws.cell(row=r_, column=2 + j, value=f"=-{L}{R_COLL}*ks_fee").number_format = MONEY
R_KSF = r_; r_ += 1
ws.cell(row=r_, column=1, value="Less payment processing (3% + $0.20 × pledges)")
for j in range(3):
    L = get_column_letter(2 + j)
    ws.cell(row=r_, column=2 + j, value=f"=-({L}{R_COLL}*pp_fee+{L}{R_BACKERS}*(1-drop_rate)*pp_fix)").number_format = MONEY
R_PPF = r_; r_ += 1
ws.cell(row=r_, column=1, value="NET CASH RECEIVED FROM KICKSTARTER").font = BOLD
for j in range(3):
    L = get_column_letter(2 + j)
    c = ws.cell(row=r_, column=2 + j, value=f"={L}{R_COLL}+{L}{R_KSF}+{L}{R_PPF}"); c.number_format = MONEY; c.font = BOLD
R_NET = r_; r_ += 2

ws.cell(row=r_, column=1, value="Per-unit cost used (DL3000)")
for j, s in enumerate(["Conservative", "Base", "Optimistic"]):
    ws.cell(row=r_, column=2 + j, value=f"={unit_cost_name[s]}").number_format = MONEY
R_UC = r_; r_ += 1
ws.cell(row=r_, column=1, value="Pump build cost (units × per-unit)")
for j in range(3):
    L = get_column_letter(2 + j)
    ws.cell(row=r_, column=2 + j, value=f"={L}{R_PUMPS}*{L}{R_UC}").number_format = MONEY
R_PUMPCOST = r_; r_ += 1
ws.cell(row=r_, column=1, value="Hose package cost")
for j, s in enumerate(["Conservative", "Base", "Optimistic"]):
    L = get_column_letter(2 + j)
    f = "*(1+cost_over)" if s == "Conservative" else ""
    ws.cell(row=r_, column=2 + j, value=f"={L}{R_HOSE}*c_hosepkg{f}").number_format = MONEY
R_HOSECOST = r_; r_ += 1
ws.cell(row=r_, column=1, value="Remote Control Kit cost")
for j, s in enumerate(["Conservative", "Base", "Optimistic"]):
    L = get_column_letter(2 + j)
    f = "*(1+cost_over)" if s == "Conservative" else ""
    ws.cell(row=r_, column=2 + j, value=f"={L}{R_KIT}*c_kit{f}").number_format = MONEY
R_KITCOST = r_; r_ += 1
ws.cell(row=r_, column=1, value="Supporter reward cost")
for j in range(3):
    L = get_column_letter(2 + j)
    ws.cell(row=r_, column=2 + j, value=f"={L}{R_SUP}*c_support").number_format = MONEY
R_SUPCOST = r_; r_ += 1
ws.cell(row=r_, column=1, value="Actual freight & shipping cost")
for j in range(3):
    L = get_column_letter(2 + j)
    ws.cell(row=r_, column=2 + j, value=f"={L}{R_PUMPS}*cost_ship_pump+{L}{R_KIT}*cost_ship_kit+{L}{R_SUP}*cost_ship_sup").number_format = MONEY
R_SHIPCOST = r_; r_ += 1
ws.cell(row=r_, column=1, value="Total per-unit (variable) costs").font = BOLD
for j in range(3):
    L = get_column_letter(2 + j)
    c = ws.cell(row=r_, column=2 + j, value=f"=SUM({L}{R_PUMPCOST}:{L}{R_SHIPCOST})"); c.number_format = MONEY; c.font = BOLD
R_VAR = r_; r_ += 2

ws.cell(row=r_, column=1, value="One-time costs (insurance, FCC SDoC, testing, tooling, video, legal, software)")
for j in range(3):
    ws.cell(row=r_, column=2 + j, value="=o_insur+o_fcc+o_test+o_tool+o_video+o_legal+o_soft").number_format = MONEY
R_ONE = r_; r_ += 1
ws.cell(row=r_, column=1, value="Optional advertising (separately costed)")
for j in range(3):
    ws.cell(row=r_, column=2 + j, value="=o_ads").number_format = MONEY
R_ADS = r_; r_ += 1
ws.cell(row=r_, column=1, value="Contingency")
for j in range(3):
    L = get_column_letter(2 + j)
    ws.cell(row=r_, column=2 + j, value=f"=({L}{R_VAR}+{L}{R_ONE})*contingency").number_format = MONEY
R_CONT = r_; r_ += 1
ws.cell(row=r_, column=1, value="TOTAL COST TO DELIVER").font = BOLD
for j in range(3):
    L = get_column_letter(2 + j)
    c = ws.cell(row=r_, column=2 + j, value=f"={L}{R_VAR}+{L}{R_ONE}+{L}{R_ADS}+{L}{R_CONT}"); c.number_format = MONEY; c.font = BOLD
R_TOT = r_; r_ += 2
ws.cell(row=r_, column=1, value="SURPLUS / (SHORTFALL) before tax").font = BOLD
for j in range(3):
    L = get_column_letter(2 + j)
    c = ws.cell(row=r_, column=2 + j, value=f"={L}{R_NET}-{L}{R_TOT}"); c.number_format = MONEY; c.font = BOLD
R_SURP = r_; r_ += 1
ws.cell(row=r_, column=1, value="Income tax reserve on positive surplus")
for j in range(3):
    L = get_column_letter(2 + j)
    ws.cell(row=r_, column=2 + j, value=f"=-MAX(0,{L}{R_SURP})*tax_res").number_format = MONEY
R_TAX = r_; r_ += 1
ws.cell(row=r_, column=1, value="Surplus after tax reserve (cash left for next batch / patent)").font = BOLD
for j in range(3):
    L = get_column_letter(2 + j)
    c = ws.cell(row=r_, column=2 + j, value=f"={L}{R_SURP}+{L}{R_TAX}"); c.number_format = MONEY; c.font = BOLD
r_ += 1
ws.cell(row=r_, column=1, value="Gross pledged vs funding goal (Funding_Goal!B12)")
for j in range(3):
    L = get_column_letter(2 + j)
    ws.cell(row=r_, column=2 + j, value=f'=IF({L}{R_GROSS}>=Funding_Goal!$B$12,"FUNDED","NOT FUNDED")')
r_ += 1
ws.cell(row=r_, column=1, value="Note: If the Conservative scenario is NOT FUNDED, no money is collected and no rewards are owed — that is the Kickstarter all-or-nothing protection.").font = NOTE

# ---------------------------------------------------------------- FUNDING GOAL
ws = wb.create_sheet("Funding_Goal")
hdr(ws, 1, ["Funding goal derivation", "Amount", "Notes"], [60, 16, 80])
ws.cell(row=2, column=1, value="Minimum production batch (units)"); ws.cell(row=2, column=2, value="=min_batch")
ws.cell(row=3, column=1, value="Per-unit cost, Base"); ws.cell(row=3, column=2, value="=unit_cost_base").number_format = MONEY
ws.cell(row=4, column=1, value="Per-unit actual freight"); ws.cell(row=4, column=2, value="=cost_ship_pump").number_format = MONEY
ws.cell(row=5, column=1, value="Variable cost of minimum batch"); ws.cell(row=5, column=2, value="=B2*(B3+B4)").number_format = MONEY
ws.cell(row=6, column=1, value="One-time costs required to deliver safely (insurance, FCC, testing, tooling, video, legal, software)"); ws.cell(row=6, column=2, value="=o_insur+o_fcc+o_test+o_tool+o_video+o_legal+o_soft").number_format = MONEY
ws.cell(row=7, column=1, value="Contingency"); ws.cell(row=7, column=2, value="=(B5+B6)*contingency").number_format = MONEY
ws.cell(row=8, column=1, value="Cash needed to deliver minimum batch"); ws.cell(row=8, column=2, value="=B5+B6+B7").number_format = MONEY; ws.cell(row=8, column=1).font = BOLD
ws.cell(row=9, column=1, value="Effective take-home rate after fees and drops (from Base scenario)"); ws.cell(row=9, column=2, value=f"=Scenarios!C{R_NET}/Scenarios!C{R_GROSS}").number_format = PCT
ws.cell(row=10, column=1, value="Gross pledges required = cash needed ÷ take-home rate"); ws.cell(row=10, column=2, value="=B8/B9").number_format = MONEY
ws.cell(row=11, column=1, value="Rounded up to nearest $1,000"); ws.cell(row=11, column=2, value="=CEILING(B10,1000)").number_format = MONEY
ws.cell(row=12, column=1, value="RECOMMENDED FUNDING GOAL").font = BOLD; c = ws.cell(row=12, column=2, value="=B11"); c.number_format = MONEY; c.font = BOLD
ws.cell(row=12, column=3, value="Set on Kickstarter as the all-or-nothing goal. It funds the minimum batch plus the one-time items; anything above it funds more units at better margins.").font = NOTE
ws.cell(row=14, column=1, value="Break-even backer counts").font = BOLD
ws.cell(row=15, column=1, value="Contribution margin per DL3000 (Kickstarter price tier, after fees, cost and freight)"); ws.cell(row=15, column=2, value="=Rewards!J5").number_format = MONEY
ws.cell(row=16, column=1, value="Contribution margin per Early Bird"); ws.cell(row=16, column=2, value="=Rewards!J4").number_format = MONEY
ws.cell(row=17, column=1, value="One-time costs + contingency on them"); ws.cell(row=17, column=2, value="=B6*(1+contingency)").number_format = MONEY
ws.cell(row=18, column=1, value="Pumps needed to cover one-time costs if all at Early Bird price"); ws.cell(row=18, column=2, value="=ROUNDUP(B17/B16,0)")
ws.cell(row=19, column=1, value="Pumps needed to cover one-time costs if all at Kickstarter price"); ws.cell(row=19, column=2, value="=ROUNDUP(B17/B15,0)")
ws.cell(row=20, column=1, value="Pumps needed to cover one-time costs + optional ads (Kickstarter price)"); ws.cell(row=20, column=2, value="=ROUNDUP((B17+o_ads)/B15,0)")
ws.cell(row=22, column=1, value="Reality check: goal ÷ average pump pledge (approx. pumps needed to hit goal)"); ws.cell(row=22, column=2, value="=ROUNDUP(B12/Rewards!D5,0)")

# ---------------------------------------------------------------- CASH TIMING
ws = wb.create_sheet("Cash_Timing")
hdr(ws, 1, ["Month", "Phase", "Cash in", "Cash out", "Net", "Cumulative cash (Base)", "Notes"], [10, 30, 14, 14, 14, 20, 90])
months = [
    ("2026-10", "Prelaunch prep", "0", "=o_video*0.5+o_soft*0.5", "Shoot photos; email tool; landing page (existing WordPress). No paid ads required."),
    ("2026-11", "Prelaunch prep", "0", "=o_tool*0.5", "Fixtures, crimp tooling, crate template. Insurance NOT yet bound (defer to campaign success or bind now if Northern Tool requires)."),
    ("2026-12", "Prelaunch page live", "0", "=o_video*0.5", "Kickstarter prelaunch page; collect followers; finish demo video."),
    ("2027-01", "Launch (Jan 19)", "0", "=o_ads*0.5", "Optional ad test. Kickstarter collects pledges but pays nothing until ~14 days after end."),
    ("2027-02", "Campaign ends (Feb 18); payout ~Mar 4", "0", "=o_ads*0.5+o_insur*0.5", "Bind insurance on success (Kinsale allows financing: ~$2,163 down). Order nothing until funded."),
    ("2027-03", "Payout received; parts ordered", f"=Scenarios!C{R_NET}", "=o_insur*0.5+o_fcc+o_test+o_legal+o_tool*0.5+Scenarios!C" + str(R_PUMPCOST) + "*0.6", "Engines, pump ends, frames ordered (60% of pump parts); FCC SDoC; test gear."),
    ("2027-04", "Build batch 1 (Early Birds)", "0", f"=Scenarios!C{R_PUMPCOST}*0.25+Scenarios!C{R_KITCOST}+Scenarios!C{R_SUPCOST}", "Kits and supporter rewards ship; first pumps in assembly."),
    ("2027-05", "Build batch 2", "0", f"=Scenarios!C{R_PUMPCOST}*0.15+Scenarios!C{R_HOSECOST}+Scenarios!C{R_SHIPCOST}*0.5", "Early Bird pumps ship (freight)."),
    ("2027-06", "Ship remaining", "0", f"=Scenarios!C{R_SHIPCOST}*0.5+o_soft*0.5", "Remaining pumps and hose packages ship; support ramps."),
    ("2027-07", "Close-out", "0", f"=Scenarios!C{R_CONT}", "Contingency drawn if needed; warranty reserve held."),
]
for i, (m, ph, ci, co, note) in enumerate(months, 2):
    ws.cell(row=i, column=1, value=m); ws.cell(row=i, column=2, value=ph)
    ws.cell(row=i, column=3, value=f"={ci}" if not ci.startswith("=") else ci).number_format = MONEY
    ws.cell(row=i, column=4, value=co).number_format = MONEY
    ws.cell(row=i, column=5, value=f"=C{i}-D{i}").number_format = MONEY
    ws.cell(row=i, column=6, value=f"=E{i}" if i == 2 else f"=F{i-1}+E{i}").number_format = MONEY
    ws.cell(row=i, column=7, value=note).font = NOTE
last = 1 + len(months)
ws.cell(row=last + 2, column=1, value="MINIMUM CASH JEREMY NEEDS BEFORE KICKSTARTER PAYS OUT (Base path)").font = BOLD
ws.cell(row=last + 2, column=6, value=f"=-MIN(F2:F{last})").number_format = MONEY
ws.cell(row=last + 3, column=1, value="Lowest cumulative balance occurs before the March payout. This is the founder's out-of-pocket exposure if the campaign succeeds; if it fails, only prelaunch costs (video, tools, email tool) are spent.").font = NOTE
ws.cell(row=last + 4, column=1, value="Supplier deposit modeled before payout (Inputs: deposit_pct × pump parts)").font = NOTE
ws.cell(row=last + 4, column=6, value=f"=deposit_pct*Scenarios!C{R_PUMPCOST}").number_format = MONEY
ws.cell(row=last + 5, column=1, value="Minimum cash including any modeled deposit").font = BOLD
ws.cell(row=last + 5, column=6, value=f"=F{last+2}+F{last+4}").number_format = MONEY

# ---------------------------------------------------------------- STRESS TESTS
ws = wb.create_sheet("Stress_Tests")
hdr(ws, 1, ["Stress case (applied to Base scenario)", "Surplus before tax", "Change vs Base", "What it means"], [60, 18, 16, 80])
base_surp = f"Scenarios!C{R_SURP}"
cases = [
    ("Base scenario", f"={base_surp}", "Reference"),
    ("Parts + labor cost +15%", f"={base_surp}-Scenarios!C{R_PUMPCOST}*0.15-Scenarios!C{R_HOSECOST}*0.15-Scenarios!C{R_KITCOST}*0.15", "Engine price rise or pump-end import surprise"),
    ("Parts + labor cost +30%", f"={base_surp}-Scenarios!C{R_PUMPCOST}*0.30-Scenarios!C{R_HOSECOST}*0.30-Scenarios!C{R_KITCOST}*0.30", "Serious sourcing failure; still positive? check"),
    ("Freight +$150 per pump", f"={base_surp}-Scenarios!C{R_PUMPS}*150", "Residential LTL surcharges"),
    ("Dropped pledges 8% instead of 3%", f"={base_surp}-Scenarios!C{R_GROSS}*0.05*(1-ks_fee-pp_fee)", "Card failures on $5k pledges"),
    ("Kinsale insurance ($4,598) instead of StarStone", f"={base_surp}+(o_insur-4598)", "If $1M/$2M claims-made is accepted for a direct-sales-only year"),
    ("3-month delay (extra software/support + storage $600/mo)", f"={base_surp}-1800", "Backer goodwill cost not modeled; update cadence matters more"),
    ("Only Early Birds sell (10 pumps, no T4/T5, no kits)", f"=10*Rewards!J4+Inputs!B{mix_rows['supporters']}*Rewards!J2-Scenarios!C{R_ONE}-Scenarios!C{R_ADS}-(10*(unit_cost_base+cost_ship_pump)+Scenarios!C{R_ONE})*contingency", "Worst funded mix"),
    ("Combined: cost +15% AND freight +$150 AND drops 8%", f"={base_surp}-Scenarios!C{R_PUMPCOST}*0.15-Scenarios!C{R_HOSECOST}*0.15-Scenarios!C{R_KITCOST}*0.15-Scenarios!C{R_PUMPS}*150-Scenarios!C{R_GROSS}*0.05*(1-ks_fee-pp_fee)", "Compound bad year"),
]
for i, (label, f, note) in enumerate(cases, 2):
    ws.cell(row=i, column=1, value=label)
    ws.cell(row=i, column=2, value=f).number_format = MONEY
    ws.cell(row=i, column=3, value=f"=B{i}-$B$2").number_format = MONEY
    ws.cell(row=i, column=4, value=note).font = NOTE

# ---------------------------------------------------------------- CAPACITY
ws = wb.create_sheet("Capacity")
hdr(ws, 1, ["Capacity check", "Value", "Notes"], [60, 16, 80])
ws.cell(row=2, column=1, value="Founder hours per week"); ws.cell(row=2, column=2, value="=hrs_wk")
ws.cell(row=3, column=1, value="Hours per pump"); ws.cell(row=3, column=2, value="=hrs_unit")
ws.cell(row=4, column=1, value="Pumps per week (founder only)"); ws.cell(row=4, column=2, value="=ROUNDDOWN(B2/B3,1)")
ws.cell(row=5, column=1, value="Pumps in Base scenario"); ws.cell(row=5, column=2, value=f"=Scenarios!C{R_PUMPS}")
ws.cell(row=6, column=1, value="Weeks to build Base scenario"); ws.cell(row=6, column=2, value="=ROUNDUP(B5/B4,0)")
ws.cell(row=7, column=1, value="Pumps in Optimistic scenario"); ws.cell(row=7, column=2, value=f"=Scenarios!D{R_PUMPS}")
ws.cell(row=8, column=1, value="Weeks to build Optimistic scenario"); ws.cell(row=8, column=2, value="=ROUNDUP(B7/B4,0)")
ws.cell(row=9, column=1, value="Engine/pump-end lead time (weeks)"); ws.cell(row=9, column=2, value="=lead_eng")
ws.cell(row=10, column=1, value="Weeks from payout to last shipment (Base)"); ws.cell(row=10, column=2, value="=B9+B6+1"); ws.cell(row=10, column=3, value="+1 week for freight. Compare with promised delivery windows on Rewards.").font = NOTE
ws.cell(row=11, column=1, value="Weeks from payout to last shipment (Optimistic)"); ws.cell(row=11, column=2, value="=B9+B8+1")
ws.cell(row=13, column=1, value="HARD CAP recommended on pump rewards (all pump tiers combined)").font = BOLD; ws.cell(row=13, column=2, value=35)
ws.cell(row=13, column=3, value="Above ~35 pumps the founder-built model needs a helper or contract assembly; caps on Rewards enforce this (10 + 15 + 10).").font = NOTE

wb.save("/home/user/skylinerbuildings/kickstarter-campaign/03_financial_model/WW_Kickstarter_Financial_Model_v1.xlsx")
print("saved")
