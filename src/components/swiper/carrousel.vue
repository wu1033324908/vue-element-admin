<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 17:14:55
 * @LastEditTime: 2019-08-23 10:41:32
 * @LastEditors: Please set LastEditors
 -->
<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"><img :src="slide" alt=""></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      },
      // swiperSlides: []
    };
  },
  props:['swiper-slides'],
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // setInterval(() => {
    //   if (this.swiperSlides.length < 10) {
    //     this.swiperSlides.push(this.swiperSlides.length + 1);
    //   }
    // }, 3000);
  }
};
</script>

<style scoped>
img{
  height: 900px;
  width: 100%;
}
</style>
<style lang="scss">
  .swiper-container{
    .swiper-pagination{
      
      bottom: 40px !important;
      .swiper-pagination-bullet-active{
        background-color: rgba(255, 255, 255, 1) !important;
        opacity: 1 !important;
      }
      .swiper-pagination-bullet{
        // display: block;
        width: 23px !important;
        height: 23px !important;
        border: 3px solid white !important;
        background-color: rgba(255, 255, 255, 0);
        opacity: 1 !important;
        margin-right: 25px;
      }
    }
  }
</style>