(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[29389],{604206:(e,t,r)=>{"use strict";r.d(t,{hZ:()=>n,pb:()=>o,kD:()=>i,DI:()=>u,IC:()=>c,iU:()=>a,W7:()=>l,Vw:()=>f,KD:()=>s,uj:()=>p,lo:()=>d,Yf:()=>b,fo:()=>y,PY:()=>g,bp:()=>v});var n="CHANGE_DRAWING_STATUS",o="DRAW:END_DRAWING",i="DRAW:SET_CURRENT_STYLE",u="DRAW:GEOMETRY_CHANGED",c="DRAW:DRAW_SUPPORT_STOPPED",a="DRAW:FEATURES_SELECTED",l="DRAW:DRAWING_FEATURES";function f(e,t,r,n,o){return{type:u,features:e,owner:t,enableEdit:r,textChanged:n,circleChanged:o}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:a,features:e}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:l,features:e}}function d(){return{type:c}}function b(e,t,r,o,i,u){return{type:n,status:e,method:t,owner:r,features:o,options:i,style:u}}function y(e,t){return{type:o,geometry:e,owner:t}}function g(e){return{type:i,currentStyle:e}}var v=function(e){return b("clean","",e,[],{})}},656903:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(124852),o=r.n(n),i=r(757588),u=r(282467),c=["disabled","id","visible","onClick","glyph","active","className"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}var l={width:0,padding:0,borderWidth:0},f={},s=function(e){return e?f:l};const p=(0,n.forwardRef)((function(e,t){var r=e.disabled,n=e.id,l=e.visible,f=e.onClick,p=e.glyph,d=e.active,b=e.className,y=void 0===b?"square-button-md":b,g=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,c);return o().createElement(u.Z,a({ref:t},g,{bsStyle:d?"success":"primary",disabled:r,id:"fg-".concat(n),style:s(l),className:y,onClick:function(){return!r&&f()}}),o().createElement(i.Glyphicon,{glyph:p}))}))},859912:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Z});var n=r(124852),o=r.n(n),i=r(675263),u=r.n(i),c=r(49977),a=r.n(c),l=r(557579),f=r(433528),s=r(604206),p=r(807878),d=r(782904),b=r(580416),y=r(275982),g=r(95797),v=r(401757),O=r(824260),m=r(607147);function h(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T=function(e){var t=(0,v.GW)(e);return[t.search&&t.search.url,t.name]};const E={openWidgetEditor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(l.AE,l.dm,l.IT).filter((function(){return(0,m.PJ)(n())})).switchMap((function(){return a().Observable.of((0,d.Xg)("widgetBuilder","enabled",!0),(0,d.Xg)("metadataexplorer","enabled",!1))}))},closeWidgetEditorOnFinish:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(l.Jm,b.oE).filter((function(){return(0,m.PJ)(n())})).switchMap((function(){return a().Observable.of((0,d.Xg)("widgetBuilder","enabled",!1))}))},initEditorOnNew:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(l.AE).filter((function(){return(0,m.PJ)(n())})).switchMap((function(e){return a().Observable.of((0,l.bS)(P(P({legend:!1,mapSync:!0,cartesian:!0,yAxis:!0},e),{},{type:void 0}),{step:0}))}))},initEditorOnNewChart:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(l.IT).filter((function(){return(0,m.PJ)(n())})).switchMap((function(e){return a().Observable.of((0,f.YV)(),(0,l.bS)(P(P({legend:!1,mapSync:!0,cartesian:!0,yAxis:!0,widgetType:"chart",filter:(0,O.X1)(n())},e),{},{type:void 0}),{step:0}),(0,l.Rz)("returnToFeatureGrid",!0))}))},handleWidgetsFilterPanel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(l.lG).filter((function(){return(0,m.PJ)(n())})).switchMap((function(){return a().Observable.of(g.gT.apply(void 0,h(T(n()))),(0,p.F)((0,v.um)(n())),(0,d.Xg)("widgetBuilder","enabled",!1),(0,d.Xg)("queryPanel","enabled",!0)).concat(a().Observable.race(e.ofType(p.Wm).take(1),e.ofType(d.kM).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.control,r=e.property;return"queryPanel"===t&&(!r||"enabled"===r)})).take(1)).switchMap((function(e){return(e.filterObj?a().Observable.of((0,l.Rz)("filter",e.filterObj)):a().Observable.empty()).merge(a().Observable.of((0,d.Xg)("widgetBuilder","enabled",!0)))}))).takeUntil(e.ofType(y.nk,l.dm).merge(e.ofType(d.kM).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.control,r=e.property;return"widgetBuilder"===t&&0==!r})))).concat(a().Observable.of((0,s.bp)(),(0,d.Xg)("queryPanel","enabled",!1)))}))}};var k=r(322843),D=r(416919),C=r(171703),W=r(22222),q=r(867076),A=r(55105);const R=(0,q.compose)((0,C.connect)((function(e){return{returnToFeatureGrid:(0,v.Wo)(e)}}),{backToWidgetList:function(){return(0,l.Rz)("widgetType",void 0)},closeWidgetBuilder:function(){return(0,d.Xg)("widgetBuilder","enabled",!1,!1)},openFeatureGridTable:function(){return(0,f.t9)()}}),(0,q.withHandlers)({backFromWizard:function(e){var t=e.backToWidgetList,r=void 0===t?function(){}:t,n=e.closeWidgetBuilder,o=void 0===n?function(){}:n,i=e.openFeatureGridTable,u=void 0===i?function(){}:i,c=e.returnToFeatureGrid;return function(){c?(o(),u()):r()}}}),(0,q.withProps)((function(e){var t=e.returnToFeatureGrid,r=e.backFromWizard;return{exitButton:{onClick:void 0===r?function(){}:r,glyph:"arrow-left",tooltipId:t?"widgets.builder.wizard.backToFeatureGrid":"widgets.builder.wizard.backToWidgetTypeSelection"}}})));var F=r(704876),_=r(656903);const I=(0,C.connect)((function(){return{}}),{onClick:function(){return(0,l.C2)()}})((function(e){var t=e.disabled,r=e.mode,n=e.onClick,i=void 0===n?function(){}:n;return o().createElement(_.Z,{id:"grid-map-chart",keyProp:"grid-map-chart",tooltipId:"featuregrid.toolbar.createNewChart",disabled:t,visible:"VIEW"===r,onClick:i,glyph:"stats"})}));function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function G(e,t){if(t&&("object"===M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){H(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L=(0,q.compose)((0,C.connect)((0,W.P1)(v.h9,v.zA,(function(e,t){return X({dependencies:e},t)})),{toggleConnection:l.w2}),R)(F.Z),J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(c,e);var t,r,n,i,u=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(n);if(i){var r=N(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return G(this,e)});function c(){return x(this,c),u.apply(this,arguments)}return t=c,r=[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnmount()}},{key:"render",value:function(){return o().createElement(D.Z,{open:this.props.enabled,size:this.props.dockSize,zIndex:this.props.zIndex,position:this.props.position,bsStyle:"primary",hideHeader:!0,style:X(X({},this.props.layout),{},{background:"white"})},o().createElement(L,{enabled:this.props.enabled,onClose:this.props.onClose,typeFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type;return"map"!==t&&"legend"!==t}}))}}],r&&z(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o().Component);H(J,"propTypes",{id:u().string,enabled:u().bool,limitDockHeight:u().bool,fluid:u().bool,zIndex:u().number,dockSize:u().number,position:u().string,onMount:u().func,onUnmount:u().func,onClose:u().func,dimMode:u().string,src:u().string,style:u().object,layout:u().object}),H(J,"defaultProps",{id:"widgets-builder-plugin",enabled:!1,dockSize:500,limitDockHeight:!0,zIndex:1e4,fluid:!1,dimMode:"none",position:"left",onMount:function(){},onUnmount:function(){},onClose:function(){},layout:{}});var Y=(0,C.connect)((0,W.P1)(m.dH,(function(e){return(0,A.ic)(e,{height:!0})}),(function(e,t){return{enabled:e,layout:t}})),{onMount:function(){return(0,d.Xg)("widgetBuilder","available",!0)},onUnmount:function(){return(0,d.Xg)("widgetBuilder","available",!1)},onClose:d.Xg.bind(null,"widgetBuilder","enabled",!1,!1)})(J);const Z=(0,k.rx)("WidgetsBuilder",{component:Y,epics:E,containers:{TOC:{doNotHide:!0,name:"WidgetBuilder"},FeatureEditor:{doNotHide:!0,target:"toolbar",position:21,Component:I}}})},824260:(e,t,r)=>{"use strict";r.d(t,{qj:()=>O,Bu:()=>m,UM:()=>h,X1:()=>w,L:()=>j,HY:()=>P,Mz:()=>S,F0:()=>T,dc:()=>E,b0:()=>k,hk:()=>D,Qs:()=>C,gy:()=>W,M7:()=>q,VD:()=>A});var n=r(414293),o=r.n(n),i=r(227361),u=r.n(i),c=r(91175),a=r.n(c),l=r(701469),f=r.n(l),s=r(630998),p=r.n(s);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){return u()(e,"query.filterObj.featureTypeName")},v=function(e){return function(t){return u()(t,'query.featureTypes["'.concat(e,'"]'))}},O=function(e,t){return u()(v(t)(e),"original")},m=function(e){return e&&e.query&&e.query.searchUrl},h=function(e){return e&&e.query&&e.query.url},w=function(e){return e&&e.query&&e.query.filterObj},j=function(e){return u()(v(g(e))(e),"attributes")},P=function(e){return u()(e,"query.typeName")},S=function(e){return u()(e,"query.result.features")},T=function(e){var t=u()(e,"query.result");return b(b({},t),{},{features:(t&&t.features||[]).filter((function(e){return!o()(e.geometry)}))})},E=function(e,t){var r=e&&e.query&&e.query.result&&e.query.result.features;return a()(r.filter((function(e){return e.id===t})))},k={startIndex:function(e){return u()(e,"query.filterObj.pagination.startIndex")},maxFeatures:function(e){return u()(e,"query.filterObj.pagination.maxFeatures")},resultSize:function(e){return u()(e,"query.result.features.length")},totalFeatures:function(e){return u()(e,"query.result.totalFeatures")}},D=function(e,t){var r=v(t)(e);return!!(r&&r.attributes&&r.geometry&&r.original)},C=function(e){return O(e,g(e))},W=function(e){return u()(e,"query.featureLoading")},q=function(e){return u()(e,"query.syncWmsFilter",!1)},A=function(e){var t=u()(e,"query.filterObj.crossLayerFilter"),r=u()(e,"query.filterObj.spatialField"),n=u()(e,"query.filterObj.filterFields");return!!(n&&a()(n)||r&&(r.method&&r.operation&&r.geometry||f()(r)&&p()(r,(function(e){return e.method&&e.operation&&e.geometry}))>-1)||t&&t.collectGeometries&&t.operation)}}}]);