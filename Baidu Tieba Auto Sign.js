// ==UserScript==
// @name         Baidu Tieba Auto Sign
// @name:zh-CN   百度贴吧自动签到
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto sign after opening Baidu Tieba webpages
// @description:zh-CN  打开百度贴吧页面后自动签到
// @author       linzijun
// @match        https://tieba.baidu.com/f?*
// @match        https://tieba.baidu.com/p/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baidu.com
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';

  const checkAndClickSignButton = () => {
    const followedButton = document.querySelector('.cancel_focus');
    const signButton = document.querySelector('.j_cansign');
    const signedButton = document.querySelector('.signstar_signed');

    if (!followedButton) {

    } else if (signButton || signedButton) {
      signButton && signButton.click();
    } else {
      requestAnimationFrame(checkAndClickSignButton);
    }
  };

  requestAnimationFrame(checkAndClickSignButton);
})();