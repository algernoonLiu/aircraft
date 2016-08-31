/*TMODJS:{}*/
!function(){function a(a,b){return(/string|function/.test(typeof b)?h:g)(a,b)}function b(a,c){return"string"!=typeof a&&(c=typeof a,"number"===c?a+="":a="function"===c?b(a.call(a)):""),a}function c(a){return l[a]}function d(a){return b(a).replace(/&(?![\w#]+;)|[<>"']/g,c)}function e(a,b){if(m(a))for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)}function f(a,b){var c=/(\/)[^\/]+\1\.\.\1/,d=("./"+a).replace(/[^\/]+$/,""),e=d+b;for(e=e.replace(/\/\.\//g,"/");e.match(c);)e=e.replace(c,"/");return e}function g(b,c){var d=a.get(b)||i({filename:b,name:"Render Error",message:"Template not found"});return c?d(c):d}function h(a,b){if("string"==typeof b){var c=b;b=function(){return new k(c)}}var d=j[a]=function(c){try{return new b(c,a)+""}catch(d){return i(d)()}};return d.prototype=b.prototype=n,d.toString=function(){return b+""},d}function i(a){var b="{Template Error}",c=a.stack||"";if(c)c=c.split("\n").slice(0,2).join("\n");else for(var d in a)c+="<"+d+">\n"+a[d]+"\n\n";return function(){return"object"==typeof console&&console.error(b+"\n\n"+c),b}}var j=a.cache={},k=this.String,l={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},m=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},n=a.utils={$helpers:{},$include:function(a,b,c){return a=f(c,a),g(a,b)},$string:b,$escape:d,$each:e},o=a.helpers=n.$helpers;a.get=function(a){return j[a.replace(/^\.\//,"")]},a.helper=function(a,b){o[a]=b},define(function(){return a}),a.helper("dateFormat",function(a,b){if(!a)return"";a=a.split("-").join("/"),a=new Date(a);var c={"M+":a.getMonth()+1,"d+":a.getDate(),"h+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),S:a.getMilliseconds()};/(y+)/.test(b)&&(b=b.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length)));for(var d in c)new RegExp("("+d+")").test(b)&&(b=b.replace(RegExp.$1,1==RegExp.$1.length?c[d]:("00"+c[d]).substr((""+c[d]).length)));return b}),a.helper("dateTimeFormat",function(a,b){return a?Tools.getDateTimeFormat(a,b):""}),a.helper("dateTimeHSFormat",function(a){return a?Tools.getDateTimeFormat(a,"yyyy-MM-dd hh:mm"):""}),a.helper("getDateText",function(a,b){return Tools.addDay(a,b-1)}),a.helper("encode",function(a){return encodeURIComponent(a)}),a.helper("decode",function(a){try{a=decodeURIComponent(a)}catch(b){}return a}),a.helper("parseInt",function(a){return parseInt(a)}),a.helper("interceptStr",function(a){return a&&(a=a.substring(0,39)+"..."),a}),a.helper("toFixed",function(a){return a.toFixed(2)}),a.helper("stringify",function(a){return JSON.stringify(a)}),a.helper("getCardText",function(a){switch(1*a){case 0:return"\u8eab\u4efd\u8bc1";case 1:return"\u62a4\u7167";default:return"\u5176\u4ed6"}}),a.helper("getCustomerType",function(a,b){var c="";return c+='<option value="" '+(""==a||null==a?"selected":"")+">\u5168\u90e8</option>",c+='<option value="0" '+("0"==a?"selected":"")+">\u6563\u5ba2</option>",c+='<option value="1" '+("1"==a?"selected":"")+">\u56e2\u4f53</option>",b&&(c="1"==a?"\u56e2\u4f53":"\u6563\u5ba2"),c}),a.helper("getWayType",function(a){var b="";return a=a||1,b+='<option value="1" '+(1==a?"selected":"")+">\u65c5\u884c\u793e\u7cfb\u7edf</option>",b+='<option value="2" '+(2==a?"selected":"")+">\u4f20\u771f</option>",b+='<option value="3" '+(3==a?"selected":"")+">\u77ed\u4fe1</option>",b+='<option value="4" '+(4==a?"selected":"")+">\u7535\u8bdd</option>",b+='<option value="5" '+(5==a?"selected":"")+">QQ </option>",b+='<option value="6" '+(6==a?"selected":"")+">\u5fae\u4fe1</option>",b+='<option value="7" '+(7==a?"selected":"")+">\u7ebf\u4e0a\u6e20\u9053</option>"}),a.helper("getFeeItemType",function(a,b){var c="";return a=a||1,c+='<option value="1" '+(1==a?"selected":"")+">\u5927\u4eba\u7ed3\u7b97\u4ef7</option>",c+='<option value="2" '+(2==a?"selected":"")+">\u5c0f\u5b69\u7ed3\u7b97\u4ef7</option>",b&&(c+='<option value="3" '+(3==a?"selected":"")+">\u4e2d\u8f6c\u7ed3\u7b97\u4ef7</option>"),c+='<option value="4" '+(4==a?"selected":"")+">\u8f66\u8f86\u8d39\u7528</option>",c+='<option value="5" '+(5==a?"selected":"")+">\u9910\u5385\u8d39\u7528</option>",c+='<option value="6" '+(6==a?"selected":"")+">\u4fdd\u9669\u8d39\u7528</option>",c+='<option value="7" '+(7==a?"selected":"")+">\u5bfc\u670d\u8d39</option>",c+='<option value="8" '+(8==a?"selected":"")+">\u9152\u5e97\u8d39\u7528</option>",c+='<option value="9" '+(9==a?"selected":"")+">\u666f\u533a\u8d39\u7528</option>",c+='<option value="10" '+(10==a?"selected":"")+">\u81ea\u8d39\u8d39\u7528</option>",c+='<option value="11" '+(11==a?"selected":"")+">\u7968\u52a1\u8d39\u7528</option>",c+='<option value="12" '+(12==a?"selected":"")+">\u5176\u4ed6\u8d39\u7528</option>"}),a.helper("getWayTypeText",function(a){var b=["","\u65c5\u884c\u793e\u7cfb\u7edf","\u4f20\u771f","\u77ed\u4fe1","\u7535\u8bdd","QQ","\u5fae\u4fe1","\u7ebf\u4e0a\u6e20\u9053"];return a=a||1,b[a]}),a.helper("checked",function(a){return a=a||0,1==a?"checked":""}),a.helper("getCardOption",function(a){var b="";return a=a||0,b+='<option value="0" '+(0==a?"selected":"")+">\u8eab\u4efd\u8bc1</option>",b+='<option value="1" '+(1==a?"selected":"")+">\u62a4\u7167</option>",b+='<option value="2" '+(2==a?"selected":"")+">\u5176\u5b83</option>"}),a.helper("getTicketText",function(a){switch(1*a){case 1:return"\u673a\u7968";case 2:return"\u6c7d\u8f66\u7968";case 3:return"\u706b\u8f66\u7968";case 4:return"\u8f6e\u8239\u7968";default:return"\u5176\u4ed6"}}),a.helper("getPlanPayTypeText",function(a){switch(1*a){case 0:return"\u73b0\u91d1";case 1:return"\u5237\u5361";case 2:return"\u7b7e\u5355";default:return"\u5176\u4ed6"}}),a.helper("getPlanPayTypeOption",function(a,b){var c="",d="";return b&&(d="disabled"),a=a||0,c+='<select name="payType" '+d+'><option value="0" '+(0==a?"selected":"")+">\u73b0\u91d1</option>",c+='<option value="1" '+(1==a?"selected":"")+">\u5237\u5361</option>",c+='<option value="2" '+(2==a?"selected":"")+">\u7b7e\u5355</option></select>"}),a.helper("getPlanPreTypeOption",function(a,b){var c="",d="";return b&&(d="disabled"),a=a||0,c+='<select name="preType" '+d+'><option value="0" '+(0==a?"selected":"")+">\u73b0\u91d1</option>",c+='<option value="1" '+(1==a?"selected":"")+">\u94f6\u884c\u8f6c\u8d26</option>",c+='<option value="2" '+(2==a?"selected":"")+">\u7f51\u4ed8</option>",c+='<option value="3" '+(3==a?"selected":"")+">\u652f\u7968</option>",c+='<option value="4" '+(4==a?"selected":"")+">\u5176\u4ed6</option></select>"}),a.helper("getPayTypeText",function(a){switch(1*a){case 0:return"\u73b0\u91d1";case 1:return"\u94f6\u884c\u8f6c\u8d26";case 3:return"\u652f\u7968";case 5:return"\u7f51\u4ed8";case 6:return"\u51b2\u62b5";case 7:return"\u4ee3\u6536\u62b5\u4ed8";default:return"\u5176\u4ed6"}}),a.helper("getBillStatusText",function(a,b){switch(1*a){case-1:return-1==b?"\u8be5\u53d1\u56e2\u8ba1\u5212\u5df2\u7ecf\u88ab\u53d6\u6d88":"\u7f16\u8f91\u8ba1\u5212";case 0:return"\u5bfc\u6e38\u5df2\u7ecf\u62a5\u8d26\uff0c\u82e5\u9700\u7f16\u8f91\uff0c\u9700\u8981\u8ba1\u8c03\u9000\u56de";case 1:return"\u8ba1\u8c03\u5df2\u5ba1\u6838\uff0c\u82e5\u9700\u7f16\u8f91\uff0c\u9700\u8981\u8d22\u52a1\u548c\u8ba1\u8c03\u9000\u56de";case 2:return"\u8d22\u52a1\u5df2\u5ba1\u6838\uff0c\u82e5\u9700\u7f16\u8f91\uff0c\u9700\u8981\u7ba1\u7406\u5458\u3001\u8d22\u52a1\u548c\u8ba1\u8c03\u540c\u65f6\u64cd\u4f5c\u9000\u56de";default:return""}}),a.helper("getPayTypeOptions",function(a,b,c){var d="",e=0;return d+='<option value="0" '+(e++==a?"selected":"")+">\u73b0\u91d1</option>",d+='<option value="1" '+(e++==a?"selected":"")+">\u94f6\u884c\u8f6c\u8d26</option>",e++,d+='<option value="3" '+(e++==a?"selected":"")+">\u652f\u7968</option>",d+='<option value="4" '+(e++==a?"selected":"")+">\u5176\u4ed6</option>",c&&(d+='<option value="5" '+(e++==a?"selected":"")+">\u7f51\u4ed8</option>"),1==b&&(d+='<option value="6" '+(6==a?"selected":"")+">\u51b2\u62b5</option>"),d}),a.helper("getArrangeIcon",function(a){switch(1*a){case 1:return"fa-question";case 2:return"fa-exclamation";case 3:return"fa-check";case 4:return"fa-times";default:return"fa-minus"}}),a.helper("getRestaurantDesc",function(a,b){var c="",d=0,e=["\u65e9\u9910","\u4e2d\u9910","\u665a\u9910"];a=a||"0,0,0",a=a.split(","),3!=a.length&&(a=[0,0,0]);for(var d=0;3>d;d++)c+='<label><input type="checkbox" class="ace" disabled="disabled" '+(1==a[d]?"checked":"")+'><span class="lbl"> '+e[d]+"</span></label>&nbsp;&nbsp;&nbsp;";return b&&(c=c.split('disabled="disabled"').join("")),c}),a.helper("getTaskDesc",function(a){switch(1*a){case 1:return"\u63a5\u673a";case 2:return"\u9001\u673a";case 3:return"\u524d\u6bb5";case 4:return"\u4e2d\u6bb5";case 5:return"\u540e\u6bb5";default:return"\u5168\u7a0b"}}),a.helper("getTaskSelect",function(a,b,c){var d="";c&&(d="disabled");var e=['<select name="taskType" '+d+">"],f=["\u5168\u7a0b","\u63a5\u673a","\u9001\u673a","\u524d\u6bb5","\u4e2d\u6bb5","\u540e\u6bb5"];b&&f.push("\u5c0f\u8f66\u63a5\u5ba2");for(var g=0,h=f.length;h>g;g++)e.push('<option value="'+g+'" '+(a==g?"selected":"")+">"+f[g]+"</option>");return e.push("</select>"),e.join("")}),a.helper("getHotelLevelDesc",function(a){switch(1*a){case 1:return"\u4e09\u661f\u4ee5\u4e0b";case 2:return"\u4e09\u661f";case 3:return"\u51c6\u56db\u661f";case 4:return"\u56db\u661f";case 5:return"\u51c6\u4e94\u661f";case 6:return"\u4e94\u661f";case 7:return"\u4e94\u661f\u4ee5\u4e0a";default:return""}}),a.helper("getOrderStatusDesc",function(a){switch(1*a){case 1:return"\u672a\u9884\u5b9a";case 2:return"\u9884\u5b9a\u4e2d";case 3:return"\u5df2\u9884\u8ba2";default:return"\u65e0\u9700\u9884\u8ba2"}}),a.helper("getRepastDetail",function(a){var b=[];return 1==a.breakfast&&b.push("\u65e9\u9910"),1==a.lunch&&b.push("\u5348\u9910"),1==a.dinner&&b.push("\u665a\u9910"),b.join("\u3001")}),a.helper("getScoreStar",function(a,b){var c="",d=["fa-star-o","fa-star-o","fa-star-o","fa-star-o","fa-star-o"];if(a>4&&15>a?d[0]="fa-star-half-o":a>=15&&25>a?d[0]="fa-star":a>=25&&35>a?(d[0]="fa-star",d[1]="fa-star-half-o"):a>=35&&45>a?(d[0]="fa-star",d[1]="fa-star"):a>=45&&55>a?(d[0]="fa-star",d[1]="fa-star",d[2]="fa-star-half-o"):a>=55&&65>a?(d[0]="fa-star",d[1]="fa-star",d[2]="fa-star"):a>=65&&75>a?(d[0]="fa-star",d[1]="fa-star",d[2]="fa-star",d[3]="fa-star-half-o"):a>=75&&85>a?(d[0]="fa-star",d[1]="fa-star",d[2]="fa-star",d[3]="fa-star"):a>=85&&95>a?(d[0]="fa-star",d[1]="fa-star",d[2]="fa-star",d[3]="fa-star",d[4]="fa-star-half-o"):a>=95&&(d[0]="fa-star",d[1]="fa-star",d[2]="fa-star",d[3]="fa-star",d[4]="fa-star"),"1"==b)for(var e=0;1*a>e;e++)d[e]="fa-star";for(var f=0;f<d.length;f++)c+='<i class="fa '+d[f]+'"></i>';return c}),a.helper("getNoteItemText",function(a){var b="\u4ea4\u901a";return"trafic"==a?b="\u4ea4\u901a":"hotel"==a?b="\u4f4f\u5bbf":"play"==a?b="\u6e38\u73a9":"note"==a?b="\u7b14\u8bb0":"line"==a&&(b="\u7ebf\u8def\u7b80\u4ecb"),b}),a.helper("getBusinessTypeText",function(a){switch(a){case"guide":return"\u5bfc\u6e38";case"busCompany":return"\u8f66\u961f";case"hotel":return"\u9152\u5e97";default:return"-"}}),a.helper("getLogTypeText",function(a){switch(1*a){case 1:return"\u4fdd\u5b58";case 2:return"\u8d22\u52a1";case 3:return"\u8ba1\u8c03";case 4:return"\u9000\u56de\u8ba1\u8c03";case 5:return"\u9000\u56de\u5bfc\u6e38";case 6:return"Web\u62a5\u8d26";case 7:return"\u5bfc\u6e38\u63d0\u4ea4\u62a5\u8d26";case 8:return"\u5220\u9664";default:return console.info("Other Type:type"),"\u5176\u4ed6\u7c7b\u578b"}})}();