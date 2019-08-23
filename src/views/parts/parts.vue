<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 11:05:23
 * @LastEditTime: 2019-08-21 10:07:58
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="parts">
    <div class="partsWrap">
      
      <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_10.png" alt="">
      <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_11.png" alt="">
      <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/common/pic_12.png" alt="">
    </div>
      <page-foot></page-foot>
  </div>
</template>

<script>
import pageFoot from "@/components/pageFoot/pageFoot";
export default {
  name: 'parts',
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
.parts{
        width: 100%;
        display: flex;
        /* justify-content: center; */
        flex-direction: column;
        align-items: center;
    }
    
    .partsWrap{
      margin-top: 100px;
      width: 1380px;
    }
    img{
        width: 100%;
    }
</style>
