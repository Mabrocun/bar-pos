<template>
  <div class="goods-list">
      <GoodsItem 
      v-for="item in goodsList" 
      :key="item.id"
      :goods="item"

      ></GoodsItem>

  </div>
</template>

<script>
    import GoodsList from '../../public/goodsList.json'
    import GoodsItem from './goods-item'
    export default {
        name:'GoodsList',
        props:[''],
        data () {
            return {
                goodsList: GoodsList
            };
        },
        methods: {
        },
        components: {
            GoodsItem
        }
    }

</script>
<style scoped>
    .goods-list{
        display: grid;
        overflow: auto;
        /* place-items: center; */
        grid-template: repeat(auto-fit,120px) / repeat(auto-fit, 240px);
        gap: 10px;
    }
</style>