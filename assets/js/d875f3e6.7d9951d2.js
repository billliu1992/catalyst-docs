"use strict";(self.webpackChunkcodebase_doctor_docs=self.webpackChunkcodebase_doctor_docs||[]).push([[887],{3122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(5893),r=n(1151);const s={sidebar_position:3},i="React with React Router",o={id:"install/javascript/react-router",title:"React with React Router",description:"These are the installation instructions for React with React Router v6. Installation for any web frameworks can be found here.",source:"@site/docs/install/javascript/react-router.md",sourceDirName:"install/javascript",slug:"/install/javascript/react-router",permalink:"/docs/install/javascript/react-router",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"SvelteKit",permalink:"/docs/install/javascript/sveltekit"},next:{title:"Express.js",permalink:"/docs/install/javascript/express"}},c={},l=[{value:"Add the dependencies",id:"add-the-dependencies",level:2},{value:"Initialize the library",id:"initialize-the-library",level:2},{value:"Record Navigation Events",id:"record-navigation-events",level:2},{value:"Propagate Session Info",id:"propagate-session-info",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"react-with-react-router",children:"React with React Router"}),"\n",(0,a.jsxs)(t.p,{children:["These are the installation instructions for ",(0,a.jsx)(t.a,{href:"https://react.dev",children:"React"})," with ",(0,a.jsx)(t.a,{href:"https://reactrouter.com",children:"React Router v6"}),". Installation for any web frameworks can be found ",(0,a.jsx)(t.a,{href:"other-web",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["For a working example, please checkout our ",(0,a.jsx)(t.a,{href:"https://github.com/catalyst-monitor/catalyst-examples",children:"examples repo"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"add-the-dependencies",children:"Add the dependencies"}),"\n",(0,a.jsx)(t.p,{children:"To get started, add the Catalyst dependencies:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"npm install @catalyst-monitor/core @catalyst-monitor/react-router\n\n# Alternatively, if you use Yarn:\nyarn add @catalyst-monitor/core @catalyst-monitor/react-router\n"})}),"\n",(0,a.jsx)(t.h2,{id:"initialize-the-library",children:"Initialize the library"}),"\n",(0,a.jsx)(t.p,{children:"Initialize the library as early as possible:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:'title="index.ts"',children:"import { installWebBase } from '@catalyst-monitor/core/web'\n\ninstallWebBase({\n  version: '<YOUR VERSION CODE HERE>', // Any to differentiate different deploys, e.g. Git commit SHA\n  systemName: 'catalyst-js-react-example',  // The name given to this service. All endpoints will be grouped by this name.\n  userAgent: navigator.userAgent,\n  publicKey: '<YOUR PUBLIC KEY HERE>', // The public key from the \"Settings\" page in the Catalyst dashboard.\n})\n"})}),"\n",(0,a.jsx)(t.h2,{id:"record-navigation-events",children:"Record Navigation Events"}),"\n",(0,a.jsx)(t.p,{children:"To record navigation events, simply wrap your existing routes with Catalyst."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"import {\n  Outlet,\n  useLocation,\n  createBrowserRouter,\n} from 'react-router-dom'\nimport { wrapRoutes } from '@catalyst-monitor/react-router'\n\nconst router = createBrowserRouter(\n  // Wrap your React Router routes with Catalyst.\n  wrapRoutes(\n    [\n      // Your routes, as-is, here.\n    ],\n    // Pass-through React context-dependent code.\n    // This is required, because React context is module-scoped.\n    {\n      Outlet,\n      useLocation,\n    }\n  )\n)\n"})}),"\n",(0,a.jsx)(t.h2,{id:"propagate-session-info",children:"Propagate Session Info"}),"\n",(0,a.jsxs)(t.p,{children:["Replace ",(0,a.jsx)(t.code,{children:"fetch(...)"})," calls to servers with Catalyst installed with the provided ",(0,a.jsx)(t.code,{children:"catalystWebFetch"}),". This will ensure session info is correctly propagated."]}),"\n",(0,a.jsxs)(t.p,{children:["Note that ",(0,a.jsx)(t.code,{children:"catalystWebFetch"})," has the same interface as ",(0,a.jsx)(t.code,{children:"fetch"}),", so you can simply drop the new function in."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:'title="api.ts"',children:"\nimport { catalystWebFetch as cFetch } from '@catalyst-monitor/core/web'\n\nawait cFetch(\"/api/widget/123\", {\n  method: method,\n})\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var a=n(7294);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);