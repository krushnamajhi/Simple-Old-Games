(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4398:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tictactoe",function(){return c(1684)}])},1684:function(d,b,a){"use strict";function e(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}function f(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}function g(a,c){if(a){if("string"==typeof a)return e(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return e(a,c)}}function h(a){return function(a){if(Array.isArray(a))return e(a)}(a)||f(a)||g(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.r(b),a.d(b,{default:function(){return s}});var i=a(5893),j=a(7294),k={background:"lightgreen",border:"2px solid darkgreen",fontSize:"30px",fontWeight:"800",cursor:"pointer",outline:"none"},l=function(a){var b=a.onClick,c=a.value;return(0,i.jsx)("button",{onClick:b,style:k,children:c})},m={border:"4px solid darkgreen",borderRadius:"10px",width:"350px",height:"350px",margin:"0 auto",display:"grid",gridTemplate:"repeat(3, 1fr) / repeat(3, 1fr)"},n=function(a){var b=a.squares,c=a.onClick;return(0,i.jsx)("div",{style:m,children:b.map(function(a,b){return(0,i.jsx)(l,{value:a,onClick:function(){return c(b)}},b)})})};function o(a,b){return function(a){if(Array.isArray(a))return a}(a)||f(a,b)||g(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(a){var b=a.message,c=a.error;return(0,i.jsx)("div",{className:"p-3",children:(0,i.jsx)("span",{className:c?"text-danger":"text-success",children:b})})},c=a(1664),q=a.n(c),r={width:"200px",margin:"20px auto"},s=function(k){var b=(0,j.useState)([Array(9).fill(null)]),a=b[0],l=b[1],c=(0,j.useState)(!0),g=c[0],m=c[1],d=(0,j.useState)(0),e=d[0],s=d[1],f=function(a){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]],b=0;b<e.length;b++){var c=o(e[b],3),d=c[0],f=c[1],g=c[2];if(a[d]&&a[d]===a[f]&&a[f]===a[g])return a[d]}return null}(a[e]),t=function(a){s(a),m(a%2==0)};return(0,i.jsxs)("div",{children:[(0,i.jsx)(q(),{href:"/",children:(0,i.jsx)("button",{className:"p-2 m-2 h4 btn btn-sm btn-primary",children:"\u2190 Go Back"})}),(0,i.jsxs)("center",{children:[(0,i.jsx)("h1",{children:"Tic Tac Toe"}),(0,i.jsx)(p,{message:f?"Winner is "+f:"Next Player: "+(g?"X":"O"),error:!1})]}),(0,i.jsx)(n,{squares:a[e],onClick:function(d){var b=a.slice(0,e+1),c=h(b[e]);f||c[d]||(c[d]=g?"X":"O",l(h(b).concat([c])),s(b.length),m(!g))}}),(0,i.jsx)("div",{style:r,children:a.map(function(b,a){return(0,i.jsx)("div",{className:"p-1",children:(0,i.jsx)("li",{children:(0,i.jsx)("button",{className:"btn btn-sm btn-success",onClick:function(){return t(a)},children:a?"Go to move# "+a:"Go to Start"},a)},a)},a)})})]})}}},function(a){a.O(0,[664,774,888,179],function(){var b;return a(a.s=4398)}),_N_E=a.O()}])