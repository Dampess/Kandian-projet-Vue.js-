<template>
  <header class="py-3 px-4 flex justify-between items-center bg-gray-900" :class="{ 'flex flex-col': smallScreen }">
    <div class="flex items-center" :class="{'mr-8':smallScreen}">
      <img src="../assets/logo.png" alt="logo Kàndiǎn" class="w-24">
      <h1 class="text-5xl font-bold ml-2 font-pacifico">Kàndiǎn</h1>
    </div>

    <nav>
      <ul class="flex space-x-4 ">
        <li><router-link to="/" class="hover:text-gray-400 cursor-pointer">Accueil</router-link></li>
        <li><router-link to="/FilmsAffichage" class="hover:text-gray-400 cursor-pointer">Films</router-link></li>
        <li><router-link to="/SeriesAffichage" class="hover:text-gray-400 cursor-pointer">Séries</router-link></li>
      </ul>
    </nav>
    <TheSearchBarre class="w-3/12 mb-4" :class="{ 'w-8/12': smallScreen }" @search="handleSearch" />


  </header>
</template>

<script>
import TheSearchBarre from './TheSearchBarre.vue'
export default {
  name: 'TheHeader',
  components: {
    TheSearchBarre
  },
  data() {
    return {
      searchQuery: '',
      smallScreen: false,
    };
  },
  async mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    handleSearch() {

    },
    submitSearch() {
      this.$router.push({ path: '/search', query: { q: this.searchQuery } });
    },
    checkScreenSize() {
      this.smallScreen = window.innerWidth <= 763
    },
  },
};
</script>
