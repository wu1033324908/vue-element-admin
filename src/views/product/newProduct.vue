<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 11:05:23
 * @LastEditTime: 2019-08-23 09:24:39
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="newProduct">
      <div class="newProductWrap">
        <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_05.png" alt="">
        <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_06.png" alt="">
        <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_07.png" alt="">
        <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_08.png" alt="">
      </div>
      <page-foot></page-foot>
  </div>
</template>

<script>
import pageFoot from "@/components/pageFoot/pageFoot";
export default {
  name: 'newProduct',
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
  .newProduct{
      width: 100%;
  }
  .newProductWrap{
    /* margin-top: 100px; */
    width: 100%;
  }
  img{
      width: 100%;
  }
</style>
