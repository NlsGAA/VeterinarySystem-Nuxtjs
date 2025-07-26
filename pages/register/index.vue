<template>
  <div class="d-flex justify-content-center align-items-center vh-100 container">
    <div class="col-md-3 d-flex-column shadow-lg rounded align-items-center p-2 mx-auto content-container">
      <div>
        <h2
          class="fw-bold text-center text-uppercase fs-1"
          style="color: #343A40;"
        >
          Sign Up
        </h2>
      </div>
      <div class="col-md-12 p-2">
        <div class="p-2 d-flex-inline">
          <div class="mb-3">
            <h5 v-if="form.name" class="italic">
              Dr(a): {{ form.name }}
              <font-awesome-icon icon="fa-solid fa-pen" class="text-grey fs-8 signature-icon"/>
            </h5>
          </div>

          <div class="mb-2">
            <Input
              v-model="form.name"
              type="text"
              label="Nome"
            >
              <template #icon-end>
                <font-awesome-icon icon="fa-solid fa-user" />
              </template>
            </Input>
            <small class="name-alert-message">Documentos são assinados com esse nome.</small>
          </div>


          <div class="mb-2">
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

          <div class="mb-2">
            <Input
              v-model="form.password"
              type="password"
              label="Senha"
            >
              <template #icon-end>
                <font-awesome-icon icon="fa-solid fa-lock" />
              </template>
            </Input>
          </div>

          <div class="w-100">
            <span class="fw-bold fs-8"
              >Já possui uma conta?
              <NuxtLink href="/" class="link-opacity-50-hover"
                >Acesse</NuxtLink
              ></span
            >
          </div>

          <VButton
            label="Registrar-se"
            @click="handleRegister"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style>
.content-container {
  position: absolute;
  backdrop-filter: blur(10px);
}

.name-alert-message {
  font-size: 12px;
}

.signature-icon {
  font-size: 16px;
  margin-left: 5px;
}
</style>