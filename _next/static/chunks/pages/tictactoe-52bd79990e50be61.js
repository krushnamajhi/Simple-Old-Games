(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4398:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tictactoe",function(){return c(6706)}])},8563:function(e,b,a){"use strict";var f=a(5893);a(7294);var c=a(1664),g=a.n(c),d=a(9008),h=a.n(d);b.Z=function(a){var b=a.title,c=a.header;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(h(),{children:[(0,f.jsx)("title",{children:b}),(0,f.jsx)("link",{rel:"icon",href:"".concat("/Simple-Old-Games","/favicon.ico")})]}),(0,f.jsx)(g(),{href:"./",children:(0,f.jsx)("button",{className:"p-2 m-2 h4 btn btn-sm btn-primary",children:"\u2190 Go Back"})}),(0,f.jsx)("center",{children:(0,f.jsx)("h1",{children:c})})]})}},2388:function(c,b,a){"use strict";var d=a(5893);a(7294),b.Z=function(a){var b=a.message,c=a.error;return(0,d.jsx)("div",{className:"p-3",children:(0,d.jsx)("span",{className:c?"text-danger":"text-success",children:b})})}},6706:function(c,b,a){"use strict";a.r(b),a.d(b,{default:function(){return r}});var d=a(9815),e=a(5893),f=a(7294),g={background:"lightgreen",border:"2px solid darkgreen",fontSize:"40px",fontWeight:"780",cursor:"pointer",outline:"none"},h={background:"darkgreen",border:"2px solid darkgreen",fontSize:"42px",fontWeight:"1000",cursor:"pointer",outline:"none",color:"white"},i=function(a){var b=a.onClick,c=a.value,d=a.cross;return(0,e.jsx)("button",{onClick:b,style:d?h:g,children:c})},j={border:"4px solid darkgreen",width:"350px",height:"350px",margin:"0 auto",display:"grid",gridTemplate:"repeat(3, 1fr) / repeat(3, 1fr)"},k=function(a){var b=a.squares,c=a.onClick,d=a.line;return(0,e.jsx)("div",{style:j,children:b.map(function(b,a){return(0,e.jsx)(i,{value:b,cross:d.includes(a),onClick:function(){return c(a)}},a)})})},l=a(3375),m=a(1566);function n(a,b){return function(a){if(Array.isArray(a))return a}(a)||(0,l.Z)(a,b)||(0,m.Z)(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=a(2388),p=a(8563),q={width:"350px",margin:"20px auto"},r=function(m){var g=(0,f.useState)([Array(9).fill(null)]),b=g[0],r=g[1],h=(0,f.useState)(!0),l=h[0],s=h[1],i=(0,f.useState)(0),a=i[0],t=i[1],j=function(a){for(var c=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]],b=0;b<c.length;b++){var d=n(c[b],3),e=d[0],f=d[1],g=d[2];if(a[e]&&a[e]===a[f]&&a[f]===a[g])return[a[e],c[b]]}return[null,[]]}(b[a]),c=j[0],u=function(a){var b=arguments.length>1&& void 0!==arguments[1]&&arguments[1];t(a),s(a%2==0),b&&r([Array(9).fill(null)])};return(0,e.jsxs)("div",{children:[(0,e.jsx)(p.Z,{title:"Tic Tac Toe",header:"Tic Tac Toe"}),(0,e.jsxs)("center",{children:[(0,e.jsx)(o.Z,{message:c||!b[a].includes(null)?'Click "Go to Start" to start a new game':"Next Player: "+(l?"X":"O"),error:!1}),(0,e.jsx)("h3",{className:"m-2",style:{height:"40px"},children:c?"Winner is "+c+"!!":b[a].includes(null)?"":"Draw!!"})]}),(0,e.jsx)(k,{squares:b[a],line:j[1],onClick:function(g){var e=b.slice(0,a+1),h=e[a],f=(0,d.Z)(h);c||f[g]||(f[g]=l?"X":"O",r((0,d.Z)(e).concat([f])),t(e.length),s(!l))}}),(0,e.jsx)("div",{style:q,children:(0,e.jsxs)("div",{className:"p-1 text-center",children:[(0,e.jsx)("button",{className:"btn btn-danger my-2 mx-1",style:{width:"47%"},onClick:function(){return u(a-1)},disabled:0==a,children:"Undo"}),(0,e.jsx)("button",{className:"btn btn-info my-2 mx-1",style:{width:"47%"},onClick:function(){return u(a+1)},disabled:a==b.length-1,children:"Redo"}),(0,e.jsx)("br",{}),(0,e.jsx)("button",{className:"btn btn-success my-2",style:{width:"98%"},onClick:function(){return u(0,!0)},children:"Go to Start"})]})})]})}},943:function(c,a,b){"use strict";function d(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}b.d(a,{Z:function(){return d}})},3375:function(c,a,b){"use strict";function d(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}b.d(a,{Z:function(){return d}})},9815:function(c,b,a){"use strict";a.d(b,{Z:function(){return g}});var d=a(943),e=a(3375),f=a(1566);function g(a){return function(a){if(Array.isArray(a))return(0,d.Z)(a)}(a)||(0,e.Z)(a)||(0,f.Z)(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(c,b,a){"use strict";a.d(b,{Z:function(){return e}});var d=a(943);function e(a,c){if(a){if("string"==typeof a)return(0,d.Z)(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return(0,d.Z)(a,c)}}}},function(a){a.O(0,[996,774,888,179],function(){var b;return a(a.s=4398)}),_N_E=a.O()}])