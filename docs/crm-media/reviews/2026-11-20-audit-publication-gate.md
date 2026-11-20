# 2026-11-20 監査 公開判定ゲート（残り7件）

判定: **公開更新可**。7件すべて提案どおり反映済み。Critical 0 / Major 0 / Minor 0。

## 方法と範囲

- 実機検証ではない。原稿（`src/content/crm-media/`）、一次実装（crm-run f8c3396 `src/components/app-sidebar.tsx:212-233`）、先行記録（`2026-11-20-audit-final-b2b.md`、`-final-school-a.md`、`-final-school-b.md`、`-latest-crm.md`、`-final-experience.md`）と `../audit-2026-11-20/last-seven-corrections.json` の照合。
- 対象は7件の該当行と前後の文だけ。初回からの指摘の再レビューと、無関係な表現の言い換え探しはしていない。
- 観点: ①事実の整合 ②文脈の整合 ③表記の整合。

## 7件の結果

| ID | 原稿の位置 | 反映 | ①事実 | ②文脈 | ③表記 |
|---|---|---|---|---|---|
| final-b2b-001 | ja/bosses-get-screenshots-instead-of-crm-access.md:28 | 修正文と一致 | 見出しは `pick(lang,'業務','View','業務')`（app-sidebar.tsx:214）で一致 | キャプション内の位置説明として成立 | 可 |
| final-b2b-002 | ja/bulk-and-one-to-one-email-get-mixed-up.md:45 | 修正文と一致 | 「業務」「営業」「マーケ」「すべて」は実装の表示名と一致（:214, :231-232） | 直前の配信手順から自然につながる | 可 |
| final-b2b-003 | en/bulk-and-one-to-one-email-get-mixed-up.md:45 | 修正文と一致 | 英語ラベル "View"、選択肢 "All" と一致 | ja版と同じ内容 | en/empty-crm-stalls-at-setup.md の "View" と揃う |
| EXP-001 | ja/which-automations-to-turn-on-first.md:6 | 修正文と一致 | 新しい体験・数字なし | 本文19行目「避けたいのは〜」の2点と対応し、排他的な二択・「全部切る」結末が消えた | 可 |
| EXP-002 | en/which-automations-to-turn-on-first.md:6 | 修正文と一致 | 同上 | 本文19行目 "Two problems to avoid are…" と対応 | 可 |
| EXP-003 | ja/meeting-notes-stay-in-the-notebook.md:28 | 修正文と一致 | 新しい主張なし | 「会議中に打たせない理由」になり、26行目・同段落末の「打ち直す15分」と区別された | 可 |
| EXP-004 | en/meeting-notes-stay-in-the-notebook.md:28 | 修正文と一致 | 同上 | "type straight into the CRM" が非現実的な理由として読め、26行目の retyping と区別された | 可 |

## 対象外の既知事項（件数に含めない）

`asking-people-where-the-deal-stands` の ja・en（31・42行）に「業務を切り替え」／"Switch workspace view" が残っている。`2026-11-20-audit-final-b2b.md` が対象外として記録済みのもので、今回の7件の範囲外。直すなら final-b2b-001〜003 と同じ置き換えで揃う。

## 出力

- `../audit-2026-11-20/publication-gate.json`
