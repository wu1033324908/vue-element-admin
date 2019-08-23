<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 11:05:23
 * @LastEditTime: 2019-08-21 10:24:09
 * @LastEditors: Please set LastEditors
 -->
<template>
<!-- 金服个人 -->
  <div class="personage">
      <img class="bannerImg" src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/banner_11.png" alt="">
    <div class="personageWrap">
      <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_34.png" alt="">
      <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_35.png" alt="">
      <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_36.png" alt="">

    </div>
      <page-foot></page-foot>
  </div>
</template>

<script>
import pageFoot from "@/components/pageFoot/pageFoot";
export default {
  name: 'personage',
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
.personage{
    width: 100%;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
}
.bannerImg{
  margin-top: 85px;
}
.personageWrap{
  width: 1380px;
}
img{
    width: 100%;
}
</style>
