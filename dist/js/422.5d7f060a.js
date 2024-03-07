"use strict";(self["webpackChunkclone_streaming"]=self["webpackChunkclone_streaming"]||[]).push([[422],{3422:function(e,s,t){t.r(s),t.d(s,{default:function(){return k}});var l=t(6768),r=t(4232);const o={class:"text-3xl font-bold mb-8"},i={class:"w-full text-center"},a={class:"flex justify-center items-center"},n=["src","alt","onClick"],c={class:"mt-4"},d={class:"text-lg font-semibold"},h={class:"text-gray-500"};function u(e,s,t,u,m,g){const f=(0,l.g2)("SkeletonLoader"),p=(0,l.g2)("TheModal");return(0,l.uX)(),(0,l.CE)("div",null,[(0,l.bF)(f,{loading:m.loading},null,8,["loading"]),(0,l.Lk)("h1",o,'Résultats de la recherche pour "'+(0,r.v_)(e.$route.query.q)+'"',1),(0,l.Lk)("ul",{class:(0,r.C4)(["grid grid-cols-5 gap-2 ml-1 mr-1",{"grid-cols-2":m.isSmallScreen}])},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(m.searchResults,(e=>((0,l.uX)(),(0,l.CE)("li",{key:e.id,class:"flex flex-col items-center p-4 rounded-md shadow-md transition duration-300 hover:shadow-lg"},[(0,l.Lk)("div",i,[(0,l.Lk)("div",a,[(0,l.Lk)("img",{src:"https://image.tmdb.org/t/p/w500/"+e.poster_path,alt:e.title,class:"w-full max-h-400 object-cover rounded-md cursor-pointer",onClick:s=>g.showMovieDetails(e)},null,8,n)]),(0,l.Lk)("div",c,[(0,l.Lk)("h2",d,(0,r.v_)(e.title),1),(0,l.Lk)("p",h,(0,r.v_)(g.getReleaseYear(e.release_date)),1)])])])))),128))],2),(0,l.bF)(p,{movie:m.selectedMovie,isModalOpen:m.isModalOpen,onClose:g.closeModal},null,8,["movie","isModalOpen","onClose"])])}var m=t(4534),g=t(8808),f={components:{TheModal:m.A,SkeletonLoader:g.A},data(){return{searchResults:[],selectedMovie:null,isModalOpen:!1,isSmallScreen:!1,loading:!0}},async mounted(){this.checkScreenSize(),window.addEventListener("resize",this.checkScreenSize)},beforeUnmount(){window.removeEventListener("resize",this.checkScreenSize)},created(){this.fetchSearchResults(this.$route.query.q)},watch:{$route(){this.fetchSearchResults(this.$route.query.q)}},methods:{async fetchSearchResults(e){try{const s="3a18f97e67628cff439f21ac383dd600",t=`https://api.themoviedb.org/3/search/movie?api_key=${s}&language=fr&query=${e}`,l=await fetch(t),r=await l.json();r.results&&r.results.length>0?this.searchResults=r.results:this.searchResults=[]}catch(s){console.error("Erreur lors de la récupération des résultats de recherche :",s),this.searchResults=[]}this.loading=!1},getReleaseYear(e){return e?e.substring(0,4):"Date de sortie inconnue"},showMovieDetails(e){this.selectedMovie=e,this.isModalOpen=!0},closeModal(){this.isModalOpen=!1},checkScreenSize(){this.isSmallScreen=window.innerWidth<=763}}},p=t(1241);const v=(0,p.A)(f,[["render",u]]);var k=v}}]);
//# sourceMappingURL=422.5d7f060a.js.map