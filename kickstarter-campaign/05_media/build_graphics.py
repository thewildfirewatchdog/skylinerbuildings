#!/usr/bin/env python3
"""Generates campaign graphics (PNG) for the DL3000 Kickstarter draft.
All figures are explanatory graphics or text panels, NOT product photos. Real photos live in photos/.
Colors: ink #1C1C1C, muted #5D5D5D, ember #E8641B (brand accent), field #F5F5F4, ok #2E7D32.
"""
import os
from PIL import Image, ImageDraw, ImageFont
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

OUT = os.path.dirname(os.path.abspath(__file__))
INK, MUTE, EMBER, FIELD, LINE, OK = "#1C1C1C", "#5D5D5D", "#E8641B", "#F5F5F4", "#DCDCDC", "#2E7D32"
W, H = 1024, 576  # Kickstarter recommended image size


def font(size, bold=False):
    p = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
    return ImageFont.truetype(p, size)


def wrap(draw, text, f, maxw):
    words, lines, cur = text.split(), [], ""
    for w in words:
        t = (cur + " " + w).strip()
        if draw.textlength(t, font=f) <= maxw:
            cur = t
        else:
            lines.append(cur); cur = w
    if cur:
        lines.append(cur)
    return lines


# ---------------------------------------------------------------- 1. Use of funds (horizontal bars, single hue)
def use_of_funds():
    items = [  # from Funding_Goal / Scenarios sheets at the $60,000 goal (10-pump minimum batch)
        ("Parts and assembly, first 10 pumps", 30450),
        ("Product-liability insurance (year 1)", 10598),
        ("Kickstarter + payment fees, dropped pledges", 6600),
        ("Contingency (10%)", 4789),
        ("FCC declaration testing", 2500),
        ("Flow, pressure and failsafe validation", 1500),
        ("Tooling, fixtures, crates", 1200),
        ("Video, legal review, software", 1640),
    ]
    total = sum(v for _, v in items)
    fig, ax = plt.subplots(figsize=(10.24, 5.76), dpi=100)
    fig.patch.set_facecolor("white")
    labels = [i[0] for i in items][::-1]
    vals = [i[1] for i in items][::-1]
    bars = ax.barh(labels, vals, color=EMBER, height=0.55)
    for b, v in zip(bars, vals):
        ax.text(b.get_width() + 400, b.get_y() + b.get_height() / 2, f"\\${v:,.0f}  ({v/total:.0%})", va="center", fontsize=11, color=INK)
    ax.set_xlim(0, max(vals) * 1.35)
    for s in ("top", "right", "bottom"):
        ax.spines[s].set_visible(False)
    ax.spines["left"].set_color(LINE)
    ax.tick_params(axis="x", bottom=False, labelbottom=False)
    ax.tick_params(axis="y", length=0, labelsize=11, colors=INK)
    ax.set_title(f"Where a \\$60,000 goal goes (10-pump minimum batch)", loc="left", fontsize=15, color=INK, weight="bold", pad=14, x=-0.62)
    fig.text(0.01, 0.01, "Estimates from the campaign financial model v1 (2026-09-17). Parts pricing is not yet quoted.", fontsize=9, color=MUTE)
    plt.tight_layout(rect=(0, 0.04, 1, 1))
    fig.savefig(os.path.join(OUT, "use_of_funds.png"), facecolor="white")
    plt.close(fig)


# ---------------------------------------------------------------- 2. Timeline
def timeline():
    steps = [("Jan 19", "Launch"), ("Feb 18", "Campaign ends"), ("Mar 4", "Funds arrive; parts ordered; insurance bound"),
             ("Apr", "Kits + supporter rewards ship; pumps in assembly"), ("May", "Early Bird pumps wet-tested and shipped"),
             ("Jun–Jul", "Remaining pumps shipped; final update")]
    img = Image.new("RGB", (W, H), "white"); d = ImageDraw.Draw(img)
    d.text((40, 30), "Production timeline (2027)", font=font(34, True), fill=INK)
    d.text((40, 78), "Founder-built in Bend, Oregon. Windows include a one-month buffer.", font=font(18), fill=MUTE)
    y = 250; x0, x1 = 80, W - 80
    d.line((x0, y, x1, y), fill=LINE, width=4)
    n = len(steps)
    for i, (when, what) in enumerate(steps):
        x = x0 + i * (x1 - x0) / (n - 1)
        d.ellipse((x - 12, y - 12, x + 12, y + 12), fill=EMBER)
        f = font(20, True); d.text((x - d.textlength(when, font=f) / 2, y - 55), when, font=f, fill=INK)
        lines = wrap(d, what, font(15), 150)
        for j, ln in enumerate(lines):
            d.text((x - d.textlength(ln, font=font(15)) / 2, y + 30 + j * 20), ln, font=font(15), fill=MUTE)
    d.text((40, H - 50), "Estimated delivery, not guaranteed. Every unit is wet-tested before crating.", font=font(15), fill=MUTE)
    img.save(os.path.join(OUT, "timeline.png"))


# ---------------------------------------------------------------- 3. System diagram (explanatory illustration)
def system_diagram():
    img = Image.new("RGB", (W, H), "white"); d = ImageDraw.Draw(img)
    d.text((40, 24), "How the Dry Lightning 3000 v1 is controlled", font=font(30, True), fill=INK)
    d.text((40, 64), "Explanatory diagram, not a photo. Fob → two rolling-code receivers → relays → engine and valve.", font=font(16), fill=MUTE)

    def box(x, y, w, h, title, sub, fill=FIELD, tcol=INK):
        d.rounded_rectangle((x, y, x + w, y + h), radius=10, fill=fill, outline=LINE, width=2)
        d.text((x + 14, y + 12), title, font=font(18, True), fill=tcol)
        for j, ln in enumerate(wrap(d, sub, font(14), w - 28)):
            d.text((x + 14, y + 40 + j * 18), ln, font=font(14), fill=MUTE)

    def arrow(x1, y1, x2, y2, col=INK):
        d.line((x1, y1, x2, y2), fill=col, width=3)
        d.polygon([(x2, y2), (x2 - 10, y2 - 6), (x2 - 10, y2 + 6)] if x2 > x1 else [(x2, y2), (x2 + 10, y2 - 6), (x2 + 10, y2 + 6)], fill=col)

    box(40, 120, 200, 120, "Key fob", "4 buttons, rolling code (changes every press). A crank · B run/stop · C throttle · D valve", fill="#FDECE2")
    box(300, 100, 220, 90, "Receiver 1", "A → starter (10A contact, timed pulse). B → RUN line (ignition enable).")
    box(300, 210, 220, 100, "Receiver 2", "Powered FROM the RUN line: C and D are dead unless the engine is enabled to run.")
    box(580, 100, 200, 65, "K1 kill relay", "off = ignition grounded")
    box(580, 175, 200, 60, "K2 throttle relay", "de-energized = idle")
    box(580, 250, 200, 65, "K3 valve relay", "off = valve closed (spring)")
    box(830, 100, 160, 100, "Honda iGX390", "electric start, 12 V battery, solar maintainer")
    box(830, 230, 160, 80, "2 in. valve", "discharge, normally closed")
    arrow(240, 170, 300, 150); arrow(240, 190, 300, 255)
    arrow(520, 130, 580, 130); arrow(520, 255, 580, 205); arrow(520, 270, 580, 280)
    arrow(780, 130, 830, 140); arrow(780, 205, 830, 160); arrow(780, 280, 830, 270)
    d.rounded_rectangle((40, 350, 560, 470), radius=10, fill="#EAF3EA", outline=OK, width=2)
    d.text((56, 362), "Failsafe (wiring, not software)", font=font(18, True), fill=OK)
    for j, ln in enumerate(wrap(d, "Lose the RUN signal, the remote link, or the battery: ignition kills, throttle returns to idle, valve closes. Design target: within 2 seconds. Measured on every unit.", font(14), 490)):
        d.text((56, 392 + j * 18), ln, font=font(14), fill=INK)
    d.rounded_rectangle((600, 350, 990, 470), radius=10, fill=FIELD, outline=LINE, width=2)
    d.text((616, 362), "Manual override", font=font(18, True), fill=INK)
    for j, ln in enumerate(wrap(d, "Momentary crank button and run / throttle / valve toggles on the pump side of the 6-pin Remote Port. Works with nothing plugged in.", font(14), 360)):
        d.text((616, 392 + j * 18), ln, font=font(14), fill=INK)
    d.text((40, H - 60), "Not shown, not included in v1: app, internet, sensors, monitoring, sprinklers. Requires water source, fuel, hoses, operator present.", font=font(14), fill=MUTE)
    img.save(os.path.join(OUT, "system_diagram.png"))


# ---------------------------------------------------------------- 4. Feature panels (4 buttons)
def feature_panels():
    panels = [("A", "Crank", "Timed starter pulse. One-shot starter protection."),
              ("B", "Run / Stop", "Enables ignition. Press again to stop: throttle drops, valve closes."),
              ("C", "Throttle", "Idle to full throttle. Dead unless the engine is enabled."),
              ("D", "Valve", "Opens the 2 in. discharge valve. Spring-closes on stop or power loss.")]
    img = Image.new("RGB", (W, H), "white"); d = ImageDraw.Draw(img)
    d.text((40, 30), "Four buttons. Four independent channels.", font=font(34, True), fill=INK)
    d.text((40, 78), "Production design (fob box to be built and filmed before launch). No app, no internet, no subscription.", font=font(18), fill=MUTE)
    for i, (k, t, s) in enumerate(panels):
        x = 40 + i * 240
        d.rounded_rectangle((x, 140, x + 220, 470), radius=14, fill=FIELD, outline=LINE, width=2)
        d.ellipse((x + 70, 165, x + 150, 245), fill=EMBER)
        f = font(40, True); d.text((x + 110 - d.textlength(k, font=f) / 2, 180), k, font=f, fill="white")
        d.text((x + 18, 270), t, font=font(24, True), fill=INK)
        for j, ln in enumerate(wrap(d, s, font(15), 184)):
            d.text((x + 18, 310 + j * 20), ln, font=font(15), fill=MUTE)
    d.text((40, H - 60), "Range: rolling-code RF, about 150 ft line of sight as specified; measured on each unit before shipping.", font=font(14), fill=MUTE)
    img.save(os.path.join(OUT, "feature_panels.png"))


# ---------------------------------------------------------------- 5. Reward cards
def reward_cards():
    cards = [("$35", "Supporter", "Backer wall + decal", "Mar 2027"),
             ("$1,250", "Remote Control Kit", "iGX390 retrofit, limit 10", "May 2027"),
             ("$4,699", "DL3000 Early Bird", "Complete pump, limit 10", "Jun 2027"),
             ("$4,999", "DL3000", "Complete pump, limit 15", "Jul 2027"),
             ("$5,599", "DL3000 + Hose & Nozzle", "Pump + hoses, nozzle, strainer, limit 10", "Jul 2027")]
    img = Image.new("RGB", (W, H), "white"); d = ImageDraw.Draw(img)
    d.text((40, 30), "Rewards (draft)", font=font(34, True), fill=INK)
    d.text((40, 78), "Contiguous US only. Pumps ship by freight (+$349), kits by UPS (+$25).", font=font(18), fill=MUTE)
    for i, (p, t, s, dl) in enumerate(cards):
        x = 40 + i * 192
        d.rounded_rectangle((x, 130, x + 176, 480), radius=14, fill=FIELD, outline=LINE, width=2)
        d.rectangle((x, 130, x + 176, 138), fill=EMBER)
        d.text((x + 14, 160), p, font=font(30, True), fill=INK)
        for j, ln in enumerate(wrap(d, t, font(17, True), 150)):
            d.text((x + 14, 210 + j * 22), ln, font=font(17, True), fill=INK)
        for j, ln in enumerate(wrap(d, s, font(14), 150)):
            d.text((x + 14, 275 + j * 18), ln, font=font(14), fill=MUTE)
        d.text((x + 14, 430), "Est. " + dl, font=font(14, True), fill=OK)
    d.text((40, H - 60), "Preparedness equipment, not a guarantee. Prices and quantities pending founder and advisor approval.", font=font(14), fill=MUTE)
    img.save(os.path.join(OUT, "reward_cards.png"))


# ---------------------------------------------------------------- 6. Cover template (photo placeholder)
def cover():
    img = Image.new("RGB", (W, H), INK); d = ImageDraw.Draw(img)
    d.rectangle((0, 0, W, H), fill=INK)
    d.rounded_rectangle((560, 60, W - 40, H - 60), radius=12, outline=MUTE, width=3)
    for j, ln in enumerate(wrap(d, "PLACE REAL PROTOTYPE PHOTO HERE: PXL_20260817_015152815 (hero, 4:3) from wildfirewatchdog.com uploads. Not reachable from this session; owner to drop in.", font(16), 380)):
        d.text((580, 90 + j * 22), ln, font=font(16), fill=MUTE)
    d.text((40, 120), "Dry Lightning", font=font(58, True), fill="white")
    d.text((40, 185), "3000", font=font(58, True), fill=EMBER)
    for j, ln in enumerate(wrap(d, "Remote-start wildfire water pump. Start, throttle, open the valve and stop from a key fob.", font(22), 480)):
        d.text((40, 280 + j * 30), ln, font=font(22), fill="white")
    d.text((40, 400), "Honda iGX390 · Built in Bend, Oregon", font=font(18), fill=MUTE)
    d.text((40, H - 70), "COVER TEMPLATE — final cover must use a real photo of the prototype", font=font(14, True), fill=EMBER)
    img.save(os.path.join(OUT, "cover_template.png"))


# ---------------------------------------------------------------- 7. Demonstrated vs development panel
def status_panel():
    left = ["Wireless remote start and stop (prototype ESP link)", "Phone/dashboard start (prototype, 2026-08-23)", "Local toggle start/stop", "Honda iGX390 + pump end on skid, running", "Relay failsafe design and Remote Port spec"]
    right = ["Build + test the 4-button fob control box on this pump", "Spring-return valve actuator (production part)", "Measured flow, pressure, range, failsafe timing", "FCC declaration for the control box", "Insurance bound before shipping"]
    img = Image.new("RGB", (W, H), "white"); d = ImageDraw.Draw(img)
    d.text((40, 30), "What exists today vs. what this campaign completes", font=font(30, True), fill=INK)
    d.rounded_rectangle((40, 110, 500, 500), radius=14, fill="#EAF3EA", outline=OK, width=2)
    d.text((60, 125), "Demonstrated on the prototype", font=font(20, True), fill=OK)
    for j, t in enumerate(left):
        d.text((60, 170 + j * 60), "✓", font=font(22, True), fill=OK)
        for k, ln in enumerate(wrap(d, t, font(16), 400)):
            d.text((92, 172 + j * 60 + k * 20), ln, font=font(16), fill=INK)
    d.rounded_rectangle((524, 110, 984, 500), radius=14, fill="#FDECE2", outline=EMBER, width=2)
    d.text((544, 125), "Remaining before delivery", font=font(20, True), fill=EMBER)
    for j, t in enumerate(right):
        d.text((544, 170 + j * 60), "→", font=font(22, True), fill=EMBER)
        for k, ln in enumerate(wrap(d, t, font(16), 400)):
            d.text((580, 172 + j * 60 + k * 20), ln, font=font(16), fill=INK)
    d.text((40, H - 55), "Honest status as of 2026-09-17. Sources: 01_research/technical_evidence.md", font=font(14), fill=MUTE)
    img.save(os.path.join(OUT, "status_panel.png"))


if __name__ == "__main__":
    use_of_funds(); timeline(); system_diagram(); feature_panels(); reward_cards(); cover(); status_panel()
    print("graphics written to", OUT)
