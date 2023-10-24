"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[256],{256:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ie}});var o,r,a=n(791),i=n(434),s=n(97),c=n(168),u=n(451),l=u.Z.h1(o||(o=(0,c.Z)(["\n  text-align: center;\n  margin-top: 12px;\n  margin-bottom: 12px;\n"]))),d=u.Z.h2(r||(r=(0,c.Z)(["\n  text-align: center;\n  margin: 12px 0px;\n  font-size: 20px;\n"]))),f=n(439),p=n(942),m=n(413);function v(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h=n(433);function g(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=g(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var y=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=g(e))&&(o&&(o+=" "),o+=t);return o},b=["theme","type"],T=["delay","staleId"],E=function(e){return"number"==typeof e&&!isNaN(e)},x=function(e){return"string"==typeof e},Z=function(e){return"function"==typeof e},C=function(e){return x(e)||Z(e)?e:null},I=function(e){return(0,a.isValidElement)(e)||x(e)||Z(e)||E(e)};function _(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var o=e.children,i=e.position,c=e.preventExitTransition,l=e.done,d=e.nodeRef,f=e.isIn,p=r?"".concat(t,"--").concat(i):t,m=r?"".concat(n,"--").concat(i):n,v=(0,a.useRef)(0);return(0,a.useLayoutEffect)((function(){var e,t=d.current,n=p.split(" "),o=function e(o){var r;o.target===d.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===v.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,h.Z)(n)))};(e=t.classList).add.apply(e,(0,h.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,a.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};f||(c?t():(v.current=1,e.className+=" ".concat(m),e.addEventListener("animationend",t)))}),[f]),a.createElement(a.Fragment,null,o)}}function O(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var w={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,h.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},L=function(e){var t=e.theme,n=e.type,o=v(e,b);return a.createElement("svg",(0,m.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},N={info:function(e){return a.createElement(L,(0,m.Z)({},e),a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return a.createElement(L,(0,m.Z)({},e),a.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return a.createElement(L,(0,m.Z)({},e),a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return a.createElement(L,(0,m.Z)({},e),a.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return a.createElement("div",{className:"Toastify__spinner"})}};function k(e){var t=(0,a.useReducer)((function(e){return e+1}),0),n=(0,f.Z)(t,2)[1],o=(0,a.useState)([]),r=(0,f.Z)(o,2),i=r[0],s=r[1],c=(0,a.useRef)(null),u=(0,a.useRef)(new Map).current,l=function(e){return-1!==i.indexOf(e)},d=(0,a.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:l,getToast:function(e){return u.get(e)}}).current;function p(e){var t=e.containerId;!d.props.limit||t&&d.containerId!==t||(d.count-=d.queue.length,d.queue=[])}function g(e){s((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function y(){var e=d.queue.shift();_(e.toastContent,e.toastProps,e.staleId)}function b(e,t){var o=t.delay,r=t.staleId,i=v(t,T);if(I(e)&&!function(e){return!c.current||d.props.enableMultiContainer&&e.containerId!==d.props.containerId||u.has(e.toastId)&&null==e.updateId}(i)){var s=i.toastId,l=i.updateId,p=i.data,h=d.props,b=function(){return g(s)},L=null==l;L&&d.count++;var k,R,j=(0,m.Z)((0,m.Z)((0,m.Z)({},h),{},{style:h.toastStyle,key:d.toastKey++},Object.fromEntries(Object.entries(i).filter((function(e){var t=(0,f.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:s,updateId:l,data:p,closeToast:b,isIn:!1,className:C(i.className||h.toastClassName),bodyClassName:C(i.bodyClassName||h.bodyClassName),progressClassName:C(i.progressClassName||h.progressClassName),autoClose:!i.isLoading&&(k=i.autoClose,R=h.autoClose,!1===k||E(k)&&k>0?k:R),deleteToast:function(){var e=O(u.get(s),"removed");u.delete(s),w.emit(4,e);var t=d.queue.length;if(d.count=null==s?d.count-d.displayedToast:d.count-1,d.count<0&&(d.count=0),t>0){var o=null==s?d.props.limit:1;if(1===t||1===o)d.displayedToast++,y();else{var r=o>t?t:o;d.displayedToast=r;for(var a=0;a<r;a++)y()}}else n()}});j.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,i=null,s={theme:t,type:n};return!1===r||(Z(r)?i=r(s):(0,a.isValidElement)(r)?i=(0,a.cloneElement)(r,s):x(r)||E(r)?i=r:o?i=N.spinner():function(e){return e in N}(n)&&(i=N[n](s))),i}(j),Z(i.onOpen)&&(j.onOpen=i.onOpen),Z(i.onClose)&&(j.onClose=i.onClose),j.closeButton=h.closeButton,!1===i.closeButton||I(i.closeButton)?j.closeButton=i.closeButton:!0===i.closeButton&&(j.closeButton=!I(h.closeButton)||h.closeButton);var M=e;(0,a.isValidElement)(e)&&!x(e.type)?M=(0,a.cloneElement)(e,{closeToast:b,toastProps:j,data:p}):Z(e)&&(M=e({closeToast:b,toastProps:j,data:p})),h.limit&&h.limit>0&&d.count>h.limit&&L?d.queue.push({toastContent:M,toastProps:j,staleId:r}):E(o)?setTimeout((function(){_(M,j,r)}),o):_(M,j,r)}}function _(e,t,n){var o=t.toastId;n&&u.delete(n);var r={content:e,props:t};u.set(o,r),s((function(e){return[].concat((0,h.Z)(e),[o]).filter((function(e){return e!==n}))})),w.emit(4,O(r,null==r.props.updateId?"added":"updated"))}return(0,a.useEffect)((function(){return d.containerId=e.containerId,w.cancelEmit(3).on(0,b).on(1,(function(e){return c.current&&g(e)})).on(5,p).emit(2,d),function(){u.clear(),w.emit(3,d)}}),[]),(0,a.useEffect)((function(){d.props=e,d.isToastActive=l,d.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(u.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:c,isToastActive:l}}function R(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function j(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function M(e){var t=(0,a.useState)(!1),n=(0,f.Z)(t,2),o=n[0],r=n[1],i=(0,a.useState)(!1),s=(0,f.Z)(i,2),c=s[0],u=s[1],l=(0,a.useRef)(null),d=(0,a.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,a.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",I),document.addEventListener("touchmove",C),document.addEventListener("touchend",I);var n=l.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=R(t.nativeEvent),d.y=j(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(t){if(d.boundingRect){var n=d.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=o&&d.y<=r?x():E()}}function E(){r(!0)}function x(){r(!1)}function C(t){var n=l.current;d.canDrag&&n&&(d.didMove=!0,o&&x(),d.x=R(t),d.y=j(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function I(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",I);var t=l.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,a.useEffect)((function(){p.current=e})),(0,a.useEffect)((function(){return l.current&&l.current.addEventListener("d",E,{once:!0}),Z(e.onOpen)&&e.onOpen((0,a.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;Z(e.onClose)&&e.onClose((0,a.isValidElement)(e.children)&&e.children.props)}}),[]),(0,a.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||x(),window.addEventListener("focus",E),window.addEventListener("blur",x)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",x))}}),[e.pauseOnFocusLoss]);var _={onMouseDown:b,onTouchStart:b,onMouseUp:T,onTouchEnd:T};return m&&v&&(_.onMouseEnter=x,_.onMouseLeave=E),y&&(_.onClick=function(e){g&&g(e),d.canCloseOnClick&&h()}),{playToast:E,pauseToast:x,isRunning:o,preventExitTransition:c,toastRef:l,eventHandlers:_}}function A(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return a.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},a.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function z(e){var t=e.delay,n=e.isRunning,o=e.closeToast,r=e.type,i=void 0===r?"default":r,s=e.hide,c=e.className,u=e.style,l=e.controlledProgress,d=e.progress,f=e.rtl,v=e.isIn,h=e.theme,g=s||l&&0===d,b=(0,m.Z)((0,m.Z)({},u),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:g?0:1});l&&(b.transform="scaleX(".concat(d,")"));var T=y("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":f}),E=Z(c)?c({rtl:f,type:i,defaultClassName:T}):y(T,c);return a.createElement("div",(0,p.Z)({role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:E,style:b},l&&d>=1?"onTransitionEnd":"onAnimationEnd",l&&d<1?null:function(){v&&o()}))}var P=function(e){var t=M(e),n=t.isRunning,o=t.preventExitTransition,r=t.toastRef,i=t.eventHandlers,s=e.closeButton,c=e.children,u=e.autoClose,l=e.onClick,d=e.type,f=e.hideProgressBar,p=e.closeToast,v=e.transition,h=e.position,g=e.className,b=e.style,T=e.bodyClassName,E=e.bodyStyle,x=e.progressClassName,C=e.progressStyle,I=e.updateId,_=e.role,O=e.progress,w=e.rtl,L=e.toastId,N=e.deleteToast,k=e.isIn,R=e.isLoading,j=e.iconOut,P=e.closeOnClick,B=e.theme,D=y("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":w},{"Toastify__toast--close-on-click":P}),S=Z(g)?g({rtl:w,position:h,type:d,defaultClassName:D}):y(D,g),F=!!O||!u,H={closeToast:p,type:d,theme:B},q=null;return!1===s||(q=Z(s)?s(H):(0,a.isValidElement)(s)?(0,a.cloneElement)(s,H):A(H)),a.createElement(v,{isIn:k,done:N,position:h,preventExitTransition:o,nodeRef:r},a.createElement("div",(0,m.Z)((0,m.Z)({id:L,onClick:l,className:S},i),{},{style:b,ref:r}),a.createElement("div",(0,m.Z)((0,m.Z)({},k&&{role:_}),{},{className:Z(T)?T({type:d}):y("Toastify__toast-body",T),style:E}),null!=j&&a.createElement("div",{className:y("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},j),a.createElement("div",null,c)),q,a.createElement(z,(0,m.Z)((0,m.Z)({},I&&!F?{key:"pb-".concat(I)}:{}),{},{rtl:w,theme:B,delay:u,isRunning:n,isIn:k,closeToast:p,hide:f,type:d,style:C,className:x,controlledProgress:F,progress:O||0}))))},B=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},D=_(B("bounce",!0)),S=(_(B("slide",!0)),_(B("zoom")),_(B("flip")),(0,a.forwardRef)((function(e,t){var n=k(e),o=n.getToastToRender,r=n.containerRef,i=n.isToastActive,s=e.className,c=e.style,u=e.rtl,l=e.containerId;function d(e){var t=y("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return Z(s)?s({position:e,rtl:u,defaultClassName:t}):y(t,C(s))}return(0,a.useEffect)((function(){t&&(t.current=r.current)}),[]),a.createElement("div",{ref:r,className:"Toastify",id:l},o((function(e,t){var n=t.length?(0,m.Z)({},c):(0,m.Z)((0,m.Z)({},c),{},{pointerEvents:"none"});return a.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,r=e.props;return a.createElement(P,(0,m.Z)((0,m.Z)({},r),{},{isIn:i(r.toastId),style:(0,m.Z)((0,m.Z)({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(r.key)}),o)})))})))})));S.displayName="ToastContainer",S.defaultProps={position:"top-right",transition:D,autoClose:5e3,closeButton:A,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var F,H=new Map,q=[],Q=1;function V(){return""+Q++}function G(e){return e&&(x(e.toastId)||E(e.toastId))?e.toastId:V()}function K(e,t){return H.size>0?w.emit(0,e,t):q.push({content:e,options:t}),t.toastId}function U(e,t){return(0,m.Z)((0,m.Z)({},t),{},{type:t&&t.type||e,toastId:G(t)})}function W(e){return function(t,n){return K(t,U(e,n))}}function X(e,t){return K(e,U("default",t))}X.loading=function(e,t){return K(e,U("default",(0,m.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},X.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=x(r)?X.loading(r,n):X.loading(r.render,(0,m.Z)((0,m.Z)({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,r){if(null!=t){var a=(0,m.Z)((0,m.Z)((0,m.Z)({type:e},s),n),{},{data:r}),i=x(t)?{render:t}:t;return o?X.update(o,(0,m.Z)((0,m.Z)({},a),i)):X(i.render,(0,m.Z)((0,m.Z)({},a),i)),r}X.dismiss(o)},u=Z(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},X.success=W("success"),X.info=W("info"),X.error=W("error"),X.warning=W("warning"),X.warn=X.warning,X.dark=function(e,t){return K(e,U("default",(0,m.Z)({theme:"dark"},t)))},X.dismiss=function(e){H.size>0?w.emit(1,e):q=q.filter((function(t){return null!=e&&t.options.toastId!==e}))},X.clearWaitingQueue=function(e){return void 0===e&&(e={}),w.emit(5,e)},X.isActive=function(e){var t=!1;return H.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},X.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=H.get(n||F);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,r=n.content,a=(0,m.Z)((0,m.Z)((0,m.Z)({delay:100},o),t),{},{toastId:t.toastId||e,updateId:V()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,K(i,a)}}),0)},X.done=function(e){X.update(e,{progress:1})},X.onChange=function(e){return w.on(4,e),function(){w.off(4,e)}},X.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},X.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},w.on(2,(function(e){F=e.containerId||e,H.set(F,e),q.forEach((function(e){w.emit(0,e.content,e.options)})),q=[]})).on(3,(function(e){H.delete(e.containerId||e),0===H.size&&w.off(0).off(1).off(5)}));var Y,J,$,ee,te=n(351),ne=u.Z.form(Y||(Y=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid gray;\n"]))),oe=u.Z.label(J||(J=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  font-size: 18px;\n  font-weight: 600;\n"]))),re=u.Z.input($||($=(0,c.Z)(["\n  text-align: center;\n  height: 25px;\n  font-size: 16px;\n  font-weight: 500;\n"]))),ae=u.Z.button(ee||(ee=(0,c.Z)(["\n  display: flex;\n  margin-top: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  align-items: center;\n  justify-content: center;\n\n  height: 35px;\n  width: 200px;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  color: white;\n  background-color: #3b4c98;\n  border: none;\n  border-radius: 3px;\n  &:hover,\n  &:focus {\n    background-color: #5a73e2;\n  }\n"]))),ie=n(329);function se(){var e=(0,a.useState)(""),t=(0,f.Z)(e,2),n=t[0],o=t[1],r=(0,a.useState)(""),c=(0,f.Z)(r,2),u=c[0],l=c[1],d=(0,i.I0)(),p=(0,i.v9)(te.Af),m=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":o(r);break;case"number":l(r)}},v=function(){o(""),l("")};return(0,ie.jsxs)(ie.Fragment,{children:[(0,ie.jsxs)(ne,{onSubmit:function(e){e.preventDefault();var t=p.find((function(e){return e.name===n}));if(t)X.error("".concat(n," is already in contacts"));else{var o={name:n,number:u};d((0,s.uK)(o))}v()},children:[(0,ie.jsxs)(oe,{children:["Name",(0,ie.jsx)(re,{type:"text",name:"name",value:n,onChange:m,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,ie.jsxs)(oe,{children:["Number",(0,ie.jsx)(re,{type:"tel",name:"number",value:u,onChange:m,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,ie.jsx)(ae,{type:"submit",children:"Add contact"})]}),(0,ie.jsx)(S,{position:"top-left",autoClose:2e3,closeOnClick:!0,theme:"colored"})]})}var ce,ue,le,de,fe=n(983);function pe(e){return(0,fe.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]})(e)}var me=u.Z.ul(ce||(ce=(0,c.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  padding-left: 20px;\n  padding-right: 20px;\n"]))),ve=u.Z.li(ue||(ue=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),he=u.Z.p(le||(le=(0,c.Z)(["\n  margin: 6px 0;\n"]))),ge=u.Z.button(de||(de=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 30px;\n  width: 30px;\n  border: none;\n  background-color: inherit;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: white;\n\n    border: 1px solid #b5b5b5;\n  }\n"])));function ye(){var e=(0,i.I0)(),t=(0,i.v9)(te.Af),n=(0,i.v9)(te.AD),o=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,ie.jsx)(me,{children:o.map((function(t){var n=t.name,o=t.number,r=t.id;return(0,ie.jsxs)(ve,{children:[(0,ie.jsxs)(he,{children:[n,": ",o]}),(0,ie.jsx)(ge,{type:"button",onClick:function(){return e((0,s.GK)(r))},children:(0,ie.jsx)(pe,{size:24})})]},r)}))})}var be,Te,Ee=n(895),xe=u.Z.label(be||(be=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n  font-weight: 500;\n"]))),Ze=u.Z.input(Te||(Te=(0,c.Z)(["\n  text-align: center;\n  font-size: 14px;\n  height: 25px;\n  width: 100%;\n  &::placeholder {\n    color: #cecece;\n  }\n"])));function Ce(){var e=(0,i.I0)(),t=(0,i.v9)(te.AD);return(0,ie.jsx)(xe,{children:(0,ie.jsx)(Ze,{type:"text",value:t,onChange:function(t){return e((0,Ee.L)(t.currentTarget.value))},placeholder:"Find contacts by name"})})}function Ie(){var e=(0,i.I0)();return(0,a.useEffect)((function(){e((0,s.Qd)())}),[e]),(0,ie.jsxs)("section",{children:[(0,ie.jsx)(l,{children:"Phonebook"}),(0,ie.jsx)(se,{}),(0,ie.jsx)(d,{children:"Contacts"}),(0,ie.jsx)(Ce,{}),(0,ie.jsx)(ye,{})]})}}}]);
//# sourceMappingURL=256.1b56bf21.chunk.js.map