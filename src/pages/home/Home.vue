<template>
    <div class="home">
        <home-header></home-header>
        <home-navigate></home-navigate>
        <home-nav></home-nav>
        <home-ershoufangcommend></home-ershoufangcommend>
        <home-footer></home-footer>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeNavigate from './components/Navigate.vue'
import HomeNav from './components/Nav.vue'
import HomeErshoufangcommend from './components/Ershoufangcommend.vue'
import HomeFooter from './../common/Footer.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeNavigate,
    HomeNav,
    HomeErshoufangcommend,
    HomeFooter
  }
}
</script>

<style>
    .home {
        position: relative;
    }
</style>
