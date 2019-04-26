<template>
    <div class="banner">
        <div class="container">
            <ul class="container-left">
                <li>
                    <router-link to="/" class="container-left-link">首页</router-link>
                </li>
                <li>
                    <router-link to="/ershoufang" class="selectedLink">二手房</router-link>
                </li>
                <li>
                    <router-link to="/" class="container-left-link">新房</router-link>
                </li>
                <li>
                    <router-link to="/" class="container-left-link">租房</router-link>
                </li>
                <li>
                    <router-link to="/" class="container-left-link">海外</router-link>
                </li>
                <li>
                    <router-link to="/" class="container-left-link">小区</router-link>
                </li>
                <li>
                    <router-link to="/" class="container-left-link">经纪人</router-link>
                </li>
                <li>
                    <router-link to="/" class="container-left-link">指南</router-link>
                </li>
                <li>
                    <router-link to="/" class="container-left-link">房价</router-link>
                </li>
            </ul>
            <div class="container-right">
                <div class="login" >
                    <i class="iconfont">&#xe62f;</i>
                    <a href="#">登录&nbsp;/</a>
                    <a href="#">注册</a>
                </div>
                <div class="phone">
                    <i class="iconfont">&#xe652;</i>
                    <span>热线电话1010-9666</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style>
    .banner {
        width: 1349px;
        height: 30px;
        background-color: #394043;
        line-height: 30px;
        font-size: 12px;
        margin-bottom: 10px;
    }
    .container {
        width: 1150px;
        height: 30px;
        margin: 0 auto;
        position: relative;
    }
    .container-left {
        width: 600px;
        height: 30px;
        margin: 0;
        padding-right: 30px;
        float: left;
    }
    .container-left li {
        list-style: none;
        float: left;
        padding-right: 30px;
    }
    .container-left li .container-left-link {
        text-decoration: none;
        color: #a9abab;
    }
    .container-left li .container-left-link:hover {
        color: white;
    }
    .container-left li .selectedLink {
        text-decoration: none;
        color: white;
    }
    .container-right {
        width: 600px;
        height: 30px;
        position: absolute;
        right: 0px;
    }
    .container-right a,span {
        color: white;
        text-decoration: none;
    }
    .container-right .login {
        width: 80px;
        height: 30px;
        margin: 0;
        padding: 0;
        position: absolute;
        right: 150px;
    }
    .container-right .iconfont {
        color: white;
    }
    .container-right .phone {
        position: absolute;
        top: 0px;
        right: 0px;
    }
    .container-right .phone span {
        color: white;
    }
</style>
