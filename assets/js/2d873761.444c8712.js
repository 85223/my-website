"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>R});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,R=s["".concat(l,".").concat(d)]||s[d]||u[d]||o;return n?r.createElement(R,c(c({ref:t},m),{},{components:n})):r.createElement(R,c({ref:t},m))}));function R(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={authors:"Buzz",name:"Buzz",title:"[React] Component Render and Commit",tags:["React","Render","Browser paint"]},c="React Component Render and Commit",i={unversionedId:"React/RenderAndCommit",id:"React/RenderAndCommit",title:"[React] Component Render and Commit",description:"\u672c\u6587\u7ae0\u5167\u5bb9\u5747\u4f86\u81ea React \u5b98\u65b9\u6587\u4ef6\uff1a",source:"@site/docs/React/RenderAndCommit.md",sourceDirName:"React",slug:"/React/RenderAndCommit",permalink:"/my-website/React/RenderAndCommit",draft:!1,tags:[{label:"React",permalink:"/my-website/tags/react"},{label:"Render",permalink:"/my-website/tags/render"},{label:"Browser paint",permalink:"/my-website/tags/browser-paint"}],version:"current",frontMatter:{authors:"Buzz",name:"Buzz",title:"[React] Component Render and Commit",tags:["React","Render","Browser paint"]},sidebar:"tutorialSidebar",previous:{title:"[Redux] Redux Toolkit",permalink:"/my-website/React/ReduxToolkit"},next:{title:"[ReactDoc]React \u4e2d\u7684 State \u548c Props \u5230\u5e95\u5dee\u5728\u54ea",permalink:"/my-website/React/StateVsProps"}},l={},p=[{value:"Setp1. \u89f8\u767c\u6e32\u67d3 (Trigger a render)",id:"setp1-\u89f8\u767c\u6e32\u67d3-trigger-a-render",level:2},{value:"Setp2. React \u6e32\u67d3 Component (React renders your components)",id:"setp2-react-\u6e32\u67d3-component-react-renders-your-components",level:2},{value:"Setp3. \u5be6\u969b\u66f4\u65b0 DOM \u5143\u7d20 (React commits changes to the DOM)",id:"setp3-\u5be6\u969b\u66f4\u65b0-dom-\u5143\u7d20-react-commits-changes-to-the-dom",level:2},{value:"Browser Paint (\u700f\u89bd\u5668\u7684\u7e6a\u88fd)",id:"browser-paint-\u700f\u89bd\u5668\u7684\u7e6a\u88fd",level:2}],m={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-component-render-and-commit"},"React Component Render and Commit"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u7ae0\u5167\u5bb9\u5747\u4f86\u81ea React \u5b98\u65b9\u6587\u4ef6\uff1a"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Render and Commit : ",(0,a.kt)("a",{parentName:"li",href:"https://react.dev/learn/render-and-commit"},"https://react.dev/learn/render-and-commit"),"\nReact Component \u5728\u986f\u793a\u5728\u700f\u89bd\u5668\u4e0a\u4e4b\u524d\u6703\u5148\u5728 React \u5167\u90e8\u6e32\u67d3\uff0c\u4e0b\u9762\u6703\u8b1b\u8ff0\u5404\u968e\u6bb5\u7684\u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5\u3002"))),(0,a.kt)("p",null,"\u7e3d\u5171\u53ef\u4ee5\u5206\u70ba\u4e09\u500b\u6b65\u9a5f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u89f8\u767c\u6e32\u67d3 (Trigger Render)"),(0,a.kt)("li",{parentName:"ol"},"React \u6e32\u67d3 Component (Rendering)"),(0,a.kt)("li",{parentName:"ol"},"\u5be6\u969b\u66f4\u65b0 DOM \u5143\u7d20 (Commit)")),(0,a.kt)("h2",{id:"setp1-\u89f8\u767c\u6e32\u67d3-trigger-a-render"},"Setp1. \u89f8\u767c\u6e32\u67d3 (Trigger a render)"),(0,a.kt)("p",null,"React \u6703\u5728\u4ee5\u4e0b\u5e7e\u7a2e\u60c5\u6cc1\u4e0b\u9032\u884c\u6e32\u67d3\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"component \u7684\u521d\u59cb\u6e32\u67d3\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7576\u4e00\u500b component \u7684 props \u6216 state \u767c\u751f\u6539\u8b8a\u6642\uff0cReact \u6703\u91cd\u65b0\u6e32\u67d3\u8a72 component\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7576\u4e00\u500b component \u7684 parent component \u91cd\u65b0\u6e32\u67d3\u6642\uff0cReact \u6703\u91cd\u65b0\u6e32\u67d3\u8a72 component\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7576\u4e00\u500b component \u7684 forceUpdate() \u65b9\u6cd5\u88ab\u8abf\u7528\u6642\uff0cReact \u6703\u5f37\u5236\u91cd\u65b0\u6e32\u67d3\u8a72 component\u3002")),(0,a.kt)("h2",{id:"setp2-react-\u6e32\u67d3-component-react-renders-your-components"},"Setp2. React \u6e32\u67d3 Component (React renders your components)"),(0,a.kt)("p",null,"\u9019\u908a\u7684 React Render \u6307\u7684\u662f React \u6703\u53bb\u547c\u53eb\u57f7\u884c\u9019\u500b Component \u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u4e00\u958b\u59cb component \u7684\u521d\u59cb\u6e32\u67d3\u7684\u6642\u5019\u6703\u5148\u628a DOM \u7684\u7bc0\u9ede\u90fd\u5148\u7522\u751f\u51fa\u4f86\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728 re-render \u6642 React \u6703\u8a08\u7b97\u6bcf\u500b\u5143\u7d20\u5c6c\u6027\u548c\u524d\u4e00\u6b21\u6e32\u67d3\u76f8\u6bd4\u6709\u6c92\u6709\u6539\u8b8a\uff0c\u6709\u6539\u8b8a\u7684\u8a71\u6703\u5728 commit pahase \u4f86\u5be6\u969b\u66f4\u65b0\u6709\u8b8a\u52d5\u7684 DOM \u5143\u7d20\u3002")),(0,a.kt)("h2",{id:"setp3-\u5be6\u969b\u66f4\u65b0-dom-\u5143\u7d20-react-commits-changes-to-the-dom"},"Setp3. \u5be6\u969b\u66f4\u65b0 DOM \u5143\u7d20 (React commits changes to the DOM)"),(0,a.kt)("p",null,"\u5728\u9019\u500b\u968e\u6bb5 React \u6703\u5be6\u969b\u6539\u8b8a HTML \u7684 DOM \u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u7b2c\u4e00\u6b21\u521d\u59cb\u5316\u6e32\u67d3\u7684\u6642\u5019 React \u6703\u4f7f\u7528 appendChild() \u65b9\u6cd5 \u628a\u6240\u6709\u7684 DOM Node \u90fd\u653e\u5230\u756b\u9762\u4e0a\u53bb\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u4e4b\u5f8c\u7684\u6e32\u67d3\u90fd\u6703\u53ea\u66f4\u65b0\u6709\u6539\u8b8a\u7684\u90e8\u5206\uff0c\u6e1b\u5c11\u5be6\u969b\u4e0a\u5c0d DOM \u7684\u64cd\u4f5c\u548c\u66f4\u52d5\u4f86\u63d0\u5347\u6548\u7387\u3002")),(0,a.kt)("h2",{id:"browser-paint-\u700f\u89bd\u5668\u7684\u7e6a\u88fd"},"Browser Paint (\u700f\u89bd\u5668\u7684\u7e6a\u88fd)"),(0,a.kt)("p",null,"\u6700\u5f8c DOM \u66f4\u65b0\u5b8c\u6210\u4e4b\u5f8c\uff0c\u700f\u89bd\u5668\u624d\u6703\u6839\u64da DOM \u7684\u7d50\u69cb\u7e6a\u88fd\u76f8\u5c0d\u61c9\u7684 UI \u986f\u793a\u5728\u756b\u9762\u4e0a\u3002"))}u.isMDXComponent=!0}}]);