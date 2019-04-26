<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div>
        <div class="filter" v-bind:style="{height:toggleHeight1}">
            <div class="position">
                <dl class="position-total">
                    <h2>
                        <dt>位置</dt>
                    </h2>
                    <dd>
                        <a to="" class="quyue" v-on:click="changeDirectionup()" v-bind:class="{up:showColor1}">
                            区域
                            <span class="iconfont" v-show="showUp">&#xe630;</span>
                            <span class="iconfont" v-show="!showUp">&#xe62d;</span>
                        </a>
                        <a to="" class="ditiexian" v-on:click="changeDirectiondown()" v-bind:class="{up:showColor2}">
                            地铁线
                            <span class="iconfont" v-show="!showUp">&#xe630;</span>
                            <span class="iconfont" v-show="showUp">&#xe62d;</span>
                        </a>
                    </dd>
                </dl>
                <dl class="position-detail">
                    <dt></dt>
                    <dd>
                        <div class="quyueDiv">
                            <a href="" v-for="(item,index) in quyueList" v-bind:key="index" v-show="showContent">{{item.quyueName}}</a>
                        </div>
                        <div class="ditiexianDiv">
                            <a href="" v-for="(item,index) in ditiexianList" v-bind:key="index" v-show="!showContent">{{item.ditiexianName}}</a>
                        </div>
                    </dd>
                </dl>
            </div>
            <div class="list-more" v-bind:style="{height:toggleHeight2}">
                <dl class="hasmore">
                    <h2>
                        <dt>售价</dt>
                    </h2>
                    <dd>
                        <a href="" class="nofollow" v-for="(item,index) in shoujiaList" v-bind:key="index">
                            <input type="checkbox" class="hasmore-input">
                            <span class="name">{{item.shoujiaName}}</span>
                        </a>
                    </dd>
                </dl>
                <dl class="hasmore">
                    <h2>
                        <dt>面积</dt>
                    </h2>
                    <dd>
                        <a href="" class="nofollow" v-for="(item,index) in mianjiList" v-bind:key="index">
                            <input type="checkbox" class="hasmore-input">
                            <span class="name">{{item.mianjiName}}</span>
                        </a>
                    </dd>
                </dl>
                <dl class="hasmore">
                    <h2>
                        <dt>房型</dt>
                    </h2>
                    <dd>
                        <a href="" class="nofollow" v-for="(item,index) in fangxingList" v-bind:key="index">
                            <input type="checkbox" class="hasmore-input">
                            <span class="name">{{item.fangxingName}}</span>
                        </a>
                    </dd>
                </dl>
                <dl class="hasmore" v-show="!showDl">
                    <h2>
                        <dt>标签</dt>
                    </h2>
                    <dd>
                        <a href="" class="nofollow" v-for="(item,index) in biaoqianList" v-bind:key="index">
                            <input type="checkbox" class="hasmore-input">
                            <span class="name">{{item.biaoqianName}}</span>
                        </a>
                    </dd>
                </dl>
                <dl class="hasmore" v-show="!showDl">
                    <h2>
                        <dt>用途</dt>
                    </h2>
                    <dd>
                        <a href="" class="nofollow" v-for="(item,index) in yongtuList" v-bind:key="index">
                            <input type="checkbox" class="hasmore-input">
                            <span class="name">{{item.yongtuName}}</span>
                        </a>
                    </dd>
                </dl>
                <dl class="hasmore" v-show="!showDl">
                    <h2>
                        <dt>装修</dt>
                    </h2>
                    <dd>
                        <a href="#" class="nofollow" v-for="(item,index) in zhuangxiuList" v-bind:key="index">
                            <input class="iconfont hasmore-input" type="checkbox">
                            <span class="name">{{item.zhuangxiuName}}</span>
                        </a>
                    </dd>
                </dl>
            </div>
            <div class="btn-more1" v-on:click="showDiv1()" v-show="showDl">
                更多选项
                <span class="iconfont">&#xe62d;</span>
            </div>
            <div class="btn-more2" v-on:click="showDiv2()" v-show="!showDl">
                收起选项
                <span class="iconfont">&#xe630;</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ErshoufangFilter',
  data () {
    return {
      showUp: true,
      showColor1: true,
      showColor2: false,
      showContent: true,
      changeColor: -1,
      showDl: true,
      toggleHeight1: '230px',
      toggleHeight2: '95px',
      quyueList: [
        {quyueName: '鼓楼'},
        {quyueName: '建邺'},
        {quyueName: '秦淮'},
        {quyueName: '玄武'},
        {quyueName: '雨花台'},
        {quyueName: '栖霞'},
        {quyueName: '江宁'}
      ],
      ditiexianList: [
        {ditiexianName: '1号线'},
        {ditiexianName: 's1号线'},
        {ditiexianName: '2号线'},
        {ditiexianName: '3号线'},
        {ditiexianName: 's3号线'},
        {ditiexianName: '4号线'},
        {ditiexianName: 's7号线'},
        {ditiexianName: 's8号线'},
        {ditiexianName: 's9号线'},
        {ditiexianName: '10号线'}
      ],
      shoujiaList: [
        {shoujiaName: '80万以下'},
        {shoujiaName: '80-100万'},
        {shoujiaName: '100-150万'},
        {shoujiaName: '150-200万'},
        {shoujiaName: '200-250万'},
        {shoujiaName: '250-300万'},
        {shoujiaName: '300-350万'}
      ],
      mianjiList: [
        {mianjiName: '60平以下'},
        {mianjiName: '60-90平'},
        {mianjiName: '90-110平'},
        {mianjiName: '110-130平'},
        {mianjiName: '130-150平'},
        {mianjiName: '150-170平'},
        {mianjiName: '170-190平'}
      ],
      fangxingList: [
        {fangxingName: '一室'},
        {fangxingName: '两室'},
        {fangxingName: '三室'}
      ],
      biaoqianList: [
        {biaoqianName: '满二年'},
        {biaoqianName: '满五年'},
        {biaoqianName: '必看好房'},
        {biaoqianName: '新上'},
        {biaoqianName: '随时看房'},
        {biaoqianName: 'VR房源'}
      ],
      yongtuList: [
        {yongtuName: '经济适用房'},
        {yongtuName: '商品房'},
        {yongtuName: '公房'}
      ],
      zhuangxiuList: [
        {zhuangxiuName: '精装'},
        {zhuangxiuName: '简装'},
        {zhuangxiuName: '毛坯'}
      ]
    }
  },
  methods: {
    changeDirectionup () {
      this.showUp = false
      this.showColor1 = true
      this.showColor2 = false
      this.showContent = true
    },
    changeDirectiondown () {
      this.showUp = true
      this.showColor2 = true
      this.showColor1 = false
      this.showContent = false
    },
    showDiv1 () {
      this.showDl = false
      this.toggleHeight1 = '340px'
      this.toggleHeight2 = '210px'
    },
    showDiv2 () {
      this.showDl = true
      this.toggleHeight1 = '230px'
      this.toggleHeight2 = '95px'
    }
  }
}
</script>

<style>
    .checked2 {
        color: #00ae66;
    }
    a,span,h2 {
        color: #333;
        font-size: 12px;
    }
    .filter {
        width: 1085px;
        background-color: #f5f5f6;
        margin: 35px 140px;
        position: relative;
    }
    .position {
        width: 1100px;
        height: 90px;
    }
    .position-total {
        width: 1100px;
        height: 30px;
        padding-top: 10px;
        padding-left: 25px;
        position: relative;
        line-height: 27px;
    }
    .position-total dt,.position-detail dt {
        width: 50px;
        height: 27px;
    }
    .position-total dd {
        width: 1050px;
        height: 27px;
        top: 20px;
        position: absolute;
        text-align: left;
        padding-left: 30px;
    }
    .position-total dd .quyue{
        display: inline-block;
        position: absolute;
        width: 45px;
        height: 27px;
        text-decoration: none;
        margin-right: 30px;
        cursor: pointer;
    }
    .position-total dd .quyue span {
        margin-left: 5px;
        position: absolute;
        top: 0;
    }
    .up {
        color: #00ae66;
    }
    .position-total dd .ditiexian{
        display: inline-block;
        position: absolute;
        width: 45px;
        height: 27px;
        text-decoration: none;
        left: 90px;
        margin-right: 30px;
        cursor: pointer;
    }
    .position-total dd .ditiexian span {
        margin-left: 5px;
        position: absolute;
        top: 0;
    }
    .position-detail {
        width: 1100px;
        height: 40px;
        padding-left: 25px;
        line-height: 40px;
        position: relative;
        margin-top: -10px;
    }
    .position-detail dd .quyueDiv{
        width: 1050px;
        height: 27px;
        text-align: left;
        position: absolute;
        top: 0px;
        padding-left: 30px;
    }
    .position-detail dd .ditiexianDiv{
        width: 1050px;
        height: 27px;
        text-align: left;
        position: absolute;
        top: 0px;
        padding-left: 30px;
    }
    .position-detail dd a{
        display: inline-block;
        width: 45px;
        height: 27px;
        text-decoration: none;
        margin-right: 8px;
    }
    .list-more {
        width: 1100px;
    }
    .list-more .hasmore {
        width: 1100px;
        height: 27px;
        padding-left: 25px;
        line-height: 27px;
        position: relative;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    .list-more .hasmore dt {
        width: 50px;
        height: 27px;
    }
    .list-more .hasmore dd {
        width: 1050px;
        height: 27px;
        text-align: left;
        position: absolute;
        top: 0;
        padding-left: 27px;
    }
    .nofollow {
        display: inline-block;
        width: 84px;
        height: 27px;
        text-decoration: none;
        margin-right: 40px;
        cursor: pointer;
    }
    .hasmore-input {
        display: inline-block;
        position: absolute;
        margin-top: 6px;
        cursor: pointer;
        width: 12px;
        height: 12px;
        border-radius: 3px;
        outline: none;
    }
    .name {
        display: inline-block;
        position: absolute;
        margin-left: 17px;
    }
    .btn-more1 {
        width: 200px;
        margin: 0 auto;
        padding: 10px 0;
        color: #a7a8a9;
        text-align: center;
        cursor: pointer;
        font-size: 12px;
        line-height: 12px;
    }
    .btn-more2 {
        width: 200px;
        margin: 0 auto;
        padding: 10px 0;
        color: #a7a8a9;
        text-align: center;
        cursor: pointer;
        font-size: 12px;
        line-height: 12px;
        position: absolute;
        bottom: 8px;
        left: 442px;
    }
    .iconfont {
        font-size: 12px;
        color: #a7a8a9;
    }
</style>
