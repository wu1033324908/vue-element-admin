<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 11:05:23
 * @LastEditTime: 2019-08-23 11:01:50
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="pageIndex" id="topIndex">
    <div class="spaceBox"></div>
    <div>
      <carrousel :swiper-slides="swiperSlides"></carrousel>
    </div>
    <!-- 主要业务 -->
    <div class="business">
      <div class="businessWrap">
        <div class="titleBox">
          <p class="title">主要业务</p>
          <p class="subTitle">MAIN BUSINESS</p>
        </div>
        <div class="content">
          <ul>
            <li>
              <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/index/pic_01.png" alt />
            </li>
            <li>
              <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/index/pic_02.png" alt />
            </li>
            <li>
              <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/index/pic_03.png" alt />
            </li>
            <li>
              <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/index/pic_04.png" alt />
            </li>
            <li>
              <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/good/27255bf2e1f3459c92c3e39dea420eb2.png" alt />
            </li>
            <li>
              <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/index/pic_06.png" alt />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="aboutUS" id="about">
      <div class="aboutUSWrap">
        <div class="titleBox">
          <p class="title">关于我们</p>
          <p class="subTitle">ABOUT US</p>
        </div>
        <div class="content">
          <ul>
            <li>
              <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/index/about.png" alt />
            </li>
            <li>
              <p>骏惠惠商，中国首家工程机械运营服务商，专致于服务工程机械客户，整合用户、厂商、配件商、维修商、工程方、资方等行业资源，通过物联网，提供营销服务、售后服务、劳务服务、融资服务、业务撮合、资产变现、运营管理、租赁共享等服务，打通“线上”与“线下”生态圈，促进工程机械产业链升级，打造中国最具优势的工程机械区块链共享平台。</p>
              <br>
              <p>经营范围：从事工程机械的销售、租赁、维护、运营、咨询、软件技术开发、物联网技术服务、通信网络支撑系统技术服务、信息技术服务、软件与辅助设备销售等。</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 合作伙伴 -->
    <div class="partner">
      <div class="partnerWrap">
        <div class="titleBox">
          <p class="title">合作伙伴</p>
          <p class="subTitle">STRATEGIC PARTNER</p>
        </div>
        <div class="content">
          <ul>
            <li>
              <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/index/partner_01.png" alt />
            </li>
            <li>
              <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/index/partner_02.png" alt />
            </li>
            <li>
              <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/index/partner_03.png" alt />
            </li>
            <li>
              <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/index/partner_04.png" alt />
            </li>
            <li>
              <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/index/partner_05.png" alt />
            </li>
            <li>
              <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/index/partner_06.png" alt />
            </li>
            <li>
              <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/index/partner_07.png" alt />
            </li>
            <li>
              <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/index/partner_08.png" alt />
            </li>
            <li>
              <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/index/partner_09.png" alt />
            </li>
            <li>
              <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/index/partner_10.png" alt />
            </li>
            <li>
              <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/index/partner_11.png" alt />
            </li>
            <li>
              <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/index/partner_12.png" alt />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <page-foot></page-foot>
  </div>
</template>

<script>
import indexNav from "@/components/nav/indexNav";
import carrousel from "@/components/swiper/carrousel";
import pageFoot from "@/components/pageFoot/pageFoot";
export default {
  name: 'pageIndex',
  components: {
    indexNav,
    carrousel,
    pageFoot
  },
  data () {
    return {
      swiperSlides: [
        "http://wajueji.oss-cn-shenzhen.aliyuncs.com/category/7741d0d475794ac29188f2dffe7279ab.png?Expires=1881134647&OSSAccessKeyId=LTAI4F3Gt8M6rbEl&Signature=ZAjSzwUvPtPwFwP%2B2moUyej%2BGMs%3D",
        "http://wajueji.oss-cn-shenzhen.aliyuncs.com/category/a0ab60b8f3f34b6980d9cff5e93cce62.png?Expires=1881134676&OSSAccessKeyId=LTAI4F3Gt8M6rbEl&Signature=eEzYKjHRMcFc9NziCbgDsVEL20o%3D"
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.spaceBox {
  height: 80px;
}
.business {
  height: 1212px;
  width: 1920px;
  display: flex;
  justify-content: center;
  &Wrap {
    width: 1620px;
    height: 1212px;
    .titleBox {
      height: 280px !important;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .title {
        height: 80px;
        font-size: 60px;
        font-family: Microsoft YaHei;
        font-weight: 600;
        line-height: 74px;
        color: rgba(57, 119, 254, 1);
        opacity: 1;
      }
      .subTitle {
        height: 48px;
        font-size: 36px;
        font-family: Microsoft YaHei;
        font-weight: 600;
        line-height: 74px;
        color: rgba(51, 51, 51, 1);
        opacity: 1;
      }
    }
    .content {
      height: 912px;
      width: 100%;
      ul {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        li {
          margin: 40px 120px;
          // border: 1px solid red;
          width: 300px;
          height: 353px;
          img {
            width: 300px;
            height: 353px;
          }
        }
      }
    }
  }
}
.aboutUS {
  height: 733px;
  width: 1920px;
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
  &Wrap {
    width: 1380px;
    height: 733px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    .titleBox {
      height: 273px;
      // border: 1px solid red;
      // display: flex;
      // justify-content: center;
      // flex-direction: column;
      // align-items: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .title {
        // width: 240px;
        height: 80px;
        font-size: 60px;
        font-family: Microsoft YaHei;
        font-weight: 600;
        line-height: 74px;
        color: rgba(57, 119, 254, 1);
      }
      .subTitle {
        height: 48px;
        font-size: 36px;
        font-family: Microsoft YaHei;
        font-weight: 600;
        line-height: 74px;
        color: rgba(51, 51, 51, 1);
        opacity: 1;
      }
    }
    .content {
      height: 460px;
      // border: 1px solid red;
      width: 100;
      ul {
        height: 100%;
        width:  1380px;
        display: flex;
        justify-content: flex-start;
        // border: 1px solid red;
        align-items: center;
        li:nth-child(1) {
          width: 640px;
          height: 350px;
          img {
            width: 640px;
            height: 350px;
          }
        }
        li:nth-child(2) {
          // margin: 0 100px;
          margin-left: 60px;
          width: 920px;
          height: 350px;
          img {
            width: 640px;
            height: 350px;
          }
          p {
            font-size:20px;
            font-family:Microsoft YaHei;
            font-weight:400;
            line-height:40px;
          }
        }
      }
    }
  }
}
.partner {
  height: 580px;
  width: 1920px;
  display: flex;
  justify-content: center;

  &Wrap {
    width: 1434px;
    height: 580px;
    display: flex;
    flex-direction: column;
    .titleBox {
      height: 253px;
      // border: 1px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .title {
        // width: 500px;
        height: 80px;
        font-size: 60px;
        font-family: Microsoft YaHei;
        font-weight: 600;
        line-height: 74px;
        color: rgba(57, 119, 254, 1);
        opacity: 1;
      }
      .subTitle {
        height: 48px;
        font-size: 36px;
        font-family: Microsoft YaHei;
        font-weight: 600;
        line-height: 74px;
        color: rgba(51, 51, 51, 1);
        opacity: 1;
      }
    }
    .content {
      height: 307px;
      // border: 1px solid red;
      width: 1434px;
      ul {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        li {
          margin: 18px 25px;
          width: 182px;
          height: 75px;
          border: 1px solid #DEDEDE;
          img {
            width: 182px;
            height: 75px;
          }
        }
      }
    }
  }
}
</style>
