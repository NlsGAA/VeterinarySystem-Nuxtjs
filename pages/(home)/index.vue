<script setup>
import { handleLogin, errors, isLoading } from "~/stores/useAuthStore";

definePageMeta({ layout: "guest" });

const form = ref({
  email: "",
  password: "",
});

if(form.value.email !== "") {
  console.log(form.value.email)
}

function maskEmailName() {
  const email = form.value.email;
  const name = email.split("@")[0];
  form.nameMasked = name;
}

const login = () => { handleLogin(form.value) }
</script>

<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="col-md-6 bg-white d-flex shadow-lg rounded align-items-center p-2 mx-auto content-container">
      <div class="col-md-4 w-50 p-2 d-flex">
        <img
          src="public\img\medicine_b1ol_login_page.png"
          class="w-100 border-end border-dark pe-none mx-auto"
        />
      </div>

      <div class="col-md-4 w-50 p-2 m-2">
        <div v-if="errors != undefined">
          <span class="text-danger fw-bold">{{ errors }}</span>
        </div>
        <h3>Seja-bem vindo(a) {{ form?.nameMasked }}!</h3>
        <div class="p-2 d-flex-inline">
          <form @submit.prevent="login">
            <div class="container-fluid">
              <label class="fw-bold mb-1">Email:</label>
              <div class="d-flex ms-6">
                <span
                  class="input-group-text rounded-start-pill"
                  id="addon-wrapping"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-envelope-at"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"
                    />
                    <path
                      d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"
                    /></svg
                ></span>
                <input
                  type="text"
                  class="form-control rounded-end-pill"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="addon-wrapping"
                  v-model="form.email"
                  style="box-shadow: none; outline: none"
                />
              </div>
            </div>
            <div class="container-fluid mt-2 mb-2">
              <label class="fw-bold mb-1">Password:</label>
              <div class="input-group flex-nowrap">
                <span
                  class="input-group-text rounded-start-pill"
                  id="addon-wrapping"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-lock"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"
                    /></svg
                ></span>
                <input
                  type="password"
                  class="form-control rounded-end-pill disabled"
                  placeholder="*********"
                  aria-label="Email"
                  aria-describedby="addon-wrapping"
                  v-model="form.password"
                  style="box-shadow: none; outline: none"
                />
              </div>
            </div>
            <span class="fw-bold fs-8">
              Não possui uma conta?
              <NuxtLink href="/register" class="link-opacity-50-hover">
                Cadastre-se
              </NuxtLink>
            </span>
            <button class="btn btn-success w-50 mt-3 flex-column align-items-center justify-content-center" :disabled="isLoading">
              <Loading v-if="isLoading" :height="25" :width="25"></Loading>
              <span v-if="!isLoading">Login</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>