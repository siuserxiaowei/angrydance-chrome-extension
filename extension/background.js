'use strict';

const CONTEXT_MENU_ID = 'angrydance-make-photo-dance';
const CONTEXT_MENU_FALLBACK_TITLE = 'Make This Photo Dance with Angry Dance AI';
const CONTEXT_BASE_URL =
  'https://angrydance.com/?utm_source=chrome_extension&utm_medium=context_menu';
const MAX_IMAGE_URL_LENGTH = 1800;

/**
 * Safely builds the Angry Dance launch URL with optional public image hint.
 * Keeps data:/blob:/oversized URLs out of query parameters while preserving
 * clean UTM attribution.
 *
 * @param {string | undefined} srcUrl
 * @returns {string}
 */
function buildContextLaunchUrl(srcUrl) {
  if (typeof srcUrl !== 'string' || srcUrl.length === 0) {
    return CONTEXT_BASE_URL;
  }

  const trimmed = srcUrl.trim();
  if (trimmed.length > MAX_IMAGE_URL_LENGTH) {
    return CONTEXT_BASE_URL;
  }

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
      return `${CONTEXT_BASE_URL}&image=${encodeURIComponent(parsed.href)}`;
    }
  } catch {
    // Fall back to base studio URL if srcUrl cannot be parsed.
  }

  return CONTEXT_BASE_URL;
}

/**
 * Registers the right-click image context menu item idempotently.
 */
function registerContextMenu() {
  const title =
    (chrome.i18n && chrome.i18n.getMessage('contextMenuTitle')) ||
    CONTEXT_MENU_FALLBACK_TITLE;

  chrome.contextMenus.removeAll(() => {
    void chrome.runtime.lastError;
    chrome.contextMenus.create(
      {
        id: CONTEXT_MENU_ID,
        title,
        contexts: ['image'],
      },
      () => {
        void chrome.runtime.lastError;
      }
    );
  });
}

chrome.runtime.onInstalled.addListener(() => {
  registerContextMenu();
});

chrome.runtime.onStartup.addListener(() => {
  registerContextMenu();
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId !== CONTEXT_MENU_ID) {
    return;
  }

  const targetUrl = buildContextLaunchUrl(info.srcUrl);
  chrome.tabs.create({ url: targetUrl });
});
