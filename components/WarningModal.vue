<template>
    <div v-if="isVisible" class="modal-overlay">
        <div class="warning-modal-content">
            <div class="d-flex justify-content-end fs-4">
                <font-awesome-icon icon="fa-solid fa-xmark" class="text-grey pe-auto" @click="$emit('close')" />
            </div>
            <div class="d-flex justify-content-center row text-center">
                <font-awesome-icon icon="fa-solid fa-circle-exclamation" class="text-warning pe-auto warning-icon mb-2" />
                <h2 class="mb-3">{{ title }}</h2>
                <span class="fs-5">{{ text }}</span>
                <div class="p-3 w-100 m-2">
                    <button class="btn btn-danger fs-5 me-2" @click="$emit('close')">Cancelar</button>
                    <button class="btn btn-primary fs-5 ms-2" @click="$emit('confirmed')">Confirmar</button>
                </div>
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
    title: {
        type: String,
        default: "Tem certeza?"
    },
    text: {
        type: String,
        default: "Tem certeza que deseja excluir este registro?"
    }
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

.warning-modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 90%;
    max-width: 500px;
}

.warning-icon {
    font-size: 100px;
}
</style>