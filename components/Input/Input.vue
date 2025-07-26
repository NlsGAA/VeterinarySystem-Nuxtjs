<template>
  <div class="div-stl-zero">
    <div class="input-container col-md-11">
      <small>{{ label }}</small>
      <input
        class="reset-input input-stl-zero"
        :type="type"
        :placeholder="placeholder || label"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
    <slot name="icon-end"></slot>
  </div>
</template>

<script src="./script.js"></script>

<style scoped>
    .reset-input {
      border: none !important;
      box-shadow: none !important;
      padding: 0 !important;
      margin: 0 !important;
      background-color: transparent !important;
      outline: none !important;
      border-radius: 0 !important;
      color: inherit !important;
      font-size: inherit !important;
      line-height: inherit !important;
    }

    .div-stl-zero {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 4dvh;
        border-bottom: 1px solid #E0E0E0;
        padding: 5px;
    }

    .input-container {
        display: flex;
        align-items: center;
    }

    small {
        position: absolute;
        font-size: 12px;
        font-weight: 500;
        margin-bottom: 35px !important;
        color: #212529;
        pointer-events: none;
        white-space: nowrap;
        display: none;
    }

    .input-stl-zero {
        width: 100%;
        color: #212529;
        background-color: transparent;

        &::placeholder {
            color: #212529;
        }
    }
</style>