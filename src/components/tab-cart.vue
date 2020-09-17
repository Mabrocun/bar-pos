<template>
  <div class="tab-cart">
    <div class="cart-items">
      <div class="product" v-for="item in cart" :key="item.id">
        <p>{{menu[item.id].name}}    ￥{{menu[item.id].price*item.quantity}}</p>
        <button @click="add(item.id)">+</button>
        <span>{{item.quantity}}</span>
        <button @click="reduce(item.id)">-</button>
      </div>
    </div>
    <p class="value">总价：{{totalValue}}</p>
    <div class="buttom">
      <button @click="checkOut">结账</button>
      <button @click="clearAll">清空</button>
    </div>
  </div>
</template>

<script>
  import Menu from '../../public/goodsList.json'
  export default {
    name:'tabChart',
    data () {
      return {
        menu: Menu
      }
    },
    methods:{
      add(id){
        this.$store.commit('addToCart', id)
      },
      reduce(id){
        this.$store.commit('reduceById', id)
      },
      checkOut(){
        this.$store.commit('checkOut', this.totalValue)
      },
      clearAll(){
        this.$store.commit('clearAll')
      }
    },
    computed:{
      cart(){
        return this.$store.state.cart
      },
      totalValue(){
        let totl = 0;
        for(let i of this.cart){
          totl += i.quantity*this.menu[i.id].price
        }
        return totl
      }
    }
  }

</script>
<style scoped>
    .value{
      font-size: 30px;
    }
    .product{
      border: 1px solid black;
      background-color: blanchedalmond;
    }
    .cart-items{
        height: auto;
        width: auto;
        display: grid;
        grid-template-rows: repeat(auto-fit, 60px);
        overflow-y: scroll;
    }
    .tab-cart{
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-rows: 1fr 100px 10%;
        /* background-color: rgb(39, 39, 109, 0.5); */

    }
    .cart-items div{
      display: grid;
      grid-template-columns: 3fr 1fr 1fr 1fr;
      place-items: center;
    }
    .cart-items button{
      height: 35px;
      width: 35px;
  
      border-radius: 50%;
      background-color: aqua;
    }
    .buttom{
    display: grid;
    grid-template-columns: 1fr 1fr;
    }
</style>