<template>
  <div  class="text-white" :class="{ 'w-9/12 mx-auto':isXLargeScreen, 'w-7/12 mx-auto':isXXLargeScreen}" >
    <router-view />
    <SkeletonLoader :loading="loading" />
    <TheHero />
    <main  class="ml-6 mx-auto mb-6" :class="{'ml-2':isSmallScreen}" >
      <h2 class="text-3xl font-bold mt-6 mb-6 ml-2">Les Prochaines Sorties</h2>
      <TheCarousel class="text-2xl ml-8 mb-4" :class="{'ml-4':isSmallScreen}" titreCat="Prochainement En Salle" :movie="true" :films="upComingMovies" />
      <h2 class="text-3xl font-bold mt-4 mb-6 ml-2">Les Plus Regardés</h2>
      <TheCarousel class="text-2xl ml-8 mb-4" :class="{'ml-4':isSmallScreen}" titreCat="Séries Populaires" :movie="false" :films="popularSeries" />
      <TheCarousel class="text-2xl ml-8 mb-4" :class="{'ml-4':isSmallScreen}" titreCat="Films Populaires" :movie="true" :films="popularMovies" />
      <h2 class="text-3xl font-bold mt-6 mb-6 ml-2">Les Dernières Sorties</h2>
      <ThePub class="w-11/12 mx-auto h-64" :class="{'hidden':isSmallScreen}" :films="latestMovies" :movie="true" />
      <TheCarousel class="text-2xl ml-8 mb-4" :class="{'ml-4':isSmallScreen}" titreCat="Films Déjà Chez Nous" :movie="true" :films="latestMovies" />
      <TheCarousel class="text-2xl ml-8 mb-4" :class="{'ml-4':isSmallScreen}" titreCat="Séries Fraichement Sorties" :movie="false" :films="latestSeries" />
      <h2 class="text-3xl font-bold mt-6 mb-6 ml-2">Les Mieux Notés</h2>
      <TheCarousel class="text-2xl ml-8 mb-4" :class="{'ml-4':isSmallScreen}" titreCat="Les Films Qui Plaisent" :movie="true" :films="latestMovies" />
      <TheCarousel class="text-2xl ml-8 mb-4" :class="{'ml-4':isSmallScreen}" titreCat="Les Séries Au Top" :movie="false" :films="latestSeries" />
    </main>
  </div>
</template>

<script>
import TheCarousel from '../components/TheCarousel.vue';
import ThePub from '../components/ThePub.vue';
import TheHero from '../components/TheHero.vue';
import SkeletonLoader from '../components/SkeletonLoader.vue'

export default {
  name: 'HomeView',
  components: {
    TheCarousel, ThePub, TheHero, SkeletonLoader,
  },
  data() {
    return {
      popularMovies: [],
      popularSeries: [],
      latestMovies: [],
      latestSeries: [],
      topRatedMovies: [],
      topRatedSeries: [],
      randMovies: [],
      upComingMovies: [],
      isSmallScreen:false,
      isLargeScreen: false,
      isXLargeScreen: false,
      isXXLargeScreen: false,
      loading:true,
    };
  },
  async mounted() {
    this.fetchData();
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    async fetchData() {
      const apiKey = process.env.VUE_APP_API_KEY;

      // //Récupérer les films populaires
      const responseMovies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr`);
      const films = await responseMovies.json();
      films.results = films.results.filter(item => item.poster_path !== null);
      this.popularMovies = films.results;

      // Récupérer les séries populaires
      const responseSeries = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=fr`);
      const series = await responseSeries.json();
      series.results = series.results.filter(item => item.backdrop_path !== null);
      this.popularSeries = series.results;

      // Récupérer les derniers films sortis
      const responseLatestMovies = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=fr`);
      const latestMovies = await responseLatestMovies.json();
      latestMovies.results = latestMovies.results.filter(item => item.poster_path !== null);
      this.latestMovies = latestMovies.results;
  

      // Récupérer les dernières séries sorties
      const responseLatestSeries = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=fr`);
      const latestSeries = await responseLatestSeries.json();
      latestSeries.results = latestSeries.results.filter(item => item.backdrop_path !== null);
      this.latestSeries = latestSeries.results;

      // Récupérer les films les mieux notés
      const responseTopRatedMovies = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=fr`);
      const topRatedMovies = await responseTopRatedMovies.json();
      topRatedMovies.results = topRatedMovies.results.filter(item => item.poster_path !== null);
      this.topRatedMovies = topRatedMovies.results;
      

      // Récupérer les séries les mieux notées
      const responseTopRatedSeries = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=fr`);
      const topRatedSeries = await responseTopRatedSeries.json();
      topRatedSeries.results = topRatedSeries.results.filter(item => item.backdrop_path !== null);
      this.topRatedSeries = topRatedSeries.results;
      
      

      //Récupérer les films bientôt de sortie
      const responseUpComingMovies = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=fr-FR&page=1`);
      const upComingMovies = await responseUpComingMovies.json();
      upComingMovies.results = upComingMovies.results.filter(item => item.poster_path !== null);
      this.upComingMovies = upComingMovies.results;

      this.loading = false;


    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <=763
      this.isLargeScreen = window.innerWidth >= 1600;
      this.isXLargeScreen = window.innerWidth >=2200;
      this.isXXLargeScreen = window.innerWidth >= 2800;
    },
    
  }
};
</script>

