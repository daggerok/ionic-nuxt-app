(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{279:function(e,t,o){"use strict";o.r(t),o.d(t,"iosTransitionAnimation",(function(){return S})),o.d(t,"shadow",(function(){return shadow}));o(42),o(5),o(267);var r=o(273),n=(o(272),o(275)),l=function(e,t){return void 0===t&&(t="top"),"calc("+e+"px + var(--ion-safe-area-"+t+"))"},c=function(e){return document.querySelector(e+".ion-cloned-element")},shadow=function(e){return e.shadowRoot||e},f=function(e){return e.querySelector("ion-header:not(.header-collapse-condense-inactive) ion-title[size=large]")},d=function(e,t){for(var o=0,r=e.querySelectorAll("ion-buttons");o<r.length;o++){var n=r[o],l=n.closest("ion-header"),c=l&&!l.classList.contains("header-collapse-condense-inactive"),f=n.querySelector("ion-back-button"),d=n.classList.contains("buttons-collapse");if(null!==f&&(d&&c&&t||!d))return f}return null},y=function(e,t,o,n){var f=n.getBoundingClientRect(),d=t?"calc(100% - "+(f.right+4)+"px)":f.left-4+"px",y=t?"7px":"-7px",m=t?"-4px":"4px",S=t?"-4px":"4px",v=t?"right":"left",T=t?"left":"right",h=[{offset:0,opacity:0,transform:"translate("+y+", "+l(8)+") scale(2.1)"},{offset:1,opacity:1,transform:"translate("+m+", "+l(-40)+") scale(1)"}],E=[{offset:0,opacity:1,transform:"translate("+m+", "+l(-40)+") scale(1)"},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate("+y+", "+l(8)+") scale(2.1)"}],A=o?E:h,X=[{offset:0,opacity:0,transform:"translate3d("+S+", "+l(-35)+", 0) scale(0.6)"},{offset:1,opacity:1,transform:"translate3d("+S+", "+l(-40)+", 0) scale(1)"}],j=[{offset:0,opacity:1,transform:"translate("+S+", "+l(-40)+") scale(1)"},{offset:.2,opacity:0,transform:"translate("+S+", "+l(-35)+") scale(0.6)"},{offset:1,opacity:0,transform:"translate("+S+", "+l(-35)+") scale(0.6)"}],O=o?j:X,x=Object(r.a)(),C=Object(r.a)(),w=c("ion-back-button"),k=w.querySelector(".button-text"),P=w.querySelector("ion-icon");w.text=n.text,w.mode=n.mode,w.icon=n.icon,w.color=n.color,w.disabled=n.disabled,w.style.setProperty("display","block"),w.style.setProperty("position","fixed"),C.addElement(P),x.addElement(k),x.beforeStyles({"transform-origin":v+" center"}).beforeAddWrite((function(){n.style.setProperty("display","none"),w.style.setProperty(v,d)})).afterAddWrite((function(){n.style.setProperty("display",""),w.style.setProperty("display","none"),w.style.removeProperty(v)})).keyframes(A),C.beforeStyles({"transform-origin":T+" center"}).keyframes(O),e.addAnimation([x,C])},m=function(e,t,o,n){var f,d=n.getBoundingClientRect(),y=t?"calc(100% - "+d.right+"px)":d.left+"px",m=t?"-18px":"18px",S=t?"right":"left",v=[{offset:0,opacity:0,transform:"translate("+m+", "+l(0)+") scale(0.49)"},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate(0, "+l(49)+") scale(1)"}],T=[{offset:0,opacity:.99,transform:"translate(0, "+l(49)+") scale(1)"},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate("+m+", "+l(0)+") scale(0.5)"}],h=o?v:T,E=c("ion-title"),A=Object(r.a)();E.innerText=n.innerText,E.size=n.size,E.color=n.color,A.addElement(E),A.beforeStyles((f={"transform-origin":S+" center",height:"46px",display:"",position:"relative"},f[S]=y,f)).beforeAddWrite((function(){n.style.setProperty("display","none")})).afterAddWrite((function(){n.style.setProperty("display",""),E.style.setProperty("display","none")})).keyframes(h),e.addAnimation(A)},S=function(e,t){try{var o="rtl"===e.ownerDocument.dir,l=o?"-99.5%":"99.5%",c=o?"33%":"-33%",S=t.enteringEl,v=t.leavingEl,T="back"===t.direction,h=S.querySelector(":scope > ion-content"),E=S.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),A=S.querySelectorAll(":scope > ion-header > ion-toolbar"),X=Object(r.a)(),j=Object(r.a)();if(X.addElement(S).duration(t.duration||540).easing(t.easing||"cubic-bezier(0.32,0.72,0,1)").fill("both").beforeRemoveClass("ion-page-invisible"),v&&e){var O=Object(r.a)();O.addElement(e),X.addAnimation(O)}if(h||0!==A.length||0!==E.length?(j.addElement(h),j.addElement(E)):j.addElement(S.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),X.addAnimation(j),T?j.beforeClearStyles(["opacity"]).fromTo("transform","translateX("+c+")","translateX(0%)").fromTo("opacity",.8,1):j.beforeClearStyles(["opacity"]).fromTo("transform","translateX("+l+")","translateX(0%)"),h){var x=shadow(h).querySelector(".transition-effect");if(x){var C=x.querySelector(".transition-cover"),w=x.querySelector(".transition-shadow"),k=Object(r.a)(),P=Object(r.a)(),L=Object(r.a)();k.addElement(x).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),P.addElement(C).beforeClearStyles(["opacity"]).fromTo("opacity",0,.1),L.addElement(w).beforeClearStyles(["opacity"]).fromTo("opacity",.03,.7),k.addAnimation([P,L]),j.addAnimation([k])}}var W=S.querySelector("ion-header.header-collapse-condense"),z=function(e,t,o,r,n){var l=d(r,o),c=f(n),S=f(r),v=d(n,o),T=null!==l&&null!==c&&!o,h=null!==S&&null!==v&&o;return T?(m(e,t,o,c),y(e,t,o,l)):h&&(m(e,t,o,S),y(e,t,o,v)),{forward:T,backward:h}}(X,o,T,S,v),R=z.forward,B=z.backward;if(A.forEach((function(e){var t=Object(r.a)();t.addElement(e),X.addAnimation(t);var n=Object(r.a)();n.addElement(e.querySelector("ion-title"));var f,d=Object(r.a)(),y=Array.from(e.querySelectorAll("ion-buttons,[menuToggle]")),m=e.closest("ion-header"),S=m&&m.classList.contains("header-collapse-condense-inactive");f=T?y.filter((function(button){var e=button.classList.contains("buttons-collapse");return e&&!S||!e})):y.filter((function(button){return!button.classList.contains("buttons-collapse")})),d.addElement(f);var v=Object(r.a)();v.addElement(e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var h=Object(r.a)();h.addElement(shadow(e).querySelector(".toolbar-background"));var E=Object(r.a)(),A=e.querySelector("ion-back-button");if(A&&E.addElement(A),t.addAnimation([n,d,v,h,E]),d.fromTo("opacity",.01,1),v.fromTo("opacity",.01,1),T)S||n.fromTo("transform","translateX("+c+")","translateX(0%)").fromTo("opacity",.01,1),v.fromTo("transform","translateX("+c+")","translateX(0%)"),E.fromTo("opacity",.01,1);else if(W||n.fromTo("transform","translateX("+l+")","translateX(0%)").fromTo("opacity",.01,1),v.fromTo("transform","translateX("+l+")","translateX(0%)"),h.beforeClearStyles(["opacity"]).fromTo("opacity",.01,1),R||E.fromTo("opacity",.01,1),A&&!R){var j=Object(r.a)();j.addElement(shadow(A).querySelector(".button-text")).fromTo("transform",o?"translateX(-100px)":"translateX(100px)","translateX(0px)"),t.addAnimation(j)}})),v){var D=Object(r.a)(),J=v.querySelector(":scope > ion-content");if(D.addElement(J),D.addElement(v.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),X.addAnimation(D),T){D.beforeClearStyles(["opacity"]).fromTo("transform","translateX(0%)",o?"translateX(-100%)":"translateX(100%)");var F=Object(n.b)(v);X.afterAddWrite((function(){"normal"===X.getDirection()&&F.style.setProperty("display","none")}))}else D.fromTo("transform","translateX(0%)","translateX("+c+")").fromTo("opacity",1,.8);if(J){var G=shadow(J).querySelector(".transition-effect");if(G){var H=G.querySelector(".transition-cover"),I=G.querySelector(".transition-shadow"),K=Object(r.a)(),M=Object(r.a)(),N=Object(r.a)();K.addElement(G).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),M.addElement(H).beforeClearStyles(["opacity"]).fromTo("opacity",.1,0),N.addElement(I).beforeClearStyles(["opacity"]).fromTo("opacity",.7,.03),K.addAnimation([M,N]),D.addAnimation([K])}}v.querySelectorAll(":scope > ion-header > ion-toolbar").forEach((function(e){var t=Object(r.a)();t.addElement(e);var n=Object(r.a)();n.addElement(e.querySelector("ion-title"));var l=Object(r.a)(),f=e.querySelectorAll("ion-buttons,[menuToggle]"),d=e.closest("ion-header"),y=d&&d.classList.contains("header-collapse-condense-inactive"),m=Array.from(f).filter((function(button){var e=button.classList.contains("buttons-collapse");return e&&!y||!e}));l.addElement(m);var S=Object(r.a)(),v=e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");v.length>0&&S.addElement(v);var h=Object(r.a)();h.addElement(shadow(e).querySelector(".toolbar-background"));var E=Object(r.a)(),A=e.querySelector("ion-back-button");if(A&&E.addElement(A),t.addAnimation([n,l,S,E,h]),X.addAnimation(t),E.fromTo("opacity",.99,0),l.fromTo("opacity",.99,0),S.fromTo("opacity",.99,0),T){if(y||n.fromTo("transform","translateX(0%)",o?"translateX(-100%)":"translateX(100%)").fromTo("opacity",.99,0),S.fromTo("transform","translateX(0%)",o?"translateX(-100%)":"translateX(100%)"),h.beforeClearStyles(["opacity"]).fromTo("opacity",1,.01),A&&!B){var j=Object(r.a)();j.addElement(shadow(A).querySelector(".button-text")).fromTo("transform","translateX(0%)","translateX("+(o?-124:124)+"px)"),t.addAnimation(j)}}else y||n.fromTo("transform","translateX(0%)","translateX("+c+")").fromTo("opacity",.99,0).afterClearStyles(["transform","opacity"]),S.fromTo("transform","translateX(0%)","translateX("+c+")").afterClearStyles(["transform","opacity"]),E.afterClearStyles(["opacity"]),n.afterClearStyles(["opacity"]),l.afterClearStyles(["opacity"])}))}return X}catch(e){throw e}}}}]);