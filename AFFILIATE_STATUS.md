# AFFILIATE_STATUS.md

Last checked: 2026-11-07

This file is an internal operating note. Public pages must never claim an affiliate relationship until the actual program has approved this site and a valid tracking URL has been supplied.

## SBI証券
Official affiliate program confirmed on 2026-11-07.

Official partner ASPs:
- TGアフィリエイト
- アクセストレード
- JANet
- felmat
- TCSアフィリエイト

Site status: affiliate URL not connected.
Public CTA: normal official link until approval.

## 楽天証券
Official affiliate program confirmed on 2026-11-07.

Official program:
- リンクシェア
- Official page notes TGアフィリエイト registration

Site status: affiliate URL not connected.
Public CTA: normal official link until approval.

## マネックス証券
Kid-NISA official product information is confirmed.
A general publicly listed affiliate publisher program was not confirmed from an official Monex page in the 2026-11-07 check.

Site status: do not add an affiliate URL based on assumptions.
Public CTA: normal official link.

## 三菱UFJ eスマート証券
Official affiliate program confirmed on 2026-11-07.

Official partner ASPs:
- afb
- TCS Affiliate
- ACCESSTRADE

Site status: affiliate URL not connected.
Public CTA: normal official link until approval.

## 松井証券
Official affiliate program confirmed on 2026-11-07.

Official partner ASPs:
- アクセストレード
- JANet
- A8.net
- TGアフィリエイト
- TCSアフィリエイト

Site status: affiliate URL not connected.
Public CTA: normal official link until approval.

## 大和証券
Kid-NISA official product information and the 2026-11-02 to 2027-03-31 kid-NISA account-opening campaign are confirmed.
A general publicly listed affiliate publisher program was not confirmed from an official Daiwa page in the 2026-11-07 check.

Site status: do not add an affiliate URL based on assumptions.
Public CTA: normal official link.

## Implementation rules
- Never invent or guess affiliate tracking URLs.
- src/data/providers.ts is the single source of truth for live outbound affiliate URLs.
- affiliateUrl: null means the site must use the normal official URL.
- When a valid affiliate URL is added, ProviderCta.astro automatically adds PR disclosure and rel=sponsored nofollow.
- The high-intent /affiliate/ page automatically adds a page-level PR disclosure when at least one provider has a live affiliate URL.
- Keep official-source/detail links available even when affiliate CTAs are live.
- Do not rank or reorder providers based on commission.
- Do not describe or recommend individual investment products as an unregistered solicitor.
