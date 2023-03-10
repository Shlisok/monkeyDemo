// ==UserScript==
// @name         河地大自动教学评估
// @namespace 	 shlisok
// @version      1.5
// @description  河北地质大学教务系统教学评估，自动完成优秀选择，因为考虑到需要修改选项，以及避免引起不可控的麻烦，未开启自动提交。该脚本采用值校验，所以有出错的可能性，出错请截图发送至shlisok@163.com
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
        $("#tblView input[value='4_1']").prop("checked", true);
        $("#tblView input[value='5_1']").prop("checked", true);
        $("#tblView input[value='6_1']").prop("checked", true);
    }
)();



