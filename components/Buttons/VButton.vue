<template>
    <button
        class="mt-3 reset-button"
        id="button-ttt"
        :disabled="isLoading"
        @click="method"
        >
        <span>{{ label }}</span>
        <slot name="icon-end"></slot>
    </button>
</template>

<script src="./script.js"></script>

<style scoped>
    .reset-button {
        border: none !important;
        box-shadow: none !important;
        background-color: transparent !important;
    }

    #button-ttt {
        background: #F8F9FA !important;
        width: 100% !important;
        padding: 5px;
        border-radius: 10px;
        font-weight: 500;
    }

    #button-ttt:hover {
        background: #343A40 !important;
        color: #fff !important;
    }
</style>