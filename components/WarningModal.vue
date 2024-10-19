<template>
    <div v-if="isVisible" class="modal-overlay">
        <div class="modal-content">
            <div class="d-flex justify-content-end fs-4">
                <font-awesome-icon icon="fa-solid fa-xmark" class="text-grey pe-auto" @click="$emit('close')" />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    isVisible: {
        type: Boolean,
        default: false
    },
})
</script>

<style>
.modal-overlay {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 90%;
    max-width: 1000px;
}
</style>