<template>
  <div id="app" class="bg-gradient-to-b from-gray-900 via-blue-900 to-blue-800 text-white">

    <TheHeader />
    
    <router-link v-if="searchResults.length" :to="{ name: 'search-results', params: { query: searchQuery } }">
      Voir les résultats de la recherche
    </router-link>
    <router-view />

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheHeader, TheFooter,
  },

  data() {
    return {
      searchQuery: '',
      searchResults: [],
      searchFilm: [],

    };
  },
  methods: {
    handleSearch(query) {
      this.$router.push({ name: 'search-results', params: { query } });
    },
  }
};
</script>
