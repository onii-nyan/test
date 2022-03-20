<template>
    <div class="container">
  <div class="row" v-if="getDetaildata">
    <div v-if="getDetaildata.Poster == 'N/A'" class="column">
        <img src="../assets/logo.png" v-b-modal.modal-1>
    </div>
    <div v-else class="column">
    <img :src="getDetaildata.Poster" v-b-modal.modal-1/>
    </div>
    <div class="column">
        <h3>{{getDetaildata.Title}}</h3>
        <div>{{getDetaildata.Genre}}</div>
        <div>{{getDetaildata.Released}}</div>
        <div class="plot">{{getDetaildata.Plot}}</div>
        <div class="rate">Rating: {{getDetaildata.imdbRating}}</div>
        <div>{{getDetaildata.Runtime}}</div>
    </div>
  </div>
  <div v-else>Loading...</div>
</div>
<!-- popup -->
<b-modal id="modal-1" >
		<div v-if="getDetaildata.Poster == 'N/A'" class="column">
            <img src="../assets/logo.png">
        </div>
        <div v-else class="column">
            <img :src="getDetaildata.Poster"/>
        </div>
</b-modal>
</template>


<script>
import {mapState, mapActions} from 'vuex'

export default {
    props:["id"],
    computed:{
        ...mapState(['detailData']),
        getDetaildata(){
            return this.detailData
        }
    },
    methods:{
        ...mapActions(['getDataById']),
        dataById(){
            this.getDataById(this.id)
        },
    },
    mounted(){
        this.dataById()
    }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.column {
  float: left;
  width: 50%;
  padding: 10px;
}

.row:after {
  content: "";
  display: table;
  clear: both;

}
.plot{
    padding: 10px;   
    text-align: justify;
    font-size: large;
}
.rate{
    font-weight: bold
}
.container{
    background-color: #eee;
    border: 1px dotted #aaa;

}
img{
    width: auto;
}
</style>