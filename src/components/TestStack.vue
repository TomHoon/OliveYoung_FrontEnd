<template>
  <div> 테스트 스택.vue </div>
  <button @click="backPage">뒤로가기</button>
</template>

<script>
export default {
    props: ['pageParams'],
    methods:{
        backPage() {
            this.$backPage({boardParam: '백페이지에서 사용할 파람'})
        }
    }
}
</script>

<style>

</style>