<template>
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
</template>

<script>
export default {

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

a {
    text-decoration: none;
}
li {
    list-style: none;
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