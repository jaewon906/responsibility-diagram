<template>
  <div class="ur-input__wrapper">
    <input :class="inputClass"
           ref="$input"
           v-bind:value="modelValue"
           @keydown="onKeyDownEnter"
           @input="onInput"
           @click="()=>{selected = true}"
           @focusout="()=>{selected = false; hasError = false;}"
           :placeholder="placeholder"
           :type="type"
    />
    <div v-if="hasError" class="error_reason__field">
      <span>{{errorMessage}}</span>
    </div>
  </div>

</template>

<script setup>
import {computed, ref} from "vue";

  const props = defineProps(['placeholder', 'type', 'modelValue'])
  const emit = defineEmits(['enter', 'update:modelValue'])

  const hasError = ref(false)
  const selected = ref(false)
  const $input = ref()
  const errorMessage = ref('')

  const inputClass = computed(()=>{
    return{
      'ur-input hasError': hasError.value,
      'ur-input selected': !hasError.value && selected.value,
      'ur-input': !hasError.value && !selected.value
    }
  })
  const onKeyDownEnter = (e) => {
      if (e.keyCode === 13) {
        emit('enter')
      }
  };

  const onInput = (e) => {
    selected.value = true
    hasError.value = false
    let value = e.target.value
    emit('update:modelValue', value.replaceAll(" ", ""))
  };

  const focus = () => {
    $input.value.focus()
  }

  defineExpose({
    hasError, errorMessage, focus
  })
</script>
<style scoped lang="scss">
  .ur-input{
    height:100%;
    width: calc(100% - 22px);
    padding: 0 10px;
  }
  .ur-input__wrapper{
    position: relative;
    width: 100%;
    height: 50px;
  }
  .hasError{
    background-color: #fde6e6;
    border:1px solid #ff3d3d;
    outline:1px solid #ff3d3d;
  }
  .error_reason__field{
    position :absolute;
    left: -0.5px;
    width:100%;
    display: flex;
    text-align: center;
    > span{
      display: inline-block;
      line-height: 12px;
      margin-top: 1px;
      background-color: #fa5151;
      width:calc(100% + 11px);
      height:15px;
      color:white;
      font-size: 12px;
    }
  }
  .selected{
    background-color: #e1ebff;
    border:1px solid cornflowerblue;
    outline:1px solid cornflowerblue;
  }
  input{
    //border-radius: 5px;
    border: 1px solid gray;
  }


</style>