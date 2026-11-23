# Angry Dance AI — Chrome Extension (MV3) & 2026 Viral AI Video Trend Dataset

[![Release v1.0.0](https://img.shields.io/badge/release-v1.0.0-d1360d)](https://github.com/siuserxiaowei/angrydance-chrome-extension/releases/tag/v1.0.0)
[![Manifest V3](https://img.shields.io/badge/Chrome-Manifest%20V3-1e2340)](https://siuserxiaowei.github.io/angrydance-chrome-extension/)
[![Dataset License: CC BY 4.0](https://img.shields.io/badge/Dataset-CC%20BY%204.0-2d6a4f)](https://angrydance.com/trends)

Official open-source browser companion and public **CC BY 4.0** short-form AI video trend dataset for **[Angry Dance](https://angrydance.com/)** ([中文版工作台](https://angrydance.com/zh)) — turn a single portrait, duo photo, or pet photo into watermark-free AI dance, pet dance, and warm embrace clips.

- **Live Documentation & Dataset Showcase:** <https://siuserxiaowei.github.io/angrydance-chrome-extension/>
- **Angry Dance Web Studio (EN / 中文):** <https://angrydance.com/> · <https://angrydance.com/zh>
- **Free Creator Tools Hub ($0 Browser Utilities):** <https://angrydance.com/tools>
- **Live Interactive AI Trend Radar:** <https://angrydance.com/trends>
- **2026 Comparison Guide:** [Best AI Angry Dance & Meme Video Generators (2026)](https://angrydance.com/blog/best-ai-angry-dance-meme-video-generators-2026)

---

## 1. What's Inside This Repository

| Directory | Contents | License |
| :--- | :--- | :--- |
| [`extension/`](./extension) | Store-compliant **Manifest V3** Chrome & Edge Extension (`permissions: ["contextMenus"]` only, zero host permissions, zero content scripts, bilingual `en` + `zh_CN`). | MIT |
| [`dataset/public-trends-2026-11.json`](./dataset/public-trends-2026-11.json) | Sanitized snapshot of **72 ranked single-photo AI video & restyle clusters** distilled from **573** tracked short-form formats (**386,196,564** cumulative views). | CC BY 4.0 |
| [`docs/`](./docs) | Static HTML documentation & interactive trend reference published via GitHub Pages. | MIT |

---

## 2. Chrome & Edge Extension Features (`extension/`)

1. **Right-Click Any Web Image to Animate:** Right-click an image on any webpage and select **"Make This Photo Dance with Angry Dance AI"** to pass the public image reference directly into [Angry Dance Studio](https://angrydance.com/).
2. **One-Click Creative Toolbar Popup:** Instant launch cards for:
   - [Angry Dance AI Filter](https://angrydance.com/effects/angry-dance) & [Kling 2.6 Motion Control](https://angrydance.com/models/kling-2-6-motion-control)
   - [Jensen Huang Style Leather Jacket CEO Stage](https://angrydance.com/effects/leather-jacket-ceo-stage-ai), [Boss Is Back Entrance](https://angrydance.com/effects/boss-is-back-entrance-ai), [Night Market VIP Walk](https://angrydance.com/effects/night-market-vip-walk-ai) & [1-Click Leather Jacket Photo Filter](https://angrydance.com/effects/leather-jacket-keynote-photo-ai)
   - [Stadium Kiss Cam Prank AI](https://angrydance.com/effects/stadium-kiss-cam-prank-ai) & [Nov 2026 Jensen Huang AI Meme Guide](https://angrydance.com/blog/jensen-huang-ai-meme-trend-2026)
   - [GTA 6 AI Filter](https://angrydance.com/effects/gta-6-ai-filter) & [GTA 5 Goodbye AI](https://angrydance.com/effects/gta-5-goodbye-ai)
   - [AI Christmas Dance](https://angrydance.com/effects/christmas-dance-ai), [Dog Dance AI](https://angrydance.com/effects/dog-dance-ai) & [Cat Dance AI](https://angrydance.com/effects/cat-dance-ai)
   - [Free Creator Tools Hub](https://angrydance.com/tools) — BPM Beat-Sync Calculator, Crisp Video Frame Extractor, and Watermark-Free Meme GIF Maker (plus [Free Credits](https://angrydance.com/free))
   - [LTX 2.5 Fast (Native Audio I2V)](https://angrydance.com/models/ltx-2-5-fast-i2v) & [Nano Banana 2.1](https://angrydance.com/models/nano-banana-2-1)
   - [Daily Viral AI Video Trend Radar](https://angrydance.com/trends)
3. **Image URL Quick-Launch Helper:** Paste any public `http://` or `https://` image URL inside the popup to open the studio without downloading and re-uploading files first.
4. **Minimal Permission Architecture:** Requests **only** `"contextMenus"`. Zero `<all_urls>` host permissions, zero injected content scripts, zero background browsing telemetry, and zero remote code execution.

### Install Unpacked (Developer Mode)

1. Download `angrydance-chrome-extension-v1.0.0.zip` from [GitHub Releases](https://github.com/siuserxiaowei/angrydance-chrome-extension/releases/tag/v1.0.0) (or clone this repo and use the `extension/` folder).
2. Open `chrome://extensions` (or `edge://extensions`) and enable **Developer mode**.
3. Click **Load unpacked** and select the `extension/` folder.

---

## 3. 2026 Viral AI Photo-to-Video Trend Dataset (`CC BY 4.0`)

Snapshot date: **`2026-11-18`** · Scanned formats: **`573`** · Single-photo eligible clusters: **`396`** · Combined 24h view delta: **`+8,060,223`**

| Rank | Format Cluster | Category | 24h View Delta | Cumulative Views | Live Template |
| :--- | :--- | :--- | ---: | ---: | :--- |
| #1 | Gothic Vampire Chapel Transformation (`#vampirediaries`) | `photo-to-video` | +470,057 | 29,660,000 | [Try Workflow](https://angrydance.com/effects/vampire-filter-ai) |
| #2 | Surreal Miniature & Blister-Box Entrance Clips (`#creercette`) | `photo-to-video` | +851,624 | 8,660,000 | [Try Workflow](https://angrydance.com/effects/ai-action-figure-video) |
| #3 | Hibidi Skibidi Beat-Sync Meme Clip (`#hibidiskibidi`) | `photo-to-video` | +829,751 | 2,450,000 | [Try Workflow](https://angrydance.com/effects/angry-dance) |
| #4 | Open-World Action Loading Screen Intro (`#grandtheftauto6`) | `photo-to-video` | +734,134 | 9,220,000 | [Try Workflow](https://angrydance.com/effects/gta-6-ai-filter) |
| #5 | Wassup Bass-Drop Groove Transition (`#minutewassup`) | `photo-to-video` | +702,747 | 2,960,000 | [Try Workflow](https://angrydance.com/effects/give-it-all-to-me-ai) |
| #6 | Savanna Lion Riding Video (`#lionriding`) | `photo-to-video` | +592,875 | 3,310,000 | [Try Workflow](https://angrydance.com/effects/lion-riding-ai) |
| #7 | Stadium Goal Celebration Highlight (`#football`) | `photo-to-video` | +237,082 | 36,500,000 | [Try Workflow](https://angrydance.com/effects/ai-football-goal) |
| #8 | Colored Sweater B&W Portrait (`#coloredsweater`) | `photo-restyle` | +537,179 | 1,950,000 | [Try Workflow](https://angrydance.com/effects/colored-sweater-ai) |
| #9 | Self-Embrace Healing Sketch (Abrazo Propio) (`#timismo`) | `photo-restyle` | +401,050 | 3,390,000 | [Try Workflow](https://angrydance.com/effects/self-hug-sketch-ai) |
| #10 | Holiday Sweater & Deck the Halls Dance (`#christmas`) | `dance-motion` | +243,790 | 10,330,000 | [Try Workflow](https://angrydance.com/effects/christmas-dance-ai) |

> Explore all 45 ranked clusters with live category filters and instant studio launch at **<https://angrydance.com/trends>**.

### Citation (CC BY 4.0)

```markdown
Source: [Angry Dance 2026 Viral AI Photo-to-Video Trend Radar](https://angrydance.com/trends) by [Angry Dance](https://angrydance.com/) (CC BY 4.0).
```

### Related Resources & Creator Partner Program

- **2026 Benchmark & Buyer's Guide:** [Best AI Angry Dance & Meme Video Generators (2026)](https://angrydance.com/blog/best-ai-angry-dance-meme-video-generators-2026)
- **Free Creator Tools Hub:** [BPM Beat-Sync Calculator, Crisp Video Frame Extractor & Watermark-Free Meme GIF Maker](https://angrydance.com/tools)
- **Affiliate Program (30% Commission):** [Join the Angry Dance Creator Affiliate Program](https://angrydance.com/affiliates)

---

## 4. 中文简介（Angry Dance 官方开源扩展与趋势数据集）

本仓库包含 **[Angry Dance（愤怒之舞 AI）](https://angrydance.com/zh)** 的开源 Manifest V3 浏览器扩展源码（`extension/`）以及遵循 **CC BY 4.0** 协议公开的短视频 AI 图生视频热梗数据集（`dataset/public-trends-2026-11.json`）。

- **在线工作台（中英西葡四语）：** <https://angrydance.com/zh>
- **招牌愤怒之舞 & GTA 6 滤镜：** <https://angrydance.com/effects/angry-dance> · <https://angrydance.com/effects/gta-6-ai-filter>
- **2026.11 黄仁勋同款黑皮衣热梗专题（本人自拍合规版）：** [黑皮衣巡演登台](https://angrydance.com/effects/leather-jacket-ceo-stage-ai) · [霸总回宫进场](https://angrydance.com/effects/boss-is-back-entrance-ai) · [黑皮衣逛夜市](https://angrydance.com/effects/night-market-vip-walk-ai) · [一键换黑皮衣照](https://angrydance.com/effects/leather-jacket-keynote-photo-ai) · [球场 Kiss Cam](https://angrydance.com/effects/stadium-kiss-cam-prank-ai) · [热点拆解指南](https://angrydance.com/zh/blog/jensen-huang-ai-meme-trend-2026)
- **AI 圣诞热舞 & 萌宠跳舞（狗狗 / 猫咪）：** <https://angrydance.com/effects/christmas-dance-ai> · <https://angrydance.com/effects/dog-dance-ai> · <https://angrydance.com/effects/cat-dance-ai>
- **免费创作者工具箱（BPM 卡点计算器 / 高清视频抽帧 / 无水印表情包 GIF / 视频转 GIF）：** <https://angrydance.com/tools> · <https://angrydance.com/tools/video-to-gif-converter> · <https://angrydance.com/free>
- **热门模型通道（Kling 2.6 / LTX 2.5 / Nano Banana 2.1）：** <https://angrydance.com/models/kling-2-6-motion-control> · <https://angrydance.com/models/ltx-2-5-fast-i2v> · <https://angrydance.com/models/nano-banana-2-1>
- **每日 AI 爆款热梗雷达：** <https://angrydance.com/trends>
- **2026 横评指南 & 创作者联盟（30% 分成）：** <https://angrydance.com/blog/best-ai-angry-dance-meme-video-generators-2026> · <https://angrydance.com/affiliates>
