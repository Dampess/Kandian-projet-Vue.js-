<template>
  <div class="flex items-center">
    <input type="text" v-model="searchQuery" placeholder="Rechercher"
      class="w-full text-black px-4 py-2 rounded-l-full border border-gray-300 focus:border-gray-800 focus:ring-gray-800 placeholder-gray-500" />
    <button @click="search"
      class=" px-1 py-2 rounded-r-full bg-blue-900 text-white hover:bg-blue-500 focus:outline-none focus:ring focus:ring-gray-200">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M15.56 14.44a6.5 6.5 0 1 1 1.42-1.42l4.3 4.3-1.42 1.42-4.3-4.3zm-3.06 1.06a4.5 4.5 0 1 0-6.36-6.36 4.5 4.5 1 1 1 6.36 6.36z" />
      </svg>



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
