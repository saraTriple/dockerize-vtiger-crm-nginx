/* ********************************************************************************
 * The content of this file is subject to the VTFarsi.ir Modules License("License");
 * You may not use this file except in compliance with the License
 * The Initial Developer of the Original Code is VTFarsi.ir
 * Portions created by VTFarsi.ir. are Copyright(C) VTFarsi Team
 * All Rights Reserved.
 * ****************************************************************************** */
Vtiger.Class("ParsVT_CD_Js",{},{init:function(){this.addComponents()},addComponents:function(){this.addModuleSpecificComponent("Index",app.module,app.getParentModuleName())},registerUpdateDetailsClickEvent:function(){jQuery("#updateCompanyDetails").on("click",function(e){jQuery("#CompanyDetailsContainer").addClass("hide"),jQuery("#updateCompanyDetailsForm").removeClass("hide"),jQuery("#updateCompanyDetails").addClass("hide")})},registerSaveCompanyDetailsEvent:function(){var e=this,a={submitHandler:function(a){var a=jQuery(a),t=e.checkValidation();return!1===t?t:!1!==(t=e.checkSValidation())||t}};jQuery("#updateCompanyDetailsForm").vtValidate(a)},registerCancelClickEvent:function(){jQuery(".cancelLink").on("click",function(){jQuery("#CompanyDetailsContainer").removeClass("hide"),jQuery("#updateCompanyDetailsForm").addClass("hide"),jQuery("#updateCompanyDetails").removeClass("hide")})},checkValidation:function(){var e=jQuery("#logoFile"),a=e.val();if(""!=a){var t=new Array,i=(t=a.split(".")).length-1;if(i<0)return app.helper.showErrorNotification({message:app.vtranslate("LBL_WRONG_IMAGE_TYPE")}),e.val(""),!1;var n=JSON.parse(jQuery("#supportedImageFormats").val()),r=t[i].toLowerCase();if("-1"!=n.indexOf(r)){return e[0].files[0].size<1024e3||(app.helper.showErrorNotification({message:app.vtranslate("LBL_MAXIMUM_SIZE_EXCEEDS")}),!1)}return app.helper.showErrorNotification({message:app.vtranslate("LBL_WRONG_IMAGE_TYPE")}),e.val(""),!1}},checkSValidation:function(){var e=jQuery("#signFile"),a=e.val();if(""!=a){var t=new Array,i=(t=a.split(".")).length-1;if(i<0)return app.helper.showErrorNotification({message:app.vtranslate("LBL_WRONG_IMAGE_TYPE")}),e.val(""),!1;var n=JSON.parse(jQuery("#supportedImageFormats").val()),r=t[i].toLowerCase();if("-1"!=n.indexOf(r)){return e[0].files[0].size<1024e3||(app.helper.showErrorNotification({message:app.vtranslate("LBL_MAXIMUM_SIZE_EXCEEDS")}),!1)}return app.helper.showErrorNotification({message:app.vtranslate("LBL_WRONG_IMAGE_TYPE")}),e.val(""),!1}},registerCompanyLogoDimensionsValidation:function(){var e={width:170,height:60},a=jQuery("form#updateCompanyDetailsForm"),t=a.find("#logoFile");t.on("change",function(){var a,i=window.URL||window.webkitURL,n=this.files[0];n&&"function"==typeof Image&&((a=new Image).onload=function(){var a=this.width,i=this.height;(a>e.width||i>e.height)&&(app.helper.showErrorNotification({message:app.vtranslate("JS_LOGO_IMAGE_DIMENSIONS_WRONG")}),t.val(null))},a.src=i.createObjectURL(n))});var i=a.find("#signFile");i.on("change",function(){var a,t=window.URL||window.webkitURL,n=this.files[0];n&&"function"==typeof Image&&((a=new Image).onload=function(){var a=this.width,t=this.height;(a>e.width+100||t>e.height+100)&&(app.helper.showErrorNotification({message:app.vtranslate("JS_LOGO_IMAGE_DIMENSIONS_WRONG")}),i.val(null))},a.src=t.createObjectURL(n))})},registerEvents:function(){this.registerUpdateDetailsClickEvent(),this.registerSaveCompanyDetailsEvent(),this.registerCancelClickEvent(),this.registerCompanyLogoDimensionsValidation()}}),jQuery(document).ready(function(){(new ParsVT_CD_Js).registerEvents()});