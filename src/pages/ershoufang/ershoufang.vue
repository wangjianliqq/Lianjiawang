<template>
    <div class="ershoufang">
        <banner></banner>
        <ershoufang-header></ershoufang-header>
        <ershoufang-filter></ershoufang-filter>
        <ershoufang-content></ershoufang-content>
        <ershoufang-detail></ershoufang-detail>
        <home-footer></home-footer>
    </div>
</template>

<script>
import Banner from './../common/Banner.vue'
import ErshoufangHeader from './components/Header.vue'
import ErshoufangFilter from './components/Filter.vue'
import ErshoufangContent from './components/Content.vue'
import ErshoufangDetail from './components/Detail.vue'
import HomeFooter from './../common/Footer.vue'
export default {
  name: 'Ershoufang',
  components: {
    Banner,
    ErshoufangHeader,
    ErshoufangFilter,
    ErshoufangContent,
    ErshoufangDetail,
    HomeFooter
  }
}
</script>

<style>
    .ershoufang {
        margin: 0;
        padding: 0;
    }
</style>
