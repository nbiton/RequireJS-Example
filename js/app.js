/**
 * Created with JetBrains WebStorm.
 * User: Naor.Biton
 * Date: 7/8/13
 * Time: 2:13 PM
 * To change this template use File | Settings | File Templates.
 */
(function(){
    "use strict";
    require.config({
       paths:{
           jquery: '../lib/jquery-1.10.2.min'
       },
        shim:{
            jquery: {
                exports: '$'
            }
        }
    });

    //
    require(['addition-manager'], function(additionManager){
        additionManager.init();
        console.log("App is UP!");
    });
})();
