(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[97176],{604206:(e,t,r)=>{"use strict";r.d(t,{hZ:()=>n,pb:()=>i,kD:()=>o,DI:()=>l,IC:()=>a,iU:()=>u,W7:()=>s,Vw:()=>c,KD:()=>d,uj:()=>p,lo:()=>f,Yf:()=>y,fo:()=>F,PY:()=>E,bp:()=>m});var n="CHANGE_DRAWING_STATUS",i="DRAW:END_DRAWING",o="DRAW:SET_CURRENT_STYLE",l="DRAW:GEOMETRY_CHANGED",a="DRAW:DRAW_SUPPORT_STOPPED",u="DRAW:FEATURES_SELECTED",s="DRAW:DRAWING_FEATURES";function c(e,t,r,n,i){return{type:l,features:e,owner:t,enableEdit:r,textChanged:n,circleChanged:i}}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:u,features:e}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:s,features:e}}function f(){return{type:a}}function y(e,t,r,i,o,l){return{type:n,status:e,method:t,owner:r,features:i,options:o,style:l}}function F(e,t){return{type:i,geometry:e,owner:t}}function E(e){return{type:o,currentStyle:e}}var m=function(e){return y("clean","",e,[],{})}},807878:(e,t,r)=>{"use strict";r.d(t,{E6:()=>l,vo:()=>a,l1:()=>u,J9:()=>s,U:()=>c,z8:()=>d,ql:()=>p,O_:()=>f,M$:()=>y,Ug:()=>F,p5:()=>E,Fz:()=>m,WZ:()=>b,bP:()=>g,On:()=>O,d_:()=>_,xM:()=>v,bl:()=>I,Wi:()=>T,PN:()=>R,_M:()=>L,Wm:()=>A,Eg:()=>S,V1:()=>h,cY:()=>w,RD:()=>P,Hl:()=>D,co:()=>N,uY:()=>C,H8:()=>j,je:()=>M,go:()=>U,_8:()=>x,xd:()=>G,o7:()=>W,Nr:()=>Y,Gf:()=>H,nh:()=>V,Rf:()=>k,Xp:()=>z,D6:()=>q,Sm:()=>Z,Ef:()=>Q,jW:()=>B,kQ:()=>J,JG:()=>X,js:()=>$,q$:()=>K,OZ:()=>ee,Nc:()=>te,NV:()=>re,I5:()=>ne,QL:()=>ie,I:()=>oe,ku:()=>le,EU:()=>ae,IV:()=>ue,HT:()=>se,lg:()=>ce,ds:()=>de,VF:()=>pe,DD:()=>fe,uo:()=>ye,Ry:()=>Fe,ZH:()=>Ee,AQ:()=>me,yC:()=>be,F:()=>ge,mc:()=>Oe,uM:()=>ve,eJ:()=>Ie,uP:()=>Te,N5:()=>Re,bn:()=>Le,Bm:()=>Ae,F2:()=>Se,jR:()=>he,$J:()=>we,ln:()=>Pe});var n=r(375875),i=r.n(n);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var l="ADD_FILTER_FIELD",a="REMOVE_FILTER_FIELD",u="UPDATE_FILTER_FIELD",s="UPDATE_EXCEPTION_FIELD",c="ADD_GROUP_FIELD",d="UPDATE_LOGIC_COMBO",p="REMOVE_GROUP_FIELD",f="CHANGE_CASCADING_VALUE",y="EXPAND_ATTRIBUTE_PANEL",F="EXPAND_SPATIAL_PANEL",E="QUERYFORM:EXPAND_CROSS_LAYER",m="QUERYFORM:SET_CROSS_LAYER_PARAMETER",b="QUERYFORM:RESET_CROSS_LAYER_FILTER",g="SELECT_SPATIAL_METHOD",O="SELECT_VIEWPORT_SPATIAL_METHOD",_="UPDATE_GEOMETRY",v="SELECT_SPATIAL_OPERATION",I="CHANGE_SPATIAL_ATTRIBUTE",T="CHANGE_SPATIAL_FILTER_VALUE",R="REMOVE_SPATIAL_SELECT",L="SHOW_SPATIAL_DETAILS",A="QUERY_FORM_SEARCH",S="QUERY_FORM_RESET",h="SHOW_GENERATED_FILTER",w="CHANGE_DWITHIN_VALUE",P="ZONE_SEARCH",D="ZONE_SEARCH_ERROR",N="ZONE_FILTER",C="ZONE_CHANGE",j="ZONES_RESET",M="SIMPLE_FILTER_FIELD_UPDATE",U="ADD_SIMPLE_FILTER_FIELD",x="REMOVE_SIMPLE_FILTER_FIELD",G="REMOVE_ALL_SIMPLE_FILTER_FIELDS",W="UPDATE_FILTER_FIELD_OPTIONS",Y="LOADING_FILTER_FIELD_OPTIONS",H="QUERYFORM:ADD_CROSS_LAYER_FILTER_FIELD",V="QUERYFORM:UPDATE_CROSS_LAYER_FILTER_FIELD",k="QUERYFORM:REMOVE_CROSS_LAYER_FILTER_FIELD",z="QUERYFORM:UPDATE_CROSS_LAYER_FILTER_FIELD_OPTIONS",q="SET_AUTOCOMPLETE_MODE",Z="TOGGLE_AUTOCOMPLETE_MENU",Q="QUERYFORM:LOAD_FILTER";function B(e){return{type:l,groupId:e}}function J(e,t){return{type:c,groupId:e,index:t}}function X(e){return{type:a,rowId:e}}function $(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"filterField";return{type:Z,rowId:e,status:t,layerFilterType:r}}function K(e,t,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return{type:u,rowId:e,fieldName:t,fieldValue:r,fieldType:n,fieldOptions:i}}function ee(e,t){return{type:s,rowId:e,exceptionMessage:t}}function te(e,t){return{type:d,groupId:e,logic:t}}function re(e){return{type:q,status:e}}function ne(e){return{type:p,groupId:e}}function ie(e){return{type:f,attributes:e}}function oe(e){return{type:y,expand:e}}function le(e){return{type:F,expand:e}}function ae(e){return{type:E,expand:e}}function ue(e,t){return{type:m,key:e,value:t}}function se(e,t){return{type:g,fieldName:t,method:e}}function ce(){return{type:O}}function de(e){return{type:_,geometry:e}}function pe(e,t){return{type:v,fieldName:t,operation:e}}function fe(e){return{type:I,attribute:e}}function ye(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.feature,r=e.srsName,n=e.collectGeometries,i=e.style,o=e.options,l=e.value;return{type:T,value:l,collectGeometries:n,options:o,geometry:t&&t.geometry,feature:t,srsName:r,style:i}}function Fe(){return{type:R}}function Ee(e){return{type:L,show:e}}function me(e){return{type:w,distance:e}}function be(e,t){return{type:A,searchUrl:e,filterObj:t}}function ge(e){return{type:Q,filter:e}}function Oe(e){return{type:S,skip:e}}function _e(e,t){return{type:D,error:e,id:t}}function ve(e,t){return{type:P,active:e,id:t}}function Ie(e,t,r){return function(n){return i().post(e,t,{timeout:1e4,headers:{Accept:"application/json","Content-Type":"text/plain"}}).then((function(i){var l=i.data;if("object"!==o(l))try{l=JSON.parse(l)}catch(i){n(_e("Search result broken ("+e+":   "+t+"): "+i.message,r))}n(function(e,t){return{type:N,data:e,id:t}}(l,r)),n(ve(!1,r))})).catch((function(e){n(_e(e,r))}))}}function Te(e,t){return{type:C,id:e,value:t}}function Re(e){return{type:H,rowId:(new Date).getTime(),groupId:e}}function Le(e,t,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return{type:V,rowId:e,fieldName:t,fieldValue:r,fieldType:n,fieldOptions:i}}function Ae(e){return{type:k,rowId:e}}function Se(){return{type:b}}function he(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"filterField";return{type:Y,status:e,filterField:t,layerFilterType:r}}function we(e,t,r){return{type:W,filterField:e,options:t,valuesCount:r}}function Pe(e,t,r){return{type:z,filterField:e,options:t,valuesCount:r}}},843614:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(727418),i=r.n(n),o=r(757588),l=r(461365);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function d(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(l,e);var t,r,n,i,o=(n=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(n);if(i){var r=p(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return d(this,e)});function l(){return u(this,l),o.apply(this,arguments)}return t=l,(r=[{key:"handleDialogClick",value:function(e){e.target===e.currentTarget&&this.props.onHide(e)}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.Modal);const y=i()((0,l.Z)(f),{Body:o.Modal.Body,Dialog:o.Modal.Dialog,Footer:o.Modal.Footer,Header:o.Modal.Header,Title:o.Modal.Title})},797301:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(95797),i=r(433528),o=r(807878),l=r(782904),a=r(727418),u=r.n(a);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=function(e){return["STATE_NAME","STATE_ABBR","SUB_REGION","STATE_FIPS"].map((function(t){return{attribute:t,values:e.features.reduce((function(e,r){return-1===e.indexOf(r.properties[t])?[].concat((n=e,function(e){if(Array.isArray(e))return c(e)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),[r.properties[t]]).sort():e;var n}),[])}})).reduce((function(e,t){return u()(e,s({},t.attribute,t.values.map((function(e){return{id:e,name:e}}))))}),{})},p={featureTypes:{},data:{},result:null,resultError:null,syncWmsFilter:!1,isLayerFilter:!1};const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.S0:return u()({},e,{typeName:t.typeName,url:t.url});case n.u7:return u()({},e,{featureTypes:u()({},e.featureTypes,s({},t.typeName,t.featureType))});case n.lN:return u()({},e,{featureTypes:u()({},e.featureTypes,s({},t.typeName,{error:t.error}))});case n.yz:return u()({},e,{featureLoading:t.isLoading});case n.lj:return u()({},e,{featureLoading:!1,data:u()({},e.data,s({},t.typeName,d(t.feature)))});case n.zW:return u()({},e,{featureLoading:!1,featureTypes:u()({},e.data,s({},t.typeName,{error:t.error}))});case n.Yx:return u()({},e,{isNew:!0,searchUrl:t.searchUrl,filterObj:t.filterObj});case n.VN:return u()({},e,{filterObj:u()({},e.filterObj,t.updates)});case n.Hu:return u()({},e,{isNew:!1,result:t.result,searchUrl:t.searchUrl,filterObj:t.filterObj,resultError:null});case n.VT:return u()({},e,{isNew:!1,result:null,resultError:t.error});case l.l:case o.Eg:return t.skip&&t.skip.indexOf("query")>=0?e:u()({},e,{isNew:!1,result:null,filterObj:null,searchUrl:null});case n.RD:return u()({},e,{result:null,resultError:null});case n._T:return u()({},e,{syncWmsFilter:!e.syncWmsFilter});case i.WB:return u()({},e,{syncWmsFilter:t.syncWmsFilter});case n.vO:return u()({},e,{isLayerFilter:!e.isLayerFilter});default:return e}}},146905:(e,t,r)=>{"use strict";r.d(t,{Z:()=>T});var n=r(807878),i=r(604206),o=r(727418),l=r.n(o),a=r(819412),u=r.n(a),s=r(294707),c=r.n(s),d=r(227361),p=r.n(d),f=r(761868),y=["attribute"];function F(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function m(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v={searchUrl:null,featureTypeConfigUrl:null,showGeneratedFilter:!1,attributePanelExpanded:!0,spatialPanelExpanded:!0,crossLayerExpanded:!0,showDetailsPanel:!1,groupLevels:5,useMapProjection:!1,toolbarEnabled:!0,groupFields:[{id:1,logic:"OR",index:0}],maxFeaturesWPS:5,filterFields:[],spatialField:{method:null,attribute:"the_geom",operation:"INTERSECTS",geometry:null},simpleFilterFields:[]},I=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=l()({},t,(_(e={},r.fieldName,r.fieldValue),_(e,"type",r.fieldType),e),{fieldOptions:l()({},O({},t.fieldOptions),{currentPage:void 0===r.fieldOptions.currentPage?1:r.fieldOptions.currentPage})});return"attribute"===r.fieldName&&(n.value="string"===r.fieldType?"":null,n.operator="="),"operator"===r.fieldName&&(n.value=null),n};const T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.E6:var r={rowId:(new Date).getTime(),groupId:t.groupId,attribute:null,operator:"=",value:null,type:null,fieldOptions:{valuesCount:0,currentPage:1},exception:null};return l()({},e,{filterFields:e.filterFields?[].concat(m(e.filterFields),[r]):[r]});case n.vo:return l()({},e,{filterFields:e.filterFields.filter((function(e){return e.rowId!==t.rowId}))});case n.l1:return l()({},e,{filterFields:e.filterFields.map((function(e){return e.rowId===t.rowId?I(e,t):e}))});case n.o7:return l()({},e,{filterFields:e.filterFields.map((function(e){return e.rowId===t.filterField.rowId?l()({},e,{options:l()({},O({},e.options),_({},e.attribute,t.options))},{fieldOptions:l()({},O({},e.fieldOptions),{valuesCount:t.valuesCount})}):e}))});case n.Sm:return"filterField"===t.layerFilterType?l()({},e,{filterFields:e.filterFields.map((function(e){return e.rowId===t.rowId?l()({},e,{openAutocompleteMenu:t.status}):e}))}):(0,f.t8)("crossLayerFilter.collectGeometries.queryCollection.filterFields",(p()(e,"crossLayerFilter.collectGeometries.queryCollection.filterFields")||[]).map((function(e){return e.rowId===t.rowId?O(O({},e),{},{openAutocompleteMenu:t.status}):e})),e);case n.D6:return l()({},e,{autocompleteEnabled:t.status});case n.Nr:return"filterField"===t.layerFilterType?l()({},e,{filterFields:e.filterFields.map((function(e){return e.rowId===t.filterField.rowId?l()({},e,{loading:t.status}):e}))}):(0,f.t8)("crossLayerFilter.collectGeometries.queryCollection.filterFields",(p()(e,"crossLayerFilter.collectGeometries.queryCollection.filterFields")||[]).map((function(e){return e.rowId===t.filterField.rowId?O(O({},e),{},{loading:t.status}):e})),e);case n.J9:return l()({},e,{filterFields:e.filterFields.map((function(e){return e.rowId===t.rowId?l()({},e,{exception:t.exceptionMessage}):e}))});case n.U:var o={id:(new Date).getTime(),logic:"OR",groupId:t.groupId,index:t.index+1};return l()({},e,{groupFields:e.groupFields?[].concat(m(e.groupFields),[o]):[o]});case n.z8:return l()({},e,{groupFields:e.groupFields.map((function(e){return e.id===t.groupId?l()({},e,{logic:t.logic}):e}))});case n.ql:return l()({},e,{filterFields:e.filterFields.filter((function(e){return e.groupId!==t.groupId})),groupFields:e.groupFields.filter((function(e){return e.id!==t.groupId}))});case n.O_:return l()({},e,{filterFields:e.filterFields.map((function(e){for(var r=0;r<t.attributes.length;r++)if(e.attribute===t.attributes[r].id)return l()({},e,{value:null});return e}))});case n.M$:return l()({},e,{attributePanelExpanded:t.expand});case n.Ug:return l()({},e,{spatialPanelExpanded:t.expand});case n.p5:return l()({},e,{crossLayerExpanded:t.expand});case n.Fz:return l()({},e,{crossLayerFilter:(0,f.t8)(t.key,t.value,e.crossLayerFilter)});case n.Gf:return(0,f.vy)("crossLayerFilter.collectGeometries.queryCollection.filterFields",{rowId:t.rowId,groupId:t.groupId,attribute:null,operator:"=",value:null,type:null,fieldOptions:{valuesCount:0,currentPage:1},exception:null},{rowId:t.rowId},e);case n.nh:return(0,f.t8)("crossLayerFilter.collectGeometries.queryCollection.filterFields",(p()(e,"crossLayerFilter.collectGeometries.queryCollection.filterFields")||[]).map((function(e){return e.rowId===t.rowId?I(e,t):e})),e);case n.Rf:return(0,f.z6)("crossLayerFilter.collectGeometries.queryCollection.filterFields",{rowId:t.rowId},e);case n.WZ:return l()({},e,{crossLayerFilter:{attribute:e.crossLayerFilter&&e.crossLayerFilter.attribute}});case n.Xp:return(0,f.t8)("crossLayerFilter.collectGeometries.queryCollection.filterFields",(p()(e,"crossLayerFilter.collectGeometries.queryCollection.filterFields")||[]).map((function(e){return e.rowId===t.filterField.rowId?O(O({},e),{},{options:O(O({},e.options),{},_({},e.attribute,t.options)),fieldOptions:O(O({},e.fieldOptions),{},{valuesCount:t.valuesCount})}):e})),e);case n.bP:var a;return l()({},e,{spatialField:l()({},e.spatialField,(a={},_(a,t.fieldName,t.method),_(a,"geometry",null),a))});case n.d_:return l()({},e,{spatialField:l()({},e.spatialField,{geometry:t.geometry})},{toolbarEnabled:!0});case n.xM:return l()({},e,{spatialField:l()({},e.spatialField,_({},t.fieldName,t.operation))});case n.bl:return l()({},e,{spatialField:l()({},e.spatialField,{attribute:t.attribute}),crossLayerFilter:l()({},e.crossLayerFilter,{attribute:t.attribute})});case i.hZ:return"queryform"===t.owner&&"start"===t.status?l()({},e,{toolbarEnabled:!1}):e;case n.Wi:return l()({},e,{toolbarEnabled:!0,spatialField:l()({},e.spatialField,{value:t.value,collectGeometries:t.collectGeometries,geometry:t.srsName?O(O({},t.geometry),{},{projection:t.srsName}):t.geometry})});case i.pb:return"queryform"===t.owner?l()({},e,{toolbarEnabled:!0,spatialField:l()({},e.spatialField,{collectGeometries:t.collectGeometries,geometry:t.geometry})}):e;case n.PN:var s=l()({},v.spatialField,{attribute:e.spatialField.attribute,value:void 0});return l()({},e,{spatialField:l()({},e.spatialField,s)});case n._M:return l()({},e,{showDetailsPanel:t.show});case n.Eg:var d=l()({},v.spatialField,{attribute:e.spatialField.attribute,value:void 0}),b={attribute:e.crossLayerFilter&&e.crossLayerFilter.attribute};return l()({},e,v,{spatialField:d,crossLayerFilter:b});case n.V1:return l()({},e,{showGeneratedFilter:t.data});case n.cY:return l()({},e,{spatialField:l()({},e.spatialField,{geometry:l()({},e.spatialField.geometry,{distance:t.distance})})});case n.co:return l()({},e,{spatialField:l()({},e.spatialField,{zoneFields:e.spatialField.zoneFields.map((function(e){return e.id===t.id&&t.data.features&&t.data.features.length>0?l()({},e,{values:t.data.features,open:!0,error:null}):e}))})});case n.RD:return l()({},e,{spatialField:l()({},e.spatialField,{zoneFields:e.spatialField.zoneFields.map((function(e){return e.id===t.id?l()({},e,{busy:t.active}):e}))})});case n.uY:var g,T,R=e.spatialField.zoneFields.map((function(e){if(e.id===t.id){if(g=e.multivalue?t.value.value:t.value.value[0],t.value.feature[0]){var r=t.value.feature[0],n=r.geometry_name;if(e.multivalue&&t.value.feature.length>1){for(var i=1;i<t.value.feature.length;i++){var o=t.value.feature[i];o&&(r=u()(r,o))}T={coordinates:r.geometry.coordinates,geometryName:n,geometryType:r.geometry.type}}else T={coordinates:r.geometry.coordinates,geometryName:n,geometryType:r.geometry.type}}return l()({},e,{value:g,open:!1,geometryName:T?T.geometryName:null})}return e.dependson&&t.id===e.dependson.id?l()({},e,{disabled:!1,values:null,value:null,open:!1,dependson:l()({},e.dependson,{value:g})}):e})),L=c()({type:"FeatureCollection",features:t.value.feature});return l()({},e,{spatialField:l()({},e.spatialField,{zoneFields:R,geometry:L&&T?{extent:L,type:T.geometryType,coordinates:T.coordinates}:null})});case n.H8:return l()({},e,{spatialField:l()({},e.spatialField,{zoneFields:e.spatialField.zoneFields.map((function(e){var t=l()({},e,{values:null,value:null,open:!1,error:null});return e.dependson?l()({},t,{disabled:!0,open:!1,value:null,dependson:l()({},e.dependson,{value:null})}):t})),geometry:null})});case n.Hl:var A;return l()({},e,{spatialField:l()({},e.spatialField,{zoneFields:e.spatialField.zoneFields.map((function(e){return e.id===t.id?(A="object"!==E(t.error)?t.error.status&&t.error.statusText&&t.error.data?{status:t.error.status,statusText:t.error.statusText,data:t.error.data}:{message:t.error.message||"unknown error"}:t.error,l()({},e,{error:A,busy:!1})):e}))})});case n.je:var S=e.simpleFilterFields.reduce((function(e,r){return r.fieldId===t.id?e.push(O(O({},r),t.properties)):e.push(r),e}),[]);return O(O({},e),{},{simpleFilterFields:S});case n.go:var h=t.properties.fieldId?t.properties:O(O({},t.properties),{},{fieldId:(new Date).getTime()}),w=e.simpleFilterFields?[].concat(m(e.simpleFilterFields),[h]):[h];return O(O({},e),{},{simpleFilterFields:w});case n._8:return O(O({},e),{},{simpleFilterFields:e.simpleFilterFields.filter((function(e){return e.fieldId!==t.id}))});case n.xd:return O(O({},e),{},{simpleFilterFields:[]});case n.Ef:var P=v.spatialField,D=(P.attribute,F(P,y)),N=l()({},v,{spatialField:O({},D)}),C=t.filter||N,j=C.spatialField,M=C.filterFields,U=C.groupFields,x=C.crossLayerFilter,G=C.attributePanelExpanded,W=C.spatialPanelExpanded,Y=C.crossLayerExpanded;return O(O({},e),{attributePanelExpanded:G,spatialPanelExpanded:W,crossLayerExpanded:Y,spatialField:O(O({},j),{},{attribute:j&&j.attribute||e.spatialField&&e.spatialField.attribute}),filterFields:M,groupFields:U,crossLayerFilter:O(O({},x),{},{attribute:x&&x.attribute||e.crossLayerFilter&&e.crossLayerFilter.attribute})});default:return e}}}}]);