"use strict";(self.webpackChunkcodebase_doctor_docs=self.webpackChunkcodebase_doctor_docs||[]).push([[677],{8287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(5893),a=n(1151);const r={sidebar_position:2},i="SvelteKit",o={id:"install/javascript/sveltekit",title:"SvelteKit",description:"You can install the Catalyst client library for SvelteKit to immediately get the full feature set of Catalyst, including:",source:"@site/docs/install/javascript/sveltekit.md",sourceDirName:"install/javascript",slug:"/install/javascript/sveltekit",permalink:"/docs/install/javascript/sveltekit",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Next.js (App Router)",permalink:"/docs/install/javascript/nextjs"},next:{title:"React with React Router",permalink:"/docs/install/javascript/react-router"}},l={},d=[{value:"1. Add the dependency",id:"1-add-the-dependency",level:2},{value:"2. Create or edit your hook files",id:"2-create-or-edit-your-hook-files",level:2},{value:"3. Add the Catalyst component",id:"3-add-the-catalyst-component",level:2},{value:"Finished! Test your implementation.",id:"finished-test-your-implementation",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"sveltekit",children:"SvelteKit"}),"\n",(0,s.jsxs)(t.p,{children:["You can install the Catalyst client library for ",(0,s.jsx)(t.a,{href:"https://kit.svelte.dev/",children:"SvelteKit"})," to immediately get the full feature set of Catalyst, including:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Frontend navigation, error reporting, and click tracking"}),"\n",(0,s.jsx)(t.li,{children:"Server logs, request, and error reporting"}),"\n",(0,s.jsx)(t.li,{children:"Session tracking across the stack"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For other frameworks and languages, checkout our ",(0,s.jsx)(t.a,{href:"/docs/category/install-catalyst",children:"other installation guides"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Before you start, you'll need to sign up for Catalyst and have your keys ready, as detailed ",(0,s.jsx)(t.a,{href:"/docs/signup",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"1-add-the-dependency",children:"1. Add the dependency"}),"\n",(0,s.jsx)(t.p,{children:"To get started, add the Catalyst dependencies:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"npm install @catalyst-monitor/sveltekit\n\n# Alternatively, if you use Yarn:\nyarn add @catalyst-monitor/sveltekit\n"})}),"\n",(0,s.jsx)(t.h2,{id:"2-create-or-edit-your-hook-files",children:"2. Create or edit your hook files"}),"\n",(0,s.jsxs)(t.p,{children:["Catalyst uses ",(0,s.jsx)(t.a,{href:"https://kit.svelte.dev/docs/hooks",children:"hooks"})," to get info and report on events. You can either create your hook files, or edit your hook files and wrap your existing handlers with the provided Catalyst functions."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:'title="src/hooks.client.js"',children:"import {\n  catalystClientErrorHandler,\n  installWebBase,\n} from '@catalyst-monitor/sveltekit/client'\n\ninstallWebBase({\n  systemName: `${PUBLIC_CATALYST_SYSTEM_NAME}-fe`,\n  version: PUBLIC_CATALYST_VERSION,\n  publicKey: PUBLIC_CATALYST_PUBLIC_KEY,\n  userAgent: window.navigator.userAgent,\n  disabled: false, // You can disable for dev environments if you wish.\n})\n\nexport const handleError = catalystClientErrorHandler(() => {\n  // Your existing error handling logic, if any.\n})\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:'title="src/hooks.server.js"',children:"import {\n  installNodeBase,\n  catalystHandler,\n  wrapCatalystFetchHandler,\n  wrapCatalystServerErrorHandler,\n} from '@catalyst-monitor/sveltekit/server'\n\ninstallNodeBase({\n  privateKey: CATALYST_PRIVATE_KEY,\n  systemName: PUBLIC_CATALYST_SYSTEM_NAME,\n  version: PUBLIC_CATALYST_VERSION,\n  baseUrl: 'http://localhost:7070',\n})\n\nexport const handleError = wrapCatalystServerErrorHandler(({ error }) => {\n  // Your existing error handling logic, if any.\n})\n\nexport const handleFetch = wrapCatalystFetchHandler([\n  // All the base URLs to propagate session ID info to.\n  // If a server has Catalyst installed, add the domain here and it will automatically receive the session info!\n  //\n  // At the very least, you should have the domain this Sveltekit server is hosted at, e.g.\n  // 'https://app.catalystmonitor.com',\n])\n\nexport const handle = catalystHandler\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you have your own ",(0,s.jsx)(t.code,{children:"handle"})," function, you can use the Sveltekit-provided ",(0,s.jsx)(t.a,{href:"https://kit.svelte.dev/docs/modules#sveltejs-kit-hooks",children:(0,s.jsx)(t.code,{children:"sequence"})})," function to elegantly add them together."]}),"\n",(0,s.jsxs)(t.p,{children:["We recommend putting the ",(0,s.jsx)(t.code,{children:"catalystHandler"})," first, so any changes you make in your own handlers will be reflected in Catalyst."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import { sequence } from '@sveltejs/kit/hooks';\nexport const handle = sequence(\n  catalystHandler, // as imported in the above example,\n  yourOwnHandler, // as defined by you.\n)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"3-add-the-catalyst-component",children:"3. Add the Catalyst component"}),"\n",(0,s.jsxs)(t.p,{children:["As soon as possible, add the ",(0,s.jsx)(t.code,{children:"Catalyst"})," component. This component will ensure navigation client-side is captured. We recommend adding this in the root ",(0,s.jsx)(t.code,{children:"+layout.svelte"}),", if possible."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-svelte",metastring:'title="src/+layout.svelte"',children:"<script>\n  import Catalyst from '@catalyst-monitor/sveltekit/Catalyst.svelte'\n<\/script>\n\n<Catalyst />\n<slot />\n"})}),"\n",(0,s.jsx)(t.h2,{id:"finished-test-your-implementation",children:"Finished! Test your implementation."}),"\n",(0,s.jsx)(t.p,{children:"You've finished setting up Catalyst! You can test your implementation by creating a component that always errors out:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-svelte",metastring:'title="+page.svelte"',children:"<script>\n  throw new Error('Error!')\n<\/script>\n\n<div>You should get an error!</div>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you have any issues during set up, please reach out either ",(0,s.jsx)(t.a,{href:"mailto:bill@privium.xyz",children:"through e-mail"})," or ",(0,s.jsx)(t.a,{href:"https://discord.gg/YQZy4SXzmX",children:"via Discord"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(7294);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);