// ==UserScript==
// @name         Zhihu Login Modal Remover
// @name:zh-CN   移除知乎登录框
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove the initialized login modal from Zhihu webpages
// @description:zh-CN  移除知乎网页加载后自动弹出的登录框
// @author       linzijun
// @match        https://*.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  const checkAndClickCloseButton = () => {
    const closeButton = document.querySelector('.signFlowModal .Modal-closeButton');

    if (!closeButton) {
      requestAnimationFrame(checkAndClickCloseButton);
    } else {
      closeButton.click();
    }
  };

  requestAnimationFrame(checkAndClickCloseButton);
})();