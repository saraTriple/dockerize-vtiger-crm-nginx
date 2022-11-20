/* ********************************************************************************
 * The content of this file is subject to the VTFarsi.ir Modules License("License");
 * You may not use this file except in compliance with the License
 * The Initial Developer of the Original Code is VTFarsi.ir
 * Portions created by VTFarsi.ir. are Copyright(C) VTFarsi Team
 * All Rights Reserved.
 * ****************************************************************************** */
jQuery.Class("ParsVT_PersianPack_Js",{},{registerEventForSwitch:function(){var e=this,a=ParsVTErrors.DEFLANG,r={cancel:{label:ParsVTErrors.NO,className:"btn-default confirm-box-btn-pad pull-right"},confirm:{label:ParsVTErrors.YES,className:"confirm-box-ok confirm-box-btn-pad btn-primary"}};jQuery("#PersianPack").on("switchChange.bootstrapSwitch","input[type=checkbox]",function(a){var t=jQuery(a.currentTarget);if(1==t.val()){t.attr("value",0)}else{t.attr("value",1)}var n=t.data("type"),o=t.attr("dontchange");void 0!==o&&!1!==o||("DemoData"===n?app.helper.showConfirmationBox({title:$("#demodatas").data("title"),message:$("#demodatas").data("language"),buttons:r}).then(function(){e.GeneralOptions(n,{value:t.val()},t)},function(e,a){t.val(t.val()),setTimeout(function(){window.location.reload(1)},1500)}):e.GeneralOptions(n,{value:t.val()},t))}),jQuery("#PersianPack").on("click","#FarsiCoreLanguagePack",function(a){var r=jQuery(a.currentTarget);e.GeneralOptions("BasicPersian",{value:2},r)}),$("#defaultlanguage").on("select2-selecting",function(t){var n=jQuery(t.currentTarget);app.helper.showConfirmationBox({message:ParsVTErrors.LANGUAGECONFIRM,title:$("#defaultlanguage").data("language"),buttons:r}).then(function(){e.GeneralOptions("DefaultLanguage",{value:n.val()},n)},function(e,r){n.val(a),$("#defaultlanguage").select2("val",a)})}),$("#loginlanguage").on("select2-selecting",function(a){var t=jQuery(a.currentTarget),n=ParsVTErrors.DEFLOGIN;app.helper.showConfirmationBox({message:ParsVTErrors.LOGINCONFIRM,title:$("#loginlanguage").data("language"),buttons:r}).then(function(){e.GeneralOptions("LoginLanguage",{value:t.val()},t)},function(e,a){t.val(n),$("#loginlanguage").select2("val",n)})}),$("#defaulttimezone").on("select2-selecting",function(a){var t=jQuery(a.currentTarget),n=ParsVTErrors.DEFTIMEZONE;app.helper.showConfirmationBox({message:ParsVTErrors.TIMEZONECONFIRM,title:$("#defaulttimezone").data("language"),buttons:r}).then(function(){e.GeneralOptions("DefaultTimezone",{value:t.val()},t)},function(e,a){t.val(n),$("#defaulttimezone").select2("val",n)})}),$("#defaultcalendar").on("select2-selecting",function(a){var t=jQuery(a.currentTarget),n=ParsVTErrors.DEFCAL;app.helper.showConfirmationBox({message:ParsVTErrors.CALENDARCONFIRM,title:$("#defaultcalendar").data("language"),buttons:r}).then(function(){e.GeneralOptions("DefaultCalendar",{value:t.val()},t)},function(e,a){t.val(n),$("#defaultcalendar").select2("val",n)})}),$("#defaultcurrency").on("select2-selecting",function(a){var t=jQuery(a.currentTarget),n=ParsVTErrors.DEFCUR;app.helper.showConfirmationBox({message:ParsVTErrors.CURRENCYCONFIRM,title:$("#defaultcurrency").data("language"),buttons:r}).then(function(){e.GeneralOptions("DefaultCurrency",{value:t.val()},t)},function(e,a){t.val(n),$("#defaultcurrency").select2("val",n)})}),$("#pdfpagelayout").on("select2-selecting",function(a){var t=jQuery(a.currentTarget),n=ParsVTErrors.DEFCUR;app.helper.showConfirmationBox({message:ParsVTErrors.CONVERTDATACONFIRM,title:$("#pdfpagelayout").data("language"),buttons:r}).then(function(){e.GeneralOptions("PdfPageLayout",{value:t.val()},t)},function(e,a){t.val(n),$("#pdfpagelayout").select2("val",n)})}),jQuery("#PersianPack").on("click","#checkhealth",function(){app.request.get({url:"index.php?module=ParsVT&parent=Settings&view=HealthModalAjax"}).then(function(e,a){null===e?a?app.helper.showModal(a):(app.helper.showErrorNotification({message:"Invalid Request!"}),app.helper.hideModal()):app.helper.showErrorNotification({message:e.message})})}),jQuery("#PersianPack").on("click","#checkpermissions",function(){app.helper.showProgress(app.vtranslate("JSLBL_Loading_Please_Wait")+"..."),app.request.get({url:"index.php?module=ParsVT&parent=Settings&view=PermissionsModalAjax"}).then(function(e,a){app.helper.hideProgress(),null===e?a?app.helper.showModal(a):(app.helper.showErrorNotification({message:"Invalid Request!"}),app.helper.hideModal()):app.helper.showErrorNotification({message:e.message})})})},GeneralOptions:function(e,a,r){if(app.helper.showProgress(),void 0===a)a={};return a.module=app.getModuleName(),a.parent=app.getParentModuleName(),a.action="PersianPack",a.mode=e,AppConnector.request(a).then(function(e){app.helper.hideProgress(),e.success?(e.result.success?app.helper.showSuccessNotification({message:e.result.message}):app.helper.showErrorNotification({message:e.result.message}),void 0!==e.result.value&&(1===e.result.value&&(jQuery(r).attr("dontchange",1),r.bootstrapSwitch("state",!0)),r.attr("value",e.result.value)),"readonly"===e.result.code&&r.bootstrapSwitch("disabled",!0),e.result.refresh&&setTimeout(function(){window.location.reload(1)},3e3)):app.helper.showErrorNotification({message:ParsVTErrors.OPFAILED})},function(e){console.log("error =",e),app.helper.hideProgress(),app.helper.showErrorNotification({message:ParsVTErrors.OPFAILED}),r.attr("value",0)}),!1},registerEvents:function(){this.registerEventForSwitch(),jQuery(".bootstrap-switch").bootstrapSwitch(),vtUtils.enableTooltips()}}),jQuery(document).ready(function(){(new ParsVT_PersianPack_Js).registerEvents()});