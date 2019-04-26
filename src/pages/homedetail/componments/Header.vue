<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="header">
        <div class="menu">
            <div class="menu-left">
                <router-link to="/Ershoufang" class="logo"></router-link>
                <ul class="ershoufangList">
                    <li v-for="(item,index) of detailList" v-bind:key="index" v-on:click="changeDetails(index)">
                        <router-link to="/homedetail" class="ershoufangList-a" v-bind:class="{detail:changeDetail==index}">{{item.homeList}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="menu-right">
                <span class="menu-right-type">
                    <span class="type">在售</span>
                </span>
                <span class="i iconfont"><i>&#xe662;</i></span>
                <input type="text" value="请输入关键字搜索" class="input">
                <button class="button"><i class="iconfont">&#xe632;</i></button>
            </div>
            <div class="titleContent">
                <div class="title">
                    <h1 class="main">珠江路地铁 君临国际 精装修 采光好视野好</h1>
                    <div class="sub" >君临国际 珠江路地铁 楼层好 采光好 视野好 精装修拎包住 急售</div>
                </div>
                <div class="btnOption">
                    <div class="action">
                        <button class="followbtn">关注房源</button>
                        <span class="count1">195人关注</span>
                    </div>
                    <div class="action">
                        <button class="add-to-cart">预约看房</button>
                        <span class="count2">15人看过</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomedetailHeader',
  data () {
    return {
      detailList: [
        {homeList: '在售'},
        {homeList: '成交'},
        {homeList: '小区'},
        {homeList: '新房'},
        {homeList: '老房'}
      ],
      changeDetail: 0
    }
  },
  methods: {
    changeDetails (index) {
      this.changeDetail = index
    }
  }
}
</script>

<style>
    .detail {
        color: #00ae66;
    }
    .header {
        width: 1349px;
        height: 180px;
        background-color: #f5f5f6;
        margin: -8px 0 0 0;
    }
    .menu {
        width: 1150px;
        height: 180px;
        margin: 0 auto;
        position: relative;
    }
    .menu-left {
        width: 980px;
        height: 70px;
        padding-top: 10px;
        padding-left: 40px;
        margin: 0;
    }
    .logo {
        background: url('../../home/logo.jpg') no-repeat -2px;
        width: 110px;
        height: 50px;
        display: block;
    }
    .ershoufangList {
        width: 350px;
        height: 30px;
        left: 130px;
        top: 8px;
        position: absolute;
    }
    .ershoufangList li {
        width: 35px;
        height: 30px;
        list-style: none;
        float: left;
        margin-right: 20px;
    }
    .ershoufangList li .ershoufangList-a {
        text-decoration: none;
        font-size: 14px;
    }
    .menu-right {
        position: absolute;
        right: 0;
        width: 300px;
        height: 40px;
        top: 25px;
        float: right;
        background-color: #ebeced;
        border-radius: 2px;
        font-size: 12px;
    }
    .type {
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        float: left;
        color: #36000f;
        cursor: pointer;
    }
    .menu-right-type {
        width: 40px;
        border: 1px solid #ebeced;
        background-color: #ebeced;
        position: absolute;
        left: 0;
        top: 0;
        text-align: center;
        line-height: 34px;
        z-index: 10;
    }
    .i {
        display: inline-block;
        float: left;
        left: 39px;
        top: 10px;
        position: absolute;
        color: #36000f;
        cursor: pointer;
    }
    .i i {
        font-size: 12px;
    }
    .input {
        width: 200px;
        height: 20px;
        line-height: 20px;
        border: none;
        background-color: #ebeced;
        left: 70px;
        top: 9px;
        position: absolute;
        color: #6e6e6e;
    }
    .button {
        width: 30px;
        height: 20px;
        display: inline-block;
        float: right;
        right: 10px;
        top: 9px;
        position: absolute;
        font-size: 18px;
        border: none;
        background-color: #ebeced;
    }
    .titleContent {
        width: 1150px;
        height: 100px;
        margin: 0 auto;
        position: absolute;
        top: 80px;
    }
    .title {
        width: 500px;
        height: 70px;
        position: absolute;
        left: 35px;
    }
    .main {
        line-height: 29px;
        overflow: hidden;
        font-size: 26px;
        color: #333333;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .sub {
        width: 500px;
        height: 20px;
        position: absolute;
        left: -50px;
        font-size: 14px;
        color: #aaaaaa;
        line-height: 1.2;
    }
    .btnOption {
        width: 650px;
        height: 70px;
        position: absolute;
        right: 0;
    }
    .action {
        display: inline-block;
        float: left;
        left: 20px;
        width: 95px;
        height: 70px;
        margin-right: 10px;
    }
    .followbtn {
        width: 95px;
        height: 45px;
        background-color: #fff;
        border: none;
        position: absolute;
        left: 400px;
        top: 15px;
    }
    .add-to-cart {
        width: 95px;
        height: 45px;
        background-color: #00ae66;
        color: #fff;
        border: none;
        position: absolute;
        left: 520px;
        top: 15px;
    }
    .count1 {
        color: #b0b3b4;
        font-size: 12px;
        position: absolute;
        left: 420px;
        top: 65px;
    }
    .count2 {
        color: #b0b3b4;
        font-size: 12px;
        position: absolute;
        left: 540px;
        top: 65px;
    }
</style>
