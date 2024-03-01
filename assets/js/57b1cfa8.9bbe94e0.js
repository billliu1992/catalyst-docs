"use strict";(self.webpackChunkcodebase_doctor_docs=self.webpackChunkcodebase_doctor_docs||[]).push([[1752],{7047:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=t(5893),a=t(1151);const o={},l="Javalin",r={id:"install/jvm/javalin",title:"Javalin",description:"The code snippets are in Kotlin, but the equivalent code should work in Java and other JVM languages. For help, feel free to reach out through e-mail or via Discord.",source:"@site/docs/install/jvm/javalin.md",sourceDirName:"install/jvm",slug:"/install/jvm/javalin",permalink:"/docs/install/jvm/javalin",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kotlin/Java",permalink:"/docs/category/kotlinjava"},next:{title:"Log4j2",permalink:"/docs/install/jvm/log4j2"}},s={},d=[{value:"1. Add the dependencies",id:"1-add-the-dependencies",level:2},{value:"2. Initialize Catalyst, and install the Javalin plugin.",id:"2-initialize-catalyst-and-install-the-javalin-plugin",level:2},{value:"(Optional) 3. Add logging framework integration",id:"optional-3-add-logging-framework-integration",level:2},{value:"Finished!",id:"finished",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"javalin",children:"Javalin"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The code snippets are in Kotlin, but the equivalent code should work in Java and other JVM languages. For help, feel free to reach out ",(0,i.jsx)(n.a,{href:"mailto:bill@privium.xyz",children:"through e-mail"})," or ",(0,i.jsx)(n.a,{href:"https://discord.gg/YQZy4SXzmX",children:"via Discord"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["These are the installation instructions for the current version of ",(0,i.jsx)(n.a,{href:"https://javalin.io/",children:"Javalin"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Before you start, you'll need to sign up for Catalyst and have your keys ready, as detailed ",(0,i.jsx)(n.a,{href:"/docs/signup",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"1-add-the-dependencies",children:"1. Add the dependencies"}),"\n",(0,i.jsx)(n.p,{children:"Add the dependencies required for Catalyst."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="Maven"',children:"<dependency>\n    <groupId>com.catalystmonitor.client</groupId>\n    <artifactId>catalyst-core</artifactId>\n    <version>0.0.1</version>\n</dependency>\n<dependency>\n    <groupId>com.catalystmonitor.client</groupId>\n    <artifactId>catalyst-javalin</artifactId>\n    <version>0.0.1</version>\n</dependency>\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="Gradle (Kotlin)"',children:'implementation("com.catalystmonitor.client:catalyst-core:0.0.1")\nimplementation("com.catalystmonitor.client:catalyst-javalin:0.0.1")\n'})}),"\n",(0,i.jsx)(n.h2,{id:"2-initialize-catalyst-and-install-the-javalin-plugin",children:"2. Initialize Catalyst, and install the Javalin plugin."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'fun main(args: Array<String>) {\n    CatalystServer\n        .createInstance(\n            CatalystServer.Options(\n                privateKey = "KEY-HERE", // Private key from dashboard\n                version = "abc", // Any string depicting version, like Git commit hash\n                systemName = "foo-backend", // Any name, separating this system from others.\n                disabled = false, // Optionally, disable for local development.\n            )\n        )\n        .start()\n    Javalin.create { config ->\n        config.registerPlugin(CatalystPlugin {\n            it.endpoints.add("/api/*")\n        })\n        // The rest of configuration here...\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"optional-3-add-logging-framework-integration",children:"(Optional) 3. Add logging framework integration"}),"\n",(0,i.jsxs)(n.p,{children:["To report logs to Catalyst, you can use one of our client libraries for logging like ",(0,i.jsx)(n.a,{href:"./log4j2",children:"Log4j2"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"finished",children:"Finished!"}),"\n",(0,i.jsxs)(n.p,{children:["You've now finished the Catalyst setup! If you have any issues during set up, please reach out either ",(0,i.jsx)(n.a,{href:"mailto:bill@privium.xyz",children:"through e-mail"})," or ",(0,i.jsx)(n.a,{href:"https://discord.gg/YQZy4SXzmX",children:"via Discord"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var i=t(7294);const a={},o=i.createContext(a);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);