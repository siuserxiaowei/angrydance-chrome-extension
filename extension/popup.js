'use strict';

const STORAGE_LANG_KEY = 'angrydance_ext_locale';
const HELPER_BASE_URL =
  'https://angrydance.com/?utm_source=chrome_extension&utm_medium=popup_helper';
const MAX_IMAGE_URL_LENGTH = 1800;

const DICTIONARY = {
  en: {
    langAttr: 'en',
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
    footerTools: 'Free Tools',
    footerInvite: 'Free Credits',
    footerPrivacy: 'Privacy',
  },
  zh_CN: {
    langAttr: 'zh-CN',
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
    footerTools: '免费工具',
    footerInvite: '邀请得积分',
    footerPrivacy: '隐私政策',
  },
  ja: {
    langAttr: 'ja',
    headerBadge: 'AI 動画ランチャー',
    headerSubtitle: 'ワンクリックでAIダンス・ペット動画・トレンド確認',
    heroTag: 'スタジオ',
    cardStudioTitle: 'スタジオ生成ツール',
    cardStudioDesc: '人物やキャラの写真をアップロードしてダンス生成',
    cardStudioCta: 'スタジオを開く',
    sectionEffects: '人気エフェクト＆トレンド',
    cardDogTitle: '犬＆ペットダンス AI',
    cardDogDesc: '愛犬・愛猫の写真をかわいいダンス動画に変換',
    cardDogTag: '人気',
    cardHugTitle: 'AI ハグ動画',
    cardHugDesc: '1〜2枚の写真を温かいハグ動画へアニメーション化',
    cardHugTag: '感動',
    cardImg2VidTitle: '画像から動画生成',
    cardImg2VidDesc: '1枚の静止画から映画のようなカメラモーションを生成',
    cardImg2VidTag: 'ツール',
    cardTrendsTitle: '毎日の AI トレンドレーダー',
    cardTrendsDesc: 'TikTok・Reels・Shorts の急上昇AI動画を追跡',
    cardTrendsTag: 'LIVE',
    quickImageLabel: '画像 URL クイック起動',
    quickImagePlaceholder: '画像 URL (https://...) を貼り付けて起動',
    quickImageBtn: '作成',
    quickImageInvalid:
      '有効な http:// または https:// の画像 URL を入力してください。',
    tipRightClick:
      'ヒント：Web上の画像を右クリック →「Angry Dance AI でこの写真を踊らせる」',
    footerHome: '公式サイト',
    footerEffects: '全エフェクト',
    footerTools: '無料ツール',
    footerInvite: '無料クレジット',
    footerPrivacy: 'プライバシー',
  },
  ko: {
    langAttr: 'ko',
    headerBadge: 'AI 비디오 런처',
    headerSubtitle: '원클릭 AI 댄스, 반려동물 모션 & 실시간 트렌드',
    heroTag: '스튜디오',
    cardStudioTitle: '스튜디오 생성기',
    cardStudioDesc: '인물·캐릭터 사진 업로드 후 원하는 댄스 모션 선택',
    cardStudioCta: '스튜디오 열기',
    sectionEffects: '인기 이펙트 & 트렌드 레이더',
    cardDogTitle: '강아지 & 반려동물 춤 AI',
    cardDogDesc: '강아지·고양이 사진을 귀여운 댄스 숏폼으로 변환',
    cardDogTag: '인기',
    cardHugTitle: 'AI 포옹 비디오',
    cardHugDesc: '사진 속 인물을 따뜻한 포옹 영상으로 자연스럽게 연결',
    cardHugTag: '감동',
    cardImg2VidTitle: '이미지 투 비디오',
    cardImg2VidDesc: '사진 한 장으로 시네마틱 카메라 무빙과 모션 생성',
    cardImg2VidTag: '도구',
    cardTrendsTitle: '실시간 바이럴 AI 트렌드 레이더',
    cardTrendsDesc: '틱톡, 릴스, 쇼츠 급상승 AI 영상 포맷 추적',
    cardTrendsTag: 'LIVE',
    quickImageLabel: '이미지 URL 빠른 실행',
    quickImagePlaceholder: '이미지 URL(https://...) 붙여넣기',
    quickImageBtn: '생성',
    quickImageInvalid:
      '유효한 http:// 또는 https:// 이미지 URL을 입력해 주세요.',
    tipRightClick:
      '팁: 웹 이미지 우클릭 → ‘Angry Dance AI로 이 사진을 춤추게 만들기’ 선택',
    footerHome: '공식 사이트',
    footerEffects: '전체 효과',
    footerTools: '무료 도구',
    footerInvite: '무료 크레딧',
    footerPrivacy: '개인정보',
  },
  es: {
    langAttr: 'es',
    headerBadge: 'LANZADOR DE VIDEO IA',
    headerSubtitle: 'Baile IA en un clic, mascotas y radar de tendencias',
    heroTag: 'ESTUDIO',
    cardStudioTitle: 'Generador de Estudio',
    cardStudioDesc: 'Sube cualquier retrato o personaje y elige el baile',
    cardStudioCta: 'Abrir Estudio',
    sectionEffects: 'EFECTOS POPULARES Y RADAR',
    cardDogTitle: 'Baile de Perros y Mascotas IA',
    cardDogDesc: 'Convierte fotos de perros y gatos en clips de baile',
    cardDogTag: 'TOP',
    cardHugTitle: 'Video de Abrazo con IA',
    cardHugDesc: 'Anima fotos individuales o en pareja en un abrazo',
    cardHugTag: 'CÁLIDO',
    cardImg2VidTitle: 'Imagen a Video',
    cardImg2VidDesc: 'Movimiento cinematográfico a partir de una sola foto',
    cardImg2VidTag: 'IA',
    cardTrendsTitle: 'Radar Diario de Tendencias IA',
    cardTrendsDesc: 'Tendencias en vivo de TikTok, Reels y Shorts',
    cardTrendsTag: 'VIVO',
    quickImageLabel: 'LANZAR CON URL DE IMAGEN',
    quickImagePlaceholder: 'Pega la URL de la imagen (https://...)',
    quickImageBtn: 'Animar',
    quickImageInvalid:
      'Introduce una URL de imagen válida con http:// o https://.',
    tipRightClick:
      'Consejo: Clic derecho en cualquier imagen → “Hacer bailar esta foto con Angry Dance AI”',
    footerHome: 'AngryDance.com',
    footerEffects: 'Efectos',
    footerTools: 'Herramientas',
    footerInvite: 'Créditos Gratis',
    footerPrivacy: 'Privacidad',
  },
  pt_BR: {
    langAttr: 'pt-BR',
    headerBadge: 'ATALHO DE VÍDEO IA',
    headerSubtitle: 'Dança IA em um clique, pets e radar de tendências',
    heroTag: 'ESTÚDIO',
    cardStudioTitle: 'Gerador do Estúdio',
    cardStudioDesc: 'Envie qualquer retrato ou personagem e escolha o movimento',
    cardStudioCta: 'Abrir Estúdio',
    sectionEffects: 'EFEITOS POPULARES E RADAR',
    cardDogTitle: 'Dança de Cachorro e Pet IA',
    cardDogDesc: 'Transforme fotos de cães e gatos em vídeos dançando',
    cardDogTag: 'ALTA',
    cardHugTitle: 'Vídeo de Abraço com IA',
    cardHugDesc: 'Anime fotos em um abraço emocionante e realista',
    cardHugTag: 'AFETO',
    cardImg2VidTitle: 'Imagem para Vídeo',
    cardImg2VidDesc: 'Movimento cinematográfico a partir de uma única foto',
    cardImg2VidTag: 'IA',
    cardTrendsTitle: 'Radar Diário de Tendências IA',
    cardTrendsDesc: 'Tendências ao vivo do TikTok, Reels e Shorts',
    cardTrendsTag: 'VIVO',
    quickImageLabel: 'ABRIR COM URL DE IMAGEM',
    quickImagePlaceholder: 'Cole a URL da imagem (https://...)',
    quickImageBtn: 'Animar',
    quickImageInvalid:
      'Insira uma URL de imagem válida com http:// ou https://.',
    tipRightClick:
      'Dica: Clique direito em qualquer imagem → “Fazer esta foto dançar com Angry Dance AI”',
    footerHome: 'AngryDance.com',
    footerEffects: 'Efeitos',
    footerTools: 'Ferramentas',
    footerInvite: 'Créditos Grátis',
    footerPrivacy: 'Privacidade',
  },
};

function normalizeUiLanguage(raw) {
  if (!raw || typeof raw !== 'string') return 'en';
  const low = raw.toLowerCase();
  if (low.startsWith('zh')) return 'zh_CN';
  if (low.startsWith('ja')) return 'ja';
  if (low.startsWith('ko')) return 'ko';
  if (low.startsWith('es')) return 'es';
  if (low.startsWith('pt')) return 'pt_BR';
  return 'en';
}

function detectInitialLocale() {
  try {
    const saved = window.localStorage.getItem(STORAGE_LANG_KEY);
    if (saved && Object.prototype.hasOwnProperty.call(DICTIONARY, saved)) {
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

  return normalizeUiLanguage(uiLang);
}

let currentLocale = detectInitialLocale();

function applyLocale(locale) {
  currentLocale = Object.prototype.hasOwnProperty.call(DICTIONARY, locale)
    ? locale
    : 'en';
  const messages = DICTIONARY[currentLocale];
  document.documentElement.lang = messages.langAttr || 'en';

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

  const selectEl = document.getElementById('lang-select');
  if (selectEl && selectEl.value !== currentLocale) {
    selectEl.value = currentLocale;
  }

  const errorEl = document.getElementById('helper-error');
  if (errorEl && !errorEl.hidden) {
    errorEl.textContent = messages.quickImageInvalid;
  }
}

function localizeSiteHref(rawHref, locale) {
  const prefixMap = {
    en: '',
    zh_CN: '/zh',
    ja: '/ja',
    ko: '/ko',
    es: '/es',
    pt_BR: '/pt',
  };
  const prefix = prefixMap[locale] || '';
  if (!prefix) return rawHref;
  try {
    const u = new URL(rawHref);
    if (u.origin !== 'https://angrydance.com') return rawHref;
    u.pathname =
      u.pathname === '/' ? prefix : `${prefix}${u.pathname}`;
    return u.href;
  } catch {
    return rawHref;
  }
}

function openExternalUrl(url) {
  const localized = localizeSiteHref(url, currentLocale);
  if (
    typeof chrome !== 'undefined' &&
    chrome.tabs &&
    typeof chrome.tabs.create === 'function'
  ) {
    chrome.tabs.create({ url: localized });
    window.close();
  } else {
    window.open(localized, '_blank', 'noopener,noreferrer');
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

  const selectEl = document.getElementById('lang-select');
  if (selectEl) {
    selectEl.addEventListener('change', (e) => {
      const nextLocale = e.target.value;
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
      event.preventDefault();
      const href = anchor.getAttribute('href');
      if (href) {
        openExternalUrl(href);
      }
    });
  });

  const form = document.getElementById('quick-image-form');
  const input = document.getElementById('image-url-input');
  const errorEl = document.getElementById('helper-error');

  if (form && input && errorEl) {
    input.addEventListener('input', () => {
      if (!errorEl.hidden) {
        errorEl.hidden = true;
      }
    });

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
      const target = `${HELPER_BASE_URL}&image=${encodeURIComponent(validUrl)}`;
      openExternalUrl(target);
    });
  }
});
