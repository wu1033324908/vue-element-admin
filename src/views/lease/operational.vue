<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 11:05:23
 * @LastEditTime: 2019-08-21 10:11:33
 * @LastEditors: Please set LastEditors
 -->
<template>
  <!-- 经营 -->
  <div class="sellAfter">
      <!-- <div style="height:5vw;"></div> -->
      <img class="bannerImg" src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/banner_06.png" alt="">
      <div class="sellAfterWrap">
        
      <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_14.png" alt="">
      <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_15.png" alt="">
      <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_16.png" alt="">
      </div>
      <page-foot></page-foot>
  </div>
</template>

<script>
import pageFoot from "@/components/pageFoot/pageFoot";
export default {
  name: 'sellAfter',
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
.sellAfter{
    width: 100%;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
}
.bannerImg{
  margin-top: 85px;
}
.sellAfterWrap{
  width: 1380px;
}
img{
    width: 100%;
}
</style>
