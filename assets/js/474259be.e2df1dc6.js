"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21243],{3905:(n,e,a)=>{a.d(e,{Zo:()=>l,kt:()=>m});var o=a(67294);function i(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function r(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,o)}return a}function t(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function c(n,e){if(null==n)return{};var a,o,i=function(n,e){if(null==n)return{};var a,o,i={},r=Object.keys(n);for(o=0;o<r.length;o++)a=r[o],e.indexOf(a)>=0||(i[a]=n[a]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)a=r[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(i[a]=n[a])}return i}var s=o.createContext({}),p=function(n){var e=o.useContext(s),a=e;return n&&(a="function"==typeof n?n(e):t(t({},e),n)),a},l=function(n){var e=p(n.components);return o.createElement(s.Provider,{value:e},n.children)},f={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(n,e){var a=n.components,i=n.mdxType,r=n.originalType,s=n.parentName,l=c(n,["components","mdxType","originalType","parentName"]),d=p(a),m=i,u=d["".concat(s,".").concat(m)]||d[m]||f[m]||r;return a?o.createElement(u,t(t({ref:e},l),{},{components:a})):o.createElement(u,t({ref:e},l))}));function m(n,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=a.length,t=new Array(r);t[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=n,c.mdxType="string"==typeof n?n:i,t[1]=c;for(var p=2;p<r;p++)t[p]=a[p];return o.createElement.apply(null,t)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},29429:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>t,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var o=a(87462),i=(a(67294),a(3905));const r={title:"dtvl",description:"OpenBB Terminal Function"},t="dtvl",c={unversionedId:"reference/crypto/defi/dtvl",id:"reference/crypto/defi/dtvl",title:"dtvl",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/crypto/defi/dtvl.md",sourceDirName:"reference/crypto/defi",slug:"/reference/crypto/defi/dtvl",permalink:"/terminal/reference/crypto/defi/dtvl",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/defi/dtvl.md",tags:[],version:"current",frontMatter:{title:"dtvl",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"anchor",permalink:"/terminal/reference/crypto/defi/anchor"},next:{title:"gacc",permalink:"/terminal/reference/crypto/defi/gacc"}},s={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],l={toc:p};function f(n){let{components:e,...a}=n;return(0,i.kt)("wrapper",(0,o.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dtvl"},"dtvl"),(0,i.kt)("p",null,"Displays historical TVL of different dApps. ","[Source: https://docs.llama.fi/api]"),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"dtvl -d DAPPS\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dapps"),(0,i.kt)("td",{parentName:"tr",align:null},"dApps to search historical TVL. Should be split by , e.g.: anchor,sushiswap,pancakeswap"),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"0.exchange\n1bch\n1inch-network\n1swap\n88mph\n8ightdao\naave\naavegotchi\nabracadabra\nacoconut\nacross\nacryptos\nacumen\nadamant-finance\nadena-finance\nafraswap\nagarthadao\nagave\naladdin-dao\nalchemist\nalchemix\naldrin\nalgofi\naliensfarm\nalita-finance\nalium-swap\nalkemi\nallbridge\nallinx\nalmond\nalpaca-city\nalpaca-finance\nalpha-finance\namogus-dao\namun-tokens\namy-finance\nanchor\nanchorswap\nangle\nankr\nannex\nante-finance\naperocket\napeswap\napollodao\napricot-finance\napwine\napy-finance\naquarius\nara-finance\narbicheems\narbinyan\narbirise-finance\narbis-finance\narcx\narenaswap\narkadiko\narmor\narrow\nartemis-protocol\nasgard-dao\nasgard-finance\nasol\nastroport\natlantis-loans\natlas-usv\natmossoft\natrix\nauctus\naugmented-finance\naugur\naugury-finance\nauroraswap\nautofarm\nautoshark\navalaunch\navalps\navaviking\navaware\naxedao\naxial\naztec\nb.protocol\nbabylon-finance\nbabypig-finance\nbabyswap\nback-finance\nbacondao\nbadger-dao\nbagels-finance\nbaguette\nbaker-guild\nbakeryswap\nbalanced\nbalancer\nbamboodefi\nbananafarm\nbanano\nbancor\nbanksy-farm\nbao-finance\nbarnbridge\nbase-protocol\nbasis-cash\nbasketdao\nbeanstalk\nbear-finance\nbearn\nbecoswap\nbeefy-finance\nbeethoven-x\nbeglobal-finance\nbehodler\nbella-protocol\nbelt-finance\nbenqi\nbenswap\nbepswap\nbeta-finance\nbifi\nbig-data-protocol\nbillion-happiness\nbishares\nbiswap\nbitant\nbitpif\nblackbird-finance\nblackpool\nblizzard\nblizz-finance\nbnbminer-finance\nbogged-finance\nbondappetit\nboofinance\nborgswap\nboringdao\nbossswap\nbouje-finance\nbourbon-dao\nbrahma\nbridge-mutual\nbrinc\nbring.finance\nbrokoli-network\nbscstation\nbscswap\nbt.finance\nbtc-proxy\nbtcst\nbuffaloswap\nbumper-finance\nbunny\nbunnypark\nbxh\ncafeswap\ncakedao\ncanary\ncap\ncapital-dao\ncarbon-finance\ncarbonswap\ncardstarter\ncaribou-finance\ncashcow-finance\ncashcow-protocol\ncashio\ncbridge\ncerberusdao\nchad-finance\nchainge-finance\nchainport\nchannels-finance\nchargedefi\ncharm-finance\ncheesedao\ncherryswap\nchest-finance\nchfry-finance\nchickenswap\nchikn-farm\nchronicle\nchronoswap\nclipper\ncobraswap\ncoffin-finance\ncofix\ncoinswap-space\ncoinwind\ncolony\ncometh\ncomplifi\ncomplus-network\ncomponent\ncomposable-finance\ncompound\nconnext\nconvergence\nconvex-finance\ncook-finance\ncorgiswap\ncougarswap\ncoup-farm\ncover-protocol\ncozy-finance\ncream-finance\ncreamswap\ncrodex\ncronaswap\ncrow-finance\ncrunchy-network\ncryptex\ncryptoyieldfocus\ncrystl-finance\ncub-finance\ncurve\ncvault-finance\ncvi-finance\ncyber-dog\ncyberfantasyfembots\ncybertime\ncycle-finance\ncyclone\ncyclos\ndao-maker\ndaoventures\ndapp-account-dao\ndark-matter\nddex\ndecubate\ndeepseadao\ndeerfi\ndefibox\ndefichain-dex\ndefichain-loans\ndefidollar-dao\ndefi-halal\ndefi-kingdoms\ndefily\ndefiner\ndefinix\ndefiplaza\ndefirex\ndefisaver\ndefis-network\ndefi-swap\ndefi-yield-protocol\ndefrost\ndefyswap\ndehive\ndemeter\ndepth\nderi-protocol\nderivadex\ndeversifi\ndev-protocol\ndforce\ndfx-finance\ndfyn-network\ndhedge\ndino.exchange\ndinosaur-eggs\ndinoswap\ndios-finance\ndodo\ndoki-doki-finance\ndomani-protocol\ndonkey\ndopex\ndopple-finance\ndraco-force\ndracula\ndrift\ndrops\nduckydefi\ndungeonswap\ndydx\necurve\neggtartswap\nelement-finance\nelephantdex\neleven-finance\nelk\nellipsis-finance\nembr-finance\nemerald-swap\nemiswap\nempiredex\nenergiswap\nenterdao\nentropyfi\nenzyme-finance\neosauthority-rex\nerasure\nergodex\nester-finance\nethernity-chain\neuler\neuphoria\neverestdao\neveripedia\neverrise\nevolutionland\nexinswap\nexodia\nfabric\nfantohm\nfantompup\nfarmersonly\nfarm-hero\nfeeder-finance\nfegex\nfei-protocol\nferrum\nfiat-dao\nfilda\nfinnexus\nfirebird\nfiredao\nflame-defi\nflamincome\nflamingo-finance\nflare-loans\nflarex\nflashstake\nflexa\nfloat-capital\nfloat-protocol\nfluity\nflux-protocol\nfodl-finance\nforcedao\nfortress\nfortube\nfortune-dao\nfractional-art\nfrancium\nfrax\nfreeliquid\nfreeriver\nfriktion\nfrost-finance\nftm-frens\nfuji-dao\nfurucombo\nfusefi\nfutureswap\nfuzz-finance\ngains-network\ngaj-finance\ngalatea-cash\ngalaxygoogle-dao\ngamma\ngearbox\ngeist-finance\ngenesis-finance\ngenesys\ngenshiro\ngeyser\ngibxswap\ngiza-dao\nglide-finance\nglobiance\ngmx\ngnosis\ngoldfinch\ngolff-protocol\ngondola-finance\ngoose-finance\ngoswap\ngovernor-dao\ngrassland-finance\ngravity-finance\ngrim-finance\ngro\ngrowth-defi\nguard(helmet)\ng-uni\ngyro\nhades-swap\nhakka-finance\nhalodao\nhandle-fi\nharvest-finance\nhbtc\nhector-dao\nhegic\nhelios-prime\nhermes-defi\nhex\nhfione\nhoneyfarm\nhoneyswap\nhop-protocol\nhotpot-finance\nhpdex\nhswap\nhuckleberry\nhundred-finance\nhunny-finance\nhurricaneswap\nhyper-finance\nhyperswap\nice-colony\nice-dao\nichi-farm\nideamarket\nidex\nidle-finance\nifpool\nifswap\nilluvium\nimpermax-finance\nimpossible-finance\nimtoken\nindex-coop\nindexed-finance\ninjective-protocol\nink-protocol\ninstadapp\ninstrumental-finance\ninsurace\nintegral\ninverse-finance\ninvictusdao\niron-finance\nitrust-finance\njade-protocol\njaguarswap\njarvis-network\njet\njetfuel-finance\njetswap\njpool\njswap\njustcryptos\njustlend\njuststables\nkaco-finance\nkafe-finance\nkaidex\nkalata\nkarma-dao\nkarura-dollar-(kusd)\nkarura-liquid-staking\nkarura-swap\nkatana\nkatana-dex\nkava\nkava-lend\nkava-swap\nkawaiiswap\nkebab-finance\nkeep3r-network\nkeeperdao\nkeep-network\nkimochi\nkine-finance\nkingdefi\nkitty-finance\nklayswap\nklend\nklima-dao\nklondike-finance\nknightswap-finance\nknit-finance\nkoala-defi\nkogefarm\nkokomoswap\nkokoswap\nkolibri\nkronos-dao\nkryptodex\nkswap-finance\nkuswap\nkuu-finance\nkwikswap\nkyber\nlarix\nlatteswap\nlayer2-finance\nleaguedao\nlemonswap\nlendhub\nleonicornswap\nlevinswap\nlido\nlien\nlife-dao\nlightning-network\nlinear-finance\nliqee\nliquid-driver\nliquidrium\nliquidswap\nliquity\nlixir-finance\nlobis\nlongdrink\nloop-finance\nloopring\nlootswap\nloterra\nlouverture\nluaswap\nlumenswap\nluxor-money\nlydia\nlyra\nmacaronswap\nmagic-land\nmagnet-dao\nmaiar-exchange\nmakerdao\nmakiswap\nmama-dao\nmango-markets\nmanifest\nmantra-dao\nmaple\nmarginswap\nmarinade-finance\nmarket\nmars-ecosystem\nmarshmallowdefi\nmars-poolin\nmatrix-farm\nmaximizer\nmcdex\nmdex\nmean-finance\nmensa-protocol\nmento\nmeowswap\nmercurial-finance\nmercurity\nmerit-circle\nmerlin\nmeso-finance\nmetacrono\nmeta-pool\nmetareserve\nmetaversepro\nmetronome\nmfinance\nmidasdao\nmimas-finance\nmimo-defi\nminingtycoon\nminiswap\nminmax-finance\nmint-club\nmintswap\nmirai\nmirror\nmistswap\nmm-finance\nmm-optimizer\nmobius-finance\nmobius-money\nmobox\nmochifi\nmochiswap\nmojitoswap\nmoneyonchain\nmonox\nmoola-market\nmoondao\nmoonfarm\nmooniswap\nmoonpot\nmoonswap\nmorpheus-swap\nmstable\nmuesliswap\nmultichain\nmulti-chain-miner\nmultiplier\nmushrooms-finance\nn3rd-finance\nnacho-finance\nnaos-finance\nnasdex\nnearpad\nnecc\nneku\nnemesis-dao\nnerve\nnerve-network\nnest-protocol\nnetswap\nneutrino\nnewdex\nnewland\nnexus-mutual\nnexus-protocol\nnft20\nnftb\nnftx\nnidhi-dao\nniifi\nnileriver\nniob-finance\nnotional\nnowswap\nnsure\nnuls\nnumbers-protocol\no2-dao\no3-swap\noakfarm\nobswap\nocean-protocol\nocp-finance\noddz\noh-finance\nola-finance\nolive-cash\nolympus-dao\nomicron\nomm\nondo-finance\none-cash\nonedao-finance\noneswap\nonly1\nonx-finance\nooki\noolongswap\nopendao\nopenleverage\nopenocean\nopenswap\nopium\noptidoge\noptinyan\nopyn\noraichain\norca\norcadao\norigin-dollar\norion-money\norion-protocol\nosmosis\notterclam\nouchi-finance\novernight\novr\noxygen\npacoca\npadswap\npaint-swap\npala\npaladin-finance\npancakeswap\npandaswap\npando\npangolin\npantherswap\npapa-dao\nparaswap\nparrot-defi\nparrot-protocol\npartyswap\npeakdefi\npendle\npenguin-finance\npercent-finance\nperlin\nperpetual-protocol\nphoenix-finance\nphotonswap-finance\npickle\npidao-finance\npiedao\npiggy\npiggybank-dao\npiggy-finance\npika-protocol\npilot-protocol\npinkswap\npinyottas\npippi\npiratedao\npizza\nplanet-finance\nplatypus-finance\nplenty-defi\npnetwork\npods-finance\npole-aggregator\npolkaex\npolkamarkets\npolkastarter\npolkaswap\npolly-finance\npolycat\npolydex\npolydex-cryption-network\npolygon-bridge-&-staking\npolygonfarm-finance\npolymarket\npolyquity\npolyroll\npolyshield\npolywhale-finance\npolyyeld-finance\npoof-cash\npooltogether\npopsicle-finance\npop-town\nport-finance\nposition-exchange\npotluck-protocol\npowerbomb-finance\npowerpool\npredictcoin\npremia\nprimitive\npstake\npsyoptions\npumpkin-dao\npurefi\npureswap\npylon-protocol\nqian\nqidao\nqilin\nquarry\nqubit\nquickswap\nquipuswap\nrabbit-finance\nradao\nragnarokdao\nramp\nram-protocol\nrari-capital\nrarify\nraven\nraydium\nrealt\nreaper-farm\nredacted-cartel\nref-finance\nreflexer\nrenvm\nreserve\nretreeb\nretrodefi\nrevault\nreverse\nrevest-finance\nribbon-finance\nrisq-protocol\nrivrkitty\nrobiniaswap\nrobo-advisor-for-yield\nrobo-vault\nrocket-pool\nrocketswap\nromedao\nrose\nrskswap\nrubicon\nr-u-generous\nruler\nsaber\nsablier-finance\nsaddle-finance\nsafedollar\nsafeohm\nsafeswap\nsaffron-finance\nsakeperp\nsalem-finance\nsamodao\nsapphire-defi\nsashimiswap\nscarab-finance\nscarecrow-finance\nscientix\nscream\nseadex\nsecret-bridge\nsecret-network\nsecretswap\nsecuredao\nseeder-finance\nsencha\nsenpaiswap\nsentre\nserum\nserum-swap\nset-protocol\ns-finance\nshadecash\nshapeshift\nsharedstake\nsheepdex\nsheesha-finance\nshell-protocol\nsherlock\nshiba-fantom\nshibance\nshibaswap\nshield\nshinobi\nsifchain\nsingular-farm\nsiren\nskeleton-finance\nsmartcoin\nsmartdex\nsmolswap\nsmoothy\nsnowball\nsnowbank\nsnowcatdao\nsnowdog\nsnowswap\nsocean\nsocialswap\nsoda-protocol\nsolana-farm\nsolarbeam\nsolend\nsolo-top\nsolyard\nsonicswap\nsoulswap\nsovryn\nsoy-finance\nspartacus\nspectrum-protocol\nsperax-usd\nspicy-dao\nspicyswap\nspiritdao\nspiritswap\nspookyswap\nsquiddao\nsquid-defi\nsquid-stake\nstabilize\nstacker-ventures\nstacks-staking\nstader\nstafi\nstakedao\nstakehound\nstakesteak\nstakewise\nstandard-protocol\nstand-cash\nstargate-finance\nstarterra\nsteakbank-finance\nstellarx\nstonedefi\nstormswap\nstrike\nstrudel-finance\nsummit-defi\nsumswap\nsun.io\nsunflower-finance\nsunflowerswap\nsunny\nsunrise-gaming\nsunswap\nsuperfarm\nsuperfluid\nsushiswap\nsuterusu\nswamp-finance\nswap-cat\nswapmatic\nswapp\nswapperchan\nswapr\nswarm-markets\nswerve\nswift-finance\nswing-dao\nswipe\nswop\nsymmetric\nsynapse\nsync-network\nsynlev\nsynthetify\nsynthetix\ntaichi\ntalent-protocol\ntangoswap\ntarot\ntectonic\nteddy-cash\ntelcoin\ntelos-swap\ntemplar-dao\ntemple-dao\ntempodao\ntempus-finance\ntendieswap\ntenet\nten-finance\nterraswap\ntesseract\ntethys-finance\ntetu\ntezos-liquidity-baking\nthales\nthe-dragons-lair\nthe-grand-banks\nthe-sandbox\nthe-seed-farm\nthetanuts\nthorchain\nthoreum-finance\nthorstarter\nthorusfi\ntidal-finance\ntimewarp\ntinlake\ntinyman\ntokemak\ntokenlon\ntomb-finance\ntomofinance\nton-swap\ntopshelf\ntornadao\ntornado-cash\ntotemfi\ntracer\ntrader-joe\ntranche-finance\ntranchess\ntranquil-finance\ntrava-finance\ntreedefi\ntrick-or-treat-farm\ntrisolaris\ntropical-finance\ntruefi\nttswap\ntulip-protocol\ntwindex\ntyphoon-cash\nubeswap\nubiquity-dao\numami-finance\numa-protocol\numbrella-network\numbria-network\nunagii\nundead-finance\nunfederalreserve\nunicly\nunifarm\nunifi\nunilend\nunion-finance\nunipower\nunirex-finance\nuniswap\nunite-finance\nunit-protocol\nunitrade\nuniverse-finance\nuniverse-xyz\nunore\nunslashed\nunusdao\nupfi-network\nvalhalladao\nvalkyrie\nvaluedefi\nvalue-liquid\nvampireswap\nvanilla\nvaporwave\nvaren\nvaulty-finance\nvee-finance\nvenus\nvesper\nvexchange\nvigor\nvikingsfinance\nviperswap\nvires-finance\nvolmex\nvortex-dao\nvoyager\nvultureswap\nvvs-finance\nwagmidao\nwagyuswap\nwaka-finance\nwannaswap\nwanswap-dex\nwardenswap\nwarp-protocol\nwasabix\nwaterloan\nwault\nwaves-exchange\nwbtc\nwepiggy\nwestarter\nwhale-loans\nwheat-protocol\nwhiteheart\nwild-credit\nwing-finance\nwingswap\nwisteria-swap\nwitswap\nwonderland\nwraithswap\nwrapped\nwrapped-bnb\nwrap-protocol\nxdai-stake-bridge\nxdefi\nxdollar\nxenophon\nxensa\nxeus\nxmas-past\nxsigma\nxtoken\nxusd-money\nyam-finance\nyapeswap\nyaxis\nyearn-finance\nyel-finance\nyetiswap\nyfdai\nyfii\nyieldly\nyield-protocol\nyield-yak\nyogi-finance\nyokaiswap\nyoshi-exchange\nyouswap\nyouves\nysl.io\nzabu-finance\nzai-finance\nzencha-finance\nzenlink\nzeus-finance\nzigzag\nzilswap\nzkswap\nzlot\nzodiacdao\nzoocoin\nzookeeper\nzoomswap\nzunami\nzyxswap\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154051510-e048f525-e9d3-4eae-a0c9-dbea62843310.png",alt:"dtvl"})),(0,i.kt)("hr",null))}f.isMDXComponent=!0}}]);