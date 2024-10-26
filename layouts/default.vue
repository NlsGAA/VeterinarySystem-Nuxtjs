<script setup>
definePageMeta({ layout: "default" });

const username = ref(null);

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}

onMounted(() => {
  username.value = useCookie("User");
})
</script>

<template>
  <div class="col-md-12" style=" border-bottom: 1px solid #fff;">
    <nav class="d-flex align-items-center justify-content-around container p-1">
      <div class="">
        <div class="fs-4 menu-icon">
          <font-awesome-icon icon="fa-solid fa-bars" @click="toggleMenu" style="cursor: pointer;"/>
        </div>
      </div>
      <div class="w-50">
        <div>
          <input type="search" class="form-control w-100 text-center " data-bs-theme="dark" placeholder="Pesquisar" aria-label="Pesquisar" style="outline: none; box-shadow: none; ">
        </div>
      </div>
      <div class="d-flex">
        <img
          class="rounded-circle border border-warning shadow-sm"
          src="https://i.pinimg.com/originals/6d/5f/c6/6d5fc60bae3dc6139eefa31af206596f.jpg"
          alt="profile-image"
          style="width: 50px; height: 50px"
        />
        <div class="d-flex flex-column">
          <span class="fw-bold ms-2">{{ username }}</span>
          <span class="ms-2">Desenvolvedor</span>
        </div>
      </div>
    </nav>
  </div>

  <div class="d-flex justify-content-center vh-100 templateSlot">
    <div class="col-md-8">
      <slot />
    </div>
  </div>

  <div class="sidebar" id="sidebar">
    <div class="d-flex flex-column">
      <ul>
        <li class="mx-2">
          <a href="/" class="text-decoration-none fs-6 m-3">
            <font-awesome-icon icon="fa-solid fa-house" class="me-2"/>
            Home
          </a>
        </li>
        <hr />
        <li class="mx-2"><a href="/" class="text-decoration-none fs-6 m-3">Dashboard</a></li>
        <li class="mx-2"><a href="/patient-register" class="text-decoration-none fs-6 m-3">Registrar paciente</a></li>
        <li class="mx-2"><a href="/hospitalized-patients" class="text-decoration-none fs-6 m-3">Pacientes internados</a></li>
        <li class="mx-2"><a href="/create-new-owner" class="text-decoration-none fs-6 m-3">Cadastrar donos</a></li>
      </ul>
    </div>
  </div>

</template>

<style>
  .templateSlot {
    margin-top: 60px;
  }

  .sidebar {
    width: 250px;
    height: 100%;
    background-color: #333;
    color: #fff;
    position: fixed;
    top: 0;
    left: -250px;
    transition: left 0.3s ease;
    padding-top: 60px;
}

.sidebar ul {
    list-style-type: none;
    padding: 0;
}

.sidebar ul li {
    padding: 15px 20px;
}

.sidebar ul li a {
    color: #fff;
    text-decoration: none;
}

.sidebar.show {
    left: 0;
}
</style>
