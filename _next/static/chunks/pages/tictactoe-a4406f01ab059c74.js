(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4398:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tictactoe",function(){return c(6706)}])},8563:function(e,b,a){"use strict";var f=a(5893);a(7294);var c=a(1664),g=a.n(c),d=a(9008),h=a.n(d);b.Z=function(a){var b=a.title,c=a.header;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(h(),{children:[(0,f.jsx)("title",{children:b}),(0,f.jsx)("link",{rel:"icon",href:"".concat("/Simple-Old-Games","/favicon.ico")})]}),(0,f.jsx)(g(),{href:"./",children:(0,f.jsx)("button",{className:"p-2 m-2 h4 btn btn-sm btn-primary",children:"\u2190 Go Back"})}),(0,f.jsx)("center",{children:(0,f.jsx)("h1",{children:c})})]})}},2388:function(c,b,a){"use strict";var d=a(5893);a(7294),b.Z=function(a){var b=a.message,c=a.error;return(0,d.jsx)("div",{className:"p-3",children:(0,d.jsx)("span",{className:c?"text-danger":"text-success",children:b})})}},6706:function(c,b,a){"use strict";a.r(b),a.d(b,{default:function(){return q}});var d=a(9815),e=a(5893),f=a(7294),g={background:"lightgreen",border:"2px solid darkgreen",fontSize:"30px",fontWeight:"800",cursor:"pointer",outline:"none"},h=function(a){var b=a.onClick,c=a.value;return(0,e.jsx)("button",{onClick:b,style:g,children:c})},i={border:"4px solid darkgreen",borderRadius:"10px",width:"350px",height:"350px",margin:"0 auto",display:"grid",gridTemplate:"repeat(3, 1fr) / repeat(3, 1fr)"},j=function(a){var b=a.squares,c=a.onClick;return(0,e.jsx)("div",{style:i,children:b.map(function(a,b){return(0,e.jsx)(h,{value:a,onClick:function(){return c(b)}},b)})})},k=a(3375),l=a(1566);function m(a,b){return function(a){if(Array.isArray(a))return a}(a)||(0,k.Z)(a,b)||(0,l.Z)(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n=a(2388),o=a(8563),p={width:"200px",margin:"20px auto"},q=function(l){var b=(0,f.useState)([Array(9).fill(null)]),a=b[0],q=b[1],c=(0,f.useState)(!0),k=c[0],r=c[1],g=(0,f.useState)(0),h=g[0],s=g[1],i=function(a){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]],b=0;b<e.length;b++){var c=m(e[b],3),d=c[0],f=c[1],g=c[2];if(a[d]&&a[d]===a[f]&&a[f]===a[g])return a[d]}return null}(a[h]),t=function(a){s(a),r(a%2==0)};return(0,e.jsxs)("div",{children:[(0,e.jsx)(o.Z,{title:"Tic Tac Toe",header:"Tic Tac Toe"}),(0,e.jsx)("center",{children:(0,e.jsx)(n.Z,{message:i?"Winner is "+i:"Next Player: "+(k?"X":"O"),error:!1})}),(0,e.jsx)(j,{squares:a[h],onClick:function(e){var b=a.slice(0,h+1),f=b[h],c=(0,d.Z)(f);i||c[e]||(c[e]=k?"X":"O",q((0,d.Z)(b).concat([c])),s(b.length),r(!k))}}),(0,e.jsx)("div",{style:p,children:a.map(function(b,a){return(0,e.jsx)("div",{className:"p-1",children:(0,e.jsx)("li",{children:(0,e.jsx)("button",{className:"btn btn-sm btn-success",onClick:function(){return t(a)},children:a?"Go to move# "+a:"Go to Start"},a)},a)},a)})})]})}},943:function(c,a,b){"use strict";function d(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}b.d(a,{Z:function(){return d}})},3375:function(c,a,b){"use strict";function d(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}b.d(a,{Z:function(){return d}})},9815:function(c,b,a){"use strict";a.d(b,{Z:function(){return g}});var d=a(943),e=a(3375),f=a(1566);function g(a){return function(a){if(Array.isArray(a))return(0,d.Z)(a)}(a)||(0,e.Z)(a)||(0,f.Z)(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(c,b,a){"use strict";a.d(b,{Z:function(){return e}});var d=a(943);function e(a,c){if(a){if("string"==typeof a)return(0,d.Z)(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return(0,d.Z)(a,c)}}}},function(a){a.O(0,[996,774,888,179],function(){var b;return a(a.s=4398)}),_N_E=a.O()}])