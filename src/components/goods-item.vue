<template>
    <div class="goods-item" @click="addToCart">
        <img :src="goodsPic" alt="goodsPic">
        <p class="name">{{goods.name}}</p>
        <p class="price">￥{{goods.price}}</p>
    </div>
</template>

<script>

    export default {
        name:'',
        props:{
            goods: Object
        },
        methods: {
            addToCart(){
                this.$store.commit('addToCart', this.goods.id)
            }
        },
        computed: {
            goodsPic(){
                return require("../assets/pic/pic"+this.goods.id+".jpg");
            }
        },
    }

</script>
<style scoped>
    .goods-item{
        height: 100%;
        width: 100%;
        border-radius: 10px;
        background-color: rgba(68, 186, 190, 0.774);
        display: grid;
        grid-template:  1fr 1fr / 1fr 1fr;
        place-items:center;
        border: 1px solid black;
        margin: 10px;
        padding: 0;
    }
    img{
        height: 80%;
        width: 80%;
        grid-row-start: 1;
        grid-row-end: 3;
    }
</style>