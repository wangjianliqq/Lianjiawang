<template>
    <div class="xiaoqu">
        <div class="xiaoqu-header">
            <h3>
                <span class="xiaoqu-header-fl">君临国际简介</span>
            </h3>
            <a class="xiaoqu-header-fr" href="https://nj.lianjia.com/xiaoqu/1411000000367/" target="-blank">查看小区详情</a>
        </div>
        <div class="xiaoqu-content">
            <div class="xiaoqu-main-fl">
                <div class="xiaoqu-info">
                    <label class="xiaoqu-main-label">小区均价</label>
                    <span class="xiaoqu-main-info red">37120 元/㎡</span>
                </div>
                <div class="xiaoqu-info">
                    <label class="xiaoqu-main-label">建筑年代</label>
                    <span class="xiaoqu-main-info">2005年</span>
                </div>
                <div class="xiaoqu-info clear">
                    <label class="xiaoqu-main-label">建筑类型</label>
                    <span class="xiaoqu-main-info">塔板结合</span>
                </div>
                <div class="xiaoqu-info">
                    <label class="xiaoqu-main-label">楼栋总数</label>
                    <span class="xiaoqu-main-info">3栋</span>
                </div>
                <div class="xiaoqu-info clear">
                    <label class="xiaoqu-main-label">户型总数</label>
                    <span class="xiaoqu-main-info">暂无数据</span>
                </div>
                <div class="xiaoqu-info">
                    <label class="xiaoqu-main-label">挂牌房源</label>
                    <span class="xiaoqu-main-info">
                        <a href="https://nj.lianjia.com/ershoufang/c1411000000367/" target="-blank">23套在售二手房</a>
                    </span>
                    <span class="xiaoqu-main-info">
                        <a href="https://nj.lianjia.com/zufang/c1411000000367/" target="-blank">0套出租房源</a>
                    </span>
                </div>
            </div>
            <a href="https://nj.lianjia.com/xiaoqu/1411000000367/" class="xiaoqu-img-fr">
                <img src="./xiaoqu.jpg" alt="君临国际">
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomedetailXiaoqu'
}
</script>

<style>
    .xiaoqu {
        width: 700px;
        height: 210px;
        position: relative;
        left: 150px;
        margin: 95px 0 0 0;
    }
    .xiaoqu-header{
        width: 700px;
        height: 23px;
        font-size: 23px;
        position: absolute;
        left: 0;
        margin: 0;
        padding: 0;
        text-align: left;
    }
    .xiaoqu-header h3 {
        width: 150px;
        height: 23px;
        display: inline-block;
        position: absolute;
        margin: 0;
        padding: 0;
    }
    .xiaoqu-header-fl {
        width: 150px;
        height: 23px;
        line-height: 23px;
        display: inline-block;
        position: absolute;
        margin: 0;
        padding: 0;
        color: black;
        font-size: 23px;
    }
    .xiaoqu-header-fr {
        width: 150px;
        height: 23px;
        line-height: 23px;
        display: inline-block;
        position: absolute;
        margin: 0;
        padding: 0;
        color: #7f8183;
        font-size: 14px;
        float: right;
        right: 0;
        text-decoration: none;
        text-align: right;
    }
    .xiaoqu-content {
        width: 700px;
        height: 180px;
        font-size: 14px;
        position: absolute;
        left: 0;
        top: 50px;
        margin: 0;
        padding: 0;
        text-align: left;
        color: #7f8183;
    }
    .xiaoqu-main-fl {
        width: 460px;
        height: 180px;
    }
    .xiaoqu-info {
        width: 460px;
        height: 28px;
        line-height: 28px;
    }
    .xiaoqu-main-label {
        display: inline-block;
        width: 60px;
        height: 28px;
        line-height: 28px;
    }
    .xiaoqu-main-info {
        display: inline-block;
        width: 105px;
        height: 28px;
        line-height: 28px;
        color: #7f8183;
        margin-left: 30px;
    }
    .xiaoqu-main-info a {
        color: #7f8183;
    }
    .xiaoqu-img-fr {
        width: 200px;
        height: 150px;
        position: absolute;
        right: 0;
        top: 0;
        margin: 0;
        padding: 0;
    }
    .xiaoqu-img-fr img {
        width: 200px;
        height: 150px;
    }
</style>
