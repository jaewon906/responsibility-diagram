
<template>
  <div class="diagram__page">
    <diagram-indicator/>
    <diagram-row :data="props.data"/>
  </div>
</template>


<script setup>
import {onMounted} from "vue";
import DiagramRow from "@/components/DiagramRow.vue";
import DiagramIndicator from "@/components/DiagramIndicator.vue";

const props = defineProps({
  data:{
    type: Array,
    default: {},
  }
})

onMounted(()=>{init()})

const init = ()=>{}

</script>


<style scoped>
.diagram__page{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
  background-color: rgb(235, 239, 241);
  overflow: auto;
  padding: 20px;
}
</style>