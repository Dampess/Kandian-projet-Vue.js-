<template>
  <div v-if="loading" class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-90 z-50">
    <div>
      <!-- Ajoutez une icône de sablier animée -->
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-400 shadow-lg mx-auto"></div>
      <!-- Ajoutez du texte pour indiquer que le chargement est en cours -->
      <p class="text-gray-600 text-lg mt-4">Chargement en cours...</p>
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

<style scoped>
/* Style pour l'animation de rotation */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
/* Appliquer l'animation aux éléments avec la classe "animate-spin" */
.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
