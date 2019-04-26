<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="header">
        <div class="menu">
            <div class="menu-left">
                <router-link to="/" class="logo"></router-link>
                <ul class="ershoufangList">
                    <li v-for="(item,index) of statusList" v-bind:key="index" v-on:click="changeStatuss(index)">
                        <router-link to="/ershoufang" class="ershoufangList-a" v-bind:class="{status:changeStatus==index}">{{item.ershoufangList}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="menu-right">
                <a href="//www.lianjia.com/client/" target="_blank">
                    <i class="iconfont" v-on:mouseover="showApp()" v-on:mouseout="hideApp()" v-bind:style="{color:overColor}">
                        &#xe624;
                        <span v-bind:style="{color:overColor}">"下载链家APP"</span>
                    </i>
                    <span class="layer-qrcode" v-show="!appShow">
                        <img src="//ajax.api.lianjia.com/qr/getDownloadQr?location=menu_app&ljweb_channel_key=ershoufang_search" alt="">
                        <span class="txt">使用链家APP</span>
                        <span class="sub-txt">随时随地查看新上房源</span>
                    </span>
                </a>
            </div>
        </div>
        <div class="search">
            <div class="input">
                <form action="">
                    <input type="text" v-bind:placeholder="item.searchContent" v-for="(item,index) of searchList" v-bind:key="index"  v-bind:class="{changeSearch:changeSearch==index}" v-show="changeSearch==index">
                    <button class="input-right" type="submit">
                        <i class="iconfont">&#xe632;</i>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ErshoufangHeader',
  data () {
    return {
      statusList: [
        {ershoufangList: '在售'},
        {ershoufangList: '成交'},
        {ershoufangList: '小区'},
        {ershoufangList: '新房'},
        {ershoufangList: '老房'}
      ],
      searchList: [
        {searchContent: '请输入区域、商圈或小区名开始找房'},
        {searchContent: '请输入商圈或小区名开始找房'},
        {searchContent: '请输入小区名开始找房'},
        {searchContent: '请输入区域、商圈或小区名查询房价'},
        {searchContent: '请输入区域、商圈或小区名查询老房子'}
      ],
      changeStatus: 0,
      changeSearch: 0,
      appShow: true,
      overColor: ''
    }
  },
  methods: {
    changeStatuss (index) {
      this.changeStatus = index
      this.changeSearch = index
    },
    showApp () {
      this.appShow = false
      this.overColor = '#00ae66'
    },
    hideApp () {
      this.appShow = true
      this.overColor = ''
    }
  }

}
</script>

<style>
    .status {
        color: #00ae66;
    }
    .header {
        width: 1349px;
        height: 150px;
        background-color: #f5f5f6;
        margin: -8px 0 0 0;
    }
    .menu {
        width: 1150px;
        height: 80px;
        margin: 0 auto;
        position: relative;
    }
    .menu-left {
        width: 980px;
        height: 80px;
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
        width: 170px;
        height: 235px;
        position: absolute;
        right: 0;
        top: 20px;
        cursor: pointer;
    }
    .menu-right a {
        display: inline-block;
        width: 170px;
        height: 235px;
        position: absolute;
        right: 0;
        top: 0;
        text-decoration: none;
    }
    .layer-qrcode {
        position: absolute;
        display: inline-block;
        left: 0;
        top: 25px;
        width: 140px;
        height: 180px;
        padding: 15px;
        background-color: #fff;
        box-shadow: 0 0 6px 0 rgba(13,4,9,0.2);
        line-height: 1;
        text-align: center;
        font-size: 12px;
        cursor: pointer;
        z-index: 1;
    }
    .layer-qrcode img {
        cursor: pointer;
        position: absolute;
        left: 15px;
        top: 10px;
        width: 120px;
        padding: 10px;
    }
    .layer-qrcode .txt{
        position: absolute;
        left: 50px;
        bottom: 40px;
        font-weight: bold;
        color: #394043;
    }
    .layer-qrcode .sub-txt {
        position: absolute;
        left: 25px;
        bottom: 20px;
        font-size: 12px;
        color: #999;
    }
    .search {
        width: 1150px;
        height: 70px;
        position: absolute;
        margin: 0 0 0 140px;
    }
    .input {
        width: 700px;
        height: 51px;
    }
    .input input {
        width: 700px;
        height: 45px;
        margin: 0;
        border: none;
        outline:none;
        padding-left: 15px;
    }
    .input-right {
        width: 50px;
        height: 47px;
        position: absolute;
        left: 700px;
        top: 0px;
        background-color: white;
        border: none;
        outline:none;
    }
    .iconfont {
        font-size: 18px;
    }
</style>
