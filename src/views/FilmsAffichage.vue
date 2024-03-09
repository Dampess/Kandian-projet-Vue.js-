<template>
    <div class="mt-6 w-11/12 mx-auto">
        <SkeletonLoader :loading="loading" />
        <div class="flex flex-row">
            <h1 class="text-4xl font-bold mb-6 ml-4">Films</h1>
            <div class="genre-menu ml-4 mt-4 mb-6 w-90 h-full text-black">
                <select class="bg-gray-200 opacity-50 rounded-l-full rounded-r-full w-8/12 mt-2" id="genreSelect"
                    v-model="selectedGenre">
                    <option v-for="(genre, index) in genres" :key="index" :value="genre.id">{{ genre.name }}</option>
                </select>
            </div>
        </div>
        <ul class="grid grid-cols-1 gap-4">
            <li v-for="(genre, index) in genres" :key="index" v-show="selectedGenre === genre.id" class="mb-8">
                <h2 class="text-2xl text-gray-900 font-semibold mb-4 ml-8">{{ genre.name }}</h2>
                <ul class="grid grid-cols-4 gap-2 ml-1 mr-1" :class="{ 'grid-cols-2': isSmallScreen }">
                    <li v-for="movie in filteredMovies(genre.movies)" :key="movie.id"
                        class="flex flex-col items-center rounded-lg shadow-lg p-2 hover:bg-gray-500 transition duration-300 ease-in-out relative">
                        <img v-if="movie.backdrop_path" :src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path"
                            :alt="movie.title" class="movie-poster rounded-lg cursor-pointer" @click="showModal(movie)">
                        <div v-else class="no-backdrop-placeholder">No Backdrop Image Available</div>
                    </li>
                </ul>
            </li>
        </ul>
        <!-- TheModal -->
        <TheModal :movie="selectedMovie" :isModalOpen="isModalOpen" @close="closeModal" />
    </div>
</template>

<script>
import TheModal from '../components/TheModal.vue';
import SkeletonLoader from '../components/SkeletonLoader.vue'

export default {
    components: {
        TheModal, SkeletonLoader
    },
    data() {
        return {
            genres: [],
            selectedGenre: null,
            isModalOpen: false,
            selectedMovie: null,
            isSmallScreen: false,
            loading: true,
        };
    },
    async mounted() {
        this.fetchGenres();
        this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkScreenSize);
    },
    methods: {
        async fetchGenres() {
            try {
                const apiKey = process.env.VUE_APP_API_KEY;
                const genresResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=fr`);
                const genresData = await genresResponse.json();

                // Vérifiez si la réponse contient des genres
                if (genresData.genres && genresData.genres.length > 0) {
                    // Pour chaque genre, récupérez les films associés
                    for (const genre of genresData.genres) {
                        const genreMovies = [];
                        // Récupérer les 50 premières pages de films pour chaque genre
                        for (let page = 1; page <= 10; page++) {
                            const moviesResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr&with_genres=${genre.id}&page=${page}`);
                            const moviesData = await moviesResponse.json();
                            // Si aucune donnée n'est retournée pour la page actuelle, sortez de la boucle
                            if (!moviesData.results || moviesData.results.length === 0) break;
                            // Filtrer les films qui ont un backdrop_path
                            const filteredMovies = moviesData.results.filter(movie => movie.backdrop_path !== null);
                            // Ajoutez les films filtrés de la page actuelle à la liste de films du genre
                            genreMovies.push(...filteredMovies);
                        }
                        // Ajoutez le genre avec la liste complète de films récupérée
                        this.genres.push({
                            id: genre.id,
                            name: genre.name,
                            movies: genreMovies
                        });
                    }
                    // Sélectionner le premier genre par défaut
                    if (this.genres.length > 0) {
                        this.selectedGenre = this.genres[0].id;
                    }
                    this.loading = false;
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des genres et des films associés :', error);
            }
        },

        showModal(movie) {
            this.selectedMovie = movie;
            this.isModalOpen = true;
        },
        closeModal() {
            this.selectedMovie = null;
            this.isModalOpen = false;
        },
        filteredMovies(movies) {
            return movies.filter(movie => movie.backdrop_path !== null);
        },
        checkScreenSize() {
            this.isSmallScreen = window.innerWidth <= 763
        },
    }
};
</script>
