<template>
  <button :class="buttonClass" :disabled="disabled" @click="click">
    <slot></slot>
  </button>
</template>

<script setup>
  import {computed} from "vue";

  const emit = defineEmits(['click'])
  const props = defineProps({
    sm:{
      type: Boolean,
      default: false
    },
    small:{
      type: Boolean,
      default: false
    },
    medium:{
      type: Boolean,
      default: false
    },
    large:{
      type: Boolean,
      default: false
    },
    xlarge:{
      type: Boolean,
      default: false
    },
    disabled:{
      type: Boolean,
      default: false
    },
    widthFree:{
      type: Boolean,
      default: false
    },
    main:{
      type: Boolean,
      default: false
    }
  })
  function click(){
    if(!props.disabled)
      emit('click')
 }

  const buttonClass = computed(()=>{
    return {
      'ur-button def': !props.main,
      'ur-button main': props.main,
      'small': props.small,
      'medium': props.medium,
      'large': props.large,
      'xlarge': props.xlarge,
      'widthFree': props.widthFree,
      'disabled': props.disabled,
    }
  })

</script>

<style scoped lang="scss">
.ur-button{
  //margin: 0 0 0 20px;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  border :none;
  font-weight: 400;
  font-size: 16px;
  cursor:pointer;
}
.main{
  transition: 0.1s background-color ease;
  background-color: rgb(21,112,239);
  color:white;
}
.def{
  transition: 0.1s background-color ease;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
  color: #000000;
}
.small{
  width:80px;
}
.medium{
  width:160px;
}
.large{
  width:220px;
}
.xlarge{
  width:300px;
}
.widthFree{
  width:100%;
}
.disabled{
  background-color: #bdcdec;
  cursor:default;
}
.main:hover{
  background-color: #bdcdec
}
.def:hover{
  background-color: #f5f5f5
}
</style>