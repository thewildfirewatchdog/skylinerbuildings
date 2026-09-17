# Wildfire Watchdog Kickstarter — Task Register

Session started: 2026-09-17. Workspace: git repo `thewildfirewatchdog/skylinerbuildings`, branch `claude/beautiful-einstein-dr2yrc`, folder `kickstarter-campaign/`.
KVM 2 (Hostinger VPS): NOT ACCESSIBLE from this session (no SSH key, no credentials, no connector). Package is built here, pushed to GitHub (recoverable copy), and saved to Google Drive.

| # | Deliverable | Status | Location |
|---|-------------|--------|----------|
| 1 | Access verification (VPS, Drive, Gmail, GitHub) | DONE | this file |
| 2 | Source index + research notes | DONE | 01_research/ |
| 3 | Campaign scope (demonstrated vs in development) | DONE | 02_campaign_copy/01_scope_and_claims.md |
| 4 | Kickstarter rules + competitor research | DONE | 01_research/kickstarter_rules_and_competitors.md |
| 5 | Financial workbook (.xlsx, formulas, 3 scenarios) | DONE | 03_financial_model/ |
| 6 | Reward structure | DONE | 04_rewards_and_fulfillment/ |
| 7 | Full campaign copy (title→FAQ→disclosures) | DONE | 02_campaign_copy/ |
| 8 | Manufacturing & fulfillment plan, BOM, supplier RFQs (unsent) | DONE | 04_rewards_and_fulfillment/ |
| 9 | Media package (cover, panels, diagram, reward graphics, timeline, use of funds) | DONE | 05_media/ |
| 10 | Video script, storyboard, shot list, captions | DONE | 06_video/ |
| 11 | Private campaign preview (mobile-friendly HTML) + prelaunch landing page + signup workflow | DONE | 08_preview_site/ |
| 12 | Marketing: 30-day prelaunch, calendar, 7 emails, 10 posts, 5 ad concepts, press release, pitch, templates (EN+ES) | DONE | 07_marketing/ |
| 13 | Field-by-field Kickstarter upload package | DONE | 09_upload_package/ |
| 14 | Verification pass (numbers, links, consistency) | DONE | 10_registers/VERIFICATION_LOG.md |
| 15 | START HERE — Advisor Review (+ PDF) | DONE | 00_START_HERE/ |
| 16 | Save to Drive "Kickstarter Campaign" folder + git push | DONE (Drive: all .md/.html/.xlsx/.pdf uploaded; graphics PNGs uploaded by helper; 25 MB zip only on GitHub) | https://drive.google.com/drive/folders/17m2t7siFFOpZspOm27QzCKw6JIAey6e8 |

## Resume notes (if a new session picks this up)
- Completed: everything in the table above. Latest commit on branch `claude/beautiful-einstein-dr2yrc` in `thewildfirewatchdog/skylinerbuildings`.
- Drive copy: folder "Kickstarter Campaign" inside 02_Wildfire_Watchdog (id 17m2t7siFFOpZspOm27QzCKw6JIAey6e8). Photos are referenced by Drive id in 05_media/photos/DRIVE_SOURCES.md rather than re-uploaded.
- Not done / blocked: fob control box build + video (owner); hero photos (owner upload); supplier quotes (RFQs drafted, unsent); KVM 2 transfer (no access); Kickstarter draft population (no account access); edited campaign video (footage not transferable; key shots missing).
- Next action after owner review: answer the 12 decisions in START HERE §5, then re-run `03_financial_model/build_workbook.py` with any changed inputs and `05_media/build_graphics.py`, regenerate PDFs with `00_START_HERE/make_pdf.py`.
