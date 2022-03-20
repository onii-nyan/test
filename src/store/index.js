import {createStore} from 'vuex'
import VuexPersistence from 'vuex-persist'
import axios from 'axios'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
  })

  const key = "715289b"
  const url = "https://www.omdbapi.com/?apikey="

const store = createStore({
    state: {
         data : [],
         detailData:[]
    },
    mutations: {
        setData(state, data){
            state.data = data
        },
        setDataById(state, detailData){
            state.detailData = detailData
        }
    },
    actions: {
        async getData({commit}, title){
            try {
                const res = await axios.get(url+key+"&s="+title);
                if(!res.data.Search){
                    res.data.Search=[]
                }
                commit("setData", res.data)
            } catch (error) {
                console.log(error);
            }
        },
        async getDataById({commit}, id){
            try {
                const res = await axios.get(url+key+"&i="+id);
                commit("setDataById", res.data)
            } catch (error) {
                console.log(error);
            }
        }
    },
    plugins: [vuexLocal.plugin]
  })

  export default store
  