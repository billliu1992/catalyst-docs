"use strict";(self.webpackChunkcodebase_doctor_docs=self.webpackChunkcodebase_doctor_docs||[]).push([[768],{5426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(5893),a=n(1151);const i={sidebar_position:1},s="Quick Start on Web",o={id:"quick-start/quick-install-web",title:"Quick Start on Web",description:"For a working example, please checkout our examples repo.",source:"@site/docs/quick-start/quick-install-web.md",sourceDirName:"quick-start",slug:"/quick-start/quick-install-web",permalink:"/quick-start/quick-install-web",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/quick-start/"},next:{title:"Quick Start on Node.js",permalink:"/quick-start/quick-install-node"}},c={},l=[{value:"Initialize the library",id:"initialize-the-library",level:2},{value:"Record Navigation Events",id:"record-navigation-events",level:2},{value:"Propagate Session Info",id:"propagate-session-info",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"quick-start-on-web",children:"Quick Start on Web"}),"\n",(0,r.jsxs)(t.p,{children:["For a working example, please checkout our ",(0,r.jsx)(t.a,{href:"https://github.com/catalyst-monitor/catalyst-examples",children:"examples repo"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"initialize-the-library",children:"Initialize the library"}),"\n",(0,r.jsx)(t.p,{children:"To get started, add the core Javascript library to your client:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"npm install @catalyst-monitor/core\n\n# Alternatively, if you use Yarn:\nyarn add @catalyst-monitor/core\n"})}),"\n",(0,r.jsx)(t.p,{children:"Initialize the library as early as possible:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="index.ts"',children:"import { installWebBase } from '@catalyst-monitor/core'\n\ninstallWebBase({\n  version: '<YOUR VERSION CODE HERE>', // Any to differentiate different deploys, e.g. Git commit SHA\n  systemName: 'catalyst-js-react-example',\n  userAgent: navigator.userAgent,\n  publicKey: '<YOUR PUBLIC KEY HERE>', // The public key from the \"Settings\" page in the Catalyst dashboard.\n})\n"})}),"\n",(0,r.jsx)(t.h2,{id:"record-navigation-events",children:"Record Navigation Events"}),"\n",(0,r.jsx)(t.p,{children:"You can record navigation events by installing a provided library for your navigation framework, or manually instrumenting yourself."}),"\n",(0,r.jsxs)(t.p,{children:["Currently, we have a library for ",(0,r.jsx)(t.a,{href:"https://reactrouter.com",children:"React Router v6"}),". If you'd like to use Catalyst with a different library, you can either ",(0,r.jsx)(t.a,{href:"/guides/instrument-web-navigation",children:"manually instrument yourself"}),", or ",(0,r.jsx)(t.a,{href:"mailto:bill@privium.xyz",children:"reach out to us"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"First, add the package."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"npm install @catalyst-monitor/react-router\n"})}),"\n",(0,r.jsx)(t.p,{children:"Afterwards, wrap your code with the library."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import {\n  Outlet,\n  useLocation,\n  createBrowserRouter,\n} from 'react-router-dom'\nimport { wrapRoutes } from '@catalyst-monitor/react-router'\n\nconst router = createBrowserRouter(\n  // Wrap your React Router routes with Catalyst.\n  wrapRoutes(\n    [\n      // Your routes, as-is, here.\n    ],\n    // Pass-through React context-dependent code.\n    // This is required, because React context is module-scoped.\n    {\n      Outlet,\n      useLocation,\n    }\n  )\n)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"propagate-session-info",children:"Propagate Session Info"}),"\n",(0,r.jsxs)(t.p,{children:["Replace ",(0,r.jsx)(t.code,{children:"fetch(...)"})," calls to servers with Catalyst installed with the provided ",(0,r.jsx)(t.code,{children:"catalystWebFetch"}),". This will ensure session info is correctly propagated."]}),"\n",(0,r.jsxs)(t.p,{children:["Note that ",(0,r.jsx)(t.code,{children:"catalystWebFetch"})," has the same interface as ",(0,r.jsx)(t.code,{children:"fetch"}),", so you can simply drop the new function in."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="api.ts"',children:"\nimport { catalystWebFetch as cFetch } from '@catalyst-monitor/core'\n\nawait cFetch(\"/api/widget/123\", {\n  method: method,\n})\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(7294);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);