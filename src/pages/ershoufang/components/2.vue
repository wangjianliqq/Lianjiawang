<template>
    <div class="e-detail">
        <ul class="sellList">
            <li class="sellContent">
                <router-link to="/homedetail" class="sellImg">
                    <img src="../house1.png" alt="">
                </router-link>
                <div class="sellDetail">
                    <div class="sellTitle">
                        <router-link to="/homedetail">珠江路地铁 君临国际 精装修 采光好视野好</router-link>
                    </div>
                    <div class="sellAddress">
                        <span class="iconfont sellIcon">&#xe62e;</span>
                        <a href="">君临国际 </a>
                        <span class="sellInnerDetail1"> | 1室1厅 | 51.45平米 | 北 | 精装 | 有电梯</span>
                    </div>
                    <div class="sellFlood">
                        <span class="iconfont sellIcon">&#xe65e;</span>
                        <span class="sellInnerDetail2">高楼层(共32层)2005年建板塔结合  -  </span>
                        <a href="">华侨路</a>
                    </div>
                    <div class="sellAddition">
                        <span class="iconfont sellIcon">&#xe653;</span>
                        <span class="sellInnerDetail2">191人关注 / 共16次带看 / 一年前发布</span>
                    </div>
                    <div class="sellTag">
                        <span class="subway">近地铁</span>
                        <span class="vr vr-selected">VR房源</span>
                        <span class="five">房本满两年</span>
                        <span class="haskey">随时看房</span>
                    </div>
                    <div class="sellPrice">
                        <div class="totalPrice">
                            <span>160</span>
                            万
                        </div>
                        <div class="unitPrice">
                            <span>单价31099元/平米</span>
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
            <li class="sellContent">
                <a href="" class="sellImg">
                    <img src="../house2.png" alt="">
                </a>
                <div class="sellDetail">
                    <div class="sellTitle">
                        <a href="">新城市广场摩尔特区 1室1厅 156万</a>
                    </div>
                    <div class="sellAddress">
                        <span class="iconfont sellIcon">&#xe62e;</span>
                        <a href="">新城市</a>
                        <span class="sellInnerDetail1">  | 1室1厅 | 52.7平米 | 北 | 其他 | 有电梯</span>
                    </div>
                    <div class="sellFlood">
                        <span class="iconfont sellIcon">&#xe65e;</span>
                        <span class="sellInnerDetail2">中楼层(共12层)2005年建塔楼结合 -  </span>
                        <a href="">龙江</a>
                    </div>
                    <div class="sellAddition">
                        <span class="iconfont sellIcon">&#xe653;</span>
                        <span class="sellInnerDetail2">2人关注 / 共0次带看 / 1个月以前发布</span>
                    </div>
                    <div class="sellTag">
                        <span class="subway">近地铁</span>
                        <span class="vr">VR房源</span>
                        <span class="five five-selected">房本满两年</span>
                        <span class="haskey">随时看房</span>
                    </div>
                    <div class="sellPrice">
                        <div class="totalPrice">
                            <span>156</span>
                            万
                        </div>
                        <div class="unitPrice">
                            <span>单价29602元/平米</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="sellBottom">
            <div class="sellBottom-city">
                <router-link to="/" class="city1">链家网南京站</router-link>
                <span> > </span>
                <router-link to="/ershoufang" class="city1">南京二手房</router-link>
            </div>
            <div class="page-box">
                <a href="">1</a>
                <a href="">2</a>
                <span>...</span>
                <a href="">99</a>
                <a href="">100</a>
                <a href="">下一页</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ErshoufangDetail'
    }
</script>

<style>
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
    .vr-selected,.five-selected {
        background-color: #373737;
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
    .page-box {
        width: 300px;
        height: 30px;
        position: absolute;
        line-height: 30px;
        top: 30px;
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
