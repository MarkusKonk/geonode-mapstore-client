(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[50337],{306504:(t,e,r)=>{"use strict";r.d(e,{Z:()=>d});var n=r(124852),o=r.n(n),i=r(675263),u=r.n(i);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l.apply(this,arguments)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,b(n.key),n)}}function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},f(t,e)}function s(t,e){if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return p(t)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}function m(t,e,r){return(e=b(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function b(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===a(e)?e:String(e)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(a,t);var e,r,n,i,u=(n=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(n);if(i){var r=y(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return s(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),m(p(e=u.call(this,t)),"state",{inputText:""}),m(p(e),"validateValue",(function(t){return!e.props.formatRegex||new RegExp(e.props.formatRegex).test(t)})),e.state={inputText:t.value},e.inputRef=o().createRef(),e}return e=a,(r=[{key:"componentDidMount",value:function(){var t,e;null===(t=(e=this.props).onTemporaryChanges)||void 0===t||t.call(e,!0)}},{key:"componentWillUnmount",value:function(){var t,e;null===(t=(e=this.props).onTemporaryChanges)||void 0===t||t.call(e,!1)}},{key:"getValue",value:function(){return m({},this.props.column.key,this.validateValue(this.state.inputText)?this.state.inputText:this.props.value)}},{key:"getInputNode",value:function(){return this.inputRef.current}},{key:"render",value:function(){var t=this;return o().createElement("input",l({},this.props.inputProps,{style:!this.state.validated||this.state.isValid?{}:{borderColor:"red"},value:this.state.inputText,ref:this.inputRef,className:"form-control",defaultValue:this.props.value,onChange:function(e){t.setState({inputText:e.target.value,isValid:t.validateValue(e.target.value),validated:!0})}}))}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(o().Component);m(d,"propTypes",{value:u().string,inputProps:u().object,dataType:u().string,column:u().object,formatRegex:u().string,onTemporaryChanges:u().func}),m(d,"defaultProps",{dataType:"string",column:{}})},750337:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>G});var n=r(124852),o=r.n(n),i=r(480681),u=r(867076),a=r(378889),l=r(753370),c=r.n(l),f=r(984596),s=r.n(f),p=r(264721),y=r.n(p),m=r(545578),b=r.n(m),d=r(441609),v=r.n(d),h=r(805346),g=r(306504);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){S(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function S(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==w(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===w(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function P(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(t,e)||T(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||T(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(t,e){if(t){if("string"==typeof t)return x(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(t,e):void 0}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var C=function(t,e,r){var n=s()(e);return r?t.filter((function(t){return!y()(n,t.name)})):b()([].concat(E(t),E(n.map((function(t){return{name:t}})))),"name")},R=function(t,e){return Array.from({length:e+1-t},(function(e,r){return r+t}))},k=function(t){return o().createElement(g.Z,{dataType:"string",formatRegex:t})},N=[{name:"Name",key:"attribute",width:120},{name:"Title",key:"title",editor:k("^[-@.\\/#&+\\w\\s*]{0,100}$"),width:120,editable:function(t){return!(null!=t&&t.hide)}},{name:"Description",key:"description",editor:k("^[-@.,\\/#&+\\w\\s*]{0,200}$"),width:150,editable:function(t){return!(null!=t&&t.hide)}}],D=r(327605),_=r(142778),I=r(38560);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function Z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function V(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(r),!0).forEach((function(e){z(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function z(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==A(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===A(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var B=(0,u.compose)((0,u.withProps)((function(t){var e,r=t.options,n=void 0===r?{}:r;return{options:{propertyName:null===(e=(null==n?void 0:n.propertyName)||[])||void 0===e?void 0:e.map((function(t){return"string"==typeof t?{name:t}:t}))}}})),(0,u.withProps)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.attributes,r=void 0===e?[]:e,n=t.options,o=void 0===n?{}:n;return{attributes:r.filter((function(t){return!(0,a.isGeometryType)(t)})).map((function(t){var e,r,n=null==o||null===(e=o.propertyName)||void 0===e?void 0:e.map((function(t){return t.name})),i=null==o||null===(r=o.propertyName)||void 0===r?void 0:r.find((function(e){return e.name===t.name}));return V(V({},t),{},{label:t.name,attribute:t.name,hide:(null==n?void 0:n.indexOf(t.name))<0,title:(null==i?void 0:i.title)||"",description:(null==i?void 0:i.description)||""})}))}})),(0,_.Z)((function(t){var e=t.attributes;return 0===(void 0===e?[]:e).length})))((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.style,r=void 0===e?{}:e,n=t.titleMsg,i=void 0===n?"featuregrid.columns":n,u=t.onChange,a=void 0===u?function(){}:u,l=t.attributes,f=void 0===l?[]:l,s=t.options,p=void 0===s?{}:s,y=function(t){return f[t]},m=function(t){var e=t.fromRow,r=t.toRow,n=t.updated,o=P(R(e,r).map((function(t){return y(t)})).filter((function(t){return Object.keys(n||{}).filter((function(e){return t[e]!==n[e]})).length>0})),1)[0],i=(o=void 0===o?{}:o).name;!v()(i)&&a("options.propertyName",p.propertyName.map((function(t){return i===t.name?j(j({},t),n):t})))},b=function(t,e){a("options.propertyName",C(p&&p.propertyName||[],t,e))};return o().createElement("div",{className:"bg-body data-attribute-selector",style:r},o().createElement("h4",{className:"text-center"},o().createElement("strong",null,o().createElement(h.Z,{msgId:i}))),o().createElement(c(),{rowKey:"id",columns:N,enableCellSelect:!0,rowGetter:y,rowsCount:f.length,onGridRowsUpdated:m,rowSelection:{showCheckbox:!0,enableShiftSelect:!0,onRowsSelected:function(t){return b(t.map((function(t){return f[t.rowIdx].name})),!1)},onRowsDeselected:function(t){return b(t.map((function(t){return f[t.rowIdx].name})),!0)},selectBy:{indexes:f.reduce((function(t,e,r){return[].concat(E(t),E(e.hide?[]:[r]))}),[])}}}))}));const G=function(t){var e=t.data,r=void 0===e?{options:{}}:e,n=t.onChange,u=void 0===n?function(){}:n,a=t.featureTypeProperties,l=t.sampleChart;return o().createElement(i.Row,null,o().createElement(D.Z,{title:o().createElement(h.Z,{msgId:"widgets.builder.wizard.configureTableOptions"})}),o().createElement(i.Col,{xs:12},o().createElement("div",null,l)),o().createElement(i.Col,{xs:12},o().createElement(i.Form,{className:"chart-options-form",horizontal:!0},o().createElement(B,{options:r.options,onChange:u,attributes:a}),r.options&&r.options.columnSettings?o().createElement(I.Z,{style:{float:"right"},onClick:function(){return u("options.columnSettings",void 0)}},o().createElement(h.Z,{msgId:"widgets.builder.wizard.resetColumnsSizes"})):null)))}}}]);