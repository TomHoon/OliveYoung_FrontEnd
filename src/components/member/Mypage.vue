<template>
      <div class="wrapper" style="background:#f6f6f6;">
        <!-- 헤더시작 -->
        <Header></Header>
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
        <!--mypage 시작-->
        <div class="mypage_wrap">
          <div class="mypage_container">
            <!--인사 시작-->
            <div class="intro_wrap">
              <div class="intro_content">
                <div class="intro_tit">
                  <span>
                    <img src="@/assets/profile_Img.jpg" class="mypage_profile" alt="프로필사진">
                  </span>
                  <span>BABY OLIVE 홍길동님 반갑습니다.</span>
                  <span>
                    <span>올리브 멤버스 라운지<span> &gt; </span></span>
                    <span>나의 프로필<span> &gt; </span></span>
                  </span>
                </div>
              </div>
              <div class="intro_point">
                <div class="point-box">
                  <span class="point-box_point">CJ ONE 포인트 <span> 1000 </span> P</span>
                  <span class="point-box_coupon">쿠폰 <span> 0 </span> 개</span>
                  <span class="point-box_deposit">예치금 <span> 0 </span> 원</span>
                </div>
              </div>
            </div>
            <!--인사 끝-->
            <!--주문/배송조회 시작-->
            <div>

            </div>
            <!--주문/배송조회 끝-->
            <!--좋아요 시작-->
            <div>

            </div>
            <!--좋아요 끝-->
            <!--1:1문의내역 시작-->
            <div>

            </div>
            <!--1:1문의내역 끝-->
            <!--상품Q&A내역 시작-->
            <div>

            </div>
            <!--상품Q&A내역 끝-->
          </div>
        </div>

        <!--mypage 끝-->
        <!-- 푸터시작 -->
        <Footer></Footer>
        <!-- 푸터끝 -->
      </div>
</template>
<script>
import axios from 'axios';
import basicMixin from "@/mixin/basicMixin.js";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default {
  mixins: [basicMixin],
  data() {
    return {
    };
  },
  components:{
    Footer,
    Header
  },
  mounted() {

  },
  methods: {

  }
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
a, address, blockquote, body, dd, div, dl, dt, em, fieldset, form, h1, h2, h3, h4, h5, h6, img, label, li, ol, p, pre, select, span, strong, textarea, ul {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
}

.wrapper {
    width: 100%;
    min-width: 1068px;
    /* background-color: mediumaquamarine; */
}
.menu_list li {
    list-style: none;
    float: left;
    padding: 0 9px 0 10px;
}
.menu_list li+li {
    background: url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/bar_1x11.gif") 0 50% no-repeat;
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
    cursor: pointer;
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
.mypage_wrap {
  margin: 40px auto;
}
.mypage_container {

}
.intro_wrap {
  border: 1px solid rgba(189, 181, 181, 0.71);
  width: 820px;
  margin: 0 auto;
  height: 112px;
}
.intro_content {
  border-bottom: 1px solid rgba(189, 181, 181, 0.71);
  width: 100%;
  height: 55px;
  background-color: #cfd31a;
}
.intro_tit {
  width: 90%;
  margin: 0 auto;
  line-height: 45px;
  transform: translateY(-6px);

}
.mypage_profile {
  border-radius: 100%;
  width: 40px;
  height: 40px;
  transform: translateY(13px);

}
.intro_tit span {

}
.intro_tit span:nth-child(1) {
}
.intro_tit span:nth-child(2) {
  font-size: 20px;
  margin-left: 10px;
  color: white;
  font-weight: 900;
}
.intro_tit span:nth-child(3) {
  margin-left: 10px;
  color: white;
  float: right;
  transform: translateY(10px);

}
.intro_tit span:nth-child(3) span {
  color: white;
  font-size: 14px;
  font-weight: 700;

}
.intro_tit span:nth-child(3) span span{
  color: rgba(96, 78, 78, 0.27);
  font-size: 17px;
}
.point-box {
  line-height: 55px;
  font-size: 13px;
  font-weight: 700;
}
.point-box_point {
  margin-left: 80px;
}
.point-box_point span {
  font-size: 18px;
  color: #f27370;
}
.point-box_coupon {
  margin-left: 200px;
}
.point-box_coupon span{
  font-size: 18px;
  color: #f27370;
}
.point-box_deposit {
  margin-left: 180px;
}
.point-box_deposit span{
  font-size: 18px;
  color: #f27370;
}
</style>



