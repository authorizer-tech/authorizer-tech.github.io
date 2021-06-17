(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(124)),i={title:"Add a Namespace Configuration",sidebar_position:1},c={unversionedId:"getting-started/add-namespace-config",id:"getting-started/add-namespace-config",isDocsHomePage:!1,title:"Add a Namespace Configuration",description:"The follow code snippet(s) show how to introduce a new namespace configuration.",source:"@site/docs/getting-started/add-namespace-config.mdx",sourceDirName:"getting-started",slug:"/getting-started/add-namespace-config",permalink:"/docs/getting-started/add-namespace-config",editUrl:"https://github.com/authorizer-tech/authorizer-web/edit/master/docs/docs/getting-started/add-namespace-config.mdx",version:"current",sidebarPosition:1,frontMatter:{title:"Add a Namespace Configuration",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/docs/getting-started/install/kubernetes"},next:{title:"Write a Relation Tuple",permalink:"/docs/getting-started/write-relation-tuple"}},s=[],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The follow code snippet(s) show how to introduce a new ",Object(o.b)("a",{parentName:"p",href:"../overview/concepts/namespaces"},"namespace")," configuration."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},'grpcurl -plaintext -d \\\n\'{\n    "config": {\n        "name": "groups",\n        "relations": [\n            {"name": "member"}\n        ]\n    }\n }\' localhost:50052 authorizer.accesscontroller.v1alpha1.NamespaceConfigService.WriteConfig\n')),Object(o.b)("p",null,"Verify it was written by reading it back."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},'grpcurl -plaintext -d \'{"namespace": "groups"}\' localhost:50052 authorizer.accesscontroller.v1alpha1.NamespaceConfigService.ReadConfig\n')),Object(o.b)("p",null,"For more information on the API endpoint take a look at the ",Object(o.b)("a",{parentName:"p",href:"../api-reference/nsconfig-service"},"API Reference"),"."))}l.isMDXComponent=!0}}]);