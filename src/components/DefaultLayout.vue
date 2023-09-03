<template>
  <div class="wrapper">
        <!-- 헤더시작 -->
        <div class="Header">
            
            <div class="top_util">
                <ul class="menu_list">
                    <li class="join">회원가입</li>
                    <li class="login">로그인</li>
                    <li class="cart">장바구니</li>
                    <li class="order">주문배송</li>
                    <li class="customer">고객센터</li>
                    <li class="store">매장안내</li>
                </ul>
            </div>

            <div class="header_inner">
                <h1>
                    <a href="#">
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
        
        <!-- slick 시작 -->
        <div id="Container">
            <div id="Contents">
                <div class="main_full_banner">
                    <div class="banner_wrap slick_slider slick-initialized slick-slider" id="mainFullSlider">
                        <button class="slick-prev slick-arrow">
                            이전 슬라이드
                        </button>
                        <div class="slick-list dragglable">
                            <div class="slick-track" style="opacity:1; width:18795px;">
                                <div class="slick-slide slick-current slick-active" style="width:80vw; min-width:1020px; position:relative; left:337px; top:0px; z-index:998; opacity:1; transition:opacity 500ms ease 0s">
                                    <a href="" class="banner_link">
                                        <p class="banner_desc">
                                            <span class="tit">올영세일</span>
                                            <strong>새로움이<br>가득한<br>올영세일</strong>
                                            <span>최대 70%할인혜택</span>
                                        </p>
                                        <img src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/1/5423905811654969447.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="main_mid_banner">
                    <a href="" class="home_banner_top_split">
                        <img src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/138/8835336063241888571.jpg" alt="">
                    </a>
                </div>

                <div class="curation_wrap">
                    <div class="curation_area two">
                        <div class="inner">
                            <div class="curation_slide type03" id="recobell_area1">
                                <div class="tit_type03">
                                    유사한 고객님이
                                    <br>
                                    많이 구매했어요
                                    <button class="moreBtn" id="crt_more_p002">
                                        <span>더보기</span>
                                    </button>
                                </div>

                                <div class="curation_slide type03">
                                    <ul id="main_curation02_01" class="slide_list slick_slider slick-initialized slick-slider">
                                        <div class="slick-list">
                                            <div class="slick-track" style="opacity:1; width:2550px">
                                                <li class="slick-slide slick-current slick-active" style="width:510px; position:relative;left:0px;top:0px;z-index:999;opacity:1;">
                                                    <ul class="curation_list">
                                                        <li class="curation_item">
                                                            <a href="" class="item a_detail">
                                                                <span class="thumb_flag best">
                                                                    베스트
                                                                </span>
                                                                <span class="thumbImg">
                                                                    <img src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/A00000017142211ko.jpg?l=ko" alt="">
                                                                </span>
                                                                <div class="prd_name">
                                                                    <p class="tx_name">[1&1]어노브 실크 오일 에센스 더블 기획세트(70ml+70ml)</p>
                                                                </div>
                                                                <p class="prd_price">
                                                                    <span class="tx_org">
                                                                        <span class="tx_num">35,000</span>
                                                                        원
                                                                    </span>
                                                                    <span class="tx_cur">
                                                                        <span class="tx_num">23,900</span>
                                                                        원
                                                                    </span>
                                                                </p>
                                                                <p class="prd_flag">
                                                                    <span class="icon_flag sale">세일</span>
                                                                    <span class="icon_flag coupon">쿠폰</span>
                                                                    <span class="icon_flag delivery">오늘드림</span>
                                                                </p>
                                                            </a>
                                                        </li>
                                                        <li class="curation_item">
                                                            <a href="" class="item a_detail">
                                                                <span class="thumb_flag best">
                                                                    베스트
                                                                </span>
                                                                <span class="thumbImg">
                                                                    <img src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/A00000017165019ko.jpg?l=ko" alt="">
                                                                </span>
                                                                <div class="prd_name">
                                                                    <p class="tx_name">[100개특가/한정기획]라운드랩자작나무수분 선크림 50ml 1+1</p>
                                                                </div>
                                                                <p class="prd_price">
                                                                    <span class="tx_org">
                                                                        <span class="tx_num">25,000</span>
                                                                        원
                                                                    </span>
                                                                    <span class="tx_cur">
                                                                        <span class="tx_num">23,700</span>
                                                                        원
                                                                    </span>
                                                                </p>
                                                                <p class="prd_flag">
                                                                    <span class="icon_flag sale">세일</span>
                                                                    <!-- <span class="icon_flag coupon">쿠폰</span> -->
                                                                    <span class="icon_flag delivery">오늘드림</span>
                                                                </p>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="inner">
                            <div class="curation_slide type03" id="recobell_area1">
                                <div class="tit_type03">
                                    고객님을 위한
                                    <br>
                                    추천 상품
                                    <button class="moreBtn" id="crt_more_p002">
                                        <span>더보기</span>
                                    </button>
                                </div>

                                <div class="curation_slide type03">
                                    <ul id="main_curation02_01" class="slide_list slick_slider slick-initialized slick-slider">
                                        <div class="slick-list">
                                            <div class="slick-track" style="opacity:1; width:2550px">
                                                <li class="slick-slide slick-current slick-active" style="width:510px; position:relative;left:0px;top:0px;z-index:999;opacity:1;">
                                                    <ul class="curation_list">
                                                        <li class="curation_item">
                                                            <a href="" class="item a_detail">
                                                                <span class="thumb_flag best">
                                                                    베스트
                                                                </span>
                                                                <span class="thumbImg">
                                                                    <img src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/A00000017759355ko.jpg?l=ko" alt="">
                                                                </span>
                                                                <div class="prd_name">
                                                                    <p class="tx_name">[1등 컨실러[ 더샘 커버 퍼펙션 트리플 팟 컨실러 4colors(단품/...</p>
                                                                </div>
                                                                <p class="prd_price">
                                                                    <span class="tx_org">
                                                                        <span class="tx_num">12,000</span>
                                                                        원
                                                                    </span>
                                                                    <span class="tx_cur">
                                                                        <span class="tx_num">11,400</span>
                                                                        원~
                                                                    </span>
                                                                </p>
                                                                <p class="prd_flag">
                                                                    <span class="icon_flag sale">세일</span>
                                                                    <!-- <span class="icon_flag coupon">쿠폰</span> -->
                                                                    <span class="icon_flag delivery">오늘드림</span>
                                                                </p>
                                                            </a>
                                                        </li>
                                                        <li class="curation_item">
                                                            <a href="" class="item a_detail">
                                                                <span class="thumb_flag best">
                                                                    베스트
                                                                </span>
                                                                <span class="thumbImg">
                                                                    <img src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0012/A00000012595531ko.jpg?l=ko" alt="">
                                                                </span>
                                                                <div class="prd_name">
                                                                    <p class="tx_name">[100개 특가/리뷰이벤트] 롬앤 쥬시래스팅 틴트</p>
                                                                </div>
                                                                <p class="prd_price">
                                                                    <span class="tx_org">
                                                                        <span class="tx_num">9,900</span>
                                                                        원
                                                                    </span>
                                                                    <span class="tx_cur">
                                                                        <span class="tx_num">7,900</span>
                                                                        원~
                                                                    </span>
                                                                </p>
                                                                <p class="prd_flag">
                                                                    <span class="icon_flag sale">세일</span>
                                                                    <span class="icon_flag coupon">쿠폰</span>
                                                                    <span class="icon_flag delivery">오늘드림</span>
                                                                </p>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                                <div class="btnRef">
                                    <button class="btn" id="refBtn">
                                        <span class="icon">
                                            다른상품 추천해드릴게요
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="inner">
                            <div class="curation_slide type03" id="recobell_area1">
                                <div class="tit_type03">
                                    고객님을 
                                    <br>
                                    위한 추천 상품
                                    <button class="moreBtn" id="crt_more_p002">
                                        <span>더보기</span>
                                    </button>
                                </div>

                                <div class="curation_slide type03">
                                    <ul id="main_curation02_01" class="slide_list slick_slider slick-initialized slick-slider">
                                        <div class="slick-list">
                                            <div class="slick-track" style="opacity:1; width:2550px">
                                                
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>

                <!-- Weekly Special 부분 -->
                <div class="main_plan_banner">
                    <h3 class="main_sub_tit">
                        <strong>Weekly Special</strong>
                    </h3>
                    <div class="recomm_plan">
                        <ul class="recomm_plan_list">
                            <li>
                                <a href="">
                                    <img src="https://image.oliveyoung.co.kr/uploads/images//categoryBanner/3083548270954228282.jpg" alt="">
                                    <div class="text_wrap">
                                        <dl style="color:#000000">
                                            <dt>오직 온라인몰에서만!</dt>
                                            <dt>#Self-Care</dt>
                                            <dd>특가로 만나보세요.</dd>
                                        </dl>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="https://image.oliveyoung.co.kr/uploads/images//categoryBanner/7385313269643177959.jpg" alt="">
                                    <div class="text_wrap">
                                        <dl style="color:#000000">
                                            <dt>최대 1+1 혜택!</dt>
                                            <dt>올영세일</dt>
                                            <dd>프리미엄 대전</dd>
                                        </dl>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- 인기 행사만 모았어요! -->
                <div class="main_plan_banner ty02">
                    <h3 class="main_sub_tit">
                        <strong>인기 행사만 모았어요!</strong>
                    </h3>
                    <div class="banner_wrap">
                        <div class="slick_slider slick-initialized slick-slider slick-dotted" id="mainPlanSlider">
                            <div class="slick-list draggle">
                                <div class="slick-track" style="opacity:1;width:6240px;">
                                    <div class="slider_unit slick-slide slick-current slick-active" style="width:520px;">
                                        <div class="plan_top">
                                            <div class="plan_banner" style="background-image:url('https://image.oliveyoung.co.kr/uploads/images//categoryBanner/8509706889501034031.jpg');">
                                                <a href="">
                                                    <p>
                                                        <strong class="tit">다가오는 가을에는</strong>
                                                        <strong class="tit">나를 위한 IT ITEM</strong>
                                                        <strong class="desc">#알고보니꿀템가득</strong>
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- slick 끝 -->
    </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style>

</style>