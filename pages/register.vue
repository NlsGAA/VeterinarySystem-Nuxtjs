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
  <!-- <div class="col-md-3 w-50 d-flex align-center row">
    <img
      src="public\img\Mask-Uses-3--Register-Page.png"
      alt=""
      class="w-50 mx-auto rounded pe-none"
    />
  </div> -->
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="col-md-3 d-flex-column shadow-lg rounded align-items-center p-2 mx-auto">
      <div>
        <h2 class="fw-bold mb-1 text-center text-uppercase text-white fs-1">
          Sign Up
        </h2>
      </div>
      <div class="col-md-12 p-2">
        <div class="p-2 d-flex-inline">
          <i>
            <h4 v-if="userData.name != ''">
              Dr(a): {{ userData.name }}
              <font-awesome-icon icon="fa-solid fa-pen" class="text-grey fs-8 signature-icon"/>
            </h4>
          </i>
          <form @submit.prevent="handleRegister">
            <label class="fw-bold mb-1">Name:</label>
            <input
            class="rounded w-100 form-control"
            v-model="userData.name"
            maxlength="50"
            type="text"
            />
            <p class="name-alert-message mb-2">Os documentos serão assinados com esse nome.</p>

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
                <NuxtLink href="/" class="link-opacity-50-hover"
                  >Acesse</NuxtLink
                ></span
              >
            </div>

            <button class="btn btn-info w-50 mt-3" type="submit">Registrar-se</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.name-alert-message {
  font-size: 12px;
}

.signature-icon {
  font-size: 16px;
  margin-left: 5px;
}
</style>