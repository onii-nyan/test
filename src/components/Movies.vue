<template>
    <div class="card">
        <router-link :to="{name: 'MovieDetail', params: {id:id}}">
            <span class="title">{{title}} ({{year}})</span>
            <div v-if="image == 'N/A'">
                <img src="../assets/logo.png" height="100"/>
            </div>
            <div v-else>
                <img :src="image" height="200" @click="showImg"/>
            </div>
                <span class="">{{type}}</span>
        </router-link>
    </div>
</template>

<script>
export default {
    props:[
        "image", "title", "year", "type", "id"
    ],
    methods:{
    }

}
</script>
<style scoped>
.card{
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
    margin: 20px 0;
}
.title{
    font-size: larger    
}
</style>