<template>
  <div class="wrapper">
    <!-- 헤더시작 -->
    <Header/>

    <!-- 헤더끝 -->
    <div class="contents-wrapper">
      <div class="tit-box">
        <h1 class="tit-box-h1">
          장바구니
          <span class="tit-box-h1-span">1</span>
        </h1>
        <ul class="tit-box-ul">
          <li class="tit-box-li-incart on">
            <span class="incart-num1">
              1
            </span>
            장바구니
          </li>
          <li class="tit-box-li-order">
            <span class="incart-num1">
              2
            </span>
            주문/결제
          </li>
          <li class="tit-box-li-done ">
            <span class="incart-num1">
              3
            </span>
            주문완료
          </li>
        </ul>
      </div>

      <div class="membership-box-wrapper">
        <p class="membership-grade-info">
          <strong>{{ username }}</strong>
          님의 멤버십 등급은
          <span class="grade">BABY OLIVE</span>
          입니다
        </p>
        <ul class="membership-info-list">
          <li style="width:86px!important">
            <a href="" class="grade-benefit">
              <span>등급혜택</span>
            </a>
          </li>
          <li>
            <a href="" class="cj-point">
              <strong>CJ ONE 포인트</strong>
              <span style="color:#f27370">434</span>P
            </a>
          </li>
          <li>
            <a href="" class="discount-coupon">
              <strong>할인쿠폰</strong>
              <span style="color:#f27370">0</span>개
            </a>
          </li>
          <li>
            <a href="" class="deposit">
              <strong>예치금</strong>
              <span style="color:#f27370">0</span>원
            </a>
          </li>
        </ul>

        <ul class="delivery-btns">
          <li class="normal">
            <button>
              일반 배송(1)
            </button>
          </li>
          <li class="today-dream">
            <button>
              오늘드림&픽업 (0)
            </button>
          </li>
        </ul>
      </div>

      <h2 class="cart-sub-title">
        올리브영 배송상품
      </h2>

      <table class="order-table">
        <thead>
        <tr>
          <th class="order-table-th w40" scoped="col">
            <input type="checkbox">
          </th>
          <th class="order-table-th w390" scoped="col">상품정보</th>
          <th class="order-table-th w110" scoped="col">판매가</th>
          <th class="order-table-th w100" scoped="col">수량</th>
          <th class="order-table-th w110" scoped="col">구매가</th>
          <th class="order-table-th w120" scoped="col">배송정보</th>
          <th class="order-table-th w150" scoped="col">선택</th>
        </tr>
        </thead>
        <tbody class="order-table-tbody">
        <tr>
          <td colspan="7" class="order-table-tbody-td">
            <div class="order-table-tbody-td-tablerow">

              <div class="tbl_cell w40">
                <input type="checkbox" class="tbl_cell_input1">
              </div>

              <div class="tbl_cell w390">
                <div class="tbl-cell-prd-info">
                  <a href="">
                    <img src="https://image.oliveyoung.co.kr/uploads/images/goods/220/10/0000/0017/A00000017406610ko.jpg?l=ko" alt="">
                  </a>
                  <a href="" class="tbl-cell-prd-name">
                      <span class="brand-name">
                        하트퍼센트
                      </span>
                    <p class="goods-nm">
                      [NEW 컬러 추가] 하트퍼센트 도트 온 무드 립펜슬(17colors)
                    </p>
                    <p class="prd-option">
                      <i class="prd-option-tit">
                        옵션
                      </i>
                      <span>02 크리미핑크</span>
                      <button class="prd-option-change">
                        옵션변경
                      </button>
                    </p>
                    <p class="prd-flags">
                        <span class="icon-flag flag-sale">
                          세일
                        </span>
                      <span class="icon-flag flag-delivery">
                          오늘드림
                        </span>
                    </p>
                  </a>
                </div>
              </div>

              <div class="tbl_cell w110">
                  <span class="tbl-cell-curprice">
                    <span>14,000</span>
                    원
                  </span>
              </div>

              <div class="tbl_cell w100">
                <div class="prd-count">
                  <select name="" id="">
                    <option value="1">1</option>
                  </select>
                </div>
              </div>

              <div class="tbl_cell w100">
                  <span class="org-price">
                    14,000원
                  </span>
                <span class="pur-price">
                    12,600원
                  </span>
              </div>

              <div class="tbl_cell w120">
                <p class="prd-delivery">
                  <strong class="prd-delivery-strong">
                    2,500
                    <span class="prd-delivery-strong-span">
                        도서·산간 제외
                      </span>
                  </strong>
                </p>
              </div>

              <div class="tbl_cell w150">
                <div class="btn-group">
                  <button class="buynow-btn">
                    <span>바로구매</span>
                  </button>
                  <button class="shopping-zzim-btn">
                    <span>쇼핑찜</span>
                  </button>
                  <button class="delete-btn">
                    <span>삭제</span>
                  </button>
                </div>
              </div>

            </div>
          </td>
        </tr>
        </tbody>
      </table>

      <div class="delete-btns-group">
        <div class="delete-btns-left">
          <button class="select-prd-delete">
            선택상품 삭제
          </button>
          <button class="select-soldout-delete">
            품절상품 삭제
          </button>
        </div>
        <div class="pay-price-right">
          총 판매가
          <span class="sum-pay-money">32,000</span>원
          <span class="minus-sign">-</span>
          총 할인금액
          <span class="sum-discount-money">
            7,430
          </span>
          원
          <span class="plus-sign">+</span>
          배송비
          <span class="delivery-pay-money">
            0
          </span>
          원
          <span class="equal-sign">=</span>
          <span class="total-money-price">
            총 결제금액
            <span class="total-money-price-result">
              24,570
            </span>
            원
          </span>
        </div>
      </div>

      <div class="total-price-info-cart">
        <div class="total-price-detail-cart">
          <p>
            총 판매가
            <span>
              <span class="total-price-detail-money">32,000</span>
              원
            </span>
          </p>
          <p class="minus-sign-cart">-</p>

          <p class="total-discount-area-cart">
            <span>
              총 할인금액
              <span class="total-discount-detail-money">
                <span class="emphasize-money">7,430</span>
                원
              </span>
            </span>
          </p>
          <p class="plus-sign-cart">+</p>

          <p class="total-delivery-money">
            배송비
            <span class="delivery-money-price">
              <span class="emphasize-delivery-money">
                0
              </span>
              원
            </span>
          </p>
        </div>
      </div>
      <div class="sum-price-summary-area">
        <span class="summary-left-text">
          배송비는 쿠폰할인금액에 따라 변경될 수 있습니다.
        </span>
        <span class="summary-right-price">
          총 결제예상금액
          <span>
            24,570원
          </span>

        </span>
      </div>
      <div class="order-group-btns-cart">
        <button>선택주문(2)</button>
        <button>전체주문</button>
      </div>
      <div class="basket-group-cart">
        <h4 class="basket-tit">
          함께 구매하면 좋은 추천 상품이에요
          <button class="see-more-cart">
            더보기
          </button>
        </h4>


        <div class="basket-group-cart-imgs-list">
          <ul class="cart-imgs-list-ul">
            <li>
              <div class="cart-imgs-list-li-left">
                <img class="cart-imgs-list-li-img" src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0013/A00000013750317ko.jpg?l=ko" alt="">
              </div>
              <div class="cart-imgs-list-li-right">
                <a href="">
                  <dl class="imgs-list-li-dl">
                    <dt class="cart-imgs-list-li-right-tit">
                      [9월 올영픽] 어반디케이 올나이터 세팅 픽서 118ml
                    </dt>
                    <dd class="cart-imgs-list-li-right-price">
                      <del>45,000원</del>
                      <strong>36,000원</strong>
                    </dd>
                    <dd class="cart-imgs-list-li-right-icon">
                      <span class="cart-imgs-icon _sale">세일</span>
                      <span class="cart-imgs-icon _coupon">쿠폰</span>
                      <span class="cart-imgs-icon _gift">증정</span>
                      <span class="cart-imgs-icon _today">오늘드림</span>
                    </dd>
                  </dl>
                </a>
              </div>
            </li>
            <li>
              <div class="cart-imgs-list-li-left">
                <img class="cart-imgs-list-li-img" src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0013/A00000013634313ko.jpg?l=ko" alt="">
              </div>
              <div class="cart-imgs-list-li-right">
                <a href="">
                  <dl class="imgs-list-li-dl">
                    <dt class="cart-imgs-list-li-right-tit">
                      롬앤 글래스팅 워터 틴트
                    </dt>
                    <dd class="cart-imgs-list-li-right-price">
                      <del>10,900원</del>
                      <strong>8,900원</strong>
                    </dd>
                    <dd class="cart-imgs-list-li-right-icon">
<!--                      <span class="cart-imgs-icon _sale">세일</span>-->
<!--                      <span class="cart-imgs-icon _coupon">쿠폰</span>-->
<!--                      <span class="cart-imgs-icon _gift">증정</span>-->
                      <span class="cart-imgs-icon _today">오늘드림</span>
                    </dd>
                  </dl>
                </a>
              </div>
            </li>
            <li>
              <div class="cart-imgs-list-li-left">
                <img class="cart-imgs-list-li-img" src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0015/A00000015036113ko.jpg?l=ko" alt="">
              </div>
              <div class="cart-imgs-list-li-right">
                <a href="">
                  <dl class="imgs-list-li-dl">
                    <dt class="cart-imgs-list-li-right-tit">
                      [NEW S/S컬렉션]홀리카홀리카 마이페이브 무드 아이팔레트
                    </dt>
                    <dd class="cart-imgs-list-li-right-price">
<!--                      <del>45,000원</del>-->
                      <strong>20,800원</strong>
                    </dd>
                    <dd class="cart-imgs-list-li-right-icon">
                      <span class="cart-imgs-icon _sale">세일</span>
<!--                      <span class="cart-imgs-icon _coupon">쿠폰</span>-->
<!--                      <span class="cart-imgs-icon _gift">증정</span>-->
<!--                      <span class="cart-imgs-icon _today">오늘드림</span>-->
                    </dd>
                  </dl>
                </a>
              </div>
            </li>

          </ul>
        </div>

        <div class="cart-comment-tit">
          <p>장바구니 상품은 90일동안, 판매종료 된 상품은 10일동안 보관됩니다.</p>
        </div>
      </div>
    </div>


    <!-- 푸터시작 -->
    <Footer style="margin-top:900px"/>
    <!-- 푸터끝 -->
  </div>
</template>

<script>

import {defineComponent} from "vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
// import axios from 'axios';

export default defineComponent({
  components: {Footer,Header},
  data() {
    return {
      username : '',
    }
  },

  computed:{
  },
  mounted() {
    this.username = JSON.parse(localStorage.getItem('loginObj')).mid
  },
})
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
  border: 0;
  color: #666;
  font-family: Montserrat, -apple-system, NotoSansCJKkr, AppleSDGothicNeo, Roboto, dotum, "돋움", sans-serif;
  font-size: 14px;
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


#Gnb {
  position: relative;
  width: 100%;
  min-width: 1020px;
  height: 47px;
  background: #fff;
  border-top: 1px solid #ddd;
  border-bottom: 2px solid #555;
  z-index: 10;
}

#gnbWrap {
  position: relative;
  width: 1020px;
  margin: 0 auto;
}

#btnGnbOpen {
  float: left;
  width: 170px;
  height: 44px;
  padding-left: 27px;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  line-height: 44px;
  color: #000;
  font-size: 15px;
  font-weight: 700;
  text-align: left;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

#btnGnbOpen:before {
  content: "";
  display: inline-block;
  margin: 0 8px 0 0;
  background: url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_menu_off.png") 0 14px no-repeat;
  width: 24px;
  height: 44px;
  vertical-align: middle;
}

#Gnb .layer_all_menu {
  position: absolute;
  top: 44px;
  width: 1020px;
  border: 2px solid #2f3030;
  z-index: 20;
  display: none;
}

#Gnb .gnb_menu_list {
  position: relative;
  top: 0;
  right: 0;
}

#Gnb .gnb_menu_list > li {
  float: left;
  margin-left: 45px;
}

#Gnb .gnb_menu_list > li:first-child {
  margin-left: 50px;
}

#Gnb .gnb_menu_list > li > a {
  display: block;
  height: 44px;
  line-height: 44px;
  color: #000;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -.04em;
}

#Container {
  width: 100%;
  min-width: 1020px;
}

#Contents {
  width: 1020px;
  height: 100%;
  margin: 0 auto;
}

.main_full_banner {
  width: 100%;
  height: 450px;
}

.main_full_banner .banner_wrap {
  position: absolute;
  width: 100%;
  left: 0;
  background: #f5f5f5;
  z-index: 0;
  height: 450px;
  min-width: 1020px;
  overflow: hidden;
}

.slick-slider {
  display: block;
  position: relative;
}

.main_full_banner .banner_wrap .slick-arrow.slick-prev {
  left: 50%;
  margin-left: -290px;
}

.main_full_banner .banner_wrap .slick-arrow {
  position: absolute;
  bottom: 30px;
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
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.slick-track {
  min-width: 1020px;
}

.slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  z-index: 1;
}

.slick-initialized .slick-slide {
  display: block;
}

.slick-slide {
  float: left;
  height: 100%;
  min-height: 1px;
}

.main_full_banner .banner_link {
  display: block;
  position: relative;
  height: 450px;
  overflow: hidden;
}

.main_full_banner .banner_link .banner_desc {
  position: absolute;
  top: 52px;
  left: 50%;
  font-size: 18px;
  color: #666;
  z-index: 1;
  margin-left: -290px;
  font-weight: 700;
}

.main_full_banner .banner_link .banner_desc .tit {
  display: block;
  font-size: 18px;
  color: #000;
}

.main_full_banner .banner_link .banner_desc strong {
  display: block;
  width: 360px;
  margin-bottom: 10px;
  font-size: 48px;
  color: #1f1f1f;
  line-height: 56px;
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
  transform: translateX(-50%);
}

img {
  border: 0;
  vertical-align: top;
  color: #666;
}

.main_mid_banner {
  margin: 50px 0 0;
}

.main_mid_banner > a {
  display: block;
  width: 1020px;
  /* vertical-align:bottom; */
}

.main_mid_banner img {
  width: 1020px;
  height: 102px;
}

.two {
  height: auto;
  margin-top: 0;
  border-bottom: 0;
}

.inner {
  overflow: hidden;
  float: left;
  width: 50%;
  height: 575px;
}

.curation_slide .type03 {
  margin-top: 26px;
  margin-bottom: 27px;
}

.curation_area .curation_slide {
  position: relative;
  margin-top: 50px;
}

.curation_area .two .tit_type03 {
  height: 62px;
}

.tit_type03 {
  margin: 60px 30px 0;
  font-weight: 700;
  font-size: 24px;
  color: #000;
  position: relative;
  line-height: 1.3;
  letter-spacing: 0;
}

.tit_type03 .moreBtn {
  position: absolute;
  bottom: 3px;
  right: 0;
  background: #fff;
}

.tit_type03 .moreBtn span {
  padding-right: 11px;
  background: url("https://static.oliveyoung.co.kr/pc-static-root/image/curation/ico_more_5x10.png") center right 0/5px auto no-repeat;
  font-size: 15px;
  font-weight: 500;
  color: #aaa;
}

.curation_area .two .curation_slide .type03 .slick-list {
  overflow: hidden;
  height: 320px;
}

.slick-list {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
}

.slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  z-index: 1;
}

.curation_list {
  font-size: 0;
}

.curation_list .curation_item {
  display: inline-block;
  position: relative;
  width: 255px;
  padding: 0 10px;
  vertical-align: top;
}

.curation_area .slide_list .item {
  display: block;
  position: relative;
  text-align: center;
}

.curation_area .slide_list .item .thumb_flag {
  position: absolute;
  top: 7px;
  left: 17px;
  line-height: 44px !important;
}

.curation_area .slide_list .item .thumbImg {
  display: block;
  width: 215px;
  height: 215px;
  margin: 0 auto;
}

.curation_area .slide_list .item .thumbImg > img {
  width: auto !important;
  max-width: 215px;
  height: auto !important;
  max-height: 215px;
}

.curation_area .slide_list .item .prd_name {
  display: block;
  width: 215px;
  min-height: 40px;
  padding: 0 10px;
  margin: 8px auto 0;
  text-decoration: none;
}

.curation_area .slide_list .item .prd_name .tx_name {
  overflow: hidden;
  height: 40px;
  padding: 2px 0;
  line-height: 18px;
  text-overflow: ellipsis;
  color: #000;
  font-size: 14px;
  text-align: left;
}

.curation_area .slide_list .item .prd_price {
  position: relative;
  width: 215px;
  height: 25px;
  margin: 5px auto 0;
  padding: 0 10px;
  line-height: 22px;
  text-align: left;
}

.curation_area .slide_list .item .prd_price .tx_org {
  color: #a9a9a9;
  font-size: 12px;
  text-decoration: line-through;
  vertical-align: middle;
  font-weight: 400;
}

.curation_area .slide_list .item .prd_price .tx_org + .tx_cur {
  margin: 0 0 0 7px;
  vertical-align: bottom;
}

.curation_area .slide_list .item .prd_price .tx_cur {
  display: inline-block;
  color: #e02020;
  font-size: 14px;
  font-weight: 700;
}

.curation_area .slide_list .item .prd_price .tx_cur > span {
  display: inline-block;
  font-size: 20px;
  vertical-align: -1px;
}

.tx_num {
  letter-spacing: -.02em !important;
  font-weight: 500;
}

.curation_area .slide_list .item .prd_flag {
  width: 215px;
  margin: 5px auto 0;
  padding: 0 10px;
  text-align: left;
}

.prd_flag {
  margin-top: 10px;
  overflow: hidden;
}


.curation_area .slide_list .item .prd_flag > .icon_flag {
  float: none;
}

.icon_flag.sale {
  background-color: #f65c60;
}

.icon_flag.coupon {
  background-color: #9bce26;
}

.icon_flag.delivery {
  width: 60px;
  background-color: #f374b7;
}

.icon_flag {
  display: inline-block;
  width: 40px;
  height: 18px;
  border-radius: 9px;
  line-height: 17px !important;
  color: #fff !important;
  font-size: 12px !important;
  text-align: center;
  vertical-align: middle;
  text-decoration: none !important;
  margin: 0 !important;
}

.curation_area .two {
  height: auto;
  margin-top: 0;
  border-bottom: 0;
}

.curation_area {
  position: relative;
  height: 525px;
  margin-top: 49px;
}

.curation_area .two .curation_slide .type03 .btnRef {
  margin-top: 40px;
}

#Container .curation_area .two .btnRef .btn {
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btnRef .btn {
  width: 335px;
  height: 40px;
  background: 0 0;
}

.main_sub_tit {
  height: 40px;
  margin: 51px 0 8px;
  font-size: 26px;
  color: #000;
  text-align: center;
  line-height: 40px;
}

strong {
  margin: 0;
  padding: 0;
  border: 0;
}

.recomm_plan {
  margin: 0 auto 10px;
  width: 1020px;
}

.recomm_plan_list {
  font-size: 0;
}

.recomm_plan_list li:first-child {
  margin-left: 0;
}

.recomm_plan_list li {
  overflow: hidden;
  display: inline-block;
  width: 500px;
  height: 227px;
  border-radius: 8px;
  vertical-align: top;
  margin-left: 20px;
}

.recomm_plan_list li a {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
}

.recomm_plan_list li a img {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}

.recomm_plan_list li a .text_wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.recomm_plan_list li a .text_wrap dl {
  margin-left: 28px;
}

.recomm_plan_list li a .text_wrap dt {
  overflow: hidden;
  max-width: 222px;
  font-size: 21px;
  line-height: 1.35;
  letter-spacing: -.67px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.recomm_plan_list li a .text_wrap dd {
  overflow: hidden;
  margin-top: 15px;
  max-width: 215px;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.main_plan_banner .ty02 {
  position: relative;
}

.main_sub_tit {
  height: 40px;
  margin: 51px 0 8px;
  font-size: 26px;
  color: #000;
  text-align: center;
  line-height: 40px;
}

.main_plan_banner .ty02 .banner_wrap {
  position: relative;
  width: 1020px;
  height: auto;
  overflow: hidden;
}

.main_plan_banner .ty02 .banner_wrap .slick_slider {
  margin-left: -10px;
  width: 1040px;
}

.slick-slider {
  position: relative;
  display: block;
}

.slider_unit {
  position: relative;
  float: left;
  padding: 0 10px;
  width: 520px !important;
  height: 620px;
}

.plan_top {
  height: 300px;
}

.plan_banner {
  position: relative;
  overflow: hidden;
  width: 500px;
  height: 300px;
  background-size: 500px auto;
  background-position: 0 0;
  background-repeat: no-repeat;
}

.plan_banner > a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 259px;
  padding: 0;
}

.plan_banner > a > p {
  position: relative;
  top: inherit;
  left: inherit;
  margin-left: 28px;
  max-width: 360px;
  color: #000;
  text-align: left;
}

.plan_banner > a > p > strong.tit {
  overflow: hidden;
  max-width: 222px;
  height: inherit;
  margin-top: 0;
  font-size: 21px;
  line-height: 1.35;
  letter-spacing: -.67px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.plan_banner > a > p > strong {
  display: block;
  overflow: hidden;
  height: 30px;
  margin-top: -4px;
  font-size: 20px;
}

.plan_banner > a > p > span.desc {
  overflow: hidden;
  height: inherit;
  margin-top: 15px;
  max-width: 215px;
  font-size: 16px;
  line-height: 20px;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cate_prd_list {
  position: relative;
  margin: -41px auto 0 12px;
  padding: 15px 15px 0;
  width: 475px;
  font-size: 0;
  background-color: #fff;
  border-bottom: 0;
  z-index: 1;
}

.cate_prd_list > li:first-child {
  margin-left: 0;

}

.cate_prd_list > li {
  /* float:inherit; */
  padding: 0;
  display: inline-block;
  margin-left: 15px;
  width: 215px;
  vertical-align: top;
}

.cate_prd_list > li.prd_info {
  text-align: center;
  font-size: 14px;
}

.cate_prd_list > li.prd_info.prd_thumb {
  position: relative;
  display: block;
  width: 215px;
  height: 215px;
  background: #fff;
}

.prd_thumb .thumb_flag {
  position: absolute;
  top: 18px;
  left: 16px;
  line-height: 44px !important;
}

.best {
  color: #f05a5e;
  border-color: #f05a5e;
}

.thumb_flag {
  display: inline-block;
  width: 48px;
  height: 48px;
  font-size: 14px;
  background: #fff;
  border-radius: 24px;
  border-width: 2px;
  border-style: solid;
  text-align: center;
  font-weight: 700;
}

.prd_thumb > img {
  width: auto !important;
  max-width: 215px;
  height: auto !important;
  max-height: 215px;
}

.cate_prd_list .prd_info {
  text-align: center;
  font-size: 14px;
}

.prd_info .prd_name {
  margin-top: 15px;
  display: block;
  min-height: 62px;
  margin: 8px 0 0;
  text-decoration: none;
}

.prd_name > a {
  display: block;
}

.prd_name .tx_brand {
  display: block;
  height: 20px;
  line-height: 20px;
  color: #777;
  font-weight: 700;
}

.prd_name .tx_name {
  margin-top: 5px;
  overflow: hidden;
  height: 40px;
  padding: 2px 0;
  line-height: 18px;
  text-overflow: ellipsis;
  color: #000;
  font-size: 14px;
  text-align: center;
}

.prd_info .btn_zzim {
  position: absolute;
  top: 175px;
  left: auto;
  right: 0;
  width: 40px;
  height: 40px;
  border: 1px solid #ebebeb;
  font-size: 0;
  background: url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_zzim.png") 50% 50% no-repeat #fff;
}

.prd_price {
  height: 25px;
  line-height: 22px;
}

.tx_org {
  color: #777;
  font-size: 12px;
  text-decoration: line-through;
  vertical-align: middle;
  font-weight: 700;
}

.tx_org > span {
  display: inline-block;
  font-size: 14px;
  text-decoration: line-through;
  vertical-align: 0;
}

.tx_num {
  letter-spacing: -.02em !important;
  font-weight: 500;
}

.tx_cur {
  margin: 0 0 0 7px;
  vertical-align: bottom;
}

.prd_price .tx_cur {
  display: inline-block;
  color: #e02020;
  font-weight: 700;
}

.tx_cur > span {
  display: inline-block;
  font-size: 20px;
  vertical-align: -1px;
}

#Container .oy-magazine {
  margin-top: 80px;
}

#Container .oy-magazine h3 {
  text-align: center;
}

#Container .oy-magazine h3 strong {
  font-size: 26px;
  line-height: 31px;
  color: #131518;
}

#Container .oy-magazine ul {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 25px;
}

#Container .oy-magazine ul li a img {
  width: 240px;
  height: 288px;
  border-radius: 4px;
}

#Container .oy-magazine ul li a p:first-of-type {
  margin-top: 15px;
}

#Container .oy-magazine ul li a p {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #131518;
}

.main_onlyone_wrap {
  max-width: 1048px;
}

.main_onlyone_wrap h3 {
  text-align: center;
  margin-top: 65px;
  margin-bottom: 25px;
}

.main_onlyone_wrap h3 strong {
  font-weight: 700;
  font-size: 25px;
}

.main_onlyone_wrap img {
  width: 314px;
  height: 140px;
  border-radius: 10px;
}

.main_onlyone_wrap ul {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.main_onlyone_wrap ul li {
  position: relative;
}

.main_onlyone_wrap ul li:first-child .sub-tit1 {
  position: absolute;
  top: -36px;
  left: 10px;
}

.main_onlyone_wrap ul li:nth-child(2) .sub-tit1 {
  position: absolute;
  top: -36px;
  left: 10px;
}

.main_onlyone_wrap ul li:nth-child(3) .sub-tit1 {
  position: absolute;
  top: -36px;
  left: 10px;
}

.main_onlyone_wrap ul li:first-child .sub-tit2 {
  position: absolute;
  top: -10px;
  left: 10px;
}

.main_onlyone_wrap ul li:nth-child(2) .sub-tit2 {
  position: absolute;
  top: -10px;
  left: 10px;
}

.main_onlyone_wrap ul li:nth-child(3) .sub-tit2 {
  position: absolute;
  top: -10px;
  left: 10px;
}

.main_onlyone_wrap ul li:first-child p {
  position: absolute;
  top: 97px;
  left: 10px;
}

.main_onlyone_wrap ul li:nth-child(2) p {
  position: absolute;
  top: 97px;
  left: 10px;
}

.main_onlyone_wrap ul li:nth-child(3) p {
  position: absolute;
  top: 97px;
  left: 10px;
}

.main_recommendation_wrap {
  padding: 0 20px 50px;
  margin-top: 100px;
  text-align: center;
}

.main_recommendation_wrap .main_sub_tit {
  position: relative;
  display: inline-block;
  margin-top: 0;
}

.main_sub_tit {
  height: 40px;
  margin: 51px 0 8px;
  font-size: 26px;
  color: #000;
  text-align: center;
  line-height: 40px;
}

.ad {
  color: #757d86;
  background-color: #f0f1f4;
}

.tit-flag {
  position: absolute;
  top: 8px;
  margin-left: 12px;
  padding: 3px 7px;
  border-radius: 2px;
  font-size: 14px;
  line-height: 17px;
}

.main_recommendation_wrap > div {
  margin-top: 70px;
}

.cate_prd_list .no_line {
  border-bottom: 0;
}

.horizontal > li {
  margin-right: 40px;
  width: 450px;
  align-items: center;
  min-height: 175px;
  padding: 0 0 0 195px;
}

.horizontal > li .prd_info {
  flex: 1;
  text-align: left;
  font-size: 14px;
}

.prd_thumb {
//position: absolute; left: 0; top: 0;
  width: 175px;
  height: 175px;
  /* display:block; */
}

.prd_thumb img {
  max-width: 175px;
  max-height: 175px;
  width: auto !important;
  height: auto !important;
}

.prd_info .prd_name {
  margin-top: 0;
  display: block;
  min-height: 62px;
  margin: 8px 0 0;
  text-decoration: none;
}

.prd_info .prd_name > a {
  display: block;
}

.prd_name .tx_brand {
  display: block;
  height: 20px;
  line-height: 20px;
  color: #777;
  font-weight: 700;
}

.prd_name .tx_name {
  text-align: left;
  margin-top: 5px;
  overflow: hidden;
  height: 40px;
  padding: 2px 0;
  line-height: 18px;
  text-overflow: ellipsis;
  color: #000;
  font-size: 13px;
}

.prd_info .prd_price {
  height: auto;
  margin-top: 4px;
  line-height: normal;
}

.attention_brand > li {
  margin-right: 8px;
  flex-shrink: 0;
  width: auto;
  position: relative;
  height: 100%;
  margin-top: 30px;
}

.attention_brand > li > a {
  border: 1px solid #dadde0;
  border-radius: 20px;
  padding: 8px 15px;
  color: #757d86;
  background: #fff;
  font-size: 14px;
}

.attention_brand > li:nth-child(1) > a {
  border: 1px solid #dadde0;
  border-radius: 20px;
  padding: 8px 15px;
  color: #fff;
  background: #000;
  font-size: 14px;
}

.attention_product {
  display: flex;
}

.attention_product div {
  margin-top: 45px;
  width: 1020px;
  background-image: url('https://image.oliveyoung.co.kr/uploads/images/display/90000010001/380/2817562983546810098.jpg');
}

.realtime-view-rank {
  display: relative;
  border-bottom: 1px solid #d8d8d8;
  margin-bottom: 100px;
  margin-bottom: 31px;
}

.realtime-view-rank > h3 {
  font-size: 32px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.realtime-view-ul {
  display: flex;
}

.realtime-img {
  flex-grow: 1;
}

.realtime-img img {
  width: 175px;
  max-width: 175px;
  max-height: 175px;
  margin-right: 20px;
  float: left;
}

.realtime-img h3 {
  text-align: left;
  color: #777;
  height: 47px;
  line-height: 46px;
}

.realtime-img span {

}

.ranking {
  color: #777
}

.realtime-view-ul {
  display: flex;
  flex-direction: column;
}

.realtime-ul li {
  flex-grow: 1;
}

.ranking-li {
  padding: 8px;
  text-align: left;
}

.ranking-active {
  border: 1px solid black;
  border-radius: 5px;
  font-size: 18px;
}

.ranking-active {
  color: #333;
  font-weight: 700;
}

.notice-area {
  margin-top: 97px;
  position: relative;
  border-top: 1px solid black;
  width: 100%;
  height: 246px;
}

.notice-tit {
  width: 600px;
  position: relative;
  border-bottom: 1px solid #d8d8d8;
  height: 60px;
}

.notice-tit h4 {
  float: left;
  text-align: left;
  width: 130px;
  padding-top: 0.9rem;
  font-size: 20px;
}

.notice-tit p {
  float: left;
  width: 156px;
  line-height: 3.5rem;
  color: #a8a8a8
}

.notice-tit a {
  background: url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_arrow7x11_2.png") 100% 50% no-repeat;
  position: absolute;
  right: 0;
  color: #888;
  line-height: 3.5rem;
  padding-right: 15px;
}

.notice-sub {
  float: left;
  width: 299px;
}

.notice-sub strong {
  float: left;
  width: 82px;
  font-size: 20px;
  line-height: 2rem;
  padding-top: 1rem;
}

.sub-ul {
  float: left;
  width: 140px;
  margin-left: 32px;
  margin-top: 20px;
}

.sub-ul li {
  text-align: left;
  padding: 5px;
}

.notice-onebyone {
  float: left;
  width: 300px;
  font-size: 12px;
}

.notice-onebyone div {
  margin-top: 20px;
  margin-bottom: 15px;
}

.notice-onebyone div p:nth-child(1) {
  font-weight: 700;
  margin-bottom: 10px;
}

.notice-onebyone div p {
  text-align: left;
}

.obo-btn:nth-child(2) {
  width: 145px;
}

.obo-btn {
  background: #ccc;
  width: 120px;
  height: 60px;
  text-indent: 0 !important;
}

.obo-btn span {
  display: inline-block;
  width: 22px;
  height: 22px;
  background: url("https://static.oliveyoung.co.kr/pc-static-root/image/main/ico_customer.png") no-repeat;
}

.fre {
  background: url("https://static.oliveyoung.co.kr/pc-static-root/image/main/ico_customer.png") no-repeat !important;
  background-position: 0 -27px;
}

.qr-link {
  position: absolute;
  top: 0;
  right: 0;
}
.contents-wrapper {
  width:1020px;
  height:100%;
  margin:0 auto;
}
.tit-box {
  height:140px;
}
.tit-box:before {
  content:"";
  position:absolute;
  width:100%;
  height: 140px;
  left:0;
  z-index: -1;
  background: url("https://image.oliveyoung.co.kr/uploads/contents/main/top/bg_order_top.png") 50% 0 no-repeat #ffeeda;
}
.tit-box-h1-span {
  width: 36px;
  height: 36px;
  color: #fff;
  display: inline-block;
  background: #ff2828;
  border-radius: 18px;
  font-weight: 400;
  text-align: center;
  font-size: 22px;
  vertical-align: 8px;
}
.tit-box-h1 {
  float:left;
  margin-top:25px;
  font-size: 35px;
}
.tit-box-ul {
  float: right;
  margin-right: -19px;
  margin-top: 41px;
}
.incart-num1:before {
  content:"0";
  color:#333;
  font-size:20px;
}
.tit-box:after {
  content:"";
  position: absolute;
  background: url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/bg_line.gif") 50% 10px no-repeat #fff;
  width:1020px;
  height: 20px;
  display: block;
  margin: 110px 0 0;
}
.incart-num1 {
  letter-spacing: -0.2rem;
  font-size:20px;
  margin-right: 10px;
}
.tit-box-ul>li:not(:nth-child(3)) {
  background:url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/bg_step_on.png") 100% 50% no-repeat;
}
.tit-box-ul>li {
  float: left;
  font-size: 24px;
  color:#8b8176;
  padding: 0 12px 0 10px;
  text-align: center;
  margin-left: 8px;
}
.on {
  color:#000 !important;
  font-weight: 600;
}

.tit-box-li-incart {
  padding: 0px 30px 0 20px;
  --background:url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/bg_step_on.png") 100% 50% no-repeat;
}

.membership-box-wrapper {
  height: 103px;
  border-bottom: 1px solid #e6e6e6;
}
.membership-grade-info {
  width: 338px;
  float: left;
  padding: 8px 10px 0 12px;
  color: #000;
  font-size: 20px;
}
.grade {
  color:#cfd31a;
  font-weight: 500;
}
.membership-info-list{
  margin-left: 82px;
  float: left;
}
.membership-info-list>li {
  height:68px;
  text-align: center;
  float:left;
  width:170px;
}
.membership-info-list>li+li {
  padding:10px 0 0;
  border-left: 1px solid #e6e6e6;
  color:#333;
}
.grade-benefit>span {
  width: 100%;
  background: url(https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_arrow6x11.png) 100% 4px no-repeat;
  display: inline-block;
  padding: 1px 10px 0 0;
  text-align: center;
}
.grade-benefit {
  background: url(https://static.oliveyoung.co.kr/pc-static-root/image/mypage/icon_rating_baby_on.svg) center 0 no-repeat;
  color: #333;
  font-size: 12px;
  padding: 45px 0 0 0;
  display: inline-block;
}
.cj-point {
  width: 137px;
  display: inline-block;
}
.discount-coupon {
  display: inline-block;
  width: 70px;
}

.deposit {
  width: 51px;
  display: inline-block;
}
a {
  color:#000;
}
.delivery-btns {
  width: 1020px;
  height: 25px;
  float: left;
  margin-top: 90px;
}
.delivery-btns>li {
  float:left;
  width:50%;
  text-align: center;
  position: relative;
}
.normal:before {
  background: url(https://static.oliveyoung.co.kr/pc-static-root/image/comm/bg_tab_arrow.png) no-repeat;
  width: 12px;
  height: 5px;
  content: "";
  left: 240px;
  position: absolute;
  top: 50px;
}
.normal>button {
  color:#fff!important;
  background: #555!important;
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: 400;
}
.today-dream>button {
  color:#666!important;
  background: #f6f6f6!important;
  width: 100%;
  height: 50px;
  font-size: 18px;
  border:none;
  font-weight: 400;
}
.cart-sub-title {
  float: left;
  width: 1020px;
  color: #333;
  height: 40px;
  font-size: 20px;
  font-weight: 400;
  margin-top: 80px;
}
.order-table {
  table-layout:fixed;
  border-spacing: 0;
}
.order-table>th>input[type=checkbox] {
  background:url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/icon_chk_radio.png") 0 -20px no-repeat;
  width: 12px;
  height: 12px;
  margin:0 auto;
}
.order-table-th {
  height: 40px;
  border-top: 2px solid #d6d6d6;
  border-bottom:1px solid #ccc;
  background:#fafafa;
}
.order-table-tbody-td-tablerow {
  display: table-row;
}
.tbl_cell {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.w40 {
  width:40px;
  text-align: center;
}
.w390 {
  width: 390px;
}
.w110 {
  width: 110px;
}
.w100 {
  width: 100px;
}
.w120 {
  width: 120px;
}
.w150 {
  width: 150px;
}
.tbl_cell {
  border-left:1px solid #e6e6e6;
}
.tbl_cell:nth-child(1) {
  border-left:none!important;
}
.tbl_cell:nth-child(2) {
  border-left:none!important;
}
.tbl_cell_input1 {
  background:url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/icon_chk_radio.png") 0 -20px no-repeat;
  width: 12px;
  height: 12px;
  margin:0 auto;
  vertical-align: middle;
}
.tbl-cell-prd-info {
  display: table-cell;
  position: relative;
  height: 145px;
  padding: 30px 30px 30px 125px;
  border-left:0;
  text-align: left;
  vertical-align: middle;
}
.tbl-cell-prd-info>a:nth-child(1) {
  position: absolute;
  top:50%;
  left: 0;
  width: 125px;
  height: 85px;
  margin-top: -42px;
  text-align: center;
}
.tbl-cell-prd-info>a>img {
  width: auto!important;
  max-width: 85px;
  height: auto!important;
  max-height: 85px;
  border:0;
  color:#666;
}
.tbl-cell-prd-name {
  display: inline-block;
  margin-bottom: 5px;
}
.brand-name {
  display:block;
  margin-bottom:4px;
  color:#777;
  font-weight: 700;
}
.goods-nm {
  max-height: 36px;
  color:#000;
  line-height: 18px;
  font-size: 14px;
  overflow:hidden;
  margin-bottom:6px;
}
.prd-option {
  margin-bottom:8px;
  color:#888;
  font-size:12px;
  font-weight: 700;
}
.prd-option-tit {
  font-style: normal;
}
.prd-option-tit:after{
  content:"";
  display: inline-block;
  margin: 0 5px 1px;
  width: 1px;
  height: 11px;
  background-color: #aaa;
  vertical-align: middle;
}
.prd-option>span {
  padding-right:10px;
}
.prd-option-change {
  background: 0 0;
  color:#9bce26;
  font-size: 12px;
  border:none;
  border-bottom: 1px solid #9bce26;
}
.prd-flags {
  overflow:hidden;
}
.icon-flag {
  display: inline-block;
  width: 40px;
  height: 18px;
  border-radius: 9px;
  line-height: 17px!important;
  color: #fff!important;
  font-size: 12px!important;
  text-align: center;
  vertical-align: middle;
  text-decoration: none!important;
  margin: 0!important;
}
.flag-sale{
  background-color:#f65c60;
  float:left;
}
.flag-delivery{
  float:left;
  width: 60px;
  background-color: #f374b7;
}
.prd-count {
  width:60px;
  margin:0 auto;
}
.org-price {
  display: block;
  font-size: 12px;
  color: #b5b5b5;
  text-decoration: line-through;
}
.pur-price {
  display: block;
  color: #e02020;
  font-weight: 500;
}
.order-table-tbody-td {
  border-bottom: 1px solid #e6e6e6;
}
.prd-delivery {
  color: #666;
  font-size: 12px;
}
.prd-delivery-strong {
  font-size: 14px;
  display: block;
}
.prd-delivery-strong-span{
  display: block;
  font-size: 12px;
  font-weight: 400;
}
.btn-group>button{
  display: block;
  margin:6px auto 0 auto;
  width: 109px;
  background:#fff;
  border:1px solid #9bce26;
  border-radius: 5px;
  font-size: 12px;
  height: 28px;
}
.btn-group>button:nth-child(1) {
  color:#9bce26;
}

.btn-group>button:nth-child(2) {
  background:url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_btn_zzim.png") 30px 8px no-repeat;
  padding-left:24px;
}
.btn-group>button:nth-child(3) {
  background:url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_btn_del.png") 35px 8px no-repeat;
  padding-left:20px;
}
.delete-btns-left {
  float:left;
  margin-top:20px;
}
.select-prd-delete {
  border:1px solid #aaa;
  color:#666;
  background:#fff;
  font-size:12px!important;
  height: 28px;
  border-radius:5px;
  font-weight: 700;
}
.select-soldout-delete {
  border:1px solid #aaa;
  margin-left: 5px;
  color:#666;
  background:#fff;
  font-size:12px!important;
  height: 28px;
  border-radius:5px;
  font-weight: 700;
}
.pay-price-right {
  float:right;
  margin-top:20px;
  width: 700px;
  text-align: right;
  color: #666;
  font-weight: 700;
}

.total-money-price {
  color:#f27370;
  font-size:14px;
}
.prd-count>select {
  width: 60px;
  height: 28px;
  padding: 0 0 0 10px;
  border: 1px solid #ccc;
  font-size: 12px;
  border-radius:5px;
}
.total-price-info-cart {
  float:left;
  width: 100%;
  margin-top:60px;
  border-top: 2px solid #9bce26;
  border-bottom: 1px solid #e6e6e6;
}
.total-price-detail-cart {
  height: 110px;
  position:relative;
  width: 100%;
  font-weight: 700;
  overflow:hidden;
}
.total-price-detail-cart>p:nth-child(1) {
  float:left;
  width: 340px;
  height: 110px;
  padding-top:30px;
  text-align: center;
  font-size: 16px;
  color:#666;
  border-right: 1px solid #efefef;
  border-left: 1px solid #efefef;
}
.total-price-detail-cart>p>span {
  display: block;
}
.total-price-detail-money {
  font-size: 24px;
  margin-right: 2px;
  font-weight: 500;
}
.minus-sign-cart {
  position: absolute;
  left: 324px;
  top: 40px;
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url(https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_sign_cal2.png) no-repeat;;
  text-indent: -9999px;
}
.plus-sign-cart {
  position: absolute;
  background:url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_sign_cal2.png") no-repeat;
  top: 40px;
  right: 325px;
  width: 30px;
  height: 30px;
  display:inline-block;
  text-indent: -9999px;
  background-position: -30px 0;
}
.total-discount-area-cart {
  width: 340px;
  height: 110px;
  float:left;
  text-align: center;
  padding-top: 30px;
  color: #666;
  border-right: 1px solid #efefef;
}
.total-discount-detail-money {
  display: block;
  color:#f27370;
  font-weight: 500;
}
.emphasize-money {
  font-size: 24px;
  margin-right: 2px;
  font-weight: 500;
}
.total-delivery-money {
  width: 340px;
  height: 110px;
  float:left;
  text-align: center;
  padding-top:30px;
  color:#666;
}
.delivery-money-price {

}
.emphasize-delivery-money {
  font-size:24px;
}
.sum-price-summary-area {
  color:#333;
  width: 100%;
  height: 80px;
  text-align: right;
  background:#f6f6f6;
  border-top:2px solid #d6d6d6;
  font-size:22px;
  float:left;
  font-weight: 700;
  position: relative;
}
.summary-left-text:before {
  background:url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_arrow_01.gif") no-repeat;
  content:"";
  width: 22px;
  height: 22px;
  vertical-align: -4px;
  display: inline-block;
}
.summary-left-text {
  position:absolute;
  left:41px;
  top:26px;
  font-size:14px!important;
  color:#888;
}
.summary-right-price {
  position: absolute;
  top: 23px;
  right: 30px;
}
.summary-right-price>span{
  color:#ff2828;
}
.order-group-btns-cart {
  float:left;
  width:100%;
  height:50px;
  text-align: center;
  padding-top:40px;
  margin-bottom: 90px;
}
.order-group-btns-cart>button:nth-child(1) {
  margin-left: 10px;
  width: 180px;
  height: 50px;
  background-color: #fff;
  padding: 11px 0 9px;
  font-size: 18px;
  line-height: 30px;
  border-radius: 5px;
  color:#f27370;
  border: 1px solid #f27370;
  font-weight: 700;
}
.order-group-btns-cart>button:nth-child(2) {
  margin-left: 10px;
  width: 180px;
  height: 50px;
  background-color: #f27370;
  padding: 11px 0 9px;
  font-size: 18px;
  line-height: 30px;
  border-radius: 5px;
  color:#fff;
  border:none;
}
.cart-imgs-list-li-img {
  width: 100px;
  height: 100px;
}
.basket-group-cart {
  float:left;
  width: 100%;
}
.see-more-cart {
  float:right;
  padding-right: 10px;
  background: url(https://static.oliveyoung.co.kr/pc-static-root/image/curation/ico_more_5x10.png) top 3.5px right 0/5px auto no-repeat;
//position: absolute;
//bottom: 1px;
//right: 17px;
  font-size: 15px;
  font-weight: 500;
  color: #aaa;
  border:none;
  line-height: 17px;
}
.basket-tit {
  height: 20px;
  margin-bottom: 40px;
}
.cart-imgs-list-ul>li {
  width: 324px;
}
.cart-imgs-list-li-left {
  float:left;
}
.imgs-list-li-dl{
  margin-left:12px;
  position: relative;
}
.cart-imgs-list-li-right {
  width: 240px;
  margin-left: 100px;
}
.cart-imgs-list-li-right-tit {
  font-size: 12px;
  margin-top:4px;
  color:#000;
}
.cart-imgs-list-li-right-price {
  margin-top:10px;
  font-size: 12px;
}
.cart-imgs-list-li-right-price>del {
  color:#b5b5b5;
  font-size: 12px;
}
.cart-imgs-list-li-right-price>strong{
  color:#e02020;
  margin-left:5px;
}
.cart-imgs-list-li-right-icon {
  margin-top:10px;
  margin-top: 10px;
  position: absolute;
  top: 61px;
  left: 0;
  width: 180px;
}
.cart-imgs-icon {
  width: 40px;
  height: 18px;
  color:#fff;
  font-size: 12px;
  border-radius: 9px;
  display: inline-block;
  text-align: center;
}
._sale {
  background-color:#f65c60;
}
._coupon {
  background-color:#9bce26;
}
._gift {
  background-color: #6fcff7;
}
._today {
  width: 60px!important;
  background-color: #f374b7;
}
.cart-imgs-list-li-right {
  display: block;
  width: 190px;
}
.cart-imgs-list-ul>li {
  float:left;
}
.basket-group-cart-imgs-list {
  height: 190px;
}
.cart-comment-tit {
  font-size: 12px;
  margin-top: 10px;
  color: #888;
  font-weight: 700;
  border-top:1px solid #ccc;
  padding-top:40px;
}
.cart-comment-tit>p {
  text-align: center;
}
</style>