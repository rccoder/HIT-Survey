/*
* LimeSurvey (tm)
* Copyright (C) 2012 The LimeSurvey Project Team / Carsten Schmitz
* All rights reserved.
* License: GNU/GPL License v2 or later, see LICENSE.php
* LimeSurvey is free software. This version may have been modified pursuant
* to the GNU General Public License, and as distributed it includes or
* is derivative of works licensed under the GNU General Public License or
* other free or open source software licenses.
* See COPYRIGHT.php for copyright notices and details.
*/
/*
 *name:rccoder
 *url: github.com/rccoder
 */
 /*
 这种做法不好，直接后台删代码
window.onload = function() {
    //去掉导入问题
    $('#tabs>ul>li').each(function(index) {
        if (index == 1) $(this).css('display', 'none');
    })
    //去掉添加题组时的描述，随机组，相关方程
    $('form[name="newquestiongroup"] li').each(function(index){
        if(index != 0) $(this).css('display', 'none');
    })
}
*/
$(document).ready(function(){


    //系统本身自带
    $('#newquestiongroup').submit(function(){
        bResult=true;
        $('.group_title').each( function()
            {
                if ($(this).val()=='')
                {
                    bResult=false;
                }
        });
        if (!bResult)
        {
            alert(sEnterTitle);
        }
        return bResult;
    });
});
