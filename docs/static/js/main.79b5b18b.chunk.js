(this["webpackJsonp@nexys/string-replace"]=this["webpackJsonp@nexys/string-replace"]||[]).push([[0],{128:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(22),l=n.n(c),o=n(23),i=n(14),m=n(40),s=n(45),u=n.n(s),d=n(68),p=n(36),f=n(71),v=function(e,t,n){var a=new RegExp("i18n\\((\"|'|&quot;|&#x27;)".concat(t,"(\"|'|&quot;|&#x27;)\\)"),"g");return e.replace(a,n)},b=function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(0===a.length)return t;var r=Object(f.a)(a),c=r[0],l=r.slice(1),o=v(t,c,n[c]);return e(o,n,l)},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.keys(t);return b(e,t,n)},w=function(e){var t=new Blob([e],{type:"text/html"});return window.URL.createObjectURL(t)},E=p.Form,g={a:"replaced a",b:"replaced b"},x="default-i18n('a') and i18n('b') with\nbreak line",y="en.html",N=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var a=t.target.files[0],r=new FileReader;r.onloadend=function(t){var n=r.result;return e(n)},r.readAsText(a)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var k=function(){var e=Object(a.useState)(x),t=Object(m.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(JSON.stringify(g)),o=Object(m.a)(l,2),i=o[0],s=o[1],u=Object(a.useState)(null),d=Object(m.a)(u,2),p=d[0],f=d[1];return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=JSON.parse(i),a=h(n,t);f(w(a))}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("input",{type:"file",onChange:function(e){N(e).then((function(e){c(e)}))}})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(E.Textarea,{name:"dict",value:i,onChange:function(e){return s(e.value)}}))),r.a.createElement("input",{type:"submit",className:"btn btn-primary"})),p?r.a.createElement("a",{href:p,download:y},"Download"):null)},O=n(27),j={borderTop:"1px solid #e5e5e5",borderBottom:"1px solid #e5e5e5",boxShadow:"0 .25rem .75rem rgba(0, 0, 0, .05)"},S="String Replace",R="",B=[];var J=function(e){var t=r.a.createElement("header",null,r.a.createElement("div",{style:j,className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white"},r.a.createElement("h5",{className:"my-0 mr-md-auto font-weight-normal"},r.a.createElement(O.Link,{to:R+"/"},S)),r.a.createElement("nav",{className:"my-2 my-md-0 mr-md-3"},B.map((function(e,t){return r.a.createElement(O.Link,{className:"p-2 text-dark",key:t,to:e.link},e.name)})),r.a.createElement("a",{href:"https://github.com/Nexysweb/string-replace"},r.a.createElement(p.Components.Icon,{name:"code"})))));return r.a.createElement(r.a.Fragment,null,t,r.a.createElement("div",{className:"container"},e.children))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=i.a({basename:"/string-replace"});l.a.render(r.a.createElement(o.e,{history:L},r.a.createElement((function(){return r.a.createElement(J,null,r.a.createElement(k,null))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},72:function(e,t,n){e.exports=n(128)}},[[72,1,2]]]);
//# sourceMappingURL=main.79b5b18b.chunk.js.map