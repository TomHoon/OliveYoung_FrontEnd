<template>
  <div class="wrapper">
    <!-- 헤더시작 -->
    <Header/>

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
                <div class="slick-slide slick-current slick-active"
                     style="width:80vw; min-width:1020px; position:relative; left:337px; top:0px; z-index:998; opacity:1; transition:opacity 500ms ease 0s">
                  <a href="" class="banner_link">
                    <p class="banner_desc">
                      <span class="tit">올영세일</span>
                      <strong>새로움이<br>가득한<br>올영세일</strong>
                      <span>최대 70%할인혜택</span>
                    </p>
                    <img
                        src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/1/5423905811654969447.jpg"
                        alt="">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="main_mid_banner">
          <a href="" class="home_banner_top_split">
            <img src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/138/8835336063241888571.jpg"
                 alt="">
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
                        <li class="slick-slide slick-current slick-active"
                            style="width:510px; position:relative;left:0px;top:0px;z-index:999;opacity:1;">
                          <ul class="curation_list">
                            <li class="curation_item" @click="goDetail('1')">
                              <a href="" class="item a_detail">
                                                                <span class="thumb_flag best">
                                                                    베스트
                                                                </span>
                                <span class="thumbImg">
                                                                    <img
                                                                        src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/A00000017142211ko.jpg?l=ko"
                                                                        alt="">
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
                            <li class="curation_item" @click="goDetail('2')">
                              <a href="" class="item a_detail">
                                                                <span class="thumb_flag best">
                                                                    베스트
                                                                </span>
                                <span class="thumbImg">
                                                                    <img
                                                                        src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/A00000017165019ko.jpg?l=ko"
                                                                        alt="">
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
                        <li class="slick-slide slick-current slick-active"
                            style="width:510px; position:relative;left:0px;top:0px;z-index:999;opacity:1;">
                          <ul class="curation_list">
                            <li class="curation_item" @click="goDetail('14')">
                              <a href="" class="item a_detail">
                                                                <span class="thumb_flag best">
                                                                    베스트
                                                                </span>
                                <span class="thumbImg">
                                                                    <img
                                                                        src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/A00000017759355ko.jpg?l=ko"
                                                                        alt="">
                                                                </span>
                                <div class="prd_name">
                                  <p class="tx_name">[1등 컨실러] 더샘 커버 퍼펙션 트리플 팟 컨실러 4colors(단품/...</p>
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
                            <li class="curation_item" @click="goDetail('15')">
                              <a href="" class="item a_detail">
                                                                <span class="thumb_flag best">
                                                                    베스트
                                                                </span>
                                <span class="thumbImg">
                                                                    <img
                                                                        src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0012/A00000012595531ko.jpg?l=ko"
                                                                        alt="">
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
                  <img src="https://image.oliveyoung.co.kr/uploads/images//categoryBanner/3083548270954228282.jpg"
                       alt="">
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
                  <img src="https://image.oliveyoung.co.kr/uploads/images//categoryBanner/7385313269643177959.jpg"
                       alt="">
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
                      <div class="plan_banner"
                           style="background-image:url('https://image.oliveyoung.co.kr/uploads/images//categoryBanner/8509706889501034031.jpg');">
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
                      <li @click="goDetail('16')">
                        <div class="prd_info">
                          <a href="" class="prd_thumb goodList">
                            <span class="thumb_flag best">베스트</span>
                            <img
                                src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0016/A00000016619214ko.jpg?l=ko"
                                alt="">
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
                      <li @click="goDetail('17')">
                        <div class="prd_info">
                          <a href="" class="prd_thumb goodList">
                            <span class="thumb_flag best">베스트</span>
                            <img
                                src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/B00000018622003ko.jpg?l=ko"
                                alt="">
                          </a>
                          <div class="prd_name">
                            <a href="" class="goodsList">
                              <span class="tx_brand">베리시</span>
                              <p class="tx_name">베리시 쿨핏 브라 시그니처 (7 color)</p>

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
                      <div class="plan_banner"
                           style="background-image:url('https://image.oliveyoung.co.kr/uploads/images//categoryBanner/7255110681305104571.jpg');">
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
                      <li @click="goDetail('18')">
                        <div class="prd_info">
                          <a href="" class="prd_thumb goodList">
                            <span class="thumb_flag best">베스트</span>
                            <img
                                src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018830410ko.jpg?l=ko"
                                alt="">
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
                      <li @click="goDetail('19')">
                        <div class="prd_info">
                          <a href="" class="prd_thumb goodList">
                            <span class="thumb_flag best">베스트</span>
                            <img
                                src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018908801ko.jpg?l=ko"
                                alt="">
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
                <img src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/398/7945107532754907535.jpg"
                     alt="">
                <p>완전 유기농 순면</p>
                <p>프리미엄 생리대</p>
              </a>
            </li>
            <li>
              <a href="">
                <img src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/398/1008831639456367841.jpg"
                     alt="">
                <p>멋쟁이들이 알려주는</p>
                <p>남자들의 뷰티 루틴</p>
              </a>
            </li>
            <li>
              <a href="">
                <img src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/398/5954966327415583604.jpg"
                     alt="">
                <p>시멘트로 그린 그림</p>
                <p>믿겨지나요?</p>
              </a>
            </li>
            <li>
              <a href="">
                <img src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/398/1669789264065522165.jpg"
                     alt="">
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
              <img src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/6/6480657806655260020.jpg"
                   alt="">
              <h3 class="sub-tit1">필리밀리올영세일<br></h3>
              <h3 class="sub-tit2">900원 부터</h3>
              <p>#미용소품#디바이스</p>
            </li>
            <li>
              <img src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/6/8990908815822036160.jpg"
                   alt="">
              <h3 class="sub-tit1">최대 42% 할인<br></h3>
              <h3 class="sub-tit2">올영세일 특가</h3>
              <p>#바이오힐보#브링그린</p>
            </li>
            <li>
              <img src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/6/4343211278105723213.jpg"
                   alt="">
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
              <li style="width:50%;margin-right:50px;" @click="goDetail('20')">
                <div style="text-align:left;">
                  <img style="float:left; margin-right:10px;width:175px; height:175px;"
                       src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018924805ko.jpg?l=ko"
                       alt="">
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
              <li style="width:50%;margin-right:50px;" @click="goDetail('21')">
                <div style="text-align:left;">
                  <img style="float:left; margin-right:10px;width:175px; height:175px;"
                       src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018913506ko.jpg?l=ko"
                       alt="">
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
                <li style="width:255px;" @click="goDetail('22')">
                  <a href="" style="width:100%; color:#666; min-height:60px; text-decoration:none;">
                    <img style="margin-top:25px; max-width:215px; max-height:215px;"
                         src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0014/A00000014780155ko.jpg?l=ko"
                         alt="">
                    <h3 style="margin-top:15px; overflow:hidden; height:40px; text-overflow:ellipsis; font-size:14px; font-weight:700; line-height:20px; color:#777!important;">
                      <strong>메디힐</strong>
                    </h3>
                    <p style="padding:10px;">
                      <span
                          style="padding:10px; font-size:15px;">[파우치증정]메디힐 레티놀 콜라겐 탄력 패드 100매 (+100매 더블증정 오둥이 기획)</span>
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
                <li style="width:255px;" @click="goDetail('23')">
                  <a href="" style="width:100%; color:#666; min-height:60px; text-decoration:none;">
                    <img style="margin-top:25px; max-width:215px; max-height:215px;"
                         src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018906407ko.jpg?l=ko"
                         alt="">
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
                <li style="width:255px;" @click="goDetail('24')">
                  <a href="" style="width:100%; color:#666; min-height:60px; text-decoration:none;">
                    <img style="margin-top:25px; max-width:215px; max-height:215px;"
                         src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018914803ko.jpg?l=ko"
                         alt="">
                    <h3 style="margin-top:15px; overflow:hidden; height:40px; text-overflow:ellipsis; font-size:14px; font-weight:700; line-height:20px; color:#777!important;">
                      <strong>일소</strong>
                    </h3>
                    <p style="padding:10px;">
                      <span
                          style="padding:10px; font-size:15px;">[9월 올영PICK] 일소 네추럴 마일드 클리어 노우즈 팩 10매 (+블랙헤드제거기 증정기획)</span>
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
                <li style="width:255px;" @click="goDetail('25')">
                  <a href="" style="width:100%; color:#666; min-height:60px; text-decoration:none;">
                    <img style="margin-top:25px; max-width:215px; max-height:215px;"
                         src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/B00000018945603ko.jpg?l=ko"
                         alt="">
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
                      <img style="width:500px; height:282px; border-radius:4px;"
                           src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/397/6073230787060096477.jpg"
                           alt="">
                      <p style="text-align:left; font-size:20px; color:#131518; font-weight:700; margin-top:10px;">겉부터
                        속까지 유기농 순면 생리대</p>
                      <p style="margin-top:10px; text-align:left; color:#50585f; font-size:14px;">생리 기간에도 가볍고 산뜻한 하루를
                        보내요</p>
                    </li>
                    <li>
                      <img style="width:500px; height:282px; border-radius:4px;"
                           src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/397/3195857787535078775.jpg"
                           alt="">
                      <p style="text-align:left; font-size:20px; color:#131518; font-weight:700; margin-top:10px;">피부에
                        수분 부스터를 달아요</p>
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
                  <img
                      src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/380/2817562983546810098.jpg"
                      alt="">
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
                <div class="realtime-view-main"
                     style="display:flex; border-top:1px solid #d8d8d8;margin-bottom: 41px; margin-top:10px; padding:10px;">
                  <ul class="realtime-view-ul" style="flex-grow:1; margin-top:20px;">
                    <li class="realtime-img" @click="goDetail('26')">
                      <div>
                        <img
                            src="https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0018/A00000018791813ko.jpg?l=ko"
                            alt="">
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
                      <p style="float:left; width:70px; font-size:12px; margin-left:10px;line-height:1rem;">1:1 문의하기</p>
                    </button>
                    <button class="obo-btn" style="position:absolute; right:45px; top:102px;">
                      <p style="float:left;">
                        <span class="fre"></span>
                      </p>
                      <p style="float:left; width:76px; font-size:12px;margin-left:10px;line-height:1rem;">자주하는 질문</p>
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
      <Footer/>

      <!-- 푸터끝 -->
    </div>
    <!-- slick 끝 -->
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  props: ['pageParams', 'transferObj'],

  components: { // 가져온 component 들을 등록합니다.
    Header,
    Footer
  },

  mounted() {
    this.$propsWatch();
  },

  data() {
    return {}
  },
  methods: {
    goDetail(prdId) {
      this.$router.push({name: 'ProductDetail', query: {prdId: prdId}});
    },
    goLogin() {
      this.$router.push('/login');
    },
    goJoin() {
      this.$router.push('/join');
    },
    backPage() {
      this.$backPage({test: 'hello'})
    },
    productList() {
      this.$router.push('/productList');
    },
  }
}
</script>

<style scoped src="@/assets/styles/main.css">

</style>