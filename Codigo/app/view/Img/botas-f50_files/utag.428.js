//tealium universal tag - utag.428 ut4.0.202501150947, Copyright 2025 Tealium.com Inc. All Rights Reserved.
window.snaptr=window.snaptr||function(){window.snaptr.handleRequest?window.snaptr.handleRequest.apply(window.snaptr,arguments):window.snaptr.queue.push(arguments);};window.snaptr.queue=window.snaptr.queue||[];try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.initialized=false;u.scriptrequested=false;u.clearEmptyKeys=function(object){for(var key in object){if(object[key]===""||object[key]===undefined){delete object[key];}}
return object;};u.map={"tag_id":"pixel_id","customer_email_sha256":"user_hashed_email","signup_step:SUCCESS":"SIGN_UP","snap_event":"event","search_term":"search_string","snap_event_id_search":"SEARCH.client_deduplication_id","snap_event_id_viewcontent":"VIEW_CONTENT.client_deduplication_id","snap_event_id_addcart":"ADD_CART.client_deduplication_id","snap_event_id_signup":"SIGN_UP.client_deduplication_id","snap_event_id_pageview":"PAGE_VIEW.client_deduplication_id","snap_event_id_purchase":"PURCHASE.client_deduplication_id"};u.extend=[function(a,b){try{if(1){if(b.country=='CA'&&b.product_price&&b.product_price.length>0&&window.tealiumiq_currency){b.currency_code=b._ccurrency='USD';b.order_subtotal=b._csubtotal=tealiumiq_currency.convert(b._csubtotal,'CAD','USD');for(let index=0;index<b._cprice.length;index++){let curProductPrice=parseFloat(b._cprice[index]);b._cprice[index]=tealiumiq_currency.convert(curProductPrice,'CAD','USD');}}}}catch(e){utag.DB(e)}},function(a,b,c,d,e,f,g){if(1){d=b['country'];if(typeof d=='undefined')return;c=[{'US':'63c58158-b048-4c6e-a673-d72c37f9e6fc'},{'CA':'543585f4-10e3-417f-9a85-824cc7b13bf9'},{'TR':'d924b5ba-fcd0-4683-b08a-332a51654063'},{'AR':'229252d6-b6dc-4eff-9111-09bfe7c539c6'},{'AU':'6239f516-d441-4aaf-b18e-bd3cdac9bfc2'},{'NZ':'e6c148d0-322c-493e-9941-d25280c7b481'},{'CL':'101a8593-ae66-4f8a-a3aa-4911a55c031f'},{'BR':'7a1d67eb-8385-4fac-a8c7-c970f0d42fbc'},{'PE':'73aafc0f-148e-4567-87ff-a3cf644625cd'},{'CO':'b961b301-f613-4611-8bb4-209328ea8bbe'},{'DE':'70f84758-db7d-48a3-81ed-ab0040c33cbd'},{'DK':'192754a5-3dcf-4963-9825-d51ab8217d60'},{'ES':'bdb1e2b4-6787-4874-af18-88fa7450c363'},{'IT':'dd8e10c4-4320-47bb-9ec9-bbeccb04e450'},{'NO':'d27ae2ab-5218-45a1-ad07-c1d774f0e512'},{'PL':'aefe4cc5-1b4d-4f15-9f96-9439f7f637eb'},{'SE':'70bc8482-e2cd-4514-9053-a84ee564c7f4'},{'UK':'f9c3be94-7d16-4118-a13b-316716863596'},{'FR':'2cbc4f53-0fe4-4193-8d0d-9db1bec95b5c'},{'NL':'a342798f-ced7-4df0-9933-a04eb1e6e0d4'},{'CZ':'95dc1b1f-5324-49a1-acfb-d5dde5b31d10'},{'IE':'84c0e7b3-5cff-4fce-9d85-1553b90621c2'},{'PT':'3ab53158-e347-40c8-a065-5485b26e995b'},{'FI':'7de31d11-f7af-4037-ad34-2c97b003fce3'},{'BE':'20ad11ef-da5b-475d-a488-4be91dec229b'},{'AT':'8f210d7a-f979-4d96-9908-c11017b79456'},{'SK':'585d3342-2ba7-41e9-a099-a494d36cc7fc'},{'CH':'ec1b452b-62ac-4f84-a4a3-6b430b9fc96e'},{'GR':'c8f84ecb-b01f-4668-a276-8c66fa2ab804'},{'MY':'5baa18d0-b99b-4da2-a7f0-787576bec191'},{'SG':'5db05b6b-d83e-45bb-9ec0-e089408720b6'},{'PH':'00c43468-6d57-460f-8a04-be9577eeb461'},{'TH':'fd07549a-a927-47fa-8f4b-149506411579'},{'MX':'3d60301a-c704-4bde-aaac-83c9690a09d0'},{'IN':'cdb083e5-b255-4121-a07c-17856d1ccdbc'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['tag_id']=c[e][f];m=true};};if(m)break};if(!m)b['tag_id']='';}},function(a,b){try{if(/DE|DK|ES|IT|NO|PL|SE|UK|FR|NL|CZ|IE|PT|FI|BE|AT|SK|CH|GR/.test(b['country'])){try{b['tag_id']=b.tag_id+',e1311aac-6996-4953-afda-14070416495b'}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(1){b.snap_event=[];if(a=='view'){b.snap_event.push('PAGE_VIEW');if(b.page_type=='SEARCH'){b.snap_event.push('SEARCH');}else if(b.page_type=='PDP'){b.snap_event.push('VIEW_CONTENT');}}else if(a=='link'){if(b.event_name=='ADD TO CART'){b.snap_event.push('ADD_CART')}else if(b.signup_step=='SUCCESS'||(b.event_category=='ACCOUNT CREATION'&&b.event_name=='SUCCESS')){b.snap_event.push('SIGN_UP');}}}}catch(e){utag.DB(e)}}];u.sumItems=function(arr){var totalItems=0,i;for(i=0;i<arr.length;i++){totalItems+=parseInt(arr[i]);}
return totalItems;};u.handleEvent=function(event_name){if(!event_name){return;}
var event_data={};if(event_name==="PURCHASE"){event_data["currency"]=u.data.order_currency;event_data["transaction_id"]=u.data.order_id;}
if(/VIEW_CONTENT|ADD_CART|START_CHECKOUT|PURCHASE/i.test(event_name)){event_data["price"]=u.data.order_subtotal;event_data["item_ids"]=u.data.product_id;event_data["item_category"]=u.data.product_category[0];event_data["number_items"]=u.sumItems(u.data.product_quantity);}
event_data["client_deduplication_id"]=u.data[event_name+".client_deduplication_id"]||"";event_data["description"]=u.data.description;event_data["search_string"]=u.data.search_string;event_data["payment_info_available"]=u.data.payment_info_available;event_data["sign_up_method"]=u.data.sign_up_method;event_data["success"]=u.data.success;event_data["user_hashed_email"]=u.data.customer_email_sha256;window.snaptr("track",event_name,u.clearEmptyKeys(event_data));};u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:428");utag.DB(b);var c,d,e,f,h,i;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"https://sc-static.net/scevent.min.js","pixel_id":"","product_id":[],"product_category":[],"product_quantity":[],"product_unit_price":[],"event":[],"user_data":{}};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:428:EXTENSIONS");utag.DB(b);c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f].indexOf("user_")===0){u.data.user_data[e[f]]=b[d];}else{u.data[e[f]]=b[d];}}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){u.data.event=u.data.event.concat(u.map[d].split(","));}}}}
utag.DB("send:428:MAPPINGS");utag.DB(u.data);u.data.order_id=u.data.order_id||b._corder||"";u.data.order_subtotal=u.data.order_subtotal||b._csubtotal||"";u.data.order_currency=u.data.order_currency||b._ccurrency||"";u.data.customer_id=u.data.customer_id||b._ccustid||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_category.length===0&&b._ccat!==undefined){u.data.product_category=b._ccat.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
if(u.data.event.length===0&&b._cevent!==undefined){u.data.event=(u.typeOf(b._cevent)==="array")?b._cevent.slice(0):[b._cevent];}
if(!u.data.pixel_id){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
if(a=='view'){if(u.data.pixel_id.indexOf(',')>-1){u.data.pixel_id=u.data.pixel_id.split(',');for(var i=0;i<u.data.pixel_id.length;i++){window.snaptr("init",u.data.pixel_id[i],u.data.user_data);}}else{window.snaptr("init",u.data.pixel_id,u.data.user_data);}}
if(u.data.event.join(",").indexOf("PURCHASE")<0&&u.data.order_id){u.data.event.push("PURCHASE");}
for(i=0;i<u.data.event.length;i++){u.handleEvent(u.data.event[i]);}
if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":null,"loc":"script","id":"utag_428","attrs":{}});}
utag.DB("send:428:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("428","adidas.adidasglobal"));}catch(error){utag.DB(error);}
