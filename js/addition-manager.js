define(['last-highlighter', 'jquery'], function(highlight){
    return{
        init: function(){
            "use strict";
            $(function(){
                var $btn = $("#addBtn"),
                    $input = $("#nameInp"),
                    $list = $("#namesList");

                // Disabled button on init
                $btn.prop("disabled", true);

                // Enable the button if the input has any value
                $input.keyup(function (){
                    $btn.prop("disabled", ! $(this).val());
                });

                // Add the name to the list on click
                $btn.click(function (){
                    var $newElem = $("<li>" + $input.val() + "</li>");
                    $list.append($newElem);

                    // Do something with the element...
                    highlight($newElem);
                });
            });
        }
    };
});