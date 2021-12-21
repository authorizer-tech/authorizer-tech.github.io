(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{110:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||o;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(110)),i={sidebar_position:1},c={unversionedId:"getting-started/install/kubernetes",id:"getting-started/install/kubernetes",isDocsHomePage:!1,title:"Kubernetes + Helm (Recommended)",description:"Our official Helm chart can be used to setup and install the Authorizer platform in a Kubernetes cluster. For more information, please refer to the official Helm chart's documentation.",source:"@site/docs/getting-started/install/kubernetes.md",sourceDirName:"getting-started/install",slug:"/getting-started/install/kubernetes",permalink:"/docs/getting-started/install/kubernetes",editUrl:"https://github.com/authorizer-tech/authorizer-web/edit/master/docs/docs/getting-started/install/kubernetes.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/getting-started/install/overview"},next:{title:"Docker",permalink:"/docs/getting-started/install/docker"}},s=[],l={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Our official ",Object(o.b)("a",{parentName:"p",href:"https://github.com/authorizer-tech/helm-charts/tree/master/charts/authorizer"},"Helm chart")," can be used to setup and install the Authorizer platform in a ",Object(o.b)("a",{parentName:"p",href:"https://kubernetes.io"},"Kubernetes")," cluster. For more information, please refer to the official Helm chart's documentation."),Object(o.b)("p",null,"To install an instance of the Authorizer platform using the Helm chart, create a ",Object(o.b)("inlineCode",{parentName:"p"},"values.yaml")," file with your release specific ",Object(o.b)("a",{parentName:"p",href:"https://github.com/authorizer-tech/helm-charts/tree/master/charts/authorizer#parameters"},"Helm values")," and then run the following commands:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"helm repo add authorizer-tech https://charts.authorizer.tech\nhelm install authorizer -f values.yaml authorizer-tech/authorizer\n")))}u.isMDXComponent=!0}}]);