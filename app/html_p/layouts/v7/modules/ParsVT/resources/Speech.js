/* ********************************************************************************
 * The content of this file is subject to the VTFarsi.ir Modules License("License");
 * You may not use this file except in compliance with the License
 * The Initial Developer of the Original Code is VTFarsi.ir
 * Portions created by VTFarsi.ir. are Copyright(C) VTFarsi Team
 * All Rights Reserved.
 * ****************************************************************************** */
Vtiger.Class("ParsVTSpeech_Js",{},{instance:!1,listening:"",speechrestart:"",speech:"",commands:"",commandslist:"",comrepOn:!0,customCommandslist:!0,custom:!0,customWords:JSON.parse(localStorage.getItem("customWords")),customReplaceWords:JSON.parse(localStorage.getItem("customReplaceWords")),n:0,replacement:[".",",",":",";","!","?","\n"],speechlang:"fa-ir",systemlanguage:"fa_ir",direction:"right",icon:"microphone-slash",actionmenu:"",error:!1,init:function(){void 0===localStorage.customWords&&(this.customWords=["test word"],this.customReplaceWords=["test result"]),"customtrue"===localStorage.custom&&this.diCustom()},getInstance:function(){if(!1===ParsVTSpeech_Js.instance){var e=new ParsVTSpeech_Js;return ParsVTSpeech_Js.instance=e,e}return ParsVTSpeech_Js.instance},diDefault:function(){this.custom=!1,localStorage.custom="customfalse",this.command(),$("#parsvt-dictionary-default-button").css("background-color","#010101"),$("#parsvt-dictionary-custom-button").css("background-color","#2C3B49"),$("#parsvt-words").html(this.commandslist),$("#parsvt-diControl").css("display","none")},diCustom:function(){this.custom=!0,localStorage.custom="customtrue",$("#parsvt-dictionary-default-button").css("background-color","#2C3B49"),$("#parsvt-dictionary-custom-button").css("background-color","#010101"),$("#parsvt-diControl").css("display","block"),this.customCommandslist="",this.n=0;for(var e=this.customWords.length;this.n<e;)this.customCommandslist+='<div class="row dictworld"><div class="col-lg-10 col-md-10 col-sm-10"><input id="l'+this.n+'" class="parsdiccelltext" value="'+this.customWords[this.n]+'"></input> > <input id="r'+this.n+'" class="parsdiccelltext" value="'+this.customReplaceWords[this.n]+'"></input></div><div data-id="'+this.n+'" class="col-lg-2 col-md-2 col-sm-2 parsdict_deleterow">x</div></div>',this.n++;$("#parsvt-words").html(this.customCommandslist)},addWord:function(){var e=$("#parsvt-words").html();e+='<div class="row dictworld"><div class="col-lg-10 col-md-10 col-sm-10"><input id="l'+this.n+'" class="parsdiccelltext" value=""></input> > <input id="r'+this.n+'" class="parsdiccelltext" value=""></input></div><div data-id="'+this.n+'" class="col-lg-2 col-md-2 col-sm-2 parsdict_deleterow">x</div></div>',$("#parsvt-words").html(e),this.n++,this.saveWord()},saveWord:function(){this.customWords.length=this.n,this.customReplaceWords.lenght=this.n;for(var e=[],a=[],t=0,n=0;n<this.n;n++)$("#r"+n).val()&&$("#r"+n).val()&&(e.push($("#l"+n).val()),a.push($("#r"+n).val()),t++);this.customWords=e,this.customReplaceWords=a,this.n=t,localStorage.setItem("customWords",JSON.stringify(this.customWords)),localStorage.setItem("customReplaceWords",JSON.stringify(this.customReplaceWords))},deleteWord:function(e){this.customWords.splice(e,1),this.customReplaceWords.splice(e,1),this.diCustom(),localStorage.setItem("customWords",JSON.stringify(this.customWords)),localStorage.setItem("customReplaceWords",JSON.stringify(this.customReplaceWords))},initialize:function(){this.speech=new webkitSpeechRecognition,this.speech.continuous=!1,this.speech.maxAlternatives=5,this.speech.interimResults=!0,this.speech.lang=localStorage.language},reset:function(){this.speechrestart&&!this.error?(this.speech.start(),$(".parsvt_action").html("■"),$(".parsvt_action").addClass("speech_blink_me")):(this.listening=!1,setTimeout(function(){$("#parsvt-speech-input").css("display","none")},2e3),$(".parsvt_action").html("►"),$(".parsvt_action").removeClass("speech_blink_me"))},startlisten:function(){this.error=!1,$("#speech-error").html(""),this.listening?(this.speech.stop(),this.speechrestart=!1,this.reset()):(this.speech.start(),this.listening=!0,$("#parsvt-speech-input").css("display","inline-block"),$(".parsvt_action").html("■"),$(".parsvt_action").addClass("speech_blink_me"),this.speechrestart=!0)},comrep:function(e){if(!0===this.comrepOn)if(!0===this.custom)for(a=0;a<this.customWords.length;a++){t=new RegExp(this.customWords[a],"ig");e=e.replace(t,this.customReplaceWords[a])}else for(var a=0;a<this.commands.length;a++){var t=new RegExp(this.commands[a],"ig");e=e.replace(t,this.replacement[a]).replace("\n\n","<p>")}return e},command:function(){switch(localStorage.language){case"af-za":this.commands=["dubblepunt","kommapunt","punt","komma","uitroepteken","vraagteken","nuwe paragraaf"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"am-ET":this.commands=["አራት ነጥብ","ነጠላ ሰረዝ","ነጠላ ሰረዝ","ድርብ ሰረዝ","አስረጂ ሰረዝ","ሦስት ነጥብ","አዲስ አንቀጽ"],this.replacement=["።","፥","፣","፤","፦","፧","<p>"];break;case"ar-DZ":case"ar-ae":case"ar-BH":case"ar-EG":case"ar-IQ":case"ar-IL":case"ar-JO":case"ar-KW":case"ar-LB":case"ar-LY":case"ar-MA":case"ar-OM":case"ar-PS":case"ar-QA":case"ar-SA":case"ar-TN":case"ar-AE":case"ar-YE":this.commands=["نقطتان","فاصلة منقوطة","نقطة","فاصلة","علامة التعجب","علامة استفهام","الفقرة الجديدة"],this.replacement=[":","؛",".","،","!","؟","<p>"];break;case"hy-AM":this.commands=["վերջակետ","ստորակետ","միջակետ","բութ","նոր կետը"],this.replacement=["։",",","․","՝","<p>"];break;case"az-AZ":this.commands=["iki nöqtə","nöqtə","nöqtəli vergül","vergül","nida işarəsi","sual işarəsi","yeni paraqraf"],this.replacement=[":",".",";",",","!","?","<p>"];break;case"bn-BD":case"bn-IN":this.commands=[],this.replacement=[];break;case"id-id":case"ms-my":this.commands=["titik dua","titik koma","titik","koma","tanda seru","tanda tanya","paragraf baru"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"bg-bg":this.commands=["двоеточие","точка и запетая","точка","запетая","удивителен знак","въпросителен знак","нов параграф"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"ca-es":this.commands=["dos punts","punt i coma","punt","coma","signe d'exclamació","signe d'interrogació","nou paràgraf"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"cs-cz":this.commands=["dvojtečka","středník","tečka","čárka","vykřičník","otazník","nový odstavec"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"da-DK":this.commands=["semikolon","kolon","punktum","komma","udråbstegn","spørgsmålstegn","nyt afsnit"],this.replacement=[";",":",".",",","!","?","<p>"];break;case"de-de":this.commands=["Doppelpunkt","Strichpunkt","Punkt","Komma","Ausrufezeichen","Fragezeichen","Klammer öffnen","Klammer schließen","neuer Absatz"],this.replacement=[":",";",".",",","!","?","(",")","<p>"];break;case"en-au":case"en-ca":case"en-GH":case"en-in":case"en-IE":case"en-KE":case"en-NG":case"en-nz":case"en-PH":case"en-za":case"en-TZ":case"en-gb":case"en-us":this.commands=["semicolon","colon","period","full stop","comma","exclamation point","question mark","open parentheses","close parentheses","open quote","close quote","hyphen","slash","new paragraph"],this.replacement=[";",":",".",".",",","!","?","(",")","''","' '","-","/","<p>"];break;case"es-ar":case"es-bo":case"es-cl":case"es-co":case"es-cr":case"es-ec":case"es-sv":case"es-es":case"es-us":case"es-gt":case"es-hn":case"es-mx":case"es-ni":case"es-pa":case"es-py":case"es-pe":case"es-pr":case"es-do":case"es-uy":case"es-ve":this.commands=["dos puntos","punto y coma","punto","coma","signo de exclamación","signo de interrogación","abrir paréntesis","cerrar paréntesis","abrir comillas","cerrar comillas","nuevo párrafo"],this.replacement=[":",";",".",",","!","?","(",")","''","' '","<p>"];break;case"el-gr":this.commands=["Άνω τελεία","ερωτηματικό","τελεία","κόμμα","θαυμαστικό","Νέα παράγραφος"],this.replacement=["·",";",".",",","!","<p>"];break;case"eu-es":this.commands=["bi puntu","puntu eta koma","puntua","koma","harridura-marka","galdera-marka","paragrafo berria"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"fa-ir":this.commands=["دو نقطه","نقطه‌ویرگول","نقطه","ویرگول","علامت تعجب","علامت سوال","پاراگراف جدید"],this.replacement=[":","؛",".","،","!","؟","\n"];break;case"fil-PH":this.commands=["tutuldok","tuldok-kuwit","tuldok","kuwit","tandang padamdam","tandang pananong","bagong talata"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"fr-CA":case"fr-fr":this.commands=["deux-points","point-virgule","point d'exclamation","point d'interrogation","point","virgule","nouveau paragraphe"],this.replacement=[":",";","!","?",".",",","<p>"];break;case"gl-es":this.commands=["dous puntos","punto e coma","punto","coma","signo de exclamación","signo de interrogación","novo parágrafo"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"ka-GE":case"gu-IN":this.commands=[],this.replacement=[];break;case"hi-in":this.commands=["विसर्ग","अर्ध विराम","पूर्ण विराम","अल्प विराम","विस्मयादिवाचक चिन्ह","प्रशनवाचक चिन्ह","नया अनुच्छेद"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"hr_HR":this.commands=["dvotočje","točka sa zarezom","točka","zarez","uskličnik","upitnik","novi odlomak"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"he-il":this.commands=["נקודתיים","נקודה ופסיק","נקודה","פסיק","סימן קריאה","סימן שאלה","סעיף חדש"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"zu-za":this.commands=[],this.replacement=[":",";",".",",","!","?","<p>"];break;case"is-is":this.commands=["samasemmerki","semikomma","punktur","komma","upphrópunarmerki","spurningarmerki","ný málsgrein"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"it-it":case"it-ch":this.commands=["due punti","punto e virgola","punto esclamativo","punto interrogativo","punto","virgola","nuovo paragrafo"],this.replacement=[":",";","!","?",".",",","<p>"];break;case"jv-ID":case"kn-IN":case"km-KH":case"lo-LA":case"lv-LV":this.commands=[],this.replacement=[];break;case"lt-LT":this.commands=["dvitaškis","kabliataškis","taškas","kablelis","šauktukas","klaustukas","nauja pastraipa"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"la":this.commands=["duo puncta","punctum et virgula","punctum","virgula","signum exclamationis","signum interrogationis","novum caput"],this.replacement=[":",";",".",",","!","?"];break;case"hu-hu":this.commands=["kettőspont","pontosvessző","pont","vessző","felkiáltójel","kérdőjel","új bekezdés"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"ml-IN":case"mr-IN":this.commands=[],this.replacement=[];break;case"nl-nl":this.commands=["dubbelepunt","puntkomma","punt","komma","uitroepteken","vraagteken","nieuwe paragraaf"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"ne-NP":this.commands=[],this.replacement=[];break;case"nb-NO":this.commands=["semikolon","kolon","punktum","komma","utropstegn","spørsmålstegn","nytt avsnitt"],this.replacement=[";",":",".",",","!","?","<p>"];break;case"pl-pl":this.commands=["dwukropek","średnik","kropka","przecinek","znak wykrzyknienia","znak zapytania","nowy ustęp"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"pt-br":case"pt-pt":this.commands=["dois pontos","ponto e vírgula","ponto de exclamação","ponto de interrogação","ponto","vírgula","novo paragrafo"],this.replacement=[":",";","!","?",".",",","<p>"];break;case"ro-ro":this.commands=["două puncte","punct și virgulă","punct","virgulă","semnul exclamării","semnul întrebării","nou alineat"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"si-LK":this.commands=[],this.replacement=[];break;case"ru-ru":this.commands=["двоеточие","точка с запятой","точка","запятая","восклицательный знак","вопросительный знак","новый абзац"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"sr-rs":this.commands=["tačka zarez","dve tačke","tačka","zarez","tri tačke","znak uzvika","znak pitanja","otvorena zagrada","zatvorena zagrada","crtica","povlaka","kosa crta","apostrof","otvoreni polunavodnici","zatvoreni polunavodnici","otvoreni navodnici","zatvoreni navodnici","navodnici","zvezdica","znak jednakosti","plus","minus","novi stav"],this.replacement=[";",":",".",",","...","!","?","(",")","-","-","/","'","‚","'","„",'"','"',"*","=","+","-","<p>"];break;case"sk-sk":this.commands=["dvojbodka","bodkočiarka","bodka","čiarka","výkričník","otáznik","nový odsek"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"sl-SI":case"su-ID":this.commands=[],this.replacement=[];break;case"sw-TZ":case"sw-KE":this.commands=[],this.replacement=[];break;case"fi-fi":this.commands=["kaksoispiste","puolipiste","piste","pilkku","huutomerkki","kysymysmerkki","uusi kappale"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"sv-se":this.commands=["semikolon","kolon","ny punkt","punkt","kommatecken","utropstecken","frågetecken"],this.replacement=[";",":","<p>",".",",","!","?"];break;case"ta-IN":case"ta-SG":case"ta-LK":case"ta-MY":case"te-IN":this.commands=[],this.replacement=[];break;case"vi-VN":this.commands=["dấu hai chấm","dấu chấm phẩy","dấu chấm than","dấu chấm hỏi","dấu chấm","dấu phẩy","đoạn văn mới"],this.replacement=[":",";","!","?",".",",","<p>"];break;case"tr-tr":this.commands=["iki nokta","noktalı virgül","nokta","virgül","ünlem işareti","soru işareti","yeni paragraf"],this.replacement=[":",";",".",",","!","?","<p>"];break;case"uk":this.commands=["двокрапка","крапка з комою","крапка","кома","знак оклику","знак питання","відкрити дужки","закрити дужки","відкрити лапки","закрити лапки","новий параграф"],this.replacement=[":",";",".",",","!","?","(",")","''","' '","<p>"];break;case"ur-PK":case"ur-IN":case"th-th":case"ko-kr":this.commands=[],this.replacement=[];break;case"ja-jp":this.commands=["中黒","句点","読点","感嘆符"],this.replacement=["・","。","、","!"];break;case"cmn-hans-cn":case"cmn-hans-hk":case"cmn-hant-tw":case"yue-hant-hk":this.commands=["句號","頓號"],this.replacement=[" 。","、"]}this.commandslist="";for(var e=0;e<this.commands.length;e++)this.commandslist+='<div class="row"><div class="cell1 col-lg-6 col-md-4 col-sm-6">'+this.commands[e]+'</div><div class="cell2  col-lg-6 col-md-4 col-sm-6"><span>'+this.comrep(this.commands[e])+"</span></div></div>";1!=this.custom&&$("#parsvt-words").html(this.commandslist)},toggleComRep:function(){!0===this.comrepOn?(this.comrepOn=!1,$("#parsvt-dictionary-button").html(app.vtranslate("Dictionary is OFF")+' <i class="fa fa-commenting-o" aria-hidden="true"></i>')):(this.comrepOn=!0,this.command(),$("#parsvt-dictionary-button").html(app.vtranslate("Dictionary is ON")+' <i class="fa fa-commenting-o" aria-hidden="true"></i>'))},updateLang:function(e){var a=this;a.speech.stop();var t=e;$("#speechlang").val(e),$("#speechlang").select2("val",e),a.speech.lang=t,localStorage.language=t,a.command(),a.listening&&setTimeout(function(){a.startlisten()},500)},registerEscKey:function(){var e=this;$(document).keydown(function(a){if(e.listening)switch(a.which){case 27:$(".parsvt_action").trigger("click")}})},addHeaderIcon:function(){var e=!1,a=jQuery("#menubar_quickCreate").closest("li");this.systemlanguage=jQuery("body").data("language"),this.speechlang=this.systemlanguage.replace("_","-"),this.actionmenu='<strong class="parsvt_action" style="cursor: pointer !important; z-index: 9999999;">►</strong>',"function"!=typeof webkitSpeechRecognition&&(e="<a href='https://www.google.com/chrome/browser/' target='_blank'>"+app.vtranslate("ParsVT Speech recognition requires the latest version of Google Chrome on your desktop.")+"</a>",this.actionmenu=""),"undefined"!=typeof Vtiger_ParsVT_Js&&null!==Vtiger_ParsVT_Js||(e=app.vtranslate("ParsVT Speech recognition requires Persian Pack to Work."),this.actionmenu="");var t='<li class="dropdown"><div id="speechContainer" style="margin-top: 15px;">'+this.actionmenu+'<a href="#"  id="headerSpeech" class="dropdown-toggle"  data-toggle="dropdown" role="button" style="cursor: help;"><span class="qc-button fa fa-'+this.icon+'" aria-hidden="true" title="Speech"></span><span class="link-text-xs-only hidden-lg hidden-md hidden-sm">'+app.vtranslate("Speech")+'</span></a><div id="headerSpeechMenu"  class="dropdown-menu" role="list"></div></li>';a.before(t),jQuery("#speechContainer #parsvtspeech").on("click",function(){jQuery("#speechContainer").toggleClass("open")}),jQuery("body").on("click",function(e){jQuery("#speechContainer").is(e.target)||0!==jQuery("#speechContainer").has(e.target).length||0!==jQuery(".open").has(e.target).length||jQuery("#speechContainer").removeClass("open")});jQuery("#headerSpeechMenu").empty(),jQuery("#headerSpeechMenu").append('<li id="speechbar" style="padding: 10px; width: 350px;"></li>'),e?jQuery("#speechbar").append(e):($("#headerSpeech .qc-button").removeClass("fa-"+this.icon),this.icon="microphone",$("#headerSpeech .qc-button").addClass("fa-"+this.icon),this.init(),this.showSpeechForm())},showSpeechForm:function(){var e=this;$("body").append("<span id='parsvt-speech-input' style='display: none;'>...</span>");var a='               <span id="speech-error"></span>               <div id="speech-language">\n '+app.vtranslate("Speech Language")+':<br />                  \x3c!--   ======= language Start  ======== --\x3e\n                  <select id=\'speechlang\' name=\'speechlang\' class=\'inputElement select2 select2-offscreen form-control\'>\n                     <option value="af-za">Afrikaans South Africa</option>\n                     <option value="am-ET">አማርኛ Ethiopia</option>\nNaN                     <option value="ar-BH">العربية Bahrain</option>\n                     <option value="ar-EG">العربية Egypt</option>\n                     <option value="ar-IQ">العربية Iraq</option>\n                     <option value="ar-IL">العربية Israel</option>\n                     <option value="ar-JO">العربية Jordan</option>\n                     <option value="ar-KW">العربية Kuwait</option>\n                     <option value="ar-LB">العربية Lebanon</option>\n                     <option value="ar-LY">العربية Lybia</option>\n                     <option value="ar-MA">العربية Morocco</option>\n                     <option value="ar-OM">العربية Oman</option>\n                     <option value="ar-PS">العربية Palestine</option>\n                     <option value="ar-QA">العربية Qatar</option>\n                     <option value="ar-SA">العربية Saudi Arabia</option>\n                     <option value="ar-TN">العربية Tunisia</option>\n                     <option value="ar-ae">العربية UAE</option>\n                     <option value="ar-YE">العربية Yemen</option>\n                     <option value="hy-AM">Հայ Armenia</option>\n                     <option value="az-AZ">Azərbaycan Azerbaijan</option>\n                     <option value="bn-BD">বাংলা  Bangladesh</option>\n                     <option value="bn-IN">বাংলা  India</option>\n                     <option value="id-id">Bahasa Indonesia</option>\n                     <option value="ms-my">Bahasa Malaysia</option>\n                     <option value="bg-bg">Български Bulgaria</option>\n                     <option value="ca-es">Català Spain</option>\n                     <option value="cs-cz">Čeština Czech Republic</option>\n                     <option value="da-DK">Dansk Denmark</option>\n                     <option value="de-de">Deutsch Germany</option>\n                     <option value="en-au">English Australia</option>\n                     <option value="en-ca">English Canada</option>\n                     <option value="en-GH">English Ghana</option>\n                     <option value="en-in">English India</option>\n                     <option value="en-IE">English Ireland</option>\n                     <option value="en-KE">English Kenya</option>\n                     <option value="en-NG">English Nigeria</option>\n                     <option value="en-nz">English New Zealand</option>\n                     <option value="en-PH">English Philippines</option>\n                     <option value="en-za">English South Africa</option>\n                     <option value="en-TZ">English Tanzania</option>\n                     <option value="en-gb">English United Kingdom</option>\n                     <option value="en-us">English United States</option>\n                     <option value="es-ar">Español Argentina</option>\n                     <option value="es-bo">Español Bolivia</option>\n                     <option value="es-cl">Español Chile</option>\n                     <option value="es-co">Español Colombia</option>\n                     <option value="es-cr">Español Costa Rica</option>\n                     <option value="es-ec">Español Ecuador</option>\n                     <option value="es-sv">Español El Salvador</option>\n                     <option value="es-es">Español Spain</option>\n                     <option value="es-us">Español United States</option>\n                     <option value="es-gt">Español Guatemala</option>\n                     <option value="es-hn">Español Honduras</option>\n                     <option value="es-mx">Español Mexico</option>\n                     <option value="es-ni">Español Nicaragua</option>\n                     <option value="es-pa">Español Panama</option>\n                     <option value="es-py">Español Paraguay</option>\n                     <option value="es-pe">Español Peru</option>\n                     <option value="es-pr">Español Puerto Rico</option>\n                     <option value="es-do">Español Dominican Rep.</option>\n                     <option value="es-uy">Español Uruguay</option>\n                     <option value="es-ve">Español Venezuela</option>\n                     <option value="el-gr">Ελληνική Greece</option>\n                     <option value="eu-es">Euskara Spain</option>\n                     <option value="fa-ir">فارسی Iran</option>\n                     <option value="fil-PH">Filipino Philippines</option>\n                     <option value="fr-CA">Français Canada</option>\n                     <option value="fr-fr">Français France</option>\n                     <option value="gl-es">Galego Spain</option>\n                     <option value="ka-GE">ქართული Georgia</option>\n                     <option value="gu-IN">ગુજરાતી India</option>\n                     <option value="hi-in">Hindi India</option>\n                     <option value="hr_HR">Hrvatski Croatia</option>\n                     <option value="he-il">עברית Israel</option>\n                     <option value="zu-za">IsiZulu South Africa</option>\n                     <option value="is-is">Íslenska Iceland</option>\n                     <option value="it-it">Italiano Italia</option>\n                     <option value="it-ch">Italiano Svizzera</option>\n                     <option value="jv-ID">Jawa Indonesia</option>\n                     <option value="kn-IN">ಕನ್ನಡ India</option>\n                     <option value="km-KH">ភាសាខ្មែរ Cambodia</option>\n                     <option value="lo-LA">ລາວ Laos</option>\n                     <option value="lv-LV">Latviešu Latvia</option>\n                     <option value="lt-LT">Lietuvių Lithuania</option>\n                     <option value="la">Lingua latīna</option>\n                     <option value="hu-hu">Magyar Hungary</option>\n                     <option value="ml-IN">മലയാളം India</option>\n                     <option value="mr-IN">मराठी India</option>\n                     <option value="nl-nl">Nederlands Netherlands</option>\n                     <option value="ne-NP">नेपाली Nepal</option>\n                     <option value="nb-NO">Norsk bokmål Norway</option>\n                     <option value="pl-pl">Polski Poland</option>\n                     <option value="pt-br">Português Brasil</option>\n                     <option value="pt-pt">Português Portugal</option>\n                     <option value="ro-ro">Română Romania</option>\n                     <option value="si-LK">සිංහල Srilanka</option>\n                     <option value="ru-ru">Pусский Russia</option>\n                     <option value="sr-rs">Српски Serbia</option>\n                     <option value="sk-sk">Slovenčina Slovakia</option>\n                     <option value="sl-SI">Slovenščina Slovenia</option>\n                     <option value="su-ID">Urang Indonesia</option>\n                     <option value="sw-TZ">Swahili Tanzania</option>\n                     <option value="sw-KE">Swahili Kenya</option>\n                     <option value="fi-fi">Suomi Finland</option>\n                     <option value="sv-se">Svenska Sweden</option>\n                     <option value="ta-IN">தமிழ் India</option>\n                     <option value="ta-SG">தமிழ் Singapore</option>\n                     <option value="ta-LK">தமிழ் Sri Lanka</option>\n                     <option value="ta-MY">தமிழ் Malaysia</option>\n                     <option value="te-IN">తెలుగు India</option>\n                     <option value="vi-VN">Tiếng Việt Vietnam</option>\n                     <option value="tr-tr">Türkçe Turkey</option>\n                     <option value="uk">Українська Ukraine</option>\n                     <option value="ur-PK">اردو Pakistan</option>\n                     <option value="ur-IN">اردو India</option>\n                     <option value="th-th">ไทย Thailand</option>\n                     <option value="ko-kr">한국어 (대한민국) South Korea</option>\n                     <option value="ja-jp">日本語（日本） Japan</option>\n                     <option value="cmn-hans-cn">普通话 (中国大陆) Simplified, China</option>\n                     <option value="cmn-hans-hk">普通话 (香港) Simplified, Hong Kong</option>\n                     <option value="cmn-hant-tw">中文 (台灣) Traditional, Taiwan</option>\n                     <option value="yue-hant-hk">粵語 (香港) Traditional, Hong Kong</option>\n                  </select>\n               </div>               <div id=\'parsvt-dictionary-button\'>'+app.vtranslate("Dictionary is ON")+'<i class="fa fa-commenting-o" aria-hidden="true"></i></div>\n               <div id="parsvt-dictionary-default-button" class="active"><span style="display:inline-block;padding:5px;">'+app.vtranslate("Default")+'</span></div>\n               <div id="parsvt-dictionary-custom-button"><span style="display:inline-block;padding:5px;" title="'+app.vtranslate("Add your custom words to the dictionary. All data will be lost when you clear the browser's cache")+"Add your custom words to the dictionary. All data will be lost when you clear the browser's cache\">"+app.vtranslate("Custom")+"</span></div>\n               <div id='parsvt-commands'>\n                  <div id='parsvt-words'></div>\n                  <div id='parsvt-diControl'>\n                     <div class=\"parsvt-diControl-button\">+</div>\n                  </div>\n               </div>";jQuery("#headerSpeechMenu").append(a),"customtrue"===localStorage.custom?(e.diCustom(),$("#parsvt-dictionary-custom-button").trigger("click")):e.diDefault(),void 0===localStorage.language?(localStorage.language=e.speechlang,jQuery("#speechlang").val(e.speechlang)):jQuery("#speechlang").val(localStorage.language),e.initialize(),vtUtils.showSelect2ElementView(jQuery("#speechlang")),e.reset(),e.command(),e.speech.onend=function(a){e.reset()},e.direction="fa_ir"==e.systemlanguage||"fa_af"==e.systemlanguage||"ar_ae"==e.systemlanguage?"right":"left";var t=screen.width/2-$("#parsvt-speech-input").width()/2,n=screen.height/2.5+window.scrollY;e.speech.onerror=function(a){var o=app.vtranslate(a.error+" error");"no-speech"===a.error?o=app.vtranslate("No speech was detected. Please try again."):"audio-capture"===a.error?o=app.vtranslate("Please ensure that a microphone is connected to your computer."):"not-allowed"===a.error?o=app.vtranslate("The app cannot access your microphone. Please go to 'Chrome settings' and allow microphone access for this website."):"network"===a.error?o=app.vtranslate("Please check your Internet connection"):"aborted"===a.error?o=app.vtranslate("Speech input was aborted in some manner."):"service-not-allowed"===a.error?o=app.vtranslate("The user agent disallowed the requested speech recognition service."):"bad-grammar"===a.error&&(o=app.vtranslate("There was an error in the speech recognition grammar or semantic tags.")),e.error=!0,e.speech.stop(),$(".parsvt_action").html("►"),$(".parsvt_action").removeClass("speech_blink_me"),$("#speech-error").html("<p style='font-size:14px; color:orangered'>"+o+"</p>"),$("#parsvt-speech-input").css("position","absolute"),$("#parsvt-speech-input").css("display","inline-block"),$("#parsvt-speech-input").css("top",n),$("#parsvt-speech-input").css("left",t),$("#parsvt-speech-input").html("<p style='font-size:14px; color:orangered'>"+o+"</p>"),$("#parsvt-speech-input").show(),setTimeout(function(){$("#parsvt-speech-input").fadeOut("fast")},5e3)},e.speech.onresult=function(a){var o=document.activeElement,s=o.nodeName.toLowerCase(),i="cke_wysiwyg_frame cke_reset"==o.getAttribute("class");if(1===o.nodeType&&!o.readOnly&&!o.disabled&&("textarea"===s||"input"===s&&/^(?:text|email|number|search|tel|url|password)$/i.test(o.type))||i){var r=o.getBoundingClientRect();$("#parsvt-speech-input").show(),$("#parsvt-speech-input").css("position","absolute"),$("#parsvt-speech-input").css("top",r.top-20+window.scrollY),"left"==e.direction?$("#parsvt-speech-input").css("left",r.left-$("#parsvt-speech-input").width()):r.left>=screen.width/3?$("#parsvt-speech-input").css("left",r.left-$("#parsvt-speech-input").width()):$("#parsvt-speech-input").css("left",r.left);var p="";if(void 0===a.results)return void e.reset();for(var c=a.resultIndex;c<a.results.length;++c){var l=a.results[c][0].transcript;if(a.results[c].isFinal){if(i)u=o.contentDocument.body.innerHTML;else var u=document.activeElement.value;var h=u+e.comrep(l)+" ";i?o.contentDocument.body.innerHTML=h:o.value=h,sessionStorage.setItem("editorText",h),sessionStorage.setItem("editorText",h),$("#parsvt-speech-input").hide()}else{p+=" "+e.comrep(l);var m=$("#parsvt-speech-input"),d=m[0].scrollHeight;m.scrollTop(d)}}$("#parsvt-speech-input").html(p)}else $("#parsvt-speech-input").show(),$("#parsvt-speech-input").css("position","absolute"),$("#parsvt-speech-input").css("top",n+window.scrollY),$("#parsvt-speech-input").css("left",t),$("#parsvt-speech-input").html(app.vtranslate("Please click on an input field before speaking")),setTimeout(function(){$("#parsvt-speech-input").hide()},2e3)}},registerButtons:function(){var e=this;$("body").on("click","#headerSpeechMenu",function(e){e.stopPropagation()}),$("#headerSpeechMenu").on("click","#parsvt-dictionary-button",function(a){e.toggleComRep(),a.stopPropagation()}),$("#headerSpeechMenu").on("click","#parsvt-dictionary-default-button",function(a){e.diDefault(),a.stopPropagation()}),$("#headerSpeechMenu").on("click","#parsvt-dictionary-custom-button",function(a){e.diCustom(),a.stopPropagation()}),$("#headerSpeechMenu").on("click",".parsvt-diControl-button",function(a){e.addWord(),a.stopPropagation()}),$("#headerSpeechMenu").on("focusout","input",function(a){e.saveWord(),a.stopPropagation()}),$("#headerSpeechMenu").on("click",".parsdict_deleterow",function(a){var t=$(this).data("id");e.deleteWord(t),a.stopPropagation()}),$("#headerSpeechMenu").on("change","#speechlang",function(a){e.updateLang(this.value),a.stopPropagation()}),$("#headerSpeechMenu").on("change paste keyup","input",function(){$(this).attr("value",$(this).val())}),$("#speechContainer").on("click",".parsvt_action",function(a){e.startlisten()})},registerEvents:function(){void 0===localStorage.customWords&&(this.customWords=["test word"],this.customReplaceWords=["test result"]),this.addHeaderIcon(),this.registerButtons(),this.registerEscKey()}}),jQuery(document).ready(function(){window.onbeforeunload=null;(new ParsVTSpeech_Js).registerEvents()});