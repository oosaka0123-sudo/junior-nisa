# SITE_DESIGN.md — こどもNISA設計室

## Brand
- Site name: こどもNISA設計室
- Tagline: 制度を知る。家族のお金を設計する。
- Positioning: 金融機関の口座開設誘導ではなく、一次情報・税・払出し・教育費・金融機関実務を横断して整理する独立系教育サイト。
- Tone: 落ち着く / 正確 / 中立 / 実用。煽り、FOMO、「絶対」「最強」「No.1」を避ける。

## Differentiation
1. 重要数値は一次情報へ直リンクし最終確認日を表示。
2. 贈与税とNISAを別制度として扱い、家族全体の資金移動を可視化。
3. 払出し条件を年齢・用途・必要書類までフロー化。
4. 金融機関比較は広告順位ではなく事実項目を横並びにする。
5. 更新ログで変更日・出典・変更内容を公開。
6. シミュレーターは仮定を明示し、運用成果を保証しない。

## Top navigation
- 制度を知る
- 贈与税
- 引き出し
- シミュレーター
- 金融機関比較
- 更新情報
- 一次資料

## Signature tools
- 家族の贈与額チェック
- 教育費から逆算する積立試算
- 600万円枠到達時期シミュレーター
- 払出し条件フローチャート
- 金融機関事実比較テーブル

## Homepage flow
1. Hero: 2027年開始 + ブランド約束
2. 3 key facts: 0–17 / 年60万 / 総枠600万
3. 30秒制度理解
4. 見落としやすい3点: 贈与税 / 払出し / 18歳移行
5. Family planning calculator
6. Financial institution status
7. Latest update log
8. Primary sources
9. Disclaimer

## Visual direction
- White / ink navy / muted sky blue / warning amber
- Stock-photo family imageryを主役にしない
- 図表、数字、タイムライン、チェックリストを主役にする
- Mobile first; 1画面1判断
- Card乱用を避け、文書とツールの中間のUI

## Approved mobile direction (2026-09-21)
- The approved visual reference is the second mobile UI concept generated in this project.
- Mobile is the primary design surface: hero photo + large editorial headline + three key metrics + sticky bottom navigation.
- Visual hierarchy: photo → headline → CTA → 3 key facts → diagram → tools/comparison.
- Use real photography only as a supporting trust element; diagrams, tables, timelines and tools remain the core content.
- Hero photo source currently used in implementation: Arina Krasnikova / Pexels, photo ID 5103415 (Pexels Free License).

## Motion
- Scroll reveal for major sections using IntersectionObserver.
- Metric/tool cards may lift slightly on hover/tap.
- Calculator result graph animates from the baseline.
- Mobile comparison tables are horizontally swipeable.
- Respect `prefers-reduced-motion`; all content must remain fully usable with animation disabled.
- Avoid autoplay video, heavy parallax and decorative motion that harms Core Web Vitals.
