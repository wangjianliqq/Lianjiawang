<template>
    <div class="calculator">
        <div class="cal-title">
            <div class="loan-tab-title">房贷计算器</div>
            <p>税费、房贷信息仅供参考，具体金额请以实际发生为准。</p>
        </div>
        <div class="cal-loan">
            <div class="cal-option">
                <div class="cal-row">
                    <label for="">贷款类型：</label>
                    <div class="cal-content">
                        <span class="cal-itemName">商贷</span>
                        <span class="cal-arrow iconfont">&#xe62d;</span>
                        <ul style="display: none;"><li>商贷</li><li>公积金</li><li>组合贷款</li></ul>
                    </div>
                </div>
                <div class="cal-row">
                    <label for="">贷款金额：</label>
                    <div class="cal-content2">
                        <span class="cal-itemName">7成</span>
                        <span class="cal-arrow iconfont">&#xe62d;</span>
                        <ul style="display: none;"><li data-value="0.8">8成</li><li data-value="0.7">7成</li><li data-value="0.6">6成</li><li data-value="0.5">5成</li><li data-value="0.4">4成</li><li data-value="0.3">3成</li><li data-value="0.2">2成</li></ul>
                    </div>
                    <div class="cal-input-bord">
                        <input type="text" class="mixInput">
                        <span>万元</span>
                    </div>
                </div>
                <div class="cal-row">
                    <label for="">贷款期限：</label>
                    <div class="cal-content">
                        <span class="cal-itemName">25年</span>
                        <span class="cal-arrow iconfont">&#xe62d;</span>
                        <ul style="display: none;"><li>25年</li><li>20年</li><li>15年</li><li>10年</li><li>5年</li></ul>
                    </div>
                </div>
                <div class="cal-row">
                    <label for="">商贷年利率：</label>
                    <div class="cal-content2">
                        <span class="cal-itemName">最新基准利率</span>
                        <span class="cal-arrow iconfont">&#xe62d;</span>
                        <ul style="display: none;"><li data-value="0.7">7折</li><li data-value="0.75">7.5折</li><li data-value="0.8">8折</li><li data-value="0.85">8.5折</li><li data-value="0.9">9折</li><li data-value="0.95">9.5折</li><li data-value="1">最新基准利率</li><li data-value="1.05">1.05倍</li><li data-value="1.1">1.1倍</li><li data-value="1.2">1.2倍</li><li data-value="1.3">1.3倍</li></ul>
                    </div>
                    <div class="cal-input-bord">
                        <input type="text" class="mixInput">
                        <span>%</span>
                    </div>
                </div>
                <div class="cal-row-btn"><button>开始计算</button></div>
            </div>
            <div class="cal-loan-result">
                <div class="loan-title" id="loan-title">
                    <span class="fl-loan-select">等额本息还款</span>
                    <span class="fr-loan-select">等额本金还款</span>
                </div>
                <div class="loan-interest">
                    <div class="loan-item">
                        <span class="loan-name">月供：</span>
                        <span class="loan-value-repayment">6482.32元</span>
                    </div>
                    <div class="loan-item">
                        <span class="loan-name">还款月数：</span>
                        <span class="loan-value-monthNum">300月</span>
                    </div>
                    <div class="loan-item">
                        <span class="loan-name">总利息：</span>
                        <span class="loan-value-totalInterest">824696.13元</span>
                    </div>
                    <div class="loan-loan-item">
                        <span class="loan-name">本息合计：</span>
                        <span class="loan-value-totalMoney">1944696.13元</span>
                    </div>
                </div>
            <!--<div class="loan-capital" style="display: none" >
                <div class="loan-item">
                    <span class="loan-name">月供：</span>
                    <span class="loan-value-repayment" >8306.67元</span>
                    <div class="loan-des"><div>首月后每月递减<span id="decrease">15.24</span>元</div></div>
                </div>
                <div class="loan-item">
                    <span class="loan-name">还款月数：</span>
                    <span class="loan-value-monthNum">300月</span>
                </div>
                <div class="loan-item">
                    <span class="loan-name">总利息：</span>
                    <span class="loan-value-totalInterest">688286.67元</span>
                </div>
                <div class="loan-item">
                    <span class="loan-name">本息合计：</span>
                    <span class="loan-value-totalMoney">1808286.67元</span>
                </div>
            </div>-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomedetailCalculator'
}
</script>

<style>
    .calculator {
        width: 700px;
        height: 430px;
        position: relative;
        left: 150px;
        margin: 85px 0 0 0;
    }
    .cal-title {
        width: 700px;
        height: 50px;
        position: absolute;
        left: 0;
        margin: 0;
        padding: 0;
        text-align: left;
    }
    .loan-tab-title {
        width: 150px;
        height: 23px;
        display: inline-block;
        position: absolute;
        margin: 0;
        padding: 0;
        line-height: 23px;
        color: black;
        font-size: 23px;
        font-weight: bold;
    }
    .cal-title p {
        width: 400px;
        height: 23px;
        display: inline-block;
        position: absolute;
        margin: 0;
        padding: 0;
        line-height: 23px;
        font-size: 14px;
        float: right;
        right: 0;
        text-align: right;
        color: #7f8183;
    }
    .cal-loan {
        width: 700px;
        height: 300px;
        position: absolute;
        left: 0;
        top: 60px;
        margin: 0;
        padding: 0;
    }
    .cal-option {
        width: 440px;
        height: 300px;
        position: absolute;
    }
    .cal-row {
        width: 440px;
        height: 45px;
        margin-bottom: 20px;
        line-height: 45px;
        position: relative;
    }
    .cal-row label {
        width: 100px;
        height: 14px;
        display: inline-block;
        position: absolute;
        left: 0;
        font-size: 14px;
        color: #7f8183;
        text-align: left;
    }
    .cal-content {
        width: 340px;
        height: 45px;
        position: absolute;
        left: 100px;
        background-color: #fafafa;
        cursor:pointer;
    }
    .cal-itemName {
        width: 100px;
        height: 18px;
        line-height: 18px;
        margin: 15px 0;
        text-align: left;
        display: inline-block;
        position: absolute;
        left: 20px;
        color: #616b6e;
        font-size: 16px;
    }
    .cal-arrow {
        width: 35px;
        height: 18px;
        line-height: 18px;
        display: inline-block;
        font-size: 18px;
        color: black;
        float: right;
        right: 5px;
        position: absolute;
        top: 13px;
    }
    .cal-content2 {
        width: 180px;
        height: 45px;
        position: absolute;
        left: 100px;
        background-color: #fafafa;
        cursor:pointer;
    }
    .cal-input-bord {
        width: 140px;
        height: 44px;
        position: absolute;
        margin-left: 10px;
        right: 0;
        font-size: 16px;
    }
    .mixInput {
        width: 140px;
        height: 43px;
        border-left: none;
        border-right: none;
        border-top: none;
        border-bottom: solid #e8e6e6 1px;
        outline: none;
    }
    .cal-input-bord span {
        color: #616b6e;
        position: absolute;
        top: 0;
        right: 0;
    }
    .cal-row-btn {
        width: 440px;
        height: 45px;
    }
    .cal-row-btn button {
        width: 340px;
        height: 45px;
        background-color: white;
        border: 1px solid #a5a5a5;
        font-size: 16px;
        color: #6a6a6a;
        float: right;
    }
    .cal-loan-result {
        width: 200px;
        height: 180px;
        position: absolute;
        right: 0;
    }
    .loan-title {
        width: 200px;
        position: absolute;
        font-size: 14px;
        font-weight: bold;
        height: 30px;
        border-bottom: 1px solid #e4e4e4;
    }
    .fl-loan-select {
        width: 84px;
        height: 16px;
        display: inline-block;
        color: #364249;
        float: left;
        cursor:pointer;
    }
    .fr-loan-select {
        width: 84px;
        height: 16px;
        display: inline-block;
        color: #9c9e9f;
        float: right;
        cursor:pointer;
    }
    .loan-interest {
        position: absolute;
        width: 200px;
        height: 135px;
        top: 50px;
    }
    .loan-item {
        width: 200px;
        height: 21px;
        margin-bottom: 10px;
        line-height: 21px;
    }
    .loan-value-monthNum,.loan-value-repayment,.loan-value-totalInterest,.loan-value-totalMoney {
        display: inline-block;
        float: right;
        text-align: right;
        width: 110px;
        height: 21px;
        line-height: 21px;
        color: #364249;
        font-weight: bold;
        font-size: 14px;
    }
    .loan-name {
        display: inline-block;
        float: left;
        text-align: left;
        width: 90px;
        height: 21px;
        line-height: 21px;
        color: #9c9e9f;
        font-size: 14px;
    }
</style>
