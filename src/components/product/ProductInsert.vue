<template>
  <div class="wrap">
    <div class="Container">
      <div class="product_header">
        <span class="product_header_tit">상품등록</span>
      </div>
      <div class="product_header01">
        <span class="product_header_tit01">상품정보</span>
      </div>
        <button @click="reset">Reset</button>
      <table>
        <tbody>
        <tr>
          <td class="product_tit">제품본이름</td>
          <td class="product_txt"><input type="text" id="product_orgin_name" class="product_orgin_name" v-model="test.product_orgin_name" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">제품브랜드이름</td>
          <td class="product_txt"><input type="text" id="product_brand_name" class="product_brand_name" v-model="test.product_brand_name" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">제품판매명</td>
          <td class="product_txt"><input type="text" id="product_sell_name" class="product_sell_name" v-model="test.product_sell_name" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">제품원가</td>
          <td class="product_txt"><input type="text" id="product_orgin_price" class="product_orgin_price" v-model="test.product_orgin_price" autocomplete="off"><span class="product_txt_span">원</span></td>
        </tr>
        <tr>
          <td class="product_tit">제품판매가격</td>
          <td class="product_txt"><input type="text" id="product_sell_price" class="product_sell_price" v-model="test.product_sell_price" autocomplete="off"><span class="product_txt_span">원</span></td>
        </tr>
        <tr>
          <td class="product_tit_img">제품이미지</td>

          <td class="product_txt_img"><p class="img_box"><!--<img :src="getImgPath" class="img_box" alt='프로필' />--></p><input type="file" id="product_img" class="product_img"></td>
        </tr>
        <tr>
          <td class="product_tit">미리보기이미지</td>
          <td class="product_txt"><input type="text" v-model="test.product_prev_img" id="product_prev_img"></td>
        </tr>
        <tr>
          <td class="product_tit">상세메인사진</td>
          <td class="product_txt"><input type="text" v-model="test.product_main_img" id="product_main_img"></td>
        </tr>
        <tr>
          <td class="product_tit">상세메인서브사진</td>
          <td class="product_txt"><input type="text" v-model="test.product_sub_img" id="product_sub_img"></td>
        </tr>
        <tr>
          <td class="product_tit">상품설명사진1</td>
          <td class="product_txt"><input type="text" v-model="test.product_desc1_img" id="product_desc1_img"></td>
        </tr>
        <tr>
          <td class="product_tit">상품설명사진2</td>
          <td class="product_txt"><input type="text" v-model="test.product_desc2_img" id="product_desc2_img"></td>
        </tr>
        <tr>
          <td class="product_tit">상품설명사진3</td>
          <td class="product_txt"><input type="text"  v-model="test.product_desc3_img" id="product_desc3_img"></td>
        </tr>
        <tr>
          <td class="product_tit">추천상품1 - PK</td>
          <td class="product_txt"><input type="text" id="product_recommend1_pk"></td>
        </tr>
        <tr>
          <td class="product_tit">추천상품2 - PK</td>
          <td class="product_txt"><input type="text" id="product_recommend2_pk"></td>
        </tr>
        <tr>
          <td class="product_tit">추천상품3 - PK</td>
          <td class="product_txt"><input type="text" id="product_recommend3_pk"></td>
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
          <td class="product_txt">
            <select id="product_major_category" class="product_major_category" v-model="product_major_category" @change="selectMajorCategory(this)" >
              <option v-for="product_major_category in majorCategoryList" :key="product_major_category.major" :value="product_major_category.value">{{product_major_category.major}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="product_tit">제품중분류</td>
          <td class="product_txt">
            <select id="product_middle_category" class="product_middle_category" v-model="product_middle_category" @change="selectMiddleCategory(this)">
              <option v-for="product_middle_category in middleCategoryList" :key="product_middle_category.middle" :value="product_middle_category.value">{{product_middle_category.middle}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="product_tit">제품소분류</td>
          <td class="product_txt">
            <select id="product_small_category" class="product_small_category" v-model="product_small_category" @change="selectSmallCategory(this)">
              <option v-for="product_small_category in smallCategoryList" :key="product_small_category.small" :value="product_small_category.value">{{product_small_category.small}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="product_tit">제품회사</td>
          <td class="product_txt"><input type="text" id="product_corp" class="product_corp" v-model="product_corp" autocomplete="off"><span class="product_txt_ex">ex) 씨제이올리브영 주식회사</span></td>
        </tr>
        <tr>
          <td class="product_tit">제품개수</td>
          <td class="product_txt"><input type="text" id="product_cnt" class="product_cnt" v-model="product_cnt" autocomplete="off"><span class="product_txt_span">개</span></td>
        </tr>
        <tr>
          <td class="product_tit">제품용량</td>
          <td class="product_txt"><input type="text" id="product_amount" class="product_amount" v-model="product_amount" autocomplete="off"><span class="product_txt_ex">단위 입력바랍니다. ex) ml, 매, g 등</span></td>
        </tr>
        <tr>
          <td class="product_tit">제품주요사양</td>
          <td class="product_txt"><input type="text" id="product_func" class="product_func" v-model="product_func" autocomplete="off"><span class="product_txt_ex">ex) 모든피부용, 건성, 지성 등</span></td>
        </tr>
        <tr>
          <td class="product_tit">제품사용기한(또는 개봉 후 사용기간)</td>
          <td class="product_txt"><input type="text" id="product_limit" class="product_limit" v-model="product_limit" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">제품사용방법</td>
          <td class="product_txt"><input type="text" id="product_way" class="product_way" v-model="product_way" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">제품제조업자/판매업자</td>
          <td class="product_txt"><input type="text" id="product_manufacturer" class="product_manufacturer" v-model="product_manufacturer" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">제품제조국</td>
          <td class="product_txt"><input type="text" id="product_produce_country" class="product_produce_country" v-model="product_produce_country" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">화장품법에 따라 기재해야 하는 모든 성분</td>
          <td class="product_txt"><textarea id="product_ingredient" class="product_ingredient" v-model="product_ingredient"></textarea></td>
        </tr>
        <tr>
          <td class="product_tit">기능성 화장품 식품의약품안전처 심사필 여부</td>
          <td class="product_txt"><input type="text" id="product_evaluate" class="product_evaluate" v-model="product_evaluate" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">사용할 때의 주의사항</td>
          <td class="product_txt"><textarea id="product_attention" class="product_attention" v-model="product_attention" autocomplete="off"></textarea></td>
        </tr>
        <tr>
          <td class="product_tit">품질보증기준</td>
          <td class="product_txt"><input type="text" id="quality_standard" class="quality_standard" v-model="quality_standard" autocomplete="off"></td>
        </tr>
        <tr>
          <td class="product_tit">소비자상담 전화번호</td>
          <td class="product_txt"><input type="text" id="consultaion_number" class="consultaion_number" v-model="consultaion_number" autocomplete="off"></td>
        </tr>

        </tbody>
      </table>
    </div>
    <div class="product_button">
      <button class="back btn" @click="productList">상품리스트</button>
      <button class="productInsert btn" @click="productInsert">제품등록</button>
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
      test: {
        product_orgin_name: '',
        product_sell_name: '',
        product_orgin_price: '',
        product_sell_price: '',
        product_prev_img: '',
        product_main_img: '',
        product_sub_img: '',
        product_desc1_img: '',
        product_desc2_img: '',
        product_desc3_img: '',
        product_brand_name: '',
      },
      //imgPath: './profile_Img.jpg',
      product_orgin_name: '',
      product_sell_name: '',
      product_orgin_price: '',
      product_sell_price: '',
      product_corp: '',
      product_major_category: '',
      majorCategoryList : [
        {major : '선택', value : ''},
        {major : '스킨케어', value : '스킨케어'},
        {major : '마스크팩', value : '마스크팩'},
        {major : '클렌징', value : '클렌징'},
        {major : '선케어', value : '선케어'},
        {major : '더모 코스메틱', value : '더모 코스메틱'},
        {major : '메이크업', value : '메이크업'},
        {major : '네일', value : '네일'},
      ],
      product_middle_category: '',
      middleCategoryList : [
        {middle : '선택', value : ''},
        {middle : '토너/로션/올인원', value : '토너/로션/올인원'},
        {middle : '에센스/크림', value : '에센스/크림'},
        {middle : '미스트/오일', value : '미스트/오일'},
        {middle : '시트팩', value : '시트팩'},
        {middle : '패드', value : '패드'},
        {middle : '페이셜팩', value : '페이셜팩'},
        {middle : '코팩/패치', value : '코팩/패치'},
        {middle : '클렌징폼/젤', value : '클렌징폼/젤'},
        {middle : '오일/워터/리무버', value : '오일/워터/리무버'},
        {middle : '필링/패드', value : '필링/패드'},
        {middle : '선블록', value : '선블록'},
        {middle : '태닝/애프터선', value : '태닝/애프터선'},
        {middle : '스킨케어', value : '스킨케어'},
        {middle : '클렌징', value : '클렌징'},
        {middle : '선케어', value : '선케어'},
        {middle : '마스크팩', value : '마스크팩'},
        {middle : '바디케어', value : '바디케어'},
        {middle : '립메이크업', value : '립메이크업'},
        {middle : '베이스메이크업', value : '베이스메이크업'},
        {middle : '아이메이크업', value : '아이메이크업'},
        {middle : '폴리쉬', value : '폴리쉬'},
        {middle : '팁/스티커', value : '팁/스티커'},
        {middle : '반경화', value : '반경화'},
        {middle : '케어', value : '케어'},
      ],
      product_small_category: '',
      smallCategoryList : [
        {small : '선택', value : ''},
        {small : '스킨/토너', value : '스킨/토너'},
        {small : '로션/에멀젼', value : '로션/에멀젼'},
        {small : '올인원', value : '올인원'},
        {small : '스킨케어 세트', value : '스킨케어 세트'},
        {small : '에센스/세럼', value : '에센스/세럼'},
        {small : '크림', value : '크림'},
        {small : '아이크림', value : '아이크림'},
        {small : '미스트/픽서', value : '미스트/픽서'},
        {small : '페이스오일', value : '페이스오일'},
        {small : '시트팩', value : '시트팩'},
        {small : '패드', value : '패드'},
        {small : '워시오프팩', value : '워시오프팩'},
        {small : '슬리핑팩', value : '슬리핑팩'},
        {small : '모델링팩/필오프팩', value : '모델링팩/필오프팩'},
        {small : '코팩', value : '코팩'},
        {small : '패치', value : '패치'},
        {small : '클렌징폼/젤', value : '클렌징폼/젤'},
        {small : '클렌징 비누', value : '클렌징 비누'},
        {small : '클렌징오일/밤', value : '클렌징오일/밤'},
        {small : '클렌징워터', value : '클렌징워터'},
        {small : '립&아이리무버', value : '립&아이리무버'},
        {small : '클렌징밀크/크림', value : '클렌징밀크/크림'},
        {small : '필링/스크럽', value : '필링/스크럽'},
        {small : '클렌징티슈/패드', value : '클렌징티슈/패드'},
        {small : '선크림', value : '선크림'},
        {small : '선스틱/선스프레이', value : '선스틱/선스프레이'},
        {small : '선쿠션/파우더', value : '선쿠션/파우더'},
        {small : '태닝', value : '태닝'},
        {small : '애프터선', value : '애프터선'},
        {small : '로션/크림/올인원', value : '로션/크림/올인원'},
        {small : '에센스/세럼', value : '에센스/세럼'},
        {small : '스킨/토너', value : '스킨/토너'},
        {small : '아이크림', value : '아이크림'},
        {small : '미스트/오일', value : '미스트/오일'},
        {small : '스킨케어세트', value : '스킨케어세트'},
        {small : '클렌징워터/티슈', value : '클렌징워터/티슈'},
        {small : '클렌징폼/젤', value : '클렌징폼/젤'},
        {small : '클렌징 오일/밀크', value : '클렌징 오일/밀크'},
        {small : '필링/스크럽', value : '필링/스크럽'},
        {small : '선크림/선로션', value : '선크림/선로션'},
        {small : '선스틱', value : '선스틱'},
        {small : '마스크/패드', value : '마스크/패드'},
        {small : '로션/크림/오일(밤)', value : '로션/크림/오일(밤)'},
        {small : '워시', value : '워시'},
        {small : '청결제', value : '청결제'},
        {small : '립케어', value : '립케어'},
        {small : '핸드크림', value : '핸드크림'},
        {small : '데오/미스트', value : '데오/미스트'},
        {small : '립틴트', value : '립틴트'},
        {small : '립스틱', value : '립스틱'},
        {small : '틴티드립밤', value : '틴티드립밤'},
        {small : '립글로스', value : '립글로스'},
        {small : 'BB/CC', value : 'BB/CC'},
        {small : '블러셔/치크', value : '블러셔/치크'},
        {small : '쉐이딩/컨투어링', value : '쉐이딩/컨투어링'},
        {small : '컨실러', value : '컨실러'},
        {small : '쿠션', value : '쿠션'},
        {small : '파우더/팩트', value : '파우더/팩트'},
        {small : '파운데이션', value : '파운데이션'},
        {small : '프라이머/베이스', value : '프라이머/베이스'},
        {small : '픽서', value : '픽서'},
        {small : '하이라이터', value : '하이라이터'},
        {small : '마스카라', value : '마스카라'},
        {small : '아이라이너', value : '아이라이너'},
        {small : '아이브로우', value : '아이브로우'},
        {small : '아이섀도우/팔레트', value : '아이섀도우/팔레트'},
        {small : '일반 폴리쉬', value : '일반 폴리쉬'},
        {small : '젤 폴리쉬', value : '젤 폴리쉬'},
        {small : '팁', value : '팁'},
        {small : '스티커', value : '스티커'},
        {small : '반경화', value : '반경화'},
        {small : '베이스/탑코트', value : '베이스/탑코트'},
        {small : '영양/강화제', value : '영양/강화제'},
        {small : '큐티클관리/리무버', value : '큐티클관리/리무버'},
      ],
      product_cnt: '',
      product_like: '',
      product_score: '',
      product_amount: '',
      product_func: '',
      product_limit: '',
      product_way: '',
      product_manufacturer: '',
      product_produce_country: '',
      product_ingredient: '',
      product_evaluate: '',
      product_attention: '',
      quality_standard: '',
      consultation_number: '',
    };
  },
  computed: {
    /*
    getImgPath() {
      return this.imgPath;
    }
    */
  },
  methods: {
    reset() {
      this.test = {};
    },
    productList() {
      this.$router.push('/productList');
    },
    selectMajorCategory() {
      this.product_major_category = this.product_major_category
    },
    selectMiddleCategory() {
      this.product_middle_category = this.product_middle_category
    },
    selectSmallCategory() {
      this.product_small_category = this.product_small_category
    },
    async productInsert() {
      // let 제품등록파라미터 = {
      //   product_orgin_name: this.product_orgin_name,
      //   product_sell_name: this.product_sell_name,
      //   product_orgin_price: this.product_orgin_price,
      //   product_sell_price: this.product_sell_price,
      //   product_corp: this.product_corp,
      //   product_major_category: this.product_major_category,
      //   product_middle_category: this.product_middle_category,
      //   product_small_category: this.product_small_category,
      //   product_cnt: this.product_cnt,
      //   product_like: this.product_like,
      //   product_score: this.product_score,
      //   product_amount: this.product_amount,
      //   product_func: this.product_func,
      //   product_limit: this.product_limit,
      //   product_way: this.product_way,
      //   product_manufacturer: this.product_manufacturer ,
      //   product_produce_country: this.product_produce_country,
      //   product_ingredient: this.product_ingredient,
      //   product_evaluate: this.product_evaluate,
      //   product_attention: this.product_attention,
      //   quality_standard: this.quality_standard,
      //   consultation_number: this.consultation_number
      // }

      let result = await axios.post("/productInsert", {...this.test});
      console.log('result >> ', result.data);
    },
  }
}

</script>
<style scoped>
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
a, button {
  cursor: pointer;
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