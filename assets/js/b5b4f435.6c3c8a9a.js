"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30802],{3905:(e,r,a)=>{a.d(r,{Zo:()=>u,kt:()=>T});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var S=t.createContext({}),s=function(e){var r=t.useContext(S),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},u=function(e){var r=s(e.components);return t.createElement(S.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,S=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),T=n,E=d["".concat(S,".").concat(T)]||d[T]||c[T]||o;return a?t.createElement(E,l(l({ref:r},u),{},{components:a})):t.createElement(E,l({ref:r},u))}));function T(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var S in r)hasOwnProperty.call(r,S)&&(i[S]=r[S]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88210:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>S,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=a(87462),n=(a(67294),a(3905));const o={title:"bench",description:"OpenBB Terminal Function"},l="bench",i={unversionedId:"reference/portfolio/bench",id:"reference/portfolio/bench",title:"bench",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/portfolio/bench.md",sourceDirName:"reference/portfolio",slug:"/reference/portfolio/bench",permalink:"/terminal/reference/portfolio/bench",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/bench.md",tags:[],version:"current",frontMatter:{title:"bench",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"attrib",permalink:"/terminal/reference/portfolio/attrib"},next:{title:"balances",permalink:"/terminal/reference/portfolio/brokers/ally/balances"}},S={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:s};function c(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bench"},"bench"),(0,n.kt)("p",null,"Load in a benchmark from a selected list or set your own based on the ticker."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"usage: bench -b BENCHMARK [BENCHMARK ...] [-s]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"benchmark"),(0,n.kt)("td",{parentName:"tr",align:null},"Set the benchmark for the portfolio. By default, this is SPDR S&P 500 ETF Trust (SPY)."),(0,n.kt)("td",{parentName:"tr",align:null},"SPY"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"SPDR S&P 500 ETF Trust (SPY), iShares Core S&P 500 ETF (IVV), Vanguard Total Stock Market ETF (VTI), Vanguard S&P 500 ETF (VOO), Invesco QQQ Trust (QQQ), Vanguard Value ETF (VTV), Vanguard FTSE Developed Markets ETF (VEA), iShares Core MSCI EAFE ETF (IEFA), iShares Core U.S. Aggregate Bond ETF (AGG), Vanguard Total Bond Market ETF (BND), Vanguard FTSE Emerging Markets ETF (VWO), Vanguard Growth ETF (VUG), iShares Core MSCI Emerging Markets ETF (IEMG), iShares Core S&P Small-Cap ETF (IJR), SPDR Gold Shares (GLD), iShares Russell 1000 Growth ETF (IWF), iShares Core S&P Mid-Cap ETF (IJH), Vanguard Dividend Appreciation ETF (VIG), iShares Russell 2000 ETF (IWM), iShares Russell 1000 Value ETF (IWD), Vanguard Mid-Cap ETF (VO), iShares MSCI EAFE ETF (EFA), Vanguard Total International Stock ETF (VXUS), Vanguard Information Technology ETF (VGT), Vanguard High Dividend Yield Index ETF (VYM), Vanguard Total International Bond ETF (BNDX), Vanguard Real Estate ETF (VNQ), Vanguard Small Cap ETF (VB), Technology Select Sector SPDR Fund (XLK), iShares Core S&P Total U.S. Stock Market ETF (ITOT), Vanguard Intermediate-Term Corporate Bond ETF (VCIT), Vanguard Short-Term Corporate Bond ETF (VCSH), Energy Select Sector SPDR Fund (XLE), Health Care Select Sector SPDR Fund (XLV), Vanguard Short-Term Bond ETF (BSV), Financial Select Sector SPDR Fund (XLF), Schwab US Dividend Equity ETF (SCHD), Invesco S&P 500\xae Equal Weight ETF (RSP), iShares iBoxx $ Investment Grade Corporate Bond ETF (LQD), iShares S&P 500 Growth ETF (IVW), Vanguard FTSE All-World ex-US Index Fund (VEU), iShares TIPS Bond ETF (TIP), iShares Gold Trust (IAU), Schwab U.S. Large-Cap ETF (SCHX), iShares Core MSCI Total International Stock ETF (IXUS), iShares Russell Midcap ETF (IWR), iShares Russell 1000 ETF (IWB), SPDR Dow Jones Industrial Average ETF Trust (DIA), iShares MSCI Emerging Markets ETF (EEM), iShares MSCI USA Min Vol Factor ETF (USMV), Schwab International Equity ETF (SCHF), iShares S&P 500 Value ETF (IVE), iShares National Muni Bond ETF (MUB), Vanguard Large Cap ETF (VV), Vanguard Small Cap Value ETF (VBR), iShares ESG Aware MSCI USA ETF (ESGU), Vanguard Total World Stock ETF (VT), iShares Core Dividend Growth ETF (DGRO), iShares 1-3 Year Treasury Bond ETF (SHY), iShares Select Dividend ETF (DVY), iShares MSCI USA Quality Factor ETF (QUAL), Schwab U.S. Broad Market ETF (SCHB), iShares MBS ETF (MBB), SPDR S&P Dividend ETF (SDY), iShares 1-5 Year Investment Grade Corporate Bond ETF (IGSB), Vanguard Short-Term Inflation-Protected Securities ETF (VTIP), JPMorgan Ultra-Short Income ETF (JPST), iShares 20+ Year Treasury Bond ETF (TLT), iShares MSCI ACWI ETF (ACWI), SPDR S&P Midcap 400 ETF Trust (MDY), iShares Core Total USD Bond Market ETF (IUSB), iShares Short Treasury Bond ETF (SHV), Vanguard FTSE Europe ETF (VGK), Consumer Discretionary Select Sector SPDR Fund (XLY), SPDR Bloomberg 1-3 Month T-Bill ETF (BIL), iShares U.S. Treasury Bond ETF (GOVT), Vanguard Health Care ETF (VHT), Vanguard Mid-Cap Value ETF (VOE), Consumer Staples Select Sector SPDR Fund (XLP), Schwab U.S. TIPS ETF (SCHP), iShares 7-10 Year Treasury Bond ETF (IEF), iShares Preferred & Income Securities ETF (PFF), Utilities Select Sector SPDR Fund (XLU), Vanguard Tax-Exempt Bond ETF (VTEB), iShares MSCI EAFE Value ETF (EFV), Schwab U.S. Large-Cap Growth ETF (SCHG), iShares J.P. Morgan USD Emerging Markets Bond ETF (EMB), Dimensional U.S. Core Equity 2 ETF (DFAC), Schwab U.S. Small-Cap ETF (SCHA), VanEck Gold Miners ETF (GDX), Vanguard Mortgage-Backed Securities ETF (VMBS), ProShares UltraPro QQQ (TQQQ), Vanguard Short-Term Treasury ETF (VGSH), iShares iBoxx $ High Yield Corporate Bond ETF (HYG), Industrial Select Sector SPDR Fund (XLI), iShares Russell Mid-Cap Value ETF (IWS), Vanguard Extended Market ETF (VXF), SPDR Portfolio S&P 500 ETF (SPLG), SPDR Portfolio S&P 500 Value ETF (SPYV), iShares Russell 2000 Value ETF (IWN)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"full_shares"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to only make a trade with the benchmark when a full share can be bought (no partial shares)."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null))}c.isMDXComponent=!0}}]);