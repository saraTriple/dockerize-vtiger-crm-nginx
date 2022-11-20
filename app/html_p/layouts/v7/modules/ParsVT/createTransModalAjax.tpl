{*<!--
/* ********************************************************************************
 * The content of this file is subject to the VTFarsi.ir Modules License("License");
 * You may not use this file except in compliance with the License
 * The Initial Developer of the Original Code is VTFarsi.ir
 * Portions created by VTFarsi.ir. are Copyright(C) VTFarsi Team
 * All Rights Reserved.
 * ****************************************************************************** */
-->*}
{strip}
    <div id="createTransModalContainer" class="modal-dialog createTransModal">
        {assign  var="langPrefix" value=$smarty.get.langPrefix}
        {assign var=HEADER_TITLE value={vtranslate('Create New Translation', $QUALIFIED_MODULE)}}
        {include file="ModalHeader.tpl"|vtemplate_path:$MODULE TITLE=$HEADER_TITLE}
        <div class="modal-content">
            <form class="form-horizontal newTranslateForm" id="newTranslateForm">
                <input type="hidden" name="forModuleName" value="{$SELECTMODULES}">
                <input type="hidden" name="langPrefix" value="{$langPrefix}">
                <div name='createTransModalContent'>
                    <div class="modal-body ">
                        <div class="form-group">
                            <label class="control-label fieldLabel col-sm-5">
                                {vtranslate('Type', $QUALIFIED_MODULE)}&nbsp;
                                <span class="redColor">*</span>
                            </label>
                            <div class="controls col-xs-6">
                                <select class="typeSelect span8 inputElement" id="typeSelect" name="typeSelect">
                                    <option value="PHP">PHP</option>
                                    <option value="JS">JS</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label fieldLabel col-sm-5">
                                {vtranslate('Variable', $QUALIFIED_MODULE)}&nbsp;
                                <span class="redColor">*</span>
                            </label>
                            <div class="controls col-sm-6">
                                <input type="text" name="langVariable" id="langVariable" class="span8 inputElement" value="" data-validation-engine="validate[required, funcCall[Vtiger_Base_Validator_Js.invokeValidation]]"
                                       data-validator={Zend_Json::encode([['name'=>'langVariable']])}>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label fieldLabel col-sm-5">
                                {vtranslate('Translation', $QUALIFIED_MODULE)}&nbsp;
                                <span class="redColor">*</span>
                            </label>
                            <div class="controls col-xs-6">
                                <input type="text" name="langTranslation" id="langTranslation" class="span8 inputElement" data-validation-engine="validate[required, funcCall[Vtiger_Base_Validator_Js.invokeValidation]]"
                                       data-validator={Zend_Json::encode([['name'=>'langTranslation']])}>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <center>
                        {if $BUTTON_NAME neq null}
                            {assign var=BUTTON_LABEL value=$BUTTON_NAME}
                        {else}
                            {assign var=BUTTON_LABEL value={vtranslate('LBL_SAVE', $MODULE)}}
                        {/if}
                        <button {if $BUTTON_ID neq null} id="{$BUTTON_ID}" {/if} class="btn btn-success modalTranslateSaveButton" type="button" name="saveButton">
                            <strong>{$BUTTON_LABEL}</strong></button>
                        <a href="#" class="cancelLink" type="reset"
                           data-dismiss="modal">{vtranslate('LBL_CANCEL', $MODULE)}</a>
                    </center>
                </div>
            </form>
        </div>
    </div>
{/strip}
