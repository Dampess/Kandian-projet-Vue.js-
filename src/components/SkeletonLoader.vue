<template>
  <div v-if="loading" class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-90 flex flex-col z-50">
    <div class="w-32 h-32 relative center">
      <div class="personnage">
        <div class="corps"></div>
        <div class="jambe jambe-gauche"></div>
        <div class="jambe jambe-droite"></div>
      </div>
    </div>
    <!-- Ajoutez du texte pour indiquer que le chargement est en cours -->
    <p class="text-gray-600 text-lg mt-4">Chargement en cours...</p>
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
.personnage {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.corps {
  width: 20px;
  height: 30px;
  background-color: #000;
  border-radius: 10px 10px 0 0;
}

.jambe {
  width: 6px;
  height: 20px;
  background-color: #000;
  position: absolute;
  bottom: 0;
}

.jambe-gauche {
  left: -8px;
  transform-origin: bottom;
  animation: marche-gauche 0.5s infinite alternate;
}

.jambe-droite {
  right: -8px;
  transform-origin: bottom;
  animation: marche-droite 0.5s infinite alternate;
}

@keyframes marche-gauche {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-10deg); }
}

@keyframes marche-droite {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(10deg); }
}
</style>
