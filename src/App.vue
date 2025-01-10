<template>
    <diagram-page :data="dummys"/>
</template>

<script setup="init">
import dummys from "@/dummy.js";
import {onMounted, ref} from "vue";
import DiagramPage from "@/components/DiagramPage.vue";

onMounted(()=>{
  init();
})

const resData = ref([])

function init(){
  makeResponsibilityDiagram(dummys)
}

const makeResponsibilityDiagram = (data) => {
  for(let object of data) {
    const obj = {}
    for (let [key, value] of Object.entries(object)) {
      if(key !== "children")
        obj[key] = value
      if(key === "children" && value.length > 0)
        makeResponsibilityDiagram(value)
    }
    resData.value.unshift(obj)
  }
}
</script>

<style scoped>

</style>
