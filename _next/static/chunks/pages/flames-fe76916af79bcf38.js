(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[300],{867:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/flames",function(){return c(766)}])},8563:function(e,b,a){"use strict";var f=a(5893);a(7294);var c=a(1664),g=a.n(c),d=a(9008),h=a.n(d);b.Z=function(a){var b=a.title,c=a.header;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(h(),{children:[(0,f.jsx)("title",{children:b}),(0,f.jsx)("link",{rel:"icon",href:"".concat("/Simple-Old-Games","/favicon.ico")})]}),(0,f.jsx)(g(),{href:"./",children:(0,f.jsx)("button",{className:"p-2 m-2 h4 btn btn-sm btn-primary",children:"\u2190 Go Back"})}),(0,f.jsx)("center",{children:(0,f.jsx)("h1",{children:c})})]})}},2388:function(c,b,a){"use strict";var d=a(5893);a(7294),b.Z=function(a){var b=a.message,c=a.error;return(0,d.jsx)("div",{className:"p-3",children:(0,d.jsx)("span",{className:c?"text-danger":"text-success",children:b})})}},766:function(c,b,a){"use strict";a.r(b),a.d(b,{default:function(){return q}});var d=a(9815),e=a(5893),f=a(7294),g=a(2388),h=a(8563),i={border:"2px solid darkgreen",borderRadius:"1px",fontWeight:"700"},j={border:"2px solid darkgreen",borderRadius:"1px",background:"lightgreen",color:"black",fontWeight:"700"},k=function(a){var b=a.ch,c=a.iscrossed;return(0,e.jsx)("span",{className:"h4 mx-1 my-2 px-2 btn",style:c?j:i,children:b})},l=function(a){var c=a.clientName,g=a.cross,b=(0,f.useState)(Array.from(c.replace(" ","").toUpperCase())),d=b[0];return b[1],(0,e.jsx)("div",{className:"m-3",children:d.map(function(a,b){return(0,e.jsx)(k,{ch:a,iscrossed:g.includes(a)},a+b)})})},m={borderRadius:"1px",fontWeight:"700",fontSize:"20px"},n={border:"2px solid darkgreen",borderRadius:"1px",background:"darkgreen",color:"white",fontSize:"21px",fontWeight:"700"},o=function(a){var b=a.result;return(0,e.jsx)("div",{className:"h1 m-5 p-3",children:["FREINDS","LOVERS","ADMIRERS","MARRIAGE","ENEMIES","SISTER"].map(function(a,c){return(0,e.jsx)("span",{className:"px-1 btn btn",title:a,style:c==b?n:m,children:c==b?a[0]+" - "+a:a[0]})})})},p={width:"400px"},q=function(u){var b=(0,f.useState)(""),c=b[0],v=b[1],i=(0,f.useState)(""),j=i[0],w=i[1],k=(0,f.useState)([]),m=k[0],x=k[1],n=(0,f.useState)([]),t=n[0],y=n[1],q=(0,f.useState)(!1),a=q[0],z=q[1],r=(0,f.useState)(""),s=r[0],A=r[1],B=function(){for(var a=[],b=0;b<c.length;b++)for(var h=0;h<j.length;h++)c[b]!=j[h]||a.includes(c[b])||a.push(c[b]);for(var e=[],f=0;f<c.length;f++)a.includes(c[f])||e.includes(c[f])||e.push(c[f]);for(var g=0;g<j.length;g++)a.includes(j[g])||e.includes(j[g])||e.push(j[g]);x((0,d.Z)(a)),y((0,d.Z)(e))};return(0,e.jsxs)("div",{children:[(0,e.jsx)(h.Z,{title:"Flames",header:"F.L.A.M.E.S"}),(0,e.jsxs)("center",{className:"container",children:[(0,e.jsx)(g.Z,{message:s,error:""!=s}),(0,e.jsxs)("div",{style:p,className:"container row",children:[(0,e.jsx)("input",{className:"m-2",placeholder:"Enter your Name",value:c,onChange:function(a){v(a.target.value.toLocaleUpperCase())},disabled:a}),(0,e.jsx)("input",{className:"m-2",placeholder:"Enter your Soulmate Name",value:j,onChange:function(a){w(a.target.value.toLocaleUpperCase())},disabled:a})]}),(0,e.jsx)("button",{className:"btn btn-success m-2",onClick:function(){if(""==c||""==j){A("Please enter Both Names");return}if(c.includes(" ")||j.includes(" ")){A("Please enter only first name");return}A(""),B(),z(!0)},disabled:a,children:"Match"}),(0,e.jsx)("button",{className:"btn btn-success m-2",onClick:function(){z(!1),v(""),w("")},disabled:!a,children:"Change Names"}),a?(0,e.jsxs)("div",{style:p,children:[(0,e.jsx)(l,{clientName:c,cross:m}),(0,e.jsx)(l,{clientName:j,cross:m}),(0,e.jsx)(o,{result:t.length%6})]}):null]})]})}},943:function(c,a,b){"use strict";function d(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}b.d(a,{Z:function(){return d}})},3375:function(c,a,b){"use strict";function d(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}b.d(a,{Z:function(){return d}})},9815:function(c,b,a){"use strict";a.d(b,{Z:function(){return g}});var d=a(943),e=a(3375),f=a(1566);function g(a){return function(a){if(Array.isArray(a))return(0,d.Z)(a)}(a)||(0,e.Z)(a)||(0,f.Z)(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(c,b,a){"use strict";a.d(b,{Z:function(){return e}});var d=a(943);function e(a,c){if(a){if("string"==typeof a)return(0,d.Z)(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return(0,d.Z)(a,c)}}}},function(a){a.O(0,[996,774,888,179],function(){var b;return a(a.s=867)}),_N_E=a.O()}])