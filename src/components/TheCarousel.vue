<template>
  <div class="mx-auto mt-2">
    <h2 class="mb-4">{{ titreCat }}</h2>
    <swiper :modules="modules" :slidesPerGroup="1" :breakpoints="screenSize" navigation
      :pagination="{ clickable: true }" @swiper="onSwiper" @slideChange="onSlideChange" :loop="false"
      :autoplay="{ delay: 9000 }" class="relative flex flox-row ml-2 h-full">
      <swiper-slide class="mx-1 h-48 relative flex" v-for="(film, index) in filteredFilms" :key="index">
        <img v-if="movie" class="w-72 h-96 object-cover" :class="{'h-44 w-auto': isSmallScreen}"
          :src="`https://image.tmdb.org/t/p/w500/${film.poster_path}`" :alt="`Affiche de ${film.title}`">
        <img v-else class="w-full h-40 object-cover" :class="{'h-28': isSmallScreen}"
          :src="`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`" :alt="`Affiche de ${film.name}`">
        <div class="absolute inset-0 flex justify-center items-center bg-black opacity-0 transition-opacity duration-300 hover:opacity-50"
          @click="showModal(film)">
          <p class="text-white text-xl font-bold cursor-pointer">{{ movie ? film.title : film.name }}</p>
        </div>
      </swiper-slide>
    </swiper>
    <!-- TheModal -->
    <TheModal :movie="selectedFilm" :isModalOpen="isModalOpen" @close="closeModal" />
  </div>
</template>

<script>
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TheModal from '../components/TheModal.vue';

export default {
  props: {
    movie: {
      type: Boolean,
      required: true,
    },
    films: {
      type: Array,
      required: true,
    },
    titreCat: {
      type: String,
      required: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    TheModal,
  },
  data() {
    return {
      selectedFilm: null,
      isModalOpen: false,
      genres: {},
      screenSize:{
    '480': {
        slidesPerView: 3,
        slidesPerGroup: 2
    },
    '768': {
        slidesPerView: 5,
        slidesPerGroup: 4
    },
    '1024': {
        slidesPerView: 5,
        slidesPerGroup: 4
    },
    '1201': {
        slidesPerView: 6,
        slidesPerGroup: 5
    }}
    };
  },
  computed: {
    filteredFilms() {
      if (Array.isArray(this.films)) {
        return this.films.filter(film => film.poster_path !== null);
      } else {
        return [];
      }
    }
  },
  methods: {
    onSlideChange() {},
    onSwiper() {},
    showModal(film) {
      this.selectedFilm = film;
      this.isModalOpen = true;
    },
    closeModal() {
      this.selectedFilm = null;
      this.isModalOpen = false;
    },
    async fetchGenres() {
      try {
        const apiKey = process.env.VUE_APP_API_KEY;
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`);
        const data = await response.json();

        if (data.genres) {
          const genres = data.genres.reduce((acc, genre) => {
            acc[genre.id] = genre.name;
            return acc;
          }, {});

          this.genres = genres;
        } else {
          console.error('Data.genres is undefined or null');
        }
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    },
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, Autoplay, A11y],
    };
  },
  async mounted() {
    this.fetchGenres();
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
};
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: white;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 51%, rgba(0, 0, 0, 0) 100%);
  height: 100%;
  top: 0;
  bottom: 0;
  position: absolute;
  opacity: 0.65;
  width: 3rem;
  height: 25rem;
  margin: auto;
  transform: scale(0.97);
}

.swiper-pagination-bullet {
  display: none;
}

.swiper-button-prev {
  left: 0;
}

.swiper-button-next {
  right: 0;
}

@media screen and (max-width: 768px) {
  .swiper-button-next,
  .swiper-button-prev {
    width: 2rem;
    height: 7rem;
    font-size: 0.8rem;
  }
}
</style>
