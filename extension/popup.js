'use strict';

const STORAGE_LANG_KEY = 'angrydance_ext_locale';
const HELPER_BASE_URL =
  'https://angrydance.com/?utm_source=chrome_extension&utm_medium=popup_helper';
const MAX_IMAGE_URL_LENGTH = 1800;

const DICTIONARY = {
  en: {
    headerBadge: 'AI VIDEO LAUNCHER',
    headerSubtitle: 'One-click AI dance, pet motion & daily trend radar',
    heroTag: 'STUDIO',
    cardStudioTitle: 'Studio Generator',
    cardStudioDesc: 'Upload any portrait or character photo & pick motion',
    cardStudioCta: 'Open Studio',
    sectionEffects: 'POPULAR EFFECTS & RADAR',
    cardDogTitle: 'Dog & Pet Dance AI',
    cardDogDesc: 'Turn dog & cat photos into viral dance clips',
    cardDogTag: 'HOT',
    cardHugTitle: 'AI Hug Video',
    cardHugDesc: 'Animate single or duo photos into a warm embrace',
    cardHugTag: 'WARM',
    cardImg2VidTitle: 'Image to Video',
    cardImg2VidDesc: 'Cinematic camera & character motion from 1 photo',
    cardImg2VidTag: 'TOOL',
    cardTrendsTitle: 'Daily Viral AI Trend Radar',
    cardTrendsDesc: 'Live TikTok, Reels & Shorts AI video trend tracker',
    cardTrendsTag: 'LIVE',
    quickImageLabel: 'IMAGE URL QUICK LAUNCH',
    quickImagePlaceholder: 'Paste image URL (https://...) to animate',
    quickImageBtn: 'Animate',
    quickImageInvalid: 'Please enter a valid http:// or https:// image URL.',
    tipRightClick:
      'Tip: Right-click any web image → “Make This Photo Dance with Angry Dance AI”',
    footerHome: 'AngryDance.com',
    footerEffects: 'All Effects',
    footerInvite: 'Free Credits',
    footerPrivacy: 'Privacy',
  },
  zh_CN: {
    headerBadge: 'AI 视频工作台',
    headerSubtitle: '一键启动 AI 跳舞、萌宠动效与每日热梗雷达',
    heroTag: '创作台',
    cardStudioTitle: 'Studio 创作工作台',
    cardStudioDesc: '上传人像或角色照片，自由定制舞蹈动作与镜头表现',
    cardStudioCta: '打开工作台',
    sectionEffects: '热门特效与趋势雷达',
    cardDogTitle: '狗狗与宠物跳舞 AI',
    cardDogDesc: '让猫狗萌宠照片秒变魔性卡点跳舞短视频',
    cardDogTag: '爆款',
    cardHugTitle: 'AI 温暖拥抱视频',
    cardHugDesc: '将单人或双人照片自然驱动为温情拥抱短片',
    cardHugTag: '温情',
    cardImg2VidTitle: '图生视频工具',
    cardImg2VidDesc: '单张静态图片一键生成电影级运镜与自然动态',
    cardImg2VidTag: '工具',
    cardTrendsTitle: '每日爆款 AI 热梗雷达',
    cardTrendsDesc: '每日追踪 TikTok、Reels 与 Shorts 飙升 AI 视频玩法',
    cardTrendsTag: '实时',
    quickImageLabel: '图片链接直达生成',
    quickImagePlaceholder: '粘贴网页图片链接 (https://...) 直达创作台',
    quickImageBtn: '去生成',
    quickImageInvalid: '请输入有效的 http:// 或 https:// 图片链接。',
    tipRightClick:
      '提示：在任意网页图片上右键 → 选择「使用 Angry Dance AI 让这张照片跳起来」',
    footerHome: '官方网站',
    footerEffects: '全部特效',
    footerInvite: '邀请得积分',
    footerPrivacy: '隐私政策',
  },
};

function detectInitialLocale() {
  try {
    const saved = window.localStorage.getItem(STORAGE_LANG_KEY);
    if (saved === 'en' || saved === 'zh_CN') {
      return saved;
    }
  } catch {
    // Ignore storage read errors in restricted contexts.
  }

  const uiLang =
    (typeof chrome !== 'undefined' &&
      chrome.i18n &&
      typeof chrome.i18n.getUILanguage === 'function' &&
      chrome.i18n.getUILanguage()) ||
    navigator.language ||
    'en';

  return uiLang.toLowerCase().startsWith('zh') ? 'zh_CN' : 'en';
}

let currentLocale = detectInitialLocale();

function applyLocale(locale) {
  currentLocale = locale === 'zh_CN' ? 'zh_CN' : 'en';
  const messages = DICTIONARY[currentLocale];
  document.documentElement.lang = currentLocale === 'zh_CN' ? 'zh-CN' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && messages[key]) {
      el.textContent = messages[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && messages[key]) {
      el.setAttribute('placeholder', messages[key]);
    }
  });

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = currentLocale === 'zh_CN' ? 'EN' : '中文';
  }

  const errorEl = document.getElementById('helper-error');
  if (errorEl && !errorEl.hidden) {
    errorEl.textContent = messages.quickImageInvalid;
  }
}

function openExternalUrl(url) {
  if (
    typeof chrome !== 'undefined' &&
    chrome.tabs &&
    typeof chrome.tabs.create === 'function'
  ) {
    chrome.tabs.create({ url });
    window.close();
  } else {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

function parsePublicHttpImageUrl(rawValue) {
  if (typeof rawValue !== 'string') {
    return null;
  }
  const trimmed = rawValue.trim();
  if (!trimmed || trimmed.length > MAX_IMAGE_URL_LENGTH) {
    return null;
  }
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
      return parsed.href;
    }
  } catch {
    return null;
  }
  return null;
}

document.addEventListener('DOMContentLoaded', () => {
  applyLocale(currentLocale);

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const nextLocale = currentLocale === 'en' ? 'zh_CN' : 'en';
      try {
        window.localStorage.setItem(STORAGE_LANG_KEY, nextLocale);
      } catch {
        // Ignore storage write errors.
      }
      applyLocale(nextLocale);
    });
  }

  document.querySelectorAll('[data-launch-link]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      if (
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.button !== 0
      ) {
        return;
      }
      const href = anchor.getAttribute('href');
      if (!href) {
        return;
      }
      event.preventDefault();
      openExternalUrl(href);
    });
  });

  const form = document.getElementById('quick-image-form');
  const input = document.getElementById('image-url-input');
  const errorEl = document.getElementById('helper-error');

  if (input && errorEl) {
    input.addEventListener('input', () => {
      if (!errorEl.hidden) {
        errorEl.hidden = true;
      }
    });
  }

  if (form && input && errorEl) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const validUrl = parsePublicHttpImageUrl(input.value);
      if (!validUrl) {
        errorEl.textContent = DICTIONARY[currentLocale].quickImageInvalid;
        errorEl.hidden = false;
        input.focus();
        return;
      }
      errorEl.hidden = true;
      const targetUrl = `${HELPER_BASE_URL}&image=${encodeURIComponent(validUrl)}`;
      openExternalUrl(targetUrl);
    });
  }
});
