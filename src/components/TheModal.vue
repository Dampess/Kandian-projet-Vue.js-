<template>
  <div>
    <!-- Overlay semi-transparent -->
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-10" v-if="isModalOpen"></div>

    <!-- Modal -->
    <div
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white w-10/12 h-96 md:w-2/3 max-w-screen-lg overflow-y-auto rounded-lg shadow-lg text-gray-800"
      v-if="isModalOpen && (movie || series)">
      <button class="absolute top-4 right-4 text-gray-600 text-xl" @click="closeModal">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button> <!-- Bouton de fermeture -->
      <div class="p-8 max-h-full">
        <div class="flex flex-col md:flex-row items-start ">
          <img v-if="movie" :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" :alt="movie.title"
            class="rounded-md mb-4 mr-10 w-full md:w-60 h-auto object-cover">
          <div class="flex flex-col md:flex-grow">
            <h1 class="text-3xl font-semibold mb-2">{{ getTitle }}</h1>
            <p class="text-lg mb-2">{{ getReleaseYear }}</p>
            <!-- <div class="genres">
              <p class="font-semibold">Genres :</p>
              <ul class="pl-5">
                <li v-for="genre in genres" :key="genre.id" class="text-gray-700">{{ genre.name }}</li>
              </ul>
            </div> -->
            <div class="overview mt-6">
              <h2 class="text-2xl font-semibold mb-2">Description :</h2>
              <p class="text-lg">{{ overview }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: null,
    },
    series: {
      type: Object,
      default: null,
    },
    isModalOpen: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    getTitle() {
      return this.movie ? this.movie.title : this.series ? this.series.name : '';
    },
    getReleaseYear() {
      return this.movie ? this.getMovieReleaseYear(this.movie.release_date) : this.series ? this.getSerieReleaseYear(this.series.first_air_date) : '';
    },
    overview() {
      return this.movie ? this.movie.overview : this.series ? this.series.overview : '';
    },
    genres() {
      return this.movie ? this.movie.genres : this.series ? this.series.genres : [];
    }
  },
  methods: {
    getMovieReleaseYear(releaseDate) {
      return releaseDate ? releaseDate.substring(0, 4) : 'Date de sortie inconnue';
    },
    getSerieReleaseYear(releaseDate) {
      return releaseDate ? releaseDate.substring(0, 4) : 'Date de première diffusion inconnue';
    },
    closeModal() {
      this.$emit('close'); // Émettre un événement pour indiquer que le modal doit être fermé
    }
  }
};
</script>
