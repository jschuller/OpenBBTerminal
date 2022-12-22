"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26053],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),p=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(k,o(o({ref:e},c),{},{components:r})):n.createElement(k,o({ref:e},c))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29705:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905)),l=r(65099),o=r(85162);const i={title:"contracts",description:"OpenBB SDK Function"},u="contracts",p={unversionedId:"reference/crypto/ov/contracts",id:"reference/crypto/ov/contracts",title:"contracts",description:"OpenBB SDK Function",source:"@site/content/sdk/reference/crypto/ov/contracts.md",sourceDirName:"reference/crypto/ov",slug:"/reference/crypto/ov/contracts",permalink:"/sdk/reference/crypto/ov/contracts",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/crypto/ov/contracts.md",tags:[],version:"current",frontMatter:{title:"contracts",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"coin_list",permalink:"/sdk/reference/crypto/ov/coin_list"},next:{title:"cr",permalink:"/sdk/reference/crypto/ov/cr"}},c={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],d={toc:s};function m(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contracts"},"contracts"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Gets all contract addresses for given platform ","[Source: CoinPaprika]"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_model.py#L400"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.crypto.ov.contracts(platform_id: str = "eth-ethereum", sortby: str = "active", ascend: bool = True)\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"platform_id"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Blockchain platform like eth-ethereum"),(0,a.kt)("td",{parentName:"tr",align:null},"eth-ethereum"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sortby"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Key by which to sort data"),(0,a.kt)("td",{parentName:"tr",align:null},"active"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ascend"),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag to sort data ascend"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"id, type, active")))),(0,a.kt)("hr",null)),(0,a.kt)(o.Z,{value:"view",label:"Chart",mdxType:"TabItem"},(0,a.kt)("p",null,"Gets all contract addresses for given platform. ","[Source: CoinPaprika]"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_view.py#L349"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.crypto.ov.contracts_chart(symbol: str, sortby: str = "active", ascend: bool = True, limit: int = 15, export: str = "")\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"platform"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Blockchain platform like eth-ethereum"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of records to display"),(0,a.kt)("td",{parentName:"tr",align:null},"15"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sortby"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Key by which to sort data"),(0,a.kt)("td",{parentName:"tr",align:null},"active"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ascend"),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag to sort data ascending"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"export"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Export dataframe data to csv,json,xlsx file"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"This function does not return anything"),(0,a.kt)("hr",null))))}m.isMDXComponent=!0},85162:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(67294),a=r(86010);const l="tabItem_Ymn6";function o(t){let{children:e,hidden:r,className:o}=t;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},e)}},65099:(t,e,r)=>{r.d(e,{Z:()=>b});var n=r(87462),a=r(67294),l=r(10412),o=r(86010),i=r(72389),u=r(67392),p=r(7094),c=r(12466);const s="tabItem_hGfb";var d=r(16550);function m(){const t=function(){const t=l.Z.canUseDOM?navigator.userAgent:"";return t.indexOf("Windows")>-1?"Windows":t.indexOf("Mac")>-1?"Mac":t.indexOf("X11")>-1?"UNIX":t.indexOf("Linux")>-1?"Linux":"Other"}();return"Windows"===t?"windows":"Mac"===t?"mac":"Linux"===t||"UNIX"===t?"python":"windows"}function k(t){var e;const{lazy:r,block:l,defaultValue:i,values:k,groupId:b,className:f}=t,g=a.Children.map(t.children,(t=>{if((0,a.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=k??g.map((t=>{let{props:{value:e,label:r,attributes:n}}=t;return{value:e,label:r,attributes:n}})),y=(0,u.l)(h,((t,e)=>t.value===e.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===i?i:i??(null==(e=g.find((t=>t.props.default)))?void 0:e.props.value)??g[0].props.value;if(null!==v&&!h.some((t=>t.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,p.U)(),{pathname:O,search:T}=(0,d.TH)(),x=function(t,e){const r=t.substring(1).split("&");for(let n=0;n<r.length;n++){let t=r[n].split("=");if(decodeURIComponent(t[0])==e)return decodeURIComponent(t[1])}return null}(T,"tab"),E=m(),[B,D]=(0,a.useState)(O.startsWith("/terminal/quickstart/installation")?x&&["mac","windows","python","docker"].includes(x)?x:E:v),C=[],{blockElementScrollPositionUntilNextRender:P}=(0,c.o5)();if(null!=b){const t=N[b];null!=t&&t!==B&&h.some((e=>e.value===t))&&D(t)}const j=t=>{const e=t.currentTarget,r=C.indexOf(e),n=h[r].value;n!==B&&(P(e),D(n),null!=b&&w(b,String(n)))},S=t=>{var e;let r=null;switch(t.key){case"Enter":j(t);break;case"ArrowRight":{const e=C.indexOf(t.currentTarget)+1;r=C[e]??C[0];break}case"ArrowLeft":{const e=C.indexOf(t.currentTarget)-1;r=C[e]??C[C.length-1];break}}null==(e=r)||e.focus()};return a.createElement("div",null,a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},h.map((t=>{let{value:e,label:r,attributes:l}=t;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:B===e?0:-1,"aria-selected":B===e,key:e,ref:t=>C.push(t),onKeyDown:S,onClick:j},l,{className:(0,o.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",s,null==l?void 0:l.className,{"border-b-2 pointer-events-none":B===e,"border-b-2 text-[#669dcb] border-[#669dcb]":B===e&&O.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":B===e&&O.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":B!==e&&O.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":B!==e&&O.startsWith("/terminal")})}),r??e)})),a.createElement("li",{className:"w-full border-b border-grey-400 pointer-events-none py-1 mb-[12px]"})),r?(0,a.cloneElement)(g.filter((t=>t.props.value===B))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==B})))))}function b(t){const e=(0,i.Z)();return a.createElement(k,(0,n.Z)({key:String(e)},t))}}}]);