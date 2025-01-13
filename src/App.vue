<template>
    <search-filter @search="find"/>
    <diagram-page :data="dummys"/>
  <ur-button @click="downloadImage" main>이미지다운</ur-button>
</template>

<script setup="init">
import dummys from "@/dummy.js";
import {toPng} from 'html-to-image'
import {onMounted, provide, ref} from "vue";
import DiagramPage from "@/components/DiagramPage.vue";
import SearchFilter from "@/components/SearchFilter.vue";
import UrButton from "@/components/common/UrButton.vue";
const data = ref({})
onMounted(()=>{
  init();
})
provide("searchParam", data)

function init(){
}

const find = (d)=>{
  data.value = d;
}
const downloadImage = ()=>{
  const el = document.getElementsByClassName('diagram__page')[0]
  toPng(el).then((image)=>{
    const link = window.document.createElement('a');
    link.style = 'display:none;';
    link.download = 'test.png';
    link.href = image;
    link.click();
  })
}
</script>

<style scoped>

</style>
