<template>
    <div v-if="loading" class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-90 z-50">
      <div class="bg-white rounded-lg p-8 shadow-lg">
        <!-- Ajoutez des éléments pour simuler un vieux projecteur de cinéma -->
        <div class="flex justify-center items-center mb-4">
          <div class="h-6 w-6 bg-black rounded-full mr-2"></div>
          <div class="h-6 w-6 bg-black rounded-full"></div>
        </div>
        <div class="relative w-full h-40 bg-gray-300 rounded-lg mb-4">
          <div class="h-2 w-full bg-gray-400 absolute top-1/2 left-0"></div>
          <div class="h-2 w-full bg-gray-400 absolute top-1/2 left-0 transform -translate-y-1"></div>
          <div class="h-2 w-full bg-gray-400 absolute top-1/2 left-0 transform translate-y-1"></div>
        </div>
        <div class="h-4 bg-gray-300 rounded mb-2"></div>
        <div class="h-4 bg-gray-300 rounded mb-2"></div>
        <div class="h-4 bg-gray-300 rounded mb-2"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SkeletonLoader',
    props: {
      loading: {
        type: Boolean,
        required: true
      }
    }
  }
  </script>
  