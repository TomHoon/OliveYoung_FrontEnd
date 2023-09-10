<template>
  <div class="wrapper">
        <!-- 헤더시작 -->
        <div class="Header">
            <div class="top_util">
                <ul class="menu_list">
                    <li class="test">테스트</li>
                    <li class="join" @click="goJoin">회원가입</li>
                    <li class="login" @click="goLogin">로그인</li>
                    <li class="cart">장바구니</li>
                    <li class="order">주문배송</li>
                    <li class="customer">고객센터</li>
                    <li class="store" @click="goDetails">매장안내</li>
                    <li class="ProductInsert" @click="ProductInsert">상품등록</li>
                </ul>
            </div>

            <div class="header_inner">
                <h1>
                    <a href="/">
                        <img src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png" alt="올리브영">
                    </a>
                </h1>
                <div class="search_box" id="w_search_box">
                    <div class="placeholder_area">
                        <input type="text" placeholder="검색어를 입력해주세요">
                    </div>
                    <button id="searchSubmit">검색</button>
                </div>
                <ul class="mymenu-area">
                    <li class="delivery" id="todayDeliveryContainer">
                        <a href="javascript:;" id="tddlvr_header_today_icon" class="mymenu-layer">
                            오늘드림
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 헤더끝 -->

        <!-- GNB시작 -->
        <div id="Gnb" class="main gen1">
            <div id="gnbWrap">
                <!-- 전체 카테고리 anchor 태그 > 추후 개발예정 -->
                <a href="" id="btnGnbOpen">
                    카테고리
                </a>
                <!-- anchor태그 클릭시 layer_all_menu > display block 처리하기 -->
                <div class="layer_all_menu" id="gnbAllMenu"></div>
                
                <!-- 그 외 카테고리들 -->
                <ul class="gnb_menu_list">
                    <li>
                        <a href="">
                            <span>오특</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>랭킹</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>LUXE EIDT</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>기획전</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>세일</span>
                        </a>
                    </li>
                        <li>
                            <a href="">
                                <span>기프트카드</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>멤버십/쿠폰</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>이벤트</span>
                            </a>
                        </li>
                </ul>
            </div>
        </div>
        <!-- GNB끝 -->
        <div class="detail-container">
            <div class="detail-contents">
                <div class="page-location">
                    <a class="page-location-home" href=""></a>
                    <ul class="page-nav">
                        <li>
                            <a class="page-nav-a" href="">
                                헤어케어
                            </a>
                        </li>
                        <li>
                            <a class="page-nav-a" href="">
                                트리트먼트/팩
                            </a>
                        </li>
                        <li>
                            <a class="page-nav-a" href="">
                                헤어 트리트먼트
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    border: 0;
    color: #666;
    font-family:Montserrat,-apple-system,NotoSansCJKkr,AppleSDGothicNeo,Roboto,dotum,"돋움",sans-serif;
    font-size:14px;
}
* {
    box-sizing: border-box;
}
a, address, blockquote, body, dd, div, dl, dt, em, fieldset, form, h1, h2, h3, h4, h5, h6, img, input, label, li, ol, p, pre, select, span, strong, textarea, ul {
    margin: 0;
    padding: 0;
    border: 0;
}

.wrapper {
    width: 100%;
    min-width: 1068px;
    /* background-color: mediumaquamarine; */
}
.Header {
    width: 1020px;
    margin: 0 auto;
}
.top_util {
    width: 100%;
    height: 40px;
    position:relative;
}
.menu_list {
    position:absolute;
    right: 0px;
    bottom: 0px;
}
.menu_list li {
    list-style: none;
    float: left;
    padding: 0 9px 0 10px;
}
.menu_list li+li {
    background: url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/bar_1x11.gif") 0 50% no-repeat;
}


.header_inner {
    height: 90px;
    width: 1020px;
}

/* 
* div 영역 안에서 float를 시전하면
* 영역 만큼 행 하나로 배치 
*/
.header_inner h1{
    margin-top: 21px;
    float: left;
}

.header_inner h1 a img{
    width: 248px;
    height: 42px;
}

.header_inner .search_box {
    float:left;
    position:relative;
    width:340px;
    height: 40px;
    padding: 0 45px 0 20px;
    margin: 22px 0 0 90px;
    border: 2px solid #9bce26;
    border-radius: 20px;
    background:#fff;
}

.header_inner .search_box #searchSubmit{
    position:absolute;
    top:7px;
    right:18px;
    width:21px;
    height: 21px;
    background:url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_search21x212.png") 50% 50% no-repeat;
    text-indent: -9999px;
}

.header_inner .search_box input[type=text] {
    background-color:transparent;
    border:0;
    height: 40px;
}
button {
    border:0;
    text-align:center;
    color: #fff;
    text-indent:100px;
}
.header_inner .mymenu-area{
    float:right;
    margin-top: 10px;
}

.header_inner .mymenu-area ul{
    padding: 0px;
    width: 120px;
    height:65px;
}

.header_inner .mymenu-area > li{
    list-style: none;
    /* padding-top: px; */
    float:left;
}
.header_inner .mymenu-area .delivery a{
    text-decoration: none;
    padding: 4px 27px 3px 0;
    color: black;
    background:url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_delivery_flag.png") right 2px/22px 20px no-repeat;
}
#Gnb {
    position:relative;
    width:100%;
    min-width:1020px;
    height:47px;
    background:#fff;
    border-top: 1px solid #ddd;
    border-bottom: 2px solid #555;
    z-index: 10;
}
#gnbWrap {
    position:relative;
    width: 1020px;
    margin: 0 auto;
}
#btnGnbOpen {
    float:left;
    width:170px;
    height:44px;
    padding-left:27px;
    border-right:1px solid #ddd;
    border-left:1px solid #ddd;
    line-height:44px;
    color: #000;
    font-size: 15px;
    font-weight:700;
    text-align:left;
}
a {
    text-decoration: none;
}
li {
    list-style: none;
}

#btnGnbOpen:before {
    content:"";
    display:inline-block;
    margin: 0 8px 0 0;
    background:url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_menu_off.png") 0 14px no-repeat;
    width:24px;
    height:44px;
    vertical-align:middle;
}

#Gnb .layer_all_menu {
    position: absolute;
    top:44px;
    width:1020px;
    border:2px solid #2f3030;
    z-index:20;
    display:none;
}

#Gnb .gnb_menu_list {
    position:relative;
    top: 0;
    right: 0;
}
#Gnb .gnb_menu_list>li {
    float:left;
    margin-left:45px;
}
#Gnb .gnb_menu_list>li:first-child {
    margin-left:50px;
}

#Gnb .gnb_menu_list>li>a{
    display:block;
    height:44px;
    line-height:44px;
    color:#000;
    font-size: 16px;
    font-weight: 700;
    letter-spacing:-.04em;
}

#Container {
    width: 100%;
    min-width: 1020px;
}

#Contents {
    width:1020px;
    height:100%;
    margin: 0 auto;
}

.main_full_banner {
    width: 100%;
    height: 450px;
}

.main_full_banner .banner_wrap {
    position: absolute;
    width: 100%;
    left:0;
    background: #f5f5f5;
    z-index: 0;
    height:450px;
    min-width:1020px;
    overflow:hidden;
}

.slick-slider {
    display:block;
    position:relative;
}

.main_full_banner .banner_wrap .slick-arrow.slick-prev {
    left: 50%;
    margin-left:-290px;
}

.main_full_banner .banner_wrap .slick-arrow {
    position: absolute;
    bottom:30px;
    z-index: 2;
}

.slick-arrow.slick-prev {
    background-position: 0 0;
}

.slick-arrow {
    display: inline-block;
    width: 40px;
    height: 40px;
    background: url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_arrow40x40_2.png") no-repeat;
    text-indent: -9999px;
}

.main_full_banner .banner_wrap .slick-list {
    min-width: 1020px;
}

.slick-list {
    position:relative;
    display: block;
    overflow:hidden;
    margin: 0;
    padding: 0;
}

.slick-track {
    min-width:1020px;
}

.slick-track {
    position: relative;
    top:0;
    left:0;
    display:block;
    z-index: 1;
}

.slick-initialized .slick-slide {
    display:block;
}

.slick-slide {
    float: left;
    height:100%;
    min-height:1px;
}

.main_full_banner .banner_link {
    display:block;
    position:relative;
    height:450px;
    overflow:hidden;
}

.main_full_banner .banner_link .banner_desc {
    position:absolute;
    top:52px;
    left:50%;
    font-size:18px;
    color:#666;
    z-index:1;
    margin-left:-290px;
    font-weight:700;
}

.main_full_banner .banner_link .banner_desc .tit{
    display:block;
    font-size:18px;
    color:#000;
}

.main_full_banner .banner_link .banner_desc strong {
    display:block;
    width:360px;
    margin-bottom: 10px;
    font-size:48px;
    color:#1f1f1f;
    line-height:56px;
    word-break: keep-all;
    font-weight: 400;
}

strong { 
    margin: 0;
    padding: 0;
    border: 0;
}

.main_full_banner .banner_link img {
    position: absolute;
    top: 0;
    left: 50%;
    transform:translateX(-50%);
}

img {
    border: 0;
    vertical-align:top;
    color: #666;
}

.main_mid_banner {
    margin: 50px 0 0;
}

.main_mid_banner > a{
    display:block;
    width:1020px;
    /* vertical-align:bottom; */
}

.main_mid_banner img {
    width: 1020px;
    height:102px;
}

.two {
    height: auto;
    margin-top: 0;
    border-bottom: 0;
}

.inner {
    overflow: hidden;
    float:left;
    width:50%;
    height:575px;
}

.curation_slide .type03 {
    margin-top: 26px;
    margin-bottom:27px;
}

.curation_area .curation_slide {
    position:relative;
    margin-top: 50px;
}

.curation_area .two .tit_type03 {
    height:62px;
}

.tit_type03 {
    margin: 60px 30px 0;
    font-weight: 700;
    font-size:24px;
    color: #000;
    position:relative;
    line-height:1.3;
    letter-spacing:0;
}

.tit_type03 .moreBtn {
    position:absolute;
    bottom:3px;
    right:0;
    background: #fff;
}

.tit_type03 .moreBtn span {
    padding-right: 11px;
    background: url("https://static.oliveyoung.co.kr/pc-static-root/image/curation/ico_more_5x10.png") center right 0/5px auto no-repeat;
    font-size: 15px;
    font-weight:500;
    color: #aaa;
}

.curation_area .two .curation_slide .type03 .slick-list {
    overflow:hidden;
    height:320px;
}

.slick-list {
    position:relative;
    display:block;
    margin:0;
    padding: 0;
}

.slick-track {
    position:relative;
    top:0;
    left:0;
    display:block;
    z-index: 1;
}

.curation_list {
    font-size: 0;
}
.curation_list .curation_item {
    display:inline-block;
    position:relative;
    width:255px;
    padding:0 10px;
    vertical-align: top;
}

.curation_area .slide_list .item {
    display:block;
    position:relative;
    text-align: center;
}

.curation_area .slide_list .item .thumb_flag{
    position:absolute;
    top:7px;
    left:17px;
    line-height: 44px!important;
}

.curation_area .slide_list .item .thumbImg {
    display:block;
    width:215px;
    height:215px;
    margin: 0 auto;
}

.curation_area .slide_list .item .thumbImg>img{
    width: auto!important;
    max-width:215px;
    height:auto!important;
    max-height:215px;
}
.curation_area .slide_list .item .prd_name {
    display:block;
    width:215px;
    min-height:40px;
    padding: 0 10px;
    margin:8px auto 0;
    text-decoration: none;
}

.curation_area .slide_list .item .prd_name .tx_name{
    overflow:hidden;
    height:40px;
    padding:2px 0;
    line-height:18px;
    text-overflow: ellipsis;
    color:#000;
    font-size:14px;
    text-align: left;
}

.curation_area .slide_list .item .prd_price {
    position:relative;
    width:215px;
    height:25px;
    margin: 5px auto 0;
    padding: 0 10px;
    line-height:22px;
    text-align:left;
}
.curation_area .slide_list .item .prd_price .tx_org{ 
    color:#a9a9a9;
    font-size:12px;
    text-decoration:line-through;
    vertical-align: middle;
    font-weight: 400;
}

.curation_area .slide_list .item .prd_price .tx_org+.tx_cur{ 
    margin:0 0 0 7px;
    vertical-align: bottom;
}

.curation_area .slide_list .item .prd_price .tx_cur{ 
    display:inline-block;
    color:#e02020;
    font-size: 14px;
    font-weight:700;
}

.curation_area .slide_list .item .prd_price .tx_cur>span{ 
    display:inline-block;
    font-size:20px;
    vertical-align: -1px;
}

.tx_num {
    letter-spacing: -.02em!important;
    font-weight: 500;
}

.curation_area .slide_list .item .prd_flag {
    width:215px;
    margin:5px auto 0;
    padding: 0 10px;
    text-align:left;
}

.prd_flag {
    overflow:hidden;
}


.curation_area .slide_list .item .prd_flag>.icon_flag {
    float:none;
}

.icon_flag.sale {
    background-color: #f65c60;
}
.icon_flag.coupon {
    background-color: #9bce26;
}
.icon_flag.delivery {
    width:60px;
    background-color: #f374b7;
}

.icon_flag {
    display:inline-block;
    width:40px;
    height: 18px;
    border-radius: 9px;
    line-height: 17px!important;
    color: #fff !important;
    font-size:12px!important;
    text-align:center;
    vertical-align:middle;
    text-decoration: none!important;
    margin:0!important;
}
.curation_area .two {
    height:auto;
    margin-top:0;
    border-bottom:0;
}

.curation_area {
    position:relative;
    height:525px;
    margin-top:49px;
}
.curation_area .two .curation_slide .type03 .btnRef {
    margin-top:40px;
}

#Container .curation_area .two .btnRef .btn{
    border: 1px solid #ddd;
    border-radius: 4px;
}

.btnRef .btn {
    width: 335px;
    height: 40px;
    background: 0 0;
}

.main_sub_tit {
    height:40px;
    margin: 51px 0 8px;
    font-size:26px;
    color: #000;
    text-align: center;
    line-height: 40px;
}
strong {
    margin: 0; padding: 0; border: 0;
}

.recomm_plan {
    margin: 0 auto 10px;
    width: 1020px;
}

.recomm_plan_list {
    font-size:0;
}
.recomm_plan_list li:first-child {
    margin-left:0;
}
.recomm_plan_list li{
    overflow:hidden;
    display:inline-block;
    width:500px;
    height:227px;
    border-radius:8px;
    vertical-align:top;
    margin-left:20px;
}

.recomm_plan_list li a {
    display:block;
    position:relative;
    width:100%;
    height:100%;
}

.recomm_plan_list li a img {
    position:absolute;
    left:0;
    top:50%;
    transform: translateY(-50%);
    width:100%;
} 

.recomm_plan_list li a .text_wrap {
    display:flex;
    flex-direction:column;
    justify-content: center;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:1;
}

.recomm_plan_list li a .text_wrap dl {
    margin-left: 28px;
}

.recomm_plan_list li a .text_wrap dt {
    overflow:hidden;
    max-width:222px;
    font-size:21px;
    line-height: 1.35;
    letter-spacing: -.67px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.recomm_plan_list li a .text_wrap dd {
    overflow:hidden;
    margin-top:15px;
    max-width: 215px;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.main_plan_banner .ty02 {
    position: relative;
}

.main_sub_tit {
    height:40px;
    margin: 51px 0 8px;
    font-size:26px;
    color: #000;
    text-align:center;
    line-height: 40px;
}

.main_plan_banner .ty02 .banner_wrap{
    position: relative;
    width:1020px;
    height:auto;
    overflow:hidden;
}

.main_plan_banner .ty02 .banner_wrap .slick_slider {
    margin-left: -10px;
    width: 1040px;
}

.slick-slider {
    position:relative;
    display:block;
}

.slider_unit {
    position:relative;
    float:left;
    padding:0 10px;
    width:520px!important;
    height:620px;
}

.plan_top {
    height:300px;
}

.plan_banner {
    position: relative;
    overflow:hidden;
    width: 500px;
    height:300px;
    background-size: 500px auto;
    background-position: 0 0;
    background-repeat: no-repeat;
}

.plan_banner > a {
    display:flex;
    flex-direction:column;
    justify-content: center;
    width:500px;
    height:259px;
    padding:0;
}

.plan_banner > a > p {
    position:relative;
    top:inherit;
    left:inherit;
    margin-left: 28px;
    max-width: 360px;
    color:#000;
    text-align: left;
}

.plan_banner>a>p>strong.tit{
    overflow:hidden;
    max-width:222px;
    height:inherit;
    margin-top: 0;
    font-size: 21px;
    line-height: 1.35;
    letter-spacing:-.67px;
    font-weight:700;
    text-overflow:ellipsis;
    white-space:nowrap;
}

.plan_banner>a>p>strong{
    display:block;
    overflow:hidden;
    height:30px;
    margin-top:-4px;
    font-size:20px;
}
.plan_banner>a>p>span.desc{
    overflow:hidden;
    height:inherit;
    margin-top:15px;
    max-width:215px;
    font-size: 16px;
    line-height: 20px;
    color:#333;
    text-overflow: ellipsis;
    white-space:nowrap;
}
.cate_prd_list {
    position:relative;
    margin:-41px auto 0 12px;
    padding:15px 15px 0;
    width:475px;
    font-size: 0;
    background-color: #fff;
    border-bottom: 0;
    z-index:1;
}

.cate_prd_list > li:first-child{
    margin-left:0;

}

.cate_prd_list > li{
    /* float:inherit; */
    padding:0;
    display:inline-block;
    margin-left:15px;
    width:215px;
    vertical-align:top;
}
.cate_prd_list>li.prd_info {
    text-align: center;
    font-size: 14px;
}
.cate_prd_list>li.prd_info.prd_thumb{
    position:relative;
    display: block;
    width:215px;
    height: 215px;
    background: #fff;
}
.prd_thumb .thumb_flag{
    position: absolute;
    top:18px;
    left:16px;
    line-height: 44px!important;
}
.best{
    color:#f05a5e;
    border-color:#f05a5e;
}

.thumb_flag {
    display:inline-block;
    width:48px;
    height: 48px;
    font-size: 14px;
    background: #fff;
    border-radius: 24px;
    border-width:2px;
    border-style: solid;
    text-align: center;
    font-weight: 700;
}
.prd_thumb > img {
    width: auto!important;
    max-width: 215px;
    height: auto!important;
    max-height: 215px;
}
.cate_prd_list .prd_info {
    text-align: center;
    font-size:14px;
}
.prd_info .prd_name {
    margin-top:15px;
    display:block;
    min-height: 62px;
    margin:8px 0 0;
    text-decoration: none;
}
.prd_name > a {
    display:block;
}
.prd_name .tx_brand {
    display: block;
    height: 20px;
    line-height: 20px;
    color:#777;
    font-weight:700;
}
.prd_name .tx_name {
    margin-top:5px;
    overflow:hidden;
    height: 40px;
    padding: 2px 0;
    line-height: 18px;
    text-overflow: ellipsis;
    color:#000;
    font-size:14px;
    text-align:center;
}

.prd_info .btn_zzim {
    position:absolute;
    top:175px;
    left:auto;
    right:0;
    width:40px;
    height:40px;
    border:1px solid #ebebeb;
    font-size:0;
    background:url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_zzim.png") 50% 50% no-repeat #fff;
}
.prd_price {
    height: 25px;
    line-height:22px;
}
.tx_org {
    color:#777;
    font-size:12px;
    text-decoration: line-through;
    vertical-align: middle;
    font-weight:700;
}
.tx_org > span {
    display: inline-block;
    font-size:14px;
    text-decoration: line-through;
    vertical-align: 0;
}

.tx_num {
    letter-spacing: -.02em!important;
    font-weight:500;
}
.tx_cur{
    margin:0 0 0 7px;
    vertical-align: bottom;
}
.prd_price .tx_cur {
    display:inline-block;
    color:#e02020;
    font-weight: 700;
}
.tx_cur > span {
    display: inline-block;
    font-size:20px;
    vertical-align: -1px;
}
#Container .oy-magazine {
    margin-top: 80px;
}
#Container .oy-magazine h3{
    text-align: center;
}
#Container .oy-magazine h3 strong{
    font-size: 26px;
    line-height: 31px;
    color:#131518;
}
#Container .oy-magazine ul {
    display: flex;
    justify-content: space-between;
    gap:20px;
    margin-top:25px;
}

#Container .oy-magazine ul li a img {
    width: 240px;
    height: 288px;
    border-radius: 4px;
}
#Container .oy-magazine ul li a p:first-of-type {
    margin-top:15px;
}

#Container .oy-magazine ul li a p {
    font-weight: 700;
    font-size:20px;
    line-height: 24px;
    color:#131518;
}
.main_onlyone_wrap {
    max-width:1048px;
}
.main_onlyone_wrap h3 {
    text-align:center;
    margin-top:65px;
    margin-bottom:25px;
}
.main_onlyone_wrap h3 strong{
    font-weight: 700;
    font-size: 25px;
}

.main_onlyone_wrap img {
    width: 314px;
    height:140px;
    border-radius: 10px;
}

.main_onlyone_wrap ul {
    display:flex;
    justify-content: space-between;
    gap: 20px;
}
.main_onlyone_wrap ul li{
    position:relative;
}
.main_onlyone_wrap ul li:first-child .sub-tit1{
    position:absolute;
    top:-36px;
    left:10px;
}
.main_onlyone_wrap ul li:nth-child(2) .sub-tit1{
    position:absolute;
    top:-36px;
    left:10px;
}
.main_onlyone_wrap ul li:nth-child(3) .sub-tit1{
    position:absolute;
    top:-36px;
    left:10px;
}
.main_onlyone_wrap ul li:first-child .sub-tit2{
    position:absolute;
    top:-10px;
    left:10px;
}
.main_onlyone_wrap ul li:nth-child(2) .sub-tit2{
    position:absolute;
    top:-10px;
    left:10px;
}
.main_onlyone_wrap ul li:nth-child(3) .sub-tit2{
    position:absolute;
    top:-10px;
    left:10px;
}
.main_onlyone_wrap ul li:first-child p{
    position: absolute;
    top:97px;
    left:10px;
}
.main_onlyone_wrap ul li:nth-child(2) p{
    position: absolute;
    top:97px;
    left:10px;
}
.main_onlyone_wrap ul li:nth-child(3) p{
    position: absolute;
    top:97px;
    left:10px;
}
.main_recommendation_wrap {
    padding: 0 20px 50px;
    margin-top:100px;
    text-align:center;
}
.main_recommendation_wrap .main_sub_tit {
    position: relative;
    display:inline-block;
    margin-top:0;
}
.main_sub_tit {
    height:40px;
    margin:51px 0 8px;
    font-size:26px;
    color:#000;
    text-align:center;
    line-height:40px;
}
.ad{
    color: #757d86;
    background-color:#f0f1f4;
}
.tit-flag {
    position:absolute;
    top:8px;
    margin-left:12px;
    padding: 3px 7px;
    border-radius: 2px;
    font-size:14px;
    line-height:17px;
}
.main_recommendation_wrap > div {
    margin-top: 70px;
}
.cate_prd_list .no_line{
    border-bottom: 0;
}
.horizontal > li {
    margin-right:40px;
    width:450px;
    align-items:center;
    min-height: 175px;
    padding:0 0 0 195px;
}
.horizontal>li .prd_info {
    flex: 1;
    text-align:left;
    font-size:14px;
}
.prd_thumb {
    position: absolute;
    left: 0;
    top:0;
    width:175px;
    height:175px;
    /* display:block; */
}
.prd_thumb img {
    max-width:175px;
    max-height: 175px;
    width:auto!important;
    height:auto!important;
}
.prd_info .prd_name {
    margin-top:0;
    display:block;
    min-height:62px;
    margin:8px 0 0;
    text-decoration:none;
}
.prd_info .prd_name > a {
    display:block;
}
.prd_name .tx_brand {
    display: block;
    height: 20px;
    line-height: 20px;
    color:#777;
    font-weight: 700;
}
.prd_name .tx_name {
    text-align: left;
    margin-top:5px;
    overflow: hidden;
    height:40px;
    padding:2px 0;
    line-height:18px;
    text-overflow: ellipsis;
    color:#000;
    font-size:14px;
}
.prd_info .prd_price {
    height: auto;
    margin-top: 4px;
    line-height: normal;
}
.attention_brand>li {
    margin-right:8px;
    flex-shrink:0;
    width:auto;
    position:relative;
    height:100%;
    margin-top:30px;
}
.attention_brand>li>a {
    border:1px solid #dadde0;
    border-radius: 20px;
    padding:8px 15px;
    color: #757d86;
    background:#fff;
    font-size:14px;
}
.attention_brand>li:nth-child(1)>a {
    border:1px solid #dadde0;
    border-radius: 20px;
    padding:8px 15px;
    color: #fff;
    background:#000;
    font-size:14px;
}
.attention_product {
    display:flex;
}
.attention_product div{
    margin-top:45px;
    width:1020px;
    background-image:url('https://image.oliveyoung.co.kr/uploads/images/display/90000010001/380/2817562983546810098.jpg');
}
.realtime-view-rank {
    display:relative;
    border-bottom: 1px solid #d8d8d8;
    margin-bottom:100px;
}

.realtime-view-rank>h3{
    font-size:32px;
    margin-top:30px;
    margin-bottom: 30px;
}
.realtime-view-ul{
    display:flex;
}
.realtime-img{
    flex-grow:1;
}
.realtime-img img {
    width:175px;
    max-width:175px;
    max-height:175px;
    margin-right:20px;
    float:left;
}
.realtime-img h3{
    text-align:left;
    color:#777;
    height:47px;
    line-height:46px;
}
.realtime-img span{
    
}
.ranking {
    color: #777
}
.realtime-view-ul {
    display:flex;
    flex-direction: column;
}
.realtime-ul li{
    flex-grow:1;
}
.ranking-li {
    padding:8px;
    text-align:left;
}
.ranking-active {
    border:1px solid black;
    border-radius:5px;
    font-size:18px;
}
.ranking-active {
    color:#333;
    font-weight:700;
}
.notice-area {
    position:relative;
    border-top:1px solid black;
    width:100%;
    height:246px;
}
.notice-tit {
    width:600px;
    position:relative;
    border-bottom:1px solid #d8d8d8;
    height:60px;
}
.notice-tit h4{
    float:left;
    text-align: left;
    width:130px;
    padding-top: 0.9rem;
    font-size: 20px;
}
.notice-tit p{
    float:left;
    width:150px;
    line-height: 3.5rem;
    color:#a8a8a8
}
.notice-tit a {
    background:url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_arrow7x11_2.png") 100% 50% no-repeat;
    position:absolute;
    right:0;
    color:#888;
    line-height:3.5rem;
    padding-right: 15px;
}
.notice-sub {
    float:left;
    width:299px;
}
.notice-sub strong{
    float:left;
    width: 70px;
    font-size: 20px;
    line-height: 2rem;
    padding-top:1rem;
}
.sub-ul {
    float:left;
    width:140px;
    margin-left:32px;
    margin-top:20px;
}
.sub-ul li{
    text-align: left;
    padding: 5px;
}
.notice-onebyone {
    float:left;
    width:300px;
}
.notice-onebyone div{
    margin-top:20px;
    margin-bottom: 15px;
}
.notice-onebyone div p:nth-child(1){
    font-weight: 700;
    margin-bottom: 10px;
}
.notice-onebyone div p{
    text-align: left;
}
.obo-btn:nth-child(2){
    width: 145px;
}   
.obo-btn{
    background: #ccc;
    width:120px;
    height:60px;
    text-indent: 0!important;
}
.obo-btn span{
    display: inline-block;
    width:22px;
    height: 22px;
    background: url("https://static.oliveyoung.co.kr/pc-static-root/image/main/ico_customer.png") no-repeat;
}

.fre{
    background: url("https://static.oliveyoung.co.kr/pc-static-root/image/main/ico_customer.png") no-repeat !important;
    background-position: 0 -27px;
}
.qr-link {
    position:absolute;
    top:0;
    right: 0;
}
.footer {
    width:100%;
    height:50px;
    border-top: 1px solid #aaa;
    background:#f9f9f9;
    border-bottom: 1px solid #ddd;
}
.conts1 {
    margin: 40px 0 40px 0;
    position:relative;
    height:40px;
    width:1020px;
    min-width:1060px;
    margin:0 auto; 
}
.footer-ul{
    position:relative;
}
.footer-ul li:nth-child(1){
    background: 0 0;
}
.footer-ul li{
    line-height: 2rem;
    float:left;
    padding:10px;
    font-size:12px;
    background: url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/bar_1x14.gif") 0 50% no-repeat;
}
.conts2 {
    margin:0 auto;
    width: 1040px;
}
.conts2-ul-wrapper {
    width: 1020px;
    margin:0 auto;
}
.conts2-ul {
    display:flex;
    width: 100%;
    height:225px;
}
.conts2-ul li p {
    font-size:12px;
    line-height: 1.14rem;
}
.conts2-ul li h3 {
    margin-top:40px;
    line-height:2.5rem;
    font-size:14px;
}
.conts2-ul li{
    flex:1;
    position: relative;
}
.conts2-ul-p {
    position:absolute;
    top:93px;
}
.conts2-ul-lawlist {
    display:block;
    margin-top:.5rem;
    color:#9a9a9a;
    font-size:14px;
}
.active-lawlist { 
    font-weight: 700;
}
/* 메인에서 가져온 css 끝 */
.detail-container {
    width:100%;
    min-width:1020px;
    overflow: hidden;
}
.detail-contents {
    width:1020px;
    height:100%;
    margin:0 auto;
}
.page-location {
    width: 100%;
    height: 46px;
    border-bottom: 1px solid #888;
}
.page-location-home {
    float:left;
    background:url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_location.png") 0 1px no-repeat;
    width:16px;
    height:16px;
    margin-top: 10px;
}
.page-nav {
    float:left;
}
.page-nav li:nth-child(1){
    margin-left:12px;
}
.page-nav li{
    background: url(https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_location.png) 0 -30px no-repeat;
    float: left;
    position: relative;
    padding-left: 10px;
    margin-left: 31px;
    margin-top: 4px;
    color: #888;
    line-height: 30px;
}
a {
    text-decoration: none;
    color:#888;
}
.page-nav-a{
    font-size:14px;
}
.page-nav-a:after {
    content: "";
    display: inline-block;
    width: 13px;
    height: 13px;
    border:1px solid #e5e5e5;
    border: 1px solid #e5e5e5;
    background: url(https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_arrow_down7x5.png) 50% 50% no-repeat;
}
</style>