(this["webpackJsonpcolor-converter"]=this["webpackJsonpcolor-converter"]||[]).push([[0],{35:function(e,t,n){e.exports=n(47)},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),c=n(14),i=n.n(c),l=n(33),s=n(68),u=n(10),m=n(3),f=n(5),b=n(67),p=n(66),h=Object(f.a)((function(e){return{root:Object(m.a)({width:"100%",height:"50px",margin:"0 0 2rem",background:"linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",color:"#ffffff",cursor:"default",fontSize:"2em",lineHeight:"50px",fontWeight:"lighter",textAlign:"center"},e.breakpoints.down("sm"),{position:"absolute",top:"0",left:"0"})}}))((function(e){var t=e.classes;return o.a.createElement("header",{className:t.root},"COLOR CONVERTER")})),g=n(70),d=n(69),E=Object(f.a)((function(e){var t,n;return{root:(t={display:"flex",justifyContent:"space-between",margin:"0 0 2em"},Object(m.a)(t,e.breakpoints.up("md"),{padding:"0 20%"}),Object(m.a)(t,e.breakpoints.down("sm"),{flexDirection:"column"}),Object(m.a)(t,"& > button",{color:"#ffffff",boxShadow:"none",transition:"all 100ms linear 0s","&:hover":{backgroundColor:e.palette.primary.light,boxShadow:"none"}}),t),input:(n={flexGrow:"1"},Object(m.a)(n,e.breakpoints.up("md"),{marginRight:"1em"}),Object(m.a)(n,e.breakpoints.down("sm"),{marginBottom:"0.5em"}),n)}}))((function(e){var t=e.classes,n=e.handleSubmit,r=Object(a.useState)(""),c=Object(u.a)(r,2),i=c[0],l=c[1];return o.a.createElement("div",{className:t.root},o.a.createElement(g.a,{className:t.input,autoFocus:!0,placeholder:"Try a color, e.g #ff7875 or rgb(255,145,143)",value:i,onChange:function(e){return l(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&(n(i),e.target.blur())}(e)}}),o.a.createElement(d.a,{color:"primary",variant:"contained",onClick:function(){return n(i)}},"CONVERT"))})),O=n(61),v=n(62),j=n(63),y=n(64),w=n(65),x=n(24),k=n(19),S=n.n(k),N=n(26);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(){var e=Object(N.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=7;break}return e.next=3,fetch("/data.json");case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent;case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(e){var t,n;if((n=e).startsWith("#")&&7===n.length&&n.substring(1).toLowerCase().split("").every((function(e){return"0123456789abcdef".split("").includes(e)})))t=function(e){var t=e.substring(1),n=t.substring(0,2),r=t.substring(2,4),a=t.substring(4,6),o=function(e){var t=function(e){return isNaN(parseInt(e))?{a:10,b:11,c:12,d:13,e:14,f:15}[e.toLowerCase()]:parseInt(e)},n=e.substring(0,1),r=e.substring(1);return 16*t(n)+t(r)};return{r:o(n),g:o(r),b:o(a)}}(e);else{if(!function(e){if((e=e.toLowerCase().replace(/\s/g,"")).startsWith("rgb(")&&e.endsWith(")")){var t=e.substring(4,e.length-1).split(",");return 3===t.length&&t.every((function(e){var t=parseFloat(e);return!isNaN(t)&&Number.isInteger(t)&&t>=0&&t<=255}))}return!1}(e))throw new Error;t=function(e){var t=(e=e.replace(/\s/g,"")).substring(4,e.length-1).split(",").map((function(e){return parseInt(e)}));return{r:t[0],g:t[1],b:t[2]}}(e)}return t},D=function(e,t){return 100-Math.round(e/t*100)},W=function(e){return new Promise(function(){var t=Object(N.a)(S.a.mark((function t(n,r){var a,o,c,i,l,s;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:a=t.sent,t.prev=3,o=R(e),t.next=10;break;case 7:return t.prev=7,t.t0=t.catch(3),t.abrupt("return",r("".concat(e," is not a valid HEX or RGB color.")));case 10:return c=[],a.data.forEach((function(e){var t,n;c.push((t=e.rgb,n=o,new Promise((function(e,r){e(Math.pow(t.r-n.r,2)+Math.pow(t.g-n.g,2)+Math.pow(t.b-n.b,2))}))))})),t.next=14,Promise.all(c);case 14:return i=t.sent,l=Math.max.apply(Math,Object(x.a)(i)),(s=a.data.map((function(e,t){return H({},e,{rgb:"rgb(".concat(e.rgb.r,",").concat(e.rgb.g,",").concat(e.rgb.b,")"),hsl:"hsl(".concat(e.hsl.h,",").concat(e.hsl.s,"%,").concat(e.hsl.l,"%)"),similarity:D(i[t],l)})}))).sort((function(e,t){return t.similarity-e.similarity})),t.abrupt("return",n(s));case 19:case"end":return t.stop()}}),t,null,[[3,7]])})));return function(e,n){return t.apply(this,arguments)}}())},I=Object(f.a)((function(e){var t;return{loading:{textAlign:"center"},title:(t={display:"flex",alignItems:"center"},Object(m.a)(t,e.breakpoints.down("sm"),{marginTop:"1em"}),Object(m.a)(t,"& > h1",Object(m.a)({margin:"0.5em"},e.breakpoints.down("sm"),{maxWidth:"75%",fontSize:"1.5em"})),Object(m.a)(t,"& > div",{width:"50px",height:"50px",borderRadius:"50%"}),t),button:{position:"relative",left:"50%",transform:"translate(-50%, 50%)"},mobileHidden:Object(m.a)({},e.breakpoints.down("sm"),{display:"none"})}}))((function(e){var t=e.classes,n=e.input,r=Object(a.useRef)(!0),c=Object(a.useState)(!1),i=Object(u.a)(c,2),l=i[0],s=i[1],m=Object(a.useState)([]),f=Object(u.a)(m,2),b=f[0],p=f[1],h=Object(a.useState)(null),g=Object(u.a)(h,2),E=g[0],x=g[1],k=Object(a.useState)(50),S=Object(u.a)(k,2),N=S[0],C=S[1];return Object(a.useEffect)((function(){r.current?r.current=!1:(s(!0),W(n).then((function(e){p(e),x(null),C(50)})).catch((function(e){x(e),p([])})).finally((function(){s(!1)})))}),[n]),o.a.createElement(o.a.Fragment,null,l&&o.a.createElement("h1",{className:t.loading},"Loading..."),!l&&E&&o.a.createElement("div",null,o.a.createElement("p",null,E)),!l&&!E&&0!==b.length&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:t.title},o.a.createElement("h1",null,"Converting ",n),o.a.createElement("div",{style:{backgroundColor:n}})),o.a.createElement(O.a,{className:t.table},o.a.createElement(v.a,null,o.a.createElement(j.a,null,o.a.createElement(y.a,null,"Display"),o.a.createElement(y.a,null,"Xterm"),o.a.createElement(y.a,null,"RGB"),o.a.createElement(y.a,null,"HEX"),o.a.createElement(y.a,{className:t.mobileHidden},"HSL"),o.a.createElement(y.a,{className:t.mobileHidden},"Similarity"))),o.a.createElement(w.a,null,b.slice(0,N).map((function(e,n){return o.a.createElement(j.a,{key:n},o.a.createElement(y.a,{style:{backgroundColor:e.hexString}}),o.a.createElement(y.a,null,e.colorId),o.a.createElement(y.a,null,e.rgb),o.a.createElement(y.a,null,e.hexString),o.a.createElement(y.a,{className:t.mobileHidden},e.hsl),o.a.createElement(y.a,{className:t.mobileHidden},e.similarity))})))),N<b.length&&o.a.createElement(d.a,{className:t.button,color:"secondary",variant:"text",onClick:function(){return function(){var e=N+50>b.length?b.length:N+50;C(e)}()}},"Show more")))})),M=Object(f.a)({root:{margin:"5em 0 2em",fontSize:"0.5em"}})((function(e){var t=e.classes;return o.a.createElement("div",{className:t.root},o.a.createElement(p.a,null),o.a.createElement("p",null,"This webpage was created and is maintained by\xa0",o.a.createElement("a",{href:"https://github.com/mingyugao",rel:"noopener noreferrer"},"Mingyu Gao"),"."))})),T=Object(f.a)((function(e){var t;return{root:(t={minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"},Object(m.a)(t,e.breakpoints.down("sm"),{paddingTop:"50px"}),Object(m.a)(t,"& p",{padding:"0 5%",lineHeight:"1.3em"}),Object(m.a)(t,"& a",{color:e.palette.secondary.main,textDecoration:"none",transition:"all 100ms linear 0s","&:hover":{color:e.palette.secondary.light,textDecoration:"underline"}}),t)}}))((function(e){var t=e.classes,n=Object(a.useState)(""),r=Object(u.a)(n,2),c=r[0],i=r[1];return o.a.createElement(b.a,{className:t.root,maxWidth:"md"},o.a.createElement("div",null,o.a.createElement(h,null),o.a.createElement("p",null,"Find the nearest 8-bit (Xterm) color of a HEX or RGB color. For a full list of the Xterm colors, see this reference:\xa0",o.a.createElement("a",{href:"https://jonasjacek.github.io/colors",rel:"noopener noreferrer"},"256 Colors Cheat Sheet"),"."),o.a.createElement(E,{handleSubmit:function(e){e&&i(e)}}),o.a.createElement(p.a,null),o.a.createElement(I,{input:c})),o.a.createElement(M,null))}));n(46),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=Object(l.a)({palette:{primary:{main:"#ff7875",light:"#ff918f"},secondary:{main:"#40a9ff",light:"#096dd9"}},typography:{button:{textTransform:"none"}}});i.a.render(o.a.createElement(s.a,{theme:B},o.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.581d0d45.chunk.js.map