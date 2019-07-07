<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="e-detail">
        <ul class="sellList">
            <li class="sellContent" v-for="(item,index) of contentList" v-bind:key="index">
                <router-link to="/homedetail" class="sellImg" target="_blank">
                    <img v-bind:src="item.imgUrl" alt="">
                </router-link>
                <div class="sellDetail">
                    <div class="sellTitle">
                        <router-link to="/homedetail" target="_blank">{{item.title}}</router-link>
                    </div>
                    <div class="sellAddress">
                        <span class="iconfont sellIcon">&#xe62e;</span>
                        <a href="">{{item.xiaoqu}}</a>
                        <span class="sellInnerDetail1">{{item.peizhi}}</span>
                    </div>
                    <div class="sellFlood">
                        <span class="iconfont sellIcon">&#xe65e;</span>
                        <span class="sellInnerDetail2">{{item.louceng}}</span>
                        <a href="">{{item.daolu}}</a>
                    </div>
                    <div class="sellAddition">
                        <span class="iconfont sellIcon">&#xe653;</span>
                        <span class="sellInnerDetail2">{{item.guanzhu}}</span>
                    </div>
                    <div class="sellTag">
                        <span class="subway" v-bind:class="{'active1':item.active1}">{{item.subway}}</span>
                        <span class="vr" v-bind:class="{'active2':item.active2}">{{item.vr}}</span>
                        <span class="five" v-bind:class="{'active3':item.active3}">{{item.five}}</span>
                        <span class="haskey" v-bind:class="{'active4':item.active4}">{{item.haskey}}</span>
                    </div>
                    <div class="sellPrice">
                        <div class="totalPrice">
                            <span>{{item.totalPrice}}</span>
                            万
                        </div>
                        <div class="unitPrice">
                            <span>{{item.unitPrice}}</span>
                        </div>
                    </div>
                </div>
            </li>
            <li class="sellContentImg">
                <div class="sellContent-img">
                    <img src="../house3.png" alt="">
                    <i></i>
                </div>
            </li>
        </ul>
        <div class="sellBottom">
            <div class="sellBottom-city">
                <router-link to="/" class="city1">链家网南京站</router-link>
                <span> > </span>
                <router-link to="/ershoufang" class="city1">南京二手房</router-link>
            </div>
            <v-pagination :total="total" :currentPage='current' v-on:pageChange="pageChange" class="sellBottom-fenye"></v-pagination>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import pagination from './Pagination.vue'
import imgUrl1 from '../house1.png'
import imgUrl2 from '../house2.png'
export default {
  name: 'ErshoufangDetail',
  data () {
    return {
      total: 150,
      pagingVolume: 10,
      current: 1,
      contentList: [
        {imgUrl: imgUrl1, title: '珠江路地铁 君临国际 精装修 采光好视野好', xiaoqu: '君临国际', peizhi: '| 1室1厅 | 52.7平米 | 北 | 其他 | 有电梯', louceng: '高楼层(共32层)2005年建板塔结合  -  ', daolu: '华侨路', guanzhu: '191人关注 / 共16次带看 / 一年前发布', subway: '近地铁', vr: 'VR房源', five: '房本满两年', haskey: '随时看房', totalPrice: '160', unitPrice: '单价31099元/平米', active1: false, active2: true, active3: true, active4: false},
        {imgUrl: imgUrl2, title: '新城市广场摩尔特区 1室1厅 156万', xiaoqu: '新城市广场', peizhi: '| 1室1厅 | 51.45平米 | 北 | 精装 | 有电梯', louceng: '中楼层(共12层)2005年建塔楼结合 -  ', daolu: '龙江', guanzhu: '2人关注 / 共0次带看 / 1个月以前发布', subway: '近地铁', vr: 'VR房源', five: '房本满两年', haskey: '随时看房', totalPrice: '156', unitPrice: '单价29602元/平米', active1: true, active2: true, active3: false, active4: false}
      ]
    }
  },
  methods: {
    pageChange: function (currentPage) {
      console.log(currentPage)
    },
    getPageInfo () {
      /// 地址为后台数据地址为后台数据地址为后台数据地址为后台数据地址为后台数据
      axios.get('/api', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(function (res) {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.total = data.total
            this.pagingVolume = data.pagingVolume
            this.current = data.current
            this.contentList = data.contentList /// 前后名字一样
          }
        }) /// 先接受json文件，然后返回函数
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getPageInfo() /// 先写个钩子函数
  },
  components: {
    'v-pagination': pagination
  }
}
</script>

<style>
    .active1,.active2,.active3,.active4 {
        background: #545454 !important;
    }
    .e-detail {
        width: 1085px;
        height: 875px;
        margin: 0 140px;
    }
    .sellList {
        margin: 0;
        padding: 0;
    }
    .sellContent {
        width: 910px;
        height: 185px;
        list-style: none;
        position: relative;
        padding: 25px 0 20px 0;
        border-bottom: 1px solid #f1f1f1;
    }
    .sellImg {
        float: left;
        width: 232px;
        height: 174px;
    }
    .sellDetail {
        position: relative;
        width: 640px;
        height: 174px;
        left: 240px;
    }
    .sellTitle {
        width: 500px;
        height: 33px;
        position: relative;
    }
    .sellTitle a {
        font-weight: bold;
        color: #394043;
        overflow: hidden;
        font-size: 22px;
        text-decoration: none;
        position: absolute;
        display: inline-block;
        width: 500px;
        height: 33px;
        left: 45px;
        text-align: left;
    }
    .sellAddress,.sellFlood,.sellAddition {
        width: 510px;
        height: 25px;
        margin-top: 5px;
        position: relative;
    }
    .sellIcon {
        display: inline-block;
        width: 15px;
        height: 25px;
        line-height: 25px;
        font-size: 14px;
        position: absolute;
        left: 45px;
        color: #92979a;
    }
    .sellAddress a {
        display: inline-block;
        position: absolute;
        left: 65px;
        text-decoration: none;
        font-size: 14px;
        line-height: 25px;
    }
    .sellInnerDetail1 {
        display: inline-block;
        position: absolute;
        left: 130px;
        font-size: 14px;
        line-height: 25px;
    }
    .sellInnerDetail2 {
        display: inline-block;
        position: absolute;
        left: 65px;
        font-size: 14px;
        line-height: 25px;
    }
    .sellFlood a {
        display: inline-block;
        position: absolute;
        left: 290px;
        text-decoration: none;
        font-size: 14px;
        line-height: 25px;
    }
    .sellTag {
        width: 510px;
        height: 30px;
        margin-top: 15px;
        position: relative;
    }
    .subway {
        display: inline-block;
        position: absolute;
        left: 45px;
        color: #849aae;
        font-size: 12px;
        line-height: 30px;
        padding: 0 11px;
        margin-right: 6px;
        background-color: #f4f7f9;
    }
    .vr {
        display: inline-block;
        position: absolute;
        left: 120px;
        color: #638FF9;
        font-size: 12px;
        line-height: 30px;
        padding: 0 11px;
        margin-right: 6px;
        background-color: #f4f7f9;
    }
    .five {
        display: inline-block;
        position: absolute;
        left: 195px;
        color: #39BECD;
        font-size: 12px;
        line-height: 30px;
        padding: 0 11px;
        margin-right: 6px;
        background-color: #e1f5f8;
    }
    .haskey {
        display: inline-block;
        position: absolute;
        left: 290px;
        color: #33BE85;
        font-size: 12px;
        line-height: 30px;
        padding: 0 11px;
        margin-right: 6px;
        background-color: #e1f5ed;
    }
    .sellPrice {
        width: 130px;
        height: 56px;
        position: absolute;
        top: 50px;
        right: -25px;
    }
    .totalPrice {
        width: 130px;
        height: 26px;
        text-align: right;
        font-size: 14px;
        color: #db4c3f;
    }
    .totalPrice span {
        font-weight: bold;
        font-size: 26px;
        margin-right: 5px;
        color: #db4c3f;
    }
    .unitPrice {
        width: 130px;
        height: 20px;
        text-align: right;
        margin-top: 15px;
        font-size: 12px;
        color: #394043;
    }
    .sellContentImg {
        width: 910px;
        height: 140px;
        list-style: none;
        padding: 30px 0 30px 0px;
        border-bottom: 1px solid #f1f1f1;
    }
    .sellBottom {
        width: 910px;
        height: 90px;
        position: relative;
    }
    .sellBottom-city {
        width: 150px;
        height: 20px;
        position: absolute;
        line-height: 20px;
        top: 30px;
    }
    .sellBottom-city .city1 {
        text-decoration: none;
        color: #aaaaaa;
    }
    .sellBottom-city span {
        color: #aaaaaa;
    }
    .sellBottom-fenye {
        width: 445px;
        height: 30px;
        position: absolute;
        line-height: 30px;
        top: 25px;
        right: 0;
    }
    .page-box a {
        text-decoration: none;
        color: #555;
        background-color: #f5f5f6;
        height: 28px;
        padding: 0 12px;
        margin-left: 5px;
        text-align: center;
        line-height: 28px;
        overflow: hidden;
        font-size: 12px;
        font-weight: 700;
        display: inline-block;
    }
    .page-box span {
        color: #555;
        height: 28px;
        padding: 0 10px;
        text-align: center;
        line-height: 28px;
        font-size: 12px;
        font-weight: 700;
        display: inline-block;
        overflow: hidden;
    }
</style>
