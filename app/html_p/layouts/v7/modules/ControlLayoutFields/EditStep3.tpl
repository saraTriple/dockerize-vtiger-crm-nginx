{*+***********************************************************************************
* The contents of this file are subject to the vtiger CRM Public License Version 1.0
* ("License"); You may not use this file except in compliance with the License
* The Original Code is:  vtiger CRM Open Source
* The Initial Developer of the Original Code is vtiger.
* Portions created by vtiger are Copyright (C) vtiger.
* All Rights Reserved.
*************************************************************************************}
{strip}
    {assign var=CURRENT_USER_MODEL value=Users_Record_Model::getCurrentUserModel()}
    <form name="EditWorkflow" action="index.php" method="post" id="clf_step3" class="form-horizontal">
        <input type="hidden" name="module" value="ControlLayoutFields" />
        <input type="hidden" name="record" value="{$RECORD}" />
        <input type="hidden" name="selected_module_name" value="{$SELECTED_MODULE}" />
        <input type="hidden" class="step" value="3" />
        <div class="btn-group" {if $CURRENT_USER_MODEL->get('language') eq 'fa_ir'}style="float:right"{/if}>
            <a class="btn btn-default dropdown-toggle addButton" data-toggle="dropdown" href="#">
                <strong>{vtranslate('LBL_ADD_TASK',$QUALIFIED_MODULE)}</strong>&nbsp;
                <span><img class="imageElement" src="{vimage_path('downArrowWhite.png')}" /></span>
            </a>
            <ul class="dropdown-menu">
                <li>
                    <a data-url="?module=ControlLayoutFields&parent=Settings&view=EditTask&selected_module={$SELECTED_MODULE}&clf_id={$RECORD}" class="cursorPointer">{vtranslate('Update Fields','ControlLayoutFields')}</a>
                </li>
            </ul>
        </div>
        <div id="taskListContainer">
            {include file='TasksList.tpl'|@vtemplate_path:'ControlLayoutFields'}
        </div>
        <br>
        <div class="pull-right">
            <button class="btn btn-danger backStep" type="button"><strong>{vtranslate('LBL_BACK', $QUALIFIED_MODULE)}</strong></button>&nbsp;&nbsp;
            <button class="btn btn-success" type="button" onclick="javascript:window.history.back();"><strong>{vtranslate('LBL_FINISH','ControlLayoutFields')}</strong></button>
        </div>
        <div class="clearfix"></div>
    </form>
{/strip}