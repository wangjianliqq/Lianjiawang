<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="content">
        <div class="leftContent">
            <div class="orderFilter">
                <ul>
                    <li v-for="(item,index) of defaultList" v-bind:key="index" v-bind:class="{default:showDefault==index}" v-on:click="showDefaults(index)">
                        <h3>
                            <a href="#">{{item.defaults}}</a>
                        </h3>
                    </li>
                </ul>
            </div>
            <div class="orderType">
                <router-link to="" class="list iconfont">&#xe699;</router-link>
                <router-link to="" class="img iconfont">&#xe6a9;</router-link>
            </div>
            <div class="resultDes">
                <h2 class="total">
                    共找到
                    <span> 44491 </span>
                    套南京二手房
                </h2>
            </div>
        </div>
        <div class="rightContent"></div>
    </div>
</template>

<script>
export default {
  name: 'ErshoufangContent',
  data () {
    return {
      defaultList: [
        {defaults: '默认排序'},
        {defaults: '最新房源'},
        {defaults: '单价'},
        {defaults: '总价'},
        {defaults: '带看房源'}
      ],
      showDefault: 0
    }
  },
  methods: {
    showDefaults (index) {
      this.showDefault = index
    }
  }
}
</script>

<style>
    .default {
        background-color: #00ae66;
    }
    .content {
        width: 1085px;
        margin: 35px 140px 10px 140px;
    }
    .leftContent {
        width: 910px;
        position: relative;
        margin-right: 0;
    }
    .orderFilter {
        width: 910px;
        height: 50px;
        border-bottom: solid #00ae66 2px;
    }
    .orderFilter ul {
        width: 910px;
        height: 50px;
        margin: 0;
        padding: 0;
        line-height: 50px;
    }
    .orderFilter li {
        width: 90px;
        height: 50px;
        float: left;
        list-style: none;
    }
    .orderFilter li a {
        text-decoration: none;
        color: #333;
        font-size: 14px;
        font-weight: lighter;
    }
    .orderFilter li h3 {
        margin: 0;
    }
    .orderType {
        position: absolute;
        top: 0;
        right: 0;
        width: 90px;
        height: 50px;
    }
    .list,.img {
        width: 25px;
        height: 25px;
        font-size: 18px;
        position: absolute;
        margin: 0 auto;
        line-height: 25px;
        text-decoration: none;
    }
    .list {
        left: 30px;
        top: 15px;
    }
    .img {
        right: 0;
        top: 15px;
    }
    .resultDes {
        width: 910px;
        height: 56px;
        margin: 0;
        border-bottom: solid #e8e6e6 1px;
    }
    .total {
        width: 270px;
        height: 56px;
        line-height: 56px;
        font-weight: bold;
        font-size: 20px;
        color: #394043;
        margin: 0;
        padding: 0;
        display: block;
    }
    .total span {
        color: #00ae66;
        font-weight: bold;
        font-size: 22px;
    }
</style>
