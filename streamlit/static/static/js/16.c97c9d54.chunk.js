(this["webpackJsonpstreamlit-browser"]=this["webpackJsonpstreamlit-browser"]||[]).push([[16],{1410:function(e,t,r){var n;!function(){"use strict";var i={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function o(e){return s(u(e),arguments)}function a(e,t){return o.apply(null,[e].concat(t||[]))}function s(e,t){var r,n,a,s,c,u,l,d,p,h=1,f=e.length,g="";for(n=0;n<f;n++)if("string"===typeof e[n])g+=e[n];else if("object"===typeof e[n]){if((s=e[n]).keys)for(r=t[h],a=0;a<s.keys.length;a++){if(void 0==r)throw new Error(o('[sprintf] Cannot access property "%s" of undefined value "%s"',s.keys[a],s.keys[a-1]));r=r[s.keys[a]]}else r=s.param_no?t[s.param_no]:t[h++];if(i.not_type.test(s.type)&&i.not_primitive.test(s.type)&&r instanceof Function&&(r=r()),i.numeric_arg.test(s.type)&&"number"!==typeof r&&isNaN(r))throw new TypeError(o("[sprintf] expecting number but found %T",r));switch(i.number.test(s.type)&&(d=r>=0),s.type){case"b":r=parseInt(r,10).toString(2);break;case"c":r=String.fromCharCode(parseInt(r,10));break;case"d":case"i":r=parseInt(r,10);break;case"j":r=JSON.stringify(r,null,s.width?parseInt(s.width):0);break;case"e":r=s.precision?parseFloat(r).toExponential(s.precision):parseFloat(r).toExponential();break;case"f":r=s.precision?parseFloat(r).toFixed(s.precision):parseFloat(r);break;case"g":r=s.precision?String(Number(r.toPrecision(s.precision))):parseFloat(r);break;case"o":r=(parseInt(r,10)>>>0).toString(8);break;case"s":r=String(r),r=s.precision?r.substring(0,s.precision):r;break;case"t":r=String(!!r),r=s.precision?r.substring(0,s.precision):r;break;case"T":r=Object.prototype.toString.call(r).slice(8,-1).toLowerCase(),r=s.precision?r.substring(0,s.precision):r;break;case"u":r=parseInt(r,10)>>>0;break;case"v":r=r.valueOf(),r=s.precision?r.substring(0,s.precision):r;break;case"x":r=(parseInt(r,10)>>>0).toString(16);break;case"X":r=(parseInt(r,10)>>>0).toString(16).toUpperCase()}i.json.test(s.type)?g+=r:(!i.number.test(s.type)||d&&!s.sign?p="":(p=d?"+":"-",r=r.toString().replace(i.sign,"")),u=s.pad_char?"0"===s.pad_char?"0":s.pad_char.charAt(1):" ",l=s.width-(p+r).length,c=s.width&&l>0?u.repeat(l):"",g+=s.align?p+r+c:"0"===u?p+c+r:c+p+r)}return g}var c=Object.create(null);function u(e){if(c[e])return c[e];for(var t,r=e,n=[],o=0;r;){if(null!==(t=i.text.exec(r)))n.push(t[0]);else if(null!==(t=i.modulo.exec(r)))n.push("%");else{if(null===(t=i.placeholder.exec(r)))throw new SyntaxError("[sprintf] unexpected placeholder");if(t[2]){o|=1;var a=[],s=t[2],u=[];if(null===(u=i.key.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(a.push(u[1]);""!==(s=s.substring(u[0].length));)if(null!==(u=i.key_access.exec(s)))a.push(u[1]);else{if(null===(u=i.index_access.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");a.push(u[1])}t[2]=a}else o|=2;if(3===o)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");n.push({placeholder:t[0],param_no:t[1],keys:t[2],sign:t[3],pad_char:t[4],align:t[5],width:t[6],precision:t[7],type:t[8]})}r=r.substring(t[0].length)}return c[e]=n}t.sprintf=o,t.vsprintf=a,"undefined"!==typeof window&&(window.sprintf=o,window.vsprintf=a,void 0===(n=function(){return{sprintf:o,vsprintf:a}}.call(t,r,t,e))||(e.exports=n))}()},1411:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"}(t.Direction||(t.Direction={}))},1505:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(1681));t.Range=i.default;var o=r(1506);t.getTrackBackground=o.getTrackBackground,t.useThumbOverlap=o.useThumbOverlap,t.relativeValue=o.relativeValue;var a=r(1411);t.Direction=a.Direction},1506:function(e,t,r){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)n[i]=o[a];return n};Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),o=r(1411);function a(e){return e===o.Direction.Up||e===o.Direction.Down}function s(e,t,r){e.style.transform="translate("+t+"px, "+r+"px)"}t.getStepDecimals=function(e){var t=e.toString().split(".")[1];return t?t.length:0},t.isTouchEvent=function(e){return e.touches&&e.touches.length||e.changedTouches&&e.changedTouches.length},t.isStepDivisible=function(e,t,r){var n=(t-e)/r;return parseInt(n.toString(),10)===n},t.normalizeValue=function(e,r,n,i,o,a,s){var c=1e11;if(e=Math.round(e*c)/c,!a){var u=s[r-1],l=s[r+1];if(u&&u>e)return u;if(l&&l<e)return l}if(e>i)return i;if(e<n)return n;var d=Math.floor(e*c-n*c)%Math.floor(o*c),p=Math.floor(e*c-Math.abs(d)),h=0===d?e:p/c,f=Math.abs(d/c)<o/2?h:h+o,g=t.getStepDecimals(o);return parseFloat(f.toFixed(g))},t.relativeValue=function(e,t,r){return(e-t)/(r-t)},t.isVertical=a,t.checkBoundaries=function(e,t,r){if(t>=r)throw new RangeError("min ("+t+") is equal/bigger than max ("+r+")");if(e<t)throw new RangeError("value ("+e+") is smaller than min ("+t+")");if(e>r)throw new RangeError("value ("+e+") is bigger than max ("+r+")")},t.checkInitialOverlap=function(e){if(!(e.length<2)&&!e.slice(1).every((function(t,r){return e[r]<=t})))throw new RangeError("values={["+e+"]} needs to be sorted when allowOverlap={false}")},t.getMargin=function(e){var t=window.getComputedStyle(e);return{top:parseInt(t["margin-top"],10),bottom:parseInt(t["margin-bottom"],10),left:parseInt(t["margin-left"],10),right:parseInt(t["margin-right"],10)}},t.getPaddingAndBorder=function(e){var t=window.getComputedStyle(e);return{top:parseInt(t["padding-top"],10)+parseInt(t["border-top-width"],10),bottom:parseInt(t["padding-bottom"],10)+parseInt(t["border-bottom-width"],10),left:parseInt(t["padding-left"],10)+parseInt(t["border-left-width"],10),right:parseInt(t["padding-right"],10)+parseInt(t["border-right-width"],10)}},t.translateThumbs=function(e,t,r){var n=r?-1:1;e.forEach((function(e,r){return s(e,n*t[r].x,t[r].y)}))},t.getClosestThumbIndex=function(e,t,r,n){for(var i=0,o=u(e[0],t,r,n),a=1;a<e.length;a++){var s=u(e[a],t,r,n);s<o&&(o=s,i=a)}return i},t.translate=s,t.schd=function(e){var t=[],r=null;return function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];t=n,r||(r=requestAnimationFrame((function(){r=null,e.apply(void 0,t)})))}},t.replaceAt=function(e,t,r){var n=e.slice(0);return n[t]=r,n},t.getTrackBackground=function(e){var t=e.values,r=e.colors,n=e.min,i=e.max,a=e.direction,s=void 0===a?o.Direction.Right:a,c=e.rtl,u=void 0!==c&&c;u&&s===o.Direction.Right?s=o.Direction.Left:u&&o.Direction.Left&&(s=o.Direction.Right);var l=t.slice(0).sort((function(e,t){return e-t})).map((function(e){return(e-n)/(i-n)*100})).reduce((function(e,t,n){return e+", "+r[n]+" "+t+"%, "+r[n+1]+" "+t+"%"}),"");return"linear-gradient("+s+", "+r[0]+" 0%"+l+", "+r[r.length-1]+" 100%)"},t.voidFn=function(){},t.assertUnreachable=function(e){throw new Error("Didn't expect to get here")};var c=function(e,t,r,i,o){return void 0===o&&(o=function(e){return e}),Math.ceil(n([e],Array.from(e.children)).reduce((function(e,n){var a=Math.ceil(n.getBoundingClientRect().width);if(n.innerText&&n.innerText.includes(r)&&0===n.childElementCount){var s=n.cloneNode(!0);s.innerHTML=o(t.toFixed(i)),s.style.visibility="hidden",document.body.appendChild(s),a=Math.ceil(s.getBoundingClientRect().width),document.body.removeChild(s)}return a>e?a:e}),e.getBoundingClientRect().width))};function u(e,t,r,n){var i=e.getBoundingClientRect(),o=i.x,s=i.y,c=i.width,u=i.height;return a(n)?Math.abs(r-(s+u/2)):Math.abs(t-(o+c/2))}t.useThumbOverlap=function(e,r,o,a,s,u){void 0===a&&(a=.1),void 0===s&&(s=" - "),void 0===u&&(u=function(e){return e});var l=t.getStepDecimals(a),d=i.useState({}),p=d[0],h=d[1],f=i.useState(u(r[o].toFixed(l))),g=f[0],m=f[1];return i.useEffect((function(){if(e){var t=e.getThumbs();if(t.length<1)return;var i={},a=e.getOffsets(),d=function(e,t,r,i,o,a,s){void 0===s&&(s=function(e){return e});var u=[];return function e(l){var d=c(r[l],i[l],o,a,s),p=t[l].x;t.forEach((function(t,h){var f=t.x,g=c(r[h],i[h],o,a,s);l!==h&&(p>=f&&p<=f+g||p+d>=f&&p+d<=f+g)&&(u.includes(h)||(u.push(l),u.push(h),u=n(u,[l,h]),e(h)))}))}(e),Array.from(new Set(u.sort()))}(o,a,t,r,s,l,u),p=u(r[o].toFixed(l));if(d.length){var f=d.reduce((function(e,t,r,i){return e.length?n(e,[a[i[r]].x]):[a[i[r]].x]}),[]);if(Math.min.apply(Math,f)===a[o].x){var g=[];d.forEach((function(e){g.push(r[e].toFixed(l))})),p=Array.from(new Set(g.sort((function(e,t){return parseFloat(e)-parseFloat(t)})))).map(u).join(s);var v=Math.min.apply(Math,f),b=Math.max.apply(Math,f),y=t[d[f.indexOf(b)]].getBoundingClientRect().width;i.left=Math.abs(v-(b+y))/2+"px",i.transform="translate(-50%, 0)"}else i.visibility="hidden"}m(p),h(i)}}),[e,r]),[g,p]}},1681:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),i=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)n[i]=o[a];return n},o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(0)),s=r(1506),c=r(1411),u=["ArrowRight","ArrowUp","k","PageUp"],l=["ArrowLeft","ArrowDown","j","PageDown"],d=function(e){function t(t){var r=e.call(this,t)||this;r.trackRef=a.createRef(),r.thumbRefs=[],r.markRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map((function(e,t){return t})),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var e=r.props,t=e.direction,n=e.values,i=e.min,o=e.max,a=r.trackRef.current,u=a.getBoundingClientRect(),l=s.getPaddingAndBorder(a);return r.getThumbs().map((function(e,r){var a={x:0,y:0},d=e.getBoundingClientRect(),p=s.getMargin(e);switch(t){case c.Direction.Right:return a.x=-1*(p.left+l.left),a.y=-1*((d.height-u.height)/2+l.top),a.x+=u.width*s.relativeValue(n[r],i,o)-d.width/2,a;case c.Direction.Left:return a.x=-1*(p.right+l.right),a.y=-1*((d.height-u.height)/2+l.top),a.x+=u.width-u.width*s.relativeValue(n[r],i,o)-d.width/2,a;case c.Direction.Up:return a.x=-1*((d.width-u.width)/2+p.left+l.left),a.y=-l.left,a.y+=u.height-u.height*s.relativeValue(n[r],i,o)-d.height/2,a;case c.Direction.Down:return a.x=-1*((d.width-u.width)/2+p.left+l.left),a.y=-l.left,a.y+=u.height*s.relativeValue(n[r],i,o)-d.height/2,a;default:return s.assertUnreachable(t)}}))},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter((function(e){return e.hasAttribute("aria-valuenow")})):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(e){return r.getThumbs().findIndex((function(t){return t===e.target||t.contains(e.target)}))},r.addTouchEvents=function(e){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(e){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(e){var t;if(0===e.button)if(e.persist(),e.preventDefault(),r.addMouseEvents(e.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some((function(t){var r;return null===(r=t.current)||void 0===r?void 0:r.contains(e.target)})))return;r.setState({draggedTrackPos:[e.clientX,e.clientY]},(function(){return r.onMove(e.clientX,e.clientY)}))}else{var n=s.getClosestThumbIndex(r.thumbRefs.map((function(e){return e.current})),e.clientX,e.clientY,r.props.direction);null===(t=r.thumbRefs[n].current)||void 0===t||t.focus(),r.setState({draggedThumbIndex:n},(function(){return r.onMove(e.clientX,e.clientY)}))}},r.onResize=function(){s.translateThumbs(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(e){var t;if(e.persist(),r.addTouchEvents(e.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some((function(t){var r;return null===(r=t.current)||void 0===r?void 0:r.contains(e.target)})))return;r.setState({draggedTrackPos:[e.touches[0].clientX,e.touches[0].clientY]},(function(){return r.onMove(e.touches[0].clientX,e.touches[0].clientY)}))}else{var n=s.getClosestThumbIndex(r.thumbRefs.map((function(e){return e.current})),e.touches[0].clientX,e.touches[0].clientY,r.props.direction);null===(t=r.thumbRefs[n].current)||void 0===t||t.focus(),r.setState({draggedThumbIndex:n},(function(){return r.onMove(e.touches[0].clientX,e.touches[0].clientY)}))}},r.onMouseOrTouchStart=function(e){if(!r.props.disabled){var t=s.isTouchEvent(e);if(t||0===e.button){var n=r.getTargetIndex(e);-1!==n&&(t?r.addTouchEvents(e):r.addMouseEvents(e),r.setState({draggedThumbIndex:n,thumbZIndexes:r.state.thumbZIndexes.map((function(e,t){return t===n?Math.max.apply(Math,r.state.thumbZIndexes):e<=r.state.thumbZIndexes[n]?e:e-1}))}))}}},r.onMouseMove=function(e){e.preventDefault(),r.onMove(e.clientX,e.clientY)},r.onTouchMove=function(e){e.preventDefault(),r.onMove(e.touches[0].clientX,e.touches[0].clientY)},r.onKeyDown=function(e){var t=r.props,n=t.values,i=t.onChange,o=t.step,a=t.rtl,c=r.state.isChanged,d=r.getTargetIndex(e.nativeEvent),p=a?-1:1;-1!==d&&(u.includes(e.key)?(e.preventDefault(),r.setState({draggedThumbIndex:d,isChanged:!0}),i(s.replaceAt(n,d,r.normalizeValue(n[d]+p*("PageUp"===e.key?10*o:o),d)))):l.includes(e.key)?(e.preventDefault(),r.setState({draggedThumbIndex:d,isChanged:!0}),i(s.replaceAt(n,d,r.normalizeValue(n[d]-p*("PageDown"===e.key?10*o:o),d)))):"Tab"===e.key?r.setState({draggedThumbIndex:-1},(function(){c&&r.fireOnFinalChange()})):c&&r.fireOnFinalChange())},r.onKeyUp=function(e){var t=r.state.isChanged;r.setState({draggedThumbIndex:-1},(function(){t&&r.fireOnFinalChange()}))},r.onMove=function(e,t){var n=r.state,i=n.draggedThumbIndex,o=n.draggedTrackPos,a=r.props,u=a.direction,l=a.min,d=a.max,p=a.onChange,h=a.values,f=a.step,g=a.rtl;if(-1===i&&-1===o[0]&&-1===o[1])return null;var m=r.trackRef.current;if(!m)return null;var v=m.getBoundingClientRect(),b=s.isVertical(u)?v.height:v.width;if(-1!==o[0]&&-1!==o[1]){var y=e-o[0],w=t-o[1],k=0;switch(u){case c.Direction.Right:case c.Direction.Left:k=y/b*(d-l)+l;break;case c.Direction.Down:case c.Direction.Up:k=w/b*(d-l)+l;break;default:s.assertUnreachable(u)}if(g&&(k*=-1),Math.abs(k)>=f/2){for(var x=0;x<r.thumbRefs.length;x++){if(h[x]===d&&1===Math.sign(k)||h[x]===l&&-1===Math.sign(k))return;var O=h[x]+k;O>d?k=d-h[x]:O<l&&(k=l-h[x])}var T=h.slice(0);for(x=0;x<r.thumbRefs.length;x++)T=s.replaceAt(T,x,r.normalizeValue(h[x]+k,x));r.setState({draggedTrackPos:[e,t]}),p(T)}}else{var M=0;switch(u){case c.Direction.Right:M=(e-v.left)/b*(d-l)+l;break;case c.Direction.Left:M=(b-(e-v.left))/b*(d-l)+l;break;case c.Direction.Down:M=(t-v.top)/b*(d-l)+l;break;case c.Direction.Up:M=(b-(t-v.top))/b*(d-l)+l;break;default:s.assertUnreachable(u)}g&&(M=d+l-M),Math.abs(h[i]-M)>=f/2&&p(s.replaceAt(h,i,r.normalizeValue(M,i)))}},r.normalizeValue=function(e,t){var n=r.props,i=n.min,o=n.max,a=n.step,c=n.allowOverlap,u=n.values;return s.normalizeValue(e,t,i,o,a,c,u)},r.onEnd=function(e){if(e.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),-1===r.state.draggedThumbIndex&&-1===r.state.draggedTrackPos[0]&&-1===r.state.draggedTrackPos[1])return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},(function(){r.fireOnFinalChange()}))},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var e=r.props,t=e.onFinalChange,n=e.values;t&&t(n)},r.calculateMarkOffsets=function(){if(r.props.renderMark&&r.trackRef&&null!==r.trackRef.current){for(var e=window.getComputedStyle(r.trackRef.current),t=parseInt(e.width,10),n=parseInt(e.height,10),i=parseInt(e.paddingLeft,10),o=parseInt(e.paddingTop,10),a=[],s=0;s<r.numOfMarks+1;s++){var u=9999,l=9999;if(r.markRefs[s].current){var d=r.markRefs[s].current.getBoundingClientRect();u=d.height,l=d.width}r.props.direction===c.Direction.Left||r.props.direction===c.Direction.Right?a.push([Math.round(t/r.numOfMarks*s+i-l/2),-Math.round((u-n)/2)]):a.push([Math.round(n/r.numOfMarks*s+o-u/2),-Math.round((l-t)/2)])}r.setState({markOffsets:a})}},r.numOfMarks=(t.max-t.min)/r.props.step,r.schdOnMouseMove=s.schd(r.onMouseMove),r.schdOnTouchMove=s.schd(r.onTouchMove),r.schdOnEnd=s.schd(r.onEnd),r.thumbRefs=t.values.map((function(){return a.createRef()}));for(var n=0;n<r.numOfMarks+1;n++)r.markRefs[n]=a.createRef();if(s.isStepDivisible(t.min,t.max,t.step)||console.warn("The difference of `max` and `min` must be divisible by `step`"),0===t.step)throw new Error('"step" property should be a positive number');return r}return n(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props,r=t.values,n=t.min,i=t.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",e.onResize)},unobserve:function(){return window.removeEventListener("resize",e.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&s.checkInitialOverlap(this.props.values),this.props.values.forEach((function(t){return s.checkBoundaries(t,e.props.min,e.props.max)})),this.resizeObserver.observe(this.trackRef.current),s.translateThumbs(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),r.forEach((function(e){s.isStepDivisible(n,e,i)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentDidUpdate=function(e){s.translateThumbs(this.getThumbs(),this.getOffsets(),this.props.rtl)},t.prototype.componentWillUnmount=function(){document.removeEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var e=this,t=this.props,r=t.renderTrack,n=t.renderThumb,o=t.renderMark,a=void 0===o?function(){return null}:o,u=t.values,l=t.min,d=t.max,p=t.allowOverlap,h=t.disabled,f=this.state,g=f.draggedThumbIndex,m=f.thumbZIndexes,v=f.markOffsets;return r({props:{style:{transform:"scale(1)",cursor:g>-1?"grabbing":this.props.draggableTrack?s.isVertical(this.props.direction)?"ns-resize":"ew-resize":1!==u.length||h?"inherit":"pointer"},onMouseDown:h?s.voidFn:this.onMouseDownTrack,onTouchStart:h?s.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:h,children:i(v.map((function(t,r){return a({props:{style:e.props.direction===c.Direction.Left||e.props.direction===c.Direction.Right?{position:"absolute",left:t[0]+"px",marginTop:t[1]+"px"}:{position:"absolute",top:t[0]+"px",marginLeft:t[1]+"px"},key:"mark"+r,ref:e.markRefs[r]},index:r})})),u.map((function(t,r){var i=e.state.draggedThumbIndex===r;return n({index:r,value:t,isDragged:i,props:{style:{position:"absolute",zIndex:m[r],cursor:h?"inherit":i?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:r,tabIndex:h?void 0:0,"aria-valuemax":p?d:u[r+1]||d,"aria-valuemin":p?l:u[r-1]||l,"aria-valuenow":t,draggable:!1,ref:e.thumbRefs[r],role:"slider",onKeyDown:h?s.voidFn:e.onKeyDown,onKeyUp:h?s.voidFn:e.onKeyUp}})})))})},t.defaultProps={step:1,direction:c.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(a.Component);t.default=d},1804:function(e,t,r){"use strict";var n=r(0),i=r(1505),o=r(47),a=r(30);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=Object(a.a)("div",{position:"relative",width:"100%"});l.displayName="Root",l.displayName="Root",l.displayName="StyledRoot";var d=Object(a.a)("div",(function(e){var t=e.$theme,r=e.$value,n=void 0===r?[]:r,i=e.$disabled,o=e.$isDragged,a=t.sizing,s="inherit";return i?s="not-allowed":o?s="grabbing":1===n.length&&(s="pointer"),{paddingTop:a.scale600,paddingBottom:a.scale600,paddingRight:a.scale600,paddingLeft:a.scale600,display:"flex",cursor:s,backgroundColor:t.colors.sliderTrackFill}}));d.displayName="Track",d.displayName="Track",d.displayName="StyledTrack";var p=Object(a.a)("div",(function(e){var t=e.$theme,r=e.$value,n=void 0===r?[]:r,o=e.$min,a=e.$max,s=e.$disabled,c=t.colors,u=t.borders,l=t.direction,d=t.borders.useRoundedCorners?u.radius100:0;return{borderTopLeftRadius:d,borderTopRightRadius:d,borderBottomRightRadius:d,borderBottomLeftRadius:d,background:Object(i.getTrackBackground)({values:n,colors:1===n.length?[s?c.borderOpaque:c.primary,s?c.backgroundSecondary:c.borderOpaque]:[s?c.backgroundSecondary:c.borderOpaque,s?c.borderOpaque:c.primary,s?c.backgroundSecondary:c.borderOpaque],min:o||0,max:a||0,rtl:"rtl"===l}),height:"2px",width:"100%",alignSelf:"center",cursor:s?"not-allowed":"inherit"}}));p.displayName="InnerTrack",p.displayName="InnerTrack",p.displayName="StyledInnerTrack";var h=Object(a.a)("div",(function(e){return{width:"4px",height:"2px",backgroundColor:e.$theme.colors.backgroundPrimary,marginLeft:"16px"}}));h.displayName="Mark",h.displayName="Mark",h.displayName="StyledMark";var f=Object(a.a)("div",(function(e){return c(c({},e.$theme.typography.font200),{},{color:e.$theme.colors.contentPrimary})}));f.displayName="Tick",f.displayName="Tick",f.displayName="StyledTick";var g=Object(a.a)("div",(function(e){var t=e.$theme.sizing;return{display:"flex",justifyContent:"space-between",alignItems:"center",paddingRight:t.scale600,paddingLeft:t.scale600,paddingBottom:t.scale400}}));g.displayName="TickBar",g.displayName="TickBar",g.displayName="StyledTickBar";var m=Object(a.a)("div",(function(e){var t=e.$theme,r=e.$value,n=void 0===r?[]:r,i=e.$thumbIndex,o=e.$disabled,a=2===n.length&&0===i,s=2===n.length&&1===i;return"rtl"===t.direction&&(s||a)&&(a=!a,s=!s),{height:"24px",width:"24px",borderTopLeftRadius:"24px",borderTopRightRadius:"24px",borderBottomLeftRadius:"24px",borderBottomRightRadius:"24px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:o?t.colors.sliderHandleFillDisabled:t.colors.sliderHandleFill,outline:"none",boxShadow:e.$isFocusVisible?"0 0 0 3px ".concat(t.colors.accent):"0 1px 4px rgba(0, 0, 0, 0.12)",cursor:o?"not-allowed":"inherit"}}));m.displayName="Thumb",m.displayName="Thumb",m.displayName="StyledThumb";var v=Object(a.a)("div",(function(e){var t=e.$disabled,r=e.$theme;return{position:"absolute",top:"-16px",width:"4px",height:"20px",backgroundColor:t?r.colors.sliderHandleFillDisabled:r.colors.sliderHandleInnerFill}}));v.displayName="InnerThumb",v.displayName="InnerThumb",v.displayName="StyledInnerThumb";var b=Object(a.a)("div",(function(e){var t=e.$disabled,r=e.$theme;return c(c({position:"absolute",top:"-".concat(r.sizing.scale1400)},r.typography.font200),{},{backgroundColor:t?r.colors.sliderHandleFillDisabled:r.colors.sliderHandleInnerFill,color:r.colors.contentInversePrimary,paddingLeft:r.sizing.scale600,paddingRight:r.sizing.scale600,paddingTop:r.sizing.scale500,paddingBottom:r.sizing.scale500,borderBottomLeftRadius:"48px",borderBottomRightRadius:"48px",borderTopLeftRadius:"48px",borderTopRightRadius:"48px",whiteSpace:"nowrap"})}));b.displayName="ThumbValue",b.displayName="ThumbValue",b.displayName="StyledThumbValue";var y=r(19),w=r(204);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(){return(T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(c){s=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return R(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return R(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.a=function(e){var t=e.overrides,r=void 0===t?{}:t,a=e.disabled,s=void 0!==a&&a,c=e.marks,u=void 0!==c&&c,k=e.onChange,O=void 0===k?function(){}:k,R=e.onFinalChange,S=void 0===R?function(){}:R,D=e.min,E=void 0===D?0:D,I=e.max,j=void 0===I?100:I,C=e.step,_=void 0===C?1:C,P=e.persistentThumb,L=void 0!==P&&P,$=e.valueToLabel,F=void 0===$?function(e){return e}:$,N=e.value,z=n.useContext(w.a),A=M(n.useState(!1),2),B=A[0],V=A[1],U=M(n.useState(!1),2),X=U[0],Y=U[1],q=M(n.useState(!1),2),H=q[0],K=q[1],Z=M(n.useState(-1),2),J=Z[0],W=Z[1],G=n.useCallback((function(e){Object(o.d)(e)&&K(!0);var t=e.target.parentNode.firstChild===e.target?0:1;W(t)}),[]),Q=n.useCallback((function(e){!1!==H&&K(!1),W(-1)}),[]),ee=function(e){if(e.length>2||0===e.length)throw new Error("the value prop represents positions of thumbs, so its length can be only one or two");return e}(N),te={$disabled:s,$step:_,$min:E,$max:j,$marks:u,$value:ee,$isFocusVisible:H},re=M(Object(y.c)(r.Root,l),2),ne=re[0],ie=re[1],oe=M(Object(y.c)(r.Track,d),2),ae=oe[0],se=oe[1],ce=M(Object(y.c)(r.InnerTrack,p),2),ue=ce[0],le=ce[1],de=M(Object(y.c)(r.Thumb,m),2),pe=de[0],he=de[1],fe=M(Object(y.c)(r.InnerThumb,v),2),ge=fe[0],me=fe[1],ve=M(Object(y.c)(r.ThumbValue,b),2),be=ve[0],ye=ve[1],we=M(Object(y.c)(r.Tick,f),2),ke=we[0],xe=we[1],Oe=M(Object(y.c)(r.TickBar,g),2),Te=Oe[0],Me=Oe[1],Re=M(Object(y.c)(r.Mark,h),2),Se=Re[0],De=Re[1];return n.createElement(ne,T({"data-baseweb":"slider"},te,ie,{onFocus:Object(o.b)(ie,G),onBlur:Object(o.a)(ie,Q)}),n.createElement(i.Range,T({step:_,min:E,max:j,values:ee,disabled:s,onChange:function(e){return O({value:e})},onFinalChange:function(e){return S({value:e})},rtl:"rtl"===z.direction,renderTrack:function(e){var t=e.props,r=e.children,i=e.isDragged;return n.createElement(ae,T({onMouseDown:t.onMouseDown,onTouchStart:t.onTouchStart,$isDragged:i},te,se),n.createElement(ue,T({$isDragged:i,ref:t.ref},te,le),r))},renderThumb:function(e){var t=e.props,r=e.index,i=e.isDragged,o=L||(!!r&&X||!r&&B||i)&&!s;return n.createElement(pe,T({},t,{onMouseEnter:function(){0===r?V(!0):Y(!0)},onMouseLeave:function(){0===r?V(!1):Y(!1)},$thumbIndex:r,$isDragged:i,style:x({},t.style)},te,he,{$isFocusVisible:H&&J===r}),o&&n.createElement(be,T({$thumbIndex:r,$isDragged:i},te,ye),F(ee[r])),o&&n.createElement(ge,T({$thumbIndex:r,$isDragged:i},te,me)))}},u?{renderMark:function(e){var t=e.props,r=e.index;return n.createElement(Se,T({$markIndex:r},t,te,De))}}:{})),n.createElement(Te,T({},te,Me),n.createElement(ke,T({},te,xe),F(E)),n.createElement(ke,T({},te,xe),F(j))))}}}]);