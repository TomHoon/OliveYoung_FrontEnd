<template>
  <div class="Header">
    <div class="top_util">
      <ul class="menu_list">
        <li @click="goTestStack">TestStack</li>
        <li v-if="!isLogin"  class="join" @click="goJoin">회원가입</li>
        <li v-if="!isLogin" class="login" @click="loginAndOut(1)">로그인</li>
        <li v-if="isLogin" class="login" @click="loginAndOut(0)">로그아웃</li>
        <li v-if="isLogin" class="mypage" @click="myPage">마이페이지</li>
        <li class="cart" @click="goCart()">장바구니</li>
        <li class="order">주문배송</li>
        <li class="customer">고객센터</li>
        <li class="store">매장안내</li>
        <li class="ProductInsert" @click="productInsert">상품등록</li>
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
</template>

<script>
import basicMixin from '@/mixin/basicMixin';

export default {
  mixins: [basicMixin],
  data() {
    return {
      isLogin: false,
    };
  },

  mounted() {
    if (localStorage.getItem('loginObj')) {
      this.isLogin = true;
      return;
    }
    this.isLogin = false;
  },

  methods: {
    myPage() {
      this.$router.push('/mypage');
    },
    goCart() {
      if (localStorage.getItem('loginObj')) {
        this.$router.push('/cart');
      } else {
        this.toastMsg("로그인 후 이용이 가능합니다.")
        return false;
      }
    },
    goJoin() {
      this.$router.push('/join');
    },
    productInsert() {
      this.$router.push('/productInsert');
    },
    goTestStack() { // Stack Test Code
      this.$pushContents('TestStack');
      // this.$pushContents('TestStack', {data: payload});
    },
    loginAndOut(flag) {
      if (flag == 1) {
        this.$router.push('/login');
        return;
      }
      localStorage.removeItem('loginObj');
      this.$router.go(0);
    }
  },
};
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

.Header {
  width: 1020px;
  margin: 0 auto;
}

.top_util {
  width: 100%;
  height: 40px;
  position: relative;
}

.menu_list {
  position: absolute;
  right: 0px;
  bottom: 0px;
}

.menu_list li {
  list-style: none;
  float: left;
  padding: 0 9px 0 10px;
}

.menu_list li + li {
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
.header_inner h1 {
  margin-top: 21px;
  float: left;
}

.header_inner h1 a img {
  width: 248px;
  height: 42px;
}

.header_inner .search_box {
  float: left;
  position: relative;
  width: 340px;
  height: 40px;
  padding: 0 45px 0 20px;
  margin: 22px 0 0 90px;
  border: 2px solid #9bce26;
  border-radius: 20px;
  background: #fff;
}

.header_inner .search_box #searchSubmit {
  position: absolute;
  top: 7px;
  right: 18px;
  width: 21px;
  height: 21px;
  background: url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_search21x212.png") 50% 50% no-repeat;
  text-indent: -9999px;
}

.header_inner .search_box input[type=text] {
  background-color: transparent;
  border: 0;
  height: 40px;
}

button {
  border: 0;
  text-align: center;
  color: #fff;
  text-indent: 100px;
}

.header_inner .mymenu-area {
  float: right;
  margin-top: 10px;
}

.header_inner .mymenu-area ul {
  padding: 0px;
  width: 120px;
  height: 65px;
}

.header_inner .mymenu-area > li {
  list-style: none;
  /* padding-top: px; */
  float: left;
}

.header_inner .mymenu-area .delivery a {
  text-decoration: none;
  padding: 4px 27px 3px 0;
  color: black;
  background: url("https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_delivery_flag.png") right 2px/22px 20px no-repeat;
}

</style>