(function(){"use strict";var e={8448:function(e,t,s){var r=s(5130),i=s(6768);const l={id:"app",class:"bg-gradient-to-b from-gray-900 via-blue-900 to-blue-800 text-white"};function n(e,t,s,r,n,o){const a=(0,i.g2)("TheHeader"),c=(0,i.g2)("router-link"),u=(0,i.g2)("router-view"),d=(0,i.g2)("TheFooter");return(0,i.uX)(),(0,i.CE)("div",l,[(0,i.bF)(a),n.searchResults.length?((0,i.uX)(),(0,i.Wv)(c,{key:0,to:{name:"search-results",params:{query:n.searchQuery}}},{default:(0,i.k6)((()=>[(0,i.eW)(" Voir les résultats de la recherche ")])),_:1},8,["to"])):(0,i.Q3)("",!0),(0,i.bF)(u),(0,i.bF)(d)])}s(4114);var o=s(4232),a=s.p+"img/logo.ff4c8248.png";const c=(0,i.Lk)("img",{src:a,alt:"logo Kàndiǎn",class:"w-24"},null,-1),u=(0,i.Lk)("h1",{class:"text-5xl font-bold ml-2 font-pacifico"},"Kàndiǎn",-1),d=[c,u],h={class:"flex space-x-4"};function m(e,t,s,r,l,n){const a=(0,i.g2)("router-link"),c=(0,i.g2)("TheSearchBarre");return(0,i.uX)(),(0,i.CE)("header",{class:(0,o.C4)(["py-3 px-4 flex justify-between items-center bg-gray-900",{"flex flex-col":l.smallScreen}])},[(0,i.Lk)("div",{class:(0,o.C4)(["flex items-center",{"mr-8":l.smallScreen}])},d,2),(0,i.Lk)("nav",null,[(0,i.Lk)("ul",h,[(0,i.Lk)("li",null,[(0,i.bF)(a,{to:"/",class:"hover:text-gray-400 cursor-pointer"},{default:(0,i.k6)((()=>[(0,i.eW)("Accueil")])),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(a,{to:"/FilmsAffichage",class:"hover:text-gray-400 cursor-pointer"},{default:(0,i.k6)((()=>[(0,i.eW)("Films")])),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(a,{to:"/SeriesAffichage",class:"hover:text-gray-400 cursor-pointer"},{default:(0,i.k6)((()=>[(0,i.eW)("Séries")])),_:1})])])]),(0,i.bF)(c,{class:(0,o.C4)(["w-3/12 mb-4",{"w-8/12":l.smallScreen}]),onSearch:n.handleSearch},null,8,["class","onSearch"])],2)}const p={class:"flex items-center"},f=(0,i.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},[(0,i.Lk)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,i.Lk)("path",{d:"M15.56 14.44a6.5 6.5 0 1 1 1.42-1.42l4.3 4.3-1.42 1.42-4.3-4.3zm-3.06 1.06a4.5 4.5 0 1 0-6.36-6.36 4.5 4.5 1 1 1 6.36 6.36z"})],-1),v=[f];function g(e,t,s,l,n,o){return(0,i.uX)(),(0,i.CE)("div",p,[(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.searchQuery=e),placeholder:"Rechercher",class:"w-full text-black px-4 py-2 rounded-l-full border border-gray-300 focus:border-gray-800 focus:ring-gray-800 placeholder-gray-500"},null,512),[[r.Jo,n.searchQuery]]),(0,i.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>o.search&&o.search(...e)),class:"px-1 py-2 rounded-r-full bg-blue-900 text-white hover:bg-blue-500 focus:outline-none focus:ring focus:ring-gray-200"},v)])}var b={data(){return{searchQuery:""}},methods:{search(){this.$router.push({name:"search-results",query:{q:this.searchQuery}})}}},w=s(1241);const S=(0,w.A)(b,[["render",g]]);var y=S,k={name:"TheHeader",components:{TheSearchBarre:y},data(){return{searchQuery:"",smallScreen:!1}},async mounted(){this.checkScreenSize(),window.addEventListener("resize",this.checkScreenSize)},beforeUnmount(){window.removeEventListener("resize",this.checkScreenSize)},methods:{handleSearch(){},submitSearch(){this.$router.push({path:"/search",query:{q:this.searchQuery}})},checkScreenSize(){this.smallScreen=window.innerWidth<=763}}};const x=(0,w.A)(k,[["render",m]]);var L=x;const C={class:"bg-gray-900 py-4 text-gray-300 text-center"},_=(0,i.Lk)("p",null,"© 2024 Kàndiǎn. Tous droits réservés.",-1),j=[_];function M(e,t,s,r,l,n){return(0,i.uX)(),(0,i.CE)("footer",C,j)}var F={name:"TheFooter"};const E=(0,w.A)(F,[["render",M]]);var A=E,z={name:"App",components:{TheHeader:L,TheFooter:A},data(){return{searchQuery:"",searchResults:[],searchFilm:[]}},methods:{handleSearch(e){this.$router.push({name:"search-results",params:{query:e}})}}};const X=(0,w.A)(z,[["render",n]]);var P=X,T=s(1387);const O=(0,i.Lk)("h2",{class:"text-3xl font-bold mt-6 mb-6 ml-2"},"Les Prochaines Sorties",-1),I=(0,i.Lk)("h2",{class:"text-3xl font-bold mt-4 mb-6 ml-2"},"Les Plus Regardés",-1),$=(0,i.Lk)("h2",{class:"text-3xl font-bold mt-6 mb-6 ml-2"},"Les Dernières Sorties",-1),q=(0,i.Lk)("h2",{class:"text-3xl font-bold mt-6 mb-6 ml-2"},"Les Mieux Notés",-1);function R(e,t,s,r,l,n){const a=(0,i.g2)("router-view"),c=(0,i.g2)("SkeletonLoader"),u=(0,i.g2)("TheHero"),d=(0,i.g2)("TheCarousel"),h=(0,i.g2)("ThePub");return(0,i.uX)(),(0,i.CE)("div",{class:(0,o.C4)(["text-white",{"w-9/12 mx-auto":l.isXLargeScreen,"w-7/12 mx-auto":l.isXXLargeScreen}])},[(0,i.bF)(a),(0,i.bF)(c,{loading:l.loading},null,8,["loading"]),(0,i.bF)(u),(0,i.Lk)("main",{class:(0,o.C4)(["ml-6 mx-auto mb-6",{"ml-2":l.isSmallScreen}])},[O,(0,i.bF)(d,{class:(0,o.C4)(["text-2xl ml-8 mb-4",{"ml-4":l.isSmallScreen}]),titreCat:"Prochainement En Salle",movie:!0,films:l.upComingMovies},null,8,["class","films"]),I,(0,i.bF)(d,{class:(0,o.C4)(["text-2xl ml-8 mb-4",{"ml-4":l.isSmallScreen}]),titreCat:"Séries Populaires",movie:!1,films:l.popularSeries},null,8,["class","films"]),(0,i.bF)(d,{class:(0,o.C4)(["text-2xl ml-8 mb-4",{"ml-4":l.isSmallScreen}]),titreCat:"Films Populaires",movie:!0,films:l.popularMovies},null,8,["class","films"]),$,(0,i.bF)(h,{class:(0,o.C4)(["w-11/12 mx-auto h-64",{hidden:l.isSmallScreen}]),films:l.latestMovies,movie:!0},null,8,["class","films"]),(0,i.bF)(d,{class:(0,o.C4)(["text-2xl ml-8 mb-4",{"ml-4":l.isSmallScreen}]),titreCat:"Films Déjà Chez Nous",movie:!0,films:l.latestMovies},null,8,["class","films"]),(0,i.bF)(d,{class:(0,o.C4)(["text-2xl ml-8 mb-4",{"ml-4":l.isSmallScreen}]),titreCat:"Séries Fraichement Sorties",movie:!1,films:l.latestSeries},null,8,["class","films"]),q,(0,i.bF)(d,{class:(0,o.C4)(["text-2xl ml-8 mb-4",{"ml-4":l.isSmallScreen}]),titreCat:"Les Films Qui Plaisent",movie:!0,films:l.latestMovies},null,8,["class","films"]),(0,i.bF)(d,{class:(0,o.C4)(["text-2xl ml-8 mb-4",{"ml-4":l.isSmallScreen}]),titreCat:"Les Séries Au Top",movie:!1,films:l.latestSeries},null,8,["class","films"])],2)],2)}const Q={class:"mx-auto mt-2"},W={class:"mb-4"},V=["src","alt"],D=["src","alt"],G=["onClick"],K={class:"text-white text-xl font-bold cursor-pointer"};function B(e,t,s,r,l,n){const a=(0,i.g2)("swiper-slide"),c=(0,i.g2)("swiper"),u=(0,i.g2)("TheModal");return(0,i.uX)(),(0,i.CE)("div",Q,[(0,i.Lk)("h2",W,(0,o.v_)(s.titreCat),1),(0,i.bF)(c,{modules:r.modules,slidesPerGroup:1,breakpoints:l.screenSize,navigation:"",pagination:{clickable:!0},onSwiper:n.onSwiper,onSlideChange:n.onSlideChange,loop:!1,autoplay:{delay:9e3},class:"relative flex flox-row ml-2 h-full"},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.filteredFilms,((e,t)=>((0,i.uX)(),(0,i.Wv)(a,{class:"hover:border rounded-lg mx-1 h-48 relative flex",key:t},{default:(0,i.k6)((()=>[s.movie?((0,i.uX)(),(0,i.CE)("img",{key:0,class:(0,o.C4)(["rounded-lg w-72 h-96 object-cover",{"h-44 w-auto":l.isSmallScreen}]),src:`https://image.tmdb.org/t/p/w500/${e.poster_path}`,alt:`Affiche de ${e.title}`},null,10,V)):((0,i.uX)(),(0,i.CE)("img",{key:1,class:(0,o.C4)(["rounded-lg w-full h-40 object-cover",{"h-28":l.isSmallScreen}]),src:`https://image.tmdb.org/t/p/w500/${e.backdrop_path}`,alt:`Affiche de ${e.name}`},null,10,D)),(0,i.Lk)("div",{class:"absolute inset-0 flex justify-center items-center bg-black opacity-0 transition-opacity duration-300 hover:opacity-50",onClick:t=>n.showModal(e)},[(0,i.Lk)("p",K,(0,o.v_)(s.movie?e.title:e.name),1)],8,G)])),_:2},1024)))),128))])),_:1},8,["modules","breakpoints","onSwiper","onSlideChange"]),(0,i.bF)(u,{movie:l.selectedFilm,isModalOpen:l.isModalOpen,onClose:n.closeModal},null,8,["movie","isModalOpen","onClose"])])}var H=s(317),U=s(8421),Y=s(4534),N={props:{movie:{type:Boolean,required:!0},films:{type:Array,required:!0},titreCat:{type:String,required:!0}},components:{Swiper:U.RC,SwiperSlide:U.qr,TheModal:Y.A},data(){return{selectedFilm:null,isModalOpen:!1,genres:{},isSmallScreen:!1,isLargeScreen:!1,screenSize:{480:{slidesPerView:3,slidesPerGroup:2},768:{slidesPerView:4,slidesPerGroup:3},1024:{slidesPerView:4,slidesPerGroup:3},1201:{slidesPerView:5,slidesPerGroup:4},1800:{slidesPerView:6,slidesPerGroup:5},2200:{slidesPerView:7,slidesPerGroup:6},2600:{slidesPerView:8,slidesPerGroup:7}}}},computed:{filteredFilms(){return Array.isArray(this.films)?this.films.filter((e=>null!==e.poster_path)):[]}},methods:{onSlideChange(){},onSwiper(){},showModal(e){this.selectedFilm=e,this.isModalOpen=!0},closeModal(){this.selectedFilm=null,this.isModalOpen=!1},async fetchGenres(){try{const e="3a18f97e67628cff439f21ac383dd600",t=await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${e}&language=en-US`),s=await t.json();if(s.genres){const e=s.genres.reduce(((e,t)=>(e[t.id]=t.name,e)),{});this.genres=e}else console.error("Data.genres is undefined or null")}catch(e){console.error("Error fetching genres:",e)}},checkScreenSize(){this.isSmallScreen=window.innerWidth<=763,this.isLargeScreen=window.innerWidth>=1600}},setup(){return{modules:[H.Vx,H.dK,H.Ze,H.Ij,H.Jq]}},async mounted(){this.fetchGenres(),this.checkScreenSize(),window.addEventListener("resize",this.checkScreenSize)},beforeUnmount(){window.removeEventListener("resize",this.checkScreenSize)}};const J=(0,w.A)(N,[["render",B]]);var Z=J;const ee={class:"w-11/12 h-full mx-auto overflow-hidden"},te={class:"w-11/12 mx-auto overflow-hidden"},se={class:"relative w-full h-64"},re=["src","alt"],ie={class:"absolute bottom-0 left-0 w-full text-white text-2xl font-bold px-4 py-2"},le=(0,i.Lk)("div",{class:"flex justify-center mt-4 translate-y-20"},null,-1);function ne(e,t,s,r,l,n){const a=(0,i.g2)("swiper-slide"),c=(0,i.g2)("swiper");return(0,i.uX)(),(0,i.CE)("div",ee,[(0,i.Lk)("div",te,[(0,i.bF)(c,{modules:r.modules,"slides-per-view":2,"slides-per-group":1,class:"flex flex-row",autoplay:{delay:7e3}},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.films,((e,t)=>((0,i.uX)(),(0,i.Wv)(a,{key:t},{default:(0,i.k6)((()=>[(0,i.Lk)("div",se,[(0,i.Lk)("img",{class:"mx-auto w-full object-cover opacity-70",src:`https://image.tmdb.org/t/p/w500/${e.backdrop_path}`,alt:`Affiche de ${e.title}`},null,8,re),(0,i.Lk)("p",ie,(0,o.v_)(s.movie?e.title:e.name),1)])])),_:2},1024)))),128))])),_:1},8,["modules"])]),le])}var oe={props:{movie:{type:Boolean,required:!0},films:{type:Array,required:!0}},components:{Swiper:U.RC,SwiperSlide:U.qr},setup(){return{modules:[H.Ij,H.Jq]}}};const ae=(0,w.A)(oe,[["render",ne]]);var ce=ae;const ue=e=>((0,i.Qi)("data-v-0066d72c"),e=e(),(0,i.jt)(),e),de={class:"relative w-full mx-auto"},he={key:0,class:"relative w-full overflow-hidden"},me=["src","alt"],pe={class:"text-lg mb-2"},fe={class:"text-base mb-0 pb-2"},ve=ue((()=>(0,i.Lk)("span",{class:"carousel-control-prev-icon w-8 h-8 rounded-full flex justify-center items-center","aria-hidden":"true"},null,-1))),ge=ue((()=>(0,i.Lk)("span",{class:"visually-hidden"},null,-1))),be=[ve,ge],we=ue((()=>(0,i.Lk)("span",{class:"carousel-control-next-icon w-8 h-8 rounded-full flex justify-center items-center","aria-hidden":"true"},null,-1))),Se=ue((()=>(0,i.Lk)("span",{class:"visually-hidden"},null,-1))),ye=[we,Se],ke={class:"absolute bottom-2 right-16 flex justify-center items-center ml-26"},xe=["onClick"];function Le(e,t,s,r,l,n){return(0,i.uX)(),(0,i.CE)("div",de,[(0,i.Lk)("div",{class:"relative",onMouseover:t[2]||(t[2]=e=>l.showCaption=!0),onMouseleave:t[3]||(t[3]=e=>l.showCaption=!1)},[l.movies.length>0?((0,i.uX)(),(0,i.CE)("div",he,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.movies,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:t,class:(0,o.C4)(["hidden h-80 rounded-lg overflow-hidden container",{active:t===l.activeIndex,"h-full":l.isSmallScreen}])},[(0,i.Lk)("img",{class:"w-max rounded-lg object-center aspect-video object-cover",src:"https://image.tmdb.org/t/p/original/"+e.backdrop_path,alt:e.title},null,8,me),(0,i.Lk)("div",{class:(0,o.C4)(["absolute inset-x-0 bottom-0 p-4 bg-black text-white rounded-b-lg opacity-0 transition-opacity duration-300 w-11/12 mx-auto",{visible:l.showCaption,"h-full":l.isSmallScreen}])},[(0,i.Lk)("h5",pe,(0,o.v_)(e.title),1),(0,i.Lk)("p",fe,(0,o.v_)(e.overview),1)],2)],2)))),128))])):(0,i.Q3)("",!0),(0,i.Lk)("div",{class:(0,o.C4)({hidden:l.isSmallScreen})},[(0,i.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>n.prevSlide&&n.prevSlide(...e)),class:"absolute flex justify-center items-center top-1/2 transform -translate-y-1/2 z-10 bg-transparent border-none cursor-pointer left-5",type:"button"},be),(0,i.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>n.nextSlide&&n.nextSlide(...e)),class:"absolute flex justify-center items-center top-1/2 transform -translate-y-1/2 z-10 bg-transparent border-none cursor-pointer right-5 rotate-180",type:"button"},ye),(0,i.Lk)("div",ke,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.movies,((e,t)=>((0,i.uX)(),(0,i.CE)("span",{key:t,class:(0,o.C4)(["pagination-dot w-5 h-2 bg-white rounded-full m-0 mx-1 cursor-pointer",{"active bg-gradient-to-l from-gray-900 via-blue-900 to-blue-800":t===l.activeIndex}]),onClick:e=>n.goToSlide(t)},null,10,xe)))),128))])],2)],32)])}var Ce={data(){return{movies:[],activeIndex:0,showCaption:!1,autoplayInterval:null,autoplayDelay:1e4,isSmallScreen:!1}},async mounted(){this.checkScreenSize(),window.addEventListener("resize",this.checkScreenSize),this.fetchMovies(),this.startAutoplay()},beforeUnmount(){window.removeEventListener("resize",this.checkScreenSize),this.stopAutoplay()},methods:{async fetchMovies(){try{const e="3a18f97e67628cff439f21ac383dd600";let t=[];const s=499;for(let i=1;i<=s;i++){const s=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${e}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}`),r=await s.json();r.results&&r.results.length>0&&(t=[...t,...r.results])}const r=Array.from({length:15},(()=>Math.floor(Math.random()*t.length)));this.movies=r.map((e=>t[e]))}catch(e){console.error("Error fetching movies:",e)}},nextSlide(){this.activeIndex=(this.activeIndex+1)%this.movies.length},prevSlide(){this.activeIndex=(this.activeIndex-1+this.movies.length)%this.movies.length},goToSlide(e){this.activeIndex=e},startAutoplay(){this.autoplayInterval=setInterval((()=>{this.nextSlide()}),this.autoplayDelay)},stopAutoplay(){clearInterval(this.autoplayInterval)},checkScreenSize(){this.isSmallScreen=window.innerWidth<=763}}};const _e=(0,w.A)(Ce,[["render",Le],["__scopeId","data-v-0066d72c"]]);var je=_e,Me=s(5518),Fe={name:"HomeView",components:{TheCarousel:Z,ThePub:ce,TheHero:je,SkeletonLoader:Me.A},data(){return{popularMovies:[],popularSeries:[],latestMovies:[],latestSeries:[],topRatedMovies:[],topRatedSeries:[],randMovies:[],upComingMovies:[],isSmallScreen:!1,isLargeScreen:!1,isXLargeScreen:!1,isXXLargeScreen:!1,loading:!0}},async mounted(){this.fetchData(),this.checkScreenSize(),window.addEventListener("resize",this.checkScreenSize)},beforeUnmount(){window.removeEventListener("resize",this.checkScreenSize)},methods:{async fetchData(){const e="3a18f97e67628cff439f21ac383dd600",t=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=fr`),s=await t.json();s.results=s.results.filter((e=>null!==e.poster_path)),this.popularMovies=s.results;const r=await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${e}&language=fr`),i=await r.json();i.results=i.results.filter((e=>null!==e.backdrop_path)),this.popularSeries=i.results;const l=await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${e}&language=fr`),n=await l.json();n.results=n.results.filter((e=>null!==e.poster_path)),this.latestMovies=n.results;const o=await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${e}&language=fr`),a=await o.json();a.results=a.results.filter((e=>null!==e.backdrop_path)),this.latestSeries=a.results;const c=await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${e}&language=fr`),u=await c.json();u.results=u.results.filter((e=>null!==e.poster_path)),this.topRatedMovies=u.results;const d=await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${e}&language=fr`),h=await d.json();h.results=h.results.filter((e=>null!==e.backdrop_path)),this.topRatedSeries=h.results;const m=await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${e}&language=fr-FR&page=1`),p=await m.json();p.results=p.results.filter((e=>null!==e.poster_path)),this.upComingMovies=p.results,this.loading=!1},checkScreenSize(){this.isSmallScreen=window.innerWidth<=763,this.isLargeScreen=window.innerWidth>=1600,this.isXLargeScreen=window.innerWidth>=2200,this.isXXLargeScreen=window.innerWidth>=2800}}};const Ee=(0,w.A)(Fe,[["render",R]]);var Ae=Ee;const ze=[{path:"/",name:"home",component:Ae},{path:"/searchResults",name:"search-results",component:()=>s.e(422).then(s.bind(s,3422))},{path:"/FilmsAffichage",name:"films-affichage",component:()=>s.e(784).then(s.bind(s,5784))},{path:"/SeriesAffichage",name:"series-affichage",component:()=>s.e(616).then(s.bind(s,4616))}],Xe=(0,T.aE)({history:(0,T.LA)("/Kandian-projet-Vue.js-/"),routes:ze});var Pe=Xe;(0,r.Ef)(P).use(Pe).use(Pe).mount("#app")},5518:function(e,t,s){s.d(t,{A:function(){return h}});var r=s(6768);const i=e=>((0,r.Qi)("data-v-357e2419"),e=e(),(0,r.jt)(),e),l={key:0,class:"fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-90 z-50"},n=i((()=>(0,r.Lk)("div",null,[(0,r.Lk)("div",{class:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-400 shadow-lg mx-auto"}),(0,r.Lk)("p",{class:"text-gray-600 text-lg mt-4"},"Chargement en cours...")],-1))),o=[n];function a(e,t,s,i,n,a){return s.loading?((0,r.uX)(),(0,r.CE)("div",l,o)):(0,r.Q3)("",!0)}var c={name:"SkeletonLoader",props:{loading:{type:Boolean,required:!0}}},u=s(1241);const d=(0,u.A)(c,[["render",a],["__scopeId","data-v-357e2419"]]);var h=d},4534:function(e,t,s){s.d(t,{A:function(){return k}});var r=s(6768),i=s(4232);const l={key:0,class:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-10"},n={key:1,class:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white w-10/12 h-96 md:w-2/3 max-w-screen-lg overflow-y-auto rounded-lg shadow-lg text-gray-800"},o=(0,r.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,r.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),a=[o],c={class:"p-8 max-h-full"},u={class:"flex flex-col md:flex-row items-start"},d=["src","alt"],h={class:"flex flex-col md:flex-grow"},m={class:"text-3xl font-semibold mb-2"},p={class:"text-lg mb-2"},f={class:"overview mt-6"},v=(0,r.Lk)("h2",{class:"text-2xl font-semibold mb-2"},"Description :",-1),g={class:"text-lg"};function b(e,t,s,o,b,w){return(0,r.uX)(),(0,r.CE)("div",null,[s.isModalOpen?((0,r.uX)(),(0,r.CE)("div",l)):(0,r.Q3)("",!0),s.isModalOpen&&(s.movie||s.series)?((0,r.uX)(),(0,r.CE)("div",n,[(0,r.Lk)("button",{class:"absolute top-4 right-4 text-gray-600 text-xl",onClick:t[0]||(t[0]=(...e)=>w.closeModal&&w.closeModal(...e))},a),(0,r.Lk)("div",c,[(0,r.Lk)("div",u,[s.movie?((0,r.uX)(),(0,r.CE)("img",{key:0,src:"https://image.tmdb.org/t/p/w500/"+s.movie.poster_path,alt:s.movie.title,class:"rounded-md mb-4 mr-10 w-full md:w-60 h-auto object-cover"},null,8,d)):(0,r.Q3)("",!0),(0,r.Lk)("div",h,[(0,r.Lk)("h1",m,(0,i.v_)(w.getTitle),1),(0,r.Lk)("p",p,(0,i.v_)(w.getReleaseYear),1),(0,r.Lk)("div",f,[v,(0,r.Lk)("p",g,(0,i.v_)(w.overview),1)])])])])])):(0,r.Q3)("",!0)])}var w={props:{movie:{type:Object,default:null},series:{type:Object,default:null},isModalOpen:{type:Boolean,required:!0}},computed:{getTitle(){return this.movie?this.movie.title:this.series?this.series.name:""},getReleaseYear(){return this.movie?this.getMovieReleaseYear(this.movie.release_date):this.series?this.getSerieReleaseYear(this.series.first_air_date):""},overview(){return this.movie?this.movie.overview:this.series?this.series.overview:""},genres(){return this.movie?this.movie.genres:this.series?this.series.genres:[]}},methods:{getMovieReleaseYear(e){return e?e.substring(0,4):"Date de sortie inconnue"},getSerieReleaseYear(e){return e?e.substring(0,4):"Date de première diffusion inconnue"},closeModal(){this.$emit("close")}}},S=s(1241);const y=(0,S.A)(w,[["render",b]]);var k=y}},t={};function s(r){var i=t[r];if(void 0!==i)return i.exports;var l=t[r]={exports:{}};return e[r].call(l.exports,l,l.exports,s),l.exports}s.m=e,function(){var e=[];s.O=function(t,r,i,l){if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],i=e[u][1],l=e[u][2];for(var o=!0,a=0;a<r.length;a++)(!1&l||n>=l)&&Object.keys(s.O).every((function(e){return s.O[e](r[a])}))?r.splice(a--,1):(o=!1,l<n&&(n=l));if(o){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[r,i,l]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,r){return s.f[r](e,t),t}),[]))}}(),function(){s.u=function(e){return"js/"+e+"."+{422:"044cc473",616:"49ffa70d",784:"63878334"}[e]+".js"}}(),function(){s.miniCssF=function(e){}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="clone-streaming:";s.l=function(r,i,l,n){if(e[r])e[r].push(i);else{var o,a;if(void 0!==l)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+l){o=d;break}}o||(a=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",t+l),o.src=r),e[r]=[i];var h=function(t,s){o.onerror=o.onload=null,clearTimeout(m);var i=e[r];if(delete e[r],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(e){return e(s)})),t)return t(s)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=h.bind(null,o.onerror),o.onload=h.bind(null,o.onload),a&&document.head.appendChild(o)}}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/Kandian-projet-Vue.js-/"}(),function(){var e={524:0};s.f.j=function(t,r){var i=s.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var l=new Promise((function(s,r){i=e[t]=[s,r]}));r.push(i[2]=l);var n=s.p+s.u(t),o=new Error,a=function(r){if(s.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var l=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+l+": "+n+")",o.name="ChunkLoadError",o.type=l,o.request=n,i[1](o)}};s.l(n,a,"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,l,n=r[0],o=r[1],a=r[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(a)var u=a(s)}for(t&&t(r);c<n.length;c++)l=n[c],s.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return s.O(u)},r=self["webpackChunkclone_streaming"]=self["webpackChunkclone_streaming"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[504],(function(){return s(8448)}));r=s.O(r)})();
//# sourceMappingURL=app.4b6b12f5.js.map