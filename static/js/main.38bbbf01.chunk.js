(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{171:function(e,t,n){"use strict";n.r(t);var r,a,c,l=n(1),s=n.n(l),i=n(55),o=n.n(i),d=(n(63),n(64),["title","titleId"]);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function f(e,t){var n=e.title,s=e.titleId,i=h(e,d);return l.createElement("svg",u({width:318.76,height:125.63,viewBox:"0 0 84.338 33.24",id:"svg101",xmlns:"http://www.w3.org/2000/svg",svg:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},i),n?l.createElement("title",{id:s},n):null,r||(r=l.createElement("defs",{id:"defs105"})),l.createElement("rect",{x:-43.894886,y:-33.238609,width:5.6829438,height:20,ry:0,fill:"#9f00ff",id:"rect1",style:{strokeWidth:.73747},transform:"scale(-1)"}),l.createElement("rect",{x:-51.778439,y:-33.240818,width:5.6829438,height:33,ry:0,fill:"#00ffac",id:"rect2",style:{strokeWidth:.73747},transform:"scale(-1)"}),l.createElement("rect",{x:-59.661991,y:-33.240818,width:5.6829438,height:27,ry:0,fill:"#00a3ff",id:"rect3",style:{strokeWidth:.73747},transform:"scale(-1)"}),l.createElement("g",{fill:"current",fontFamily:"'Bebas Neue'",fontSize:"25.498px",fontWeight:400,strokeWidth:.637,id:"g99",transform:"translate(0.00175171,0.0014872)"},l.createElement("text",{transform:"matrix(0.73747,0,0,0.73747,-40.1,-89.75)",x:53.330002,y:166.517,style:{lineHeight:1.25},xmlSpace:"preserve",id:"text93"},a||(a=l.createElement("tspan",{x:53.330002,y:166.517,id:"tspan91"},"BENCH"))),l.createElement("text",{transform:"matrix(0.73747,0,0,0.73747,-40.1,-89.75)",x:137.959,y:166.517,style:{lineHeight:1.25},xmlSpace:"preserve",id:"text97"},c||(c=l.createElement("tspan",{x:137.959,y:166.517,id:"tspan95"},"ARk")))))}var b=l.forwardRef(f),j=(n.p,n(6)),m=n(0),p=function(){if("undefined"!==typeof window&&window.localStorage){var e=window.localStorage.getItem("color-theme");if("string"===typeof e)return e;if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return"light"},x=s.a.createContext({});function g(e){var t=s.a.useState(p),n=Object(j.a)(t,2),r=n[0],a=n[1],c=function(e){var t=window.document.documentElement,n="dark"===e;t.classList.remove(n?"light":"dark"),t.classList.add(e),localStorage.setItem("color-theme",e)};return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){e.matches?c("dark"):c("light")})),e.initialTheme&&c(e.initialTheme),s.a.useEffect((function(){c(r)}),[r]),Object(m.jsx)(x.Provider,{value:{theme:r,setTheme:a},children:e.children})}n(34);function O(){var e=Object(l.useContext)(x),t=e.theme,n=e.setTheme;return Object(m.jsxs)("div",{className:"flex justify-between w-full mb-4 bg-transparent",children:[Object(m.jsx)(b,{style:{width:"150px",height:"auto"},fill:"dark"===t?"white":"black"}),Object(m.jsx)("button",{className:"inline-flex items-center px-4 py-2 bg-transparent",onClick:function(){n("dark"===t?"light":"dark")},children:Object(m.jsx)("img",{style:"dark"===t?{filter:"invert(1)"}:void 0,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABkklEQVRIie3WvUodQRQH8J969YIiBlIJPoEPoA8gWAliYgLiLbXyo/Gjip0vYGGRh0hhSBVI0kUuhiRdqkQtRFBQxMpbpdgRr+Dunf0AQfzDYWd35/z/M2fOmRmeEY+JYIVQKyH8Njy/FHHuLiFcClnCPRXwp3KkCddwjkYGaStYGho4U2A5G7jJEB8KVsQ3Wnw2h8+bsqLtRPOhXcMivknCeIavWHAX0vmYgXblGMAwPuIldnEQvo9hSZIT0zjNwdkRdfzEHvof+N8fBvUDfVUKr+Bfimi7+JFk9pWhibWIfhvYjyFsr7FJvG57b+EdrjDqbk2zcICt0B7Ctvuh/4DP5Nsy8yRiZWhiPaLfpshQx2IVh7KTawDHWK5SuI7fkpJ5SHwAn/BLZDnlWbeRQP5CsoE0g/+4pIQuMIWTHJyZeIW50K5Lanof18G+S8J7O9M5zJQVLXJIzKroZEojGAxWxDcVvbjs4LgTLA2NwNGbV7xTdr4PVogja+fKutbEIpXj0W6ZZW6SLfzB34rG8sTxHxQCSoItZf48AAAAAElFTkSuQmCC",alt:"change theme icon"})})]})}var v=n(7),y=n.n(v),w=n(14),k=n(56),N=n.n(k),A=(n(74),n(75),n(76),n(77),n(57));function S(e){var t,n=e.data,r=void 0,a=[],c=Object(l.useContext)(x).theme;n&&(r=Object.keys(n),Object.values(n).forEach((function(e){a.push(e.avg)})));var s=function(e){for(var t=["magenta","cyan","green","pink"],n=[],r=0;r<e;r++)n.push(t[r%t.length]);return n};t={labels:r,datasets:[{backgroundColor:r&&s(r.length),borderColor:r&&s(r.length),borderWidth:2,data:a}]};var i="dark"===c?"#d1d1d180":"#80808080",o={maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!0,color:i}}],yAxes:[{gridLines:{display:!0,color:i}}]},legend:{display:!1,color:"white"},title:{display:!0,text:"Benchmark (\u03bcs)"}};return Object(m.jsxs)("div",{className:"flex flex-col w-full",children:[Object(m.jsx)("h1",{className:"text-2xl font-bold dark:text-white",children:"Results"}),Object(m.jsx)("article",{className:"mt-4 w-full md:h-[400px]",children:Object(m.jsx)(A.a,{data:t,options:o})})]})}var E=function(e){return"https://benchmark.parthetic.me/"+e},I=function(e,t){return{crossDomain:!0,method:e,headers:{"Content-Type":"application/json"},body:t?JSON.stringify(t):null}},C=function(){var e=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(E("profile/boilerplate"),I("GET")).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(E("profile/send-code"),I("POST",{code:t})).then((function(e){return e.json()})).then((function(e){return e.uuid})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(w.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(E("profile/get-status/"+t),I("GET"));case 2:if(204!==(n=e.sent).status){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r[0]);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function z(){var e=Object(l.useState)("loading...."),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(l.useState)(null),c=Object(j.a)(a,2),s=c[0],i=c[1],o=Object(l.useState)("Idle"),d=Object(j.a)(o,2),u=d[0],h=d[1],f=Object(l.useState)(!1),b=Object(j.a)(f,2),p=b[0],g=b[1],O=Object(l.useState)(null),v=Object(j.a)(O,2),k=v[0],A=v[1],E=Object(l.useState)(!1),I=Object(j.a)(E,2),z=I[0],B=I[1],W=Object(l.useContext)(x).theme,L=null;return Object(l.useEffect)((function(){C().then((function(e){r(e.boilerplate)})).catch((function(e){r("There has been an error")}))}),[]),Object(m.jsxs)("div",{className:"flex justify-around flex-nowrap sm:flex-col md:flex-col lg:flex-row gap-4",children:[Object(m.jsxs)("div",{className:"flex-grow md:mt-4",children:[Object(m.jsxs)("div",{className:"flex items-center justify-between",children:[Object(m.jsx)("h1",{className:"text-2xl font-bold dark:text-white",children:"Code"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"mr-2 text-gray-700 dark:text-gray-300",children:"Vim Mode"}),Object(m.jsxs)("div",{className:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in",children:[Object(m.jsx)("input",{type:"checkbox",name:"toggle",id:"toggle",checked:z,onChange:function(){return B(!z)},className:"absolute block w-4 h-4 bg-white border-4 rounded-full shadow appearance-none cursor-pointer toggle-checkbox dark:bg-gray-500"}),Object(m.jsx)("label",{htmlFor:"toggle",className:"block h-4 overflow-hidden bg-gray-300 rounded-full shadow cursor-pointer toggle-label dark:bg-gray-700"})]})]})]}),Object(m.jsx)("div",{className:"mt-5 shadow-md",children:Object(m.jsx)(N.a,{value:n,width:"100%",fontSize:15,theme:"dark"===W?"dracula":"github",mode:"c_cpp",onChange:function(e){return r(e)},keyboardHandler:z?"vim":void 0})}),Object(m.jsx)("button",{className:"p-2 my-5 text-lg bg-green-400 rounded shadow-md hover:bg-green-500 disabled:bg-gray-400 disabled:text-gray-500",onClick:function(){i(null),P(n).then((function(e){g(!0),h("Processing..."),L=setInterval(Object(w.a)(y.a.mark((function t(){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e);case 2:n=t.sent,L&&n&&(clearInterval(L),L=null,g(!1),h("Done."),A(n.LOG),0===n.EXIT_STATUS?(r=JSON.parse(n.OUTPUT),i(r)):h("Error Code "+n.EXIT_STATUS));case 4:case"end":return t.stop()}}),t)}))),5e3)}))},disabled:p,children:"Run Benchmark"}),Object(m.jsxs)("p",{className:"font-mono text-gray-600 dark:text-gray-200 text-opacity-90",children:["Status: ",u]}),Object(m.jsx)("h2",{className:"my-3 text-lg font-semibold text-gray-600 dark:text-gray-200",children:"Logs:"}),Object(m.jsx)("div",{className:"w-11/12 h-48 p-2 overflow-auto font-mono text-gray-600 whitespace-pre-line border-2 border-none rounded-lg shadow-md dark:text-gray-200 bg-yellow-50 dark:bg-gray-700",children:k||"Nothing to show"})]}),Object(m.jsxs)("div",{className:"md:w-[100%] lg:w-[40%] lg:ml-4 md:mt-4",children:[Object(m.jsx)(S,{data:s}),Object(m.jsxs)("div",{className:"mt-4",children:[Object(m.jsx)("h1",{className:"text-2xl font-bold dark:text-white",children:"API Docs"}),Object(m.jsxs)("p",{className:"mt-4 font-mono text-base dark:text-white",children:["You can add member functions to the class App and then run benchmarks on them inside ",Object(m.jsx)("span",{className:"code",children:"App::Run()"}),".",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Use ",Object(m.jsx)("span",{className:"code",children:"PROFILE('NAME', COUNT, FUNCTION)"})," to run benchmarks on a function.",Object(m.jsx)("br",{}),"Use ",Object(m.jsx)("span",{className:"code",children:"FUNCTION(func, ...inputs)"})," to supply inputs to a function.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"code",children:'#include "Profiler.hpp"'})," is necessary to include profiler utilities.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"If your functions take more than 5 seconds to complete execution, they will hit timeout and output return status will be ",Object(m.jsx)("span",{className:"code",children:"143"}),".",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Do not take user input in your functions and that you cause timeout since the runner does not provide any input to ",Object(m.jsx)("span",{className:"code",children:"stdin"}),"."]})]})]})]})}var B=n(23),W=n(24),L=["title","titleId"];function R(){return R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R.apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function M(e,t){var n=e.title,r=e.titleId,a=F(e,L);return l.createElement("svg",R({width:574.644,height:479.926,viewBox:"0 0 152.041 126.98",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?l.createElement("title",{id:r},n):null,l.createElement("g",{style:{display:"inline"}},l.createElement("path",{style:{fontStyle:"normal",fontVariant:"normal",fontWeight:400,fontStretch:"normal",fontSize:"166.222px",lineHeight:1.25,fontFamily:"'Bebas Neue'",InkscapeFontSpecification:"'Bebas Neue'",display:"inline",fill:"'current'",fillOpacity:1,stroke:"none",strokeWidth:.0990149},d:"M-20.57 125.303c-1.622.285-2.927 1.82-2.927 3.443 0 1.622 1.305 2.698 2.928 2.413l1.386-.244 12.718-2.238.156-.031v.004l1.23-.217c1.623-.285 2.929.79 2.929 2.413 0 1.622-1.306 3.158-2.929 3.443l-1.23.217v.052a3.04 3.04 0 0 0-.552.045l-9.55 1.68c-1.622.285-2.928 1.821-2.928 3.443s1.306 2.698 2.928 2.413l9.55-1.68c.189-.034.373-.084.552-.15v.053l.24-.043c1.622-.285 2.928.791 2.928 2.413 0 1.622-1.306 3.158-2.928 3.443l-.24.043-13.864 2.439-4.21.74c-1.622.286-2.928 1.822-2.928 3.444 0 1.622 1.306 2.698 2.929 2.413l4.407-.776 13.666-2.404.438-.077c1.622-.286 2.928.79 2.928 2.412 0 1.623-1.306 3.158-2.928 3.444l-6.602 1.161c-1.429.448-2.522 1.86-2.522 3.344 0 1.622 1.306 2.698 2.928 2.413l5.758-1.013 1.428-.252 5.845-1.028v-16.679l3.439-.605c7.273-1.28 10.844-5.477 10.844-12.032v-4.038c0-6.554-3.57-9.495-10.844-8.216l-10.712 1.885v.004a1.99 1.99 0 0 0-.156.023zm21.534 2.063 3.439-.605c2.314-.407 3.57.308 3.57 3.234v4.857c0 2.926-1.256 4.084-3.57 4.49l-3.439.606zm-33.96 11.836c-1.518.266-2.74 1.703-2.74 3.22 0 1.516 1.222 2.523 2.74 2.256l9.324-1.641c1.517-.267 2.738-1.703 2.738-3.22 0-1.517-1.22-2.523-2.738-2.256zm.98 11.709c-1.517.267-2.738 1.703-2.738 3.22 0 1.517 1.221 2.523 2.738 2.256l.027-.005c1.517-.267 2.738-1.703 2.738-3.22 0-1.517-1.221-2.523-2.738-2.256zm1.085 11.323c-1.622.285-2.928 1.82-2.928 3.443 0 1.622 1.306 2.698 2.928 2.413l10.604-1.866c1.622-.285 2.928-1.82 2.928-3.443 0-1.484-1.094-2.51-2.522-2.456l-.054.01a2.981 2.981 0 0 1-.406.043z",transform:"translate(83.307 -80.886)"}),l.createElement("path",{d:"m1.587 162.374 1.291-.228.253-1.78 1.582-.28v-.025l.254 1.715 1.392-.247-1.443-8.605-1.886.334zm1.709-3.24.607-4.486.026-.003.62 4.27zM7.218 161.383l1.392-.247v-3.797l.48-.085c.634-.112.874.11.874.934v1.62c0 .721.051.852.127 1.066l1.418-.251c-.14-.305-.152-.619-.152-1.05v-1.556c0-1-.228-1.618-.924-1.71v-.025c.62-.363.911-.997.911-1.908v-.545c0-1.367-.62-1.928-2.063-1.672l-2.063.366zm1.392-5.31v-2.531l.633-.113c.493-.087.709.153.709.786v.684c0 .709-.317.992-.836 1.084zM13.367 160.297l1.393-.246v-7.595l1.455-.258v-1.266l-4.303.763v1.266l1.455-.258zM16.885 159.68l1.392-.246v-3.988l1.494-.264v3.987l1.392-.247v-8.86l-1.392.247v3.607l-1.494.265v-3.608l-1.392.247z",style:{fontStyle:"normal",fontVariant:"normal",fontWeight:400,fontStretch:"normal",fontSize:"33.8241px",lineHeight:1.25,fontFamily:"'Bebas Neue'",InkscapeFontSpecification:"'Bebas Neue'",display:"inline",fill:"'current'",fillOpacity:1,stroke:"none",strokeWidth:.0990149},transform:"translate(83.307 -80.886)"})))}var G=l.forwardRef(M),H=(n.p,{textDecoration:"none"});function J(){var e="dark"===Object(l.useContext)(x).theme?"white":"black";return Object(m.jsxs)("div",{className:"flex items-center w-full px-5 justify-evenly",children:[Object(m.jsxs)("div",{className:"flex flex-wrap items-center dark:text-white",children:[Object(m.jsx)("p",{children:" Made with \u2764\ufe0f by"}),Object(m.jsx)("a",{href:"https://parthpant.github.io",style:H,children:Object(m.jsx)(G,{style:{width:"100px",height:"auto",padding:0,margin:0},fill:e})})]}),Object(m.jsxs)("div",{className:"flex gap-x-4",children:[Object(m.jsx)("a",{href:"https://www.linkedin.com/in/parth-pant-866bb4189/",children:Object(m.jsx)(B.a,{icon:W.b,size:"2x",style:H,color:e})}),Object(m.jsx)("a",{href:"https://github.com/ParthPant/Profile",children:Object(m.jsx)(B.a,{icon:W.a,size:"2x",style:H,color:e})}),Object(m.jsx)("a",{href:"https://twitter.com/PantParth",children:Object(m.jsx)(B.a,{icon:W.c,size:"2x",style:H,color:e})})]})]})}var Q=function(){return Object(m.jsx)(g,{children:Object(m.jsxs)("div",{className:"flex flex-col justify-between p-4 pb-0 dark:bg-gray-900 App",children:[Object(m.jsx)(O,{}),Object(m.jsx)(z,{}),Object(m.jsx)(J,{})]})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,172)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),r(e),a(e),c(e),l(e)}))};o.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(Q,{})}),document.getElementById("root")),U()},34:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){}},[[171,1,2]]]);
//# sourceMappingURL=main.38bbbf01.chunk.js.map