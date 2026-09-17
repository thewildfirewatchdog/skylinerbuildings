import re, sys
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from xml.sax.saxutils import escape

def md_inline(t):
    t = escape(t)
    t = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', t)
    t = re.sub(r'`(.+?)`', r'<font face="Courier">\1</font>', t)
    t = re.sub(r'\[(.+?)\]\((https?://[^)]+)\)', r'<link href="\2" color="blue">\1</link>', t)
    return t

def build(md_paths, out, title):
    ss = getSampleStyleSheet()
    body = ParagraphStyle('b', parent=ss['BodyText'], fontSize=9.5, leading=13)
    small = ParagraphStyle('s', parent=body, fontSize=8, leading=10)
    h = {1: ss['Title'], 2: ss['Heading2'], 3: ss['Heading3']}
    story = []
    for i, p in enumerate(md_paths):
        if i: story.append(PageBreak())
        lines = open(p).read().split('\n'); j = 0
        while j < len(lines):
            ln = lines[j]
            if ln.startswith('|') and j+1 < len(lines) and re.match(r'^\|[\s:-]+\|', lines[j+1]):
                rows = []
                while j < len(lines) and lines[j].startswith('|'):
                    cells = [c.strip() for c in lines[j].strip().strip('|').split('|')]
                    if not re.match(r'^[\s:-]+$', ''.join(cells)): rows.append([Paragraph(md_inline(c), small) for c in cells])
                    j += 1
                ncol = max(len(r) for r in rows); rows = [r + [Paragraph('', small)]*(ncol-len(r)) for r in rows]
                w = (7.4*72)/ncol
                t = Table(rows, colWidths=[w]*ncol, repeatRows=1)
                t.setStyle(TableStyle([('GRID',(0,0),(-1,-1),0.3,colors.grey),('BACKGROUND',(0,0),(-1,0),colors.HexColor('#EEEEEE')),('VALIGN',(0,0),(-1,-1),'TOP')]))
                story.append(t); story.append(Spacer(1,6)); continue
            m = re.match(r'^(#{1,3})\s+(.*)', ln)
            if m: story.append(Paragraph(md_inline(m.group(2)), h[len(m.group(1))]))
            elif ln.startswith('---'): story.append(Spacer(1,8))
            elif re.match(r'^\s*[-*]\s+', ln): story.append(Paragraph('• ' + md_inline(re.sub(r'^\s*[-*]\s+','',ln)), body))
            elif re.match(r'^\s*\d+\.\s+', ln): story.append(Paragraph(md_inline(ln.strip()), body))
            elif ln.strip(): story.append(Paragraph(md_inline(ln), body))
            else: story.append(Spacer(1,4))
            j += 1
    SimpleDocTemplate(out, pagesize=letter, leftMargin=40, rightMargin=40, topMargin=40, bottomMargin=40, title=title).build(story)

build(['00_START_HERE/START_HERE_Advisor_Review.md'], '00_START_HERE/START_HERE_Advisor_Review.pdf', 'START HERE — Advisor Review')
build(['00_START_HERE/START_HERE_Advisor_Review.md','02_campaign_copy/01_scope_and_claims.md','02_campaign_copy/MASTER_CAMPAIGN.md','04_rewards_and_fulfillment/REWARD_STRUCTURE.md','04_rewards_and_fulfillment/MANUFACTURING_FULFILLMENT_PLAN.md','07_marketing/MARKETING_PACKAGE.md','06_video/VIDEO_SCRIPT_AND_STORYBOARD.md','10_registers/SOURCE_INDEX.md'], '00_START_HERE/WW_Kickstarter_Review_Package_v1.pdf', 'Wildfire Watchdog Kickstarter Review Package v1')
print('pdfs ok')
