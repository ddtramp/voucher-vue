<template>
  <div class="top">
      <Number name="Number" :initData="number"></Number>
      <Date name="Date" :initData="date"></Date>
      <Accessory name="Accessory" :initData="accessory"></Accessory>

  </div>
</template>

<script>
  import Number from './Number.vue'
  import Date from './Date.vue'
  import Accessory from './Accessory.vue'
  export default {
      name: 'Top',
      props: ['initData'],
      data () {
          return {
              number: this.initData.number,
              date: this.initData.date,
              accessory: this.initData.accessory
          }
      },
      components: {
          Number,
          Date,
          Accessory
      }
  }
</script>

<style scoped>
  .top { display: flex; width: 930px; height: 66px; min-height: 66px; margin: 0 40px 0 30px; color: red; }
  .top > div { padding: 20px 0; }

  .inputStyle { display: inline-block; border: 1px solid #cdcdcd; padding: 4px 2px; border-radius: 4px 4px; }
  .inputStyleFocused { border-color: #349aef; }

</style>
