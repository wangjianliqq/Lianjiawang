<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="div-swap">
        <div class="swap">
            <div class="swap-title">
                <div class="swap-txt">
                    <a href="/">链家网南京站</a>
                    <span class="swap-txt-stp">&nbsp;&gt;&nbsp;</span>
                    <a href="/ershoufang">南京二手房</a>
                    <span class="swap-txt-stp">&nbsp;&gt;&nbsp;</span>
                    <a href="/ershoufang">鼓楼二手房</a>
                    <span class="swap-txt-stp">&nbsp;&gt;&nbsp;&nbsp;当前房源</span>
                </div>
                <div class="swap-btn">
                    <div class="swap-compareBtn">
                        <span class="compareIcon iconfont">&#xe64c;</span>
                        <span class="compareText">加入对比</span>
                    </div>
                    <div class="swap-shareBtn">
                        <span class="shareIcon iconfont">&#xe624;</span>
                        <span class="shareText">分享此房源</span>
                    </div>
                </div>
            </div>
            <div class="swap-overview">
                <div class="overview-img">
                    <div class="overview-bigImg" v-for="(item,index) in bigList" v-bind:key="index" v-show="index===mark">
                        <img v-bind:src="item.imgList2">
                    </div>
                    <div class="overview-smallImg">
                        <div class="smallImg-pre" v-on:click="preImg()">&lt;</div>
                        <ul class="smallImg-list">
                            <li class="smallImg-list-show" v-for="(item,index) in smallList" v-bind:key="index" v-on:click="selectedImg(index)" v-bind:class="{active:index===mark}">
                                <img v-bind:src="item.imgList1">
                            </li>
                        </ul>
                        <div class="smallImg-next" v-on:click="forwardImg()">&gt;</div>
                    </div>
                    <div class="overview-vrHouse">
                        <div class="vrHouse-content">
                            <i class="vrHouse-icon iconfont">&#xe6a9;</i>
                            本房源已支持VR看房，在线看房，省时省力
                        </div>
                        <a class="overview-appLink" href="https://realsee.com/ke/YQG2vMPeoAW9Wrom/e3yNkvGoJzyndurTBhDTRRKZ8EdA6QMn/#lianjia" target="_blank">
                            <span>立即看房</span>
                        </a>
                    </div>
                </div>
                <div class="overview-content">
                    <div class="overview-price">
                        <span class="overview-total">160</span>
                        <span class="overview-unit">万</span>
                        <div class="overview-text">
                            <span class="unitPriceValue">
                                31099
                                <span>元/平米</span>
                            </span>
                        </div>
                        <div class="overview-tax">
                            <span class="overview-taxtext" title="NaN万(仅供参考)">首付及贷款情况请咨询经纪人</span>
                            <i class="overview-taxchat iconfont">&#xe602;</i>
                        </div>
                    </div>
                    <div class="overview-houseInfo">
                        <div class="overview-room">
                            <div class="overview-mainInfo">1室1厅</div>
                            <div class="overview-subInfo">高楼层/共32层</div>
                        </div>
                        <div class="overview-type">
                            <div class="overview-mainInfo" title="北">北</div>
                            <div class="overview-subInfo">平层/精装</div>
                        </div>
                        <div class="overview-area">
                            <div class="overview-mainInfo">51.45平米</div>
                            <div class="overview-subInfo">2005年建/板塔结合</div>
                        </div>
                    </div>
                    <div class="overview-aroundInfo">
                        <div class="overview-communityName">
                            <span class="overview-label">小区名称</span>
                            <a href="" target="_blank" class="overview-inf ">君临国际</a>
                            <a href="" class="overview-map">地图</a>
                        </div>
                        <div class="overview-areaName">
                            <span class="overview-label">所在区域</span>
                        <span class="overview-info">
                            <a href="" target="_blank" class="overview-position">鼓楼</a>
                            &nbsp;
                            <a href="" target="_blank" class="overview-position">华侨路 &nbsp;&nbsp;城中</a>

                        </span>
                            <a href="https://nj.lianjia.com/ditiefang/li110460689s100021164/" class="overview-supplement" title="近1号线珠江路站" style="color:#394043;">近1号线珠江路站</a>
                        </div>
                        <div class="overview-visitTime">
                            <span class="overview-label">看房时间</span>
                            <span class="overview-info">一般下班后可看</span>
                        </div>
                        <div class="overview-houseRecord">
                            <span class="overview-label">链家编号</span>
                            <span class="overview-info">103102133852</span>
                            <a href="javascript:;" class="overview-report">举报</a>
                        </div>
                    </div>
                </div>
                <div class="overview-div">
                    <div class="overview-brokerInfo">
                        <a class="overview-brokerInfo-img">
                            <img class="agent-img" src="./agent3.jpg" alt="">
                        </a>
                        <div class="overview-brokerInfo-text">
                            <a class="brokerName" target="_blank">王晶</a>
                            <span class="broker-tag">链家</span>
                        </div>
                        <div class="overview-brokerInfo-evaluate">
                            <span>评分:5.0/</span>
                            <a href="https://dianpu.lianjia.com/1000000020095590/?w=pingjia">106人评价</a>
                        </div>
                        <div class="overview-brokerInfo-phone">
                            <span>4008950538 &nbsp;转 &nbsp;4733</span>
                            <div class="overview-brokerInfo-weapp">
                                <img src="./contactagent.png">
                                <div>微信扫码拨号</div>
                            </div>
                        </div>
                        <div class="overview-brokerInfo-agent">
                            <i class="iconfont">&#xe602;</i>
                            <span>在线咨询</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import small1 from './home1.jpg'
import small2 from './home2.jpg'
import small3 from './home3.jpg'
import small4 from './home4.jpg'
import small5 from './home5.jpg'
import big1 from './home-big1.jpg'
import big2 from './home-big2.jpg'
import big3 from './home-big3.jpg'
import big4 from './home-big4.jpg'
import big5 from './home-big5.jpg'

export default {
  name: 'HomedetailSwap',
  data () {
    return {
      mark: 0,
      smallList: [
        {imgList1: small1},
        {imgList1: small2},
        {imgList1: small3},
        {imgList1: small4},
        {imgList1: small5}
      ],
      bigList: [
        {imgList2: big1},
        {imgList2: big2},
        {imgList2: big3},
        {imgList2: big4},
        {imgList2: big5}
      ]
    }
  },
  methods: {
    selectedImg (index) {
      this.mark = index
    },
    preImg () {
      if (this.mark === 0) {
        this.mark = 4
      } else {
        this.mark--
      }
    },
    forwardImg () {
      if (this.mark === 4) {
        this.mark = 0
      } else {
        this.mark++
      }
    }
  }
}
</script>

<style>
    .active {
        opacity: 1 !important;
    }
    .overview-div {
        width: 390px;
        height: 221px;
        position: absolute;
        top: 375px;
        right: 0;
    }
    .overview-brokerInfo {
        width: 390px;
        height: 145px;
        margin-left: 50px;
        border-bottom: 1px solid #eeeeee;
        padding-top: 40px;
        padding-bottom: 30px;
    }
    .overview-brokerInfo-img {
        display: inline-block;
        width: 81px;
        height: 108px;
        cursor: pointer;
        position: absolute;
        left: 0;
        margin-left: 50px;
    }
    .agent-img {
        width: 81px;
        height: 108px;
        margin-left: -30px;
        position: absolute;
        top: 15px;
    }
    .overview-brokerInfo-text {
        width: 309px;
        height: 23px;
        line-height: 23px;
        margin: 0;
        padding: 0;
        position: absolute;
        left: 130px;
        top: 55px;
    }
    .brokerName {
        font-size: 18px;
        font-weight: bold;
        color: #394043;
        display: inline-block;
        float: left;
        padding-left: 30px;
    }
    .broker-tag {
        color: #9399a5;
        background-color: #eff0f2;
        height: 17px;
        line-height: 17px;
        text-align: center;
        border-radius: 2px;
        font-size: 11px;
        display: inline-block;
        margin-left: 10px;
        float: left;
        margin-top: 3px;
    }
    .overview-brokerInfo-evaluate {
        width: 309px;
        height: 20px;
        line-height: 20px;
        position: absolute;
        left: 130px;
        top: 85px;
    }
    .overview-brokerInfo-evaluate span {
        display: inline-block;
        float: left;
        padding-left: 30px;
        color: #333333;
        font-size: 12px;
    }
    .overview-brokerInfo-evaluate a {
        display: inline-block;
        float: left;
        padding-left: 5px;
        color: #333333;
        font-size: 12px;
        text-decoration: none;
    }
    .overview-brokerInfo-phone {
        width: 309px;
        height: 20px;
        line-height: 20px;
        position: absolute;
        left: 130px;
        top: 105px;
        text-align: left;
        font-size: 14px;
    }
    .overview-brokerInfo-phone span {
        padding-left: 30px;
        padding-right: 6px;
        color: #EB4D3A;
    }
    .overview-brokerInfo-weapp {
        width: 112px;
        height: 135px;
        display: inline-block;
        position: absolute;
        right: 7px;
        top: -50px;
    }
    .overview-brokerInfo-weapp img {
        width: 110px;
        height: 110px;
        border: 1px solid #F5F5F5;
    }
    .overview-brokerInfo-weapp div {
        color: #999;
        font-size: 10px;
        text-align: center;
        line-height: 18px;
        margin-top: 3px;
    }
    .overview-brokerInfo-agent {
        top: 130px;
        left: 160px;
        position: absolute;
        display: inline-block;
        background: #00AE66;
        border-radius: 2px;
        cursor: pointer;
        height: 32px;
        width: 100px;
    }
    .overview-brokerInfo-agent i {
        width: 16px;
        height: 16px;
        display: inline-block;
        font-size: 14px;
        color: #FFFFFF;
        line-height: 16px;
        margin: 8px 0;
    }
    .overview-brokerInfo-agent span {
        display: inline-block;
        font-size: 14px;
        color: #FFFFFF;
        height: 16px;
        line-height: 16px;
    }
    .div-swap {
        width: 1349px;
        height: 620px;
        margin: 0  auto 30px auto;
        position: relative;
        padding: 0;
    }
    .swap {
        width: 1150px;
        height: 620px;
        margin: 0 auto;
        padding: 0;
        position: relative;
    }
    .swap-title {
        width: 1150px;
        height: 66px;
    }
    .swap-txt {
        width: 550px;
        height: 66px;
        line-height: 66px;
        font-size: 12px;
        position: absolute;
        left: 35px;
        text-align: left;
        padding-left: 10px;
    }
    .swap-txt a {
        color: #aaaaaa;
        text-decoration: none;
    }
    .swap-txt-stp {
        color: #aaaaaa;
    }
    .swap-btn {
        width: 250px;
        height: 66px;
        line-height: 66px;
        font-size: 12px;
        position: absolute;
        right: 0;
    }
    .swap-compareBtn {
        width: 100px;
        height: 66px;
        line-height: 66px;
        font-size: 12px;
        position: absolute;
        left: 0;
        text-align: right;
        cursor: pointer;
    }
    .swap-shareBtn {
        width: 150px;
        height: 66px;
        line-height: 66px;
        font-size: 12px;
        position: absolute;
        right: 0;
        cursor: pointer;
    }
    .compareIcon,.shareIcon {
        color: black;
        font-size: 15px;
    }
    .compareText,.shareText {
        color: black;
    }
    .swap-overview {
        width: 1150px;
        height: 553px;
        background-color: #fff;
        margin: 0 auto;
    }
    .overview-img {
        width: 700px;
        height: 553px;
        left: 35px;
        position: absolute;
        padding-left: 10px;
    }
    .overview-bigImg {
        width: 700px;
        height: 400px;
        cursor: pointer;
        position: absolute;
    }
    .overview-bigImg img {
        width: 700px;
        height: 400px;
        cursor: pointer;
    }
    .overview-smallImg {
        width: 700px;
        height: 95px;
        position: absolute;
        bottom: 60px;
    }
    .smallImg-pre,.smallImg-next {
        position: absolute;
        top: 10px;
        line-height: 82px;
        width: 30px;
        height: 82px;
        text-align: center;
        font-size: 20px;
        color: #cac9c9;
        opacity: .8;
        background-color: #000;
        cursor: pointer;
    }
    .smallImg-pre {
        left: 0;
    }
    .smallImg-next {
        right: 0;
    }
    .smallImg-list {
        width: 640px;
        height: 82px;
        margin: 10px 0 0 31px;
        padding: 0;
    }
    .smallImg-list-show {
        display: inline-block;
        list-style: none;
        float: left;
        width: 120px;
        height: 82px;
        margin-left: 6px;
        cursor: pointer;
        opacity: 0.5;
        position: relative;
    }
    .smallImg-list img {
        background: #f5f5f6;
        width: 100%;
        height: 100%;
    }
    .overview-vrHouse {
        width: 700px;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #f1f1f1;
        margin-top: 0;
        font-size: 14px;
        text-align: left;
        position: absolute;
        bottom: 0;
    }
    .vrHouse-content {
        width: 312px;
        height: 60px;
        position: absolute;
    }
    .vrHouse-icon {
        font-size: 14px;
    }
    .overview-appLink {
        width: 56px;
        height: 35px;
        display: inline-block;
        text-decoration: none;
        float: right;
        font-size: 14px;
        position: absolute;
        right: 0;
        color: #3072f6;
    }
    .overview-appLink span {
        color: #3072f6;
    }
    .overview-content {
        width: 390px;
        height: 334px;
        position: absolute;
        right: 0;
    }
    .overview-price {
        width: 390px;
        height: 50px;
        text-align: left;
        margin-left: 50px;
    }
    .overview-total {
        display: inline-block;
        font-size: 46px;
        line-height: 46px;
        color: #e4393c;
        font-weight: bold;
    }
    .overview-unit {
        display: inline-block;
        margin-top: 9px;
        font-size: 16px;
        color: #e4393c;
        width: 16px;
        height: 16px;
    }
    .overview-text {
        width: 200px;
        height: 43px;
        font-size: 12px;
        margin-left: 15px;
        display: inline-block;
        top: 0;
        position: absolute;
    }
    .unitPriceValue {
        width: 175px;
        height: 20px;
        font-weight: bold;
        color: #394043;
        font-size: 16px;
    }
    .unitPriceValue span {
        color: #394043;
        font-weight: normal;
    }
    .overview-tax {
        width: 200px;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        top: 25px;
        left: 160px;
        position: absolute;
    }
    .overview-taxtext {
        display: inline-block;
        color: #394043;
    }
    .overview-taxchat {
        display: inline-block;
        top: 25px;
        left: 180px;
        font-size: 15px;
    }
    .overview-houseInfo {
        margin-top: 22px;
        width: 100%;
        height: 50px;
        line-height: 40px;
        border-top: 1px solid #eeeeee;
        border-bottom: 1px solid #eeeeee;
        padding: 20px 0;
        display: inline-block;
        margin-left: 50px;
        text-align: left;
    }
    .overview-room,.overview-type,.overview-area {
        width: 30%;
        height: 50px;
        display: inline-block;
        float: left;
        position: relative;
    }
    .overview-mainInfo {
        width: 117px;
        height: 20px;
        line-height: 20px;
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        color: #333333;
    }
    .overview-subInfo {
        width: 117px;
        height: 12px;
        line-height: 12px;
        display: inline-block;
        font-size: 12px;
        color: #394043;
        position: absolute;
        top: 35px;
    }
    .overview-aroundInfo {
        width: 390px;
        height: 130px;
        margin-left: 50px;
        padding: 10px 0 25px 0;
        border-bottom: 1px solid #eeeeee;
        font-size: 14px;
    }
    .overview-communityName,.overview-areaName,.overview-visitTime,.overview-houseRecord {
        width: 390px;
        height: 18px;
        line-height: 18px;
        margin-top: 14px;
    }
    .overview-label {
        color: #aeb0b1;
        margin-right: 24px;
        display: inline-block;
        float: left;
    }
    .overview-inf {
        text-decoration: underline;
        color: #333333;
        display: inline-block;
        float: left;
        margin-right: 24px;
    }
    .overview-map,.overview-position,.overview-supplement,.overview-report {
        color: #333333;
        float: left;
        text-decoration: none;
        margin-right: 12px;
    }
    a:hover {
        text-decoration: underline;
    }
    .overview-info {
        color: #333333;
        display: inline-block;
        float: left;
        margin-right: 7px;
    }

</style>
