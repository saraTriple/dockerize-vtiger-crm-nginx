<?php
/*+**********************************************************************************
 * The contents of this file are subject to the vtiger CRM Public License Version 1.1
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 ************************************************************************************/

//Overrides GetRelatedList : used to get related query
//TODO : Eliminate below hacking solution
include_once 'config.php';
include_once 'include/Webservices/Relation.php';

include_once 'vtlib/Vtiger/Module.php';
include_once 'includes/main/WebUI.php';
// $_SERVER["SERVER_NAME"] = "localhost";
// $_SERVER["SERVER_ADDR"] = "127.0.0.1";

// echo "<pre>";
// var_dump($_SERVER);

//ParsGuard
@include_once 'modules/ParsGuard/lib/Security.php';
$webUI = new Vtiger_WebUI();
$webUI->process(new Vtiger_Request($_REQUEST, $_REQUEST));