<template>
    <div class="relative w-full mx-auto">
      <div class="relative" @mouseover="showCaption = true" @mouseleave="showCaption = false">
        <div v-if="movies.length > 0" class="relative w-full overflow-hidden">
          <div
            v-for="(movie, index) in movies"
            :key="index"
            class="hidden h-80 rounded-lg overflow-hidden container"
            :class="{ 'active': index === activeIndex,'h-full':isSmallScreen }"
          >
            <img
              class="w-max rounded-lg object-center aspect-video object-cover"
              :src="'https://image.tmdb.org/t/p/original/' + movie.backdrop_path"
              :alt="movie.title"
            />
            <div
              class="absolute inset-x-0 bottom-0 p-4 bg-black text-white rounded-b-lg opacity-0 transition-opacity duration-300 w-11/12 mx-auto"
              :class="{ 'visible': showCaption,'h-full':isSmallScreen }"
            >
              <h5 class="text-lg mb-2">{{ movie.title }}</h5>
              <p class="text-base mb-0 pb-2">{{ movie.overview }}</p>
            </div>
          </div>
        </div>
        <div :class="{ 'hidden': isSmallScreen }">
          <button
            @click="prevSlide"
            class="absolute flex justify-center items-center top-1/2 transform -translate-y-1/2 z-10 bg-transparent border-none cursor-pointer left-5"
            type="button"
          >
            <span
              class="carousel-control-prev-icon w-8 h-8 rounded-full flex justify-center items-center"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden"></span>
          </button>
          <button
            @click="nextSlide"
            class="absolute flex justify-center items-center top-1/2 transform -translate-y-1/2 z-10 bg-transparent border-none cursor-pointer right-5 rotate-180"
            type="button"
          >
            <span
              class="carousel-control-next-icon w-8 h-8 rounded-full flex justify-center items-center"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden"></span>
          </button>
          <div class="absolute bottom-2 right-16 flex justify-center items-center ml-26">
            <span
              v-for="(movie, index) in movies"
              :key="index"
              class="pagination-dot w-5 h-2 bg-white rounded-full m-0 mx-1 cursor-pointer"
              :class="{ 'active bg-gradient-to-l from-gray-900 via-blue-900 to-blue-800': index === activeIndex }"
              @click="goToSlide(index)"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        movies: [],
        activeIndex: 0,
        showCaption: false,
        autoplayInterval: null,
        autoplayDelay: 10000,
        isSmallScreen: false,
      };
    },
    async mounted() {
      this.checkScreenSize();
      window.addEventListener('resize', this.checkScreenSize);
      this.fetchMovies();
      this.startAutoplay();
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.checkScreenSize);
      this.stopAutoplay();
    },
  
    methods: {
      async fetchMovies() {
        try {
          const apiKey = process.env.VUE_APP_API_KEY;
          const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
          );
          const data = await response.json();
          if (data.results && data.results.length > 0) {
            // Obtenir un tableau aléatoire de 15 indices uniques
            const randomIndexes = Array.from({ length: 15 }, () =>
              Math.floor(Math.random() * data.results.length)
            );
            // Sélectionner les films correspondant aux indices aléatoires
            this.movies = randomIndexes.map(index => data.results[index]);
          }
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      },
  
      nextSlide() {
        this.activeIndex = (this.activeIndex + 1) % this.movies.length;
      },
      prevSlide() {
        this.activeIndex = (this.activeIndex - 1 + this.movies.length) % this.movies.length;
      },
      goToSlide(index) {
        this.activeIndex = index;
      },
      startAutoplay() {
        // Démarre l'autoplay en appelant nextSlide à intervalles réguliers
        this.autoplayInterval = setInterval(() => {
          this.nextSlide();
        }, this.autoplayDelay);
      },
      stopAutoplay() {
        // Arrête l'autoplay en effaçant l'intervalle
        clearInterval(this.autoplayInterval);
      },
      checkScreenSize() {
        this.isSmallScreen = window.innerWidth <= 763;
      },
    },
  };
  </script>
  
  <style scoped>
  .active {
    display: block;
    width: 91.7%;
    margin: auto;
  }
  
  .visible {
    opacity: 0.7;
  }
  
  .carousel-control-prev-icon::before,
  .carousel-control-next-icon::before {
    content: '';
    width: 15px;
    height: 15px;
    border-top: 2px solid #fff;
    border-left: 2px solid #fff;
    transform: rotate(-45deg);
  }
  
  .pagination-dot {
    transition: all 0.3s ease-in-out; 
    
  }
  
  .pagination-dot.active {
    transform: scale(0.9); 
   
  }
  </style>
  