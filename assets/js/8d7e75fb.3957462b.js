(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{110:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(110)),i={title:"Introduction",sidebar_position:0},c={unversionedId:"overview/introduction",id:"overview/introduction",isDocsHomePage:!1,title:"Introduction",description:"Please forgive the missing content in various locations. This project is under active development and is evolving rapidly. Keep an eye out for updates!",source:"@site/docs/overview/introduction.md",sourceDirName:"overview",slug:"/overview/introduction",permalink:"/docs/overview/introduction",editUrl:"https://github.com/authorizer-tech/authorizer-web/edit/master/docs/docs/overview/introduction.md",version:"current",sidebarPosition:0,frontMatter:{title:"Introduction",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Architecture",permalink:"/docs/overview/architecture"}},s=[],l={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),Object(a.b)("strong",{parentName:"h5"},"This documentation is under active development!"))),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Please forgive the missing content in various locations. This project is under active development and is evolving rapidly. Keep an eye out for updates \ud83d\udc40!"))),Object(a.b)("p",null,"The Authorizer platform is a distributed, highly-scalable, and high performance platform for permission and access management. It stores permissions and serves authorization queries based on stored permissions. It supports a variety of models including: attribute-based access control (ABAC), role-based access control (RBAC), access control lists (ACLs), and other custom models. The design of the Authorizer platform is inspired by the design of ",Object(a.b)("a",{parentName:"p",href:"https://research.google/pubs/pub48190/"},'Google Zanzibar - "Google\u2019s Consistent, Global Authorization System"'),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Zanzibar is a global system for storing and evaluating access control lists. Zanzibar provides a uniform data model and configuration language for expressing a wide range of access control policies from hundreds of client services at Google, including Calendar, Cloud, Drive, Maps, Photos, and YouTube. Its authorization decisions respect causal ordering of user actions and thus provide external consistency amid changes to access control lists and object contents.")),Object(a.b)("hr",null),Object(a.b)("p",null,"To get started integrating your application with the Authorizer platform, checkout these useful resources:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"../getting-started/getting-started-intro"},"Getting Started")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./examples/examples-intro"},"Examples")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"../api-reference"},"API Reference"))),Object(a.b)("p",null,"If you'd like to learn more about the design and concepts of the Authorizer platform check out these resources:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./architecture"},"Architecture")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./concepts/concepts-intro"},"Concepts"))))}u.isMDXComponent=!0}}]);