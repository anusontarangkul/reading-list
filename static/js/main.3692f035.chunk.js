(this.webpackJsonpbooklist=this.webpackJsonpbooklist||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(7),i=n.n(r),s=(n(13),n.p,n(14),n(3)),u=n(8),a=n(6),b=n.n(a),j=function(t,e){switch(e.type){case"ADD_BOOK":return[].concat(Object(u.a)(t),[{title:e.book.title,author:e.book.author,id:b()()}]);case"REMOVE_BOOK":return t.filter((function(t){return t.id!==e.id}));default:return t}},l=n(0),O=Object(c.createContext)(),d=function(t){var e=Object(c.useReducer)(j,[],(function(){var t=localStorage.getItem("books");return t?JSON.parse(t):[]})),n=Object(s.a)(e,2),o=n[0],r=n[1];return Object(c.useEffect)((function(){localStorage.setItem("books",JSON.stringify(o))}),[o]),Object(l.jsx)(O.Provider,{value:{books:o,dispatch:r},children:t.children})},h=function(){var t=Object(c.useContext)(O).books;return Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)("h1",{children:"Ninja Reading List"}),Object(l.jsxs)("p",{children:["Currently you have ",t.length," books to get through..."]})]})},x=function(t){var e=t.book,n=Object(c.useContext)(O).dispatch;return Object(l.jsxs)("li",{onClick:function(){return n({type:"REMOVE_BOOK",id:e.id})},children:[Object(l.jsx)("div",{className:"title",children:e.title}),Object(l.jsx)("div",{className:"author",children:e.author})]})},f=function(){var t=Object(c.useContext)(O).books;return t.length?Object(l.jsx)("div",{className:"book-list",children:Object(l.jsx)("ul",{children:t.map((function(t){return Object(l.jsx)(x,{book:t},t.id)}))})}):Object(l.jsx)("div",{className:"empty",children:"No books to read."})},p=function(){var t=Object(c.useContext)(O).dispatch,e=Object(c.useState)(""),n=Object(s.a)(e,2),o=n[0],r=n[1],i=Object(c.useState)(""),u=Object(s.a)(i,2),a=u[0],b=u[1];return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({type:"ADD_BOOK",book:{title:o,author:a}}),r(""),b("")},children:[Object(l.jsx)("input",{type:"text",placeholder:"book title",value:o,onChange:function(t){return r(t.target.value)},required:!0}),Object(l.jsx)("input",{type:"text",placeholder:"author",value:a,onChange:function(t){return b(t.target.value)},required:!0}),Object(l.jsx)("input",{type:"submit",value:"add book"})]})};var v=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(d,{children:[Object(l.jsx)(h,{}),Object(l.jsx)(f,{}),Object(l.jsx)(p,{})]})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),r(t),i(t)}))};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),k()}},[[16,1,2]]]);
//# sourceMappingURL=main.3692f035.chunk.js.map