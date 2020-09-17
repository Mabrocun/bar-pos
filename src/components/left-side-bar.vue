<template>
  <div class="left">
    <div class="left-top">
      <button 
      v-for="tab in tabs"
      :key="tab.id"
      :class="['tab-button', {active: currentTab === tab.id}]"
      @click="currentTab = tab.id"
      >
      {{tab.text}}
      </button>
    </div>
    <component 
    :is="currentTabComponent" 
    ></component>
    
  </div>
</template>

<script>
  import tabCart from './tab-cart'
  import tabWaiting from './tab-waiting'
  // import goodsList from '../../public/goodsList.json'

  export default {
    name:'LeftSideBar',
    props:[''],
    data () {
      return {
        tabs: [{
          id: "Cart",
          text: "点单"
        },
        {
          id: "Waiting",
          text: "挂单"
        }],
        currentTab : "Cart"
      };
    },

    components: {
      tabCart,
      tabWaiting
    },
    methods: {
      
    },
    computed: {
      currentTabComponent: function(){
        return "tab" + this.currentTab
      }

    },

  }

</script>
<style scoped>
  
   .left {
    height: 100%;
    width: auto;
    display: grid;
    grid-template-rows: 7% 1fr;
    background: rgb(64, 84, 109);
    border-radius: 3mm;
  }
  .left-top{
    text-align: left;
  }
  
  .tab-button{ 
    width: 30%;
    height: 100%;
    border-top-right-radius: 20%;
    background: #f0f0f0;
    text-align: center;
  }
  .tab-button:hover{
    background: #e0e0e0;
  }
  .tab-button.active{
    background: rgb(68, 68, 100);
  }
</style>