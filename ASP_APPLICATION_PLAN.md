# ASP_APPLICATION_PLAN.md

Last updated: 2026-11-07

## Goal
Move from an affiliate-ready site to live approved tracking links without changing the editorial ranking or factual comparison logic.

## Priority 1 — A8.net / 松井証券
Why first:
- 松井証券 officially lists A8.net as a partner ASP.
- A8.net currently lists 松井証券 among participating advertisers.
- The site is already complete enough for advertiser review: finance-specific content, comparison pages, disclosure, privacy, editorial policy, primary sources, and a dedicated account-opening page.

Application site:
- https://oosaka0123-sudo.github.io/junior-nisa/

High-intent landing page:
- https://oosaka0123-sudo.github.io/junior-nisa/affiliate/

Supporting pages:
- /compare/
- /brokers/matsui/
- /about/media/
- /about/editorial-policy/
- /about/advertising-policy/
- /about/privacy/

A8 steps:
1. Log in to A8.net.
2. Program search: 「松井証券」.
3. Open program details and confirm the current achievement condition, prohibited media/keywords, listing restrictions, and whether the program is immediate or screened.
4. Select this site as the appeal site.
5. Submit partnership application.
6. Record the status below.

Status: NOT SUBMITTED / USER ACTION REQUIRED

## Priority 2 — ACCESSTRADE / 三菱UFJ eスマート証券
Public AccessTrade page checked in 2026 showed:
- 三菱UFJ eスマート証券: program ID 952022, achievement point account opening completion.
Official MUFG eSmart affiliate page lists ACCESSTRADE as a partner ASP.

Status: NOT SUBMITTED / USER ACTION REQUIRED

## Priority 3 — ACCESSTRADE / SBI証券
Public AccessTrade page checked in 2026 showed:
- SBI証券: program ID 38299.
SBI official affiliate page lists ACCESSTRADE as a partner ASP.

Status: NOT SUBMITTED / USER ACTION REQUIRED

## Priority 4 — ACCESSTRADE / 松井証券
Public AccessTrade page checked in 2026 showed:
- 松井証券: program ID 38376.
This is an alternative to A8.net if the A8 program is unavailable or rejected.

Status: NOT SUBMITTED / USER ACTION REQUIRED

## Priority 5 — 楽天証券
Rakuten Securities officially provides an affiliate program through LinkShare/TG.
Use after the first finance-program approvals to avoid spreading setup effort across too many ASPs at once.

Status: NOT SUBMITTED / USER ACTION REQUIRED

## Application description
Use this when an ASP asks for site description:

「こどもNISA設計室」は、2027年開始のこどもNISAについて、金融庁・財務省・国税庁および各金融機関の公式情報を基に、制度、贈与税、払出し条件、積立シミュレーション、金融機関比較、口座開設前の確認事項を整理する情報サイトです。未確認情報は推測で掲載せず、広告報酬で掲載順位や評価を変更しません。金融商品の個別勧誘や推奨は行わず、各社の公式情報を確認できる導線を提供しています。」

## After approval
1. Copy the approved tracking URL exactly from the ASP.
2. Add it only to the corresponding affiliateUrl in src/data/providers.ts.
3. Do not alter provider ordering.
4. Run CI.
5. Confirm page-level PR disclosure appears on /affiliate/.
6. Confirm provider CTA shows PR and rel=sponsored nofollow.
7. Confirm provider_outbound_click pushes to dataLayer.
8. Verify the landing page and tracking link on mobile.
9. Merge and deploy.
