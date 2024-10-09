<script setup>
definePageMeta({ layout: "default" });

const username = ref(null);

onMounted(() => {
  username.value = useCookie("username");
})


</script>

<template>
  <div class="container-fluid bg-success-subtle">
    <nav class="d-flex align-items-center justify-content container-fluid">
      <div class="d-flex align-items-center">
        <img
          class="rounded-circle border border-warning shadow-sm"
          src="https://i.pinimg.com/originals/6d/5f/c6/6d5fc60bae3dc6139eefa31af206596f.jpg"
          alt="profile-image"
          style="width: 50px; height: 50px"
        />
        <span class="fw-bold ms-2">{{ username }}</span>
      </div>
      <ul class="list-unstyled d-flex flex-row mt-3 mx-auto">
        <li class="mx-2"><a href="/" class="text-decoration-none text-black fs-6 m-3">Home</a></li>
        <li class="mx-2"><a href="/" class="text-decoration-none text-black fs-6 m-3">Dashboard</a></li>
        <li class="mx-2"><a href="/" class="text-decoration-none text-black fs-6 m-3">Registrar paciente</a></li>
        <li class="mx-2"><a href="/" class="text-decoration-none text-black fs-6 m-3">Pacientes internados</a></li>
        <li class="mx-2"><a href="/" class="text-decoration-none text-black fs-6 m-3">Cadastrar donos</a></li>
      </ul>
    </nav>
  </div>

  <slot></slot>
</template>

<style>
body {
  background-color: #fff;
}
</style>
