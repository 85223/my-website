"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5143],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>d});var a=n(7294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,s=function(t,e){if(null==t)return{};var n,a,s={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var u=a.createContext({}),c=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},l=function(t){var e=c(t.components);return a.createElement(u.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,s=t.mdxType,o=t.originalType,u=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),p=c(n),k=s,d=p["".concat(u,".").concat(k)]||p[k]||m[k]||o;return n?a.createElement(d,r(r({ref:e},l),{},{components:n})):a.createElement(d,r({ref:e},l))}));function d(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var o=n.length,r=new Array(o);r[0]=k;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[p]="string"==typeof t?t:s,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8027:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),s=(n(7294),n(3905));const o={authors:"MichaelJack",name:"MichaelJack",title:"[Redux] React Hooks - useState ",tags:["React","Hooks","Javascript","useState"]},r="React Hooks - useState",i={unversionedId:"React/Intro_useState",id:"React/Intro_useState",title:"[Redux] React Hooks - useState ",description:"tags: React",source:"@site/docs/React/Intro_useState.md",sourceDirName:"React",slug:"/React/Intro_useState",permalink:"/my-website/React/Intro_useState",draft:!1,tags:[{label:"React",permalink:"/my-website/tags/react"},{label:"Hooks",permalink:"/my-website/tags/hooks"},{label:"Javascript",permalink:"/my-website/tags/javascript"},{label:"useState",permalink:"/my-website/tags/use-state"}],version:"current",frontMatter:{authors:"MichaelJack",name:"MichaelJack",title:"[Redux] React Hooks - useState ",tags:["React","Hooks","Javascript","useState"]},sidebar:"tutorialSidebar",previous:{title:"\u7269\u4ef6\u5c0e\u5411\u57fa\u672c\u6982\u5ff5 - \u521d\u63a2",permalink:"/my-website/Concept/OPPPilotStudy"},next:{title:"[Redux] Quick Start ",permalink:"/my-website/React/QuickStart"}},u={},c=[{value:"tags: <code>React</code>",id:"tags-react",level:6},{value:"\u4f60\u5c07\u6703\u5b78\u7fd2\u5230",id:"\u4f60\u5c07\u6703\u5b78\u7fd2\u5230",level:2},{value:'<span id="section1">\u4ec0\u9ebc\u662f useState\uff0c\u6709\u4ec0\u9ebc\u7528\u9014\uff1f</span>',id:"\u4ec0\u9ebc\u662f-usestate\u6709\u4ec0\u9ebc\u7528\u9014",level:2},{value:'<span id="section1-1">useState \u7684\u57fa\u672c\u6982\u5ff5\u548c\u7528\u9014</span>',id:"usestate-\u7684\u57fa\u672c\u6982\u5ff5\u548c\u7528\u9014",level:3},{value:'<span id="section1-2">\u5982\u4f55\u4f7f\u7528 useState \u4f86\u7ba1\u7406 component \u4e2d\u7684\u72c0\u614b</span>',id:"\u5982\u4f55\u4f7f\u7528-usestate-\u4f86\u7ba1\u7406-component-\u4e2d\u7684\u72c0\u614b",level:3},{value:'<span id="section1-2-1">\u4f7f\u7528 useState \u5efa\u7acb state </span>',id:"\u4f7f\u7528-usestate-\u5efa\u7acb-state-",level:4},{value:'<span id="section1-2-2">\u4f7f\u7528 setState \u66f4\u65b0\u72c0\u614b \uff0c \u50cf\u662f\u9019\u6a23 setSomething(nextState)</span>',id:"\u4f7f\u7528-setstate-\u66f4\u65b0\u72c0\u614b--\u50cf\u662f\u9019\u6a23-setsomethingnextstate",level:4},{value:'<span id="section1-2-3">\u5efa\u7acb\u4e00\u500b\u7c21\u55ae\u7684\u8a08\u6578\u5668\uff0c\u8b93\u4f7f\u7528\u8005\u9ede\u64ca\u6309\u9215\u4f86\u589e\u52a0\u8a08\u6578\u5668\u6578\u503c</span>',id:"\u5efa\u7acb\u4e00\u500b\u7c21\u55ae\u7684\u8a08\u6578\u5668\u8b93\u4f7f\u7528\u8005\u9ede\u64ca\u6309\u9215\u4f86\u589e\u52a0\u8a08\u6578\u5668\u6578\u503c",level:4},{value:'<span id="section1-4">\u57fa\u672c\u7528\u6cd5</span>',id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"Quick Start",id:"quick-start",level:4},{value:"\u9663\u5217(Array)\u6216\u7269\u4ef6(Object)\u7684\u72c0\u614b",id:"\u9663\u5217array\u6216\u7269\u4ef6object\u7684\u72c0\u614b",level:4},{value:'<span id="section1-5">\u6ce8\u610f\u4e8b\u9805</span>',id:"\u6ce8\u610f\u4e8b\u9805",level:3},{value:'<span id="section1-5">\u88dc\u5145\u6982\u5ff5 \ud83e\udd2a</span>',id:"\u88dc\u5145\u6982\u5ff5-",level:3},{value:"\u70ba\u4ec0\u9ebc\u8981\u7528 useState \u7ba1\u7406 component \u72c0\u614b\uff1f",id:"\u70ba\u4ec0\u9ebc\u8981\u7528-usestate-\u7ba1\u7406-component-\u72c0\u614b",level:4},{value:"\u4e00\u5b9a\u8981\u4f7f\u7528 useState \u63d0\u4f9b\u7684 setState function \u66f4\u65b0 state \u55ce\uff1f\u70ba\u4ec0\u9ebc\u4e0d\u80fd\u76f4\u63a5\u66f4\u6539 state \u7684\u503c\uff1f",id:"\u4e00\u5b9a\u8981\u4f7f\u7528-usestate-\u63d0\u4f9b\u7684-setstate-function-\u66f4\u65b0-state-\u55ce\u70ba\u4ec0\u9ebc\u4e0d\u80fd\u76f4\u63a5\u66f4\u6539-state-\u7684\u503c",level:4},{value:"\u70ba\u4ec0\u9ebc\u4e0d\u80fd\u4f7f\u7528\u666e\u901a\u8b8a\u6578 \u7ba1\u7406 component \u72c0\u614b\uff1f",id:"\u70ba\u4ec0\u9ebc\u4e0d\u80fd\u4f7f\u7528\u666e\u901a\u8b8a\u6578-\u7ba1\u7406-component-\u72c0\u614b",level:4},{value:"\u4ec0\u9ebc\u662f Virtual DOM?",id:"\u4ec0\u9ebc\u662f-virtual-dom",level:4}],l={toc:c},p="wrapper";function m(t){let{components:e,...n}=t;return(0,s.kt)(p,(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"react-hooks---usestate"},"React Hooks - useState"),(0,s.kt)("h6",{id:"tags-react"},"tags: ",(0,s.kt)("inlineCode",{parentName:"h6"},"React")),(0,s.kt)("h2",{id:"\u4f60\u5c07\u6703\u5b78\u7fd2\u5230"},"\u4f60\u5c07\u6703\u5b78\u7fd2\u5230"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#section1"},"\u4ec0\u9ebc\u662f useState\uff0c\u6709\u4ec0\u9ebc\u7528\u9014\uff1f"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#section1-1"},"useState \u7684\u57fa\u672c\u6982\u5ff5\u548c\u7528\u9014")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#section1-2"},"\u5982\u4f55\u4f7f\u7528 useState \u4f86\u7ba1\u7406 component \u4e2d\u7684\u72c0\u614b"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#section1-2-1"},"\u4f7f\u7528 useState \u5efa\u7acb state ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#section1-2-2"},"\u4f7f\u7528 setState \u66f4\u65b0\u72c0\u614b \uff0c \u50cf\u662f\u9019\u6a23 setSomething(nextState")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#section1-2-3"},"\u5efa\u7acb\u4e00\u500b\u7c21\u55ae\u7684\u8a08\u6578\u5668\uff0c\u8b93\u4f7f\u7528\u8005\u9ede\u64ca\u6309\u9215\u4f86\u589e\u52a0\u8a08\u6578\u5668\u6578\u503c")))))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#section1-4"},"\u57fa\u672c\u7528\u6cd5")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#section1-5"},"\u6ce8\u610f\u4e8b\u9805")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#section1-6"},"\u88dc\u5145\u6982\u5ff5 \ud83e\udd2a"))),(0,s.kt)("h2",{id:"\u4ec0\u9ebc\u662f-usestate\u6709\u4ec0\u9ebc\u7528\u9014"},(0,s.kt)("span",{id:"section1"},"\u4ec0\u9ebc\u662f useState\uff0c\u6709\u4ec0\u9ebc\u7528\u9014\uff1f")),(0,s.kt)("h3",{id:"usestate-\u7684\u57fa\u672c\u6982\u5ff5\u548c\u7528\u9014"},(0,s.kt)("span",{id:"section1-1"},"useState \u7684\u57fa\u672c\u6982\u5ff5\u548c\u7528\u9014")),(0,s.kt)("p",null,"useState \u662f React \u63d0\u4f9b\u7684\u4e00\u500b Hooks \u51fd\u5f0f\uff0c\u5b83\u53ef\u4ee5\u7528\u4f86\u70ba React functional component \u6dfb\u52a0\u72c0\u614b\u548c\u7ba1\u7406 component \u7684\u72c0\u614b\uff0c\u5f9e\u800c\u5be6\u73fe\u5c0d component \u7684\u4ea4\u4e92\u548c\u5176\u7576\u524d\u72c0\u614b\u66f4\u65b0\u3002\n\u800c\u9019\u500b state \u7684\u503c\u53ef\u4ee5\u662f\u57fa\u672c\u8cc7\u6599\u578b\u614b\uff08\u5982\u5b57\u4e32\u3001\u6578\u5b57\u3001\u5e03\u6797\u7b49\uff09\u7684\u72c0\u614b\u3002\n\u6bd4\u5982\u8aaa\u53ef\u4ee5\u7528\u4f86\u5132\u5b58\u8868\u55ae\u8f38\u5165\u6846\u7684\u503c\u3001 component \u72c0\u614b\u7684\u986f\u793a\u3001\u8a08\u6578\u5668 count \u6578\u503c\u3001\u6703\u54e1\u7cfb\u7d71\u767b\u5165\u72c0\u614b\u7b49\u7b49\u3002"),(0,s.kt)("h3",{id:"\u5982\u4f55\u4f7f\u7528-usestate-\u4f86\u7ba1\u7406-component-\u4e2d\u7684\u72c0\u614b"},(0,s.kt)("span",{id:"section1-2"},"\u5982\u4f55\u4f7f\u7528 useState \u4f86\u7ba1\u7406 component \u4e2d\u7684\u72c0\u614b")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"const [state, setState] = useState(initialState);\n")),(0,s.kt)("p",null,"\u50b3\u5165\u4e00\u500b\u521d\u59cb\u503c\u53c3\u6578 ",(0,s.kt)("inlineCode",{parentName:"p"},"initialState")," \u3002"),(0,s.kt)("p",null,"return \u4e00\u500b\u9577\u5ea6\u70ba 2 \u7684\u9663\u5217\uff0c\u7b2c\u4e00\u500b\u5143\u7d20\u662f\u7576\u524d\u72c0\u614b ",(0,s.kt)("inlineCode",{parentName:"p"},"State")," , \u7b2c\u4e8c\u500b\u5143\u7d20\u662f\u4e00\u500b\u7528\u4f86\u66f4\u65b0\u72c0\u614b\u7684 function ",(0,s.kt)("inlineCode",{parentName:"p"},"setState")," \u3002"),(0,s.kt)("h4",{id:"\u4f7f\u7528-usestate-\u5efa\u7acb-state-"},(0,s.kt)("span",{id:"section1-2-1"},"\u4f7f\u7528 useState \u5efa\u7acb state ")),(0,s.kt)("p",null,"useState \u5fc5\u9808\u5728 Component \u9802\u5c64\u5ba3\u544a state \u8b8a\u6578\u4e26\u8a2d\u5b9a\u521d\u59cb\u503c\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},"import { useState } from 'react';\n\nconst MyComponent = () => {\n  const [count, setCount] = useState(3);\n  const [name, setName] = useState('Jack');\n  const [todos, setTodos] = useState(() => createTodos());\n  // ...\n")),(0,s.kt)("p",null,"\u4e0a\u9762\u770b\u5230\u7684 useState\uff1a\u7576\u524d\u72c0\u614b (count) \u548c\u66f4\u65b0\u7576\u524d\u72c0\u614b\u7684 function (setCount)\u3002\u53ef\u4ee5\u4efb\u610f\u7d66\u5b83\u5011\u547d\u540d\uff0c\u4f46\u6163\u4f8b\u662f\u5beb ",(0,s.kt)("inlineCode",{parentName:"p"},"[something, setSomething]"),"\u3002"),(0,s.kt)("h4",{id:"\u4f7f\u7528-setstate-\u66f4\u65b0\u72c0\u614b--\u50cf\u662f\u9019\u6a23-setsomethingnextstate"},(0,s.kt)("span",{id:"section1-2-2"},"\u4f7f\u7528 setState \u66f4\u65b0\u72c0\u614b \uff0c \u50cf\u662f\u9019\u6a23 setSomething(nextState)")),(0,s.kt)("p",null,"setState \uff08\u66f4\u65b0\u72c0\u614b function\uff09\u66f4\u65b0\u72c0\u614b\u7684 function \u4f60\u53ef\u4ee5\u76f4\u63a5\u50b3\u5165\u4e0b\u4e00\u500b\u72c0\u614b\u6216\u662f\u5229\u7528\u524d\u4e00\u500b\u72c0\u614b\u4f86\u8a08\u7b97\u51fa\u4e0b\u4e00\u500b\u72c0\u614b\u7684\u503c\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},"const [count, setCount] = useState(3);\nconst [name, setName] = useState('Jack');\n\ncosnt  handleClick= () => {\n  setName('Stone');\n  setCount(preState => preState + 1);\n  // ...\n")),(0,s.kt)("h4",{id:"\u5efa\u7acb\u4e00\u500b\u7c21\u55ae\u7684\u8a08\u6578\u5668\u8b93\u4f7f\u7528\u8005\u9ede\u64ca\u6309\u9215\u4f86\u589e\u52a0\u8a08\u6578\u5668\u6578\u503c"},(0,s.kt)("span",{id:"section1-2-3"},"\u5efa\u7acb\u4e00\u500b\u7c21\u55ae\u7684\u8a08\u6578\u5668\uff0c\u8b93\u4f7f\u7528\u8005\u9ede\u64ca\u6309\u9215\u4f86\u589e\u52a0\u8a08\u6578\u5668\u6578\u503c")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},'//  src/Components/Counter/index.jsx\n\nimport React, { useState } from "react";\n// import useState hook\nimport styles from "./Counter.module.css";\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n  // \u5728 component \u9802\u7aef\u5ba3\u544a useState\n  const increment = () => setCount((preCount) => preCount + 1);\n  // function increment \u4f7f\u7528 setCount function\u4f86\u66f4\u65b0 count \u72c0\u614b\n  // function setCount \u6703\u628a count \u7684\u503c\u66f4\u65b0\u70ba count + 1\n  return (\n    <div className={styles.container}>\n      <p>Count: {count}</p>\n      <button onClick={increment}> click me </button>\n    </div>\n  );\n};\n\nexport default Counter;\n')),(0,s.kt)("h3",{id:"\u57fa\u672c\u7528\u6cd5"},(0,s.kt)("span",{id:"section1-4"},"\u57fa\u672c\u7528\u6cd5")),(0,s.kt)("h4",{id:"quick-start"},"Quick Start"),(0,s.kt)("p",null,"\u4f7f\u7528 useState \u7684\u6700\u57fa\u672c\u7684\u65b9\u5f0f\u662f\u5c07 useState hooks import \u4f60\u7684\u7d44\u4ef6\u4e2d\uff0c\u5ba3\u544a state \u6642\u8a2d\u5b9a\u521d\u59cb\u503c\u3002\u4f8b\u5982\uff0c\u4e0b\u9762\u662f\u4e00\u500b\u8a08\u6578\u5668\u7684 component \uff0c\u6bcf\u6309\u4e00\u4e0b\u6309\u9215\u8a08\u6578\u5668\u5c31+1\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},'import React, { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  function handleClick() {\n    setCount((preCount) => preCount + 1);\n  }\n\n  return (\n    <div>\n      <p>You clicked the button {count} times.</p>\n      <button onClick={handleClick}>Click me</button>\n    </div>\n  );\n}\n')),(0,s.kt)("p",null,"\u6211\u5011\u4f7f\u7528 useState \u5c07\u8a08\u6578\u5668\u8a2d\u5b9a\u521d\u59cb\u503c\u70ba 0\uff0csetCount \u662f\u4e00\u500b\u51fd\u6578\uff0c\u5b83\u7528\u4f86\u66f4\u65b0\u6211\u5011\u7684\u8a08\u6578\u5668\u72c0\u614b\u3002"),(0,s.kt)("h4",{id:"\u9663\u5217array\u6216\u7269\u4ef6object\u7684\u72c0\u614b"},"\u9663\u5217(Array)\u6216\u7269\u4ef6(Object)\u7684\u72c0\u614b"),(0,s.kt)("p",null,"\u4f7f\u7528 useState\uff0c\u4e0d\u50c5\u53ef\u4ee5\u8a18\u9304\u55ae\u500b\u503c\uff0c\u9084\u53ef\u4ee5\u7d00\u9304\u8907\u96dc\u7684\u72c0\u614b\uff0c\u4f8b\u5982 number \u7684\u9663\u5217\u6216\u7269\u4ef6\u3002\n\u4f8b\u5982\uff0c\u4e0b\u9762\u662f\u4e00\u500b\u7d00\u9304\u8cfc\u7269\u8eca\u5546\u54c1\u9805\u76ee\u7684\u7d44\u5408\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},'import React, { useState } from "react";\n\nfunction ShoppingCart() {\n  const [cart, setCart] = useState([]);\n\n  function handleAddItem() {\n    setCart([...cart, { name: "New Item" }]);\n  }\n\n  return (\n    <div>\n      <p>Your shopping cart contains {cart.length} items.</p>\n      <button onClick={handleAddItem}>Add item</button>\n    </div>\n  );\n}\n')),(0,s.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9805"},(0,s.kt)("span",{id:"section1-5"},"\u6ce8\u610f\u4e8b\u9805")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"setState \uff08\u66f4\u65b0\u72c0\u614b function\uff09\u53ea\u6703\u5728\u57f7\u884c setState \u89f8\u767c\u91cd\u65b0\u6e32\u67d3\u5f8c\u624d\u6703\u66f4\u65b0 state \u7684\u503c\uff0c\u6240\u4ee5\u5728\u8abf\u7528 setState \u5f8c\u8abf\u7528 state \u6216\u662f\u5728 setState \u4e2d\u8abf\u7528 state \u7684\u503c\u4ecd\u7136\u662f\u820a\u7684\u503c\u3002")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u5047\u5982\u8981\u76e3\u63a7 state \u7684\u503c\u6216\u662f \u900f\u904e state \u66f4\u65b0\u89f8\u767c\u5176\u4ed6 function \u8981\u4f7f\u7528 useEffect Hook\u3002"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},"import { useState } from 'react';\n\nconst MyComponent = () => {\n  const [name, setName] = useState('Jack');\n\n    const handleClick =()=>{\n        setName(\"Test\");\n        console.log(name); // \u9019\u908a\u7684name\u9084\u662f\u820a\u503c \u201cJack\u201d\n    }\n    return <div>\n       <h1>My name is {name}.</h1>\n        <button onclick={}>click me</button>\n    </div>\n}\n")))),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"setState \uff08\u66f4\u65b0\u72c0\u614b function\uff09\u5efa\u8b70\u5728 React \u66f4\u65b0\u968e\u6bb5\u57f7\u884c\uff0c\u5426\u5247\u53ef\u80fd\u6703\u9020\u6210\u592a\u591a\u6b21\u6e32\u67d3\u5c0e\u81f4\u7a0b\u5f0f\u5d29\u6f70\u6216\u662f\u5c0e\u81f4 React \u5728\u6e32\u67d3\u671f\u9593\u51fa\u73fe\u4e0d\u4e00\u81f4\u7684\u72c0\u614b\u3002\nReact \u4e2d\u6709\u5206\u70ba\u5efa\u69cb\u968e\u6bb5\u548c\u66f4\u65b0\u968e\u6bb5\uff0c\u7a0b\u5f0f\u4e00\u958b\u59cb\u57f7\u884c\u5efa\u69cb component \u6642\u9032\u884c\u4e8b\u4ef6\u7d81\u5b9a\u3001\u6839\u64da\u521d\u59cb\u72c0\u614b\u6e32\u67d3\u756b\u9762\u5c31\u662f\u5efa\u69cb\u968e\u6bb5\u3002\u6bcf\u7576\u6709 state \u6216 props \u767c\u751f\u8b8a\u5316\uff0c\u90fd\u6703\u89f8\u767c\u91cd\u65b0\u6e32\u67d3(re-render)\u7684\u6d41\u7a0b\uff0c\u800c\u9019\u500b\u91cd\u65b0\u6e32\u67d3\u7684\u6d41\u7a0b\u662f\u4e00\u500b\u7a31\u70ba\u300c\u66f4\u65b0\u968e\u6bb5\u300d(update phase)\u7684\u904e\u7a0b\u3002\n\u800c\u5728\u5efa\u69cb\u968e\u6bb5\u6642\u6703\u5c07 JSX \u8f49\u63db\u70ba\u771f\u5be6\u7684 DOM \u5143\u7d20\uff0c\u4e26\u5c07\u4e8b\u4ef6\u7d81\u5b9a\u548c\u521d\u59cb\u72c0\u614b\u6dfb\u52a0\u5230\u9801\u9762\u4e2d\uff0c\u5728\u9019\u904e\u7a0b\u4e2d\u5982\u679c\u4f7f\u7528\u66f4\u65b0\u72c0\u614b setState \u5c31\u6703\u5728\u521d\u6b21\u6e32\u67d3\u7684\u6642\u5019\u53c8\u89f8\u767c\u91cd\u65b0\u6e32\u67d3\u3002")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u5047\u5982\u8981\u5728\u78ba\u4fdd component \u90fd\u5df2\u7d93\u5efa\u69cb\u5b8c\u7562\u5f8c\u57f7\u884c setState \u53ef\u4ee5\u4f7f\u7528 useEffect Hook\u3002"),(0,s.kt)("p",{parentName:"li"},"\u6240\u4ee5\u5728 React \u4e2d\uff0c\u5efa\u8b70\u53ea\u5728\u56de\u61c9\u4f7f\u7528\u8005\u4e92\u52d5\uff08\u4f8b\u5982\u4f7f\u7528\u8005\u9ede\u64ca\u6309\u9215\uff09\u6216\u5176\u4ed6\u975e\u540c\u6b65\u4e8b\u4ef6\uff08\u4f8b\u5982\u5f9e\u4f3a\u670d\u5668\u63a5\u6536\u5230\u6578\u64da\uff09\u6642\u66f4\u65b0\u72c0\u614b\uff0c\u800c\u4e0d\u662f\u5728\u5efa\u7acb\u968e\u6bb5\u57f7\u884c setState\u3002"),(0,s.kt)("p",{parentName:"li"},"\u274c \u4e0d\u5efa\u8b70\u9019\u9ebc\u505a"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},"import { useState } from 'react';\n\nconst MyComponent = () => {\n  const [name, setName] = useState('Jack');\n\n   setName(\u201cTest\u201d);\n    return <div>\n       <h1>My name is {name}.</h1>\n        <button onclick={}>click me</button>\n    </div>\n")),(0,s.kt)("p",{parentName:"li"},"\u2705 \u5efa\u8b70\u9019\u9ebc\u505a"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},"import { useState } from 'react';\n\nconst MyComponent = () => {\n  const [name, setName] = useState('Jack');\n\n    const handleClick =()=>{\n        setName(\"Test\");\n    }\n    return <div>\n       <h1>My name is {name}.</h1>\n        <button onclick={}>click me</button>\n    </div>\n}\n")))),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"setState \u76f4\u63a5\u4f7f\u7528\u76ee\u524d state \u548c\u4f7f\u7528\u524d\u4e00\u500b state \u4f86\u66f4\u65b0\u72c0\u614b\u7684\u5dee\u5225")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u662f\u7d00\u9304\u6309\u9215\u9ede\u64ca\u6b21\u6578\u7684\u4f8b\u5b50"),(0,s.kt)("p",{parentName:"li"},"\u2705 \u51fd\u6578\u5f0f\u66f4\u65b0:"),(0,s.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u770b\u5230\u9ede\u64ca\uff0b 2 \u6309\u9215\u6703\u89f8\u767c Test Function , Test Function \u6703\u57f7\u884c increment function \u5169\u6b21\uff0cincrement function \u4f7f\u7528 setCount \u4e26\u50b3\u5165 preCount(\u524d\u4e00\u500b\u72c0\u614b) \u8a08\u7b97\u51fa\u65b0\u72c0\u614b\u3002\n\u6700\u5f8c count \u7684\u72c0\u614b\u70ba 2\u3002"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},"const Counter = () => {\n  const [count, setCount] = useState(0);\n  // \u5728 component \u9802\u7aef\u5ba3\u544a useState\n  const increment = () => setCount((preCount) => preCount + 1);\n  // function increment \u4f7f\u7528 setCount function\u4f86\u66f4\u65b0 count \u72c0\u614b\n  // function setCount \u6703\u628a count \u7684\u503c\u66f4\u65b0\u70ba count + 1\n  const Test = () => {\n    increment(); // setCount(preCount => preCount + 1) \u9019\u908apreCount = 0, state = 1\n    increment(); // setCount(preCount => preCount + 1) \u9019\u908apreCount = 1, state = 2\n  };\n  return (\n    <div className={styles.container}>\n      <p>Count: {count}</p>\n      <button onClick={Test}> +2 </button>\n    </div>\n  );\n};\n")),(0,s.kt)("p",{parentName:"li"},"\u274c \u76f4\u63a5\u50b3\u905e\u7576\u524d\u72c0\u614b\u4f86\u8a08\u7b97\u4e26\u66f4\u65b0\u72c0\u614b:"),(0,s.kt)("p",{parentName:"li"},"increment function \u4e2d\u7684 setCount \u76f4\u63a5\u4f7f\u7528\u73fe\u5728\u7684 state \u76ee\u524d\u7684\u503c\u4f86+1\n\u4f46\u5728\u9084\u6c92\u91cd\u65b0\u6e32\u67d3\u4e4b\u524d\u76f4\u63a5\u8abf\u7528 state \u7684\u503c\u90fd\u662f\u820a\u7684\u503c\uff0c\u6240\u4ee5\u5169\u6b21\u7684 count + 1 \u7684 count \u90fd\u662f 0\n\uff0c\u6700\u5f8c count \u7684\u72c0\u614b\u70ba 1\u3002"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"const Counter = () => {\n  const [count, setCount] = useState(0);\n  // \u5728 component \u9802\u7aef\u5ba3\u544a useState\n  const increment = () => setCount(count + 1);\n  const Test = () => {\n    increment();\n    increment();\n  };\n  return (\n    <div className={styles.container}>\n      <p>Count: {count}</p>\n      <button onClick={Test}> +2 </button>\n    </div>\n  );\n};\n")))),(0,s.kt)("h3",{id:"\u88dc\u5145\u6982\u5ff5-"},(0,s.kt)("span",{id:"section1-5"},"\u88dc\u5145\u6982\u5ff5 \ud83e\udd2a")),(0,s.kt)("h4",{id:"\u70ba\u4ec0\u9ebc\u8981\u7528-usestate-\u7ba1\u7406-component-\u72c0\u614b"},"\u70ba\u4ec0\u9ebc\u8981\u7528 useState \u7ba1\u7406 component \u72c0\u614b\uff1f"),(0,s.kt)("p",null,"\u662f\u56e0\u70ba\u7576 Component \u72c0\u614b\u6539\u8b8a\u6642\uff0cuseState \u53ef\u4ee5\u5e6b\u52a9 React \u8ffd\u8e64\u72c0\u614b\u7684\u8b8a\u5316\uff0c\u9032\u800c\u89f8\u767c\u91cd\u65b0\u6e32\u67d3\u3002\n\u8b93 Component \u53ef\u4ee5\u986f\u793a\u6700\u65b0\u7684\u72c0\u614b\u8cc7\u8a0a\u3002"),(0,s.kt)("p",null,"\u5728 React \u4e2d\uff0cComponent \u7684\u72c0\u614b (state) \u662f\u7528\u4f86\u4fdd\u5b58\u9700\u8981\u5728 Component \u4e2d\u5c55\u793a\u7684\u8cc7\u6599\u3002\n\u70ba\u4e86\u7ba1\u7406 Component \u7684\u72c0\u614b\uff0cReact \u63d0\u4f9b\u4e86 useState \u9019\u500b Hook\uff0c\u5b83\u53ef\u4ee5\u8b93\u6211\u5011\u5728 Component \u4e2d\u5ba3\u544a\u4e00\u500b\u72c0\u614b\u8b8a\u6578\uff0c\u4e26\u63d0\u4f9b\u4e00\u500b function \u4f86\u66f4\u65b0\u72c0\u614b\uff0c\u6bcf\u7576\u72c0\u614b\u8b8a\u6578\u767c\u751f\u6539\u8b8a\u6642\uff0cReact \u6703\u81ea\u52d5\u91cd\u65b0\u6e32\u67d3 Component\u3002"),(0,s.kt)("h4",{id:"\u4e00\u5b9a\u8981\u4f7f\u7528-usestate-\u63d0\u4f9b\u7684-setstate-function-\u66f4\u65b0-state-\u55ce\u70ba\u4ec0\u9ebc\u4e0d\u80fd\u76f4\u63a5\u66f4\u6539-state-\u7684\u503c"},"\u4e00\u5b9a\u8981\u4f7f\u7528 useState \u63d0\u4f9b\u7684 setState function \u66f4\u65b0 state \u55ce\uff1f\u70ba\u4ec0\u9ebc\u4e0d\u80fd\u76f4\u63a5\u66f4\u6539 state \u7684\u503c\uff1f"),(0,s.kt)("p",null,"\u70ba\u4ec0\u9ebc\u4e0d\u80fd\u76f4\u63a5\u66f4\u6539 state \u7684\u503c\u5462\uff1f\u9019\u662f\u56e0\u70ba\u76f4\u63a5\u66f4\u6539 state \u7684\u503c\uff0c\u4e26\u4e0d\u6703\u89f8\u767c React \u7684\u91cd\u65b0\u6e32\u67d3\u3002React \u662f\u57fa\u65bc Virtual DOM \u7684\u6a5f\u5236\uff0c\u7576 Component \u7684\u72c0\u614b\u767c\u751f\u6539\u8b8a\u6642\uff0cReact \u6703\u6bd4\u8f03\u524d\u5f8c\u5169\u6b21 Virtual DOM \u7684\u5dee\u7570\uff0c\u7136\u5f8c\u53ea\u6703\u5c0d\u5dee\u7570\u90e8\u5206\u9032\u884c\u91cd\u65b0\u6e32\u67d3\uff0c\u9032\u800c\u63d0\u9ad8\u61c9\u7528\u7684\u6027\u80fd\u3002"),(0,s.kt)("p",null,"\u6240\u4ee5\u6211\u5011\u5fc5\u9808\u4f7f\u7528 setState function \u4f86\u66f4\u65b0\u72c0\u614b\uff0c\u9019\u6a23\u624d\u80fd\u8b93 React \u6b63\u78ba\u5730\u63a5\u6536\u5230\u72c0\u614b\u7684\u8b8a\u5316\uff0c\u4e26\u9032\u884c\u91cd\u65b0\u6e32\u67d3\u3002"),(0,s.kt)("h4",{id:"\u70ba\u4ec0\u9ebc\u4e0d\u80fd\u4f7f\u7528\u666e\u901a\u8b8a\u6578-\u7ba1\u7406-component-\u72c0\u614b"},"\u70ba\u4ec0\u9ebc\u4e0d\u80fd\u4f7f\u7528\u666e\u901a\u8b8a\u6578 \u7ba1\u7406 component \u72c0\u614b\uff1f"),(0,s.kt)("p",null,"React \u662f\u57fa\u65bc Virtual DOM \u7684\u6a5f\u5236\uff0c\u7576 state \u6539\u8b8a\u6642\uff0cReact \u6703\u6bd4\u5c0d Virtual DOM \u548c\u771f\u6b63\u7684 DOM \u7684\u5dee\u7570\uff0c\u518d\u53ea\u66f4\u65b0\u9700\u8981\u66f4\u65b0\u7684\u90e8\u5206\uff0c\u5f9e\u800c\u63d0\u9ad8\u61c9\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u3002"),(0,s.kt)("p",null,"\u800c\u666e\u901a\u7684\u8b8a\u6578\u5728\u6539\u8b8a\u6642\uff0c\u4e26\u4e0d\u6703\u89f8\u767c React \u7684 Virtual DOM \u7684\u6bd4\u5c0d\u524d\u5f8c\u5169\u6b21 Virtual DOM \u5dee\u7570\u4f86\u89f8\u767c\u72c0\u614b\u66f4\u65b0\uff0c\u6240\u4ee5\u4e0d\u6703\u8b93 React \u91cd\u65b0\u6e32\u67d3\u3002"),(0,s.kt)("p",null,"\u76f8\u53cd\uff0c\u53ea\u6709\u7576\u4f7f\u7528 setState \u6216 useState \u7b49 React \u63d0\u4f9b\u7684\u65b9\u6cd5\u4f86\u66f4\u65b0 state \u6642\uff0cReact \u624d\u6703\u91cd\u65b0\u6e32\u67d3\u3002"),(0,s.kt)("h4",{id:"\u4ec0\u9ebc\u662f-virtual-dom"},"\u4ec0\u9ebc\u662f Virtual DOM?"),(0,s.kt)("p",null,"Virtual DOM \u662f React \u4e2d\u7528\u4f86\u63d0\u5347\u6e32\u67d3\u6548\u80fd\u7684\u6982\u5ff5\uff0c\u5b83\u662f\u4e00\u500b\u865b\u64ec\u7684 DOM tree \uff0c React \u6703\u5728\u6bcf\u6b21\u72c0\u614b\u66f4\u65b0\u6642\uff0c\u5148\u5c07\u865b\u64ec DOM \u8207\u4e4b\u524d\u7684\u865b\u64ec DOM \u505a\u6bd4\u8f03\uff0c\u627e\u51fa\u9700\u8981\u66f4\u65b0\u7684\u90e8\u5206\uff0c\u7136\u5f8c\u518d\u5c07\u9019\u4e9b\u90e8\u5206\u66f4\u65b0\u5230\u5be6\u969b\u7684 DOM \u4e0a\u3002\u9019\u6a23\u505a\u7684\u597d\u8655\u662f\uff0cReact \u53ef\u4ee5\u6700\u5c0f\u5316 DOM \u64cd\u4f5c\uff0c\u53ea\u66f4\u65b0\u5fc5\u8981\u7684\u90e8\u5206\uff0c\u63d0\u5347\u4e86\u61c9\u7528\u7684\u6548\u80fd\u3002"))}m.isMDXComponent=!0}}]);