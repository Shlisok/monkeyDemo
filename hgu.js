// ==UserScript==
// @name         河地大自动教学评估
// @namespace 	 shlisok
// @version      0.1
// @description  河北地质大学教务系统自动教学评估
// @author       shl
// @icon         https://bkimg.cdn.bcebos.com/pic/6f061d950a7b02083188dae96ad9f2d3572cc871?x-bce-process=image/resize,m_lfit,w_536,limit_1
// @match        *://202.206.144.35/*
// @license      AGPL-3.0
// @grant        none
// ==/UserScript==
(function () {
        'use strict';
        // 选取table
        var table = document.getElementById("tblView");

        // 选取所有单选框
        var radios = table.getElementsByTagName("input");

        //遍历所有单选，并选中所有优秀的选项
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].value === "5_1") {
                radios[i].checked = true;
            }
        }

    }
)();