<template>
    <div class="feature">
        <h2>
            <div class="feature-title">房源特色</div>
        </h2>
        <div class="feature-content">
            <div class="feature-label">
                <div class="feature-name">房源标签</div>
                <div class="feature-div1">
                    <div class="sellTag">
                        <span class="subway">近地铁</span>
                        <span class="vr">VR房源</span>
                        <span class="five">房本满两年</span>
                        <span class="haskey">随时看房</span>
                    </div>
                </div>
            </div>
            <div class="feature-transaction1">
                <div class="feature-name">售房详情</div>
                <div class="feature-div2">
                    <span>业主是16年买的房子，当时是在市区上班，也考虑为小孩以后上学用的，现在因为工作调动去北京发展了，所以才忍痛割爱了，房子业主进去后进行了二次装修，从选材到装修监工都是业主亲自看着的，所以很是用心。
                  </span>
                </div>
            </div>
            <div class="feature-transaction2">
                <div class="feature-name">交通出行</div>
                <div class="feature-div2">
                    <span>据百度地图显示，小区步行到珠江路地铁1号线250米，步行到公交站中山路站180米，路线有1路、16路、33路、25路、y16路夜间、y1路夜间，步行至儿童医院站235米，路线有6路、91路、160路，48路、65路、d17路、y6路夜间，交通生活方便。
                  </span>
                </div>
            </div>
            <div class="feature-transaction3">
                <div class="feature-name">户型介绍</div>
                <div class="feature-div2">
                    <span>房子朝北向的，可以完全看到南京大学和紫峰大厦，房子外面是没有高楼遮挡的，视野好，进门右手边是卫生间，左手边是厨房，是中间户型，厨房卫生间都是够用的，卧室的朝北，是带个大飘窗的，房子不临街，闹中取静，交通生活都很方便。
                  </span>
                </div>
            </div>
            <div class="feature-transaction4">
                <div class="feature-name">核心卖点</div>
                <div class="feature-div2">
                    <span>君临国际 珠江路地铁 楼层好 采光好 视野好 精装修拎包住 急售
                    </span>
                </div>
            </div>
            <div class="feature-disclaimer">注：土地使用起止年限详见业主土地证明材料或查询相关政府部门的登记文件。</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomedetailFeature'
}
</script>

<style>
    .feature {
        width: 710px;
        height: 600px;
        position: relative;
        left: 150px;
        margin: 50px 0 0 0;
    }
    .feature h2 {
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
    .feature-title {
        width: 700px;
        height: 23px;
        line-height: 23px;
    }
    .feature-content {
        width: 700px;
        height: 400px;
        position: absolute;
        left: 0;
        top: 85px;
        text-align: left;
    }
    .feature-label {
        width: 700px;
        height: 50px;
        position: absolute;
        border-bottom: solid #e8e6e6 1px;
    }
    .feature-name {
        width: 160px;
        height: 23px;
        position: absolute;
        font-size: 14px;
        color: #999999;
    }
    .feature-div1 {
        width: 540px;
        height: 30px;
        position: absolute;
        left: 160px;
        margin: 0;
        padding: 0;
    }
    .sellTag {
        width: 510px;
        height: 30px;
        position: relative;
        margin: 0;
        padding: 0;
    }
    .subway {
        display: inline-block;
        position: absolute;
        left: 0;
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
        left: 85px;
        color: #00bad4;
        font-size: 12px;
        line-height: 30px;
        padding: 0 11px;
        margin-right: 6px;
        background-color: #f4f7f9;
    }
    .five {
        display: inline-block;
        position: absolute;
        left: 180px;
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
    .feature-transaction1 {
        position: absolute;
        top: 70px;
        width: 700px;
        height: 85px;
        border-bottom: solid #e8e6e6 1px;
    }
    .feature-transaction2 {
        position: absolute;
        top: 180px;
        width: 700px;
        height: 100px;
        border-bottom: solid #e8e6e6 1px;
    }
    .feature-transaction3 {
        position: absolute;
        top: 305px;
        width: 700px;
        height: 85px;
        border-bottom: solid #e8e6e6 1px;
    }
    .feature-transaction4 {
        position: absolute;
        top: 415px;
        width: 700px;
        height: 45px;
        border-bottom: solid #e8e6e6 1px;
    }
    .feature-div2 {
        width: 540px;
        height: 80px;
        position: absolute;
        left: 160px;
        margin: 0;
        padding: 0;
    }
    .feature-div2 span {
        color: #6e7679;
        font-size: 15px;
    }
    .feature-disclaimer {
        width: 700px;
        height: 25px;
        position: absolute;
        top: 475px;
        font-size: 12px;
        color: #999999;
    }
</style>
