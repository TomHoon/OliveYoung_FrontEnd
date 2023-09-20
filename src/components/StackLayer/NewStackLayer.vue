<template>
  <div> 안녕 나는 NewStackLayer 야! {{ pageParams.add }} 번째 StackLayer 야! </div>
  <button @click="backPage()"> 뒤로 가기 </button>
</template>

<script>
export default {
    props: ['pageParams'], // 'add': 10
    methods : {
        backPage() {
            this.$backPage({backData : 10}) // 뒤로가기
        },
    }
}
</script>

<style>

</style>