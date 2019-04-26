<template>
    <div class="home-nav">
        <ul>
            <li class="home-nav-li">
                <router-link to="/Ershoufang" class="home-nav-li-a">
                    <img src="../ershoufang.png" alt="">
                    <b>找二手房</b>
                    <p>真实二手房源，链家承诺真实在售所见即真</p>
                </router-link>
            </li>
            <li>
                <router-link to="/" class="home-nav-li-a">
                    <img src="../gujia.png" alt="">
                    <b>房屋估价</b>
                    <p>基于海量成交数据，帮您合理定价预估市值</p>
                </router-link>
            </li>
            <li>
                <router-link to="/" class="home-nav-li-a">
                    <img src="../ditu.png" alt="">
                    <b>地图找房</b>
                    <p>为您精准定位，位置周边配套设施一览无余</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style>
    .home-nav {
        width: 1150px;
        height: 200px;
        margin: 0 110px 0 110px;
        padding: 0;
    }
    .home-nav ul {
        width: 1150px;
        height: 150px;
        margin: 30px 0px 40px 0px;
        padding-left: 0;
    }
    .home-nav li {
        list-style: none;
        float: left;
        width: 350px;
        height: 150px;
        padding-right: 30px;
    }
    .home-nav .home-nav-li-a {
        text-decoration: none;
    }
    .home-nav img {
        width: 75px;
        height: 65px;
        display: block;
        margin: auto;
    }
    .home-nav b {
        display: block;
        height: 20px;
        margin: 10px 0 10px 0;
        font-size: 18px;
        color: #394043;
        font-weight: 100;
    }
    .home-nav p {
        width: 183px;
        margin: 3px auto 5px auto;
        font-size: 12px;
        color: #b0b3b4;
        line-height: 18px;
    }
</style>
