<template>
  <div class="tab-waiting">
     <div class="order" v-for="order in waitingList" :key="order">
       <p>总价：￥{{order[order.length-1]}}</p>
       <p v-for="product in productInfo(order)" :key="product.id">
          {{menu[product.id].name}} 
           x{{product.quantity}} 
           ￥{{menu[product.id].price*product.quantity}}
       </p>
       

     </div>
  </div>
</template>

<script>
  import Menu from '../../public/goodsList.json'
  export default {
    name:'tabWaiting',
    data () {
      return {
        menu: Menu
      };
    },
    methods:{
      productInfo(arr){
        return arr.slice(0,arr.length-1)
      }
    },
    computed:{
      waitingList(){
        return this.$store.state.waitingList.slice().reverse()
      }
    }
  }

</script>
<style scoped>
  .tab-waiting{
    height: auto;
    width: auto;
    overflow-y: scroll;
    background-color: rgb(39, 39, 109, 0.5);
  }
  .order{
    border: 1px;
    border-color: white;
    background-color: teal;
  }
</style>