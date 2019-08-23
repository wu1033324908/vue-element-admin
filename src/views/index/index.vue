<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 11:05:23
 * @LastEditTime: 2019-08-20 11:44:12
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="index">
    <div class="navBox" style="z-index: 9999 !important;">
      <index-nav></index-nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import indexNav from "@/components/nav/indexNav";
import carrousel from "@/components/swiper/carrousel";
export default {
  name: "index",
  components: {
    indexNav,
    carrousel
  },
  data() {
    return {
      swiperSlides: [
        "http://wajueji.oss-cn-shenzhen.aliyuncs.com/category/7741d0d475794ac29188f2dffe7279ab.png?Expires=1881134647&OSSAccessKeyId=LTAI4F3Gt8M6rbEl&Signature=ZAjSzwUvPtPwFwP%2B2moUyej%2BGMs%3D",
        "http://wajueji.oss-cn-shenzhen.aliyuncs.com/category/a0ab60b8f3f34b6980d9cff5e93cce62.png?Expires=1881134676&OSSAccessKeyId=LTAI4F3Gt8M6rbEl&Signature=eEzYKjHRMcFc9NziCbgDsVEL20o%3D",
        "http://wajueji.oss-cn-shenzhen.aliyuncs.com/category/a0ab60b8f3f34b6980d9cff5e93cce62.png?Expires=1881134676&OSSAccessKeyId=LTAI4F3Gt8M6rbEl&Signature=eEzYKjHRMcFc9NziCbgDsVEL20o%3D"
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.navBox {
  position: fixed;
}
</style>
