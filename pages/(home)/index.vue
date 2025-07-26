<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="col-md-6 bg-white d-flex shadow-lg rounded align-items-center p-2 mx-auto content-container">
      <div class="col-md-4 w-100 p-2 m-2">
        <div v-if="errors != undefined">
          <span class="text-danger fw-bold">{{ errors }}</span>
        </div>
        <h3 class="text-center">Bem-vindo de volta</h3>

        <div class="d-flex-inline col-md-12 p-2">
          <div class="">
            <Input
              v-model="form.email"
              type="email"
              label="Email"
            >
              <template #icon-end>
                <font-awesome-icon icon="fa-solid fa-envelope" />
              </template>
            </Input>
          </div>

          <div class="mt-3 mb-2">
            <Input
              v-model="form.password"
              type="password"
              label="Password"
            >
              <template #icon-end>
                <font-awesome-icon icon="fa-solid fa-lock" />
              </template>
            </Input>
          </div>

          <button
            class="mt-3 reset-button"
            id="button-ttt"
            :disabled="isLoading"
            @click="submitLoginForm"
          >
            <!-- <Loading v-if="isLoading" :height="25" :width="25" /> -->
            <span v-if="!isLoading">Login</span>
            <font-awesome-icon icon="fa-solid fa-arrow-right" size="md" id="arrow-login-icon" class="ms-2"/>
          </button>
        </div>

        <span class="text-center">
          Não possui uma conta?
          <NuxtLink href="/register" class="link-opacity-50-hover">
            Cadastre-se
          </NuxtLink>
        </span>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style scoped>
  .reset-button {
    border: none !important;
    box-shadow: none !important;
    background-color: transparent !important;
  }

  #button-ttt {
    background: #F8F9FA !important;
    width: 100% !important;
    padding: 5px;
    border-radius: 10px;
    font-weight: 500;
  }

  #button-ttt:hover {
    background: #343A40 !important;
    color: #fff !important;

    #arrow-login-icon {
      transform: translateX(5px);
      transition: transform 0.3s ease;
    }
  }
</style>