(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{280:function(n,e,t){"use strict";t.r(e),t.d(e,"mdTransitionAnimation",(function(){return c}));t(42),t(5),t(267);var o=t(273),r=(t(272),t(275)),c=function(n,e){var t="back"===e.direction,c=e.enteringEl,d=e.leavingEl,l=Object(r.b)(c),f=l.querySelector("ion-toolbar"),m=Object(o.a)();if(m.addElement(l).fill("both").beforeRemoveClass("ion-page-invisible"),t?m.duration(e.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):m.duration(e.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),f){var v=Object(o.a)();v.addElement(f),m.addAnimation(v)}if(d&&t){m.duration(e.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var w=Object(o.a)();w.addElement(Object(r.b)(d)).afterStyles({display:"none"}).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),m.addAnimation(w)}return m}}}]);