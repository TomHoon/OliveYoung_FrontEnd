<template>
  <div> 테스트 스택.vue // NewStackLayer.vue 에서 받아온 데이터 {{ transferObj.backData }} </div>
  <button @click="modalOpen">모달 열기</button>

  <modalWrapper ref="modal" :width="500" :height="500" :clickToClose=true>
      <!-- 모달에 들어갈 내용을 이 부분에 추가 -->
      <h2>모달 제목</h2>
      <p>모달 내용을 여기에 추가합니다.</p>
  </modalWrapper>

  <button @click="backPage">뒤로가기</button>

  <button @click="goNewStackLayer(2)">NewStackLayer</button>


</template>

<script>
import ModalWrapper from '@/components/ModalWrapper.vue';

export default {
    components:{
      ModalWrapper,  
    },
    props: ['pageParams', 'transferObj'],
    methods:{
        backPage() {
            this.$backPage({boardParam: '백페이지에서 사용할 파람'})
        },
        modalOpen() {
            this.$refs.modal.modalOpen();
        },
        goNewStackLayer(payload) {
            this.$pushContents('NewStackLayer', {add : payload});
        }
    }
}
</script>

<style>

</style>