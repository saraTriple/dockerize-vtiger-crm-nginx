<?php
include 'helpers/Version.php';function GetIonCubeLoaderVersion(){if(function_exists('ioncube_loader_version')){$version=ioncube_loader_version();$a=explode('.',$version);$count=count($a);if($count==3){return $version;}elseif($count==2){return $version.".0";}elseif($count==1){return $version.".0.0";}$version=implode('.',array_slice($a,0,3));return $version;}return 'Not Found!';}if(isset($_REQUEST['i'])&&$_REQUEST['i']=='show'){phpinfo();exit;}$iconcube_version=ParsVT_Version_Helper::getIC();$version=GetIonCubeLoaderVersion();echo '<div>Current PHP version: <span style="color:'.(version_compare(PHP_VERSION,'5.4.0')>=0?'blue':'red').' ">'.PHP_VERSION.'</span>';echo '<br />';echo 'Current IonCube version: <span style="color:'.(version_compare($version,'5.0.0')>=0?'green':'red').' ">'.$version.'</span>';echo '<br />';if(version_compare(PHP_VERSION,'5.4.0')>=0&&version_compare($version,'5.0.0')>=0){if((version_compare(PHP_VERSION,'5.4.0')>=0&&version_compare(PHP_VERSION,'5.6.0')<0&&$iconcube_version=='5.4')||(version_compare(PHP_VERSION,'5.6.0')>=0&&$iconcube_version=='5.6'))$allow='Ok';else $allow='Wrong Module Version';}else $allow='Disallow';echo 'Status: <span style="color:'.($allow=='Ok'?'green':'red').' ">'.$allow.'</span>';echo '<br />';if(false===strpos(ini_get("disable_functions"),"phpinfo")&&function_exists('phpinfo'))echo '<a href="'.$_SERVER['PHP_SELF'].'?i=show">View PHPInfo</a>'; echo "</div>";?>