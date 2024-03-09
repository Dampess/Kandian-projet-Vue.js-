<template>
  <div class="text-white" :class="{ 'w-9/12 mx-auto': isXLargeScreen, 'w-7/12 mx-auto': isXXLargeScreen }">
    <router-view />
    <TheSkeletonLoader :loading="loading" class="z-50" />
    <TheHero />
    <main class=" mx-auto mb-6">
      <h2 class="text-3xl font-bold mt-6 mb-6 ml-2">Les Prochaines Sorties</h2>
      <TheCarousel class="text-2xl ml-6 mb-4" :class="{ 'ml-2 mr-2': isSmallScreen }" titreCat="Prochainement En Salle"
        :movie="true" :films="upComingMovies" />
      <h2 class="text-3xl font-bold mt-4 mb-6 ml-2">Les Plus Regardés</h2>
      <TheCarousel class="text-2xl ml-6 mb-4" :class="{ 'ml-2 mr-2': isSmallScreen }" titreCat="Séries Populaires"
        :movie="false" :films="popularSeries" />
      <TheCarousel class="text-2xl ml-6 mb-4" :class="{ 'ml-2 mr-2': isSmallScreen }" titreCat="Films Populaires"
        :movie="true" :films="popularMovies" />
      <ThePub class="w-11/12 mx-auto h-64" :class="{ 'hidden': isSmallScreen }" :films="latestMovies" :movie="true" />
      <h2 class="text-3xl font-bold mt-6 mb-6 ml-2">Les Dernières Sorties</h2>

      <TheCarousel class="text-2xl ml-6 mb-4" :class="{ 'ml-2 mr-2': isSmallScreen }" titreCat="Films Déjà Chez Nous"
        :movie="true" :films="latestMovies" />
      <TheCarousel class="text-2xl ml-6 mb-4" :class="{ 'ml-2 mr-2': isSmallScreen }"
        titreCat="Séries Fraichement Sorties" :movie="false" :films="latestSeries" />
      <h2 class="text-3xl font-bold mt-6 mb-6 ml-2">Les Mieux Notés</h2>
      <TheCarousel class="text-2xl ml-6 mb-4" :class="{ 'ml-2 mr-2': isSmallScreen }" titreCat="Les Films Qui Plaisent"
        :movie="true" :films="topRatedMovies" />
      <TheCarousel class="text-2xl ml-6 mb-4" :class="{ 'ml-2 mr-2': isSmallScreen }" titreCat="Les Séries Au Top"
        :movie="false" :films="topRatedSeries" />
    </main>
  </div>
</template>

<script>
import TheCarousel from '../components/TheCarousel.vue';
import ThePub from '../components/ThePub.vue';
import TheHero from '../components/TheHero.vue';
import TheSkeletonLoader from '../components/TheSkeletonLoader.vue'

export default {
  name: 'HomeView',
  components: {
    TheCarousel, ThePub, TheHero, TheSkeletonLoader,
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
    this.checkScreenSize();
    await this.fetchData();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    async fetchData() {
      const apiKey = process.env.VUE_APP_API_KEY;
      const totalPages = 100; 

      await Promise.all([
        this.fetchCategoryData(apiKey, 'movie/popular', this.popularMovies, totalPages),
        this.fetchCategoryData(apiKey, 'tv/popular', this.popularSeries, totalPages),
        this.fetchCategoryData(apiKey, 'movie/now_playing', this.latestMovies, totalPages),
        this.fetchCategoryData(apiKey, 'tv/on_the_air', this.latestSeries, totalPages),
        this.fetchCategoryData(apiKey, 'movie/top_rated', this.topRatedMovies, totalPages),
        this.fetchCategoryData(apiKey, 'tv/top_rated', this.topRatedSeries, totalPages),
        this.fetchCategoryData(apiKey, 'movie/upcoming', this.upComingMovies, totalPages)
      ]);

      this.loading = false;
    },

    async fetchCategoryData(apiKey, category, dataContainer, totalPages) {
      let allCategoryData = [];
      for (let page = 1; page <= totalPages; page++) {
        const response = await fetch(`https://api.themoviedb.org/3/${category}?api_key=${apiKey}&language=fr&adult=false&page=${page}`);
        const categoryData = await response.json();
        allCategoryData = [...allCategoryData, ...categoryData.results];
      }
      dataContainer.splice(0, dataContainer.length, ...this.filterAndRandomizeResults(allCategoryData));
    },

    filterAndRandomizeResults(results) {
      const filteredResults = results.filter(item => item.poster_path !== null && item.backdrop_path !== null);
      const randomIndexes = Array.from({ length: 30 }, () => Math.floor(Math.random() * filteredResults.length));
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
