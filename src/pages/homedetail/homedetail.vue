<template>
    <div class="homedetail">
        <banner></banner>
        <homedetail-header></homedetail-header>
        <homedetail-swap></homedetail-swap>
        <homedetail-basicInformation></homedetail-basicInformation>
        <homedetail-feature></homedetail-feature>
        <homedetail-distribution></homedetail-distribution>
        <homedetail-xiaoqu></homedetail-xiaoqu>
        <homedetail-calculator></homedetail-calculator>
        <homedetail-record></homedetail-record>
        <home-footer></home-footer>
    </div>
</template>

<script>
import Banner from './../common/Banner.vue'
import HomedetailHeader from './componments/Header.vue'
import HomedetailSwap from './componments/Swap.vue'
import HomedetailBasicInformation from './componments/BasicInformation.vue'
import HomedetailFeature from './componments/Feature.vue'
import HomedetailDistribution from './componments/Distribution.vue'
import HomedetailXiaoqu from './componments/Xiaoqu.vue'
import HomedetailCalculator from './componments/Calculator.vue'
import HomedetailRecord from './componments/Record.vue'
import HomeFooter from './../common/Footer.vue'
export default {
  name: 'Homedetail',
  components: {
    Banner,
    HomedetailHeader,
    HomedetailSwap,
    HomedetailBasicInformation,
    HomedetailFeature,
    HomedetailDistribution,
    HomedetailXiaoqu,
    HomedetailCalculator,
    HomedetailRecord,
    HomeFooter
  }
}
</script>

<style>
    .homedetail {
        position: relative;
    }
</style>
