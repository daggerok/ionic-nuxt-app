(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{230:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_popover",(function(){return j}));var o=n(16),r=n(42),c=(n(5),n(267),n(273)),l=(n(272),n(268)),d=n(266),f=n(274),v=n(275),m=function(e,t){var n="top",o="left",r=e.querySelector(".popover-content"),l=r.getBoundingClientRect(),d=l.width,f=l.height,v=e.ownerDocument.defaultView.innerWidth,m=e.ownerDocument.defaultView.innerHeight,w=t&&t.target&&t.target.getBoundingClientRect(),y=null!=w&&"top"in w?w.top:m/2-f/2,O=null!=w&&"left"in w?w.left:v/2,j=w&&w.width||0,x=w&&w.height||0,E=e.querySelector(".popover-arrow"),k=E.getBoundingClientRect(),D=k.width,P=k.height;null==w&&(E.style.display="none");var S={top:y+x,left:O+j/2-D/2},A={top:y+x+(P-1),left:O+j/2-d/2},L=!1,T=!1;A.left<h+25?(L=!0,A.left=h):d+h+A.left+25>v&&(T=!0,A.left=v-d-h,o="right"),y+x+f>m&&y-f>0?(S.top=y-(P+1),A.top=y-f-(P-1),e.className=e.className+" popover-bottom",n="bottom"):y+x+f>m&&(r.style.bottom=h+"%"),E.style.top=S.top+"px",E.style.left=S.left+"px",r.style.top=A.top+"px",r.style.left=A.left+"px",L&&(r.style.left="calc("+A.left+"px + var(--ion-safe-area-left, 0px))"),T&&(r.style.left="calc("+A.left+"px - var(--ion-safe-area-right, 0px))"),r.style.transformOrigin=n+" "+o;var C=Object(c.a)(),W=Object(c.a)(),B=Object(c.a)();return W.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.08),B.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),C.addElement(e).easing("ease").duration(100).addAnimation([W,B])},h=5,w=function(e){var t=Object(c.a)(),n=Object(c.a)(),o=Object(c.a)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.08,0),o.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([n,o])},y=function(e,t){var n=e.ownerDocument,o="rtl"===n.dir,r="top",l=o?"right":"left",d=e.querySelector(".popover-content"),f=d.getBoundingClientRect(),v=f.width,m=f.height,h=n.defaultView.innerWidth,w=n.defaultView.innerHeight,y=t&&t.target&&t.target.getBoundingClientRect(),O=null!=y&&"bottom"in y?y.bottom:w/2-m/2,j=null!=y&&"left"in y?o?y.left-v+y.width:y.left:h/2-v/2,x=y&&y.height||0,E={top:O,left:j};E.left<12?(E.left=12,l="left"):v+12+E.left>h&&(E.left=h-v-12,l="right"),O+x+m>w&&O-m>0?(E.top=O-m-x,e.className=e.className+" popover-bottom",r="bottom"):O+x+m>w&&(d.style.bottom="12px");var k=Object(c.a)(),D=Object(c.a)(),P=Object(c.a)(),S=Object(c.a)(),A=Object(c.a)();return D.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),P.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),S.addElement(d).beforeStyles({top:E.top+"px",left:E.left+"px","transform-origin":r+" "+l}).fromTo("transform","scale(0.001)","scale(1)"),A.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),k.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([D,P,S,A])},O=function(e){var t=Object(c.a)(),n=Object(c.a)(),o=Object(c.a)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0),o.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([n,o])},j=function(){function e(e){var t=this;Object(r.l)(this,e),this.presented=!1,this.mode=Object(r.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onBackdropTap=function(){t.dismiss(void 0,l.a)},this.onLifecycle=function(e){var n=t.usersElement,o=x[e.type];if(n&&o){var r=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});n.dispatchEvent(r)}},Object(l.e)(this.el),this.didPresent=Object(r.d)(this,"ionPopoverDidPresent",7),this.willPresent=Object(r.d)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(r.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(r.d)(this,"ionPopoverDidDismiss",7)}return e.prototype.present=function(){return Object(o.a)(this,void 0,void 0,(function(){var e,data,t;return Object(o.c)(this,(function(n){switch(n.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return data=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),t=this,[4,Object(f.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],data)];case 1:return t.usersElement=n.sent(),[4,Object(v.a)(this.usersElement)];case 2:return n.sent(),[2,Object(l.f)(this,"popoverEnter",m,y,this.event)]}}))}))},e.prototype.dismiss=function(data,e){return Object(o.a)(this,void 0,void 0,(function(){var t;return Object(o.c)(this,(function(n){switch(n.label){case 0:return[4,Object(l.g)(this,data,e,"popoverLeave",w,O,this.event)];case 1:return(t=n.sent())?[4,Object(f.b)(this.delegate,this.usersElement)]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2,t]}}))}))},e.prototype.onDidDismiss=function(){return Object(l.h)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(l.h)(this.el,"ionPopoverWillDismiss")},e.prototype.render=function(){var e,t=Object(r.e)(this),n=this.onLifecycle;return Object(r.i)(r.a,{"aria-modal":"true","no-router":!0,style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(d.b)(this.cssClass)),(e={},e[t]=!0,e["popover-translucent"]=this.translucent,e)),onIonPopoverDidPresent:n,onIonPopoverWillPresent:n,onIonPopoverWillDismiss:n,onIonPopoverDidDismiss:n,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(r.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(r.i)("div",{class:"popover-wrapper"},Object(r.i)("div",{class:"popover-arrow"}),Object(r.i)("div",{class:"popover-content"})))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return'.sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}'},enumerable:!0,configurable:!0}),e}(),x={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return f}));var o=n(16),r=function(e,t){return null!==t.closest(e)},c=function(e){var t;return"string"==typeof e&&e.length>0?((t={"ion-color":!0})["ion-color-"+e]=!0,t):void 0},l=function(e){var map={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return map[e]=!0})),map},d=/^[a-z][a-z0-9+\-.]*:/,f=function(e,t,n){return Object(o.a)(void 0,void 0,void 0,(function(){var r;return Object(o.c)(this,(function(o){return null!=e&&"#"!==e[0]&&!d.test(e)&&(r=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,r.push(e,n)]):[2,!1]}))}))}},267:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return w})),n.d(t,"i",(function(){return m})),n.d(t,"j",(function(){return h})),n.d(t,"k",(function(){return r}));var o=n(16),r=function(e){return"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e)},c=function(e){return!!e.shadowRoot&&!!e.attachShadow},l=function(e){var t=e.closest("ion-item");return t?t.querySelector("ion-label"):null},d=function(e,t,n,o,r){if(e||c(t)){var input=t.querySelector("input.aux-input");input||((input=t.ownerDocument.createElement("input")).type="hidden",input.classList.add("aux-input"),t.appendChild(input)),input.disabled=r,input.name=n,input.value=o||""}},f=function(e,t,n){return Math.max(e,Math.min(t,n))},v=function(e,t){if(!e){var n="ASSERT: "+t;throw console.error(n),new Error(n)}},m=function(e){return e.timeStamp||Date.now()},h=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},w=function(e){var t="rtl"===document.dir;switch(e){case"start":return t;case"end":return!t;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}},y=function(e,t){var n=e._original||e;return{_original:e,emit:O(n.emit.bind(n),t)}},O=function(e,t){var n;return void 0===t&&(t=0),function(){for(var r=[],c=0;c<arguments.length;c++)r[c]=arguments[c];clearTimeout(n),n=setTimeout.apply(void 0,Object(o.d)([e,t],r))}}},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return W})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return x})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return P})),n.d(t,"i",(function(){return w})),n.d(t,"j",(function(){return A})),n.d(t,"k",(function(){return O})),n.d(t,"l",(function(){return j})),n.d(t,"m",(function(){return v})),n.d(t,"n",(function(){return C}));var o=n(16),r=n(5),c=0,l=function(e){return{create:function(t){return w(e,t)},dismiss:function(data,t,n){return O(document,data,t,e,n)},getTop:function(){return Object(o.a)(this,void 0,void 0,(function(){return Object(o.c)(this,(function(t){return[2,j(document,e)]}))}))}}},d=l("ion-alert"),f=l("ion-action-sheet"),v=l("ion-picker"),m=l("ion-popover"),h=function(e){var t=document;y(t);var n=c++;e.overlayIndex=n,e.hasAttribute("id")||(e.id="ion-overlay-"+n)},w=function(e,t){return customElements.whenDefined(e).then((function(){var n=document,element=n.createElement(e);return element.classList.add("overlay-hidden"),Object.assign(element,t),k(n).appendChild(element),element.componentOnReady()}))},y=function(e){0===c&&(c=1,e.addEventListener("focusin",(function(t){var n=j(e);if(n&&n.backdropDismiss&&!L(n,t.target)){var o=n.querySelector("input,button");o&&o.focus()}})),e.addEventListener("ionBackButton",(function(t){var n=j(e);n&&n.backdropDismiss&&t.detail.register(100,(function(){return n.dismiss(void 0,W)}))})),e.addEventListener("keyup",(function(t){if("Escape"===t.key){var n=j(e);n&&n.backdropDismiss&&n.dismiss(void 0,W)}})))},O=function(e,data,t,n,o){var r=j(e,n,o);return r?r.dismiss(data,t):Promise.reject("overlay does not exist")},j=function(e,t,n){var o=function(e,t){return void 0===t&&(t="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(e.querySelectorAll(t)).filter((function(e){return e.overlayIndex>0}))}(e,t);return void 0===n?o[o.length-1]:o.find((function(e){return e.id===n}))},x=function(e,t,n,c,l){return Object(o.a)(void 0,void 0,void 0,(function(){var d;return Object(o.c)(this,(function(o){switch(o.label){case 0:return e.presented?[2]:(e.presented=!0,e.willPresent.emit(),d=e.enterAnimation?e.enterAnimation:r.b.get(t,"ios"===e.mode?n:c),[4,D(e,d,e.el,l)]);case 1:return o.sent()&&e.didPresent.emit(),[2]}}))}))},E=function(e,data,t,n,c,l,d){return Object(o.a)(void 0,void 0,void 0,(function(){var f,v;return Object(o.c)(this,(function(o){switch(o.label){case 0:if(!e.presented)return[2,!1];e.presented=!1,o.label=1;case 1:return o.trys.push([1,3,,4]),e.willDismiss.emit({data:data,role:t}),f=e.leaveAnimation?e.leaveAnimation:r.b.get(n,"ios"===e.mode?c:l),[4,D(e,f,e.el,d)];case 2:return o.sent(),e.didDismiss.emit({data:data,role:t}),[3,4];case 3:return v=o.sent(),console.error(v),[3,4];case 4:return e.el.remove(),[2,!0]}}))}))},k=function(e){return e.querySelector("ion-app")||e.body},D=function(e,t,c,l){return Object(o.a)(void 0,void 0,void 0,(function(){var d,f,v,m,h;return Object(o.c)(this,(function(o){switch(o.label){case 0:if(e.animation)return e.animation.destroy(),e.animation=void 0,[2,!1];c.classList.remove("overlay-hidden"),d=c.shadowRoot||e.el,v=!0,o.label=1;case 1:return o.trys.push([1,4,,5]),[4,n.e(6).then(n.bind(null,269))];case 2:return[4,o.sent().create(t,d,l)];case 3:return f=o.sent(),[3,5];case 4:return o.sent(),(f=t(d,l)).fill("both"),v=!1,[3,5];case 5:return e.animation=f,e.animated&&r.b.getBoolean("animated",!0)||f.duration(0),e.keyboardClose&&f.beforeAddWrite((function(){var e=c.ownerDocument.activeElement;e&&e.matches("input, ion-input, ion-textarea")&&e.blur()})),[4,f.playAsync()];case 6:return m=o.sent(),h=void 0===m||f.hasCompleted,v&&f.destroy(),e.animation=void 0,[2,h]}}))}))},P=function(element,e){var t,n=new Promise((function(e){return t=e}));return S(element,e,(function(e){t(e.detail)})),n},S=function(element,e,t){var n=function(o){element.removeEventListener(e,n),t(o)};element.addEventListener(e,n)},A=function(e){return"cancel"===e||e===W},L=function(e,t){for(;t;){if(t===e)return!0;t=t.parentElement}return!1},T=function(e){return e()},C=function(e,t){if("function"==typeof e)return r.b.get("_zoneGate",T)((function(){try{return e(t)}catch(e){console.error(e)}}))},W="backdrop"},272:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return d}));var o="ionViewWillEnter",r="ionViewDidEnter",c="ionViewWillLeave",l="ionViewDidLeave",d="ionViewWillUnload"},274:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var o=n(16),r=function(e,t,component,n,r){return Object(o.a)(void 0,void 0,void 0,(function(){var c;return Object(o.c)(this,(function(o){switch(o.label){case 0:if(e)return[2,e.attachViewToDom(t,component,r,n)];if("string"!=typeof component&&!(component instanceof HTMLElement))throw new Error("framework delegate is missing");return c="string"==typeof component?t.ownerDocument&&t.ownerDocument.createElement(component):component,n&&n.forEach((function(e){return c.classList.add(e)})),r&&Object.assign(c,r),t.appendChild(c),c.componentOnReady?[4,c.componentOnReady()]:[3,2];case 1:o.sent(),o.label=2;case 2:return[2,c]}}))}))},c=function(e,element){if(element){if(e){var t=element.parentElement;return e.removeViewFromDom(t,element)}element.remove()}return Promise.resolve()}},275:function(e,t,n){"use strict";n.d(t,"a",(function(){return P})),n.d(t,"b",(function(){return L})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return S})),n.d(t,"e",(function(){return l}));var o=n(16),r=n(42),c=n(272),l=function(e){return new Promise((function(t,n){Object(r.m)((function(){d(e),f(e).then((function(n){n.animation&&n.animation.destroy(),v(e),t(n)}),(function(t){v(e),n(t)}))}))}))},d=function(e){var t=e.enteringEl,n=e.leavingEl;A(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),S(t,!1),n&&S(n,!1)},f=function(e){return Object(o.a)(void 0,void 0,void 0,(function(){var t;return Object(o.c)(this,(function(n){switch(n.label){case 0:return[4,m(e)];case 1:return t=n.sent(),[2,t?h(t,e):w(e)]}}))}))},v=function(e){var t=e.enteringEl,n=e.leavingEl;t.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},m=function(e){return Object(o.a)(void 0,void 0,void 0,(function(){var t;return Object(o.c)(this,(function(o){switch(o.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,Promise.all([n.e(0),n.e(96)]).then(n.bind(null,279))]:[2,void 0];case 1:return t=o.sent().iosTransitionAnimation,[3,4];case 2:return[4,Promise.all([n.e(0),n.e(97)]).then(n.bind(null,280))];case 3:t=o.sent().mdTransitionAnimation,o.label=4;case 4:return[2,t]}}))}))},h=function(e,t){return Object(o.a)(void 0,void 0,void 0,(function(){var r,c;return Object(o.c)(this,(function(o){switch(o.label){case 0:return[4,y(t,!0)];case 1:o.sent(),o.label=2;case 2:return o.trys.push([2,5,,6]),[4,n.e(6).then(n.bind(null,269))];case 3:return[4,o.sent().create(e,t.baseEl,t)];case 4:return r=o.sent(),[3,6];case 5:return o.sent(),r=e(t.baseEl,t),[3,6];case 6:return x(t.enteringEl,t.leavingEl),[4,j(r,t)];case 7:return c=o.sent(),t.progressCallback&&t.progressCallback(void 0),c&&E(t.enteringEl,t.leavingEl),[2,{hasCompleted:c,animation:r}]}}))}))},w=function(e){return Object(o.a)(void 0,void 0,void 0,(function(){var t,n;return Object(o.c)(this,(function(o){switch(o.label){case 0:return t=e.enteringEl,n=e.leavingEl,[4,y(e,!1)];case 1:return o.sent(),x(t,n),E(t,n),[2,{hasCompleted:!0}]}}))}))},y=function(e,t){return Object(o.a)(void 0,void 0,void 0,(function(){var n,r;return Object(o.c)(this,(function(o){switch(o.label){case 0:return n=void 0!==e.deepWait?e.deepWait:t,r=n?[P(e.enteringEl),P(e.leavingEl)]:[D(e.enteringEl),D(e.leavingEl)],[4,Promise.all(r)];case 1:return o.sent(),[4,O(e.viewIsReady,e.enteringEl)];case 2:return o.sent(),[2]}}))}))},O=function(e,t){return Object(o.a)(void 0,void 0,void 0,(function(){return Object(o.c)(this,(function(n){switch(n.label){case 0:return e?[4,e(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}}))}))},j=function(e,t){var n=t.progressCallback,o=new Promise((function(t){e.onFinish((function(n){"number"==typeof n?t(1===n):void 0!==e.hasCompleted&&t(e.hasCompleted)}))}));return n?(e.progressStart(!0),n(e)):e.play(),o},x=function(e,t){k(t,c.c),k(e,c.a)},E=function(e,t){k(e,c.b),k(t,c.d)},k=function(e,t){if(e){var n=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}},D=function(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()},P=function(e){return Object(o.a)(void 0,void 0,void 0,(function(){var element;return Object(o.c)(this,(function(t){switch(t.label){case 0:return(element=e)?null==element.componentOnReady?[3,2]:[4,element.componentOnReady()]:[3,4];case 1:if(null!=t.sent())return[2];t.label=2;case 2:return[4,Promise.all(Array.from(element.children).map(P))];case 3:t.sent(),t.label=4;case 4:return[2]}}))}))},S=function(e,t){t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},A=function(e,t,n){void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")},L=function(element){if(element.classList.contains("ion-page"))return element;var e=element.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return e||element}}}]);