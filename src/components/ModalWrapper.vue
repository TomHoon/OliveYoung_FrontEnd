<template>
  <div class="modal" v-if="isOpen" :style="{ width: width, height: height }">
    <div class="modal-content">
      <slot></slot> <!-- 모달 내용을 slot으로 삽입합니다. -->
      <button @click="closeModal">모달 닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: String, // 너비를 문자열로 전달 받음
    height: String, // 높이를 문자열로 전달 받음
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    modalOpen() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
/* 모달 스타일링 */
.modal {
  /* 스타일링 내용 추가 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 모달 배경의 반투명 검은색 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* 다른 요소 위에 표시 */
}

.modal-content {
  /* 스타일링 내용 추가 */
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
}
</style>