//tealium universal tag - utag.296 ut4.0.202501150947, Copyright 2025 Tealium.com Inc. All Rights Reserved.
var uetq=uetq||[];window.uetq.push('consent','default',{'ad_storage':'denied'});window.uetq.push('consent','update',{'ad_storage':'granted'});try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1};u.initialized=false;u.map={"bing_tag_id":"tagid","page_type":"ecomm_pagetype","product_id":"ecomm_prodid","_sm_296_4":"msclkid"};u.extend=[function(a,b){try{b['_sm_296_4']=utag.loader.RC("utag_cl").msclkid;}catch(e){utag.DB(e);}},function(a,b,c,d,e,f,g){if(1){d=b['country'];if(typeof d=='undefined')return;c=[{'(AU|NZ)':'4039429'},{'(UK|DE|FR|IT|ES|NL|BE|DK|PL|PT|CZ|SK|NO|CH|SE|FI|GR|IE|AT)':'36000031'},{'US':'5713812'},{'(AR|CL|CO|MX|PE)':'4056620'},{'CA':'18008616'},{'IN':'56210161'},{'JP':'343077275'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){g=new RegExp(f,'i');if(g.test(d)){b['bing_tag_id']=c[e][f];m=true};};if(m)break};if(!m)b['bing_tag_id']='';}},function(a,b,c,d,e,f,g){if(1){d=b['page_type'];if(typeof d=='undefined')return;c=[{'HOME':'home'},{'CLP':'category'},{'SLP':'category'},{'PLP':'category'},{'SEARCH':'searchresults'},{'PDP':'product'},{'SHOPPING CART':'cart'},{'CHECKOUT':'purchase'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['page_type']=c[e][f];m=true};};if(m)break};if(!m)b['page_type']='other';}},function(a,b){try{if(1){if(b.page_type==='PLP'||b.page_type==='CLP'||b.page_type=='SEARCH'){b._cprod='';}}}catch(e){utag.DB(e)}}];u.loader_cb=function(){if(!u.initialized){var o={ti:u.data.tagid};o.q=uetq;uetq=new UET(o);if(u.data.msclkid){uetq.msClkId=u.data.msclkid;uetq.msClkIdExpirationTime=1;}
uetq.push("pageLoad");}
u.initialized=true;var g={};u.data.gv=u.data.gv||u.data.order_subtotal;u.data.gc=u.data.gc||u.data.order_currency;u.data.revenue_value=u.data.revenue_value||u.data.order_subtotal;if(u.data.ecomm_pagetype){g.ecomm_pagetype=u.data.ecomm_pagetype;}
if(u.data.ec){g.ec=u.data.ec;}
if(u.data.ea){g.ea=u.data.ea;}
if(u.data.el){g.el=u.data.el;}
if(u.data.ev){g.ev=u.data.ev;}
if(u.data.ecomm_pagetype){g.ecomm_pagetype=u.data.ecomm_pagetype;}
if(u.data.ecomm_prodid){g.ecomm_prodid=u.data.ecomm_prodid;}
if(u.data.gc){g.gc=u.data.gc;}
if(u.data.gv){var gv=parseFloat(u.data.gv,10);if(isNaN(gv)===false){g.gv=gv;}}
if(u.data.revenue_value){var revenue_value=parseFloat(u.data.gv,10);if(isNaN(revenue_value)===false){g.revenue_value=revenue_value;}}
if(!utag.ut.isEmptyObject(g)){if(g.revenue_value){var revenue_obj={"revenue_value":g.revenue_value,"currency":u.data.gc,'ecomm_pagetype':'purchase'};if(u.data.product_id.length>0){revenue_obj.ecomm_prodid=u.data.product_id;}
uetq.push('event','Purchase',revenue_obj);}
else{uetq.push(g);}}};u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:296");utag.DB(b);var c,d,e,f;u.data={"base_url":"//bat.bing.com/bat.js","tagid":"","ec":"","ea":"","el":"","ev":"","gv":"","gc":""};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:296:EXTENSIONS");utag.DB(b);for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
utag.DB("send:296:MAPPINGS");utag.DB(u.data);u.data.order_subtotal=u.data.order_subtotal||b._csubtotal||"";u.data.order_currency=u.data.order_currency||b._ccurrency||"";u.data.product_id=u.data.product_id||b._cprod||[];if(!u.initialized){u.loader({"type":"script","src":u.data.base_url,"cb":u.loader_cb,"loc":"script","id":"utag_296","attrs":{}});}else{u.loader_cb();}
utag.DB("send:296:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("296","adidas.adidasglobal"));}catch(error){utag.DB(error);}
