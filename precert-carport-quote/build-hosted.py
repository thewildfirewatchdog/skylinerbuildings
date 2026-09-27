"""
Builds the "hosted" version of the wizard from skyliner-precert-carport-quote.html.
  hosted/carport-quote.js   -> upload this ONE file to your server
  hosted/divi-snippet.html  -> paste this small snippet into the Divi Code module
Run after changing prices or settings:  python3 precert-carport-quote/build-hosted.py
"""
import json, os, re
here = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(here, "skyliner-precert-carport-quote.html"), encoding="utf-8").read()
css = re.search(r"<style>\n?(.*?)</style>", src, re.S).group(1)
js = re.search(r"<script>\n?(.*?)</script>", src, re.S).group(1)
out = os.path.join(here, "hosted")
os.makedirs(out, exist_ok=True)
with open(os.path.join(out, "carport-quote.js"), "w", encoding="utf-8") as f:
    f.write("/* Skyliner Buildings - Pre-Certified Carport Price Wizard (hosted build).\n"
            "   Generated from skyliner-precert-carport-quote.html by build-hosted.py - edit that file, then rebuild. */\n")
    f.write("(function () { if (document.getElementById(\"skq-styles\")) return; var s = document.createElement(\"style\"); s.id = \"skq-styles\"; s.textContent = "
            + json.dumps(css) + "; document.head.appendChild(s); })();\n")
    f.write(js)
