# Screeneroo — Ask About Worker Activity

## What this is
This is the Screeneroo worker-monitoring app (https://screeneroo.com). When I ask
questions in plain English about worker activity, fetch live data from the site and
answer clearly. I'm a vibe coder — give me plain-English answers, not code dumps,
unless I ask to see the code.

## How to answer an activity question
1. The live site is at the base URL in `.env`. The API endpoints live in this project's
   `api/` folder and read from `data/`. The web dashboards are report-v2.php, status.php,
   and usage.php.
2. Before calling anything, read the relevant PHP source in THIS repo to confirm the
   exact endpoint URL, its parameters, and the auth scheme (it uses a "magic-key" auth).
   Don't guess endpoints — confirm them from the source first.
3. Auth: the magic key and base URL are in `.env` (copy `.env.example` → `.env` and fill
   in the real values). Use them when calling live endpoints. Never print the key to screen.
4. Fetch with curl, parse the JSON/HTML that comes back, and summarize.

## The data you'll see
Each worker record includes fields like: active_app, window_title, idle_seconds,
monitor_mode, worker, pc_online — plus session start/stop times and app-usage totals.
Current demo worker: Stilton Tosh (pc: oaxaca_worker_pc, timezone America/Mexico_City,
expected shift 07:00–15:30 = 8.5 hrs).

## Example questions I'll ask
- "Is the Oaxaca worker online right now?"
- "How many hours did Stilton work today / this week?"
- "What app has he spent the most time in today?"
- "Was there a long idle gap this morning?"
- "Give me a one-line status for every worker."

## Style
- Lead with the answer (online/offline, hours, top app), then one short supporting detail.
- Convert times into the worker's timezone when it matters.
- If an endpoint fails, say so plainly and suggest the likely fix (bad key, wrong PC name).
  Never invent numbers.
