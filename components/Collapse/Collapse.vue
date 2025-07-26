<template>
    <div class="btn w-100">
        <div
            class="flex justify-content-between align-items-center text-start fw-bold fs-5 bg-light p-2 rounded"
            @click="toggleCollapse"
        >
            {{ title }}
            <font-awesome-icon :icon="isOpen ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'" />
        </div>
        <div class="container">
            <div
                ref="content"
                class="collapse-content overflow-hidden"
                id="collapse-content"
            >
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script src="./script.js"></script>