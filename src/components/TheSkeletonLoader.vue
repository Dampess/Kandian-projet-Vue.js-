<template>
  <div v-if="loading" class="animated-skeleton">
    <!-- Logo et nom du site -->
    <div class="site-info">
      <img src="../assets/logo.png" alt="Logo du site" class="site-logo" />
      <h2 class="site-name text-5x1 font-pacifico">Kàndiǎn</h2>
    </div>
    <!-- Animation de chargement -->
    <div class="skeleton-overlay"></div>
    <div class="sk-chase">
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
.animated-skeleton {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Pour afficher le contenu verticalement centré */
  z-index: 9999; /* Pour être sûr que le skeleton est au-dessus du contenu */
}

.site-info {
  text-align: center;
  margin-bottom: 20px;
}

.site-logo {
  width: 100px; /* Ajustez la taille selon vos besoins */
  height: auto; /* Pour maintenir les proportions */
}

.site-name {
  margin-top: 10px;
  font-size: 20px;
  color: #fff; /* Couleur du texte */
}

.skeleton-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(42, 41, 41); /* Couleur de fond semi-transparente */
  z-index: -1; /* Pour placer le fond derrière l'animation */
}

.sk-chase {
  width: 40px;
  height: 40px;
  position: relative;
  animation: sk-chase 2.5s infinite linear both;
}

.sk-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: sk-chase-dot 2.0s infinite ease-in-out both;
}

.sk-chase-dot:before {
  content: '';
  display: block;
  width: 25%;
  height: 25%;
  background-color: #ccc;
  border-radius: 100%;
  animation: sk-chase-dot-before 2.0s infinite ease-in-out both;
}

.sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
.sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }

@keyframes sk-chase {
  100% { transform: rotate(360deg); }
}

@keyframes sk-chase-dot {
  80%, 100% { transform: rotate(360deg); }
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4);
  } 100%, 0% {
    transform: scale(1.0);
  }
}
</style>
