<template>
    <div class="home-ershoufangcommend">
        <div class="home-ershoufangcommend-title">
            <div class="home-ershoufangcommend-title1"></div>
            <p class="home-ershoufangcommend-title2">好房源那么多，我们为你精选，链家网会越来越懂你</p>
        </div>
        <ul>
            <li>
                <a href="/">
                    <img src="../../ershoufang/house1.png" alt="河西金鹰 茶南露园 双南精装 云锦路地铁口 中间楼层">
                    <div class="home-ershoufangcommend-ul-div">
                        <p>建邺·茶南</p>
                        <p>露园</p>
                        <p class="home-ershoufangcommend-ul-div-p">
                            <span class="home-ershoufangcommend-ul-div-span1">2室1厅·62.49平米</span>
                            <span class="home-ershoufangcommend-ul-div-span2">210万</span>
                        </p>
                    </div>
                </a>
            </li>
            <li>
                <a href="/">
                    <img src="../../ershoufang/house2.png" alt="诚品城 小区中间位置 中间楼层 户型方正 报价含车位">
                    <div class="home-ershoufangcommend-ul-div">
                        <p>栖霞·仙林</p>
                        <p>诚品城</p>
                        <p class="home-ershoufangcommend-ul-div-p">
                            <span class="home-ershoufangcommend-ul-div-span1">2室2厅·90.41平米</span>
                            <span class="home-ershoufangcommend-ul-div-span2">270万</span>
                        </p>
                    </div>
                </a>
            </li>
            <li>
                <a href="/">
                    <img src="../../ershoufang/house2.png" alt="中间楼层 精装修 采光充足 视野好">
                    <div class="home-ershoufangcommend-ul-div">
                        <p>浦口·桥北</p>
                        <p>江岸水城</p>
                        <p class="home-ershoufangcommend-ul-div-p">
                            <span class="home-ershoufangcommend-ul-div-span1">2室2厅·74.69平米</span>
                            <span class="home-ershoufangcommend-ul-div-span2">172万</span>
                        </p>
                    </div>
                </a>
            </li>
            <li>
                <a href="/">
                    <img src="../../ershoufang/house1.png" alt="采光好 楼层好 两房 配套齐 住家装修 南北通风">
                    <div class="home-ershoufangcommend-ul-div">
                        <p>秦淮·升州路</p>
                        <p>王府园小区</p>
                        <p class="home-ershoufangcommend-ul-div-p">
                            <span class="home-ershoufangcommend-ul-div-span1">2室1厅·46.33平米</span>
                            <span class="home-ershoufangcommend-ul-div-span2">255万</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Ershoufangcommend'
}
</script>

<style>
    .home-ershoufangcommend {
        width: 1266px;
        height: 550px;
        padding: 0;
        margin: 0 110px 0 80px;
    }
    .home-ershoufangcommend-title {
        width: 1150px;
        height: 60px;
    }
    .home-ershoufangcommend-title1 {
        width: 970px;
        height: 35px;
        margin: 0 0 0 20px;
        background: url(../ershoufang-commend.png) no-repeat 20px;
    }
    .home-ershoufangcommend-title2 {
        width: 945px;
        height: 20px;
        margin: 0px 0px 0px 42px;
        text-align: left;
        padding-top: 5px;
        color: #b0b3b4;
    }
    .home-ershoufangcommend ul {
        width: 1120px;
        height: 300px;
        margin: 25px 0px 40px 0px;
    }
    .home-ershoufangcommend li {
        list-style: none;
        float: left;
        padding-right: 30px;
        width: 250px;
    }
    .home-ershoufangcommend li a {
        text-decoration: none;
        color: #333;
    }
    .home-ershoufangcommend img {
        width: 250px;
        height: 200px;
    }
    .home-ershoufangcommend-ul-div {
        height: 80px;
        position: relative;
    }
    .home-ershoufangcommend-ul-div p {
        height: 20px;
        margin: 5px 0px 3px 0px;
        text-align: left;
    }
    .home-ershoufangcommend-ul-div-p {
        padding-top: 10px;
    }
    .home-ershoufangcommend-ul-div-span1 {
        color: #999;
        font-size: 12px;
    }
    .home-ershoufangcommend-ul-div-span2 {
        position: absolute;
        right: 10px;
        bottom: 0;
        font-size: 16px;
        color: #FA5741;
    }
</style>
