<script></script>

<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
  <div class="col-md-6 bg-white d-flex shadow-lg rounded align-items-center p-2 mx-auto">
    <slot />
  </div>
</div>
</template>

<!-- <div class="d-flex justify-content-center align-items-center vh-100 col-md-12"></div>
<div class="mx-auto col-md-12"></div> -->

<style>
body {
  background: linear-gradient(90deg, #4caf50, #009688);
  height: 100%;
}
</style>
