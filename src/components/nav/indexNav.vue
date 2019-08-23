<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 11:05:23
 * @LastEditTime: 2019-08-22 15:52:38
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="indexNav" @mouseleave="isShowNavItem = -1">
    <div class="indexNavWrap">
      <div class="left">
        <div class="logo">
          <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/index/

logo_01.png" alt />
        </div>
        <div class="logoDesc">
          <img src="http://wajueji.oss-cn-shenzhen.aliyuncs.com/homePage/pc/index/

slogan.png" alt />
        </div>
      </div>
      <div class="right">
        <ul class="navBox">
          <li
            :class="['navBoxItem',{'activeLi':cliakActiveLi == item.id}]"
            v-for="item in navData"
            :key="item.id"
            @mouseenter="isShowNavItem = item.id"
            @click="returnToAbout(item.id)"
          >
            <span :class="[{'colorfff':cliakActiveLi == item.id}]"><router-link :to="item.to">{{item.name}}</router-link></span>
            <i
              :class="['jh-icon',{'jh-icon-art':item.hasChildren},{'jh-icon-art-active':cliakActiveLi == item.id && item.hasChildren}]"
            ></i>
            <div class="navItem" v-show="isShowNavItem == item.id && item.hasChildren">
              <ul @mouseleave="isShowNavItem = -1">
                <li
                  @click="isShowNavItemchildren = childrenItem.id"
                  :class="[{'activeMouenter':isShowNavItemchildren == childrenItem.id}]"
                  v-for="childrenItem in item.children"
                  :key="childrenItem.id"
                >
                  <router-link :to="childrenItem.to">{{childrenItem.name}}</router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexNav",
  data() {
    return {
      screenWidth: undefined,
      screenHeight:undefined,
      cliakActiveLi: 1,
      isShowNavItem: 1,
      isShowNavItemchildren: -1,
      navData: [
        { name: "网站首页", id: 1 ,to:'/'},
        {
          name: "骏惠机械",
          id: 2,
          hasChildren: true,
          to:'/newProduct',
          children: [{ name: "新机", id: 10 ,to:'/newProduct'}, { name: "二手机", id: 11 ,to:'/oldProduct' }]
        },
        {
          name: "骏惠售后",
          id: 3,
          hasChildren: true,
          to:'/parts',
          children: [{ name: "配件", id: 12 ,to:'/parts'}, { name: "售后", id: 13 ,to:'/sellAfter' }]
        },
        {
          name: "骏惠租赁",
          id: 4,
          hasChildren: true,
          to:'/operational',
          children: [
            { name: "经营性租赁", id: 14 ,to:'/operational' },
            { name: "融资性租赁", id: 15 ,to:'/financing' }
          ]
        },
        {
          name: "骏惠劳务",
          id: 5,
          hasChildren: true,
          to:'/personnel',
          children: [
            { name: "人事代理", id: 16 ,to:'/personnel' },
            { name: "劳务外包", id: 17 ,to:'/epiboly' },
            { name: "劳务派遣", id: 18 ,to:'/dispatch' }
          ]
        },
        {
          name: "骏惠金服",
          id: 6,
          hasChildren: true,
          to:'/goldenDress/personage',
          children: [{ name: "小额贷款", id: 19 ,to:'/goldenDress/personage' }]
        },
        { name: "关于我们", id: 7 ,to:'/pageIndex'}
      ]
    };
  },
  watch:{
    $route(to,from){
      if(to.path == '/pageIndex'){
        if(to.params.goAbout){
          setTimeout(() => {
            const returnEle = document.querySelector("#about");
            if (!!returnEle) {
              returnEle.scrollIntoView(true);
            }
          }, 600);
        }
      }
    }
  },
  mounted() {
    this.showLiActive()
    this.onResize()
    // this.monitorResize()
  },
  methods: {
    showLiActive() {
      for(let i in this.navData){
        
        if(this.navData[i].children && this.navData[i].children.length > 0){
          for(let j in this.navData[i].children){
            if(window.location.hash.indexOf(this.navData[i].children[j].to)>0 && this.navData[i].id != 1){
              this.cliakActiveLi = this.navData[i].id
              this.isShowNavItemchildren = this.navData[i].children[j].id
            }
          }
        }else{
          if(window.location.hash.indexOf(this.navData[i].to)>0){
            this.cliakActiveLi = this.navData[i].id==7?1:this.navData[i].id
          }
        }
      }
    },
    returnToAbout(id){
      this.cliakActiveLi = id
      if(id == 7){
        this.$router.push({ name: 'pageIndex', params: { goAbout: true }})

        setTimeout(() => {
            const returnEle = document.querySelector("#about");
            if (!!returnEle) {
              returnEle.scrollIntoView(true);
            }
          }, 600);
      }
      if(id == 1){
        this.$router.push({ name: 'pageIndex', params: { goAbout: false }})

        setTimeout(() => {
            const returnEle = document.querySelector("#topIndex");
            if (!!returnEle) {
              returnEle.scrollIntoView(true);
            }
          }, 600);
      }
    },
    onResize(){
      this.screenWidth = document.body.clientWidth;
      this.screenHeight = document.body.clientHeight;
      window.onResize = () => {
        return (() => {
          this.screenWidth = document.body.clientWidth;
          this.screenHeight = document.body.clientHeight;
        })();
      };
      this.monitorResize()
    },
    monitorResize(){
      console.log(this.screenWidth+ ':' + this.screenHeight);
      if(this.screenWidth <= 640){
        window.location.href = 'http://m.jhhscm.cn'
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
$themeColor: #3977fe;
.colorfff{
  color: #FFF;
  a{
    color: #FFF !important;
  }
}
a{
  display: inline-block;
  height: 100%;
}
.navItem a{
  display: inline-block;
  height: 100%;
  width: 100%;
}
// .router-link-active{
//   color: #fff;
// }
.jh-icon-art {
  display: inline-block;
  min-width: 10px;
  min-height: 10px;
  background: url("http://wajueji.oss-cn-shenzhen.aliyuncs.com/good/39a938881d7446daa8ace99ba5e2c48e.png") no-repeat center;
  position: relative;
  top: -0.1vw;
  z-index: 9999999;
}
.jh-icon-art-active {
  display: inline-block;
  min-width: 10px;
  min-height: 10px;
  background: url("http://wajueji.oss-cn-shenzhen.aliyuncs.com/good/f47f1eb9ab8c4ebf9d8f4f13f008c542.png") no-repeat center;
  position: relative;
  top: -0.1vw;
  z-index: 9999999;
}
.indexNav {
  // z-index: 9999;
  background-color: white;
  // position: fixed;
  width: 1920px;
  height: 80px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
  &Wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1620px;
    height: 80px;
    .left {
      // border: 1px solid red;
      height: 80px;
      width: 685px;
      display: flex;
      align-items: center;
      .logo {
        height: 46px;
        width: 165px;
        img {
          width: 165px;
          height: 46px;
        }
      }
      .logoDesc {
        margin-left: 30px;
        width: 340px;
        height: 46px;
        img {
          width: 340px;
          height: 46px;
        }
      }
    }
    .right {
      height: 80px;
      width: 935px;
      .navBox {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        width: 100%;
        .navBoxItem {
          width: 120px;
          height: 46px;
          border-radius: 23px;
          text-align: center;
          line-height: 46px;
          font-size: 18px;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          cursor: pointer;
          a{font-weight: 400;
            color: rgba(0, 0, 0, 1);
          }
          .navItem {
            margin-top: 16px;
            background-color: white;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 150px;
            ul {
              width: 150px;
              li {
                color: rgba(102, 102, 102, 1);
                width: 150px;
                height: 50px;
                border-bottom: 1px solid #ccc;
                font-size: 18px;
                font-weight: 400;
              }
              .activeMouenter {
                a{
                  color: $themeColor;
                }
              }
            }
          }
        }
        .noActiveLi {
          width: 72px;
          height: 24px;
          font-size: 18px;
          font-weight: 400;
          line-height: 74px;
          color: rgba(102, 102, 102, 1);
          
        }
        .activeLi {
          width: 120px;
          height: 46px;
          background: $themeColor;
          opacity: 1;
          border-radius: 23px;
          color: white;
        }
      }
    }
  }
}
</style>
