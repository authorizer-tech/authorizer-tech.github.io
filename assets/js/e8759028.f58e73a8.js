(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(116)),o={title:"Check a Subject's Access",sidebar_position:3},i={unversionedId:"getting-started/check-access",id:"getting-started/check-access",isDocsHomePage:!1,title:"Check a Subject's Access",description:'In the prior step we granted "subject1" the "member" relation to the "group1" object in the "groups" namespace, if we do an access Check we should get an allowed response.',source:"@site/docs/getting-started/check-access.md",sourceDirName:"getting-started",slug:"/getting-started/check-access",permalink:"/docs/getting-started/check-access",editUrl:"https://github.com/authorizer-tech/authorizer-web/edit/master/docs/docs/getting-started/check-access.md",version:"current",sidebarPosition:3,frontMatter:{title:"Check a Subject's Access",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Write a Relation Tuple",permalink:"/docs/getting-started/write-relation-tuple"},next:{title:"\u2699\ufe0f  Configuration",permalink:"/docs/configuration"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"In the ",Object(c.b)("a",{parentName:"p",href:"./write-relation-tuple"},"prior step"),' we granted "subject1" the "member" relation to the "group1" object in the "groups" namespace, if we do an access ',Object(c.b)("a",{parentName:"p",href:"../api-reference/check-service#check"},"Check")," we should get an allowed response."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},'grpcurl -plaintext -d \\\n\'{\n    "namespace": "groups",\n    "object": "group1",\n    "relation": "member",\n    "subject": { "id" : "subject1" }\n }\' localhost:50052 authorizer.accesscontroller.v1alpha1.CheckService.Check\n')),Object(c.b)("p",null,"You can see that the response matches this expectation ",Object(c.b)("inlineCode",{parentName:"p"},'{ "allowed" : true }'),"."),Object(c.b)("p",null,"Now let's remove the relation..."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},'grpcurl -plaintext -d \\\n\'{\n    "relationTupleDeltas": [\n        {\n            "action": "ACTION_DELETE",\n            "relationTuple": {\n                "namespace": "groups",\n                "object": "group1",\n                "relation": "member",\n                "subject": {\n                    "id": "subject1"\n                }\n            }\n        }\n    ]\n }\' localhost:50052 authorizer.accesscontroller.v1alpha1.WriteService.WriteRelationTuplesTxn\n')),Object(c.b)("p",null,'Verify "subject1" is no longer a member of "group1".'),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},'grpcurl -plaintext -d \\\n\'{\n    "namespace": "groups",\n    "object": "group1",\n    "relation": "member",\n    "subject": { "id" : "subject1" }\n }\' localhost:50052 authorizer.accesscontroller.v1alpha1.CheckService.Check\n')),Object(c.b)("p",null,"And now you get an empty response ",Object(c.b)("inlineCode",{parentName:"p"},"{ }"),", which indicates that ",Object(c.b)("inlineCode",{parentName:"p"},"allowed")," is false."),Object(c.b)("p",null,"For more information on the API endpoint take a look at the ",Object(c.b)("a",{parentName:"p",href:"../api-reference/check-service"},"API Reference"),"."))}p.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);