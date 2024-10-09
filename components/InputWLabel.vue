<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "Email",
  },
  inputType: {
    type: String,
    default: "email",
  },
  vModel: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <label class="fw-bold mb-1">{{ props.label }}</label>
  <input
    class="rounded w-100 mb-2 form-control"
    maxlength="50"
    :type="props.inputType"
  />
</template>
