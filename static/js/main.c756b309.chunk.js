(this.webpackJsonpreact_hook_2020=this.webpackJsonpreact_hook_2020||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(2),i=n.n(c),a=(n(9),n(1)),u=[{id:1,tab:"section 1",content:"I'm the content of the section 1"},{id:2,tab:"section 2",content:"I'm the content of the section 2"},{id:3,tab:"section 3",content:"I'm the content of the section 3"}],l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Object(o.useRef)();return Object(o.useEffect)((function(){if("number"===typeof e&&"number"===typeof t&&n.current){var o=n.current;o.style.opacity=1,o.style.transition="opacity ".concat(e,"s ease-in-out ").concat(t,"s")}}),[]),{ref:n,style:{opacity:0}}},f=function(){var e=Object(o.useState)(0),t=Object(a.a)(e,2),n=t[0],c=t[1],i=function(e,t){var n=Object(o.useState)(e),r=Object(a.a)(n,2),c=r[0],i=r[1];return{value:c,onChange:function(e){var n=e.target.value,o=!0;"function"===typeof t&&(o=t(n)),o&&(i(n),console.log(n))}}}("Mr.",(function(e){return e.length<=10})),f=function(e,t){var n=Object(o.useState)(e),r=Object(a.a)(n,2),c=r[0],i=r[1];if(t&&Array.isArray(t))return{currentItem:t[c],changeItem:i}}(0,u),s=f.currentItem,m=f.changeItem,d=function(e){var t=Object(o.useState)(e),n=Object(a.a)(t,2),r=n[0],c=n[1];return Object(o.useEffect)((function(){document.querySelector("title").innerText=r}),[r]),c}("loading...");setTimeout((function(){return d("home")}),5e3);var v=function(e){var t=Object(o.useRef)();return Object(o.useEffect)((function(){return t.current&&t.current.addEventListener("click",e),function(){t.current&&t.current.removeEventListener("click",e)}}),[]),t}((function(){return console.log("say Hello")})),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;if(t&&"function"===typeof t&&(!n||"function"===typeof n)){var o=function(){window.confirm(e)?t():n()};return o}}("Are you sure?",(function(){return console.log("Deleting message....")}),(function(){return console.log("abourt")})),g=function(){var e=function(e){e.preventDefault(),e.returnValue=""};return{enablePrevent:function(){return window.addEventListener("beforeunload",e)},disablePrevent:function(){return window.removeEventListener("beforeunload",e)}}}(),E=g.enablePrevent,h=g.disablePrevent;!function(e){var t=function(t){t.clientY<=0||e()};Object(o.useEffect)((function(){if("function"===typeof e)return document.addEventListener("mouseleave",t),function(){return document.removeEventListener("mouseleave",t)}}),[])}((function(){console.log("plz Don't leave")}));var w=l(2,3),p=l(3,2),y=function(e){var t=Object(o.useState)(navigator.onLine),n=Object(a.a)(t,2),r=n[0],c=n[1],i=function(){"function"===typeof e&&e(navigator.onLine),c(navigator.onLine)};return Object(o.useEffect)((function(){return window.addEventListener("online",i),window.addEventListener("offline",i),function(){window.removeEventListener("online",i),window.removeEventListener("offline",i)}}),[]),r}(),O=function(){var e=Object(o.useState)({x:0,y:0}),t=Object(a.a)(e,2),n=t[0],r=t[1],c=function(){r({y:window.scrollY,x:window.scrollX})};return Object(o.useEffect)((function(){return window.addEventListener("scroll",c),function(){return window.removeEventListener("scroll",c)}}),[]),n}().y,j=function(e){var t=Object(o.useRef)();return{element:t,triggerFull:function(){t.current&&(t.current.requestFullscreen(),e&&"function"===typeof e&&e(!0))},exitFull:function(){document.exitFullscreen(),e&&"function"===typeof e&&e(!1)}}}((function(e){console.log(e?"We are Full":"We are Small")})),k=j.element,L=j.triggerFull,C=j.exitFull,F=function(e,t){if("Notification"in window){return function(){"granted"!==Notification.permission?Notification.requestPermission().then((function(n){"granted"===Notification.permission&&new Notification(e,t)})):new Notification(e,t)}}}("it's working wow",{body:"And i making"});return r.a.createElement("div",{className:"App",style:{height:"1000vh"}},r.a.createElement("h1",null,y?"Online":"Offline"),r.a.createElement("h1",{ref:v},n),r.a.createElement("button",{onClick:function(){return c(n+1)}},"Increment"),r.a.createElement("button",{onClick:function(){return c(n-1)}},"Decrement"),r.a.createElement("input",Object.assign({placeholder:"Name"},i)),u.map((function(e,t){return r.a.createElement("button",{onClick:function(){return m(t)}},e.tab)})),r.a.createElement("div",null,s.content),r.a.createElement("h2",{ref:v},"Hi"),r.a.createElement("button",{onClick:b},"Delete message"),r.a.createElement("div",null,r.a.createElement("h2",null,"Prevent Btn"),r.a.createElement("button",{onClick:E},"Protect"),r.a.createElement("button",{onClick:h},"Unprotect")),r.a.createElement("div",{style:{position:"fixed",color:O>100?"red":"#000"}},r.a.createElement("h2",w,"FadeIn Title"),r.a.createElement("p",p,"FadeIn description")),r.a.createElement("div",null,r.a.createElement("div",{ref:k},r.a.createElement("button",{style:{display:"block"},onClick:C},"Eixt Full Screen"),r.a.createElement("img",{src:"https://imgaz.staticbg.com/thumb/large/oaupload/ser1/banggood/images/A9/C4/8a9cb55d-f7f1-4c36-91bb-3ce1bcb85e37.jpg"})),r.a.createElement("button",{onClick:L},"Use Full Screen")),r.a.createElement("button",{onClick:F}," Notification "))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.c756b309.chunk.js.map