<template>
    <div class="btn w-100" @click="toggleCollapse">
        <div class="flex justify-content-between align-items-center text-start fw-bold fs-5 bg-light p-2 rounded">
            {{ title }}
            <font-awesome-icon :icon="isOpen ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'" />
        </div>
        <div class="container">
            <div ref="content" class="collapse-content" id="collapse-content" style="overflow: hidden;">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script src="./script.js"></script>