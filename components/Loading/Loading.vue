<template>
    <div class="inside-circle" :style="{ height: `${height}px`, width: `${width}px` }"></div>
</template>

<script src="./script.js"></script>

<style>
* {
    overflow: hidden;
}

.inside-circle {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
