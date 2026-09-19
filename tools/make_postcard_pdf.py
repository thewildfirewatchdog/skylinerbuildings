"""Build wildfire_postcard_targets.pdf from postcard_list.csv.

Usage (Windows, from any folder):
    pip install reportlab
    python make_postcard_pdf.py

By default it reads postcard_list.csv from your Desktop and writes
wildfire_postcard_targets.pdf next to it. You can override either path:
    python make_postcard_pdf.py --csv "C:\\path\\to\\postcard_list.csv" --out "C:\\path\\to\\out.pdf"
"""
import argparse
import csv
import os
import re
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import landscape, letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

TITLE = "Wildfire Watchdog \u2014 Postcard Target List"
SUBTITLE = "Top 50 High-Risk Properties | $1M+ Improvement Value | Ranked by Priority Score"
FOOTER = ("Data source: Deschutes County GIS / USFS Wildfire Risk to Communities. "
          "For internal prospecting use only.")

DARK_RED = colors.HexColor("#8B0000")
LIGHT_PINK = colors.HexColor("#FDECEC")

# Output columns -> candidate CSV header names (matched case/space/underscore-insensitively).
COLUMNS = [
    ("#", ["#", "rank", "row", "num", "number", "index"]),
    ("Address", ["address", "site_address", "situs_address", "property_address", "street"]),
    ("City", ["city", "situs_city", "town"]),
    ("Improvement Value", ["improvement_value", "improvement", "impr_value", "imp_value", "improvements"]),
    ("Total Value", ["total_value", "total", "tot_value", "assessed_value", "market_value"]),
    ("Acres", ["acres", "acreage", "lot_acres", "land_acres"]),
    ("Risk Score", ["risk_score", "risk", "wildfire_risk", "whp", "hazard_score"]),
    ("Priority Score", ["priority_score", "priority", "score"]),
]
MONEY_COLS = {"Improvement Value", "Total Value"}


def norm(s: str) -> str:
    return re.sub(r"[^a-z0-9#]", "", s.lower())


def find_col(headers, candidates):
    lookup = {norm(h): h for h in headers}
    for c in candidates:
        if norm(c) in lookup:
            return lookup[norm(c)]
    return None


def to_number(v):
    s = str(v).strip().replace("$", "").replace(",", "")
    try:
        return float(s)
    except ValueError:
        return None


def fmt_money(v):
    n = to_number(v)
    return f"${n:,.0f}" if n is not None else str(v)


def fmt_num(v, digits=2):
    n = to_number(v)
    if n is None:
        return str(v)
    return f"{n:,.{digits}f}"


def load_rows(csv_path: Path):
    with open(csv_path, newline="", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        headers = reader.fieldnames or []
        raw = list(reader)

    mapping = {out: find_col(headers, cands) for out, cands in COLUMNS}
    missing = [out for out, src in mapping.items() if src is None and out != "#"]
    if missing:
        print(f"Warning: could not find CSV columns for: {', '.join(missing)}")
        print(f"CSV headers are: {headers}")

    rows = []
    for i, r in enumerate(raw[:50], start=1):
        row = []
        for out, _ in COLUMNS:
            src = mapping[out]
            if out == "#":
                row.append(str(i) if src is None else str(r.get(src, i) or i))
            elif src is None:
                row.append("")
            elif out in MONEY_COLS:
                row.append(fmt_money(r[src]))
            elif out == "Acres":
                row.append(fmt_num(r[src], 2))
            elif out in ("Risk Score", "Priority Score"):
                row.append(fmt_num(r[src], 1))
            else:
                row.append(str(r[src]).strip())
        rows.append(row)
    return rows


def draw_footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(colors.HexColor("#666666"))
    canvas.drawString(doc.leftMargin, 0.4 * inch, FOOTER)
    canvas.drawRightString(doc.pagesize[0] - doc.rightMargin, 0.4 * inch, f"Page {doc.page}")
    canvas.restoreState()


def build_pdf(rows, out_path: Path):
    doc = SimpleDocTemplate(
        str(out_path), pagesize=landscape(letter),
        leftMargin=0.5 * inch, rightMargin=0.5 * inch,
        topMargin=0.5 * inch, bottomMargin=0.65 * inch,
        title=TITLE, author="Wildfire Watchdog",
    )
    styles = getSampleStyleSheet()
    title_style = ParagraphStyle("t", parent=styles["Title"], fontSize=18, textColor=DARK_RED,
                                 alignment=TA_CENTER, spaceAfter=2)
    sub_style = ParagraphStyle("s", parent=styles["Normal"], fontSize=10, textColor=colors.HexColor("#444444"),
                               alignment=TA_CENTER, spaceAfter=10)
    cell_style = ParagraphStyle("c", parent=styles["Normal"], fontSize=8, leading=10)

    header = [name for name, _ in COLUMNS]
    data = [header]
    for r in rows:
        r = list(r)
        r[1] = Paragraph(r[1], cell_style)  # wrap long addresses
        data.append(r)

    avail = doc.pagesize[0] - doc.leftMargin - doc.rightMargin
    widths = [0.4, 3.1, 1.2, 1.35, 1.35, 0.8, 0.9, 1.0]
    scale = avail / sum(w * inch for w in widths)
    col_widths = [w * inch * scale for w in widths]

    table = Table(data, colWidths=col_widths, repeatRows=1)
    style = [
        ("BACKGROUND", (0, 0), (-1, 0), DARK_RED),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, 0), 9),
        ("FONTNAME", (0, 1), (-1, -1), "Helvetica"),
        ("FONTSIZE", (0, 1), (-1, -1), 8),
        ("ALIGN", (0, 0), (0, -1), "CENTER"),
        ("ALIGN", (3, 1), (-1, -1), "RIGHT"),
        ("ALIGN", (3, 0), (-1, 0), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("GRID", (0, 0), (-1, -1), 0.25, colors.HexColor("#CCCCCC")),
        ("LINEBELOW", (0, 0), (-1, 0), 1, DARK_RED),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, LIGHT_PINK]),
    ]
    table.setStyle(TableStyle(style))

    story = [Paragraph(TITLE, title_style), Paragraph(SUBTITLE, sub_style), Spacer(1, 4), table]
    doc.build(story, onFirstPage=draw_footer, onLaterPages=draw_footer)


def main():
    desktop = Path.home() / "Desktop"
    ap = argparse.ArgumentParser()
    ap.add_argument("--csv", default=str(desktop / "postcard_list.csv"))
    ap.add_argument("--out", default=str(desktop / "wildfire_postcard_targets.pdf"))
    args = ap.parse_args()

    csv_path, out_path = Path(args.csv), Path(args.out)
    if not csv_path.exists():
        raise SystemExit(f"CSV not found: {csv_path}")
    rows = load_rows(csv_path)
    build_pdf(rows, out_path)
    print(f"Wrote {len(rows)} rows to {out_path}")


if __name__ == "__main__":
    main()
