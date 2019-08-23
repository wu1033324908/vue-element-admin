<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 11:05:23
 * @LastEditTime: 2019-08-21 10:17:58
 * @LastEditors: Please set LastEditors
 -->
<template>
<!-- 外包 -->
  <div class="epiboly">
      <!-- <div style="height:5vw"></div> -->
      <img class="bannerImg" src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/banner_09.png" alt="">
      <div class="epibolyWrap">
        <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_26.png" alt="">
        <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_27.png" alt="">
        <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_28.png" alt="">
        <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_29.png" alt="">
      </div>
      <page-foot></page-foot>
  </div>
</template>

<script>
import pageFoot from "@/components/pageFoot/pageFoot";
export default {
  name: 'epiboly',
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
.epiboly{
    width: 100%;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
}
.bannerImg{
  margin-top: 85px;
}
.epibolyWrap{
  width: 1380px;
}
img{
    width: 100%;
}
</style>
