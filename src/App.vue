<template>
    <search-filter @search="find"/>
    <diagram-page :data="dummys"/>
</template>

<script setup="init">
import dummys from "@/dummy.js";
import {onMounted, provide, ref} from "vue";
import DiagramPage from "@/components/DiagramPage.vue";
import SearchFilter from "@/components/SearchFilter.vue";

const data = ref({})
onMounted(()=>{
  init();
})
provide("searchParam", data)

// const resData = ref([])

function init(){
  // makeResponsibilityDiagram(dummys)
}

// const makeResponsibilityDiagram = (data) => {
//   for(let object of data) {
//     const obj = {}
//     for (let [key, value] of Object.entries(object)) {
//       if(key !== "children")
//         obj[key] = value
//       if(key === "children" && value.length > 0)
//         makeResponsibilityDiagram(value)
//     }
//     resData.value.unshift(obj)
//   }
// }
const find = (d)=>{
  data.value = d;
}
</script>

<style scoped>

</style>
