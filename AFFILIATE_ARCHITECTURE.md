# AFFILIATE_ARCHITECTURE.md — こどもNISA設計室

## Goal

「制度を理解するサイト」で終わらず、ユーザーが自分の家庭条件を整理し、金融機関を比較し、納得して公式申込ページへ進める導線を作る。

基本導線:

検索流入 → 制度理解 → 家庭条件確認 → 試算 → 比較 → 個別証券会社レビュー → 公式サイトCTA → アフィリエイトリンク

## Core principles

- 広告報酬で順位を変えない
- No.1 / 最強 / 絶対 / 必ず得する等の根拠のない表現を使わない
- 制度・税・手続きの事実は一次資料を優先
- 編集記事と広告導線を明確に分ける
- アフィリエイトを含むページは冒頭で明瞭に広告表示
- 比較表は「確認済み事実」と「未確認」を分ける
- シミュレーターは将来成果を保証しない
- 公的資料ページは非商用寄りで維持する

## Top-level IA

1. /system/ — 制度
2. /gift-tax/ — 贈与税
3. /withdrawal/ — 引き出し
4. /calculator/ — 試算
5. /compare/ — 金融機関比較
6. /brokers/ — 証券会社別レビュー
7. /guides/ — 口座開設・手続き
8. /sources/ — 一次資料
9. /updates/ — 更新履歴
10. /about/ — 編集方針・広告方針・運営者情報

## Homepage funnel

1. Hero
   - 制度を知る。家族のお金を設計する。
   - CTA: 「まず30秒で理解」

2. 3 key facts
   - 0〜17歳
   - 年60万円
   - 非課税保有限度額600万円

3. 30秒制度理解

4. 見落としやすいポイント
   - 贈与税
   - 払出し
   - 18歳以降

5. 家族向け試算
   - CTA: 「結果をもとに金融機関を比べる」

6. 目的別の選び方
   - 楽天経済圏を使っている
   - SBI系サービスを使っている
   - 少額から始めたい
   - 親子の口座管理を簡単にしたい
   ※正式仕様が確認できた項目のみ表示

7. 金融機関比較
   - 順位ではなく事実比較

8. 証券会社別詳細へのリンク

9. 一次資料 / 更新履歴

10. 広告・編集方針へのリンク

## Compare page

URL: /compare/

比較項目:
- 金融機関名
- こどもNISA対応状況
- 受付開始時期
- 親権者口座の要否
- 最低積立額
- 対応商品
- 積立方法
- ポイント関連
- クレカ積立可否
- 手続き方法
- サポート
- 最終確認日
- 一次資料リンク
- 詳細レビュー
- 公式サイトCTA

並び順は明示する。例: 五十音順 / 最低積立額順 / 受付開始順。広告単価順は禁止。

## Brokerage review template

例: /brokers/sbi/ /brokers/rakuten/

1. ページ冒頭の広告表示
2. 30秒要約
3. この証券会社の確認済み特徴
4. 注意点
5. こどもNISA対応状況
6. 親口座との関係
7. 最低積立額
8. 対応商品
9. ポイント / クレカ / 銀行連携
10. 口座開設手順
11. 必要書類
12. よくある質問
13. 他社との比較リンク
14. 公式サイトCTA
15. 一次資料 / 最終確認日

CTA文言例:
- 「SBI証券の公式サイトで確認する」
- 「楽天証券の公式サイトで口座開設条件を確認する」

避ける:
- 「今すぐ絶対申し込むべき」
- 「最強」
- 「必ず儲かる」
- 「誰にでもおすすめ」

## CTA placement

強いCTAは transactional page に限定。

Compare:
- 比較表内
- 各社要約カード下
- ページ末尾

Broker review:
- ファーストビュー直下
- 主要仕様説明後
- 口座開設手順後
- ページ末尾
- スマホ固定CTAは比較/レビューのみ

Information pages:
- 直接アフィリエイトリンクを乱発しない
- 「金融機関を比較する」へ内部リンク

## Non-commercial trust pages

以下は原則としてアフィリエイト色を弱くする。

- /sources/
- /updates/
- 制度の一次資料まとめ
- 贈与税の基本解説
- 払出し制度の基本解説
- シミュレーター本体

試算結果の下にだけ「次に金融機関の違いを見る」という内部リンクを置く。

## Commercial-intent content clusters

High intent:
- こどもNISA SBI証券
- こどもNISA 楽天証券
- SBI証券 楽天証券 こどもNISA 比較
- こどもNISA 口座開設
- こどもNISA 証券会社 比較
- こどもNISA 親口座
- こどもNISA 最低積立額
- こどもNISA ポイント
- こどもNISA クレカ積立
- 兄弟 こどもNISA 管理

Mid intent:
- 月1万円 / 3万円 / 5万円
- 0歳から18歳
- 大学資金
- 教育費
- 贈与税とNISA

## Internal linking

/system/ → /calculator/ → /compare/
/gift-tax/ → /calculator/ → /compare/
/withdrawal/ → /compare/
/calculator/ → /compare/
/compare/ → /brokers/{name}/
/brokers/{name}/ → /guides/{name}-open/
/guides/{name}-open/ → affiliate CTA

比較ページを収益ハブにする。

## Advertising disclosure

アフィリエイトリンクを含むページ上部に、本文と同等に視認できるサイズで表示する。

例:
「このページにはアフィリエイト広告が含まれます。掲載順や評価は広告報酬では決めていません。」

全体ポリシー:
- /about/editorial-policy/
- /about/advertising-policy/

広告リンク近辺でも誤認しやすい場合はPR/広告であることを補足する。

## Metrics

GA4 / Search Console / affiliate dashboard で以下を追う。

- Search → content landing
- content → calculator
- calculator completion
- content → compare CTR
- compare → broker review CTR
- broker review → affiliate outbound CTR
- affiliate CVR
- EPC
- device別CVR
- page別離脱率

最重要KPI:
1. /compare/ への遷移率
2. compare → broker review
3. broker review → affiliate outbound
4. affiliate CVR

## MVP implementation order

Phase 1
- 広告表示
- 編集方針 / 広告方針
- /compare/ 本格化
- TOP → compare 導線
- calculator → compare 導線

Phase 2
- SBI証券詳細
- 楽天証券詳細
- 口座開設ガイド
- CTA計測

Phase 3
- SBI vs 楽天比較
- 高意図記事
- 兄弟 / 教育費 / ポイント系記事

Phase 4
- 実データでCTA位置改善
- 金融機関追加
- CVR改善

## Red flags

- 広告案件の有無で比較対象を除外する
- 報酬額で順位を変更する
- 一次資料のない金融機関仕様を確定表示する
- 未成年向けNISAと成人NISA仕様を混同する
- シミュレーション値を予測値として表示する
- 「おすすめ1位」を根拠なく使う
- PR表示をフッターだけに置く
- 公的機関と提携しているような誤認を与える
