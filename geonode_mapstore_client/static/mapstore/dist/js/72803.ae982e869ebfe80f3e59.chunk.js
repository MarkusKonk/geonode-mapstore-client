(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[72803,47310],{53001:(e,t,r)=>{"use strict";r.d(t,{xT:()=>n,H_:()=>o,Wv:()=>a,gC:()=>u,dG:()=>i,oQ:()=>c,Q2:()=>l,R3:()=>s,Zr:()=>f,Op:()=>E,l$:()=>p,uL:()=>d,zg:()=>m,K2:()=>A,M3:()=>O,st:()=>R,US:()=>v,$c:()=>T,pW:()=>y,$D:()=>g,ke:()=>C,rE:()=>_,vw:()=>S,r5:()=>G,X1:()=>h,V3:()=>I,p2:()=>L});var n="BACKGROUND_SELECTOR:ADD_BACKGROUND",o="BACKGROUND_SELECTOR:REMOVE_BACKGROUND",a="BACKGROUND_SELECTOR:SET_CURRENT_BACKGROUND_LAYER",u="BACKGROUND_SELECTOR:BACKGROUND_ADDED",i="BACKGROUND_SELECTOR:BACKGROUND_EDITED",c="BACKGROUND_SELECTOR:ADD_BACKGROUND_PROPERTIES",l="BACKGROUND_SELECTOR:SET_BACKGROUND_MODAL_PARAMS",s="BACKGROUND_SELECTOR:UPDATE_BACKGROUND_THUMBNAIL",f="BACKGROUND_SELECTOR:BACKGROUNDS_CLEAR",E="BACKGROUND_SELECTOR:CREATE_BACKGROUNDS_LIST",p="BACKGROUND_SELECTOR:CLEAR_MODAL_PARAMETERS",d="BACKGROUND_SELECTOR:CONFIRM_DELETE_BACKGROUND_MODAL",m="BACKGROUND_SELECTOR:ALLOW_BACKGROUNDS_DELETION",A="BACKGROUND_SELECTOR:SYNC_CURRENT_BACKGROUND_LAYER";function O(e){return{type:E,backgrounds:e}}function R(e){return{type:n,source:e}}function v(e){return{type:c,modalParams:e}}function T(e){return{type:l,modalParams:e}}function y(e){return{type:u,layerId:e}}function g(e){return{type:i,layerId:e}}function C(e){return{type:a,layerId:e}}function _(e){return{type:A,id:e}}function S(e){return{type:m,allow:e}}function G(e,t){return{type:s,thumbnailData:e,id:t}}function h(e){return{type:o,backgroundId:e}}function I(){return{type:p}}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:d,show:e,layerTitle:t,layerId:r}}},931273:(e,t,r)=>{"use strict";r.d(t,{WX:()=>c,r7:()=>l,V3:()=>s,HR:()=>f,xi:()=>E,ur:()=>p,vK:()=>d,nm:()=>m,QF:()=>A,zZ:()=>O,uN:()=>R,Bz:()=>v,im:()=>T,CO:()=>y,$X:()=>g,Mt:()=>C,Oq:()=>_,YO:()=>S,PR:()=>G,wI:()=>h,bv:()=>I,mh:()=>L,$Y:()=>D,eA:()=>N,UT:()=>P,cS:()=>b,l3:()=>w,Kz:()=>M,vg:()=>U,xM:()=>x,do:()=>F,lb:()=>B,yu:()=>k,c$:()=>K,tt:()=>Y,nX:()=>q,BG:()=>H,Rc:()=>W,K4:()=>V,Dw:()=>j,dL:()=>X,In:()=>Z,r1:()=>$,XW:()=>z,L8:()=>Q,i3:()=>J,XM:()=>ee,X7:()=>te,M3:()=>re,N3:()=>ne,SU:()=>oe,wo:()=>ae,ye:()=>ue,m:()=>ie,wl:()=>ce,bu:()=>le,A4:()=>se,vG:()=>fe,ky:()=>Ee,Wf:()=>pe,Ts:()=>de,IT:()=>me,XS:()=>Ae,tx:()=>Oe,We:()=>Re,nx:()=>ve,E9:()=>Te,zX:()=>ye});var n=r(659551),o=r(501157),a=r(603475),u=r(932354),i=r(197395),c=(n.ZP,o.ZP,a.Z,u.Z,"CATALOG:ADD_LAYERS_FROM_CATALOGS"),l="CATALOG:ADD_LAYER_AND_DESCRIBE",s="CATALOG:TEXT_SEARCH",f="CATALOG:RECORD_LIST_LOADED",E="CATALOG:RESET_CATALOG",p="CATALOG:CATALOG_CLOSE",d="CATALOG:RECORD_LIST_LOAD_ERROR",m="CATALOG:CHANGE_CATALOG_FORMAT",A="CATALOG:ADD_LAYER_ERROR",O="CATALOG:CHANGE_SELECTED_SERVICE",R="CATALOG:CHANGE_CATALOG_MODE",v="CATALOG:CHANGE_METADATA_TEMPLATE",T="CATALOG:CHANGE_TITLE",y="CATALOG:CHANGE_TEXT",g="CATALOG:CHANGE_TYPE",C="CATALOG:CHANGE_SERVICE_PROPERTY",_="CATALOG:CHANGE_SERVICE_FORMAT",S="CATALOG:FOCUS_SERVICES_LIST",G="CATALOG:CHANGE_URL",h="CATALOG:ADD_CATALOG_SERVICE",I="CATALOG:DELETE_CATALOG_SERVICE",L="CATALOG:ADD_SERVICE",D="CATALOG:DELETE_SERVICE",N="CATALOG:SAVING_SERVICE",P="CATALOG:GET_METADATA_RECORD_BY_ID",b="CATALOG:SET_LOADING",w="CATALOG:TOGGLE_TEMPLATE",M="CATALOG:TOGGLE_THUMBNAIL",U="CATALOG:TOGGLE_ADVANCED_SETTINGS",x="CATALOG:FORMAT_OPTIONS_FETCH",F="CATALOG:FORMAT_OPTIONS_LOADING",B="CATALOG:SET_FORMAT_OPTIONS",k="CATALOG:NEW_SERVICE_STATUS";function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return{type:c,layers:e,sources:t,options:r}}function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.format,r=e.url,n=e.startPosition,o=e.maxRecords,a=e.text,u=e.options,i=void 0===u?{}:u;return{type:s,format:t,url:r,startPosition:n,maxRecords:o,text:a,options:i}}function q(e,t){return{type:f,searchOptions:e,result:t}}function H(e){return{type:m,format:e}}function W(e){return{type:N,status:e}}function V(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:b,loading:e}}function j(e){return{type:O,service:e}}function X(e){return{type:S,status:e}}function Z(e,t){return{type:R,mode:e,isNew:t}}function $(e){return{type:T,title:e}}function z(e){return{type:y,text:e}}function Q(e,t){return{type:C,property:e,value:t}}function J(e){return{type:_,format:e}}function ee(e){return{type:g,newType:e}}function te(e){return{type:G,url:e}}function re(){return{type:L}}function ne(e){return{type:h,service:e}}function oe(e){return{type:I,service:e}}function ae(){return{type:D}}function ue(){return{type:E}}function ie(e){return{type:d,error:e}}function ce(){return{type:p}}function le(e,t){return{type:"CATALOG:DESCRIBE_ERROR",layer:e,error:t}}var se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.zoomToLayer,n=void 0!==r&&r;return{type:l,layer:e,zoomToLayer:n}};function fe(e){return{type:A,error:e}}function Ee(e){return{type:P,metadataOptions:e}}var pe=function(e){return{type:v,metadataTemplate:e}},de=function(){return{type:U}},me=function(){return{type:w}},Ae=function(){return{type:M}},Oe=function(e){return{type:x,url:e}},Re=function(e){return{type:F,loading:e}},ve=function(e,t){return{type:B,formats:e,url:t}};function Te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,i.vU)({title:"catalog.notification.errorTitle",message:"catalog.notification.errorSearchingRecords",values:{records:e}})}var ye=function(e){return{type:k,status:e}}},921914:(e,t,r)=>{"use strict";r.d(t,{XL:()=>o,km:()=>a,Ih:()=>u,Xw:()=>i,Pn:()=>c,DZ:()=>l,e8:()=>s,E0:()=>f,F9:()=>E,X_:()=>p,pb:()=>d,qb:()=>m,Re:()=>A,ih:()=>O,xy:()=>R,jL:()=>v,oz:()=>T,ph:()=>y,lF:()=>g,gG:()=>C,cb:()=>_,GI:()=>S,B1:()=>G,fv:()=>h,gc:()=>I,zX:()=>L,ZF:()=>D,Zb:()=>N,DW:()=>P,Xp:()=>b,Fm:()=>w,sV:()=>M,Mn:()=>U,LU:()=>x,XP:()=>F,WU:()=>B,JB:()=>k,g:()=>K,ws:()=>Y,HP:()=>q,aN:()=>H,Pg:()=>V,u0:()=>j,TM:()=>X,PM:()=>Z,lK:()=>$,sv:()=>z,MO:()=>Q,oO:()=>J,Mc:()=>ee,Zw:()=>te,RA:()=>re,am:()=>ne,ZM:()=>oe,wm:()=>ae,Y$:()=>ue,Qu:()=>ie,kT:()=>ce});var n=r(647310),o="LOAD_FEATURE_INFO",a="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",i="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",l="PURGE_MAPINFO_RESULTS",s="CHANGE_MAPINFO_FORMAT",f="SHOW_MAPINFO_MARKER",E="HIDE_MAPINFO_MARKER",p="SHOW_REVERSE_GEOCODE",d="HIDE_REVERSE_GEOCODE",m="GET_VECTOR_INFO",A="NO_QUERYABLE_LAYERS",O="CLEAR_WARNING",R="FEATURE_INFO_CLICK",v="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",T="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",y="TOGGLE_MAPINFO_STATE",g="UPDATE_CENTER_TO_MARKER",C="IDENTIFY:CHANGE_PAGE",_="IDENTIFY:CLOSE_IDENTIFY",S="IDENTIFY:CHANGE_FORMAT",G="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",h="IDENTIFY:EDIT_LAYER_FEATURES",I="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",L="IDENTIFY:SET_MAP_TRIGGER",D="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",N="IDENTIFY:SET_SHOW_IN_MAP_POPUP",P="IDENTIFY:IDENTIFY_IS_MOUNTED",b="IDENTIFY:INIT_PLUGIN";function w(e,t,r,n,a){return{type:o,data:t,reqId:e,requestParams:r,layerMetadata:n,layer:a}}function M(e,t,r,n){return{type:a,error:t,reqId:e,requestParams:r,layerMetadata:n}}function U(e,t,r,n){return{type:u,reqId:e,exceptions:t,requestParams:r,layerMetadata:n}}function x(){return{type:A}}function F(){return{type:O}}function B(e,t){return{type:c,reqId:e,request:t}}function k(e,t,r,n){return{type:m,layer:e,request:t,metadata:r,queryableLayers:n}}function K(){return{type:l}}function Y(e){return{type:s,infoFormat:e}}function q(){return{type:f}}function H(){return{type:E}}function W(e){return{type:p,reverseGeocodeData:e.data}}function V(e){return function(t){n.Z.reverseGeocode(e).then((function(e){t(W(e))})).catch((function(e){t(W(e))}))}}function j(){return{type:d}}function X(){return{type:y}}function Z(e){return{type:g,status:e}}function $(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:R,point:e,layer:t,filterNameList:r,overrideParams:n,itemId:o}}function z(e){return{type:v,point:e}}function Q(e){return{type:T,enabled:e}}function J(e){return{type:C,index:e}}var ee=function(){return{type:_}},te=function(e){return{type:S,format:e}},re=function(e){return{type:G,showCoordinateEditor:e}},ne=function(e){return{type:h,layer:e}},oe=function(e){return{type:I,query:e}},ae=function(e){return{type:L,trigger:e}},ue=function(e){return{type:N,value:e}},ie=function(e){return{type:P,isMounted:e}},ce=function(e){return{type:b,cfg:e}}},659551:(e,t,r)=>{"use strict";r.d(t,{_b:()=>M,kv:()=>K,ZP:()=>H});var n=r(472500),o=r.n(n),a=r(227361),u=r.n(a),i=r(91175),c=r.n(i),l=r(610928),s=r.n(l),f=r(941106),E=r.n(f),p=r(414293),d=r.n(p),m=r(984596),A=r.n(m),O=r(441609),R=r.n(O),v=r(727418),T=r.n(v),y=r(375875),g=r.n(y),C=r(737275),_=r(986267),S=r(501157);function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){L(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==G(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==G(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===G(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,u,i=[],c=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?N(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var P=function(e){var t=o().parse(e,!0);return o().format(T()({},t,{search:null},{query:T()({service:"CSW",version:"2.0.2"},t.query,{request:void 0})}))},b="<ogc:Or>\n            <ogc:PropertyIsEqualTo>\n                <ogc:PropertyName>dc:type</ogc:PropertyName>\n                <ogc:Literal>dataset</ogc:Literal>\n            </ogc:PropertyIsEqualTo>\n            <ogc:PropertyIsEqualTo>\n                <ogc:PropertyName>dc:type</ogc:PropertyName>\n                <ogc:Literal>http://purl.org/dc/dcmitype/Dataset</ogc:Literal>\n            </ogc:PropertyIsEqualTo>\n       </ogc:Or>",w="<ogc:PropertyIsLike wildCard='%' singleChar='_' escapeChar='\\'><ogc:PropertyName>csw:AnyText</ogc:PropertyName> <ogc:Literal>%${searchText}%</ogc:Literal> </ogc:PropertyIsLike> ",M='<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gmi="http://www.isotc211.org/2005/gmi" xmlns:ows="http://www.opengis.net/ows" service="CSW" version="2.0.2" resultType="results" startPosition="${startPosition}" maxRecords="${maxRecords}"> <csw:Query typeNames="csw:Record"> <csw:ElementSetName>full</csw:ElementSetName> <csw:Constraint version="1.1.0"> <ogc:Filter> ${filterXml} </ogc:Filter> </csw:Constraint> </csw:Query> </csw:GetRecords>',U=function(e){var t=new Map(Array.from(new URLSearchParams(e.value)).map((function(e){var t=D(e,2),r=t[0],n=t[1];return[r.toLowerCase(),n]}))),r=t.get("layers"),n=t.get("version");return!!r&&I(I({},e),{},{protocol:"OGC:WMS",name:r,value:"".concat(e.value.match(/[^\?]+[\?]+/g),"SERVICE=WMS").concat(n&&"&VERSION=".concat(n))})},x=function(e,t,r){if(!t.name)return null;switch(e){case"wms":var n=0!==t.value.indexOf("http")?(r&&r.catalogURL||"")+"/"+t.value:t.value;return{type:t.protocol||t.scheme,url:n,SRS:[],params:{name:t.name}};case"arcgis":return{type:"arcgis",url:t.value,SRS:[],params:{name:t.name}};default:return null}},F=[/^OGC:WMS-(.*)-http-get-map/g,/^OGC:WMS/g],B=/serviceType\/ogc\/wms/g,k=F.concat(B),K=function(e,t){var r,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=(null==e?void 0:e.URI)&&A()(e.URI);if(a){var u=c()(a.map((function(e){if(e.protocol){if(F.some((function(t){return e.protocol.match(t)})))return e;if(e.protocol.match(B))return U(e)}return!1})).filter((function(e){return e})));if(u)return x("wms",u,t)}if(null!=e&&null!==(r=e.references)&&void 0!==r&&r.length){var i=A()(e.references),l=c()(i.filter((function(e){return e.scheme&&F.some((function(t){return e.scheme.match(t)}))})));if(l){var s=o().parse(l.value,!0),f=s.query&&s.query.layers||e.alternative;return x("wms",I(I({},l),{},{name:f}),t)}if(n){var E=c()(i.filter((function(e){return e.scheme&&"WWW:DOWNLOAD-REST_MAP"===e.scheme})));if(E)return x("arcgis",I(I({},E),{},{name:e.alternative}),t)}}return null},Y={},q={parseUrl:P,getRecordById:function(e){return new Promise((function(t){Promise.all([r.e(99942),r.e(66372)]).then(function(){t(g().get(e).then((function(e){if(e){var t=r(566372).unmarshaller.unmarshalString(e.data);if(t&&t.name&&"GetRecordByIdResponse"===t.name.localPart&&t.value&&t.value.abstractRecord){var n=t.value.abstractRecord[0].value.dcElement;if(n){for(var o={references:[]},a=0;a<n.length;a++){var u=n[a],i=u.name.localPart,c={};c="references"===i&&u.value?{value:u.value.content&&(0,C.$F)(u.value.content[0])||u.value.content||u.value,scheme:u.value.scheme}:u.value.content&&u.value.content[0]||u.value.content||u.value,o[i]&&Array.isArray(o[i])?o[i].push(c):o[i]?o[i]=[o[i],c]:o[i]=c}return{dc:o}}}else if(t&&t.name&&"ExceptionReport"===t.name.localPart)return{error:t.value.exception&&t.value.exception.length&&t.value.exception[0].exceptionText||"GenericError"};return null}return null})))}.bind(null,r)).catch(r.oe)}))},getRecords:function(e,t,n,o,a){return new Promise((function(i){Promise.all([r.e(99942),r.e(1269)]).then(function(){var l=r(566372),f=l.CSW,p=l.marshaller,m=l.unmarshaller,O=p.marshalString({name:"csw:GetRecords",value:f.getRecords(t,n,"string"!=typeof o&&o)});o&&"string"!=typeof o||(O=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.filter,a=(null==o?void 0:o.staticFilter)||b,u="<ogc:And>\n        ".concat(E()((null==o?void 0:o.dynamicFilter)||w)({searchText:r}),"\n        ").concat(a,"\n    </ogc:And>");return E()(M)({filterXml:r?u:a,startPosition:e,maxRecords:t})}(t,n,o,a)),i(g().post(P(e),O,{headers:{"Content-Type":"application/xml"}}).then((function(e){if(e){var t=m.unmarshalString(e.data);if(t&&t.name&&"GetRecordsResponse"===t.name.localPart&&t.value&&t.value.searchResults){var r,n=t.value,o=n.searchResults.abstractRecord||n.searchResults.any,i={numberOfRecordsMatched:n.searchResults.numberOfRecordsMatched,numberOfRecordsReturned:n.searchResults.numberOfRecordsReturned,nextRecord:n.searchResults.nextRecord},l=[];if(o)for(var f=0;f<o.length;f++){var E=o[f].value,p={dateStamp:E.dateStamp&&E.dateStamp.date,fileIdentifier:E.fileIdentifier&&E.fileIdentifier.characterString&&E.fileIdentifier.characterString.value,identificationInfo:E.abstractMDIdentification&&E.abstractMDIdentification.value};if(E.boundingBox){var O,v=void 0;if((O=Array.isArray(E.boundingBox)?c()(E.boundingBox):E.boundingBox)&&O.value){var T,y,g,G,h=null!==(T=null===(y=O.value)||void 0===y?void 0:y.crs)&&void 0!==T?T:"",L=null===(g=h.match(/[\w-]*:[\w-]*:[\w-]*:[\w-]*:[\w-]*:[^:]*:(([\w-]+\s[\w-]+)|[\w-]*)/))||void 0===g?void 0:g[0],N=(0,_.makeNumericEPSG)(null===(G=h.match(/EPSG:[0-9]+/))||void 0===G?void 0:G[0]),P=O.value.lowerCorner,b=O.value.upperCorner,w=N||(0,_.extractCrsFromURN)(L)||s()(h.split(":"));"EPSG:4326"===(w?"EPSG:"===w.slice(0,5)?(0,_.makeNumericEPSG)(w):(0,_.makeNumericEPSG)("EPSG:".concat(w)):"EPSG:4326")&&"CRS84"!==w&&"OGC:CRS84"!==w&&(P=[P[1],P[0]],b=[b[1],b[0]]),v=(0,_.makeBboxFromOWS)(P,b)}p.boundingBox={extent:v,crs:"EPSG:4326"}}var M=E.dcElement;if(M){for(var U={references:[]},x=0;x<M.length;x++){var F=M[x],B=F.name.localPart,q={};q="references"===B&&F.value?{value:F.value.content&&(0,C.$F)(F.value.content[0])||F.value.content||F.value,scheme:F.value.scheme}:F.value.content&&F.value.content[0]||F.value.content||F.value,U[B]&&Array.isArray(U[B])?U[B].push(q):U[B]?U[B]=[U[B],q]:U[B]=q}var H=A()(U.references.length>0?U.references:U.URI);r=r?r.concat(H):H,p.dc=U}l.push(p)}return i.records=l,function(e,t,r){if(!u()(r,"options.service.autoSetVisibilityLimits",!1))return t;var n=((null==e?void 0:e.find((function(e){return k.some((function(t){var r,n;return(null==e||null===(r=e.scheme)||void 0===r?void 0:r.match(t))||(null==e||null===(n=e.protocol)||void 0===n?void 0:n.match(t))}))})))||{}).value,o=D(n&&n.split("?")||[],1)[0];if(!o)return I({},t);var a=Y[o],i=!R()(a);return Promise.resolve(i?a:S.ZP.getCapabilities(o+"?version=").then((function(e){return u()(e,"capability.layer.layer",[])})).catch((function(){return[]}))).then((function(e){var r;return i||(Y[o]=e),I(I({},t),{},{records:null==t||null===(r=t.records)||void 0===r?void 0:r.map((function(t){var r=u()(K(null==t?void 0:t.dc,null,!1),"params.name",""),n=e.find((function(e){return e.name===r}))||{},o=n.minScaleDenominator,a=n.maxScaleDenominator;return I(I({},t),(!d()(o)||!d()(a))&&{capabilities:{MaxScaleDenominator:a,MinScaleDenominator:o}})}))})}))}(r,i,a)}if(t&&t.name&&"ExceptionReport"===t.name.localPart)return{error:t.value.exception&&t.value.exception.length&&t.value.exception[0].exceptionText||"GenericError"}}return null})))}.bind(null,r)).catch(r.oe)}))},textSearch:function(e,t,r,n,o){return new Promise((function(a){a(q.getRecords(e,t,r,n,o))}))},workspaceSearch:function(e,t,n,o,a){return new Promise((function(u){Promise.all([r.e(99942),r.e(1269)]).then(function(){var i=r(484454).Filter,c=a||"%",l=o&&"%"+o+"%"||"%",s=i.propertyIsLike("dc:identifier",c+":"+l),f=i.filter(s);u(q.getRecords(e,t,n,f))}.bind(null,r)).catch(r.oe)}))},reset:function(){}};const H=q},647310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(375875),o=r.n(n),a=r(472500),u=r.n(a),i=r(727418),c=r.n(i),l={format:"json",bounded:0,polygon_geojson:1,priority:5};const s={geocode:function(e,t){var r=c()({q:e},l,t||{}),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(e,t){var r=c()({lat:e.lat,lon:e.lng},t||{},l),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},603475:(e,t,r)=>{"use strict";r.d(t,{Z:()=>T});var n=r(375875),o=r.n(n),a=r(737275),u=r(472500),i=r.n(u),c=r(727418),l=r.n(c),s=r(505055),f=r.n(s),E=r(984596),p=r.n(E),d=r(986267),m=r(707294),A={},O=function(e){var t=i().parse(e,!0);return i().format(l()({},t,{search:null},{query:l()({SERVICE:"WMTS",VERSION:"1.0.0",REQUEST:"GetCapabilities"},t.query)}))},R=function(e,t,r,n,o){for(var a=e.Capabilities.Contents,u=(0,m.G6)(e),i=(0,m.s5)(e),c=a.TileMatrixSet&&p()(a.TileMatrixSet)||[],s=[],f=c.length,E=0;E<f;E++)s.push((0,d.getEPSGCode)(c[E]["ows:SupportedCRS"]));var A=a.Layer,O=p()(A).filter((function(e){return!n||-1!==e["ows:Identifier"].toLowerCase().indexOf(n.toLowerCase())||e["ows:Title"]&&-1!==e["ows:Title"].toLowerCase().indexOf(n.toLowerCase())}));return{numberOfRecordsMatched:O.length,numberOfRecordsReturned:Math.min(r,O.length),nextRecord:t+Math.min(r,O.length)+1,records:O.filter((function(e,n){return n>=t-1&&n<t-1+r})).map((function(e){return l()({},e,{SRS:s,TileMatrixSet:c,queryable:!!(0,m.b4)(u,"GetFeatureInfo","KVP"),requestEncoding:i,style:(0,m.EN)(e),format:(0,m.JY)(e),GetTileURL:(0,m.b4)(u,"GetTile",i),capabilitiesURL:o})}))}},v={parseUrl:O,getRecords:function(e,t,r,n){var u=A[e];return u&&(new Date).getTime()<u.timestamp+1e3*((0,a.u8)("cacheExpire")||60)?new Promise((function(o){o(R(u.data,t,r,n,e))})):o().get(O(e)).then((function(o){var a;return f().parseString(o.data,{explicitArray:!1},(function(e,t){a=t})),A[e]={timestamp:(new Date).getTime(),data:a},R(a,t,r,n,e)}))},getCapabilities:function(e){var t=A[e];return t&&(new Date).getTime()<t.timestamp+1e3*((0,a.u8)("cacheExpire")||60)?new Promise((function(e){e(t.data)})):o().get(O(e)).then((function(t){var r;return f().parseString(t.data,{explicitArray:!1},(function(e,t){r=t})),A[e]={timestamp:(new Date).getTime(),data:r},r}))},textSearch:function(e,t,r,n){return v.getRecords(e,t,r,n)},reset:function(){Object.keys(A).forEach((function(e){delete A[e]}))}};const T=v},932354:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(227361),o=r.n(n),a=r(737275),u=function(e,t,r,n){var u=o()(a.ZP.getDefaults(),"initialState.defaultState.catalog.default.staticServices.default_map_backgrounds.backgrounds").filter((function(e){return!n||e.title.indexOf(n)>-1})),i=u.filter((function(e,n){return n>=t-1&&n<r+t-1}));return new Promise((function(e){return e({numberOfRecordsMatched:u.length,numberOfRecordsReturned:i.length,records:i,service:{Name:"Background Provider"}})}))};const i={getRecords:u,reset:function(){},textSearch:function(e,t,r,n){return u(0,t,r,n)}}},31935:(e,t,r)=>{"use strict";r.d(t,{YL:()=>i,B0:()=>c,Mz:()=>l,TC:()=>s,qS:()=>f,Pe:()=>E,TP:()=>p});var n=r(22222),o=r(675110),a=r(93152),u=r(624262),i=function(e){return e.backgroundSelector&&e.backgroundSelector.source},c=function(e){return e.backgroundSelector&&e.backgroundSelector.modalParams},l=function(e){return e.backgroundSelector&&e.backgroundSelector.backgrounds||[]},s=function(e){return e.backgroundSelector&&e.backgroundSelector.lastRemovedId},f=function(e){return e.backgroundSelector&&e.backgroundSelector.confirmDeleteBackgroundModal},E=function(e){return e.backgroundSelector&&e.backgroundSelector.allowDeletion},p=(0,n.P1)(o.l2,a.$v,a.lh,(function(e,t,r){var n=e.filter((function(e){return e&&"background"===e.group}));return r&&r[t]?n.map((function(e){return(0,u.kf)(e,t)}))||[]:n}))}}]);