<script setup>
definePageMeta({ layout: "guest" });

const userData = ref({
  name: "",
  email: "",
  password: "",
});

const handleRegister = async () => {
  const registerData = await useApi("register", { method: "POST", body: userData.value });

  if (registerData.data.value.status == 200) {
    return navigateTo("/login");
  }
};
</script>

<template>
  <div class="col-md-3 w-50 d-flex align-center row">
    <img
      src="public\img\Mask-Uses-3--Register-Page.png"
      alt=""
      class="w-50 mx-auto rounded pe-none"
    />
  </div>

  <div class="col-md-4 p-2 w-50 m-2">
    <h2>Dr(a): {{ userData.name }}</h2>
    <div class="p-2 d-flex-inline">
      <form @submit.prevent="handleRegister">
        <label class="fw-bold mb-1">Name:</label>
        <input
          class="rounded w-100 mb-2 form-control"
          v-model="userData.name"
          maxlength="50"
          type="text"
        />

        <label class="fw-bold mb-1">Email:</label>
        <input
          class="rounded w-100 mb-2 form-control"
          v-model="userData.email"
          maxlength="50"
          type="email"
        />

        <label class="fw-bold mb-1">Password:</label>
        <input
          class="rounded w-100 mb-2 form-control"
          v-model="userData.password"
          type="password"
        />

        <div class="w-100">
          <span class="fw-bold fs-8"
            >Já possui uma conta?
            <NuxtLink href="/login" class="link-opacity-50-hover"
              >Acesse</NuxtLink
            ></span
          >
        </div>

        <button class="btn btn-success w-50 mt-3" type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<style>

body {
  background: linear-gradient(90deg, #4caf50, #009688);
  height: 100%;
}
</style>
