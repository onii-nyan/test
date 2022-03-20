<template>
    <div class="justify-center">
        <input type="text" v-model="search" placeholder="type to search "/>
        <button @click="listMovies">search</button>
    </div>

    <div v-if="data.Search.length" style="text-align: -webkit-center">
            <Movies v-for="movie in subArr" 
                :key="movie.imdbID"
                :id="movie.imdbID"
                :title="movie.Title"
                :year="movie.Year"
                :image="movie.Poster"
                :type="movie.Type"
            />
        </div>
        <div v-else>
            Please enter keyword, min 3 character
        </div>
</template>

<script>
import Movies from './Movies.vue'
import {mapState, mapActions} from 'vuex'

export default {
    data(){
        return{
            search:'',
            loadedData:[],
            limit: 5,
        }
    },
    created () {
    window.addEventListener('scroll', this.handleScroll);
  },
    components: {
        Movies
    },
    computed:{
        ...mapState(['data']),
        subArr(){
            return (this.data.Search||[]).slice(0, this.limit)
        },
        
    },
    methods:{
        ...mapActions(['getData']),
        listMovies(){
            this.getData(this.search)
        },
        load5Data(){
            this.loadedData = this.targetData.slice(this.offset, this.offset+5)
            this.offset+=5
        },
        loadMore(){
            this.limit+=5
        },
        handleScroll () {
            if((window.scrollY -200) > window.innerHeight) {
                this.loadMore()
            }
        }
    },
    mounted(){
        this.listMovies()
    },
    unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
}
</script>
<style scoped>

</style>
