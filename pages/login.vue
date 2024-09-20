<script setup>
definePageMeta({ layout: "guest" });

const form = ref({
  email: "",
  password: "",
});

const handleLogin = async () => {
  // await useFetch("http://localhost:8000/sanctum/csrf-cookie", {
  //   credentials: "include",
  // });
  // const cookie = useCookie("XSRF-TOKEN");
  // const loginData = await useFetch("http://localhost:8000/api/login", {
  //   method: "POST",
  //   body: form.value,
  //   credentials: "include",
  //   watch: false,
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     "X-XSRF-TOKEN": cookie.value,
  //   },
  // });
  // const bearerToken = loginData.data.value.data.token;
  // const patientsData = await useFetch("http://localhost:8000/api/patients/", {
  //   method: "GET",
  //   headers: {
  //     Authorization: "Bearer " + bearerToken,
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     "X-XSRF-TOKEN": cookie.value,
  //   },
  // });
  // const patients = patientsData.data.value.pacientes;
};
</script>

<template>
  <div class="container">
    <div class="col-md-8 offset-md-2 bg-white d-flex shadow-lg rounded">
      <div class="col-md-4 w-50 p-2">
        <img
          src="public\img\medicine_b1ol_login_page.png"
          class="w-100 border-end border-dark pe-none"
        />
      </div>

      <div class="col-md-4 w-50 p-2">
        <h3>Seja-bem vindo(a) {{ form.email }}!</h3>
        <div class="p-4">
          <form @submit.prevent="handleLogin">
            <label class="fw-bold mb-1">Email:</label>
            <input
              class="rounded w-100 mb-2 form-control"
              v-model="form.email"
              maxlength="50"
              type="email"
            />
            <label class="fw-bold mb-1">Password:</label>
            <input
              class="rounded w-100 mb-1 form-control"
              v-model="form.password"
              type="password"
            />
            <span class="fw-bold fs-8">
              Não possui uma conta? <a href="">Cadastre-se</a>
            </span>
            <button class="btn btn-success w-50 mt-3" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
