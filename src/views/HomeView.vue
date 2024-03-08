<template>
  <div class="text-white" :class="{ 'w-9/12 mx-auto': isXLargeScreen, 'w-7/12 mx-auto': isXXLargeScreen }">
    <router-view />
    <SkeletonLoader :loading="loading" />
    <TheHero />
    <main class="ml-6 mx-auto mb-6" :class="{ 'ml-0': isSmallScreen }">
      <h2 class="text-3xl font-bold mt-6 mb-6 ml-2">Les Prochaines Sorties</h2>
      <TheCarousel class="text-2xl ml-8 mb-4" :class="{ 'ml-2 mr-6': isSmallScreen }" titreCat="Prochainement En Salle"
        :movie="true" :films="upComingMovies" />
      <h2 class="text-3xl font-bold mt-4 mb-6 ml-2">Les Plus Regardés</h2>
      <TheCarousel class="text-2xl ml-8 mb-4" :class="{ 'ml-2 mr-6': isSmallScreen }" titreCat="Séries Populaires"
        :movie="false" :films="popularSeries" />
      <TheCarousel class="text-2xl ml-8 mb-4" :class="{ 'ml-2 mr-6': isSmallScreen }" titreCat="Films Populaires"
        :movie="true" :films="popularMovies" />
      <ThePub class="w-11/12 mx-auto h-64" :class="{ 'hidden': isSmallScreen }" :films="latestMovies" :movie="true" />
      <h2 class="text-3xl font-bold mt-6 mb-6 ml-2">Les Dernières Sorties</h2>

      <TheCarousel class="text-2xl ml-8 mb-4" :class="{ 'ml-2 mr-6': isSmallScreen }" titreCat="Films Déjà Chez Nous"
        :movie="true" :films="latestMovies" />
      <TheCarousel class="text-2xl ml-8 mb-4" :class="{ 'ml-2 mr-6': isSmallScreen }"
        titreCat="Séries Fraichement Sorties" :movie="false" :films="latestSeries" />
      <h2 class="text-3xl font-bold mt-6 mb-6 ml-2">Les Mieux Notés</h2>
      <TheCarousel class="text-2xl ml-8 mb-4" :class="{ 'ml-2 mr-6': isSmallScreen }" titreCat="Les Films Qui Plaisent"
        :movie="true" :films="latestMovies" />
      <TheCarousel class="text-2xl ml-8 mb-4" :class="{ 'ml-2 mr-6': isSmallScreen }" titreCat="Les Séries Au Top"
        :movie="false" :films="latestSeries" />
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
      isSmallScreen: false,
      isLargeScreen: false,
      isXLargeScreen: false,
      isXXLargeScreen: false,
      loading: true,
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
      const totalPages = 50;

      // Récupérer les films populaires
      let allPopularMovies = [];
      for (let page = 1; page <= totalPages; page++) {
        const responseMovies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr&page=${page}`);
        const movies = await responseMovies.json();
        allPopularMovies = [...allPopularMovies, ...movies.results];
      }
      this.popularMovies = this.filterAndRandomizeResults(allPopularMovies);

      // Récupérer les séries populaires
      let allPopularSeries = [];
      for (let page = 1; page <= totalPages; page++) {
        const responseSeries = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=fr&page=${page}`);
        const series = await responseSeries.json();
        allPopularSeries = [...allPopularSeries, ...series.results];
      }
      this.popularSeries = this.filterAndRandomizeResults(allPopularSeries);

      // Récupérer les derniers films sortis
      let allLatestMovies = [];
      for (let page = 1; page <= totalPages; page++) {
        const responseMovies = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=fr&page=${page}`);
        const movies = await responseMovies.json();
        allLatestMovies = [...allLatestMovies, ...movies.results];
      }
      this.latestMovies = this.filterAndRandomizeResults(allLatestMovies);

      // Récupérer les dernières séries sorties
      let allLatestSeries = [];
      for (let page = 1; page <= totalPages; page++) {
        const responseSeries = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=fr&page=${page}`);
        const series = await responseSeries.json();
        allLatestSeries = [...allLatestSeries, ...series.results];
      }
      this.latestSeries = this.filterAndRandomizeResults(allLatestSeries);

      // Récupérer les films les mieux notés
      let allTopRatedMovies = [];
      for (let page = 1; page <= totalPages; page++) {
        const responseMovies = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=fr&page=${page}`);
        const movies = await responseMovies.json();
        allTopRatedMovies = [...allTopRatedMovies, ...movies.results];
      }
      this.topRatedMovies = this.filterAndRandomizeResults(allTopRatedMovies);

      // Récupérer les séries les mieux notées
      let allTopRatedSeries = [];
      for (let page = 1; page <= totalPages; page++) {
        const responseSeries = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=fr&page=${page}`);
        const series = await responseSeries.json();
        allTopRatedSeries = [...allTopRatedSeries, ...series.results];
      }
      this.topRatedSeries = this.filterAndRandomizeResults(allTopRatedSeries);

      // Récupérer les films bientôt de sortie
      let allUpComingMovies = [];
      for (let page = 1; page <= totalPages; page++) {
        const responseMovies = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=fr&page=${page}`);
        const movies = await responseMovies.json();
        allUpComingMovies = [...allUpComingMovies, ...movies.results];
      }
      this.upComingMovies = this.filterAndRandomizeResults(allUpComingMovies);

      this.loading = false;
    },

    filterAndRandomizeResults(results) {
      // Filtrer pour ne garder que les éléments avec un backdrop et un poster
      const filteredResults = results.filter(item => item.poster_path !== null && item.backdrop_path !== null);

      // Sélectionner aléatoirement 25 éléments
      const randomIndexes = Array.from({ length: 25 }, () => Math.floor(Math.random() * filteredResults.length));
      return randomIndexes.map(index => filteredResults[index]);
    },

    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 763
      this.isLargeScreen = window.innerWidth >= 1600;
      this.isXLargeScreen = window.innerWidth >= 2200;
      this.isXXLargeScreen = window.innerWidth >= 2800;
    },
  },
};
</script>
