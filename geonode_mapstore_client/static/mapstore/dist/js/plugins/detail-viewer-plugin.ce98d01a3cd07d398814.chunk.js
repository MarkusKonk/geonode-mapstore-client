(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[5121],{32425:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(45697),l=n.n(r),a=n(67294),o=n.n(a);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){return e>100?"full":e>40?"medium":"small"},d=function(e){var t=e.size,n=e.style,r=void 0===n?{}:n,l=e.className,a=e.hidden;return o().createElement("div",{className:l,style:c({width:t,height:t,overflow:"hidden"},r)},!a&&o().createElement("div",{className:"mapstore-".concat(s(t),"-size-loader")}))};d.propTypes={size:l().number,className:l().string,style:l().object};const f=d},12610:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(67294),l=n.n(r),a=n(2479),o=n(57557),i=n.n(o),c=n(15135);const u=(0,a.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,n=e.noTooltipWhenDisabled,r=void 0!==n&&n;return!(r&&t)}),c.Z,(function(e){return function(t){return l().createElement(e,i()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},17252:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(67294),l=n.n(r),a=n(2479),o=n(45697),i=n.n(o),c=n(57557),u=n.n(c),s=n(57588),d=n(50966);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const h=(0,a.branch)((function(e){return e.popover}),(function(e){var t,n;return n=t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(f,t);var n,r,o,i,c=(o=f,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(o);if(i){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function f(){return m(this,f),c.apply(this,arguments)}return n=f,(r=[{key:"renderPopover",value:function(){return l().createElement(s.Popover,u()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,a.toClass)(e);return l().createElement(t,u()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return l().createElement("span",null,l().createElement(d.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&p(n.prototype,r),f}(l().Component),g(t,"propTypes",{popover:i().object}),g(t,"defaultProps",{popover:{trigger:!0}}),n}))},80717:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(67294),l=n.n(r),a=n(19081),o=n.n(a),i=n(57588),c=n(90085),u=["visible","Element","renderButton"];function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,n=void 0===t?[]:t,r=e.btnGroupProps,a=void 0===r?{}:r,f=e.btnDefaultProps,m=void 0===f?{}:f,p=e.transitionProps,v=void 0===p?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:p,b=function(){return n.map((function(e,t){var n=e.visible,r=void 0===n||n,a=e.Element,o=e.renderButton,i=d(e,u);return r?o||a&&l().createElement(a,s({key:i.key||t},i))||l().createElement(c.Z,s({key:i.key||t},m,i)):null}))};return l().createElement(i.ButtonGroup,a,v?l().createElement(o(),v,b()):b())}},90085:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(67294),l=n.n(r),a=n(2479),o=n(5346),i=n(57557),c=n.n(i),u=n(57588),s=n(32425),d=n(12610),f=n(17252),m=n(82467),p=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const y=(0,a.compose)(d.Z,f.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,n=e.loading,r=e.text,a=void 0===r?"":r,i=e.textId,d=e.glyphClassName,f=void 0===d?"":d,y=e.loaderProps,g=void 0===y?{}:y,h=e.children,E=b(e,p);return l().createElement(m.Z,c()(E,["pullRight","confirmNo","confirmYes"]),t&&!n?l().createElement(u.Glyphicon,{glyph:t,className:f}):null,i?l().createElement(o.Z,{msgId:i}):a,n?l().createElement(s.Z,v({className:"ms-loader".concat(E.bsStyle&&" ms-loader-"+E.bsStyle||"").concat(E.bsSize&&" ms-loader-"+E.bsSize||"")},g)):null,h)}))},25108:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(82904),l=n(27418),a=n.n(l);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.kM:var n=t.property||"enabled";return a()({},e,o({},t.control,a()({},e[t.control],o({},n,!(e[t.control]||{})[n]))));case r.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?a()({},e,o({},t.control,a()({},e[t.control],o({},t.property,void 0)))):a()({},e,o({},t.control,a()({},e[t.control],o({},t.property,t.value))));case r.dc:return a()({},e,o({},t.control,a()({},e[t.control],t.properties)));case r.l:var l=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})),i=l.reduce((function(t,n){return a()(t,o({},n,a()({},e[n],!0===e[n].enabled?{enabled:!1}:{})))}),{});return a()({},e,i);default:return e}}},56845:(e,t,n)=>{"use strict";n.d(t,{Z:()=>G});var r=n(67294),l=n.n(r),a=n(97842),o=n(93473),i=n(57588),c=n(45697),u=n.n(c),s=function(e){var t=e.itemsTab,n=e.transition,r=e.defaultActiveKey,a=t.map((function(e,t){return l().createElement(i.Tab,{key:t,eventKey:t,title:null==e?void 0:e.title},null==e?void 0:e.data)}));return l().createElement(i.Tabs,{defaultActiveKey:r,transition:n,className:"tabs-info",id:"tabs-info"},a)};s.propTypes={itemsTab:u().array,transition:u().bool,defaultActiveKey:u().number},s.defaultProps={itemsTab:[],transition:!0,defaultActiveKey:0};const d=s;var f=function(e){var t=e.itemslist,n=null==t?void 0:t.map((function(e){return e.value&&l().createElement(l().Fragment,null,l().createElement("dt",{className:"DList-cell DList-cell--medium"},l().createElement("strong",null,e.label)),l().createElement("dd",{className:"DList-cell"},e.value))}));return l().createElement("dl",{className:"DList DList--2cols"},n)};f.propTypes={itemslist:u().array},f.defaultProps={itemslist:[]};const m=f;var p=function(e){var t=e.head,n=e.body,r=null==t?void 0:t.map((function(e){return e.value&&l().createElement(l().Fragment,null,l().createElement("th",null,e.value))})),a=null==n?void 0:n.map((function(e){return l().createElement("tr",null,t.map((function(t){return l().createElement("td",null,e[t.key])})))}));return l().createElement("table",{className:"table"},l().createElement("thead",null,l().createElement("tr",null,r)),l().createElement("tbody",null,a))};p.propTypes={head:u().array,body:u().array},p.defaultProps={head:[],body:[]};const v=p;var b=n(51605),y=n(5346),g=n(15135),h=n(30381),E=n.n(h),O=n(77593),w=n(35721),j=n(23279),P=n.n(j),N=n(74855),Z=n.n(N),_=n(42090),k=n.n(_);const S=(0,r.forwardRef)((function(e,t){var n=e.text,r=e.className,a=void 0===r?"gn-text-editable":r,o=e.tagName,i=e.disabled,c=e.onEdit,u=void 0===c?function(){}:c;return l().createElement(k(),{innerRef:t,className:a,html:n,tagName:o,disabled:i,onClick:function(e){e.stopPropagation()},onChange:function(e){u(e.target.value)}})}));var I=n(14068);function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const C=function(e){var t,n,o=e.defaultImage,i=e.onEdit,c=void 0===i?function(){}:i,u=(t=(0,r.useState)(),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){i=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw l}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=u[0],d=u[1];return(0,r.useEffect)((function(){d(o)}),[]),l().createElement(l().Fragment,null,l().createElement(I.Z,{thumbnail:s,onUpdate:function(e){d(e),c(e)},message:l().createElement(y.Z,{msgId:"gnviewer.uploadImage"})}),l().createElement("div",{className:"icon-image-preview"},l().createElement(a.Z,{name:"upload"})))};var x=n(89239),T=["src","style"];function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){L(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){i=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var q=(0,g.Z)(Z()),z=function(e){var t=e.title,n=e.onEdit,r=e.tagName,a=e.disabled;return l().createElement("div",{className:"editContainer"},l().createElement(S,{tagName:r,onEdit:n,text:t,disabled:a}))},B=function(e){var t=e.abstract,n=e.onEdit,r=e.tagName,a=e.disabled;return l().createElement("div",{className:"editContainer"},l().createElement(S,{tagName:r,onEdit:n,text:t,disabled:a}))},U=function(e){var t=e.image,n=e.onEdit;return l().createElement("div",{className:"editContainer imagepreview"},l().createElement(C,{onEdit:n,defaultImage:t}))};function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return 0===e.indexOf("http")?e:window.location.href}function K(e){var t=e.src,n=e.style,a=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,T),o=Y((0,r.useState)(),2),i=o[0],c=o[1];return(0,r.useEffect)((function(){t&&!i&&c(!0)}),[t]),l().createElement("img",A({},a,{src:t,onLoad:function(){return c(!1)},onError:function(){return c(!1)},style:R(R(R({},n),i&&{backgroundColor:"transparent"}),{},{objectFit:"contain"})}))}var H=function(e){var t=e.itemslist,n=e.extraItemsList,a=Y((0,r.useState)(!1),2),o=a[0],i=a[1];return l().createElement("div",{className:"DList-containner"},l().createElement(m,{itemslist:t}),n.length>0&&l().createElement("a",{className:"moreinfo",href:"javascript:void(0);",onClick:function(){i(!o)}},l().createElement(y.Z,{msgId:"gnviewer.moreinfo"})),n.length>0&&o&&l().createElement(m,{itemslist:n}))};function $(e){var t,n,i,c,u,s,f,m,p,g,h,w,j,N,Z=e.resource,_=e.formatHref,k=e.linkHref,S=e.sectionStyle,I=e.loading,D=e.getTypesInfo,C=e.editTitle,T=e.editAbstract,A=e.editThumbnail,M=e.activeEditMode,R=e.closePanel,L=e.favorite,F=e.onFavorite,$=e.enableFavorite,G=(0,r.useRef)(),W=(0,r.useRef)(),X=Y((0,r.useState)(!1),2),Q=X[0],J=X[1];if((0,r.useEffect)((function(){return W.current=!0,function(){W.current=!1}}),[]),!Z&&!I)return null;var ee=D(),te=Z&&(ee[Z.subtype]||ee[Z.resource_type])||{},ne=te.formatEmbedUrl,re=void 0===ne?function(e){return null==e?void 0:e.embed_url}:ne,le=te.formatDetailUrl,ae=void 0===le?function(e){return null==e?void 0:e.detail_url}:le,oe=te.icon,ie=te.name,ce=(null==Z?void 0:Z.embed_url)&&re(Z),ue=(null==Z?void 0:Z.pk)&&ae(Z),se=null!=Z&&Z.href&&null!=Z&&Z.href.includes("download")?null==Z?void 0:Z.href:void 0,de=null==Z?void 0:Z.attribute_set,fe=[{label:"Title",value:null==Z?void 0:Z.title},{label:"Abstract",value:null==Z?void 0:Z.raw_abstract},{label:"Owner",value:l().createElement("a",{href:"/people/profile/".concat(null==Z||null===(t=Z.owner)||void 0===t?void 0:t.username,"/")}," ",null==Z||null===(n=Z.owner)||void 0===n?void 0:n.username," ")},{label:"Created",value:E()(null==Z?void 0:Z.created).format("MMMM Do YYYY")},{label:"Published",value:E()(null==Z?void 0:Z.date).format("MMMM Do YYYY")},{label:"Last Modified",value:E()(null==Z?void 0:Z.last_updated).format("MMMM Do YYYY")},{label:"Resource Type",value:l().createElement("a",{href:_({pathname:"/search/filter/",query:{f:null==Z?void 0:Z.resource_type}})},null==Z?void 0:Z.resource_type)},{label:"Category",value:l().createElement("a",{href:_({pathname:"/search/filter/",query:{"filter{category.identifier.in}":null===(i=Z.category)||void 0===i?void 0:i.identifier}})},null===(c=Z.category)||void 0===c?void 0:c.identifier)},{label:"Keywords",value:null==Z||null===(u=Z.keywords)||void 0===u?void 0:u.map((function(e){return l().createElement("a",{href:_({pathname:"/search/filter/",query:{"filter{keywords.slug.in}":e.slug}})},e.name+" ")}))},{label:"Regions",value:null==Z||null===(s=Z.regions)||void 0===s?void 0:s.map((function(e){return l().createElement("a",{href:_({pathname:"/search/filter/",query:{"filter{regions.name.in}":e.name}})},e.name+" ")}))}],me=[{label:"Point of Contact",value:l().createElement("a",{href:"/messages/create/".concat(null==Z||null===(f=Z.owner)||void 0===f?void 0:f.pk,"/")}," ",(null==Z||null===(m=Z.poc)||void 0===m?void 0:m.first_name)+(null==Z||null===(p=Z.poc)||void 0===p?void 0:p.last_name)||(null==Z||null===(g=Z.poc)||void 0===g?void 0:g.username)," ")},{label:"License",value:null==Z||null===(h=Z.license)||void 0===h?void 0:h.name_long},{label:"Attribution",value:null==Z?void 0:Z.attribution},{label:"Restriction",value:null==Z||null===(w=Z.restriction_code_type)||void 0===w?void 0:w.identifier},{label:"Edition",value:null==Z?void 0:Z.edition},{label:"Maintenance Frequency",value:null==Z?void 0:Z.maintenance_frequency},{label:"Language",value:null==Z?void 0:Z.language},{label:"Purpose",value:null==Z?void 0:Z.raw_purpose},{label:"Data Quality",value:null==Z?void 0:Z.raw_data_quality_statement},{label:"Temporal extent",value:null!=Z&&Z.temporal_extent_start?(null==Z?void 0:Z.temporal_extent_start)+" - ":void 0+(null==Z?void 0:Z.temporal_extent_end)?null==Z?void 0:Z.temporal_extent_end:void 0},{label:"Spatial Representation Type",value:null==Z||null===(j=Z.spatial_representation_type)||void 0===j?void 0:j.identifier},{label:"Supplemental Information",value:null==Z?void 0:Z.raw_supplemental_information}],pe=[{title:l().createElement(y.Z,{msgId:"gnviewer.info"}),data:l().createElement(H,{itemslist:fe,extraItemsList:me})}],ve=[{key:"attribute",value:l().createElement(y.Z,{msgId:"gnviewer.attributeName"})},{key:"attribute_label",value:l().createElement(y.Z,{msgId:"gnviewer.label"})},{key:"description",value:l().createElement(y.Z,{msgId:"gnviewer.description"})}];return de&&pe.push({title:l().createElement(y.Z,{msgId:"gnviewer.attributes"}),data:l().createElement(v,{head:ve,body:de})}),l().createElement("div",{ref:G,className:"gn-details-panel".concat(I?" loading":""),style:{width:null==S?void 0:S.width}},l().createElement("section",{style:S},l().createElement("div",{className:"gn-details-panel-header"},l().createElement(o.Z,{variant:"default",href:k(),onClick:R,size:"sm"},l().createElement(a.Z,{name:"times"}))),!M&&!A&&l().createElement("div",{className:"gn-details-panel-preview"},l().createElement("div",{className:"gn-loader-placeholder",style:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},l().createElement(a.Z,{name:oe})),ce?l().createElement("iframe",{key:ce,src:ce,style:{position:"absolute",width:"100%",height:"100%"},frameBorder:"0"}):ce||A?void 0:l().createElement(K,{src:null==Z?void 0:Z.thumbnail_url,style:{position:"absolute",width:"100%",height:"100%",top:0,left:0,backgroundColor:"inherit"}}),I&&l().createElement("div",{className:"gn-details-panel-preview-loader",style:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center"}},l().createElement(b.Z,{animation:"border",role:"status"},l().createElement("span",{className:"sr-only"},"Loading resource detail...")))),l().createElement("div",{className:"gn-details-panel-content"},A&&l().createElement("div",{className:"gn-details-panel-content-img"},!M&&l().createElement(K,{src:null==Z?void 0:Z.thumbnail_url}),M&&l().createElement("div",{className:"gn-details-panel-preview inediting"}," ",l().createElement(U,{onEdit:A,image:null==Z?void 0:Z.thumbnail_url})," ")),l().createElement("div",{className:"gn-details-panel-content-text"},l().createElement("div",{className:"gn-details-panel-title"},l().createElement("span",{className:"gn-details-panel-title-icon"},l().createElement(a.Z,{name:oe})," ")," ",l().createElement(z,{disabled:!M,tagName:"h1",title:null==Z?void 0:Z.title,onEdit:C}),l().createElement("div",{className:"gn-details-panel-tools"},$&&l().createElement(o.Z,{variant:"default",onClick:P()((function(){F(!L)}),500)},l().createElement(a.Z,{name:L?"star":"star-o"})),se&&l().createElement(o.Z,{variant:"default",href:se},l().createElement(a.Z,{name:"download"})),ue&&l().createElement(q,{tooltipPosition:"top",tooltipId:Q?"gnhome.copiedResourceUrl":"gnhome.copyResourceUrl",text:V(ue)},l().createElement(o.Z,{variant:"default",onClick:function(){J(!0),setTimeout((function(){W.current&&J(!1)}),700)}},l().createElement(a.Z,{name:"share-alt"}))),ue&&!A&&l().createElement(o.Z,{variant:"default",href:ue,rel:"noopener noreferrer"},l().createElement(y.Z,{msgId:"gnhome.view".concat(ie||"")})))),l().createElement(x.Z,{resource:Z}),l().createElement("p",null,(null==Z?void 0:Z.owner)&&l().createElement(l().Fragment,null,l().createElement("a",{href:_({pathname:C&&"/search/filter/",query:{"filter{owner.username.in}":Z.owner.username}})},(0,O.vW)(Z.owner))),(null==Z?void 0:Z.date_type)&&(null==Z?void 0:Z.date)&&l().createElement(l().Fragment,null," ","/"," ",E()(Z.date).format("MMMM Do YYYY"))),l().createElement(B,{disabled:!M,tagName:"span",abstract:null==Z?void 0:Z.abstract,onEdit:T}),l().createElement("p",null,(null==Z||null===(N=Z.category)||void 0===N?void 0:N.identifier)&&l().createElement("div",null,l().createElement(y.Z,{msgId:"gnhome.category"}),":"," ",l().createElement("a",{href:_({pathname:C&&"/search/filter/",query:{"filter{category.identifier.in}":Z.category.identifier}})},Z.category.identifier))))),C&&l().createElement("div",{className:"gn-details-panel-info"},l().createElement(d,{itemsTab:pe}))))}$.defaultProps={onClose:function(){},formatHref:function(){return"#"},linkHref:function(){return"#"},width:696,getTypesInfo:w.NN};const G=$},824:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(67294),l=n.n(r);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const c=(0,r.forwardRef)((function(e,t){var n=e.enabled,r=e.style,a=e.children;return n?l().createElement("div",{ref:t,className:"gn-overlay-container",style:o({position:"relative",width:"100%",height:"100%"},r)},a):null}))},99469:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(67294),l=n.n(r),a=n(5346),o=n(45697),i=n.n(o),c=n(41609),u=n.n(c),s=n(35721),d=function(e){var t=e.resource,n=void 0===t?{}:t,r=(0,s.fu)(n),o=r.isApproved,i=r.isPublished,c=r.isProcessing,d=r.isCopying,f=r.isDeleting,m=r.isDeleted;return u()(n)?null:l().createElement("p",null,!c&&!o&&l().createElement("span",{className:"gn-resource-status gn-resource-status-warning"},l().createElement(a.Z,{msgId:"gnviewer.underApproval"})),!c&&!i&&l().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},l().createElement(a.Z,{msgId:"gnviewer.unpublish"})),f&&l().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},l().createElement(a.Z,{msgId:"gnviewer.deleting"})),m&&l().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},l().createElement(a.Z,{msgId:"gnviewer.deleted"})),d&&l().createElement("span",{className:"gn-resource-status gn-resource-status-primary"},l().createElement(a.Z,{msgId:"gnviewer.cloning"})))};d.propTypes={isApproved:i().bool,isPublished:i().bool},d.defaultProps={isApproved:!0,isPublished:!0};const f=d},89239:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r.Z});var r=n(99469)},28261:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),l=n.n(r),a=n(45697),o=n.n(a),i=["id","className","style","children"];function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){var t=e.id,n=e.className,r=e.style,a=e.children,o=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,i),u=n?" "+n:"";return l().createElement(l().Fragment,null,l().createElement("div",c({},o,{id:t,className:"gn-spinner".concat(u),style:r}),l().createElement("div",null)),a)}u.propTypes={id:o().string,className:o().string,style:o().object},u.defaultProps={};const s=u},51605:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r.Z});var r=n(28261)},94228:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var r=n(67294),l=n.n(r),a=n(22843),o=n(33664),i=n(22222),c=n(56845),u=n(74621),s=n(43892),d=n(25108),f=n(82904),m=n(72036),p=n(5346),v=n(3828),b=n(93473),y=n(45697),g=n.n(y);var h=n(824),E=n(5803),O=n(77593);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=(0,o.connect)((0,i.P1)([function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.data)||null},function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.loading)||!1},function(e){var t,n;return(null==e||null===(t=e.gnresource)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.favorite)||!1}],(function(e,t,n){return{resource:e,loading:t,favorite:n}})),{closePanel:f.Xg.bind(null,"rightOverlay","enabled",!1),onFavorite:s.gw})(c.Z),N=(0,o.connect)((0,i.P1)([v.V$,v.fg],(function(e,t){return{hide:e||!t}})),{onClick:f.Xg.bind(null,"rightOverlay","enabled","DetailViewer")})((function(e){var t=e.onClick,n=e.hide,r=e.variant,a=e.size;return n?null:l().createElement(b.Z,{variant:r,size:a,onClick:function(){t()}}," ",l().createElement(p.Z,{msgId:"gnviewer.details"}))}));function Z(e){var t=e.location,n=e.enabled,a=e.onEditResource,o=e.onEditAbstractResource,i=e.onEditThumbnail,c=e.canEdit,u=e.width,s=e.hide,d=e.user,f=e.onClose,m=function(e){var t=e.disabled,n=e.onClickOut,l=(0,r.useRef)();return(0,r.useEffect)((function(){function e(e){var r;!t&&(null==l||null===(r=l.current)||void 0===r?void 0:r.contains)&&!l.current.contains(e.target)&&n()}return window.addEventListener("mousedown",e),function(){window.removeEventListener("mousedown",e)}}),[t,l,n]),l}({disabled:!n,onClickOut:function(){f()}});return s?null:l().createElement(h.Z,{enabled:n,ref:m,style:{width:u}},l().createElement(P,{editTitle:function(e){a(e)},editAbstract:function(e){o(e)},editThumbnail:function(e){i(e)},activeEditMode:n&&c,enableFavorite:!!d,formatHref:function(e){return(0,O.nz)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({location:t},e))}}))}Z.propTypes={width:g().number},Z.defaultProps={width:800};var _=(0,o.connect)((0,i.P1)([function(e){var t,n;return"DetailViewer"===(null==e||null===(t=e.controls)||void 0===t||null===(n=t.rightOverlay)||void 0===n?void 0:n.enabled)},v.il,v.V$,v.fg,u.np],(function(e,t,n,r,l){return{enabled:e,canEdit:t,hide:n||!r,user:l}})),{onEditResource:s.Br,onEditAbstractResource:s.bI,onEditThumbnail:s.U5,onClose:f.Xg.bind(null,"rightOverlay","enabled",!1)})((0,E.EN)(Z));const k=(0,a.rx)("DetailViewer",{component:_,containers:{ViewerLayout:{name:"DetailViewer",target:"rightOverlay",priority:1},ActionNavbar:{name:"DetailViewerButton",Component:N,priority:1}},epics:{},reducers:{gnresource:m.Z,controls:d.Z}})}}]);