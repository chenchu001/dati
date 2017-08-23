/* 
* @Author: Marte
* @Date:   2017-04-11 18:15:16
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-07 15:01:30
*/

$(document).ready(function(){
    //是否选中(单选)
    $(function() {
        $('.checkQuesition li label').click(function(){
            var radioId = $(this).attr('name');
            $(this).parents('.checkQuesition').find('label').removeAttr('class') && $(this).attr('class', 'checked');
            $(this).parents('.checkQuesition').find(' input[type="radio"]').removeAttr('checked') && $(this).parents('.checkQuesition').find('#'+radioId+'') . attr('checked', 'checked');
        });
    });
    //多选
    $(function(){
        var len;
        $('.duoxuanQuesition li label').click(function(){
            var radioId = $(this).attr('for');
            if($(this).attr('data-isOff')==="true"){
                $(this).attr('class', 'checked');
                $(this).parents('.duoxuanQuesition').find('#'+radioId+'').attr('checked','checked');
                $(this).attr('data-isOff','false');
            }else{
                $(this).attr('data-isOff','true');
                $(this).removeAttr('class');
                $(this).parents('.duoxuanQuesition').find('#'+radioId+'').removeAttr('checked');  
            }
            len = $('label.checked').length;
            if(len>3){
                $(this).attr('data-isOff','true');
                $(this).removeAttr('class');
                $(this).parents('.duoxuanQuesition').find('#'+radioId+'').removeAttr('checked'); 
            }
        });
    });
});