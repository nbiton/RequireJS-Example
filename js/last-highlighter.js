/**
 * Created with JetBrains WebStorm.
 * User: Naor.Biton
 * Date: 7/8/13
 * Time: 1:55 PM
 * To change this template use File | Settings | File Templates.
 */
define([], function(){

//(
        "use strict";

        var $lastElement;

        function highlight($element){
            if ($lastElement){
                $lastElement.css("background-color", "");
            }

            $lastElement = $element;

            $element.css("background-color", "yellow");
        }

       return highlight;
//();

});