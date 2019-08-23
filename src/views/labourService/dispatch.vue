<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 11:05:23
 * @LastEditTime: 2019-08-21 10:21:23
 * @LastEditors: Please set LastEditors
 -->
<template>
<!-- 代理 -->
  <div class="dispatch">
      <img class="bannerImg" src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/banner_10.png" alt="">
      <div class="dispatchWrap">
        
        <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_30.png" alt="">
        <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_31.png" alt="">
        <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_32.png" alt="">
        <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_33.png" alt="">
      </div>
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
    width: 100%;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
}
.bannerImg{
  margin-top: 85px;
}
.dispatchWrap{
  width: 1380px;
}
img{
    width: 100%;
}
</style>
