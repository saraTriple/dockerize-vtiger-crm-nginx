/* ********************************************************************************
 * The content of this file is subject to the VTFarsi.ir Modules License("License");
 * You may not use this file except in compliance with the License
 * The Initial Developer of the Original Code is VTFarsi.ir
 * Portions created by VTFarsi.ir. are Copyright(C) VTFarsi Team
 * All Rights Reserved.
 * ****************************************************************************** */
jQuery.Class("ParsVT_Upgrade_Js",{},{registerEventForUpgradeButton:function(){var e=jQuery("#update_id").val(),t=jQuery("#update_type").val(),r=jQuery("#update_version").val(),a=jQuery("#update_patch").val(),o=jQuery("#update_msg").val(),s=jQuery("#licensekey").val(),n=jQuery("#ptype").val(),i=jQuery("#pid").val();jQuery('button[name="btnUpgrade"]').on("click",function(){var p=jQuery.progressIndicator({message:o,position:"html",blockInfo:{enabled:!0}}),u={};u.module=app.getModuleName(),u.action="Upgrade",u.mode="upgradeModule",u.id=e,u.type=t,u.version=r,u.patch=a,u.licensekey=s,u.pid=i,u.ptype=n,AppConnector.request(u).then(function(e){p.progressIndicator({mode:"hide"}),e.success&&(!0===e.result.status?(app.helper.showSuccessNotification({message:e.result.message}),setTimeout(function(){window.location.reload(1)},3e3)):app.helper.showErrorNotification({message:e.result.message}))},function(e){p.progressIndicator({mode:"hide"}),app.helper.showErrorNotification({message:app.vtranslate("Upgrade Failed")})})})},showNotify:function(e){var t={title:app.vtranslate("JS_MESSAGE"),text:e.text,animation:"show",type:e.type};Vtiger_Helper_Js.showPnotify(t)},registerEvents:function(){this.registerEventForUpgradeButton()}}),jQuery(document).ready(function(){(new ParsVT_Upgrade_Js).registerEvents()});