<template>
    <div class="home-navigate">
        <router-link to="/Ershoufang" class="navigation">二手房</router-link>
        <router-link to="/" class="navigation">新房</router-link>
        <router-link to="/" class="navigation">租房</router-link>
        <router-link to="/" class="navigation">海外</router-link>
        <router-link to="/" class="navigation">小区</router-link>
        <router-link to="/" class="navigation">经纪人</router-link>
        <router-link to="/" class="navigation">指南</router-link>
        <router-link to="/" class="navigation">房价</router-link>
        <router-link to="/" class="navigation">工具</router-link>
        <router-link to="/" class="navigation">发布房源</router-link>
    </div>
</template>

<script>
export default {
  name: 'Navigate'
}
</script>

<style>
    .home-navigate {
        position: absolute;
        top: 45px;
        right: -50px;
    }
    .home-navigate .navigation {
        color: white;
        font-size: 16px;
        font-weight: bold;
        padding: 10px;
        text-decoration: none;
    }
</style>
