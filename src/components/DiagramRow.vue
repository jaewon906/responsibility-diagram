
<template>
    <!--view-->
    <diagram-section v-if="props.data.length > 0"  :data="props.data"/>
    <!--end view-->

    <!--recursive-->
    <diagram-row v-for="(items, idx) in props.data"
                 :data="items.children"
                 :key="idx"/>
    <!--end recursive-->
</template>


<script setup>
import {onMounted} from "vue";
import DiagramSection from "@/components/DiagramSection.vue";
import DiagramRow from "@/components/DiagramRow.vue";

const props = defineProps({
  data:{
    type: Array,
    default: [],
  }
})

onMounted(()=>{init()})

const init = ()=>{}

const forwardPage = ()=>{
  alert("이동")
}
</script>


<style scoped>

</style>