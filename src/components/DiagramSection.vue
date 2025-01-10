
<template>
  <div class="diagram__section">
    <diagram-element v-for="(obj, idx) in props.data" :data="obj"/>
  </div>
</template>


<script setup>
import {onMounted} from "vue";
import DiagramElement from "@/components/DiagramElement.vue";

const props = defineProps({
  data:{
    type: Array,
    default: [],
  }
})
onMounted(()=>{init()})

const init = ()=>{}

</script>


<style scoped>
.diagram__section{
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 60px;
  padding-bottom: 20px;
  width: 100%;
  min-width: 100%;
  background-color: rgb(235, 239, 241);
}
</style>