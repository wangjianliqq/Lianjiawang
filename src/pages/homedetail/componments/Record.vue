<template>
    <div>
        <div class="record">
            <div class="record-list">
                <div class="record-title">看房记录</div>
                <div class="record-content">
                    <div class="record-header">
                        <div class="record-mytime">带看时间</div>
                        <div class="record-myname">带看经纪人</div>
                        <div class="record-mytotal">本房总带看</div>
                        <div class="record-phone">咨询电话</div>
                    </div>
                    <div class="record-row">
                        <div class="record-mytimes">2019-03-21</div>
                        <div class="record-agentName">
                            <a class="record-agent-icon" target="_blank" href="https://dianpu.lianjia.com/1000000020368946">
                                <img src="./agent1.jpg" alt="">
                                <span>孙勇</span>
                            </a>
                            <a class="record-createtalk iconfont">&#xe602;</a>
                        </div>
                        <div class="record-mytotal-times">2次</div>
                        <div class="record-phones">4008781905转6084</div>
                    </div>
                    <div class="record-row">
                        <div class="record-mytimes">2019-03-20</div>
                        <div class="record-agentName">
                            <a class="record-agent-icon" target="_blank" href="https://dianpu.lianjia.com/1000000020043007">
                                <img src="./agent1.jpg" alt="">
                                <span>何林坤</span>
                            </a>
                            <a class="record-createtalk iconfont">&#xe602;</a>
                        </div>
                        <div class="record-mytotal-times">2次</div>
                        <div class="record-phones">4008856706转7316</div>
                    </div>
                    <div class="record-row">
                        <div class="record-mytimes">2019-03-19</div>
                        <div class="record-agentName">
                            <a class="record-agent-icon" target="_blank" href="https://dianpu.lianjia.com/1000001000089345">
                                <img src="./agent2.jpg" alt="">
                                <span>文书</span>
                            </a>
                            <a class="record-createtalk iconfont">&#xe602;</a>
                        </div>
                        <div class="record-mytotal-times">1次</div>
                        <div class="record-phones">4008891292转3874</div>
                    </div>
                </div>
                <div class="record-pagination">
                    <span class="rdpag-disable iconfont">&lt;</span>
                    <span class="rdpag-next iconfont">&gt;</span>
                </div>
            </div>
            <div class="record-panel">
                <div class="record-panel-title">近7天带看次数</div>
                <div class="record-panel-count">6</div>
                <div class="record-panel-totalCount">- 30日带看<span>13</span>次 -</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomedetailRecord'
}
</script>

<style>
    .record {
        width: 700px;
        height: 430px;
        position: relative;
        left: 150px;
        margin-top: 20px;
        margin-bottom: 85px;
        padding: 0;
    }
    .record-list {
        width: 520px;
        height: 400px;
        position: absolute;
    }
    .record-title {
        width: 520px;
        height: 23px;
        left: 0;
        margin: 0;
        padding: 0;
        text-align: left;
        font-weight: bold;
        font-size: 23px;
        line-height: 23px;
    }
    .record-content {
        width: 520px;
        height: 265px;
        margin-top: 25px;
    }
    .record-header {
        width: 520px;
        height: 45px;
        line-height: 55px;
        border-bottom: 1px solid #eeeeee;
        font-weight: bold;
        font-size: 15px;
    }
    .record-mytime,.record-myname,.record-mytotal,.record-phone {
        display: inline-block;
        float: left;
        font-size: 14px;
        text-align: left;
        color: #222;
        height: 45px;
        line-height: 50px;
        font-weight: bold;
    }
    .record-mytime {
        width: 100px;
    }
    .record-myname {
        width: 180px;
        margin-left: 10px;
    }
    .record-mytotal {
        width: 70px;
    }
    .record-phone {
        width: 125px;
        margin-left: 35px;
    }
    .record-row {
        width: 520px;
        height: 70px;
        border-bottom: 1px solid #eeeeee;
    }
    .record-mytimes,.record-agentName,.record-mytotal-times,.record-phones {
        height: 70px;
        line-height: 70px;
        text-align: left;
        font-size: 13px;
        display: inline-block;
        float: left;
    }
    .record-mytimes{
        width: 100px;
    }
    .record-agentName {
        width: 180px;
        position: relative;
        margin-left: 10px;
    }
    .record-mytotal-times {
        width: 70px;
        padding-left: 5px;
    }
    .record-phones {
        width: 125px;
        margin-left: 30px;
        color: #222;
        font-weight: bold;
    }
    .record-agent-icon {
        width: 70px;
        height: 30px;
        display: inline-block;
        line-height: 30px;
        position: relative;
    }
    .record-agent-icon img {
        width: 20px;
        height: 20px;
        display: inline-block;
        position: absolute;
        top: 13px;
    }
    .record-agent-icon span {
        width: 40px;
        height: 30px;
        line-height: 30px;
        display: inline-block;
        color: black;
        position: absolute;
        left: 28px;
        top: 10px;
    }
    .record-createtalk {
        position: absolute;
        left: 70px;
        top: 0;
    }
    .record-pagination {
        width: 500px;
        height: 30px;
        margin-top: 15px;
        text-align: right;
    }
    .rdpag-disable,.rdpag-next {
        display: inline-block;
        width: 26px;
        height: 26px;
        line-height: 24px;
        text-align: center;
        color: #888c8e;
        font-size: 14px;
        border: 1px solid #d9dcde;
        border-radius: 2px;
        box-sizing: border-box;
        cursor: pointer;
    }
    .record-panel {
        position: absolute;
        width: 180px;
        height: 280px;
        right: 0;
    }
    .record-panel-title {
        width: 180px;
        height: 45px;
        line-height: 45px;
        font-weight: bold;
        font-size: 15px;
        position: absolute;
        margin-top: 61px;
    }
    .record-panel-count {
        width: 180px;
        height: 80px;
        line-height: 80px;
        font-weight: bold;
        font-size: 80px;
        position: absolute;
        margin-top: 105px;
        margin-bottom: 30px;
        color: #394043;
    }
    .record-panel-totalCount {
        width: 180px;
        height: 15px;
        line-height: 15px;
        font-size: 14px;
        position: absolute;
        margin-top: 200px;
        margin-bottom: 0;
        color: #a9abab;
    }
    .record-panel-totalCount span {
        color: #a9abab;
    }
</style>
