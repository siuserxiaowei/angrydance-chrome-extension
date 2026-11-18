# Angry Dance AI — Chrome Extension (MV3) & 2026 Viral AI Video Trend Dataset

[![Release v1.0.0](https://img.shields.io/badge/release-v1.0.0-d1360d)](https://github.com/siuserxiaowei/angrydance-chrome-extension/releases/tag/v1.0.0)
[![Manifest V3](https://img.shields.io/badge/Chrome-Manifest%20V3-1e2340)](https://siuserxiaowei.github.io/angrydance-chrome-extension/)
[![Dataset License: CC BY 4.0](https://img.shields.io/badge/Dataset-CC%20BY%204.0-2d6a4f)](https://angrydance.com/trends)

Official open-source browser companion and public **CC BY 4.0** short-form AI video trend dataset for **[Angry Dance](https://angrydance.com/)** ([中文版工作台](https://angrydance.com/zh)) — turn a single portrait, duo photo, or pet photo into watermark-free AI dance, pet dance, and warm embrace clips.

- **Live Documentation & Dataset Showcase:** <https://siuserxiaowei.github.io/angrydance-chrome-extension/>
- **Angry Dance Web Studio (EN / 中文):** <https://angrydance.com/> · <https://angrydance.com/zh>
- **Live Interactive AI Trend Radar:** <https://angrydance.com/trends>

---

## 1. What's Inside This Repository

| Directory | Contents | License |
| :--- | :--- | :--- |
| [`extension/`](./extension) | Store-compliant **Manifest V3** Chrome & Edge Extension (`permissions: ["contextMenus"]` only, zero host permissions, zero content scripts, bilingual `en` + `zh_CN`). | MIT |
| [`dataset/public-trends-2026-11.json`](./dataset/public-trends-2026-11.json) | Sanitized snapshot of **45 ranked single-photo AI video & restyle clusters** distilled from **556** tracked short-form formats (**352,433,822** cumulative views). | CC BY 4.0 |
| [`docs/`](./docs) | Static HTML documentation & interactive trend reference published via GitHub Pages. | MIT |

---

## 2. Chrome & Edge Extension Features (`extension/`)

1. **Right-Click Any Web Image to Animate:** Right-click an image on any webpage and select **"Make This Photo Dance with Angry Dance AI"** to pass the public image reference directly into [Angry Dance Studio](https://angrydance.com/).
2. **One-Click Creative Toolbar Popup:** Instant launch cards for:
   - [Angry Dance AI Filter](https://angrydance.com/effects/angry-dance)
   - [Dog & Pet Dance AI](https://angrydance.com/effects/dog-dance-ai) & [Cat Dance AI](https://angrydance.com/effects/cat-dance-ai)
   - [AI Hug Video Generator](https://angrydance.com/effects/ai-hug-video)
   - [Custom Image-to-Video Studio](https://angrydance.com/tools/image-to-video)
   - [Daily Viral AI Video Trend Radar](https://angrydance.com/trends)
3. **Image URL Quick-Launch Helper:** Paste any public `http://` or `https://` image URL inside the popup to open the studio without downloading and re-uploading files first.
4. **Minimal Permission Architecture:** Requests **only** `"contextMenus"`. Zero `<all_urls>` host permissions, zero injected content scripts, zero background browsing telemetry, and zero remote code execution.

### Install Unpacked (Developer Mode)

1. Download `angrydance-chrome-extension-v1.0.0.zip` from [GitHub Releases](https://github.com/siuserxiaowei/angrydance-chrome-extension/releases/tag/v1.0.0) (or clone this repo and use the `extension/` folder).
2. Open `chrome://extensions` (or `edge://extensions`) and enable **Developer mode**.
3. Click **Load unpacked** and select the `extension/` folder.

---

## 3. 2026 Viral AI Photo-to-Video Trend Dataset (`CC BY 4.0`)

Snapshot date: **`2026-11-17`** · Scanned formats: **`556`** · Single-photo eligible clusters: **`348`** · Combined 24h view delta: **`+9,181,222`**

| Rank | Format Cluster | Category | 24h View Delta | Cumulative Views | Live Template |
| :--- | :--- | :--- | ---: | ---: | :--- |
| #1 | Deck the Halls Holiday Living-Room Dance (`#homealone`) | `dance-motion` | +1,198,672 | 9,770,000 | [Try Workflow](https://angrydance.com/effects/ai-christmas-photo) |
| #2 | Gothic Vampire Chapel Transformation (`#vampirediaries`) | `photo-to-video` | +470,057 | 29,660,000 | [Try Workflow](https://angrydance.com/tools/image-to-video) |
| #3 | Surreal Miniature & Celebrity Entrance Clips (`#creercette`) | `photo-to-video` | +851,624 | 8,660,000 | [Try Workflow](https://angrydance.com/tools/image-to-video) |
| #4 | Hibidi Skibidi Beat-Sync Meme Clip (`#hibidiskibidi`) | `photo-to-video` | +829,751 | 2,450,000 | [Try Workflow](https://angrydance.com/tools/image-to-video) |
| #5 | Open-World Action Loading Screen Intro (`#grandtheftauto6`) | `photo-to-video` | +734,134 | 734,000 | [Try Workflow](https://angrydance.com/tools/image-to-video) |
| #6 | Wassup Morphing Portrait Transition (`#minutewassup`) | `photo-to-video` | +702,747 | 2,960,000 | [Try Workflow](https://angrydance.com/tools/image-to-video) |
| #7 | Savanna Lion Riding Video (`#lionriding`) | `photo-to-video` | +592,875 | 3,310,000 | [Try Workflow](https://angrydance.com/effects/lion-riding-ai) |
| #8 | Stadium Goal Celebration Highlight (`#football`) | `photo-to-video` | +237,082 | 36,500,000 | [Try Workflow](https://angrydance.com/tools/image-to-video) |
| #9 | Colored Sweater B&W Portrait (`#coloredsweater`) | `photo-restyle` | +537,179 | 1,950,000 | [Try Workflow](https://angrydance.com/effects/colored-sweater-ai) |
| #10 | Self-Embrace Healing Sketch (`#timismo`) | `photo-restyle` | +401,050 | 3,390,000 | [Try Workflow](https://angrydance.com/effects/ai-hug-video) |

> Explore all 45 ranked clusters with live category filters and instant studio launch at **<https://angrydance.com/trends>**.

### Citation (CC BY 4.0)

```markdown
Source: [Angry Dance 2026 Viral AI Photo-to-Video Trend Radar](https://angrydance.com/trends) by [Angry Dance](https://angrydance.com/) (CC BY 4.0).
```

---

## 4. 中文简介（Angry Dance 官方开源扩展与趋势数据集）

本仓库包含 **[Angry Dance（愤怒之舞 AI）](https://angrydance.com/zh)** 的开源 Manifest V3 浏览器扩展源码（`extension/`）以及遵循 **CC BY 4.0** 协议公开的短视频 AI 图生视频热梗数据集（`dataset/public-trends-2026-11.json`）。

- **在线工作台（中英双语）：** <https://angrydance.com/zh>
- **招牌愤怒之舞特效：** <https://angrydance.com/effects/angry-dance>
- **狗狗与猫咪跳舞特效：** <https://angrydance.com/effects/dog-dance-ai> · <https://angrydance.com/effects/cat-dance-ai>
- **AI 温暖拥抱视频：** <https://angrydance.com/effects/ai-hug-video>
- **自定义图生视频工具：** <https://angrydance.com/tools/image-to-video>
- **每日 AI 爆款热梗雷达：** <https://angrydance.com/trends>
