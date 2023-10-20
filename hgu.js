// ==UserScript==
// @name         河地大自动教学评估
// @namespace    shlisok
// @version      1.5
// @description  河北地质大学教务系统教学评估，自动完成打满分，因为考虑到需要修改选项，以及避免引起不可控的麻烦，未开启自动提交。该脚本采用值校验，所以有出错的可能性，出错请截图发送至shlisok@163.com
// @author       shl
// @icon         https://bkimg.cdn.bcebos.com/pic/6f061d950a7b02083188dae96ad9f2d3572cc871?x-bce-process=image/resize,m_lfit,w_536,limit_1
// @match        *://webvpn.hgu.edu.cn/*
// @license      AGPL-3.0
// @require      https://cdn.bootcss.com/jquery/2.2.1/jquery.js
// @grant        none
// ==/UserScript==
(function () {
    'use strict';

    // 选中具有 class 为 'radio-bj' 的 input 元素，然后将其值设置为 '5'
    $(".radio-bj input").val('5');

    // 创建一个弹窗
    var popup = document.createElement('div');
    popup.textContent = '自动打分完成'; // 设置弹窗内容
    popup.style.backgroundColor = 'lightgray'; // 设置弹窗背景颜色
    popup.style.padding = '10px'; // 设置内边距

    // 添加弹窗到页面
    document.body.appendChild(popup);

    // 设置弹窗样式和位置
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';

    // 关闭弹窗
    setTimeout(function () {
        document.body.removeChild(popup); // 移除弹窗
    }, 3000); // 1000毫秒 = 1秒
})();
