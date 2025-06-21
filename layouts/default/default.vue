<template>
  <div class="col-md-12 nav-bar-container" style=" border-bottom: 1px solid #fff;">
    <nav class="d-flex align-items-center justify-content-around container p-1">
      <div class="">
        <div class="fs-4 menu-icon">
          <font-awesome-icon icon="fa-solid fa-bars" @click="toggleMenu" style="cursor: pointer;"/>
        </div>
      </div>
      <div class="w-50">
        <div>
          <input type="search" class="form-control w-100 text-center " data-bs-theme="white" placeholder="Pesquisar" aria-label="Pesquisar" style="outline: none; box-shadow: none; ">
        </div>
      </div>
      <div class="d-flex">
        <img
          class="rounded-circle border border-warning shadow-sm"
          :src="user?.profile_photo_url"
          alt="profile-image"
          style="width: 50px; height: 50px"
        />
        <div class="d-flex flex-column">
          <span class="fw-bold ms-2">{{ user?.name }}</span>
          <span class="ms-2">Desenvolvedor</span>
        </div>
      </div>
    </nav>
  </div>

 

  <div class="sidebar" id="sidebar">
    <div class="d-flex justify-content-end mb-5">
      <div class="me-4 fs-4">
        <font-awesome-icon icon="fa-solid fa-xmark" class="text-grey pe-auto close-modal-icon" @click="toggleMenu" />
      </div>
    </div>
    <div class="d-flex flex-column justify-content-center">
      <ul>
        <a href="/app/patients" class="text-decoration-none text-white fs-6">
        <li class="mx-2">
            <font-awesome-icon icon="fa-solid fa-house" class="me-2"/>
            Home
          </li>
        </a>
        <hr />
        <a role="button" class="text-decoration-none text-white fs-6" @click.prevent="toggleDropdown($event)">
          <li class="mx-2" id="profileInfoDropDown">
            <font-awesome-icon icon="fa-solid fa-user" class="me-2"/>
            Meus dados
            <font-awesome-icon icon="fa-solid fa-chevron-right" class="dropdown-arrow-icon"/>
          </li>
        </a>
        <div v-if="isDropDownVisible.profileInfoDropDown" class="d-flex flex-column offset-md-3 no-wrap">
          <li ><a href="/app/in/myprofile" class="dropdown-item">Perfil</a></li>
          <li ><a href="/settings" class="dropdown-item">Pacientes</a></li>
        </div>
        <a href="/app/dashboard/" class="text-decoration-none text-white fs-6">
          <li class="mx-2">
            <font-awesome-icon icon="fa-solid fa-chart-line" class="me-2"/>
            Dashboard
          </li>
        </a>
        <a role="button" class="text-decoration-none text-white fs-6" @click.prevent="toggleDropdown($event)">
          <li class="mx-2" id="registerDataDropDown">
            <font-awesome-icon icon="fa-solid fa-clipboard-list" class="me-2"/>
            Cadastrar
            <font-awesome-icon icon="fa-solid fa-chevron-right" class="dropdown-arrow-icon"/>
          </li>
        </a>
        <div v-if="isDropDownVisible.registerDataDropDown" class="d-flex flex-column offset-md-3 no-wrap">
          <li><a href="/app/patients/forms/new" class="dropdown-item">Pacientes</a></li>
          <li><a href="/app/tutors/forms/new" class="dropdown-item">Tutor(a)</a></li>
        </div>
      </ul>
    </div>
  </div>

  <div class="d-flex justify-content-center vh-100 templateSlot">
    <div class="col-md-12">
      <slot />
    </div>
  </div>

</template>

<script src="./script.js"></script>

<style>
  body {
    background-color: #fdfbfb !important;
    /* overflow: hidden; */
  }

  .nav-bar-container {
    background-color: #6bb120;
  }

  .templateSlot {
    margin-top: 60px;
  }

  .sidebar {
    width: 250px;
    height: 100%;
    background-color: #4d7f17;
    color: #fff;
    position: fixed;
    top: 0;
    left: -250px;
    transition: left 0.3s ease;
    padding-top: 20px;
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

ul li:hover{
  background-color: #6bb120;
}

.dropdown-arrow-icon {
  float: right;
  height: 12px;
  margin-top: 5px;
}

.close-modal-icon:hover {
  color: #6bb120;
}

</style>
