<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div>
        <div class="home-header">
            <div class="header-lianjia">
                <a href="../Home.vue" class="header-logo"></a>
                <div class="header-city">
                    <span class="iconfont">&#xe65e;</span>
                    <span>南京</span>
                </div>
            </div>
            <div class="header-login">
                <span class="iconfont">&#xe62f;</span>
                <span>登录</span>
                <span>立即注册</span>
            </div>
            <div class="header-title">
                <span>连接每个家的故事</span>
            </div>
            <div class="header-option">
                <div class="header-option1">
                    <span class="header-option11" v-for="(item,index) of classifyList" v-bind:key="index" v-bind:class="{option:changeOption==index}" v-on:click="changeOptions(index)">
                        {{item.list}}
                    </span>
                    <div class="header-lead lead1" v-show="changeOption==0"></div>
                    <div class="header-lead lead2" v-show="changeOption==1"></div>
                    <div class="header-lead lead3" v-show="changeOption==2"></div>
                    <div class="header-lead lead4" v-show="changeOption==3"></div>
                    <div class="header-lead lead5" v-show="changeOption==4"></div>
                </div>
                <div class="header-option2" >
                  <input type="text"  v-bind:value="item.content" class="header-option21" v-for="(item,index) of inputList" v-bind:key="index" v-bind:class="{content:showContent==index}" v-show="changeOption==index">
                  <input type="button" value="开始找房" class="header-option22">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      classifyList: [
        {list: '找二手房'},
        {list: '找新房'},
        {list: '找租房'},
        {list: '找小区'},
        {list: '搜问答'}
      ],
      inputList: [
        {content: '请输入区域、商圈或小区名开始找房'},
        {content: '请输入楼盘名称开始找房'},
        {content: '请输入区域、商圈或小区名开始找房'},
        {content: '请输入小区名开始找房'},
        {content: '有问题来搜搜看吧'}
      ],
      changeOption: 0,
      showContent: 0
    }
  },
  methods: {
    changeOptions (index) {
      this.changeOption = index
      this.showContent = index
    }
  }
}
</script>

<style scoped>
  .home-header {
      background: url('../home.jpg') no-repeat ;
      width: 1349px;
      height: 640px;
      background-size:cover;
      margin: 0px;
      padding: 0;
  }
  .header-lianjia {
      width: 400px;
      height: 80px;
      position: relative;
      padding-top: 30px;
  }
  .header-logo {
      background: url('../logo.jpg') no-repeat 0 -10px;
      width: 120px;
      height: 70px;
      position: absolute;
      left: 100px;
  }
  .header-city {
      width: 50px;
      height: 24px;
      position: absolute;
      left: 230px;
      top: 45px;
      padding-top: 2px;
      padding-right: 2px;
      color:white;
      font-size: 14px;
      border-radius: 10px;
      background: rgba(0,0,0,0.25);
  }
  .iconfont {
      margin-right: -2px;
  }
  .header-login {
      font-weight: bold;
      font-size: 14px;
      top: 20px;
      right: 0px;
      position: absolute;
  }
  .header-login span {
      padding: 2px;
  }
  .header-title {
      color: #000000b8;
      font-weight: bold;
      font-size: 50px;
      top: 280px;
      right: 350px;
      position: absolute;
  }
  .header-option {
      width: 800px;
      height: 150px;
      top: 380px;
      right: 155px;
      position: absolute;
  }
  .header-option1 {
      height: 35px;
      margin-left: -135px;
      width: 720px;
      position: relative;
      top: 0;
  }
  .header-option11 {
      color: #8e8e8e;
      font-size: 15px;
      text-decoration: none;
      font-weight: bold;
      padding: 8px;
      margin-right: 8px;
      cursor: pointer;
  }
  .option {
      color: white;
  }
  .content {
      display: block;
  }
  .header-lead {
      width:0;
      height:0;
      border:100px solid #f00283;
      border-color: transparent transparent white transparent;
      border-width: 0 8px 10px 8px;
      position:absolute;
      bottom: 113px;
  }
  .lead1 {
      position: absolute;
      top: 26px;
      margin-left: 200px;
  }
  .lead2 {
      position: absolute;
      top: 26px;
      margin-left: 280px;
  }
  .lead3 {
      position: absolute;
      top: 26px;
      margin-left: 360px;
  }
  .lead4 {
      position: absolute;
      top: 26px;
      margin-left: 430px;
  }
  .lead5 {
      position: absolute;
      top: 26px;
      margin-left: 500px;
  }
  .header-option2 {
      height: 50px;
      position: absolute;
      left: 45px;
  }
  .header-option21 {
      height: 45px;
      width: 600px;
      padding-left: 8px;
      border: none;
      outline: none;
  }
  .header-option22 {
      background-color: #00ae66;
      width: 100px;
      height: 48px;
      -web-kit-appearance:none;
      -moz-appearance: none;
      outline: none;
      border: 0px #00ae66;
      border-radius: 2px;
      margin-left: 245px;
      top: 0px;
      position: absolute;
      cursor: pointer;
  }
 </style>
