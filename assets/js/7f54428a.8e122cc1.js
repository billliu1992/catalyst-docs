"use strict";(self.webpackChunkcodebase_doctor_docs=self.webpackChunkcodebase_doctor_docs||[]).push([[853],{8918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(5893),r=n(1151);const s={sidebar_position:5},i="Other Web Frameworks",o={id:"install/other-web",title:"Other Web Frameworks",description:"Before manually instrumenting, please check if we provide a package for your choice of framework! If we don't provide a package, we'd",source:"@site/docs/install/other-web.md",sourceDirName:"install",slug:"/install/other-web",permalink:"/docs/install/other-web",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Express.js",permalink:"/docs/install/express"},next:{title:"Other Node.JS Server Framework",permalink:"/docs/install/other-node"}},l={},c=[{value:"Add the dependency",id:"add-the-dependency",level:2},{value:"Initialize the library",id:"initialize-the-library",level:2},{value:"Manually Instrumenting",id:"manually-instrumenting",level:2},{value:"Propagate Session Info",id:"propagate-session-info",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"other-web-frameworks",children:"Other Web Frameworks"}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["Before manually instrumenting, please check if we provide a package for your choice of framework! If we don't provide a package, we'd\nstill like to work with you. Please reach out either ",(0,a.jsx)(t.a,{href:"mailto:bill@privium.xyz",children:"through e-mail"})," or ",(0,a.jsx)(t.a,{href:"https://discord.gg/YQZy4SXzmX",children:"via Discord"}),"."]})}),"\n",(0,a.jsxs)(t.p,{children:["For a working example, please checkout our ",(0,a.jsx)(t.a,{href:"https://github.com/catalyst-monitor/catalyst-examples",children:"examples repo"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"add-the-dependency",children:"Add the dependency"}),"\n",(0,a.jsx)(t.p,{children:"To get started, add the core Javascript library to your client:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"npm install @catalyst-monitor/core\n\n# Alternatively, if you use Yarn:\nyarn add @catalyst-monitor/core\n"})}),"\n",(0,a.jsx)(t.h2,{id:"initialize-the-library",children:"Initialize the library"}),"\n",(0,a.jsx)(t.p,{children:"Initialize the library as early as possible:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:'title="index.ts"',children:"import { installWebBase } from '@catalyst-monitor/core'\n\ninstallWebBase({\n  version: '<YOUR VERSION CODE HERE>', // Any to differentiate different deploys, e.g. Git commit SHA\n  systemName: 'catalyst-js-react-example',  // The name given to this service. All endpoints will be grouped by this name.\n  userAgent: navigator.userAgent,\n  publicKey: '<YOUR PUBLIC KEY HERE>', // The public key from the \"Settings\" page in the Catalyst dashboard.\n})\n"})}),"\n",(0,a.jsx)(t.h2,{id:"manually-instrumenting",children:"Manually Instrumenting"}),"\n",(0,a.jsx)(t.p,{children:"Being able to breakdown your errors and logs by page can greatly speed up your triage and debugging processes."}),"\n",(0,a.jsxs)(t.p,{children:["An example of how we instrument Catalyst for React Router can be found ",(0,a.jsx)(t.a,{href:"https://github.com/catalyst-monitor/catalyst-js/blob/main/packages/react-router/src/Catalyst.tsx",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["In order for Catalyst to associate logs and errors to the page the user is currently on, you'll need to let Catalyst know when the user changes page by calling ",(0,a.jsx)(t.code,{children:"getCatalystWeb().recordPageView(...)"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"import { getCatalystWeb } from '@catalyst-monitor/core'\n\ngetCatalystWeb().recordPageView('/', {})\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"recordPageView"})," takes a path pattern, and the path params associated with the pattern. Catalyst is not opinionated on the format of the path pattern, so we suggest you pass in the pattern as returned from your navigation library."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"// This works\ngetCatalystWeb().recordPageView('/widgets/:widgetId', { widgetId: string })\n\n// Or this\ngetCatalystWeb().recordPageView('/widgets/{widgetId}', { widgetId: string })\n"})}),"\n",(0,a.jsx)(t.p,{children:"For best results, always pass in the path pattern and param separately. This will give you an aggregate view of logs and errors per path pattern, while still letting you drill down on individual visits."}),"\n",(0,a.jsx)(t.h2,{id:"propagate-session-info",children:"Propagate Session Info"}),"\n",(0,a.jsxs)(t.p,{children:["Replace ",(0,a.jsx)(t.code,{children:"fetch(...)"})," calls to servers with Catalyst installed with the provided ",(0,a.jsx)(t.code,{children:"catalystWebFetch"}),". This will ensure session info is correctly propagated."]}),"\n",(0,a.jsxs)(t.p,{children:["Note that ",(0,a.jsx)(t.code,{children:"catalystWebFetch"})," has the same interface as ",(0,a.jsx)(t.code,{children:"fetch"}),", so you can simply drop the new function in."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:'title="api.ts"',children:"\nimport { catalystWebFetch as cFetch } from '@catalyst-monitor/core'\n\nawait cFetch(\"/api/widget/123\", {\n  method: method,\n})\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var a=n(7294);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);