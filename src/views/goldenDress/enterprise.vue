<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 11:05:23
 * @LastEditTime: 2019-08-19 15:41:22
 * @LastEditors: Please set LastEditors
 -->
<template>
<!-- 金服企业 -->
  <div class="dispatch">
      <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/banner_10.png" alt="">
      <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pic_30.png" alt="">
      <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pic_31.png" alt="">
      <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pic_32.png" alt="">
      <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pic_33.png" alt="">
      <page-foot></page-foot>
  </div>
</template>

<script>
import pageFoot from "@/components/pageFoot/pageFoot";
export default {
  name: 'dispatch',
  components:{
    pageFoot
  },
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .dispatch{
        width: 375px;
    }
    img{
        width: 375px;
    }
</style>
