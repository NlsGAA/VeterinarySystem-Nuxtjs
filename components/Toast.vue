<template>
    <div v-if="isVisible" class="toast" :class="toastType" @click="close">
      {{ message }}
    </div>
  </template>
  
<script setup>

const props = defineProps({
    isVisible: {
    type: Boolean,
    default: true  
    },
    message: {
    type: String,
    default: 'testeee',
    // required: true
    },
    toastType: {
    type: String,
    default: 'success'
    },
    duration: {
    type: Number,
    default: 3000
    }
});
    
function show() {
    this.isVisible = true;
    setTimeout(this.close, this.duration);
}

function close() {
    this.isVisible = false;
}

</script>
  
  <style scoped>
  .toast {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    transition: opacity 0.5s;
  }
  .success {
    background-color: green;
  }
  .error {
    background-color: red;
  }
  </style>
  