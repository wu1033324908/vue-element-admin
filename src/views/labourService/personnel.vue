<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 11:05:23
 * @LastEditTime: 2019-08-21 10:15:58
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="personnel">
      <!-- <div style="height:5vw"></div> -->
      <img class="bannerImg" src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/banner_08.png" alt="">
      <div class="personnelWrap">
      <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_20.png" alt="">
      <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_21.png" alt="">
      <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_22.png" alt="">
      <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_23.png" alt="">
      <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_24.png" alt="">
      <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_25.png" alt="">

      </div>
      <page-foot></page-foot>
  </div>
</template>

<script>
import pageFoot from "@/components/pageFoot/pageFoot";
export default {
  name: 'personnel',
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
.personnel{
    width: 100%;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
}
.bannerImg{
  margin-top: 85px;
}
.personnelWrap{
  width: 1380px;
}
img{
    width: 100%;
}
</style>
