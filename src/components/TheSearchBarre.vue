<template>
  <div class="flex items-center">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Rechercher"
      class="w-full text-black px-4 py-2 rounded-l-full border border-gray-300 focus:border-gray-800 focus:ring-gray-800 placeholder-gray-500"
    />
    <button
      @click="search"
      class="w-5/12 px-1 py-2 rounded-r-full bg-blue-900 text-white hover:bg-blue-500 focus:outline-none focus:ring focus:ring-gray-200"
    >
      Rechercher
    </button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    search() {
      // Redirection vers la page de résultats de recherche avec la query en paramètre
      this.$router.push({ name: 'search-results', query: { q: this.searchQuery } });

    },
  },
};
</script>
