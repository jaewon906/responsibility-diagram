
<template>
  <div class="diagram__section" :style="gridType">
    <diagram-element v-for="(obj, idx) in props.data"
                     :data="obj"
                     :key="idx"
    />
  </div>
</template>


<script setup>
import {computed, onMounted} from "vue";
import DiagramElement from "@/components/DiagramElement.vue";

const props = defineProps({
  data:{
    type: Array,
    default: [],
  }
})
onMounted(()=>{init()})

const init = ()=>{}
const gridType = computed(()=>{
  let columns = ''
  let grid = "display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;"
  if(props.data.length === 1) columns += 'grid-column: span 5/6;'
  if(props.data.length === 2) columns += 'grid-column: span 1;'
  if(props.data.length === 3) columns += 'grid-column: span 1;'
  if(props.data.length === 4) columns += 'grid-column: span 1;'
  if(props.data.length === 5) columns += 'grid-column: span 1;'
  if(props.data.length >= 6) columns += 'grid-column: span 2/3;'
  return grid + columns;

})

</script>

<style scoped>
.diagram__section{
  position:relative;
  gap: 20px 60px;
  padding: 20px;
  min-width: 700px;
  max-width: 100%;
  background-color: rgb(235, 239, 241);
}
</style>