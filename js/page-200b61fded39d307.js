!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="52e3c88d-4e1e-48bd-8916-0d771eae6a9f",e._sentryDebugIdIdentifier="sentry-dbid-52e3c88d-4e1e-48bd-8916-0d771eae6a9f")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9745],{74781:function(e,t,n){"use strict";var r,o=n(21529);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}t.Z=e=>o.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 201 200"},e),r||(r=o.createElement("path",{d:"M77.742 98.51c21.592 0 39.095-17.47 39.095-39.017 0-21.549-17.503-39.017-39.095-39.017S38.646 37.945 38.646 59.493 56.15 98.509 77.742 98.509M148 73.63c10.848 0 19.642-8.777 19.642-19.603S158.848 34.424 148 34.424s-19.642 8.777-19.642 19.603S137.152 73.629 148 73.629M36.757 131.494c10.848 0 19.642-8.776 19.642-19.602s-8.794-19.603-19.642-19.603-19.642 8.777-19.642 19.603 8.794 19.602 19.642 19.602M143.09 165.611c22.53 0 40.795-18.228 40.795-40.714S165.62 84.184 143.09 84.184s-40.796 18.228-40.796 40.713c0 22.486 18.265 40.714 40.796 40.714M73.398 179.747c13.56 0 24.553-10.971 24.553-24.503s-10.993-24.503-24.553-24.503-24.553 10.97-24.553 24.503 10.993 24.503 24.553 24.503"})))},77819:function(e,t,n){Promise.resolve().then(n.bind(n,90661)),Promise.resolve().then(n.bind(n,71152)),Promise.resolve().then(n.bind(n,49057))},90661:function(e,t,n){"use strict";n.d(t,{BeaconsGenericErrorPage:function(){return f}});var r=n(43536),o=n(84027),i=n(71006),u=n(84551),s=n(74781),l=n(59384),c=n(69846);function a(e){let{children:t,variant:n="primary",as:o,className:i="",...s}=e;return(0,r.jsx)(o??"button",{...s,className:(0,u.Z)(i,"text-md-bold cursor-pointer rounded-full border-none px-6 py-4 font-poppins no-underline",{"bg-gray-900 text-white hover:bg-gray-800":"primary"===n,"bg-gray-200 text-gray-900 hover:bg-gray-300":"secondary"===n}),children:t})}function f(e){let{error:t,children:n,title:u,reportToSentry:f=!0}=e;return(0,o.useEffect)(()=>{t&&f&&i.Tb(t)},[t,f]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{fonts:[{font:"Poppins",weights:[400,500,600,700]}]}),(0,r.jsx)("div",{className:"box-border flex h-screen flex-col items-center justify-center gap-4 p-6 font-poppins desktop:p-12",children:(0,r.jsxs)("div",{className:"flex max-w-md flex-col items-center justify-center gap-2 text-center",children:[(0,r.jsx)("a",{href:"https://beacons.ai",children:(0,r.jsx)(s.Z,{fill:"#1c1c1c",height:60})}),(0,r.jsx)("div",{className:"title-lg desktop:title-xl pt-4",children:u||"Oops! Something went wrong."}),(0,r.jsx)("div",{className:"text-md-normal desktop:text-lg-normal",children:n||"Reload the page to try again. If that doesn't work, our support team would be happy to help!"}),(0,r.jsxs)("div",{className:"flex flex-wrap items-center justify-center gap-2 pt-2",children:[(0,r.jsx)(a,{onClick:()=>(0,l.sl)(),children:"Reload Page"}),(0,r.jsx)(a,{as:"a",href:"mailto:support@beacons.ai?subject=Help!%20I%20ran%20into%20an%20error%20in%20the%20Beacons%20app.",variant:"secondary",children:"Contact Support"})]})]})})]})}},49057:function(e,t,n){"use strict";n.d(t,{ProfileClientRoot:function(){return i}});var r=n(43536);n(84027);let o=(0,n(80812).default)(()=>Promise.all([n.e(4357),n.e(6829),n.e(544),n.e(2978),n.e(9400),n.e(6827),n.e(785),n.e(5684)]).then(n.bind(n,39885)),{loadableGenerated:{webpack:()=>[39885]},ssr:!1});function i(){return(0,r.jsx)(o,{})}},85757:function(e,t,n){"use strict";n.d(t,{BX:function(){return o},HD:function(){return u},J0:function(){return p},Kn:function(){return i},U4:function(){return c},Zt:function(){return d},f_:function(){return b},hj:function(){return s},kJ:function(){return l},le:function(){return r},nI:function(){return a},vE:function(){return g},zt:function(){return f}});let r=e=>null==e,o=e=>null!=e,i=e=>o(e)&&"object"==typeof e,u=e=>o(e)&&"string"==typeof e,s=e=>o(e)&&"number"==typeof e,l=e=>o(e)&&Array.isArray(e),c=(e,t)=>!(r(e)||r(t))&&!!i(e)&&t in e,a=(e,t)=>!(r(e)||r(t))&&!!i(e)&&t in e,f=e=>r(e)?[]:Object.values(e),d=e=>r(e)?[]:Object.keys(e),p=e=>r(e)?[]:Object.entries(e);function g(e){return`Was not never ${e}`}function b(e,t){return e.flatMap((n,r)=>r===e.length-1?[n]:[n,t])}},65170:function(e,t,n){"use strict";n.d(t,{$3:function(){return a},BF:function(){return l},C8:function(){return s},Cq:function(){return d},FN:function(){return p},GN:function(){return b},LI:function(){return g},LS:function(){return r},N0:function(){return f},Qi:function(){return m},RJ:function(){return i},Zt:function(){return o},cL:function(){return h},et:function(){return c},i8:function(){return y},ju:function(){return u}});let r="https://cdn.beacons.ai",o=`${r}/images`,i=`${r}/videos`,u=`${o}/logos`,s=`${r}/scripts`,l=`${o}/beacons_assets`,c=`${r}/profile_pictures`,a=`${o}/ui_icons`,f=`${o}/navigation_icons`,d=`${o}/social_icons`,p=`${o}/store_icons`,g=`${o}/onboarding`,b=`${o}/store_assets`,h=`${r}/user_content`,y=`${o}/website_builder`,m=`${o}/app_icons`},91307:function(e,t,n){"use strict";n.d(t,{K:function(){return r}});let r=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"swap",r=e.reduce((e,t)=>{let n=t.font.replace(/ +/g,"+"),r=(t.weights||[]).join(",");return[...e,n+(r&&`:${r}`)]},[]).join("|"),o=`https://fonts.googleapis.com/css?family=${r}`;return t&&Array.isArray(t)&&t.length>0&&(o+=`&subset=${t.join(",")}`),n&&(o+=`&display=${n}`),o}},69846:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(84027),o=n(91307);function i(e){let{fonts:t,subsets:n,display:i="swap"}=e,u=(0,r.useMemo)(()=>(0,o.K)(t,n,i),[t,n,i]);return(0,r.useEffect)(()=>{let e=document.createElement("link");return e.href=u,e.rel="stylesheet",document.head.appendChild(e),()=>{document.head.removeChild(e)}},[u]),null}},38659:function(e,t,n){"use strict";function r(){window.location.reload()}n.d(t,{Z:function(){return r}})},80812:function(e,t,n){"use strict";n.d(t,{default:function(){return o.a}});var r=n(81978),o=n.n(r)},81978:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let r=n(27938);n(43536),n(84027);let o=r._(n(14025));function i(e,t){var n;let r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e);let i={...r,...t};return(0,o.default)({...i,modules:null==(n=i.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},95526:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let r=n(16654);function o(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},14025:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let r=n(43536),o=n(84027),i=n(95526),u=n(31509);function s(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},c=function(e){let t={...l,...e},n=(0,o.lazy)(()=>t.loader().then(s)),c=t.loading;function a(e){let s=c?(0,r.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,l=t.ssr?(0,r.jsxs)(r.Fragment,{children:["undefined"==typeof window?(0,r.jsx)(u.PreloadCss,{moduleIds:t.modules}):null,(0,r.jsx)(n,{...e})]}):(0,r.jsx)(i.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(n,{...e})});return(0,r.jsx)(o.Suspense,{fallback:s,children:l})}return a.displayName="LoadableComponent",a}},31509:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return i}});let r=n(43536),o=n(19021);function i(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,o.getExpectedRequestStore)("next/dynamic css"),i=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));i.push(...t)}}return 0===i.length?null:(0,r.jsx)(r.Fragment,{children:i.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},71152:function(e,t,n){"use strict";n.r(t),t.default={src:"https://beacons.ai/_next/static/media/bw_logo_full.a7c3db4a.png",height:1361,width:2613,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEUcHBwVFRVBQUE8PDwWFhZ+fn5kZGSYmJgo6A05AAAAAnRSTlP+/T+gj6oAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAgSURBVHicFcGJEQAgDAMgTHz239grYA+827Y4J0lgDR8F5ABFj9zCAgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}}},function(e){e.O(0,[6844,9384,2141,4291,1744],function(){return e(e.s=77819)}),_N_E=e.O()}]);