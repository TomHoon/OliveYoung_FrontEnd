<template>
  <div style="padding:60px;">
    <div class="join_tit">
      <h1 class="join_tit_h1">회원가입</h1>
    </div>
    <div class="join_form">
      <!-- <div class="profile_form">
        <span class="profile_label">프로필</span>
        <label for="member_profile">+</label>
        <span class="float-right">
            <input type="file" id="member_profile" class="member_profile" accept="image/*">
          </span>
      </div> -->
      <div class="id_form">
        <label for="member_id">아이디</label>
        <span class="float-right">
              <input type="text" id="member_id" class="member_id" placeholder="아이디를 입력해주세요."
                     maxlength="15" autocomplete="off" v-model="joinObj.mid" ref="mid">
            <!-- <span>
              <img class="id_check">
            </span> -->
              <div class="id_check_memo">아이디는 영문+숫자 포함 6~12자 이하</div>
          </span>
      </div>
      <div class="pw_form">
        <label for="member_pw">비밀번호</label>
        <span class="float-right">
            <input type="password" id="member_pw" class="member_pw" placeholder="비밀번호를 입력해주세요."
                   maxlength="15" v-model="joinObj.mpw" ref="mpw">
            <span>
              <img src="../assets/pngwing.com.png" class="pw_check" @click="changeSee('mpw')">
            </span>
            <div class="pw_check_memo">비밀번호는 영문+숫자+특수기호 포함 8자 이상</div>
          </span>
      </div>
      <div class="pw_check_form">
        <label for="member_pw_check">비밀번호확인</label>
        <span class="float-right">
            <input type="password" id="member_pw_check" class="member_pw_check"
                   placeholder="비밀번호를 입력해주세요." maxlength="15" v-model="mpwCheck" ref="mpwCheck">
            <span>
              <img src="../assets/pngwing.com.png" class="pw_check" @click="changeSee('mpwCheck')">
            </span>
          </span>
      </div>
      <div class="nickname_form">
        <label for="member_nickname">닉네임</label>
        <span class="float-right">
            <input type="text" id="member_nickname" class="member_nickname" autocomplete="off" v-model="joinObj.nickname" ref="nickname" placeholder="닉네임을 입력해주세요.">
          </span>
      </div>
      <div class="email_form">
        <label for="member_email">이메일</label>
        <span class="float-right">
          <div class="email_select_form">
            <div>
              <input type="text" id="member_email_id" class="member_email" autocomplete="off" v-model="emailId" ref="email_id">
              @
              <input type="text" id="member_email_name" class="member_email" autocomplete="off" v-model="emailName" ref="email_name" v-bind:disabled="emailDefault != ''">
            </div>
            <div class="select_form">
              <select class="select_email" v-model="emailDefault" @change="selectEmail(this)">
                  <option v-for="emailDefault in emailList" :key="emailDefault.em" :value="emailDefault.value">{{emailDefault.em}}</option>
              </select>
            </div>
          </div>
          </span>
      </div>
      <div class="phone_form">
        <label for="member_phone">휴대전화</label>
        <span class="float-right">
            <input type="text" id="member_phone" class="member_phone" autocomplete="off" ref="member_tel" placeholder="휴대전화번호를 입력해주세요." 
            @input="checkPhoneTel($event)" v-model="joinObj.member_tel"
            maxlength="11">
          </span>
      </div>
      <div class="nickname_form">
        <label for="member_nickname">주소</label>
        <span class="float-right">
            <input type="text" id="member_nicknam" class="member_nickname" autocomplete="off" v-model="joinObj.member_address" ref="nickname">
          </span>
      </div>
      <div class="birth_form">
        <label for="member_birth">생년월일</label>
          <div class="birth_select_form">
            <div class="select_birth_area">
              <select class="select_birth" id="select_year" v-model="selectYear" @change="createMonth()">
                  <option value="">년</option>
              </select>
            </div>
            <div class="select_birth_area">
              <select class="select_birth" id="select_month" v-model="selectMonth" @change="createDay()">
                  <option value="">년도선택</option>
              </select>
            </div>
            <div class="select_birth_area">
              <select class="select_birth" id="select_day" v-model="selectDay">
                  <option value="">월선택</option>
              </select>
            </div>
          </div>
      </div>
      <div class="gender_form">
        <label for="member_gender">성별</label>
            <div class="gender_radio_form">
              <label for="chece_genderM"><input type="radio" id="chece_genderM" name="member_gender" class="chece_gender" autocomplete="off" value="M" v-model="joinObj.member_gender" >남자</label>
              <label for="chece_genderW"><input type="radio" id="chece_genderW" name="member_gender" class="chece_gender" autocomplete="off" value="W" v-model="joinObj.member_gender" >여자</label>
            </div>
      </div>
      <input type="hidden" >
      <div class="buttons">
        <button class="join_btn" @click="joinMember()">가입</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import basicMixin from '@/mixin/basicMixin.js';
export default {
  mixins : [basicMixin],
  created() {
    
  },
  mounted() {
      let date = new Date();

      //현재년도 -100까지 표기
      for(let i = date.getFullYear() - 100; i <= date.getFullYear(); i++){
        let createOption = document.createElement("option")
        createOption.innerHTML = i
        createOption.value = i
        document.getElementById('select_year').appendChild(createOption)
      }
      
  },
  data() {
    return {
      //회원가입 데이터
        joinObj: {
          mid : "",
          mpw : "",
          nickname : "",
          email : "",
          member_tel : "",
          member_birth : "",
          member_gender : "",
        },
        
        mpwCheck :  "",
        emailId : "",
        emailName : "",
        //날짜선택값
        selectYear : "",
        selectMonth : "",
        selectDay : "",

        //이메일 select 기본 빈값
        emailDefault : "",
        //선택가능한 이메일 list
        emailList : [
          {em : '직접입력', value : ''},
          {em : 'naver.com', value : 'naver.com'},
          {em : 'google.com', value : 'google.com'},
          {em : 'hanmail.com', value : 'hanmail.com'},
          {em : 'nate.com', value : 'nate.com'},
          {em : 'kakao.com', value : 'kakao.com'},
          {em : 'msn.com', value : 'msn.com'},
        ],
    }
  },
  methods: {
      changeSee(type) {
          // password 숨김, 보임 처리
          if(type == 'mpw'){
            if(document.querySelector('#member_pw').type == 'password'){
                document.querySelector('#member_pw').type = 'text'
            }else{
                document.querySelector('#member_pw').type = 'password'
            }
          }else{
            if(document.querySelector('#member_pw_check').type == 'password'){
                document.querySelector('#member_pw_check').type = 'text'
            }else{
                document.querySelector('#member_pw_check').type = 'password'
            }
          }
      },

      //이메일 select 선택 시마다 값 변환
      selectEmail() {
        this.emailName = this.emailDefault 
      },

      //휴대전화번호 숫자만 입력
      checkPhoneTel(e) {
        const regNum = /[^0-9]/g;
        if (regNum.test(e.target.value)) {
          e.target.value = e.target.value.replace(regNum, '');
          this.joinObj.member_tel = e.target.value;
        }
      },

      //년도 선택시 월 select 생성
      createMonth() {
        
        //select option 초기화
        document.getElementById('select_month').replaceChildren()

        //년도선택시
        if(this.selectYear != ''){
          let createOption = document.createElement("option")
          createOption.innerHTML = '선택'
          createOption.value = ''
          document.getElementById('select_month').appendChild(createOption)
          //1~12월
          for(let i = 1; i < 13; i++){
            let createOption = document.createElement("option")
            if(i < 10){
                i = '0' + i
            }
            createOption.innerHTML = i
            createOption.value = i
            document.getElementById('select_month').appendChild(createOption)
          }
        }
        
        //년도 미선택시
        if(this.selectYear == ''){
          document.getElementById('select_month').replaceChildren()
          document.getElementById('select_day').replaceChildren()

          let createOptionMonth = document.createElement("option")
          createOptionMonth.innerHTML = '년도선택'
          document.getElementById('select_month').appendChild(createOptionMonth)
          
          let createOptionDay = document.createElement("option")
          createOptionDay.innerHTML = '월선택'
          document.getElementById('select_day').appendChild(createOptionDay)
        }
      },

      //월 선택시 날짜 select 생성
      createDay() {

        let lastDay = 32 - new Date(this.selectYear, this.selectMonth - 1, 32).getDate()
       
          //select option 초기화
        document.getElementById('select_day').replaceChildren()

        if(this.selectMonth != ''){
            let createOption = document.createElement("option")
            createOption.innerHTML = '선택'
            createOption.value = ''
            document.getElementById('select_day').appendChild(createOption)
          //해당년도 해당월 날짜
          for(let i = 1; i <= lastDay; i++){
            let createOption = document.createElement("option")
            if(i < 10){
                i = '0' + i
            }
            createOption.innerHTML = i
            createOption.value = i
            document.getElementById('select_day').appendChild(createOption)
          }
        }
        
        //월 미선택시
        if(this.selectMonth == ''){
          let createOption = document.createElement("option")
          createOption.innerHTML = '월선택'
          document.getElementById('select_day').appendChild(createOption)
        }
      },

      async joinMember() {
        /**
         * TODO
         * Promise All로 바꿔주기
         * 
         */
        
        //아이디 정규표현식
        let regExId = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$/;
        
        //비밀번호 정규표현식
        let regExPwd = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,20}$/;

        //휴대전화 정규표현식
        let regExPhoneTel = /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/;
        
        //input빈값 체크
        if(this.joinObj.mid == ''){
          this.toastMsg('아이디를 입력해주세요.');
          this.$refs.mid.focus()
          return;
        }
        if(this.joinObj.mpw == ''){
          this.toastMsg('비밀번호를 입력해주세요.');
          this.$refs.mpw.focus()
          return;
        }
        if(this.mpwCheck == ''){
          this.toastMsg('비밀번호를 확인해주세요.');
          this.$refs.mpwCheck.focus()
          return;
        }
        if(this.joinObj.nickname == ''){
          this.toastMsg('닉네임을 입력해주세요.');
          this.$refs.nickname.focus()
          return;
        }
        if(this.email_id == ''){
          this.toastMsg('이메일을 입력해주세요.');
          this.$refs.email_id.focus()
          return;
        }
        if(this.email_name == ''){
          this.toastMsg('이메일을 입력해주세요.');
          this.$refs.email_name.focus()
          return;
        }
        if(this.joinObj.member_tel == ''){
          this.toastMsg('휴대전화번호를 입력해주세요.');
          this.$refs.member_gender.focus()
          return;
        }
        if(this.joinObj.selectYear == ''){
          this.toastMsg('생년월일을 선택해주세요.');
          this.$refs.member_gender.focus()
          return;
        }
        if(this.joinObj.selectMonth == ''){
          this.toastMsg('생년월일을 선택해주세요.');
          this.$refs.member_gender.focus()
          return;
        }
        if(this.joinObj.selectDay == ''){
          this.toastMsg('생년월일을 선택해주세요.');
          this.$refs.member_gender.focus()
          return;
        }
        if(this.joinObj.member_gender == ''){
          this.toastMsg('성별을 선택해주세요.');
          this.$refs.member_gender.focus()
          return;
        }
        
        //input빈값 체크 end

        //아이디 정규표현식 테스트
        if(!regExId.test(this.joinObj.mid)){
            this.toastMsg('아이디는 영문+숫자 포함 \n6~12자 이하로 입력해주세요.')
            this.$refs.mid.focus()
            return;
        }

        // //비밀번호 정규표현식 테스트
        if(!regExPwd.test(this.joinObj.mpw)){
            this.toastMsg('비밀번호는 영문+숫자+특수기호 포함 \n8자 이상으로 입력해주세요.')
            this.$refs.mpw.focus()
            return;
        }

        // //비밀번호 일치 확인
        if(this.joinObj.mpw != this.mpwCheck){
            this.toastMsg('비밀번호가 일치하지 않습니다.')
            this.$refs.mpwCheck.focus()
            return;
        }

        // //비밀번호 일치 확인
        if(!regExPhoneTel.test(this.joinObj.member_tel)){
            this.toastMsg('휴대전화번호 형식이 잘못되었습니다.')
            this.$refs.member_tel.focus()
            return;
        }

        //axios 동작
        async function data(_url, _params){
            var returnV = await axios.post(_url, _params);
            return returnV;
        }

        this.joinObj.email = this.emailId + '@' + this.emailName //email
        this.joinObj.member_birth = this.selectYear + '-' + this.selectMonth + '-' + this.selectDay //birth 
         //param에 데이터 담기
        let param = {
          ...this.joinObj
        };
       
       //회원가입 성공시 라우터 이동을 위해 만듬(promise안에서 this가 안먹히는 것같은데 이유는 모름)
       let t = this
       
       
       //Promise.all
        Promise.all([
          data('/checkExist', {mid: this.joinObj.mid}),
          data('/checkExistNick', {nickname: this.joinObj.nickname})
        ]).then(function ([아이디중복데이터,닉네임중복데이터]){
            
            if(아이디중복데이터.data == 1){
                t.toastMsg('아이디가 중복됩니다.');
                return;
            }
            if (닉네임중복데이터.data == 1) {
                t.toastMsg('닉네임이 중복됩니다.');
                return;
            }

            //param 넘겨주고 회원가입
            axios.post('/joinMember', param).then(function(result){
               if(result.data === 1){
                  if(confirm('회원가입완료.\n로그인페이지로 이동하시겠습니까?')){
                     t.$router.push('/login')
                  }else{
                     return;
                  }
               }
            });
        });

        

       // let checkEmpty = Object.values(this.joinObj).every((item, index, array) => console.log(item, index, array))
        // if(checkEmpty == false){
        //   console.log("sadsad")
        // }
        
        
        // let {data:아이디중복데이터} = await axios.post('/checkExist', {mid: this.joinObj.mid});
        //  let {data:닉네임중복데이터} = await axios.post('/checkExistNick', {nickname: this.joinObj.nickname});
        
        // if (아이디중복데이터 == 1) {
        //   alert('아이디가 중복됩니다.');
        //   return;
        // }
        
        // if (아이디중복데이터 != 1 && 닉네임중복데이터 == 1) {
        //   alert('닉네임이 중복됩니다.');
        //   return;
        // }



        // axios({
        //   method:'post',
        //   url:'/checkExist',
        //   data : {
        //     mid : this.joinObj.mid,
        //   } 
        // }).then((result) => {
        //   console.log(result.data)
        //   if(result.data == 1){
        //     alert('아이디가 중복됩니다.')
        //     return false
        //   }else{
        //     axios({
        //       method:'post',
        //       url:'/checkExistNick',
        //       data : {
        //         nickname : this.joinObj.nickname,
        //       }
        //     }).then((result) => {
        //       console.log(result.data)
        //       if(result.data == 1){
        //         alert('닉네임이 중복됩니다.')
        //         return false
        //       }else{
        //          axios({
        //           method:'post',
        //           url:'/joinMember',
        //           data : this.joinObj,
        //         }).then((result) => {
        //           console.log(result.data)
        //         })
        //       }
        //     })
           
        //   }
        // })
        
        
      }
  }
}
</script>

<style scoped>
.tit {
  text-decoration: none;
  color: inherit;
  font-size: 30px;
  font-weight: bold;
}

.join_tit {
  margin-top: 15px;
}

.join_tit_h1 {
  display: inline;
}

.ask {
  padding: 14px 0 0 5px;
  position: absolute;
  width: 20px;
  height: 20px;
}

.join_form {
  margin-top: 40px;
  display: inline-block;
}

.modal {
  display: none;
  position: absolute;
  transform: translate(18.5rem, -6.5rem);
}

.modal-content {
  background-color: #fefefe;
  border: 1px solid #888;
  border-radius: 10px;
  font-size: 10px;
  width: 270px;
  height: 60px;
  padding-bottom: 9px;
}

.modal-content > ul {
  text-align: left;
  padding-left: 0.5rem;
}

.modal.open {
  display: inline-block;
}

.profile_form {
  width: 700px;
  height: 90px;
  margin: 20px auto;
}
.profile_label {
  float: left;
  padding: 42px 0 0 20px;
  font-weight: bold;
  font-size: 15px;
  color: #736d6d;
}
.profile_form label {
  padding: 22px 0 0 20px;
  font-weight: bold;
  font-size: 15px;
  color: #736d6d;
  transform: translate(-11rem, -1rem);
  padding: 100px 0 0 100px;
  position: absolute;
}

.member_profile {
  display: none;
}
.profile_Img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  transform: translateX(-70%);
}
.id_form {
  box-sizing: border-box;
  border: 0.4px solid rgba(173, 116, 227, 0.63);
  width: 700px;
  height: 90px;
  margin: 10px auto;
}

.id_form label {
  float: left;
  padding: 22px 0 0 20px;
  font-weight: bold;
  font-size: 15px;
  color: #736d6d;
}

.member_id {
  padding-left: 20px;
  width: 400px;
  height: 40px;
  margin-right: 40px;
  border: 1px solid rgba(136, 135, 135, 0.34);
  border-radius: 3px;
  color: rgba(66, 64, 64, 0.75);
  font-size: 15px;
  margin-top: 12px;
}

.id_check {
  width: 20px;
  height: 20px;
  position: absolute;
  transform: translate(-2rem, 1.5rem);
}

.id_check_memo {
  font-size: 10.5px;
  text-align: left;
  margin-top: 5px;
  margin-left: 3px;
}

.pw_form {
  box-sizing: border-box;
  border: 0.4px solid rgba(173, 116, 227, 0.63);
  width: 700px;
  height: 90px;
  margin: 10px auto;
}

.pw_form label {
  float: left;
  padding: 22px 0 0 20px;
  font-weight: bold;
  font-size: 15px;
  color: #736d6d;
}

.member_pw {
  padding-left: 20px;
  width: 400px;
  height: 40px;
  margin-right: 40px;
  border: 1px solid rgba(136, 135, 135, 0.34);
  border-radius: 3px;
  color: rgba(66, 64, 64, 0.75);
  font-size: 15px;
  margin-top: 12px;

}

.pw_check {
  width: 20px;
  height: 20px;
  position: absolute;
  transform: translate(-2rem, 1.5rem);
  cursor: pointer;
}

.pw_check_memo {
  font-size: 10.5px;
  text-align: left;
  margin-top: 5px;
  margin-left: 3px;

}

.pw_check_form {
  box-sizing: border-box;
  border: 0.4px solid rgba(173, 116, 227, 0.63);
  width: 700px;
  height: 70px;
  margin: 10px auto;
}

.pw_check_form label {
  float: left;
  padding: 22px 0 0 20px;
  font-weight: bold;
  font-size: 15px;
  color: #736d6d;
}

.member_pw_check {
  padding-left: 20px;
  width: 400px;
  height: 40px;
  margin-right: 40px;
  border: 1px solid rgba(136, 135, 135, 0.34);
  border-radius: 3px;
  color: rgba(66, 64, 64, 0.75);
  font-size: 15px;
  margin-top: 12px;
}

.pwchk_check {
  width: 20px;
  height: 20px;
  position: absolute;
  transform: translate(-2rem, 1.5rem);
}

.name_form {
  box-sizing: border-box;
  border: 0.4px solid rgba(173, 116, 227, 0.63);
  width: 700px;
  height: 70px;
  margin: 10px auto;
}

.name_form label {
  float: left;
  padding: 22px 0 0 20px;
  font-weight: bold;
  font-size: 15px;
  color: #736d6d;
}

.member_name {
  padding-left: 20px;
  width: 400px;
  height: 40px;
  margin-right: 40px;
  border: 1px solid rgba(136, 135, 135, 0.34);
  border-radius: 3px;
  color: rgba(66, 64, 64, 0.75);
  font-size: 15px;
  margin-top: 12px;
}

.nickname_form {
  box-sizing: border-box;
  border: 0.4px solid rgba(173, 116, 227, 0.63);
  width: 700px;
  height: 70px;
  margin: 10px auto;
}

.nickname_form label {
  float: left;
  padding: 22px 0 0 20px;
  font-weight: bold;
  font-size: 15px;
  color: #736d6d;
}

.member_nickname {
  padding-left: 20px;
  width: 400px;
  height: 40px;
  margin-right: 40px;
  border: 1px solid rgba(136, 135, 135, 0.34);
  border-radius: 3px;
  color: rgba(66, 64, 64, 0.75);
  font-size: 15px;
  margin-top: 12px;
}

.phone_form {
  box-sizing: border-box;
  border: 0.4px solid rgba(173, 116, 227, 0.63);
  width: 700px;
  height: 70px;
  margin: 10px auto;
}

.phone_form label {
  float: left;
  padding: 22px 0 0 20px;
  font-weight: bold;
  font-size: 15px;
  color: #736d6d;
}

.member_phone {
  background-color: white;
  padding-left: 20px;
  width: 400px;
  height: 40px;
  margin-right: 40px;
  border: 1px solid rgba(136, 135, 135, 0.34);
  border-radius: 3px;
  color: rgba(66, 64, 64, 0.75);
  font-size: 15px;
  margin-top: 12px;
}

.email_form {
  box-sizing: border-box;
  border: 0.4px solid rgba(173, 116, 227, 0.63);
  width: 700px;
  height: 70px;
  margin: 10px auto;
  padding-right: 40px;
}

.email_form label {
  float: left;
  padding: 22px 0 0 20px;
  font-weight: bold;
  font-size: 15px;
  color: #736d6d;
}

.email_select_form {
  display: flex;
}

.select_form {
  margin-left: 10px;
}

.member_email {
  background-color: white;
  padding-left: 20px;
  width: 120px;
  height: 40px;
  border: 1px solid rgba(136, 135, 135, 0.34);
  border-radius: 3px;
  color: rgba(66, 64, 64, 0.75);
  font-size: 15px;
  margin-top: 12px;
}

.select_email {
    width: 100px;
    background-color: white;
    height: 43px;
    border: 1px solid rgba(136, 135, 135, 0.34);
    border-radius: 3px;
    color: rgba(66, 64, 64, 0.75);
    margin-top: 12px;
    outline: none;
   
}

.birth_form {
  box-sizing: border-box;
  border: 0.4px solid rgba(173, 116, 227, 0.63);
  width: 700px;
  height: 70px;
  margin: 10px auto;
  
}

.birth_form label {
  float: left;
  padding: 22px 0 0 20px;
  font-weight: bold;
  font-size: 15px;
  color: #736d6d;
}

.birth_select_form {
  width: 435px;
  display: flex;
  justify-content: space-between;
  float: right;
  padding-right: 40px;
}

.select_birth_area {
  margin-left: 10px;
}

.select_birth {
    width: 100px;
    background-color: white;
    height: 43px;
    border: 1px solid rgba(136, 135, 135, 0.34);
    border-radius: 3px;
    color: rgba(66, 64, 64, 0.75);
    margin-top: 12px;
    outline: none;
   
}

.gender_form {
  box-sizing: border-box;
  border: 0.4px solid rgba(173, 116, 227, 0.63);
  width: 700px;
  height: 70px;
  margin: 10px auto;
  
}

.gender_form label {
  float: left;
  padding: 22px 0 0 20px;
  font-weight: bold;
  font-size: 15px;
  color: #736d6d;
}

.member_gender {
  background-color: white;
  padding-left: 20px;
  width: 120px;
  height: 40px;
  border: 1px solid rgba(136, 135, 135, 0.34);
  border-radius: 3px;
  color: rgba(66, 64, 64, 0.75);
  font-size: 15px;
  margin-top: 12px;
}

.gender_radio_form {
  margin-right: 40px;
  display: flex;
  justify-content: space-evenly;
}

.postcode {
  width: 80px;
  margin-right: 12px;
  margin-bottom: 5px;
  border: 1px solid rgba(136, 135, 135, 0.34);
  border-radius: 3px;
  color: rgba(66, 64, 64, 0.75);
  font-size: 15px;
  background-color: white;
  height: 40px;
  margin-top: 12px;
  float: left;
  text-align: center;

}

.execDaumPostcode {
  border-radius: 3px;
  border: 1px solid rgba(136, 135, 135, 0.34);
  color: rgba(66, 64, 64, 0.75);
  font-size: 15px;
  background-color: white;
  width: 150px;
  float: left;
  height: 40px;
  margin-top: 12px;
  cursor: pointer;
}

.member_address {
  margin-bottom: 5px;
  padding-left: 20px;
  margin-right: 40px;
  border: 1px solid rgba(136, 135, 135, 0.34);
  border-radius: 3px;
  color: rgba(66, 64, 64, 0.75);
  font-size: 15px;
  background-color: white;
  width: 400px;
  height: 40px;
}

.detailAddress {
  margin-bottom: 5px;
  margin-right: 40px;
  padding-left: 20px;
  border: 1px solid rgba(136, 135, 135, 0.34);
  border-radius: 3px;
  color: rgba(66, 64, 64, 0.75);
  font-size: 15px;
  background-color: white;
  width: 400px;
  height: 40px;
}

.extraAddress {
  margin-bottom: 5px;
  margin-right: 40px;
  padding-left: 20px;
  border: 1px solid rgba(136, 135, 135, 0.34);
  border-radius: 3px;
  color: rgba(66, 64, 64, 0.75);
  font-size: 15px;
  background-color: white;
  width: 400px;
  height: 40px;
}

.join_btn {
  text-align: center;
  color: white;
  width: 400px;
  height: 40px;
  border: 1px solid rgba(136, 135, 135, 0.34);
  border-radius: 3px;
  font-size: 16px;
  margin: 30px auto;
  background-color: #ad74e3;
  cursor: pointer;

}

/*모바일 반응형*/
/*---------------------------------------------------------------------------------------------*/

@media (max-width: 750px) {
  .modal {
    display: none;
    position: relative;
  }

  .modal-content {
    background-color: #fefefe;
    border: 1px solid #888;
    border-radius: 10px;
    font-size: 10px;
    width: 270px;
    height: 55px;
    padding: 0 0 7px 0;
  }

  .modal.open {
    transform: translate(0rem, 0rem);
  }

  .join_tit {
    margin-bottom: 15px;
  }

  .float-right {
    width: 69%;
  }

  .join_form {
    margin-top: 40px;
    display: inline-block;
    width: 100%;
  }
  .profile_form {
    width: 80%;
    height: 90px;
  }
  .profile_label {
    float: left;
    padding: 42px 0 0 20px;
    font-weight: bold;
    font-size: 15px;
    color: #736d6d;
  }
  .profile_form label {
    padding: 22px 0 0 20px;
    font-weight: bold;
    font-size: 15px;
    color: #736d6d;
    transform: translate(-6.9rem, 0.8rem);
    padding: 60px 0 0 60px;
    position: absolute;
  }
  .profile_Img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    transform: translate(-70%, 40%);
  }
  .id_form {
    box-sizing: border-box;
    border: 0.4px solid rgba(173, 116, 227, 0.63);
    width: 80%;
    height: 90px;
  }

  .id_form label {
    float: left;
    padding: 22px 0 0 20px;
    font-weight: bold;
    font-size: 12px;
    color: #736d6d;
  }

  .member_id {
    padding-left: 20px;
    width: 80%;
    height: 40px;
    border: 1px solid rgba(136, 135, 135, 0.34);
    border-radius: 3px;
    color: rgba(66, 64, 64, 0.75);
    font-size: 15px;
    margin: 12px 0 0 0;
  }

  .id_check {
    width: 13px;
    height: 13px;
    position: absolute;
    transform: translate(-1.3rem, 1.6rem);
  }

  .id_check_memo {
    font-size: 0.6rem;
    text-align: left;
    margin-top: 5px;
    margin-left: 10.5%;
    width: 80%;

  }

  .pw_form {
    box-sizing: border-box;
    border: 0.4px solid rgba(173, 116, 227, 0.63);
    height: 95px;
    margin: 10px auto;
    width: 80%;
  }

  .pw_form label {
    float: left;
    padding: 22px 0 0 20px;
    font-weight: bold;
    font-size: 12px;
    color: #736d6d;
  }

  .member_pw {
    padding-left: 20px;
    height: 40px;
    border: 1px solid rgba(136, 135, 135, 0.34);
    border-radius: 3px;
    color: rgba(66, 64, 64, 0.75);
    font-size: 15px;
    width: 80%;
    margin: 12px 0 0 0;

  }

  .pw_check {
    width: 13px;
    height: 13px;
    position: absolute;
    transform: translate(-1.3rem, 1.6rem);
  }

  .pw_check_memo {
    font-size: 0.6rem;
    text-align: left;
    margin-top: 5px;
    margin-left: 10.5%;
    width: 80%;
  }

  .pw_check_form {
    box-sizing: border-box;
    border: 0.4px solid rgba(173, 116, 227, 0.63);
    width: 80%;
    height: 70px;
    margin: 10px auto;
  }

  .pw_check_form label {
    float: left;
    padding: 22px 0 0 20px;
    font-weight: bold;
    font-size: 12px;
    color: #736d6d;
  }

  .member_pw_check {
    padding-left: 20px;
    height: 40px;
    border: 1px solid rgba(136, 135, 135, 0.34);
    border-radius: 3px;
    color: rgba(66, 64, 64, 0.75);
    font-size: 15px;
    width: 80%;
    margin: 12px 0 0 0;
  }

  .pwchk_check {
    width: 13px;
    height: 13px;
    position: absolute;
    transform: translate(-1.3rem, 1.6rem);
  }

  .name_form {
    box-sizing: border-box;
    border: 0.4px solid rgba(173, 116, 227, 0.63);
    width: 80%;
    height: 70px;
    margin: 10px auto;
  }

  .name_form label {
    float: left;
    padding: 22px 0 0 20px;
    font-weight: bold;
    font-size: 12px;
    color: #736d6d;
  }

  .member_name {
    padding-left: 20px;
    height: 40px;
    border: 1px solid rgba(136, 135, 135, 0.34);
    border-radius: 3px;
    color: rgba(66, 64, 64, 0.75);
    font-size: 15px;
    width: 80%;
    margin: 12px 0 0 0;
  }

  .nickname_form {
    box-sizing: border-box;
    border: 0.4px solid rgba(173, 116, 227, 0.63);
    width: 80%;
    height: 70px;
    margin: 10px auto;
  }

  .nickname_form label {
    float: left;
    padding: 22px 0 0 20px;
    font-weight: bold;
    font-size: 12px;
    color: #736d6d;
  }

  .member_nickname {
    padding-left: 20px;
    height: 40px;
    border: 1px solid rgba(136, 135, 135, 0.34);
    border-radius: 3px;
    color: rgba(66, 64, 64, 0.75);
    font-size: 15px;
    width: 80%;
    margin: 12px 0 0 0;
  }

  .phone_form {
    box-sizing: border-box;
    border: 0.4px solid rgba(173, 116, 227, 0.63);
    width: 80%;
    height: 70px;
    margin: 10px auto;
  }

  .phone_form label {
    float: left;
    padding: 22px 0 0 20px;
    font-weight: bold;
    font-size: 12px;
    color: #736d6d;
  }

  .member_phone {
    background-color: white;
    padding-left: 20px;
    height: 40px;
    border: 1px solid rgba(136, 135, 135, 0.34);
    border-radius: 3px;
    color: rgba(66, 64, 64, 0.75);
    font-size: 15px;
    width: 80%;
    margin: 12px 0 0 0;
  }

  .email_form {
    box-sizing: border-box;
    border: 0.4px solid rgba(173, 116, 227, 0.63);
    width: 80%;
    height: 70px;
    margin: 10px auto;
  }

  .email_form label {
    float: left;
    padding: 22px 0 0 20px;
    font-weight: bold;
    font-size: 12px;
    color: #736d6d;
  }

  .member_email {
    background-color: white;
    padding-left: 20px;
    height: 40px;
    border: 1px solid rgba(136, 135, 135, 0.34);
    border-radius: 3px;
    color: rgba(66, 64, 64, 0.75);
    font-size: 15px;
    width: 80%;
    margin: 12px 0 0 0;
  }

  .address_form {
    box-sizing: border-box;
    border: 0.4px solid rgba(173, 116, 227, 0.63);
    width: 80%;
    height: 220px;
    margin: 10px auto;
  }

  .address_form label {
    float: left;
    padding: 22px 0 0 20px;
    font-weight: bold;
    font-size: 12px;
    color: #736d6d;
  }

  .postcode {
    width: 34%;
    border: 1px solid rgba(136, 135, 135, 0.34);
    border-radius: 3px;
    color: rgba(66, 64, 64, 0.75);
    font-size: 12px;
    background-color: white;
    height: 40px;
    float: left;
    text-align: center;
    margin-left: 10%;
    margin-right: 5px;

  }

  .execDaumPostcode {
    border: 1px solid rgba(136, 135, 135, 0.34);
    border-radius: 3px;
    color: rgba(66, 64, 64, 0.75);
    font-size: 12px;
    background-color: white;
    width: 43.5%;
    height: 40px;
    cursor: pointer;
    float: left;
  }

  .member_address {
    padding-left: 20px;
    border: 1px solid rgba(136, 135, 135, 0.34);
    border-radius: 3px;
    color: rgba(66, 64, 64, 0.75);
    font-size: 12px;
    background-color: white;
    width: 80%;
    height: 40px;
    margin: 0;
  }

  .detailAddress {
    padding-left: 20px;
    border: 1px solid rgba(136, 135, 135, 0.34);
    border-radius: 3px;
    color: rgba(66, 64, 64, 0.75);
    font-size: 12px;
    background-color: white;
    width: 80%;
    height: 40px;
    margin: 5px 0 0 0;
  }

  .extraAddress {
    padding-left: 20px;
    border: 1px solid rgba(136, 135, 135, 0.34);
    border-radius: 3px;
    color: rgba(66, 64, 64, 0.75);
    font-size: 12px;
    background-color: white;
    width: 80%;
    height: 40px;
    margin: 5px 0 0 0;
  }

  .join_btn {
    text-align: center;
    color: white;
    width: 200px;
    height: 40px;
    border: 1px solid rgba(136, 135, 135, 0.34);
    border-radius: 3px;
    font-size: 14px;
    margin: 30px;
    background-color: #ad74e3;
    cursor: pointer;

  }

}

/*---------------------------------------------------------------------------------------------*/


.float-right {
  float: right;
}

input {
  outline: none;
  border-style: none;
}

input::placeholder {
  color: rgba(44, 42, 42, 0.37);
  font-size: 13px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

}

select {
  border-style: none;
  border-bottom: solid 1px gray;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

li {
  list-style: none;
}

.buttons {
  display: flex;
}

.buttons button {
  width: 45%;
}
</style>