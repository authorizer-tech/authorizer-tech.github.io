(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{121:function(e,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return m}));var t=n(0),i=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function f(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var r=i.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=u(e.components);return i.a.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},d=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,o=e.parentName,p=f(e,["components","mdxType","originalType","parentName"]),s=u(n),d=t,m=s["".concat(o,".").concat(d)]||s[d]||l[d]||c;return n?i.a.createElement(m,a(a({ref:r},p),{},{components:n})):i.a.createElement(m,a({ref:r},p))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,o=new Array(c);o[0]=d;var a={};for(var f in r)hasOwnProperty.call(r,f)&&(a[f]=r[f]);a.originalType=e,a.mdxType="string"==typeof e?e:t,o[1]=a;for(var p=2;p<c;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return a})),n.d(r,"toc",(function(){return f})),n.d(r,"default",(function(){return u}));var t=n(3),i=n(7),c=(n(0),n(121)),o={title:"NamespaceConfigService"},a={unversionedId:"api-reference/nsconfig-service",id:"api-reference/nsconfig-service",isDocsHomePage:!1,title:"NamespaceConfigService",description:"WriteConfig",source:"@site/docs/api-reference/nsconfig-service.md",sourceDirName:"api-reference",slug:"/api-reference/nsconfig-service",permalink:"/docs/api-reference/nsconfig-service",editUrl:"https://github.com/authorizer-tech/authorizer-web/edit/master/docs/docs/api-reference/nsconfig-service.md",version:"current",frontMatter:{title:"NamespaceConfigService"},sidebar:"tutorialSidebar",previous:{title:"ExpandService",permalink:"/docs/api-reference/expand-service"},next:{title:"ReadService",permalink:"/docs/api-reference/read-service"}},f=[{value:"WriteConfig",id:"writeconfig",children:[]},{value:"ReadConfig",id:"readconfig",children:[]}],p={toc:f};function u(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"writeconfig"},"WriteConfig"),Object(c.b)("h2",{id:"readconfig"},"ReadConfig"))}u.isMDXComponent=!0}}]);