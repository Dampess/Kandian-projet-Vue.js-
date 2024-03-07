<template>
  <div class="mt-6 w-11/12 mx-auto">
    <SkeletonLoader :loading="loading" />
    <div class="flex flex-row">
      <h1 class="text-4xl font-bold mb-6 ml-4">Séries</h1>
      <div class="genre-menu ml-4 mt-4 mb-6 w-90 h-full text-black">
        <select class="bg-gray-200 opacity-50 rounded-l-full rounded-r-full w-8/12 mt-2" id="genreSelect"
          v-model="selectedGenre">
          <option v-for="(genre, index) in genres" :key="index" :value="genre.id">{{ genre.name }}</option>
        </select>
      </div>
    </div>
    <ul class="grid grid-cols-1 gap-4">
      <li v-for="(genre, index) in genres" :key="index" v-show="selectedGenre === genre.id" class="mb-8">
        <h2 class="text-2xl text-gray-900 font-semibold mb-4 ml-8 text-gray-900">{{ genre.name }}</h2>
        <ul class="grid grid-cols-4 gap-2 ml-1 mr-1" :class="{ 'grid-cols-2': isSmallScreen }">
          <li v-for="series in filteredSeries(genre.series)" :key="series.id"
            class="flex flex-col items-center rounded-lg shadow-lg p-2 hover:bg-gray-500 transition duration-300 ease-in-out relative">
            <img :src="'https://image.tmdb.org/t/p/w500/' + series.backdrop_path" :alt="series.name"
              class="series-poster rounded-lg cursor-pointer" @click="showSeriesDetails(series)">
          </li>
        </ul>
      </li>
    </ul>

    <!-- TheModal -->
    <div v-if="selectedSeries" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <TheModal :series="selectedSeries" :isModalOpen="isModalOpen" @close="closeModal" />
      </div>
    </div>
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
      genres: [],
      selectedGenre: null,
      selectedSeries: null,
      isModalOpen: false,
      isSmallScreen: false,
      loading: true,
    };
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  async mounted() {
    this.fetchGenres();
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  methods: {
    async fetchGenres() {
      try {
        const apiKey = process.env.VUE_APP_API_KEY;
        const response = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=fr`);
        const data = await response.json();

        if (data.genres && data.genres.length > 0) {
          for (const genre of data.genres) {
            const seriesResponse = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=fr&with_genres=${genre.id}`);
            const seriesData = await seriesResponse.json();
            this.genres.push({
              id: genre.id,
              name: genre.name,
              series: seriesData.results
            });
          }
          if (this.genres.length > 0) {
            this.selectedGenre = this.genres[0].id;
          }
          this.loading = false;
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des genres et des séries associées :', error);
      }
    },
    showSeriesDetails(series) {
      this.selectedSeries = series;
      this.isModalOpen = true;
    },
    closeModal() {
      this.selectedSeries = null;
      this.isModalOpen = false;
    },
    filteredSeries(seriesList) {
      return seriesList.filter(series => series.backdrop_path);
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 763
    },
  }
};
</script>
