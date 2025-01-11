<template>

  <div class="indicator__wrapper"
       @mouseenter="()=>{data.showResponsibilityTypes = !data.showResponsibilityTypes}"
       @mouseleave="()=>{data.showResponsibilityTypes = !data.showResponsibilityTypes}"
  >
    <div class="indicator__list" v-for="(obj, idx) in codeList">
      <div class="responsibility__element__wrapper">
        <div :class="'responsibility__element '+responsibilityElementColor(idx)"/>
      </div>
      <p>{{obj.cdNm}}</p>
    </div>

    <!--hover, show responsibility lists-->
    <div v-if="data.showResponsibilityTypes"
         class="responsibility_detail__wrapper"/>
    <!--end show responsibility lists-->
  </div>
</template>

<script setup>
  import {ref} from "vue";

  const data = ref({
    showResponsibilityTypes : false
  })

  const codeList = [
      {cd:'지정책임자', cdNm:"지정 책임자 관련 책무"},
      {cd:'금융영업', cdNm:"금융영업 관련 책무"},
      {cd:'경영관리', cdNm:"경영관리 관련 책무"},
  ]
  const responsibilityElementColor = (idx)=>{
    return idx == 0 ? 'red'
         : idx == 1 ? 'green'
         : idx == 2 ? 'gray' : ''
  }
</script>

<style scoped>
.responsibility_detail__wrapper{position: absolute;top:90px;left:0px;width: 596px;height:600px;padding: 16px;border-radius: 4px;border: 1px solid #e0e0e0;background-color: #fff;box-shadow: 0 0 4px rgba(0, 0, 0, .2);}
.indicator__wrapper{width: 200px;padding: 12px;border-radius: 4px;border: 1px solid #e0e0e0;background-color: #fff;position: absolute;top: 30px;left:50px;z-index: 1000;font-size: 0.8rem;font-weight: 600;}
.indicator__wrapper:hover{border: 1px solid black; box-shadow: 0 0 10px rgba(0, 0, 0, .04), 0 0 4px rgba(0, 0, 0, .2);}
.indicator__list{display: flex; align-items: center; padding:3px 0;>p{margin: 0; font-size: 0.7rem}}
.responsibility__element__wrapper{width:24px; display: flex;justify-content: center}
.responsibility__element{display: flex ;align-items: center; justify-content: center; width: 12px; height: 12px; margin-right:2px; border-radius: 2px; font-size: 10px; color: #fff}
.red{width: 20px;border-radius: 30px;background-color: #ff5b5b;}
.gray{background-color: gray;}
.green{background-color: #3bac47;}
</style>