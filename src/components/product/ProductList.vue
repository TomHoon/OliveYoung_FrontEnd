<template>
  <div class="wrap">
    <div class="container">
      <div class="list_wrap">
        <span class="list_main_title">상품리스트</span>

        <div class="list_title">
          <input type="checkbox">
          <span>No</span>
          <span>제품명</span>
          <span>가격</span>
          <span>등록일</span>
        </div>
        <div>
          <div class="list_content" v-for="(item,product_idx) in productList" :key="product_idx">
            <input type="checkbox">
            <span>{{item.product_idx}}</span>
            <span>{{item.product_sell_name.slice(0,25)+"..."}}</span>
            <span>{{item.product_sell_price}}</span>
            <span>{{item.product_reg_date}}</span>
          </div>
          <!--          <div class="list_content">
                      <input type="checkbox">
                      <span>2</span>
                      <span>제목2</span>
                      <span>내용2</span>
                      <span>등록일2</span>
                    </div>-->
        </div>

        <div>
          <button type="button" class="ProductInsert" @click="ProductInsert">상품등록</button>
          <button type="button" class="mainPage" @click="mainPage">메인페이지</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import basicMixin from "@/mixin/basicMixin.js";

export default {
  mixins: [basicMixin],
  data() {
    return {
      productList: [],
    };
    },
       /* fetch('/productAll')
            .then((response) => response.json())
            .then((data) => {
              this.productAll = data;
            })*/
    mounted() {
      axios.post('/productList')
          .then((res) => {
            this.productList = res.data;
            console.log("res", res);
    });
    },
  methods: {
    ProductInsert() {
      this.$router.push('/productInsert');
    },
    mainPage() {
      this.$router.push('/');
    },
  },
}
</script>

<style scoped>
a, button {
  cursor: pointer;
}

.wrap {
  margin-top: 50px;
}

.list_wrap {
  margin: 0 auto;
  width: 1000px;
}

.list_main_title {
  font-size: 25px;
  margin-left: 10px;
  font-weight: 500;
}

.list_title {
  border-top: 2px solid rgba(45, 43, 43, 0.74);
  border-bottom: 1px solid rgba(185, 179, 179, 0.74);
  height: 50px;
  width: 100%;
  line-height: 50px;
  margin-top: 10px;
}

.list_title span:nth-child(2) {
  display: inline-block;
  width: 120px;
  text-align: center;
}

.list_title span:nth-child(3) {
  display: inline-block;
  width: 400px;
  text-align: center;
}

.list_title span:nth-child(4) {
  display: inline-block;
  width: 220px;
  text-align: center;
}

.list_title span:nth-child(5) {
  display: inline-block;
  width: 220px;
  text-align: center;
}

.list_content {
  border-bottom: 1px solid rgba(185, 179, 179, 0.74);
  height: 50px;
  line-height: 50px;
}

.list_content span:nth-child(2) {
  display: inline-block;
  width: 120px;
  text-align: center;
}

.list_content span:nth-child(3) {
  display: inline-block;
  width: 400px;
  text-align: center;
}

.list_content span:nth-child(4) {
  display: inline-block;
  width: 220px;
  text-align: center;
}

.list_content span:nth-child(5) {
  display: inline-block;
  width: 220px;
  text-align: center;
}

.mainPage {
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: none;
  background-color: #9bce26;
  float: right;
  margin: 30px 15px 0 0;

}

.ProductInsert {
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: none;
  background-color: #9bce26;
  float: right;
  margin-top: 30px;

}
</style>