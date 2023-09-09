<template>
  <div class="wrap">
    <div class="Container">
      <div class="product_header">
        <span class="product_header_tit">상품등록</span>
      </div>
      <div class="product_header01">
        <span class="product_header_tit01">상품정보</span>
      </div>
      <table>
        <tbody>
        <tr>
          <td class="product_tit">제품본이름</td>
          <td class="product_txt"><input type="text" id="product_orgin_name" class="product_orgin_name" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">제품판매명</td>
          <td class="product_txt"><input type="text" id="product_sell_name" class="product_sell_name" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">제품원가</td>
          <td class="product_txt"><input type="text" id="product_orgin_price" class="product_orgin_price" autocomplete="off"><span class="product_txt_span">원</span></td>
        </tr>
        <tr>
          <td class="product_tit">제품판매가격</td>
          <td class="product_txt"><input type="text" id="product_sell_price" class="product_sell_price" autocomplete="off"><span class="product_txt_span">원</span></td>
        </tr>
        <tr>
          <td class="product_tit_img">제품이미지</td>
          <td class="product_txt_img"><p class="img_box"></p><input type="file" id="product_img" class="product_img"></td>
        </tr>
        </tbody>
      </table>
      <div class="product_header02">
        <span class="product_header_tit02">구매정보</span>
      </div>
      <table>
        <tbody>
        <tr>
          <td class="product_tit">제품대분류</td>
          <td class="product_txt"><input type="text" id="product_major_category" class="product_major_category" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">제품중분류</td>
          <td class="product_txt"><input type="text" id="product_middle_category" class="product_middle_category" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">제품소분류</td>
          <td class="product_txt"><input type="text" id="product_small_category" class="product_small_category" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">제품회사</td>
          <td class="product_txt"><input type="text" id="product_corp" class="product_corp" autocomplete="off"><span class="product_txt_ex">ex) 씨제이올리브영 주식회사</span></td>
        </tr>
        <tr>
          <td class="product_tit">제품개수</td>
          <td class="product_txt"><input type="text" id="product_cnt" class="product_cnt" autocomplete="off"><span class="product_txt_span">개</span></td>
        </tr>
        <tr>
          <td class="product_tit">제품용량</td>
          <td class="product_txt"><input type="text" id="product_amount" class="product_amount" autocomplete="off"><span class="product_txt_ex">단위 입력바랍니다. ex) ml, 매, g 등</span></td>
        </tr>
        <tr>
          <td class="product_tit">제품주요사양</td>
          <td class="product_txt"><input type="text" id="product_func" class="product_func" autocomplete="off"><span class="product_txt_ex">ex) 모든피부용, 건성, 지성 등</span></td>
        </tr>
        <tr>
          <td class="product_tit">제품사용기한(또는 개봉 후 사용기간)</td>
          <td class="product_txt"><input type="text" id="product_limit" class="product_limit" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">제품사용방법</td>
          <td class="product_txt"><input type="text" id="product_way" class="product_way" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">제품제조업자</td>
          <td class="product_txt"><input type="text" id="product_manufacturer" class="product_manufacturer" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">제품판매업자</td>
          <td class="product_txt"><input type="text" id="product_seller" class="product_seller" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">제품제조국</td>
          <td class="product_txt"><input type="text" id="product_produce_country" class="product_produce_country" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">화장품법에 따라 기재해야 하는 모든 성분</td>
          <td class="product_txt"><textarea id="product_ingredient" class="product_ingredient"></textarea></td>
        </tr>
        <tr>
          <td class="product_tit">기능성 화장품 식품의약품안전처 심사필 여부</td>
          <td class="product_txt"><input type="text" id="product_evaluate" class="product_evaluate" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">사용할 때의 주의사항</td>
          <td class="product_txt"><textarea id="product_attention" class="product_attention" autocomplete="off"></textarea></td>
        </tr>
        <tr>
          <td class="product_tit">품질보증기준</td>
          <td class="product_txt"><input type="text" id="quality_standard" class="quality_standard" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">소비자상담 전화번호</td>
          <td class="product_txt"><input type="text" id="consultaion" class="consultaion" autocomplete="off"></td>
        </tr>

        </tbody>
      </table>
    </div>
    <div class="product_button">
      <button class="back btn" @click="backPage">뒤로가기</button>
      <button class="productInsert btn" @click="productInsert">제품등록</button>
    </div>
  </div>
</template>
<script>
export default {

  methods: {
    backPage() {
      this.$backPage();
    },
    productInsert() {
      alert("제품등록");
    },
  }
}

</script>
<style>
body {
  margin: 0;
  padding: 0;
  border: 0;
}
tr {
  margin: 0;
  padding: 0;
}
table {
  width: 100%;
  border: 1px solid #949494;
  border-collapse : collapse;
  border-spacing : 0;
}
input {
  background-color: rgba(255, 255, 255, 0.99);
  border: 1px solid rgba(150, 148, 148, 0.67);
  outline: none;
  width: 180px;
  height: 20px;
  padding: 2px 10px;
}
.wrap {
  width: 1280px;
  min-width: 1280px;
  margin-bottom: 50px;
}
.Container {
  padding: 30px;
}
.product_header {
  height: 45px;
  line-height: 45px;
  padding-left: 10px;
  margin-bottom: 50px;
  border: 0;
  border-bottom: 3px solid #9bce26;

}
.product_header_tit {
  color: #000000;
  font-size: 23px;
  font-weight: bold;
}
.product_tit {
  background-color: #9bce26;
  width: 15%;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom: 1px solid rgba(176, 174, 174, 0.67);
}
.product_header01 {
  background-color: #5f7e16;
  height: 45px;
  line-height: 45px;
  padding-left: 10px;
  margin-bottom: 20px;
  border: 0;
}
.product_header_tit01 {
  color: #f3f0f0;
  font-size: 18px;
  font-weight: bold;
}
.product_txt {
  width: 85%;
  background-color: #ffffff;
  padding-left: 20px;
  border-bottom: 1px solid rgba(176, 174, 174, 0.67);
}
.product_txt_span {
  font-size: 13px;
  margin-left: 5px;
  font-weight: bold;
}
.product_tit_img {
  background-color: #9bce26;
  width: 15%;
  font-size: 14px;
  font-weight: bold;
  padding-left: 15px;
  border-bottom: 1px solid rgba(197, 195, 195, 0.67);
  height: 200px;
}
.img_box {
  box-sizing: border-box;
  border: 1px solid rgba(197, 195, 195, 0.67);
  width: 250px;
  height: 250px;
  margin-left: 20px;
  display: inline-block;
  float: left;
}
.product_img {
  margin-left: 20px;
  margin-top: 130px;
  border: 0;
  height: 23px;
}
.product_header02 {
  background-color: #5f7e16;
  height: 45px;
  line-height: 45px;
  padding-left: 10px;
  margin-bottom: 20px;
  border: 0;
  margin-top: 50px;
}
.product_header_tit02 {
  color: #f3f0f0;
  font-size: 18px;
  font-weight: bold;
}
.product_txt_ex {
  font-size: 12px;
  margin-left: 7px;
}
.product_ingredient {
  resize: none;
  width: 90%;
  height: 100px;
  padding: 10px 11px;
  outline: none;
  margin: 5px 5px 5px 0;
  border: 1px solid rgba(150, 148, 148, 0.67);
}
.product_attention {
  resize: none;
  width: 90%;
  height: 100px;
  padding: 10px 11px;
  outline: none;
  margin: 5px 5px 5px 0;
  border: 1px solid rgba(150, 148, 148, 0.67);
}
.product_button {
  margin: 0 auto;
  text-align: center;
}
.btn {
  width: 180px;
  height: 50px;
  border-radius: 80px;
  border: 0;
  background-color: #9bce26;
  color: white;
  font-size: 16px;
  margin: 0 20px;
}

</style>