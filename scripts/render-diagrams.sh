#!/usr/bin/env bash
# SVGの図をPNGに書き出す。
#
# なぜ必要か:
#   1. OGP画像はPNGでないと、一部のSNSクライアントで表示されません
#   2. SVGを <img> で読み込むとページのWebフォントが効かないため、
#      閲覧環境によって書体が変わります。PNGなら見た目が固定されます
#
# 必要なもの: librsvg（rsvg-convert）
#   macOS: brew install librsvg
#
# 使い方: bash scripts/render-diagrams.sh
#
# 図を編集したら、このスクリプトを回してPNGを更新し、両方コミットしてください。

set -euo pipefail

cd "$(dirname "$0")/.."

if ! command -v rsvg-convert >/dev/null 2>&1; then
	echo "rsvg-convert が見つかりません。'brew install librsvg' を実行してください。" >&2
	exit 1
fi

DIAGRAMS_DIR="public/images/diagrams"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

# rsvg-convert はカンマ区切りのfont-familyリストを1つの書体名として扱うため、
# 日本語が描画されずに消えます。書き出し時だけ単一の書体名に差し替えます。
# 書体名は環境で異なるので、見つかったものを使います。
detect_font() {
	for name in "Hiragino Sans" "Noto Sans CJK JP" "Noto Sans JP" "YuGothic"; do
		if fc-list :lang=ja family 2>/dev/null | grep -qF "$name"; then
			echo "$name"
			return
		fi
	done
	echo "sans-serif"
}

FONT="$(detect_font)"
echo "書体: $FONT"

render() {
	local src="$1" out="$2"
	shift 2
	local tmp="$TMP_DIR/$(basename "$src")"
	sed "s/font-family=\"[^\"]*\"/font-family=\"$FONT\"/" "$src" > "$tmp"
	rsvg-convert --background-color '#FAFAF9' --output "$out" "$@" "$tmp"
}

echo "→ OGP画像を書き出しています"
render "$DIAGRAMS_DIR/og-revenue-architecture.svg" "public/images/og-revenue-architecture.png" \
	--width 1200 --height 630

# 記事中の図。Retina表示を考慮して実寸（900px）の2倍で書き出します。
echo "→ 日本版ボウタイ図を書き出しています"
render "$DIAGRAMS_DIR/bowtie-japan.svg" "$DIAGRAMS_DIR/bowtie-japan.png" \
	--width 1800

echo "完了しました。"
ls -lh public/images/og-revenue-architecture.png "$DIAGRAMS_DIR/bowtie-japan.png"
