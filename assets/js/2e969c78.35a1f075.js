(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=a,d=l["".concat(o,".").concat(m)]||l[m]||b[m]||i;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(119)),o={sidebar_position:3},c={unversionedId:"overview/concepts/subjects",id:"overview/concepts/subjects",isDocsHomePage:!1,title:"Subjects",description:"A Subject is a polymorphic data-type. It can take one of two values: a single uniquely identifiable subject (e.g. Subject ID) or a subject can take a value representing a set of subjects (e.g. Subject Sets).",source:"@site/docs/overview/concepts/subjects.md",sourceDirName:"overview/concepts",slug:"/overview/concepts/subjects",permalink:"/docs/overview/concepts/subjects",editUrl:"https://github.com/authorizer-tech/authorizer-web/edit/master/docs/docs/overview/concepts/subjects.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Objects",permalink:"/docs/overview/concepts/objects"},next:{title:"Graph of Relations",permalink:"/docs/overview/concepts/graph-of-relations"}},s=[{value:"Subject ID",id:"subject-id",children:[{value:"Example",id:"example",children:[]}]},{value:"Subject Sets",id:"subject-sets",children:[{value:"Example",id:"example-1",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A Subject is a polymorphic data-type. It can take one of two values: a single uniquely identifiable subject (e.g. ",Object(i.b)("a",{parentName:"p",href:"./subjects#subject-id"},"Subject ID"),") or a subject can take a value representing a set of subjects (e.g. ",Object(i.b)("a",{parentName:"p",href:"./subjects#subject-sets"},"Subject Sets"),")."),Object(i.b)("h2",{id:"subject-id"},"Subject ID"),Object(i.b)("p",null,"A subject ID can be any string. It is the app's responsibility to map the subjects taking action within the app to a constant, unique identifier."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Although a subject ID can be any string, ",Object(i.b)("strong",{parentName:"p"},"it is encouraged to use a globally unique UUID")," of some form (uuidv4 or similar)."))),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"Let's say you're building an app that has end-users making API calls into your platform. Each user is uniquely idenfitied with a strictly increasing database key within a schema specific to that user's tenant (this app manages multi-tenancy with a schema-per-tenant model)."),Object(i.b)("p",null,"The app could choose to map ",Object(i.b)("inlineCode",{parentName:"p"},"(<tenant>, <user-id>)")," pairs to an appropriate UUID and use the UUID as the\nsubject ID when writing relation tuples. Alternatively, the app could choose to use the ",Object(i.b)("inlineCode",{parentName:"p"},"<tenant>/<user-id>"),"  string (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"tenant1/user1"),") to identify the subjectID, so long as this string is guaranteed to be unique within the app."),Object(i.b)("h2",{id:"subject-sets"},"Subject Sets"),Object(i.b)("p",null,'A subject set defines the set of all subjects that have a specific relation to an object. Subject sets can "point to" or reference other subject sets, thus creating flexible pointer-chain references of hierarchical definitions (see ',Object(i.b)("a",{parentName:"p",href:"../examples/hierarchy"},"Hierarchy example"),"). Subject sets allow models that define Role-based Access Control (see ",Object(i.b)("a",{parentName:"p",href:"/docs/overview/examples/rbac"},"RBAC example"),") polcies and other inheritance based relationships."),Object(i.b)("h3",{id:"example-1"},"Example"),Object(i.b)("p",null,"Consider the following table of relation tuples:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"| namespace:object | relation    | subject              |\n|------------------|-------------|----------------------|\n| groups:group0    | member      | user1                |\n| groups:group1    | member      | groups:group0#member |\n| teams:team0      | participant | groups:group1#member |\n")),Object(i.b)("p",null,"Using subject sets we create a recursive hierarchical relationship between teams and groups of users. In this example we have expressed the following statement \"Anyone who is a member of 'group0' is also a member of 'group1' in the 'groups' namespace, and anyone who is in 'group1' is a participant of 'team0' in the 'teams' namespace."))}u.isMDXComponent=!0}}]);