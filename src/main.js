import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = true
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    cart:[],
    waitingList:[]
  },
  mutations:{
    addToCart(state, newId){
      let alreadyHave = state.cart.some(item=>{
         if(item.id == newId){
          item.quantity++
          return true
        }else{
          return false
        }
      })
      if(!alreadyHave){
        Vue.set(state.cart, state.cart.length, {id: newId, quantity: 1})
      }
    },
    reduceById(state, id){
      state.cart.forEach((item, index)=>{
        if(item.id === id) item.quantity--;
        if(item.quantity === 0) state.cart.splice(index, 1)
      })
    },
    checkOut(state, totalValue){
      state.cart.push(totalValue)
      Vue.set(state.waitingList, state.waitingList.length, state.cart)
      state.cart = new Array()
    },
    clearAll(state){
      state.cart = new Array()
    }
  }
})
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
