!function(e){var o=0;e.fn.freezeHeader=function(i){function t(t){var n=t.attr("id")||"tbl-"+ ++o;if(t.length>0&&"table"==t[0].tagName.toLowerCase()){var l={id:n,grid:t,container:null,header:null,divScroll:null,openDivScroll:null,closeDivScroll:null,scroller:null};i&&void 0!==i.height&&(l.divScroll='<div id="hdScroll'+l.id+'" style="height: '+i.height+'; overflow-y: scroll">',l.closeDivScroll="</div>"),l.header=l.grid.find("thead"),i&&void 0!==i.height&&0==e("#hdScroll"+l.id).length&&l.grid.wrapAll(l.divScroll),l.scroller=e(i&&void 0!==i.height?"#hdScroll"+l.id:window),i&&void 0!==i.scrollListenerEl&&(l.scroller=i.scrollListenerEl),l.scroller.on("scroll",function(){0==e("#hd"+l.id).length&&l.grid.before('<div id="hd'+l.id+'"></div>'),l.container=e("#hd"+l.id),null!=l.header.offset()&&(!function(o,i){{if(!i||void 0===i.height&&void 0===i.scrollListenerEl){var t=o.header.offset().top;i&&void 0!==i.offset&&(t-=parseInt(i.offset.replace("px",""),10));var r=o.grid.height()-o.header.height()-o.grid.find("tr:last").height()+o.header.offset().top;return e(document).scrollTop()>t&&e(document).scrollTop()<r}return o.header.offset().top<=o.scroller.offset().top}}(l,i)?(e(document).scrollTop()>l.header.offset().top?(l.container.css("position","absolute"),l.container.css("top",l.grid.find("tr:last").offset().top-l.header.height()+"px")):(t.trigger("freeze:off"),l.container.css("visibility","hidden"),l.container.css("top","0px"),l.container.width(0)),r=!1):(t.trigger("freeze:on"),r||(!function(o){o.container.html(""),o.container.val("");var t=e('<table style="margin: 0 0;"></table>'),r=o.grid.prop("attributes");e.each(r,function(){"id"!=this.name&&t.attr(this.name,this.value)});o.header.clone(!0).appendTo(t),o.container.append(t),o.container.width(o.header.width()),o.container.height(o.header.height),o.container.find("th").each(function(i){var t=o.grid.find("th").eq(i).width();e(this).css("width",t)}),o.container.css("visibility","visible"),i&&void 0!==i.height?(void 0!==i.offset?o.container.css("top",o.scroller.offset().top+1*i.offset.replace("px","")+"px"):o.container.css("top",o.scroller.offset().top+"px"),o.container.css("position","absolute")):i&&void 0!==i.scrollListenerEl?(o.container.css("top",o.scroller.find("thead > tr").innerHeight()+"px"),o.container.css("position","absolute"),o.container.css("z-index","2")):i&&void 0!==i.offset?(o.container.css("top",i.offset),o.container.css("position","fixed")):(o.container.css("top","0px"),o.container.css("position","fixed"));i&&void 0!==i.background_color&&o.container.css("background-color",i.background_color);o.container.css("z-index",9999)}(l),r=!0)))})}}var r=!1;return this.each(function(o,i){t(e(i))})}}(jQuery);