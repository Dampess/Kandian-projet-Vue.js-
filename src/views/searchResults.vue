<template>
  <div>
    <SkeletonLoader :loading="loading" />
    <!-- Contenu principal -->
    <h1 class="text-3xl font-bold mb-8">Résultats de la recherche pour "{{ $route.query.q }}"</h1>
    <ul class="affichage grid grid-cols-5 gap-2 ml-1 mr-1" :class="{'grid-cols-2': isSmallScreen}">
      <li v-for="result in filteredResults" :key="result.id"
        class="flex flex-col items-center p-4 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <div class="w-full text-center">
          <div class="flex justify-center items-center">
            <img :src="'https://image.tmdb.org/t/p/w500/' + result.poster_path" :alt="result.title"
              class="w-full max-h-400 object-cover rounded-md cursor-pointer" @click="showMovieDetails(result)">
          </div>
          <div class="mt-4">
            <h2 class="text-lg font-semibold">{{ result.title }}</h2>
            <p class="text-gray-500">{{ getReleaseYear(result.release_date) }}</p>
          </div>
        </div>
      </li>
    </ul>

    <!-- TheModal -->
    <TheModal :movie="selectedMovie" :isModalOpen="isModalOpen" @close="closeModal" />
  </div>
</template>

<script>
import TheModal from '../components/TheModal.vue';
import SkeletonLoader from '../components/SkeletonLoader.vue'

export default {
  components: {
    TheModal, SkeletonLoader,
  },
  data() {
    return {
      searchResults: [],
      selectedMovie: null,
      isModalOpen: false,
      isSmallScreen: false,
      loading: true,
    };
  },
  async mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  created() {
    this.fetchSearchResults(this.$route.query.q);
  },
  watch: {
    '$route'() {
      this.fetchSearchResults(this.$route.query.q);
    }
  },
  computed: {
    filteredResults() {
      return this.searchResults.filter(result => result.poster_path);
    }
  },
  methods: {
    async fetchSearchResults(query) {
      try {
        const apiKey = process.env.VUE_APP_API_KEY;
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=fr&query=${query}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          this.searchResults = data.results;
        } else {
          this.searchResults = [];
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des résultats de recherche :', error);
        this.searchResults = [];
      }
      this.loading = false;
    },
    getReleaseYear(releaseDate) {
      return releaseDate ? releaseDate.substring(0, 4) : 'Date de sortie inconnue';
    },
    showMovieDetails(movie) {
      this.selectedMovie = movie;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 763;
    },
  },
};
</script>

<style>
@media (max-width: 763px) {
  .affichage {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>