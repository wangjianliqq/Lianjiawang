<template>
    <div class="basicInformation">
        <h2>
            <div class="bInfo-title">基本信息</div>
        </h2>
        <div class="bInfo-content">
            <div class="bInfo-base">
                <div class="bInfo-name">基本属性</div>
                <div class="bInfo-div-ul1">
                    <ul>
                        <li class="bInfo-div-li1"><span class="bInfo-label1">房屋户型</span>1室1厅1厨1卫</li>
                        <li class="bInfo-div-li2"><span class="bInfo-label2">所在楼层</span>高楼层 (共32层)</li>
                        <li class="bInfo-div-li3"><span class="bInfo-label1">建筑面积</span>51.45㎡</li>
                        <li class="bInfo-div-li4"><span class="bInfo-label2">户型结构</span>平层</li>
                        <li class="bInfo-div-li5"><span class="bInfo-label1">套内面积</span>暂无数据</li>
                        <li class="bInfo-div-li6"><span class="bInfo-label2">建筑类型</span>板塔结合</li>
                        <li class="bInfo-div-li7"><span class="bInfo-label1">房屋朝向</span>北</li>
                        <li class="bInfo-div-li8"><span class="bInfo-label2">装修情况</span>精装</li>
                        <li class="bInfo-div-li9"><span class="bInfo-label1">配备电梯</span>有</li>
                        <li class="bInfo-div-li10"><span class="bInfo-label2">产权年限</span>70年</li>
                    </ul>
                </div>
            </div>
            <div class="bInfo-transaction">
                <div class="bInfo-name">交易属性</div>
                <div class="bInfo-div-ul2">
                    <ul>
                        <li class="bInfo-div-li1"><span class="bInfo-label1">挂牌时间</span>2018-02-23</li>
                        <li class="bInfo-div-li2"><span class="bInfo-label2">交易权属</span>商品房</li>
                        <li class="bInfo-div-li3"><span class="bInfo-label1">上次交易</span>2016-08-23</li>
                        <li class="bInfo-div-li4"><span class="bInfo-label2">房屋用途</span>普通住宅</li>
                        <li class="bInfo-div-li5"><span class="bInfo-label1">房屋年限</span>满两年</li>
                        <li class="bInfo-div-li6"><span class="bInfo-label2">产权所属</span>非共有</li>
                        <li class="bInfo-div-li7"><span class="bInfo-label1">抵押信息</span>无抵押</li>
                        <li class="bInfo-div-li8"><span class="bInfo-label2">房本备件</span>已上传房本照片</li>
                    </ul>
                </div>
            </div>
            <div class="bInfo-disclaimer">注：房源所示“房屋用途、交易权属、建成年代、产权年限、建筑结构”仅供参考，购房时请以房本信息为准。</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomedetailBasicInformation'
}
</script>

<style>
    .basicInformation {
        width: 710px;
        height: 435px;
        position: relative;
        left: 150px;
    }
    .basicInformation h2 {
        display: inline-block;
        width: 700px;
        height: 23px;
        font-size: 23px;
        position: absolute;
        left: 0;
        text-align: left;
        border-bottom: solid #e8e6e6 1px;
        padding-bottom: 20px;
    }
    .bInfo-title {
        width: 700px;
        height: 23px;
        line-height: 23px;
    }
    .bInfo-content {
        width: 700px;
        height: 387px;
        position: absolute;
        left: 0;
        top: 88px;
        text-align: left;
    }
    .bInfo-base {
        width: 700px;
        height: 160px;
        position: absolute;
        border-bottom: solid #e8e6e6 1px;
    }
    .bInfo-name {
        width: 160px;
        height: 23px;
        position: absolute;
        font-size: 14px;
        color: #999999;
    }
    .bInfo-div-ul1 {
        width: 540px;
        height: 160px;
        position: absolute;
        left: 160px;
        margin: 0;
        padding: 0;
    }
    .bInfo-div-ul1 ul {
        width: 540px;
        height: 160px;
        margin: 0;
        padding: 0;
        position: absolute;
    }
    .bInfo-div-ul1 ul li {
        list-style: none;
        color: #515151;
        width: 260px;
        height: 24px;
        display: inline-block;
        position: absolute;
        margin: 0;
        padding: 0;
        font-size: 14px;
    }
    .bInfo-div-li1 {
        top: 0;
        left: 0;
    }
    .bInfo-div-li2 {
        top: 0;
        left: 280px;
    }
    .bInfo-div-li3 {
        top: 28px;
        left: 0;
    }
    .bInfo-div-li4 {
        top: 28px;
        left: 280px;
    }
    .bInfo-div-li5 {
         top: 56px;
         left: 0;
     }
    .bInfo-div-li6 {
        top: 56px;
        left: 280px;
    }
    .bInfo-div-li7 {
        top: 84px;
        left: 0;
    }
    .bInfo-div-li8 {
        top: 84px;
        left: 280px;
    }
    .bInfo-div-li9 {
        top: 112px;
        left: 0;
    }
    .bInfo-div-li10 {
        top: 112px;
        left: 280px;
    }
    .bInfo-label1 {
        color: #999999;
        padding-right: 40px;
        font-size: 14px;
    }
    .bInfo-label2 {
        color: #999999;
        padding-right: 40px;
        font-size: 14px;
    }
    .bInfo-transaction {
        position: absolute;
        top: 190px;
        width: 700px;
        height: 140px;
        border-bottom: solid #e8e6e6 1px;
    }
    .bInfo-div-ul2 {
        width: 540px;
        height: 140px;
        position: absolute;
        left: 160px;
        margin: 0;
        padding: 0;
    }
    .bInfo-div-ul2 ul {
        width: 540px;
        height: 140px;
        margin: 0;
        padding: 0;
        position: absolute;
    }
    .bInfo-div-ul2 ul li {
        list-style: none;
        color: #515151;
        width: 260px;
        height: 24px;
        display: inline-block;
        position: absolute;
        margin: 0;
        padding: 0;
        font-size: 14px;
    }
    .bInfo-disclaimer {
        width: 700px;
        height: 25px;
        position: absolute;
        top: 350px;
        font-size: 12px;
        color: #999999;
    }
</style>
