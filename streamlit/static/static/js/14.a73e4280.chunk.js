/*! For license information please see 14.a73e4280.chunk.js.LICENSE.txt */
(this["webpackJsonpstreamlit-browser"]=this["webpackJsonpstreamlit-browser"]||[]).push([[14],{1517:function(e,t,r){"use strict";var n,o=r(0),i=r.n(o),a=r(19),s="small",c="medium",u="large",l=r(30),d=r(89);function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){var t;return(t={},m(t,s,"2px"),m(t,c,"4px"),m(t,u,"8px"),t)[e]}var y=Object(l.a)("div",(function(e){return{width:"100%"}}));y.displayName="StyledRoot",y.displayName="StyledRoot";var g=Object(l.a)("div",(function(e){var t=e.$theme.sizing;return{display:"flex",marginLeft:t.scale500,marginRight:t.scale500,marginTop:t.scale500,marginBottom:t.scale500}}));g.displayName="StyledBarContainer",g.displayName="StyledBarContainer";var b=Object(l.a)("div",(function(e){var t=e.$theme,r=e.$size,n=e.$steps,o=t.colors,i=t.sizing,a=t.borders.useRoundedCorners?i.scale0:0;return h({borderTopLeftRadius:a,borderTopRightRadius:a,borderBottomRightRadius:a,borderBottomLeftRadius:a,backgroundColor:Object(d.b)(o.progressbarTrackFill,"0.16"),height:v(r),flex:1,overflow:"hidden"},n<2?{}:{marginLeft:i.scale300,":first-child":{marginLeft:"0"}})}));b.displayName="StyledBar",b.displayName="StyledBar";var w=Object(l.a)("div",(function(e){var t=e.$theme,r=e.$value,n=e.$successValue,o=e.$steps,i=e.$index,a=e.$maxValue,s=e.$minValue,c=void 0===s?0:s,u=a||n,l=t.colors,d=t.sizing,f=t.borders,p="".concat(100-100*(r-c)/(u-c),"%"),m="awaits",v="inProgress",y="completed",g="default";if(o>1){var b=(u-c)/o,w=(r-c)/(u-c)*100,O=Math.floor(w/b);g=i<O?y:i===O?v:m}var S=f.useRoundedCorners?d.scale0:0,j={transform:"translateX(-".concat(p,")")},P=g===v?{animationDuration:"2.1s",animationIterationCount:"infinite",animationTimingFunction:t.animation.linearCurve,animationName:{"0%":{transform:"translateX(-102%)",opacity:1},"50%":{transform:"translateX(0%)",opacity:1},"100%":{transform:"translateX(0%)",opacity:0}}}:g===y?{transform:"translateX(0%)"}:{transform:"translateX(-102%)"};return h({borderTopLeftRadius:S,borderTopRightRadius:S,borderBottomRightRadius:S,borderBottomLeftRadius:S,backgroundColor:l.accent,height:"100%",width:"100%",transform:"translateX(-102%)",transition:"transform 0.5s"},o>1?P:j)}));w.displayName="StyledBarProgress",w.displayName="StyledBarProgress";var O=Object(l.a)("div",(function(e){var t=e.$theme,r=e.$isLeft,n=void 0!==r&&r,o=e.$size,i=void 0===o?c:o,a=t.colors,s=t.sizing,u=t.borders.useRoundedCorners?s.scale0:0,l=v(i),d={display:"inline-block",flex:1,marginLeft:"auto",marginRight:"auto",transitionProperty:"background-position",animationDuration:"1.5s",animationIterationCount:"infinite",animationTimingFunction:t.animation.linearCurve,backgroundSize:"300% auto",backgroundRepeat:"no-repeat",backgroundPositionX:n?"-50%":"150%",backgroundImage:"linear-gradient(".concat(n?"90":"270","deg, transparent 0%, ").concat(a.accent," 25%, ").concat(a.accent," 75%, transparent 100%)"),animationName:n?{"0%":{backgroundPositionX:"-50%"},"33%":{backgroundPositionX:"50%"},"66%":{backgroundPositionX:"50%"},"100%":{backgroundPositionX:"150%"}}:{"0%":{backgroundPositionX:"150%"},"33%":{backgroundPositionX:"50%"},"66%":{backgroundPositionX:"50%"},"100%":{backgroundPositionX:"-50%"}}};return h(h({},n?{borderTopLeftRadius:u,borderBottomLeftRadius:u}:{borderTopRightRadius:u,borderBottomRightRadius:u}),{},{height:l},d)}));O.displayName="StyledInfiniteBar",O.displayName="StyledInfiniteBar";var S=Object(l.a)("div",(function(e){return h(h({textAlign:"center"},e.$theme.typography.font150),{},{color:e.$theme.colors.contentTertiary})}));S.displayName="StyledLabel",S.displayName="StyledLabel";var j=(m(n={},u,{d:"M47.5 4H71.5529C82.2933 4 91 12.9543 91 24C91 35.0457 82.2933 44 71.5529 44H23.4471C12.7067 44 4 35.0457 4 24C4 12.9543 12.7067 4 23.4471 4H47.5195",width:95,height:48,strokeWidth:8,typography:"LabelLarge"}),m(n,c,{d:"M39 2H60.5833C69.0977 2 76 9.16344 76 18C76 26.8366 69.0977 34 60.5833 34H17.4167C8.90228 34 2 26.8366 2 18C2 9.16344 8.90228 2 17.4167 2H39.0195",width:78,height:36,strokeWidth:4,typography:"LabelMedium"}),m(n,s,{d:"M32 1H51.6271C57.9082 1 63 6.37258 63 13C63 19.6274 57.9082 25 51.6271 25H12.3729C6.09181 25 1 19.6274 1 13C1 6.37258 6.09181 1 12.3729 1H32.0195",width:64,height:26,strokeWidth:2,typography:"LabelSmall"}),n),P=Object(l.a)("div",(function(e){var t=e.$size,r=e.$inline;return{width:j[t].width+"px",height:j[t].height+"px",position:"relative",display:r?"inline-flex":"flex",alignItems:"center",justifyContent:"center"}}));P.displayName="StyledProgressBarRoundedRoot",P.displayName="StyledProgressBarRoundedRoot";var x=Object(l.a)("svg",(function(e){var t=e.$size;return{width:j[t].width+"px",height:j[t].height+"px",position:"absolute",fill:"none"}}));x.displayName="_StyledProgressBarRoundedSvg",x.displayName="_StyledProgressBarRoundedSvg";Object(l.d)(x,(function(e){return function(t){return i.a.createElement(e,f({viewBox:"0 0 ".concat(j[t.$size].width," ").concat(j[t.$size].height),xmlns:"http://www.w3.org/2000/svg"},t))}}));var M=Object(l.a)("path",(function(e){var t=e.$theme,r=e.$size;return{stroke:t.colors.backgroundTertiary,strokeWidth:j[r].strokeWidth+"px"}}));M.displayName="_StyledProgressBarRoundedTrackBackground",M.displayName="_StyledProgressBarRoundedTrackBackground";Object(l.d)(M,(function(e){return function(t){return i.a.createElement(e,f({d:j[t.$size].d},t))}}));var R=Object(l.a)("path",(function(e){var t=e.$theme,r=e.$size,n=e.$visible,o=e.$pathLength,i=e.$pathProgress;return{visibility:n?"visible":"hidden",stroke:t.colors.borderAccent,strokeWidth:j[r].strokeWidth+"px",strokeDasharray:o,strokeDashoffset:o*(1-i)+""}}));R.displayName="_StyledProgressBarRoundedTrackForeground",R.displayName="_StyledProgressBarRoundedTrackForeground";Object(l.d)(R,(function(e){return function(t){return i.a.createElement(e,f({d:j[t.$size].d},t))}}));var k=Object(l.a)("div",(function(e){var t=e.$theme,r=e.$size;return h({color:t.colors.contentPrimary},t.typography[j[r].typography])}));function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}k.displayName="StyledProgressBarRoundedText",k.displayName="StyledProgressBarRoundedText";var $=["overrides","getProgressLabel","value","size","steps","successValue","minValue","maxValue","showLabel","infinite","errorMessage","forwardedRef"];function U(){return(U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){s=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function B(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t){return(_=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=A(e);if(t){var o=A(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return V(this,r)}}function V(e,t){if(t&&("object"===C(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var H,D,X,I=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(s,e);var t,r,n,i=T(s);function s(){return z(this,s),i.apply(this,arguments)}return t=s,(r=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.overrides,r=void 0===t?{}:t,n=e.getProgressLabel,i=e.value,s=e.size,c=e.steps,u=e.successValue,l=e.minValue,d=e.maxValue,f=e.showLabel,p=e.infinite,h=e.errorMessage,m=e.forwardedRef,v=B(e,$),j=this.props["aria-label"]||this.props.ariaLabel,P=100!==d?d:u,x=E(Object(a.c)(r.Root,y),2),M=x[0],R=x[1],k=E(Object(a.c)(r.BarContainer,g),2),C=k[0],L=k[1],z=E(Object(a.c)(r.Bar,b),2),N=z[0],_=z[1],T=E(Object(a.c)(r.BarProgress,w),2),V=T[0],A=T[1],H=E(Object(a.c)(r.Label,S),2),D=H[0],X=H[1],I=E(Object(a.c)(r.InfiniteBar,O),2),W=I[0],F=I[1],J={$infinite:p,$size:s,$steps:c,$successValue:P,$minValue:l,$maxValue:P,$value:i};return o.createElement(M,U({ref:m,"data-baseweb":"progress-bar",role:"progressbar","aria-label":j||n(i,P,l),"aria-valuenow":p?null:i,"aria-valuemin":p?null:l,"aria-valuemax":p?null:P,"aria-invalid":!!h||null,"aria-errormessage":h},v,J,R),o.createElement(C,U({},J,L),p?o.createElement(o.Fragment,null,o.createElement(W,U({$isLeft:!0,$size:J.$size},F)),o.createElement(W,U({$size:J.$size},F))):function(){for(var e=[],t=0;t<c;t++)e.push(o.createElement(N,U({key:t},J,_),o.createElement(V,U({$index:t},J,A))));return e}()),f&&o.createElement(D,U({},J,X),n(i,P,l)))}}])&&N(t.prototype,r),n&&N(t,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(o.Component);X={getProgressLabel:function(e,t,r){return"".concat(Math.round((e-r)/(t-r)*100),"% Loaded")},infinite:!1,overrides:{},showLabel:!1,size:c,steps:1,successValue:100,minValue:0,maxValue:100,value:0},(D="defaultProps")in(H=I)?Object.defineProperty(H,D,{value:X,enumerable:!0,configurable:!0,writable:!0}):H[D]=X;var W=o.forwardRef((function(e,t){return o.createElement(I,U({forwardedRef:t},e))}));W.displayName="ProgressBar";t.a=W},1673:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,r.apply(this,arguments)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},1674:function(e,t,r){var n;n=function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/react-webcam.tsx")}({"./src/react-webcam.tsx":function(e,t,r){"use strict";r.r(t);var n=r("react"),o=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function s(){return!(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)}"undefined"!==typeof window&&(void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return t?new Promise((function(r,n){t.call(navigator,e,r,n)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}));var c=function(e){function t(t){var r=e.call(this,t)||this;return r.canvas=null,r.ctx=null,r.unmounted=!1,r.state={hasUserMedia:!1},r}return o(t,e),t.prototype.componentDidMount=function(){var e=this.state,t=this.props;s()?e.hasUserMedia||this.requestUserMedia():t.onUserMediaError("getUserMedia not supported")},t.prototype.componentDidUpdate=function(e){var t=this.props;if(s()){var r=JSON.stringify(e.audioConstraints)!==JSON.stringify(t.audioConstraints),n=JSON.stringify(e.videoConstraints)!==JSON.stringify(t.videoConstraints),o=e.minScreenshotWidth!==t.minScreenshotWidth,i=e.minScreenshotHeight!==t.minScreenshotHeight;(n||o||i)&&(this.canvas=null,this.ctx=null),(r||n)&&(this.stopAndCleanup(),this.requestUserMedia())}else t.onUserMediaError("getUserMedia not supported")},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.stopAndCleanup()},t.stopMediaStream=function(e){e&&(e.getVideoTracks&&e.getAudioTracks?(e.getVideoTracks().map((function(t){e.removeTrack(t),t.stop()})),e.getAudioTracks().map((function(t){e.removeTrack(t),t.stop()}))):e.stop())},t.prototype.stopAndCleanup=function(){var e=this.state;e.hasUserMedia&&(t.stopMediaStream(this.stream),e.src&&window.URL.revokeObjectURL(e.src))},t.prototype.getScreenshot=function(e){var t=this.state,r=this.props;if(!t.hasUserMedia)return null;var n=this.getCanvas(e);return n&&n.toDataURL(r.screenshotFormat,r.screenshotQuality)},t.prototype.getCanvas=function(e){var t=this.state,r=this.props;if(!this.video)return null;if(!t.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var n=this.video.videoWidth,o=this.video.videoHeight;if(!this.props.forceScreenshotSourceSize){var i=n/o;o=(n=r.minScreenshotWidth||this.video.clientWidth)/i,r.minScreenshotHeight&&o<r.minScreenshotHeight&&(n=(o=r.minScreenshotHeight)*i)}this.canvas=document.createElement("canvas"),this.canvas.width=(null===e||void 0===e?void 0:e.width)||n,this.canvas.height=(null===e||void 0===e?void 0:e.height)||o,this.ctx=this.canvas.getContext("2d")}var a=this.ctx,s=this.canvas;return a&&s&&(r.mirrored&&(a.translate(s.width,0),a.scale(-1,1)),a.imageSmoothingEnabled=r.imageSmoothing,a.drawImage(this.video,0,0,(null===e||void 0===e?void 0:e.width)||s.width,(null===e||void 0===e?void 0:e.height)||s.height),r.mirrored&&(a.scale(-1,1),a.translate(-s.width,0))),s},t.prototype.requestUserMedia=function(){var e=this,r=this.props,n=function(n,o){var i={video:"undefined"===typeof o||o};r.audio&&(i.audio="undefined"===typeof n||n),navigator.mediaDevices.getUserMedia(i).then((function(r){e.unmounted?t.stopMediaStream(r):e.handleUserMedia(null,r)})).catch((function(t){e.handleUserMedia(t)}))};if("mediaDevices"in navigator)n(r.audioConstraints,r.videoConstraints);else{var o=function(e){return{optional:[{sourceId:e}]}},i=function(e){var t=e.deviceId;return"string"===typeof t?t:Array.isArray(t)&&t.length>0?t[0]:"object"===typeof t&&t.ideal?t.ideal:null};MediaStreamTrack.getSources((function(e){var t=null,a=null;e.forEach((function(e){"audio"===e.kind?t=e.id:"video"===e.kind&&(a=e.id)}));var s=i(r.audioConstraints);s&&(t=s);var c=i(r.videoConstraints);c&&(a=c),n(o(t),o(a))}))}},t.prototype.handleUserMedia=function(e,t){var r=this.props;if(e||!t)return this.setState({hasUserMedia:!1}),void r.onUserMediaError(e);this.stream=t;try{this.video&&(this.video.srcObject=t),this.setState({hasUserMedia:!0})}catch(n){this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(t)})}r.onUserMedia(t)},t.prototype.render=function(){var e=this,t=this.state,r=this.props,o=r.audio,s=(r.forceScreenshotSourceSize,r.onUserMedia,r.onUserMediaError,r.screenshotFormat,r.screenshotQuality,r.minScreenshotWidth,r.minScreenshotHeight,r.audioConstraints,r.videoConstraints,r.imageSmoothing,r.mirrored),c=r.style,u=void 0===c?{}:c,l=a(r,["audio","forceScreenshotSourceSize","onUserMedia","onUserMediaError","screenshotFormat","screenshotQuality","minScreenshotWidth","minScreenshotHeight","audioConstraints","videoConstraints","imageSmoothing","mirrored","style"]),d=s?i(i({},u),{transform:(u.transform||"")+" scaleX(-1)"}):u;return n.createElement("video",i({autoPlay:!0,src:t.src,muted:!o,playsInline:!0,ref:function(t){e.video=t},style:d},l))},t.defaultProps={audio:!1,forceScreenshotSourceSize:!1,imageSmoothing:!0,mirrored:!1,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",screenshotQuality:.92},t}(n.Component);t.default=c},react:function(t,r){t.exports=e}}).default},e.exports=n(r(0))},1753:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(1673),o=r.n(n),i=r(0),a=r(50),s=i.forwardRef((function(e,t){return i.createElement(a.a,o()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),i.createElement("rect",{width:24,height:24,fill:"none"}),i.createElement("path",{d:"M20 5h-3.17l-1.24-1.35A1.99 1.99 0 0014.12 3H9.88c-.56 0-1.1.24-1.48.65L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1.35 8.35l-2.79 2.79c-.32.32-.86.1-.86-.35v-1.75H9v1.75c0 .45-.54.67-.85.35l-2.79-2.79c-.2-.2-.2-.51 0-.71l2.79-2.79a.5.5 0 01.85.36v1.83h6v-1.83c0-.45.54-.67.85-.35l2.79 2.79c.2.19.2.51.01.7z"}))}));s.displayName="SwitchCamera"},1754:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(104),o=r.n(n),i=r(0),a=r(50),s=i.forwardRef((function(e,t){return i.createElement(a.a,o()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 8 8"},e,{ref:t}),i.createElement("path",{d:"M.5 1c-.28 0-.5.23-.5.5v4c0 .28.23.5.5.5h5c.28 0 .5-.22.5-.5V4l1 1h1V2H7L6 3V1.5c0-.28-.22-.5-.5-.5h-5z"}))}));s.displayName="Video"},1755:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(104),o=r.n(n),i=r(0),a=r(50),s=i.forwardRef((function(e,t){return i.createElement(a.a,o()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 8 8"},e,{ref:t}),i.createElement("path",{d:"M1.41 0L0 1.41l.72.72L2.5 3.94.72 5.72 0 6.41l1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72L6.41 0l-.69.72L3.94 2.5 2.13.72 1.41 0z"}))}));s.displayName="X"}}]);