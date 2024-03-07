<template>
  <div class="w-11/12 h-full mx-auto overflow-hidden">
    <div class="w-11/12 mx-auto overflow-hidden">
      <swiper :modules="modules" :slides-per-view="2" :slides-per-group="1" class="flex flex-row " :autoplay="{ delay: 7000 }">
        <swiper-slide v-for="(film, index) in films" :key="index">
          <div class="relative w-full h-64">
            <!-- Image de fond -->
            <img class="mx-auto w-full object-cover opacity-70" :src="`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`" :alt="`Affiche de ${film.title}`">
            
            <!-- Titre du film -->
            <p class="absolute bottom-0 left-0 w-full text-white text-2xl font-bold px-4 py-2 ">{{ movie ? film.title : film.name }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- Pagination -->
    <div class="flex justify-center mt-4 translate-y-20">
      
    </div>
    <!-- Fin de la pagination -->
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
