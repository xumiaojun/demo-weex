<template>
  <div @androidback="back">
    <router-view style="width: 100%"></router-view>
  </div>
</template>

<script>
    import util from './util'
  export default {
    methods: {
      back: function () {
        this.$router.back()
      }
    },
      created(){
       util.initIconFont();
      }
  }
</script>
<style>

</style>
