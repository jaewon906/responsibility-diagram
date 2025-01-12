<template>
  <div class="search__wrapper">
    <div class="search_column">
      <p class="search_label">책무구분</p>
      <ur-combo :items="data.combo1" v-model="data.params.param1"/>
    </div>
    <div class="search_column">
      <p class="search_label">책무</p>
      <ur-combo :items="data.combo2" v-model="data.params.param2"/>
    </div>
    <ur-button @click="select" main>조회</ur-button>
  </div>

</template>

<script setup>
import {onMounted, ref, watch} from "vue";
  import UrButton from "@/components/common/UrButton.vue";
  import UrCombo from "@/components/common/UrCombo.vue";

  const emit = defineEmits(['search'])
  const data = ref({
    params:{
      param1:{
        type: String,
        default: ""
      },
      param2:{
        type: String,
        default: ""
      },
    },
    combo1:{
      type:Array,
      default:[]
    },
    combo2:{
      type:Array,
      default:[]
    }
  })
  const cdList=[
      [
        {cd: '', cdNm:'전체'},
        {cd: '1',cdNm:'책무고조도 마련.관리'},
        {cd: '2',cdNm:'내부감사'},
        {cd: '3',cdNm:'위험관리'},
        {cd: '4',cdNm:'준법감시'},
      ],
    [
      {cd: '', cdNm:'선택'},
      {cd: '가',cdNm:'예금 및 적금'},
      {cd: '나',cdNm:'유가증권 및 그 밖의 채무증서의 발행'},
      {cd: '다',cdNm:'내국환.외국환'},
      {cd: '라',cdNm:'투자매매'},
      {cd: '마',cdNm:'투자중개'},
      {cd: '바',cdNm:'집합투자'},
      {cd: '사',cdNm:'투자자문'},
    ],[
      {cd: '', cdNm:'전체'},
      {cd: 'A',cdNm:'이사회운영'},
      {cd: 'B',cdNm:'인사'},
      {cd: 'C',cdNm:'보수'},
      {cd: 'D',cdNm:'고유자산운용'},
      {cd: 'E',cdNm:'건전성 및 재무관리'},
      {cd: 'F',cdNm:'공시'},
      {cd: 'G',cdNm:'업무의 위탁 및 수탁'},
    ]
  ]
  onMounted(()=>{init()})
  watch(()=>data.value.params.param1,()=>{
    data.value.params.param2=""
      data.value.params.param1 === "지정" ? data.value.combo2 = cdList[0]
    : data.value.params.param1 === "금융" ? data.value.combo2 = cdList[1]
    : data.value.params.param1 === "경영" ? data.value.combo2 = cdList[2] : []
  })
  const init = ()=>{
    data.value.params.param1 = ""
    data.value.params.param2 = ""
    data.value.combo1=[
      {cd: '', cdNm:'선택'},
      {cd: '지정',cdNm:'지정 책임자 관련 책무'},
      {cd: '금융',cdNm:'금융영업 관련 책무'},
      {cd: '경영',cdNm:'경영관리 관련 책무'},
    ]
    data.value.combo2=[{cd: '', cdNm:'선택'}]
  }
  const select = ()=>{
    const param = {}
    param.param1 = data.value.params.param1
    param.param2 = data.value.params.param2
    emit('search', param)
  }
</script>


<style scoped>
.search__wrapper{
  width:100%;
  height:80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search_label{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width:100px;
  text-align: center;
  font-weight: bold;
}
.search_column{
  display: flex;
  width:50%;
}
</style>