// ==UserScript==
// @name         河地大自动教学评估
// @namespace 	 shlisok
// @version      1.1
// @description  河北地质大学教务系统自动完成选择，尚未开发自动提交，问就是懒
// @author       shl
// @icon         https://bkimg.cdn.bcebos.com/pic/6f061d950a7b02083188dae96ad9f2d3572cc871?x-bce-process=image/resize,m_lfit,w_536,limit_1
// @match        *://202.206.144.35/*
// @license      AGPL-3.0
// @require      https://cdn.bootcss.com/jquery/2.2.1/jquery.js
// @grant        none
// ==/UserScript==
(function () {
        'use strict';
        //jquery写法
        $("#tblView tr").has("td:contains('优秀')").find("input[type='radio']").prop("checked", true);
    }
)();