<template>
  <div class="wrapper">
        <!-- 헤더시작 -->
        <div class="Header">
            
            <div class="top_util">
                <ul class="menu_list">
                    <li class="join" @click="goJoin">회원가입</li>
                    <li class="login" @click="goLogin">로그인</li>
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

                <!-- 인기 행사만 모았어요! 시작 -->
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
                                                        <span class="desc" style="color:#000000">#알고보니꿀템가득</span>
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                        <ul class="cate_prd_list">
                                            <li>
                                                <div class="prd_info">
                                                    <a href="" class="prd_thumb goodList">
                                                        <span class="thumb_flag best">베스트</span>
                                                        <img src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0016/A00000016619214ko.jpg?l=ko" alt="">
                                                    </a>
                                                    <div class="prd_name">
                                                        <a href="" class="goodsList">
                                                            <span class="tx_brand">스너글</span>
                                                            <p class="tx_name">스너글 섬유탈취제 150ml 6종 택1</p>

                                                        </a>
                                                    </div>
                                                    <!-- <button class="btn_zzim jeem">
                                                        <span>찜하기전</span>
                                                    </button> -->
                                                    <p class="prd_price">
                                                        <span class="tx_org">
                                                            <span class="tx_num">5,000</span>
                                                            원
                                                        </span>
                                                        <span class="tx_cur">
                                                            <span class="tx_num">3,500</span>
                                                            원~
                                                        </span>
                                                    </p>
                                                    <p class="prd_flag">
                                                        <span class="icon_flag sale">세일</span>
                                                        <!-- <span class="icon_flag coupon">쿠폰</span> -->
                                                        <span class="icon_flag delivery">오늘드림</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="prd_info">
                                                    <a href="" class="prd_thumb goodList">
                                                        <span class="thumb_flag best">베스트</span>
                                                        <img src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/B00000018622003ko.jpg?l=ko" alt="">
                                                    </a>
                                                    <div class="prd_name">
                                                        <a href="" class="goodsList">
                                                            <span class="tx_brand">베리시</span>
                                                            <p class="tx_name">스너글 섬유탈취제 150ml 6종 택1</p>

                                                        </a>
                                                    </div>
                                                    <!-- <button class="btn_zzim jeem">
                                                        <span>찜하기전</span>
                                                    </button> -->
                                                    <p class="prd_price">
                                                        <span class="tx_org">
                                                            <span class="tx_num">32,900</span>
                                                            원
                                                        </span>
                                                        <span class="tx_cur">
                                                            <span class="tx_num">29,400</span>
                                                            원~
                                                        </span>
                                                    </p>
                                                    <p class="prd_flag">
                                                        <!-- <span class="icon_flag sale">세일</span> -->
                                                        <span class="icon_flag coupon">쿠폰</span>
                                                        <!-- <span class="icon_flag delivery">오늘드림</span> -->
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="slick-track" style="opacity:1;width:6240px;">
                                    <div class="slider_unit slick-slide slick-current slick-active" style="width:520px;">
                                        <div class="plan_top">
                                            <div class="plan_banner" style="background-image:url('https://image.oliveyoung.co.kr/uploads/images//categoryBanner/7255110681305104571.jpg');">
                                                <a href="">
                                                    <p>
                                                        <strong class="tit">다가오는 가을에는</strong>
                                                        <strong class="tit">나를 위한 IT ITEM</strong>
                                                        <span class="desc" style="color:#000000">#알고보니꿀템가득</span>
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                        <ul class="cate_prd_list">
                                            <li>
                                                <div class="prd_info">
                                                    <a href="" class="prd_thumb goodList">
                                                        <span class="thumb_flag best">베스트</span>
                                                        <img src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018830410ko.jpg?l=ko" alt="">
                                                    </a>
                                                    <div class="prd_name">
                                                        <a href="" class="goodsList">
                                                            <span class="tx_brand">클린</span>
                                                            <p class="tx_name">[클린X제로베이스원] 클린 ZB1 30ml 기획(+포토카드1종 증정)/ZB160ml을 사은품</p>

                                                        </a>
                                                    </div>
                                                    <!-- <button class="btn_zzim jeem">
                                                        <span>찜하기전</span>
                                                    </button> -->
                                                    <p class="prd_price">
                                                        <span class="tx_org">
                                                            <span class="tx_num">57,000</span>
                                                            원
                                                        </span>
                                                        <span class="tx_cur">
                                                            <span class="tx_num">33,920</span>
                                                            원~
                                                        </span>
                                                    </p>
                                                    <p class="prd_flag">
                                                        <span class="icon_flag sale">세일</span>
                                                        <span class="icon_flag coupon">쿠폰</span>
                                                        <span class="icon_flag delivery">오늘드림</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="prd_info">
                                                    <a href="" class="prd_thumb goodList">
                                                        <span class="thumb_flag best">베스트</span>
                                                        <img src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018908801ko.jpg?l=ko" alt="">
                                                    </a>
                                                    <div class="prd_name">
                                                        <a href="" class="goodsList">
                                                            <span class="tx_brand">몽블랑</span>
                                                            <p class="tx_name">몽블랑 익스플로러 EDP 3종 중 택1</p>

                                                        </a>
                                                    </div>
                                                    <!-- <button class="btn_zzim jeem">
                                                        <span>찜하기전</span>
                                                    </button> -->
                                                    <p class="prd_price">
                                                        <span class="tx_org">
                                                            <span class="tx_num">67,000</span>
                                                            원
                                                        </span>
                                                        <span class="tx_cur">
                                                            <span class="tx_num">41,280</span>
                                                            원~
                                                        </span>
                                                    </p>
                                                    <p class="prd_flag">
                                                        <span class="icon_flag sale">세일</span>
                                                        <span class="icon_flag coupon">쿠폰</span>
                                                        <span class="icon_flag delivery">오늘드림</span>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 인기 행사만 모았어요! 끝 -->

                <!-- 올리브영 매거진 시작 -->
                <div class="oy-magazine">
                    <h3>
                        <strong>올리브영 매거진</strong>
                    </h3>
                    <ul>
                        <li>
                            <a href="">
                                <img src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/398/7945107532754907535.jpg" alt="">
                                <p>완전 유기농 순면</p>
                                <p>프리미엄 생리대</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/398/1008831639456367841.jpg" alt="">
                                <p>멋쟁이들이 알려주는</p>
                                <p>남자들의 뷰티 루틴</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/398/5954966327415583604.jpg" alt="">
                                <p>시멘트로 그린 그림</p>
                                <p>믿겨지나요?</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/398/1669789264065522165.jpg" alt="">
                                <p>곰손도 쉽게 하는</p>
                                <p>웨트헤어 치트키</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- 오직 올리브영에서만 시작 -->
                <div class="main_onlyone_wrap">
                    <h3>
                        <strong>오직 올리브영에서만</strong>
                    </h3>
                    <ul>
                        <li>
                            <img src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/6/6480657806655260020.jpg" alt="">
                            <h3 class="sub-tit1">필리밀리올영세일<br></h3>
                            <h3 class="sub-tit2">900원 부터</h3>
                            <p>#미용소품#디바이스</p>
                        </li>
                        <li>
                            <img src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/6/8990908815822036160.jpg" alt="">
                            <h3 class="sub-tit1">최대 42% 할인<br></h3>
                            <h3 class="sub-tit2">올영세일 특가</h3>
                            <p>#바이오힐보#브링그린</p>
                        </li>
                        <li>
                            <img src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/6/4343211278105723213.jpg" alt="">
                            <h3 class="sub-tit1">꼭 담으세요!<br></h3>
                            <h3 class="sub-tit2">인기간식 특가</h3>
                            <p>#UPTO 57%</p>
                        </li>
                    </ul>
                </div>
                <!-- 오직 올리브영에서만 끝 -->
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
  },
  methods: {
    goLogin() {
        this.$router.push('/login');
    },
    goJoin() {
        this.$router.push('/join');
    }
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
    vertical-align:bottom;
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
    float:inherit;
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
</style>