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
                    <button class="search-btn" id="searchSubmit">검색</button>
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
                            <a class="page-nav-a" href="">원
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

        <!-- 이미지 영역 시작 -->
        <div class="product-detail-wrapper">
            <div class="product-detail">
                <div class="left-area">
                    <div class="img-area">
                        <img src="https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0018/B00000018987601ko.jpg?l=ko" alt="">
                    </div>
                    <ul class="left-area-mini">
                        <li>
                            <a href="">
                                <img src="https://image.oliveyoung.co.kr/uploads/images/goods/85/10/0000/0018/B00000018987601ko.jpg?l=ko" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="right-area">
                    <p class="product-info">
                        <a href="">네스프레소</a>
                    </p>
                    <p class="product-info-main-tit">
                        네스프레소 오리지널 스타터팩 에센자미니<br>
                        C30 에스프레소 캡슐커피머신 화이트
                    </p>
                    <p class="product-price-info">
                        <span class="bf-price">228,000원</span>
                        <span class="aft-price">193,800원</span>
                        <span class="advantage-info">혜택정보</span>
                    </p>
                    <p class="icon-area">
                        <span class="coupon-icon">
                            쿠폰
                        </span>
                    </p>
                    <div class="watcher-area">
                        <span class="watcher">
                            <span>3</span>
                            명이 보고있어요
                        </span>
                    </div>
                    <div class="prd-more-info">
                        <div class="row">
                            <p class="prd-more-tit">
                                배송정보
                                <a href=""></a>
                            </p>
                            <ul class="delivery-info">
                                <li>
                                    <span style="display:inline-block;vertical-align:top;">일반배송</span>
                                    <div class="delivery-div">
                                        3,000원 (30,000원 이상 무료배송) <br>
                                        <b class="dt1">업체배송</b>
                                        <b class="dt2">합배송불가</b>
                                        <p class="dt3">평균 3일 이내 배송</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="row">
                            <p class="prd-sub-tit2">
                                결제혜택
                            </p>
                            <div class="benefit-list">
                                <p>
                                    THE CJ 카드 추가 10% 할인
                                    <a class="info-tab1" href=""></a>
                                </p>
                                <p>
                                    CJ ONE 포인트 최대 1% 적립 예상
                                    <a class="info-tab1" href=""></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="prd-select-list">
                        <a href="" class="prd-select-area">
                            상품을 선택해주세요
                        </a>
                    </div>
                    <div class="prd-price-total">
                        <span class="prd-price1">
                            상품금액합계
                        </span>
                        <span class="prd-price2">0원</span>
                    </div>
                    <div class="buy-btns">
                        <button class="cart-btn">
                            장바구니
                        </button>
                        <button class="cart-btn2">
                            바로구매
                        </button>
                        <button class="cart-btn3">
                        </button>
                        <button class="cart-btn4">
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 이미지 영역 끝 -->

        <!-- 구매 가능 매장 확인시작 -->
        <div class="buy-able-wrapper">
            <div class="buy-able-area">
                <p class="buy-able-left">
                    <em class="buy-able-img"></em>
                    <span class="buy-able-span">구매가능한 매장을 확인해보세요</span>
                    <em class="buy-able-arrow"></em>
                    <em class="vertical-line">

                    </em>
                </p>
                <p class="buy-able-right">
                    <span class="buy-able-right-img"></span>
                    <span class="brand-name">수플린 브랜드관</span>
                    <em class="buy-able-arrow2"></em>
                </p>
            </div>
        </div>
        <!-- 구매 가능 매장 확인끝 -->

        <!-- 추천상품 '어때요' 시작 -->
        <div class="recommend-wrapper">
            <div class="recommend-tit">
                <h4 class="recommend-tit-left">
                    이런 <strong class="recommend-word">디저트/간식 상품은</strong> 어때요?
                </h4>
                <button class="recommend-tit-right">
                    <span class="recommend-more-btn">더보기</span> 
                </button>
            </div>

            <div class="recommend-img-area">
                <ul class="recommend-img-ul">
                    <li>
                        <div style="margin-left:10px;">
                            <img style="margin-right:10px; float:left; width:100px; height:100px;" src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/B00000018990601ko.jpg?l=ko" alt="">
                            <span class="recommend-img-tit1">23년 첫수확 프리미엄 고당도 샤인머스캣 1송이 과일선물 (650g)</span>
                            <p class="prd_price" style="margin-top:8px;">
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
                        </div>
                    </li>
                    <li>
                        <div style="margin-left:10px;">
                            <img style="margin-right:10px; float:left; width:100px; height:100px;" src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/B00000018383002ko.jpg?l=ko" alt="">
                            <span class="recommend-img-tit1">23년 첫수확 프리미엄 고당도 샤인머스캣 1송이 과일선물 (650g)</span>
                            <p class="prd_price" style="margin-top:8px;">
                                <span class="tx_org">
                                    <span class="tx_num">62,900</span>
                                    원
                                </span>
                                <span class="tx_cur">
                                    <span class="tx_num">59,700</span>
                                    원
                                </span>
                            </p>
                            <p class="prd_flag">
                                <!-- <span class="icon_flag sale">세일</span> -->
                                <span class="icon_flag coupon">쿠폰</span>
                                <span class="icon_flag free">무배</span>
                                <!-- <span class="icon_flag delivery">오늘드림</span> -->

                            </p>
                        </div>
                    </li>
                    <li>
                        <div style="margin-left:10px;">
                            <img style="margin-right:10px; float:left; width:100px; height:100px;" src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/B00000018247004ko.jpg?l=ko" alt="">
                            <span class="recommend-img-tit1">[수플린] 풍성한과일선물 프리미엄 혼합과일 11입 선물세트 (11입, 총 4.3kg 이상)</span>
                            <p class="prd_price" style="margin-top:8px;">
                                <span class="tx_org">
                                    <span class="tx_num">72,900</span>
                                    원
                                </span>
                                <span class="tx_cur">
                                    <span class="tx_num">69,900</span>
                                    원
                                </span>
                            </p>
                            <p class="prd_flag">
                                <!-- <span class="icon_flag sale">세일</span> -->
                                <span class="icon_flag coupon">쿠폰</span>
                                <span class="icon_flag free">무배</span>
                                <!-- <span class="icon_flag delivery">오늘드림</span> -->
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 추천상품 '어때요' 끝 -->
        
        <!-- 상품설명, 구매정보, 리뷰, Q&A 시작 -->
        <div class="product-btns-wrapper">
            <ul class="product-btns-ul">
                <li class="product-desc-li" @click="chgTab(0)" :class="tab == 1? 'active-product-btn' : ''">
                    <p>상품설명</p>
                </li>
                <li class="product-buyinfo-li" @click="chgTab(1)" :class="tab == 2 ? 'active-product-btn' : ''">
                    <p>구매정보</p>
                </li>
                <li class="product-rvw-li" @click="chgTab(2)" :class="tab == 3 ? 'active-product-btn' : ''">
                    <p>리뷰</p>
                </li>
                <li class="product-qna-li" @click="chgTab(3)" :class="tab == 4 ? 'active-product-btn' : ''">
                    <p>Q&A</p>
                </li>
            </ul>
        </div>

        <div class="contents-wrapper">
          <!--상품설명시작-->
          <div v-if="tab == 1" class="contents-area">
              <div class="advertise-area-wrapper">
                <a href="" class="advertise-area">
                    <img src="https://image.oliveyoung.co.kr/uploads/images/display/9000003/396/2189236808962212784.jpg" alt="" class="advertise-img">
                </a>
              </div>
              <div class="contents-area-main">
                  <img src="https://kingson7.speedgabia.com/NESPRESSO/OverallMall/SSG/nespresso_official_900.jpg" alt="" class="contents-main-img">
                  <img src="https://kingson7.speedgabia.com/NESPRESSO/OverallMall/SSG/C30-KR-WH-CF_900.jpg" alt="" class="contents-sub-img">
              </div>
              <div class="notice-text">
                  <p>
                      본 상품 정보(상품 상세, 상품 설명 등)의 내용은 협력사가 직접 등록한 것 입니다.
                  </p>
              </div>
          </div>
          <!--상품설명끝-->

          <!--리뷰시작-->
          <div v-if="tab == 3" class="contents-area">
            <div class="rvw-supervise-wrapper">
              <div class="rvw-supervise-area">

                <!--얼굴부분시작-->
                <div class="grade-img">
                  <p class="img-face">
                    <span class="grade5">
                      <em class="grade5-em">최고</em>
                    </span>
                  </p>
                </div>
                <!--얼굴부분끝-->

                <!--점수부분시작-->
                <div class="score-area">
                  <p class="score-total">
                    <span>총 1,676건</span>
                  </p>

                  <p class="score-avg">
                    <strong>4.4</strong>
                    <span>점</span>
                  </p>

                  <ul class="star-num-area">
                    <li>
                      <span class="star-fill"></span>
                      <img class="star-empty" src="https://static.oliveyoung.co.kr/pc-static-root/image//product/bg_rating_star.png" alt="">
                    </li>
                    <li>
                      <span class="star-fill"></span>
                      <img class="star-empty" src="https://static.oliveyoung.co.kr/pc-static-root/image//product/bg_rating_star.png" alt="">
                    </li>
                    <li>
                      <span class="star-fill"></span>
                      <img class="star-empty" src="https://static.oliveyoung.co.kr/pc-static-root/image//product/bg_rating_star.png" alt="">
                    </li>
                    <li>
                      <span class="star-fill"></span>
                      <img class="star-empty" src="https://static.oliveyoung.co.kr/pc-static-root/image//product/bg_rating_star.png" alt="">
                    </li>
                    <li>
                      <span class="star-fill"></span>
                      <img class="star-empty" src="https://static.oliveyoung.co.kr/pc-static-root/image//product/bg_rating_star.png" alt="">
                    </li>
                  </ul>

                </div>
                <div class="graph-area-wrapper">
                  <ul class="graph-area">
                    <li class="graph-li">
                      <span class="graph-percent">66%</span>
                      <div class="graph-gray-area">
                        <span class="graph-red-area" :style="styleSet.redArea1"></span>
                      </div>
                      <span class="score-type1">5점</span>
                    </li>
                    <li class="graph-li">
                      <span class="graph-percent">21%</span>
                      <div class="graph-gray-area">
                        <span class="graph-red-area" :style="styleSet.redArea2"></span>
                      </div>
                      <span class="score-type1">4점</span>
                    </li>
                    <li class="graph-li">
                      <span class="graph-percent">8%</span>
                      <div class="graph-gray-area">
                        <span class="graph-red-area" :style="styleSet.redArea3"></span>
                      </div>
                      <span class="score-type1">3점</span>
                    </li>
                    <li class="graph-li">
                      <span class="graph-percent">3%</span>
                      <div class="graph-gray-area">
                        <span class="graph-red-area" :style="styleSet.redArea4"></span>
                      </div>
                      <span class="score-type1">2점</span>
                    </li>
                    <li class="graph-li">
                      <span class="graph-percent">3%</span>
                      <div class="graph-gray-area">
                        <span class="graph-red-area" :style="styleSet.redArea5"></span>
                      </div>
                      <span class="score-type1">1점</span>
                    </li>
                  </ul>
                </div>

                <!--점수부분끝-->

              </div>
            </div>

        <!--들어갈자리-->
        <!-- 상품 특징 3가지 시작 -->
        <div class="poll-wrapper" v-if="tab==3">
          <div class="poll-area">
            <dl class="poll-dl">
              <dt class="poll-dt">
                <span class="poll-dd-span">
                  피부타입
                </span>
              </dt>
              <dd class="poll-dd">
                <ul class="dd-ul">
                  <li class="dd-ul-li">
                    <span>건성에 좋아요</span>
                    <div class="dd-ul-li-div">
                      <span style="width:30px"></span>
                    </div>
                    <em class="poll-em">30%</em>
                  </li>
                  <li class="dd-ul-li">
                    <span>복합성 좋아요</span>
                    <div class="dd-ul-li-div">
                      <span style="width:62px"></span>
                    </div>
                    <em class="poll-em">62%</em>
                  </li>
                  <li class="dd-ul-li">
                    <span>지성에 좋아요</span>
                    <div class="dd-ul-li-div">
                      <span style="width:8px"></span>
                    </div>
                    <em class="poll-em">8%</em>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="poll-dl">
              <dt class="poll-dt">
                <span class="poll-dd-span">
                  피부고민
                </span>
              </dt>
              <dd class="poll-dd">
                <ul class="dd-ul">
                  <li class="dd-ul-li">
                    <span>보습에 좋아요</span>
                    <div class="dd-ul-li-div">
                      <span style="width:74px"></span>
                    </div>
                    <em class="poll-em">74%</em>
                  </li>
                  <li class="dd-ul-li">
                    <span>진정에 좋아요</span>
                    <div class="dd-ul-li-div">
                      <span style="width:20px"></span>
                    </div>
                    <em class="poll-em">20%</em>
                  </li>
                  <li class="dd-ul-li">
                    <span>주름/미백에 좋아요</span>
                    <div class="dd-ul-li-div">
                      <span style="width:6px"></span>
                    </div>
                    <em class="poll-em">6%</em>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="poll-dl">
              <dt class="poll-dt">
                <span class="poll-dd-span">
                  자극도
                </span>
              </dt>
              <dd class="poll-dd">
                <ul class="dd-ul">
                  <li class="dd-ul-li">
                    <span>자극없이 순해요</span>
                    <div class="dd-ul-li-div">
                      <span style="width:90px"></span>
                    </div>
                    <em class="poll-em">90%</em>
                  </li>
                  <li class="dd-ul-li">
                    <span>보통이에요</span>
                    <div class="dd-ul-li-div">
                      <span style="width:10px"></span>
                    </div>
                    <em class="poll-em">10%</em>
                  </li>
                  <li class="dd-ul-li">
                    <span>자극이 느껴져요</span>
                    <div class="dd-ul-li-div">
                      <span style="width:0px"></span>
                    </div>
                    <em class="poll-em">0%</em>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
        <!-- 상품 특징 3가지 끝 -->


        <!-- 상품 리뷰 시작 -->
        <div class="prd-rvw-list-wrapper">
          <div class="prd-rvw-list-area">
              <ul class="prd-rvw-ul">
                <!--하나의 리뷰 시작-->
                <li class="prd-rvw-li">
                  <div class="prd-rvw-left">
                    <div class="prd-rvw-left-wrapper">
                      <a href="" class="prd-rvw-left-img-wrapper">
                        <img src="https://image.oliveyoung.co.kr/uploads/images/mbrProfile/2023/01/02/1672646269565.png?RS=79x60&CS=60x60" alt="">
                      </a>
                      <p class="user-nickname">
                        <span>whiteBeauty</span>
                      </p>
                      <p class="user-rank-area">
                        <span class="user-rank">TOP481</span>
                      </p>
                      <p class="tag">
                        <span class="tag1">건성</span>
                        <span class="tag2">여름쿨톤</span>
                        <span class="tag3">모공</span>
                        <span class="tag4">미백</span>
                      </p>
                    </div>
                  </div>
                  <!--리뷰사진영역시작-->
                  <div class="prd-rvw-right">
                    <div class="prd-rvw-right-wrapper">
                      <div class="rvw-score-area">
                        <span class="star-area">
                          <span class="star-point"></span>
                        </span>
                        <span class="score-date">2023.09.18</span>
                        <span class="icon-offline-store">
                          매장
                        </span>
                      </div>
                      <div class="rvw-poll-area">
                        <dl class="poll-type1">
                          <dt class="poll-type1-dt">
                            <span>피부타입</span>
                          </dt>
                          <dd class="poll-type1-dd">
                            <span>복합성에 좋아요</span>
                          </dd>
                        </dl>
                        <dl class="poll-type1">
                          <dt class="poll-type1-dt">
                            <span>피부타입</span>
                          </dt>
                          <dd class="poll-type1-dd">
                            <span>복합성에 좋아요</span>
                          </dd>
                        </dl>
                        <dl class="poll-type1">
                          <dt class="poll-type1-dt">
                            <span>피부타입</span>
                          </dt>
                          <dd class="poll-type1-dd">
                            <span>복합성에 좋아요</span>
                          </dd>
                        </dl>
                      </div>
                      <div class="rvw-txt-inner">
                        전 이 제품 굉장히 칭찬해 추천하던 사람이었는데 당시 광고방에 혹했던건 아닐까 싶네요. 모공을 조여줘 모공크기가 줄어 든다는데 장기간 써본 사람으로서 이 모공앰플이 진짜 효과가 있는지는 잘 모르겠어요. 전 모공이 거의 없어서 그런지 아무런 효과도 없는 것 같고🙄 대신 남친한테 항상 열심히 발라주는데 남친의 모공 또한 작아지는 걸 아직 못봤어요.
                        <br>
                        다 쓰고 샘플들만 남아 사진찍어 보는데 여기에 쓰여진 효과 중 릴랙싱은 그나마 있다고 보지만 모공이 준다거나 피부가 리프팅되는 느낌은 전혀 없는 듯. 이 제품 진짜 효과가 있긴 할까요?
                      </div>
                      <div class="rvw-tag">
                        <span>완전히달라진리뷰</span>
                        <span>뒤집어놓으셨다</span>
                        <span>SNS에서난리난그제품</span>
                      </div>
                      <div class="rvw-img-div">
                        <ul class="rvw-img-ul">
                          <li>
                            <img src="https://image.oliveyoung.co.kr/uploads/images/gdasEditor/2023/08/16/1692170934661.png?RS=165x0&CS=165x165" alt="">
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!--리뷰사진영역끝-->
                </li>
                <!--하나의 리뷰 끝-->

                <!--하나의 리뷰 시작-->
                <li class="prd-rvw-li">
                  <div class="prd-rvw-left">
                    <div class="prd-rvw-left-wrapper">
                      <a href="" class="prd-rvw-left-img-wrapper">
                        <img src="https://image.oliveyoung.co.kr/uploads/images/mbrProfile/2023/01/02/1672646269565.png?RS=79x60&CS=60x60" alt="">
                      </a>
                      <p class="user-nickname">
                        <span>whiteBeauty</span>
                      </p>
                      <p class="user-rank-area">
                        <span class="user-rank">TOP481</span>
                      </p>
                      <p class="tag">
                        <span class="tag1">건성</span>
                        <span class="tag2">여름쿨톤</span>
                        <span class="tag3">모공</span>
                        <span class="tag4">미백</span>
                      </p>
                    </div>
                  </div>
                  <!--리뷰사진영역시작-->
                  <div class="prd-rvw-right">
                    <div class="prd-rvw-right-wrapper">
                      <div class="rvw-score-area">
                        <span class="star-area">
                          <span class="star-point"></span>
                        </span>
                        <span class="score-date">2023.09.18</span>
                        <span class="icon-offline-store">
                          매장
                        </span>
                      </div>
                      <div class="rvw-poll-area">
                        <dl class="poll-type1">
                          <dt class="poll-type1-dt">
                            <span>피부타입</span>
                          </dt>
                          <dd class="poll-type1-dd">
                            <span>복합성에 좋아요</span>
                          </dd>
                        </dl>
                        <dl class="poll-type1">
                          <dt class="poll-type1-dt">
                            <span>피부타입</span>
                          </dt>
                          <dd class="poll-type1-dd">
                            <span>복합성에 좋아요</span>
                          </dd>
                        </dl>
                        <dl class="poll-type1">
                          <dt class="poll-type1-dt">
                            <span>피부타입</span>
                          </dt>
                          <dd class="poll-type1-dd">
                            <span>복합성에 좋아요</span>
                          </dd>
                        </dl>
                      </div>
                      <div class="rvw-txt-inner">
                        전 이 제품 굉장히 칭찬해 추천하던 사람이었는데 당시 광고방에 혹했던건 아닐까 싶네요. 모공을 조여줘 모공크기가 줄어 든다는데 장기간 써본 사람으로서 이 모공앰플이 진짜 효과가 있는지는 잘 모르겠어요. 전 모공이 거의 없어서 그런지 아무런 효과도 없는 것 같고🙄 대신 남친한테 항상 열심히 발라주는데 남친의 모공 또한 작아지는 걸 아직 못봤어요.
                        <br>
                        다 쓰고 샘플들만 남아 사진찍어 보는데 여기에 쓰여진 효과 중 릴랙싱은 그나마 있다고 보지만 모공이 준다거나 피부가 리프팅되는 느낌은 전혀 없는 듯. 이 제품 진짜 효과가 있긴 할까요?
                      </div>
                      <div class="rvw-tag">
                        <span>완전히달라진리뷰</span>
                        <span>뒤집어놓으셨다</span>
                        <span>SNS에서난리난그제품</span>
                      </div>
                      <div class="rvw-img-div">
                        <ul class="rvw-img-ul">
                          <li>
                            <img src="https://image.oliveyoung.co.kr/uploads/images/gdasEditor/2023/08/16/1692170934661.png?RS=165x0&CS=165x165" alt="">
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!--리뷰사진영역끝-->
                </li>
                <!--하나의 리뷰 끝-->

                <!--하나의 리뷰 시작-->
                <li class="prd-rvw-li">
                  <div class="prd-rvw-left">
                    <div class="prd-rvw-left-wrapper">
                      <a href="" class="prd-rvw-left-img-wrapper">
                        <img src="https://image.oliveyoung.co.kr/uploads/images/mbrProfile/2023/01/02/1672646269565.png?RS=79x60&CS=60x60" alt="">
                      </a>
                      <p class="user-nickname">
                        <span>whiteBeauty</span>
                      </p>
                      <p class="user-rank-area">
                        <span class="user-rank">TOP481</span>
                      </p>
                      <p class="tag">
                        <span class="tag1">건성</span>
                        <span class="tag2">여름쿨톤</span>
                        <span class="tag3">모공</span>
                        <span class="tag4">미백</span>
                      </p>
                    </div>
                  </div>
                  <!--리뷰사진영역시작-->
                  <div class="prd-rvw-right">
                    <div class="prd-rvw-right-wrapper">
                      <div class="rvw-score-area">
                        <span class="star-area">
                          <span class="star-point"></span>
                        </span>
                        <span class="score-date">2023.09.18</span>
                        <span class="icon-offline-store">
                          매장
                        </span>
                      </div>
                      <div class="rvw-poll-area">
                        <dl class="poll-type1">
                          <dt class="poll-type1-dt">
                            <span>피부타입</span>
                          </dt>
                          <dd class="poll-type1-dd">
                            <span>복합성에 좋아요</span>
                          </dd>
                        </dl>
                        <dl class="poll-type1">
                          <dt class="poll-type1-dt">
                            <span>피부타입</span>
                          </dt>
                          <dd class="poll-type1-dd">
                            <span>복합성에 좋아요</span>
                          </dd>
                        </dl>
                        <dl class="poll-type1">
                          <dt class="poll-type1-dt">
                            <span>피부타입</span>
                          </dt>
                          <dd class="poll-type1-dd">
                            <span>복합성에 좋아요</span>
                          </dd>
                        </dl>
                      </div>
                      <div class="rvw-txt-inner">
                        전 이 제품 굉장히 칭찬해 추천하던 사람이었는데 당시 광고방에 혹했던건 아닐까 싶네요. 모공을 조여줘 모공크기가 줄어 든다는데 장기간 써본 사람으로서 이 모공앰플이 진짜 효과가 있는지는 잘 모르겠어요. 전 모공이 거의 없어서 그런지 아무런 효과도 없는 것 같고🙄 대신 남친한테 항상 열심히 발라주는데 남친의 모공 또한 작아지는 걸 아직 못봤어요.
                        <br>
                        다 쓰고 샘플들만 남아 사진찍어 보는데 여기에 쓰여진 효과 중 릴랙싱은 그나마 있다고 보지만 모공이 준다거나 피부가 리프팅되는 느낌은 전혀 없는 듯. 이 제품 진짜 효과가 있긴 할까요?
                      </div>
                      <div class="rvw-tag">
                        <span>완전히달라진리뷰</span>
                        <span>뒤집어놓으셨다</span>
                        <span>SNS에서난리난그제품</span>
                      </div>
                      <div class="rvw-img-div">
                        <ul class="rvw-img-ul">
                          <li>
                            <img src="https://image.oliveyoung.co.kr/uploads/images/gdasEditor/2023/08/16/1692170934661.png?RS=165x0&CS=165x165" alt="">
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!--리뷰사진영역끝-->
                </li>
                <!--하나의 리뷰 끝-->

                <!--하나의 리뷰 시작-->
                <li class="prd-rvw-li">
                  <div class="prd-rvw-left">
                    <div class="prd-rvw-left-wrapper">
                      <a href="" class="prd-rvw-left-img-wrapper">
                        <img src="https://image.oliveyoung.co.kr/uploads/images/mbrProfile/2023/01/02/1672646269565.png?RS=79x60&CS=60x60" alt="">
                      </a>
                      <p class="user-nickname">
                        <span>whiteBeauty</span>
                      </p>
                      <p class="user-rank-area">
                        <span class="user-rank">TOP481</span>
                      </p>
                      <p class="tag">
                        <span class="tag1">건성</span>
                        <span class="tag2">여름쿨톤</span>
                        <span class="tag3">모공</span>
                        <span class="tag4">미백</span>
                      </p>
                    </div>
                  </div>
                  <!--리뷰사진영역시작-->
                  <div class="prd-rvw-right">
                    <div class="prd-rvw-right-wrapper">
                      <div class="rvw-score-area">
                        <span class="star-area">
                          <span class="star-point"></span>
                        </span>
                        <span class="score-date">2023.09.18</span>
                        <span class="icon-offline-store">
                          매장
                        </span>
                      </div>
                      <div class="rvw-poll-area">
                        <dl class="poll-type1">
                          <dt class="poll-type1-dt">
                            <span>피부타입</span>
                          </dt>
                          <dd class="poll-type1-dd">
                            <span>복합성에 좋아요</span>
                          </dd>
                        </dl>
                        <dl class="poll-type1">
                          <dt class="poll-type1-dt">
                            <span>피부타입</span>
                          </dt>
                          <dd class="poll-type1-dd">
                            <span>복합성에 좋아요</span>
                          </dd>
                        </dl>
                        <dl class="poll-type1">
                          <dt class="poll-type1-dt">
                            <span>피부타입</span>
                          </dt>
                          <dd class="poll-type1-dd">
                            <span>복합성에 좋아요</span>
                          </dd>
                        </dl>
                      </div>
                      <div class="rvw-txt-inner">
                        전 이 제품 굉장히 칭찬해 추천하던 사람이었는데 당시 광고방에 혹했던건 아닐까 싶네요. 모공을 조여줘 모공크기가 줄어 든다는데 장기간 써본 사람으로서 이 모공앰플이 진짜 효과가 있는지는 잘 모르겠어요. 전 모공이 거의 없어서 그런지 아무런 효과도 없는 것 같고🙄 대신 남친한테 항상 열심히 발라주는데 남친의 모공 또한 작아지는 걸 아직 못봤어요.
                        <br>
                        다 쓰고 샘플들만 남아 사진찍어 보는데 여기에 쓰여진 효과 중 릴랙싱은 그나마 있다고 보지만 모공이 준다거나 피부가 리프팅되는 느낌은 전혀 없는 듯. 이 제품 진짜 효과가 있긴 할까요?
                      </div>
                      <div class="rvw-tag">
                        <span>완전히달라진리뷰</span>
                        <span>뒤집어놓으셨다</span>
                        <span>SNS에서난리난그제품</span>
                      </div>
                      <div class="rvw-img-div">
                        <ul class="rvw-img-ul">
                          <li>
                            <img src="https://image.oliveyoung.co.kr/uploads/images/gdasEditor/2023/08/16/1692170934661.png?RS=165x0&CS=165x165" alt="">
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!--리뷰사진영역끝-->
                </li>
                <!--하나의 리뷰 끝-->

                <!--하나의 리뷰 시작-->
                <li class="prd-rvw-li">
                  <div class="prd-rvw-left">
                    <div class="prd-rvw-left-wrapper">
                      <a href="" class="prd-rvw-left-img-wrapper">
                        <img src="https://image.oliveyoung.co.kr/uploads/images/mbrProfile/2023/01/02/1672646269565.png?RS=79x60&CS=60x60" alt="">
                      </a>
                      <p class="user-nickname">
                        <span>whiteBeauty</span>
                      </p>
                      <p class="user-rank-area">
                        <span class="user-rank">TOP481</span>
                      </p>
                      <p class="tag">
                        <span class="tag1">건성</span>
                        <span class="tag2">여름쿨톤</span>
                        <span class="tag3">모공</span>
                        <span class="tag4">미백</span>
                      </p>
                    </div>
                  </div>
                  <!--리뷰사진영역시작-->
                  <div class="prd-rvw-right">
                    <div class="prd-rvw-right-wrapper">
                      <div class="rvw-score-area">
                        <span class="star-area">
                          <span class="star-point"></span>
                        </span>
                        <span class="score-date">2023.09.18</span>
                        <span class="icon-offline-store">
                          매장
                        </span>
                      </div>
                      <div class="rvw-poll-area">
                        <dl class="poll-type1">
                          <dt class="poll-type1-dt">
                            <span>피부타입</span>
                          </dt>
                          <dd class="poll-type1-dd">
                            <span>복합성에 좋아요</span>
                          </dd>
                        </dl>
                        <dl class="poll-type1">
                          <dt class="poll-type1-dt">
                            <span>피부타입</span>
                          </dt>
                          <dd class="poll-type1-dd">
                            <span>복합성에 좋아요</span>
                          </dd>
                        </dl>
                        <dl class="poll-type1">
                          <dt class="poll-type1-dt">
                            <span>피부타입</span>
                          </dt>
                          <dd class="poll-type1-dd">
                            <span>복합성에 좋아요</span>
                          </dd>
                        </dl>
                      </div>
                      <div class="rvw-txt-inner">
                        전 이 제품 굉장히 칭찬해 추천하던 사람이었는데 당시 광고방에 혹했던건 아닐까 싶네요. 모공을 조여줘 모공크기가 줄어 든다는데 장기간 써본 사람으로서 이 모공앰플이 진짜 효과가 있는지는 잘 모르겠어요. 전 모공이 거의 없어서 그런지 아무런 효과도 없는 것 같고🙄 대신 남친한테 항상 열심히 발라주는데 남친의 모공 또한 작아지는 걸 아직 못봤어요.
                        <br>
                        다 쓰고 샘플들만 남아 사진찍어 보는데 여기에 쓰여진 효과 중 릴랙싱은 그나마 있다고 보지만 모공이 준다거나 피부가 리프팅되는 느낌은 전혀 없는 듯. 이 제품 진짜 효과가 있긴 할까요?
                      </div>
                      <div class="rvw-tag">
                        <span>완전히달라진리뷰</span>
                        <span>뒤집어놓으셨다</span>
                        <span>SNS에서난리난그제품</span>
                      </div>
                      <div class="rvw-img-div">
                        <ul class="rvw-img-ul">
                          <li>
                            <img src="https://image.oliveyoung.co.kr/uploads/images/gdasEditor/2023/08/16/1692170934661.png?RS=165x0&CS=165x165" alt="">
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!--리뷰사진영역끝-->
                </li>
                <!--하나의 리뷰 끝-->

              </ul>
          </div>
        </div>
        <!-- 상품 리뷰 끝 -->
        <!--들어갈자리-->
          </div>
          <!--리뷰끝-->
        </div>

    <!-- 상품설명, 구매정보, 리뷰, Q&A 끝-->
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
                                서비스가입사실확인 
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 푸터끝 -->
</div>
</template>

<script>
export default {
  data() {
    return {
      tab: 3,
      styleSet: {
        redArea1: {height: '66px'},
        redArea2: {height: '21px'},
        redArea3: {height: '8px'},
        redArea4: {height: '3px'},
        redArea5: {height: '3px'}
      }
    }
  },
  methods: {
    chgTab(tab) {
      this.tab = tab;
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
.search-btn {
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
.icon_flag.free {
    width:50px;
    background-color: #ad85ed;
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
    margin-top:40px;
    float:left;
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
.product-detail-wrapper {
    margin:0 auto;
    width:1020px;
    height: auto;
}
.product-detail {
    margin-top:40px;
}
.img-area img{
    width:510px;
    height: 510px;
}
.left-area {
    width:510px;
    float:left;
}
.left-area-mini {
    margin-top: 30px;
    display:flex;
    justify-content:center;
}
.right-area {
    width:510px;
    float:right;
    padding-left: 64px;
}

.product-info a{
    color: #000;
    font-size:17px;
    background: url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_link_arrow_black.png") right 5px/5px auto no-repeat;
    padding-right: 10px;
}
.product-info-main-tit {
    margin-top:15px;
    font-size:25px;
}
.product-price-info {
    position:relative;
    margin-top: 30px;
}
.bf-price {
    text-decoration: line-through;
    font-size:16px;
    color:#a8a8a8;
}
.aft-price {
    color:#e02020;
    font-size:28px;
    margin-left:10px;
    font-weight:700;
}
.advertise-area-wrapper {
  width:1020px;
  margin:0 auto;
}
.advantage-info {
    color:#9a9a9a;
    margin-left:10px;
}
.advantage-info:after {
    content: "";
    transform: rotate(180deg);
    position: absolute;
    left: 276px;
    top: 12px;
    width: 12px;
    height: 12px;
    background: url(https://static.oliveyoung.co.kr/pc-static-root/image/product/icon_sale_arrow.png) 0 0/12px auto no-repeat;
}
.icon-area {
    margin-top: 10px;
}
.coupon-icon {
    color: #fff !important;
    font-size:13px;
    padding:5px;
    display: block;
    width: 56px;
    text-align: center;
    border-radius: 11px;
    background: #9bce26;
}
.watcher-area {
    margin-top:10px;
}
.watcher {
    font-size:14px;
    color:#f27370;
    background: url("https://static.oliveyoung.co.kr/pc-static-root/image/curation/ico_viewEye.png") center left 4px/18px auto no-repeat;
    padding-left: 25px;
}
.prd-more-info {
    margin-top:25px;
}
.prd-more-tit a {
    text-indent: -9999px;
    vertical-align: top;
    display: inline-block;
    background:url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_notice_gray.png") 0 0/17px auto no-repeat;
    width:17px;
    height:17px;
}
.delivery-info {
    margin-top: 10px;
}
.delivery-info li{
    display:inline-block;
}
.delivery-div {
    display:inline-block;
    margin-left:10px;
}
.dt1 {
    position: relative;
}
.dt1:after {
    content: "";
    top: 5px;
    width: 1px;
    left: 67px;
    height: 12px;
    background: #b2b2b2;
    position: absolute;
}
.dt2 {
    position: relative;
    margin-left: 10px;
}
.dt2:after {
    content: "";
    top: 6px;
    width: 1px;
    left: 83px;
    height: 12px;
    background: #b2b2b2;
    position: absolute;
}
.dt3 {
    display:inline-block;
    margin-left:10px;
}
.prd-more-info .row:nth-child(2) {
    margin-top: 17px;
    border-top:1px solid #ddd;
    border-bottom:1px solid #ddd;
    padding-top: 10px;
    padding-bottom: 10px;
}
.prd-sub-tit2 {
    font-weight: 700;
    margin-bottom: 10px;
}
.benefit-list p:nth-child(1) {
    margin-bottom: 5px;
}
.benefit-list p:nth-child(2) {

}
.info-tab1 {
    text-indent: -9999px;
    width: 17px;
    height: 17px;
    display: inline-block;
    background:url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_notice_gray.png") 0 0/17px auto no-repeat;
}
.info-tab2 {
    text-indent: -9999px;
    width: 17px;
    height: 17px;
    display: inline-block;
    background:url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_notice_gray.png") 0 0/17px auto no-repeat;
}
.prd-select-list {
    margin-top: 20px;
    width:100%;
    height:48px;
}
.prd-select-area {
    display: block;
    position:relative;
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    color: #000 !important;
    border-radius: 5px;
}
.prd-select-area:after {
    content: "";
    position: absolute;
    right:10px;
    top:14px;
    width:10px;
    height:6px;
    background: url("https://static.oliveyoung.co.kr/pc-static-root/image/product/ico_option_select.png");
    background-size: 10px auto;
    background-position: 0 0;
}
.prd-price-total {
    width:100%;
    margin-top: 20px;
    padding:10px 10px 25px 10px;
    height: auto;
    border-bottom: 2px solid #f27370;
    color:#f27370;
}
.prd-price1 {
    float: left;
    font-size:18px;
    font-weight: 700;
}
.prd-price2 {
    font-size: 18px;
    font-weight: 700;
    float: right;
}
.buy-btns {
    display:flex;
    justify-content:space-between;
    margin-top:10px;
}
.cart-btn {
    width:136px;
    height: 65px;
    font-size:22px;
    border:1px solid #ee6e6b;
    background:#fff;
    color:#ff5753;
}
.cart-btn2 {
    font-size:22px;
    width:136px;
    height: 65px;
    border:1px solid #ee6e6b;
    background:#ee6e6b;
    color:#fff;
}
.cart-btn3 {
    width:76px;
    height: 65px;
    background: url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/icon-gift-32-line-fff.png") 50% 50% no-repeat;
    background-color: #ee6e6b;
    border:none;
}
.cart-btn4 {
    width:76px;
    height: 65px;
    background: url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/icon-like-32-line.png") 50% 50% no-repeat;
    border:1px solid #e5e5e5;
    background-size:34px auto;
}
.buy-able-wrapper {
    float:left;
    width:100%;
    margin:0 auto;
    margin-top:40px;
}
.buy-able-area {
    padding:30px;
    width:1020px;
    margin:0 auto;
    border:1px solid #ddd;
    border-radius: 5px;
}
.buy-able-left {
    position: relative;
}
.buy-able-img {
    position:absolute;
    width:40px;
    top:-4px;
    height:40px;
    display:inline-block;
    background: url("https://static.oliveyoung.co.kr/pc-static-root/image/product/icon_store_search.png") 0 0/28px 24px no-repeat;
}
.buy-able-span {
    margin-left:33px;
}
.buy-able-span {
    /* background: url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_link_arrow_black.png") right 11px/6px auto no-repeat; */
    width:40px;
    height:40px;
}
.buyable {
    font-weight:700;
}
.buy-able-arrow {
    background:url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_link_arrow_black.png") right 11px/6px auto no-repeat;
    width:40px;
    height: 40px;
    display:inline-block;
    position: absolute;
    top:-3px;
    left:243px;
}
.vertical-line {
    width:0.2px;
    height:50px;
    border: 1px solid #ddd;
    position: absolute;
    left: 510px;
    top: -10px;
}
.buy-able-right{
    float:right;
    position:relative;
}
.buy-able-right-img {
    width: 88px;
    background: url(https://image.oliveyoung.co.kr/uploads/images/onlBrandMgmt/2023/4/4835200102281465411.jpg);
    height: 40px;
    background-size: cover;
    display: inline-block;
    left: -407px;
    position: absolute;
    top: -38px;
    height: 50px;
}
.brand-name {
    position: absolute;
    top: -16px;
    width: 120px;
    left: -263px;
    font-weight: 700;
}
.buy-able-arrow2 {
    background: url(https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_link_arrow_black.png) right 11px/6px auto no-repeat;
    width: 40px;
    height: 40px;
    display: inline-block;
    position: absolute;
    top: -19px;
    right: 123px;
}
.recommend-wrapper{
    width:100%;
    float:left;
    margin-top:40px;
}
.recommend-tit {
    margin: 0 auto;
    height: 80px;
    position: relative;
    width: 1020px;
}
.recommend-tit-left {
    float:left;
    width:277px;
}
.recommend-word {
    font-size:20px;
}
.recommend-tit-right {
background: url(https://static.oliveyoung.co.kr/pc-static-root/image/curation/ico_more_5x10.png) top 3.5px right 0/5px auto no-repeat;
    padding-right: 5px;
    position: absolute;
    width: 72px;
    right: 5px;
    line-height: 16px;
    border: none;
}
.recommend-more-btn {
    font-size:15px;
    font-weight: 500;
    color:#aaa;
}

.recommend-img-area{
    width:1020px;
    margin:0 auto;
}
.recommend-img-ul {
    display:flex;
    justify-content: space-between;
}
.recommend-img-tit1 {
    font-size:12px;
    overflow:hidden;
    word-wrap: break-word;
    max-height: 36px;
    margin-bottom:3px;
}
.product-btns-wrapper {
    float: left;
    width: 100%;
    height: 69px;
    margin: 90px 0 100px 0;
    border-bottom: 2px solid #9bce26;
}
.product-btns-ul {
    margin: 19px auto 78px auto;
    width: 1020px;
}
.product-btns-ul>li{
    font-size:16px;
    color:#777;
    font-weight: 600;
    text-align: center;
    height:50px;
    width:25%;
    float:left;
    line-height:50px;
    background:#f5f5f5;
    border-bottom: 2px solid #9bce26;
}

.active-product-btn {
    background:#fff !important;
    border: 2px solid #9bce26;
    color:#333 !important;
    font-weight: 800 !important;
}
.contents-wrapper {
    float:left;
    width:100%;
}
.contents-area {
    width:1020px;
    margin:0 auto;
}
.contents-area-main {
    width: 900px;
    margin: 50px auto 0 auto;
}
.notice-text {
    width: 600px;
    font-size:14px;
    padding: 20px 30px 20px 30px;
    font-weight:500;
    color:#666;
    margin:40px auto 40px auto;
    border: 1px solid #ddd;
}
.contents-area {
  width: 100%;
  float:left;
}
.rvw-supervise-wrapper {
  width:1020px;
  margin:0 auto;
  border-top:1px solid black;
  margin-bottom:60px;
}
.rvw-supervise-area {
  height:231px;
  border-bottom:1px solid #ddd;
}
.grade-img {
  width:280px;
  float:left;
  height:231px;
  border-right: 1px solid #ddd;
}
.img-face {
  margin-top: 64px;
}
.grade5 {
  background-position: 0 0;
  display:block;
  width: 100px;
  height: 100px;
  margin: 0 auto 8px;
  background: url("https://static.oliveyoung.co.kr/pc-static-root/image/product/face_grade_1.png") no-repeat;
  position:relative;
}
.grade5-em {
  display:block;
  text-align: center;
  font-style:normal;
  position:absolute;
  bottom:-34px;
  right:35px;
}
.rvw-score-area {
  width:825px;
  float:left;
}
.score-area {
  width:361px;
  float:left;
  padding-top:43px;
}
.score-total {
  text-align: center;
  font-size:16px;
  font-weight: 700;
  margin-bottom:20px;
}
.score-avg {
  text-align: center;
}
.score-avg>strong {
  font-size:30px;
  font-weight: 700;
}
.score-avg>span {
  font-weight: 700;
}
.star-num-area {
  margin-top:34px;
  text-align: center;
}
.star-num-area>li{
  width:26px;
  height:25px;
  position:relative;
  display: inline-block;
}
.star-fill {
  top:0;
  left:0;
  position:absolute;
  display: block;
  width:100%;
  height:26px;
  background:#f27370;
  z-index:4;
}
.star-empty{
  top:0;
  left:0;
  position: absolute;
  z-index:5;
}
.graph-area-wrapper {
  float:left;
}
.graph-area {
  width:378px;
  display: block;
  height: 231px;
  padding: 20px 0 0 15px;
}
.graph-li {
  display:inline-block;
  width:56px;
  position:relative;
  text-align: center;
}
.graph-gray-area {
  position: relative;
  background: #e5e5e5;
  width: 8px;
  margin: 10px auto 0 auto;
  height: 100px;
}
.graph-red-area {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  background: #f27370;
  border-radius: 10px;
}
.score-type1 {
  position: absolute;
  bottom: -28px;
  left:15px;
}
.graph-percent {
  color: #aaa;
}
.poll-wrapper {
  float:left;
  width:100%;
  border-bottom:1px solid #e5e5e5;
  padding-bottom:50px;
}
.poll-area {
  width:1020px;
  margin:0 auto;
}
.poll-dl {
  width:340px;
  float:left;
}
.poll-dt {
  border: 1px solid #00c8b5;
  border-radius: 19px;
  width: 100px;
  padding: 9px;
  text-align: center;
  color: #00c8b5;
}
.poll-dd {
  margin-top: 20px;
  padding-left:12px;
}
.dd-ul-li {
  color:#888;
  font-size:14px;
}
.dd-ul-li {
  position:relative;
  margin-top:15px;
}
.dd-ul-li>span {
  display:inline-block;
  width:115px;
}
.dd-ul-li-div {
  background: #e5e5e5;
  width: 100px;
  height: 10px;
  display: inline-block;
  margin-left: 44px;
  border-radius: 20px;
}
.dd-ul-li-div>span {
  background-color: #00c8b5;
  height: 10px;
  position: absolute;
}
.poll-em {
  font-style:normal;
  color:#888;
  margin-left:20px;
}
.prd-rvw-list-wrapper {
  float:left;
  width:100%;
  padding-top:20px;
}
.prd-rvw-list-area {
  width:1020px;
  margin:0 auto;
}
.prd-rvw-li {
  margin-top: 20px;
  border-top :1px solid #e5e5e5;
  padding-top:15px;
}
.prd-rvw-left {
  float:left;
  width:255px;
}
.prd-rvw-left-wrapper {
  position: relative;
}
.prd-rvw-left-img-wrapper {
  display:inline-block;
}
.user-nickname {
  display:inline-block;
  position: absolute;
  top:10px;
  left:77px;
}
.user-nickname>span {
  font-weight: 700;
}
.user-rank-area {
  position: relative;
}
.user-rank {
  background: #f0f1f4;
  display: inline-block;
  position: absolute;
  top: -27px;
  right: 133px;
  padding: 5px;
  border-radius: 11px;
  font-size: 10px;
  color: #757d86;
}
.tag {
  margin-top:12px;
}
.tag>span {
  position:relative;
  color:#757d86;
  font-size:12px;
}
.tag>span:nth-child(n+2):nth-child(-n+4) {
  margin-left:10px;
}
.tag>span:nth-child(n+2):nth-child(-n+4):before{
  width: 2px;
  height: 2px;
  background: #b2b8be;
  position: absolute;
  top: 7px;
  left: -5px;
  content: "";
}
.prd-rvw-right-wrapper {
  padding-left: 260px;
}
.prd-rvw-right {
}
.star-area {
  background:url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_review_point_new_off.png") 0 0/112px auto no-repeat;
  width:112px;
  height: 20px;
  float:left;
}
.star-point {
  background:url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_review_point_new_on.png") 0 0/112px auto no-repeat;
  width:50%;
  height:20px;
  display:inline-block;
}
.score-date {
  color:#888;
  font-size:16px;
  margin-left:10px;
}
.icon-offline-store {
  position:relative;
  margin-left:25px;
  padding-left: 10px;
}
.icon-offline-store:before{
  width: 2px;
  height: 2px;
  background: #b2b8be;
  display: inline-block;
  content: "";
  position: absolute;
  top: 7px;
  left: -10px;
}
.icon-offline-store:after{
  position: absolute;
  background: url(https://static.oliveyoung.co.kr/pc-static-root/image/mypage/ico_offline_store.png) no-repeat;
  content: "";
  display: inline-block;
  width: 34px;
  background-size: 16px auto!important;
  transform: translateY(-50%);
  height: 20px;
  left: -3px;
  top: 9px;
}
.poll-type1 {
  display: inline-block;
  position: relative;
  width:157px;
  font-size:12px;
  margin-top:15px;
}
.poll-type1-dt>span{
  color:#0cc7b8;
}
.poll-type1-dt {
  float:left;
}
.poll-type1-dd > span {
  margin-left:10px;
  position:relative;
  color:#666;
  font-weight: 600;
}
.poll-type1:not(:last-child):after {
  position: absolute;
  top: 1px;
  left: 131px;
  content: "";
  width: 1px;
  height: 11px;
  background: #b2b8be;
  display: inline-block;
  margin-left: 5px;
}
.rvw-txt-inner {
  color:#555;
  line-height:34px;
  font-size:16px;
  padding-top: 20px;
  margin-top:20px;
}
.rvw-tag>span:before {
  content:"#"
}
.rvw-tag{
  margin-top: 20px;
  color:#757d86;
  font-size:16px;
}
.rvw-tag>span:not(:first-child) {
  margin-left:10px;
}
.rvw-img-div {
  margin-top:20px;
}
.rvw-img-ul {
  width:calc(100% + 5px);
  height:165px;
  overflow:hidden;
  display:flex;
  gap:10px;
}
</style>