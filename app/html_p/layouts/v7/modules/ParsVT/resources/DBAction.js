/* ********************************************************************************
 * The content of this file is subject to the VTFarsi.ir Modules License("License");
 * You may not use this file except in compliance with the License
 * The Initial Developer of the Original Code is VTFarsi.ir
 * Portions created by VTFarsi.ir. are Copyright(C) VTFarsi Team
 * All Rights Reserved.
 * ****************************************************************************** */
jQuery.Class("DBAction_Js",{},{registerEventForUpgradeButton:function(){jQuery(".fixError").on("click",function(){var e=jQuery.progressIndicator({message:"",position:"html",blockInfo:{enabled:!0}}),t={};t.module=app.getModuleName(),t.action="DBAction",t.mode="fixError",t.parent="Settings",AppConnector.request(t).then(function(t){e.progressIndicator({mode:"hide"}),t.success&&1==t.success?app.helper.showSuccessNotification({message:t.result}):t.error&&app.helper.showErrorNotification({message:t.error.code}),setTimeout(function(){window.location.reload(1)},3e3)},function(t){e.progressIndicator({mode:"hide"}),app.helper.showErrorNotification({message:app.vtranslate("Operation Failed : Error !")})})})},showNotify:function(e){var t={title:app.vtranslate("JS_MESSAGE"),text:e.text,animation:"show",type:e.type};Vtiger_Helper_Js.showPnotify(t)},registerEvents:function(){this.registerEventForUpgradeButton()}}),jQuery(document).ready(function(){(new DBAction_Js).registerEvents()});