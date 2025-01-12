
<template>
  <div class="diagram__page">
    <!--indicates responsibilities-->
    <diagram-indicator/>
    <!--end indicates responsibilities-->

    <!--diagram view-->
    <diagram-row :data="props.data"/>
    <!--end diagram view-->

    <!--draw line-->
    <svg id="lines" :style="'height:'+height+'; width:'+width + '; min-width:1200px;'" class="lines" xmlns="http://www.w3.org/2000/svg">
      <line id="line"
          v-for="(line, idx) in data.lines"
          :key="idx"
          :x1="line.x1"
          :y1="line.y1"
          :x2="line.x2"
          :y2="line.y2"
          stroke="gray"
          stroke-opacity="0.18"
          stroke-width="1.5"
          marker-end="url(#arrow)"
      />
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10" fill="black" />
        </marker>
      </defs>
    </svg>
    <!--end draw line-->
  </div>
</template>


<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import DiagramRow from "@/components/DiagramRow.vue";
import DiagramIndicator from "@/components/DiagramIndicator.vue";
import dummys from "@/dummy.js";

const props = defineProps({
  data:{
    type: Array,
    default: {},
  }
})
const height = ref(0)
const width = ref(0)
const data = ref({
  lines:[]
})
const resData = ref([])

onMounted(()=>{
  init()
  window.addEventListener('resize', removeLine);
  window.addEventListener('resize', makeLineData);
  window.addEventListener('resize', ()=>{
    width.value = document.getElementsByClassName("diagram__page")[0].scrollWidth
  });
})
onBeforeUnmount(()=>{
  window.removeEventListener('resize', removeLine);
  window.removeEventListener('resize', makeLineData);
  window.removeEventListener('resize', ()=>{
    width.value = document.getElementsByClassName("diagram__page")[0].scrollWidth
  });
})
const removeLine = () =>{
  document.querySelectorAll("#line").forEach(obj=>obj.remove())
}
const init = ()=>{
  makeResponsibilityDiagram(dummys)
  makeLineData()
  // css에서 svg height를 부모 요소의 100%로 지정했었다.
  // 부모의 css속성중엔 overflow: auto가 있다. 그 결과 브라우저의 높이를 줄이면 전체 view 길이는 일정하나,
  // height가 줄어들어 svg height 또한 줄어들어 line이 짤리는 현상이 있었다.
  // 따라서 부모의 view 높이를 불러와서 svg style에 적용
  console.log(document.getElementsByClassName("diagram__page")[0].clientWidth)
  console.log(document.getElementsByClassName("diagram__page")[0].scrollLeft)
  console.log(document.getElementsByClassName("diagram__page")[0].scrollWidth)
  width.value = document.getElementsByClassName("diagram__page")[0].scrollWidth
  height.value = document.getElementsByClassName("diagram__page")[0].scrollHeight
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
const makeLineData = () =>{
  for (let obj1 of resData.value) {
    for (let obj2 of resData.value) {
      // 기준 데이터의 그룹이 비교 데이터의 상위그룹과 동일하면 parent - child 구조
      if (obj1.groupCd === obj2.upGroupCd) {
        const parentElementCoor = document.getElementById("lines").getBoundingClientRect()
        const fromElement = document.getElementById(obj1.groupCd)
        const toElement = document.getElementById(obj2.groupCd)
        const fromCoordination = fromElement.getBoundingClientRect()
        const toCoordination = toElement.getBoundingClientRect()
        const coordination = {}
        // 부모 기준이 아니라 뷰포트 기준이기 때문에 뷰포트에서 부모의 좌표를 빼야함
        coordination.x1 = fromCoordination.left + fromCoordination.width / 2 - parentElementCoor.left // from x coordination
        coordination.x2 = toCoordination.left + toCoordination.width / 2 - parentElementCoor.left// to x coordination
        coordination.y1 = fromCoordination.top + fromCoordination.height - parentElementCoor.top// from y coordination
        coordination.y2 = toCoordination.top - parentElementCoor.top -5 // to y coordination
        data.value.lines.push(coordination)
      }
    }
  }
}
</script>


<style scoped>
.diagram__page{
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  background-color: rgb(235, 239, 241);
  overflow: auto;
}
.lines{
  position: absolute;
}
</style>