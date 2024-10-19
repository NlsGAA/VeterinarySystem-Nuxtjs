<script setup>
definePageMeta({ layout: "default" });

const username = ref(null);

onMounted(() => {
  username.value = useCookie("User");
})
</script>

<!-- <ul class="list-unstyled d-flex flex-row mt-3 mx-auto">
  <li class="mx-2"><a href="/" class="text-decoration-none text-black fs-6 m-3">Home</a></li>
  <li class="mx-2"><a href="/" class="text-decoration-none text-black fs-6 m-3">Dashboard</a></li>
  <li class="mx-2"><a href="/" class="text-decoration-none text-black fs-6 m-3">Registrar paciente</a></li>
  <li class="mx-2"><a href="/" class="text-decoration-none text-black fs-6 m-3">Pacientes internados</a></li>
  <li class="mx-2"><a href="/" class="text-decoration-none text-black fs-6 m-3">Cadastrar donos</a></li>
</ul> -->

<template>
  <div class="container-fluid" style=" border-bottom: 1px solid #fff;">
    <nav class="d-flex align-items-center justify-content-around container p-1">
      <div class="">
        <div class="">
          <b>teste</b>
        </div>
      </div>
      <div class="w-50">
        <div>
          <input type="search" class="form-control w-100 text-center " data-bs-theme="dark" placeholder="Pesquisar" aria-label="Pesquisar" style="outline: none; box-shadow: none; ">
        </div>
      </div>
      <div class="">
        <img
          class="rounded-circle border border-warning shadow-sm"
          src="https://i.pinimg.com/originals/6d/5f/c6/6d5fc60bae3dc6139eefa31af206596f.jpg"
          alt="profile-image"
          style="width: 50px; height: 50px"
        />
        <span class="fw-bold ms-2">{{ username }}</span>
      </div>
    </nav>
  </div>

  <div class="d-flex justify-content-center vh-100 templateSlot">
    <div class="col-md-8">
      <slot />
    </div>
  </div>
</template>

<style>
  .templateSlot {
    margin-top: 60px;
  }
</style>
