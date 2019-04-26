<template xmlns:http="http://www.w3.org/1999/xhtml">
    <div class="footer">
        <div class="wrapper">
            <div class="footer-title">
                <div class="footer-fl1">
                    <ul>
                        <li><a href="/">关于链家</a></li>
                        <li><a href="/">联系我们</a></li>
                        <li><a href="/">加入我们</a></li>
                        <li><a href="/">隐私声明</a></li>
                        <li><a href="/">网站地图</a></li>
                        <li><a href="/">友情链接</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-link-box">
                <div class="footer-fl2">
                    <div class="footer-tab">
                        <span><a href="/">城市二手房</a></span>
                        <span><a href="/">热门小区</a></span>
                        <span><a href="/">租房</a></span>
                        <span><a href="/">小区</a></span>
                        <span><a href="/">楼盘</a></span>
                        <span><a href="/">城市二手房推荐</a></span>
                    </div>
                    <div class="footer-link-list">
                        <a target="_blank" href="https://www.deyoulife.com/">德佑地产</a>
                        <a target="_blank" href="https://fz.lianjia.com/ershoufang/">福州二手房</a>
                        <a target="_blank" href="https://luoyang.lianjia.com/ershoufang/">洛阳二手房</a>
                        <a target="_blank" href="https://quanzhou.lianjia.com/ershoufang/">泉州二手房</a>
                        <a target="_blank" href="https://quanzhou.lianjia.com/ershoufang/">泉州二手房</a>
                        <a target="_blank" href="https://quanzhou.lianjia.com/ershoufang/">泉州二手房</a>
                        <a target="_blank" href="https://quanzhou.lianjia.com/ershoufang/">泉州二手房</a>
                        <a target="_blank" href="https://quanzhou.lianjia.com/ershoufang/">泉州二手房</a>
                        <a target="_blank" href="https://quanzhou.lianjia.com/ershoufang/">泉州二手房</a>
                        <a target="_blank" href="https://quanzhou.lianjia.com/ershoufang/">泉州二手房</a>
                        <a target="_blank" href="https://quanzhou.lianjia.com/ershoufang/">泉州二手房</a>
                        <a target="_blank" href="https://quanzhou.lianjia.com/ershoufang/">泉州二手房</a>
                        <a target="_blank" href="https://quanzhou.lianjia.com/ershoufang/">泉州二手房</a>
                        <a target="_blank" href="https://quanzhou.lianjia.com/ershoufang/">泉州二手房</a>
                        <a target="_blank" href="https://quanzhou.lianjia.com/ershoufang/">泉州二手房</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div  class="footer-fl3">
                    <div class="footer-fl3-div1">
                        <span>链家网（北京）科技有限公司 | 网络经营许可证 京ICP备16057509号-2 | © Copyright©2010-2019 链家网Lianjia.com版权所有 |</span>
                        <a href="https://img.ljcdn.com/beike/lianjia-web/1550576952648.png">营业执照</a>
                        <div class="footer-fl3-div2">
                            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802024019">
                                <img src="https://s1.ljcdn.com/feroot/pc/asset/img/home/beian.png?_v=20190305124007021" alt="">
                                <span>京公网安备 11010802024019号</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeFooter'
}
</script>

<style>
    .footer {
        background: url(footer.jpg) no-repeat center #222;
        background-size: 100% 100%;
        clear: both;
        width: 1349px;
        height: 425px;
        margin: -107px auto auto auto;
        position: relative;
    }
    .wrapper {
        width: 1150px;
        height: 426px;
        margin: 0 auto;
    }
    .footer-title {
        width: 1150px;
        height: 76px;
    }
    .footer-fl1 {
        width: 600px;
        height: 75px;
        position: absolute;
        top: 20px;
    }
    .footer-fl1 li {
        list-style: none;
        float: left;
        margin-right: 20px;
    }
    .footer-fl1 li a {
        text-decoration: none;
        color: white;
    }
    .footer-link-box {
        width: 1150px;
        height: 150px;
        margin-top: 20px;
    }
    .footer-tab {
        width: 1150px;
        height: 40px;
        float: left;
        margin-left: 40px;
    }
    .footer-tab span{
        float: left;
        margin-right: 20px;
        font-size: 14px;
        background-color: #002109;
    }
    .footer-tab span a {
        text-decoration: none;
        color: #808080;
    }
    .footer-link-list {
        width: 1000px;
        height: 80px;
        font-size: 14px;
        margin-left: 40px;
    }
    .footer-link-list a {
        color: #808080;
        text-decoration: none;
        margin-right: 10px;
        margin-bottom: 5px;
        float: left;
    }
    .footer-bottom {
        width: 1150px;
        height: 70px;
        margin-left: 40px;
    }
    .footer-bottom .footer-fl3 {
        width: 1150px;
        height: 70px;
    }
    .footer-bottom .footer-fl3 .footer-fl3-div1 {
        float: left;
        font-size: 14px;
    }
    .footer-bottom span {
        color: #e2e2e2;
    }
    .footer-bottom  .footer-fl3 a {
        font-size: 14px;
        text-decoration: none;
        color: #e2e2e2;
    }
    .footer-bottom .footer-fl3 .footer-fl3-div2 {
        text-align: left;
        margin-top: 3px;
    }
</style>
