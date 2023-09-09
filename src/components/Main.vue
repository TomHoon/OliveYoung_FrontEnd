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
                                        <span>더보기</span>ƒ
                                    </button>
                                </div>

                                <div class="curation_slide type03">
                                    <ul id="main_curation02_01" class="slide_list slick_slider slick-initialized slick-slider">
                                        <div class="slick-list">
                                            <div class="slick-track" style="opacity:1; width:2550px">
                                                <li class="slick-slide slick-current slick-active" style="width:510px; position:relative;left:0px;top:0px;z-index:999;opacity:1;">
                                                    <ul class="curation_list">
                                                        <li class="curation_item" @click="goDetail('p001')">
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

                <!-- MD가 추천해요! 시작 -->
                <div class="main_recommendation_wrap">
                    <h3 class="main_sub_tit">
                        <strong>MD가 추천해요!</strong>
                        <span class="tit-flag ad">
                            AD
                        </span>
                    </h3>
                    <div>
                        <!-- <ul class="cate_prd_list no_line horizontal">
                            <li class="flag">
                                <div class="prd_info">
                                    <a href="" class="prd_thumb goodsList">
                                        <img src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018924805ko.jpg?l=ko" alt="">
                                    </a>
                                    <div class="prd_name">
                                        <a href="" class="goodsList">
                                            <span class="tx_brand">바이오힐보</span>
                                            <p class="tx_name">[NEW]바이오힐보 판테셀 리페어시카 크림 50mL + 50mL 기획</p>
                                        </a>
                                    </div>
                                    <p class="prd_price">
                                        <span class="tx_org">
                                            <span class="tx_num">67,000</span>
                                            원
                                        </span>
                                        <span class="tx_cur">
                                            <span class="tx_num">41,280</span>
                                            원~
                                        </span>
                                        <p class="prd_flag">
                                            <span class="icon_flag sale">세일</span>
                                            <span class="icon_flag coupon">쿠폰</span>
                                            <span class="icon_flag delivery">오늘드림</span>
                                        </p>
                                    </p>
                                </div>
                            </li>
                        </ul> -->
                        <ul style="display:flex;">
                            <li style="width:50%;margin-right:50px;">
                                <div style="text-align:left;">
                                    <img style="float:left; margin-right:10px;width:175px; height:175px;" src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018924805ko.jpg?l=ko" alt="">
                                    <h3 style="text-align:left;font-size:14px;margin-bottom:10px;">
                                        <strong>바이오힐보</strong>
                                    </h3>
                                    <p>
                                        <span style="font-size:15px;">[NEW] 바이오힐보 판테셀 리페어시카 크림<br/> 50mL + 50mL 기획</span>
                                    </p>
                                    <p class="prd_price" style="margin:15px 0 10px 0;">
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
                                    </p>
                                </div>
                            </li>
                            <li style="width:50%;margin-right:50px;">
                                <div style="text-align:left;">
                                    <img style="float:left; margin-right:10px;width:175px; height:175px;" src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018913506ko.jpg?l=ko" alt="">
                                    <h3 style="text-align:left;font-size:14px;margin-bottom:10px;">
                                        <strong>메디힐</strong>
                                    </h3>
                                    <p>
                                        <span style="font-size:15px;">[파우치증정]메디힐 레티놀 콜라겐 탄력 패드 100매 (+100매 더블증정 오둥이 기획)</span>
                                    </p>
                                    <p class="prd_price" style="margin:15px 0 10px 0;">
                                        <span class="tx_org">
                                            <span class="tx_num">39,900</span>
                                            원
                                        </span>
                                        <span class="tx_cur">
                                            <span class="tx_num">27,900</span>
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
                        <h3 class="main_sub_tit" style="height:40px; margin-top:51px;">
                            <strong>이 상품 어때요?</strong>
                        </h3>
                        <div style="border-top:1px solid #ddd;">
                            <ul style="display:flex; justify-content:space-between;">
                                <li style="width:255px;">
                                    <a href="" style="width:100%; color:#666; min-height:60px; text-decoration:none;">
                                        <img style="margin-top:25px; max-width:215px; max-height:215px;" src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0014/A00000014780155ko.jpg?l=ko" alt="">
                                        <h3 style="margin-top:15px; overflow:hidden; height:40px; text-overflow:ellipsis; font-size:14px; font-weight:700; line-height:20px; color:#777!important;">
                                            <strong>메디힐</strong>
                                        </h3>
                                        <p style="padding:10px;">
                                            <span style="padding:10px; font-size:15px;">[파우치증정]메디힐 레티놀 콜라겐 탄력 패드 100매 (+100매 더블증정 오둥이 기획)</span>
                                        </p>
                                    </a>
                                    <p class="prd_price" style="margin:15px 0 10px 0;">
                                        <span class="tx_org">
                                            <span class="tx_num">34,000</span>
                                            원
                                        </span>
                                        <span class="tx_cur">
                                            <span class="tx_num">26,900</span>
                                            원~
                                        </span>
                                    </p>
                                    <p class="prd_flag">
                                        <span class="icon_flag sale">세일</span>
                                        <span class="icon_flag coupon">쿠폰</span>
                                        <!-- <span class="icon_flag delivery">오늘드림</span> -->
                                    </p>
                                </li>
                                <li style="width:255px;">
                                    <a href="" style="width:100%; color:#666; min-height:60px; text-decoration:none;">
                                        <img style="margin-top:25px; max-width:215px; max-height:215px;" src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018906407ko.jpg?l=ko" alt="">
                                        <h3 style="margin-top:15px; overflow:hidden; height:40px; text-overflow:ellipsis; font-size:14px; font-weight:700; line-height:20px; color:#777!important;">
                                            <strong>팁토우</strong>
                                        </h3>
                                        <p style="padding:10px;">
                                            <span style="padding:10px; font-size:15px;">[9/6 하루특가/마테PICK][23FW/NEW] 팁토우 컬러 네일 32종</span>
                                        </p>
                                    </a>
                                    <p class="prd_price" style="margin:15px 0 10px 0;">
                                        <span class="tx_org">
                                            <span class="tx_num">14,000</span>
                                            원
                                        </span>
                                        <span class="tx_cur">
                                            <span class="tx_num">8,8200</span>
                                            원~
                                        </span>
                                    </p>
                                    <p class="prd_flag">
                                        <span class="icon_flag sale">세일</span>
                                        <span class="icon_flag coupon">쿠폰</span>
                                        <!-- <span class="icon_flag delivery">오늘드림</span> -->
                                    </p>
                                </li>
                                <li style="width:255px;">
                                    <a href="" style="width:100%; color:#666; min-height:60px; text-decoration:none;">
                                        <img style="margin-top:25px; max-width:215px; max-height:215px;" src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018914803ko.jpg?l=ko" alt="">
                                        <h3 style="margin-top:15px; overflow:hidden; height:40px; text-overflow:ellipsis; font-size:14px; font-weight:700; line-height:20px; color:#777!important;">
                                            <strong>일소</strong>
                                        </h3>
                                        <p style="padding:10px;">
                                            <span style="padding:10px; font-size:15px;">[9월 올영PICK] 일소 네추럴 마일드 클리어 노우즈 팩 10매 (+블랙헤드제거기 증정기획)</span>
                                        </p>
                                    </a>
                                    <p class="prd_price" style="margin:15px 0 10px 0;">
                                        <span class="tx_org">
                                            <span class="tx_num">25,000</span>
                                            원
                                        </span>
                                        <span class="tx_cur">
                                            <span class="tx_num">21,000</span>
                                            원~
                                        </span>
                                    </p>
                                    <p class="prd_flag">
                                        <span class="icon_flag sale">세일</span>
                                        <span class="icon_flag coupon">쿠폰</span>
                                        <span class="icon_flag delivery">오늘드림</span>
                                    </p>
                                </li>
                                <li style="width:255px;">
                                    <a href="" style="width:100%; color:#666; min-height:60px; text-decoration:none;">
                                        <img style="margin-top:25px; max-width:215px; max-height:215px;" src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/B00000018945603ko.jpg?l=ko" alt="">
                                        <h3 style="margin-top:15px; overflow:hidden; height:40px; text-overflow:ellipsis; font-size:14px; font-weight:700; line-height:20px; color:#777!important;">
                                            <strong>플라이밀</strong>
                                        </h3>
                                        <p style="padding:10px;">
                                            <span style="padding:10px; font-size:15px;">[에이핏PICK] 플라이밀 단백질 쉐이크 45g*7포입 6종 택 1</span>
                                        </p>
                                    </a>
                                    <p class="prd_price" style="margin:36px 0 9px 0;">
                                        <span class="tx_org">
                                            <span class="tx_num">39,900</span>
                                            원
                                        </span>
                                        <span class="tx_cur">
                                            <span class="tx_num">27,900</span>
                                            원~
                                        </span>
                                    </p>
                                    <p class="prd_flag">
                                        <span class="icon_flag sale">세일</span>
                                        <span class="icon_flag coupon">쿠폰</span>
                                        <!-- <span class="icon_flag delivery">오늘드림</span> -->
                                    </p>
                                </li>
                            </ul>
                            <!-- 신상업데이트 시작 -->
                            <div style="margin-top:65px;">
                                <h3>
                                    <strong style="font-size:26px; line-height:31px;">신상 업데이트</strong>
                                </h3>
                                <div style="">
                                    <ul style="margin-top:20px; display:flex; gap:20px;">
                                        <li>
                                            <img style="width:500px; height:282px; border-radius:4px;" src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/397/6073230787060096477.jpg" alt="">
                                            <p style="text-align:left; font-size:20px; color:#131518; font-weight:700; margin-top:10px;">겉부터 속까지 유기농 순면 생리대</p>
                                            <p style="margin-top:10px; text-align:left; color:#50585f; font-size:14px;">생리 기간에도 가볍고 산뜻한 하루를 보내요</p>
                                        </li>
                                        <li>
                                            <img style="width:500px; height:282px; border-radius:4px;" src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/397/3195857787535078775.jpg" alt="">
                                            <p style="text-align:left; font-size:20px; color:#131518; font-weight:700; margin-top:10px;">피부에 수분 부스터를 달아요</p>
                                            <p style="margin-top:10px; text-align:left; color:#50585f; font-size:14px;">티 없이 맑고 촉촉한 수분 세럼</p>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <!-- 신상업데이트 끝 -->

                            <!-- 주목해야 할 브랜드 시작 -->
                            <h3 style="font-size:25px; margin-top:100px;">
                                <strong>주목해야 할 브랜드</strong>
                            </h3>
                            <ul class="attention_brand" style="display:flex; justify-content:center;">
                                <li>
                                    <a href="">바이오더마</a>
                                </li>
                                <li>
                                    <a href="">혼바디</a>
                                </li>
                                <li>
                                    <a href="">라엘</a>
                                </li>
                                <li>
                                    <a href="">젤리크루</a>
                                </li>
                                <li>
                                    <a href="">에스더포뮬러</a>
                                </li>
                                <li>
                                    <a href="">플라이밀</a>
                                </li>
                                <li>
                                    <a href="">아로마티카</a>
                                </li>
                                <li>
                                    <a href="">라보에이치</a>
                                </li>
                                <li>
                                    <a href="">페라가모</a>
                                </li>
                                <li>
                                    <a href="">리우젤</a>
                                </li>
                            </ul>

                            <div class="attention_product" style="display:flex;">
                                <div>
                                    <img src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/380/2817562983546810098.jpg" alt="">
                                </div>
                            </div>
                            <!-- 주목해야 할 브랜드 끝 -->

                            <!-- 실시간 view 랭킹 시작 -->
                            <div class="realtime-view-rank">
                                <h3>
                                    <strong>
                                        <span>실시간 View 랭킹</span>
                                    </strong>
                                </h3>
                                <div class="realtime-view-main" style="display:flex; border-top:1px solid #d8d8d8; margin-top:10px; padding:10px;">
                                    <ul class="realtime-view-ul" style="flex-grow:1; margin-top:20px;">
                                        <li class="realtime-img">
                                            <div>
                                                <img src="https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0018/A00000018791813ko.jpg?l=ko" alt="">
                                                <h3>
                                                    <span>씨드비</span>
                                                </h3>
                                                <p style="text-align:left;">
                                                    [심으뜸 PICK] 씨드비 이슬 페미닌 포밍 워시 150ml
                                                </p>
                                                <p class="prd_price" style="margin:2px 0 9px 0; text-align:left;">
                                                    <span class="tx_org">
                                                        <span class="tx_num">39,900</span>
                                                        원
                                                    </span>
                                                    <span class="tx_cur">
                                                        <span class="tx_num">27,900</span>
                                                        원~
                                                    </span>
                                                </p>
                                                <p class="prd_flag" style="text-align:left;line-height:3rem;">
                                                    <span class="icon_flag sale">세일</span>
                                                    <span class="icon_flag coupon">쿠폰</span>
                                                    <span class="icon_flag delivery">오늘드림</span>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul class="ranking-ul" style="height:50px;flex-grow:1; margin-left:100px; margin-top:20px; "> 
                                        <li class="ranking-li ranking-active">
                                            <a class="ranking" href="">
                                                <span style="margin:15px; ">1</span>
                                                <span>[심으뜸 PICK] 씨드비 이슬 페미닌 포밍 워시 150ml</span>
                                            </a>
                                        </li>
                                        <li class="ranking-li">
                                            <a class="ranking" href="">
                                                <span style="margin:15px;">2</span>
                                                <span>[올영단독/휴대용증정] 아비노 바디로션 532ml+71ml기획</span>
                                            </a>
                                        </li>
                                        <li class="ranking-li">
                                            <a class="ranking" href="">
                                                <span style="margin:15px; ">3</span>
                                                <span>웨이크메이크 소프트 블러링 아이팔레트 10COLOR</span>
                                            </a>
                                        </li>
                                        <li class="ranking-li">
                                            <a class="ranking" href="">
                                                <span style="margin:15px; ">4</span>
                                                <span>[NEW] 클리오 킬커버 하이 글로우 쿠션(본품+하이라이터+리필+퍼프...</span>
                                            </a>
                                        </li>
                                        <li class="ranking-li">
                                            <a class="ranking" href="">
                                                <span style="margin:15px; ">5</span>
                                                <span>[NEW color 추가] 클리오 쉬폰블러틴트</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- 실시간 view 랭킹 끝-->

                            <!-- 공지사항 시작 -->
                            <div class="notice-area">
                                <div class="notice-tit">
                                    <h4>공지사항</h4>
                                    <p>새로운 소식이 없어요</p>
                                    <a href="">더보기</a>
                                </div>
                                <div class="notice-sub">
                                    <strong>고객센터<br>이용안내</strong>
                                    <ul class="sub-ul">
                                        <li style="color:#888;">온라인몰 고객센터</li>
                                        <img src="https://static.oliveyoung.co.kr/pc-static-root/image/main/img_online_tel.png" alt="">
                                        <li style="color:#888; margin-top:20px;">매장 고객센터</li>
                                        <img src="https://static.oliveyoung.co.kr/pc-static-root/image/main/img_offline_tel.png" alt="">
                                    </ul>
                                </div>
                                <div class="notice-onebyone">
                                    <div style="position:relative">
                                        <p>고객센터 운영시간[평일 09:00 - 18:00]</p>
                                        <p>주말 및 공휴일은 1:1문의하기를 이용해주세요.</p>
                                        <p>업무가 시작되면 바로 처리해 드립니다.</p>

                                        <button class="obo-btn" style="position:absolute; left:0; top:102px;">
                                            <p style="float:left;">
                                                <span></span>
                                            </p>
                                            <p style="float:left; width:70px; margin-left:10px;line-height:1rem;">1:1 문의하기</p>
                                        </button>
                                        <button class="obo-btn" style="position:absolute; right:45px; top:102px;">
                                            <p style="float:left;">
                                                <span class="fre"></span>
                                            </p>
                                            <p style="float:left; width:76px; margin-left:10px;line-height:1rem;">자주하는 질문</p>
                                        </button>
                                    </div>
                                </div>
                                <div class="qr-link">
                                    <img src="https://static.oliveyoung.co.kr/pc-static-root/image/main/img_mobile_app.png" alt="">
                                </div>
                            </div>
                            <!-- 공지사항 끝 -->

                        </div>
                    </div>
                </div>
                <!-- MD가 추천해요! 끝 -->
            </div>
            <!-- 푸터시작 -->
            <div class="footer">
                <div class="conts1">
                    <ul class="footer-ul">
                        <li>회사소개</li>
                        <li>채용안내</li>
                        <li>가맹점 개설문의</li>
                        <li>상품입점 및 제휴문의</li>
                        <li>사이버 감사실</li>
                        <li>고객센터</li>
                    </ul>
                </div>
                <div class="conts2">
                    <div class="conts2-ul-wrapper">
                        <ul class="conts2-ul">
                            <li>
                                <p class="conts2-ul-p">
                                    <a href="">
                                        <img style="width:146px; height:24px;" src="https://static.oliveyoung.co.kr/pc-static-root/image/footer/foot_logo.png" alt="">
                                    </a>
                                </p>
                            </li>
                            <li>
                                <h3 class="conts2-ul-h3">씨제이 올리브영 주식회사</h3>
                                <p>
                                    대표이사: 이동훈|사업자등록번호:809-81-22241
                                    <br>
                                    주소 : (12442) 서울특별시 강동구 강동대로 412, 33층 
                                    <br>
                                    호스팅사업자:cafe24
                                    <br>
                                    통신판매업신고번호:14-231-2341
                                    <br>
                                    이메일:gnsdl9079@gmail.com

                                </p>
                                <p>
                                </p>
                            </li>
                            <li style="margin:45px 0 0 25px;">
                                <a class="conts2-ul-lawlist" href="">
                                    이용약관 법적고지
                                </a>
                                <a class="conts2-ul-lawlist active-lawlist" href="">
                                    개인정보처리방침
                                </a>
                                <a class="conts2-ul-lawlist" href="">
                                    청소년처리방침
                                </a>
                                <a class="conts2-ul-lawlist" href="">
                                    영상정보처리기기 운영/관리방침
                                </a>
                                <a class="conts2-ul-lawlist" href="">
                                    이메일 무단수집거부
                                </a>
                            </li>
                            <li style="margin:45px 0 0 25px;">
                                <a class="conts2-ul-lawlist active-lawlist" style="color:#000" href="">
                                    하나은행 구매안전 서비스
                                </a>
                                <a class="conts2-ul-lawlist" href="">
                                    <p>
                                        올리브영은 현금 결제한 금액에 대해
                                        <br>
                                        하나은행과 채무지급보증 계약을체결
                                        <br>
                                        하여 안전한 거래를 보장하고 있습니다
                                        <br>
                                    </p>
                                </a>
                                <a style="color:#9a9a9a; font-size:14px; position:absolute; bottom:50px;" href="">
                                    서비스가입사실확인 >
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 푸터끝 -->
        </div>
        <!-- slick 끝 -->
    </div>
</template>

<script>
export default {
  props: ['pageParams', 'transferObj'],

  mounted() {
    this.$propsWatch();
  },

  data() {
    return {
      
    }
  },
  methods: {
    goDetail(prdSeq) {
        this.$router.push('/prdDetail');
    },
    goLogin() {
        this.$router.push('/login');
    },
    goJoin() {
        this.$router.push('/join');
    },
    goDetails(payload) {
        this.$pushContents('TestStack', {boardData: payload});
        console.log('yes')
    },
    backPage() {
      this.$backPage({test: 'hello'})
    },
    ProductInsert() {
      this.$router.push('/ProductInsert');
    },
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
    width:156px;
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
    width: 82px;
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
</style>