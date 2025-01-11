
<template>
  <div :class="'element__wrapper'+(data.isResponsibilityExists ? ' ': ' disabled')">
    <div :id="props.data.groupCd" class="element" @click="forwardPage">
      <div :class="'element__groupName' + props.data.lvl">{{props.data.groupNm}}</div>
      <div class="element__groupOwner">{{props.data.userNm}}</div>
    </div>
    <div class="responsibility__wrapper">
      <div class="responsibility__element red" v-for="(item, idx) in props.data.responsibilityCd" :key="idx">{{ item }}</div>
    </div>
    <div class="responsibility__wrapper">
      <div class="responsibility__element green" v-for="(item, idx) in props.data.financeResponsibilityCd" :key="idx">{{ item }}</div>
    </div>
    <div class="responsibility__wrapper">
      <div class="responsibility__element gray" v-for="(item, idx) in props.data.managementResponsibilityCd" :key="idx">{{ item }}</div>
    </div>
  </div>
</template>


<script setup>
import {inject, onMounted, ref, watch} from "vue";
const param = inject("searchParam")
const props = defineProps({
  data:{
    type: Object,
    default: {},
  },
})
const data = ref({
  isResponsibilityExists:{
    type: Boolean,
    default: true
  }
})
watch(() => param.value.param1, (oldV, newV)=>{
  isResponsibilityExists()
})
watch(() => param.value.param2, (oldV, newV)=>{
  isResponsibilityExists()
})
const isResponsibilityExists = ()=>{
  let Yn = false
  console.log(param.value.param1)
  if (param.value.param1 === "") { //책무구분이 전체면 전체활성화
    Yn = true;
  }
  else{
    let refs=['responsibilityCd', 'financeResponsibilityCd', 'managementResponsibilityCd']
    for (let ref of refs) {
      //책무구분에 값이 있고,책무구분 데이터가 들어있으며 책무가 전체일 경우
      if (props.data[ref].length > 0 && param.value.param2 === "") {
        if (param.value.param1 === "지정" && ref === "responsibilityCd") {
          Yn = true;
        }
        if (param.value.param1 === "금융" && ref === "financeResponsibilityCd") {
          Yn = true;
        }
        if (param.value.param1 === "경영" && ref === "managementResponsibilityCd") {
          Yn = true;
        }
      }
      if(props.data[ref].length > 0 && param.value.param2 !== "")
      for (let cd of props.data[ref]) {
        if (cd === param.value.param2) {
          Yn = true;
        }
      }
    }
  }
  data.value.isResponsibilityExists = Yn
}
onMounted(()=>{init()})

const init = ()=>{}

const forwardPage = ()=>{
  alert("이동")
}
</script>


<style scoped>
.element__wrapper{z-index:999;}
.element{min-width:140px;max-width:180px; cursor: pointer; transition: opacity 0.1s;}
.element:hover{opacity: 0.5 }
.element__groupName1{height:40px; border-radius: 6px 6px 0 0; padding: 0 5px; display: flex; align-items: center; justify-content: center; font-weight: bold; background-color: black; font-size: 0.8rem; color: white; transition: background-color 0.1s}
.element__groupName2{height:40px; border-radius: 6px 6px 0 0; padding: 0 5px; display: flex; align-items: center; justify-content: center; font-weight: bold; background-color: rgb(243,248,255); font-size: 0.8rem; color: black; transition: background-color 0.1s}
.element__groupName3{height:40px; border-radius: 6px 6px 0 0; padding: 0 5px; display: flex; align-items: center; justify-content: center; font-weight: bold; background-color: rgb(217,217,217); font-size: 0.8rem; color: black;}
.element__groupOwner{height:40px; border-radius: 0 0 6px 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; background-color: rgb(255,255,255); font-size: 0.8rem; color: black; transition: color 0.1s}
.responsibility__wrapper{display: flex; margin-top: 5px;}
.responsibility__element{display: flex ;align-items: center; justify-content: center; width: 12px; height: 12px; margin-right:2px; border-radius: 2px; font-size: 10px; color: #fff}
.red{width: 20px;border-radius: 30px;background-color: #ff5b5b;}
.gray{background-color: gray;}
.green{background-color: #3bac47;}
.disabled{opacity:0.2}
</style>