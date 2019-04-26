<template>
    <div class="distribution">
        <h2>
            <div class="distribution-title">户型分间</div>
        </h2>
        <div class="dis-content">
            <div class="dis-img">
                <img src="./fenbutu.jpg" alt="">
            </div>
            <div class="dis-detail">
                <div class="dis-row1">
                    <div class="dis-col1">卧室</div>
                    <div class="dis-col">22.51平米</div>
                    <div class="dis-col">东 北</div>
                    <div class="dis-col">落地窗</div>
                </div>
                <div class="dis-row2">
                    <div class="dis-col1">厨房</div>
                    <div class="dis-col">5.6平米</div>
                    <div class="dis-col">无</div>
                    <div class="dis-col">无窗</div>
                </div>
                <div class="dis-row3">
                    <div class="dis-col1">卫</div>
                    <div class="dis-col">3.12平米</div>
                    <div class="dis-col">无</div>
                    <div class="dis-col">无窗</div>
                </div>
            </div>
        </div>
        <div class="distribution-disclaimer">注：户型图标注的面积不同于房本面积，存在测量误差，购房请以房本面积为准。</div>
    </div>
</template>

<script>
export default {
  name: 'HomedetailDistribution'
}
</script>

<style>
    .distribution {
        width: 700px;
        height: 280px;
        position: relative;
        left: 150px;
        margin: 45px 0 0 0;
    }
    .distribution h2 {
        display: inline-block;
        width: 700px;
        height: 23px;
        font-size: 23px;
        position: absolute;
        left: 0;
        margin: 0;
        text-align: left;
        border-bottom: solid #e8e6e6 1px;
        padding-bottom: 20px;
    }
    .distribution-title {
        width: 700px;
        height: 23px;
        line-height: 23px;
    }
    .dis-content {
        width: 700px;
        height: 220px;
        position: relative;
        top: 85px;
    }
    .dis-img {
        width: 220px;
        height: 180px;
        position: absolute;
        box-shadow: 0 1px 3px rgba(13,3,9,0.2);
        cursor: pointer;
    }
    .dis-img img {
        width: 220px;
        height: 180px;
    }
    .dis-detail {
        width: 390px;
        height: 180px;
        overflow:scroll;
        position: absolute;
        left: 305px;
        overflow-x:hidden
    }
    .dis-row1 {
        width: 360px;
        height: 35px;
        line-height: 35px;
        text-align: left;
        position: absolute;
        top: 0;
    }
    .dis-row2 {
        width: 360px;
        height: 35px;
        line-height: 35px;
        text-align: left;
        position: absolute;
        top: 40px;
    }
    .dis-row3 {
        width: 360px;
        height: 35px;
        line-height: 35px;
        text-align: left;
        position: absolute;
        top: 80px;
    }
    .dis-col {
        width: 90px;
        height: 35px;
        display: inline-block;
        float: left;
        font-size: 14px;
    }
    .dis-col1 {
        font-weight: bold;
        width: 90px;
        height: 35px;
        display: inline-block;
        float: left;
        font-size: 14px;
    }
    .distribution-disclaimer {
        width: 700px;
        height: 25px;
        position: absolute;
        top: 280px;
        font-size: 12px;
        color: #999999;
        line-height: 25px;
        text-align: left;
    }
</style>
