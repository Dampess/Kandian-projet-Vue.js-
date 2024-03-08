<template>
  <div class="w-8/12 mx-auto overflow-hidden rounded-lg shadow-lg">
    <div class="swiper">
      <swiper :modules="modules" :slides-per-view="1" :slides-per-group="1" class="swiper-container">
        <swiper-slide v-for="(film, index) in films" :key="index">
          <div class="relative w-full rounded-lg mx-auto h-64">
            <!-- Image de fond -->
            <img class="w-full h-full object-cover" :src="`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`" :alt="`Affiche de ${film.title}`">
            
            <!-- Titre du film -->
            <p class="absolute bottom-0 left-0 w-full text-white text-2xl font-bold px-4 py-2 bg-black bg-opacity-50">{{ movie ? film.title : film.name }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>


<script>
// Import Swiper core and required modules
import { Autoplay, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide, } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';


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
  },
  components: {
    Swiper,
    SwiperSlide,
    
  },
  setup() {
    return {
      modules: [ Autoplay, A11y],
    };
  },
};
</script>
