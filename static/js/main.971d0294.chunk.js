(this.webpackJsonpitopag=this.webpackJsonpitopag||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),i=n(4),o=n.n(i),a=n(3),u=(n(10),function(e){var t=e.start,n=e.stop,s=e.wait,r=e.reset;return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"btn",onClick:t,children:"Start"}),Object(c.jsx)("button",{className:"btn",onClick:n,children:"Stop"}),Object(c.jsx)("button",{className:"btn",onDoubleClick:s,children:"Wait"}),Object(c.jsx)("button",{className:"btn",onClick:r,children:"Reset"})]})}),j=function(){return Object(c.jsx)("div",{className:"header",children:"\u0422\u0430\u0439\u043c\u0435\u0440"})},l=function(e){var t=e.time;return Object(c.jsxs)("div",{className:"disp",children:[Object(c.jsx)("span",{children:t.hour>=10?t.hour:"0"+t.hour}),"\xa0:\xa0",Object(c.jsx)("span",{children:t.minute>=10?t.minute:"0"+t.minute}),"\xa0:\xa0",Object(c.jsx)("span",{children:t.seconds>=10?t.seconds:"0"+t.seconds})]})};var b=function(){var e=Object(s.useState)({hour:0,minute:0,seconds:0}),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(s.useState)(),o=Object(a.a)(i,2),b=o[0],d=o[1],h=n.hour,O=n.minute,m=n.seconds,x=function(){return 60===O&&(h++,O=0),60===m&&(O++,m=0),m++,r({hour:h,minute:O,seconds:m})};return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(j,{}),Object(c.jsx)(l,{time:n}),Object(c.jsx)(u,{start:function(){x(),d(setInterval(x,1e3))},stop:function(){return clearInterval(b),r({hour:0,minute:0,seconds:0})},wait:function(){clearInterval(b)},reset:function(){return clearInterval(b),r({hour:0,minute:0,seconds:0})}})]})};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.971d0294.chunk.js.map