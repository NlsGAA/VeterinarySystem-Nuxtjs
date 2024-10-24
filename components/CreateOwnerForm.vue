<template>

    <div class="col-md-8 shadow-lg bg-white p-2 rounded d-inline-block">
        <form method="POST" @submit.prevent="handleOwnerRegister" enctype="multipart/form-data">
            <div class="row p-3 w-100">
                <div class="mb-2">
                    <div class="">
                        <label for="nome" class="form-label fw-bold">Nome:<span class="text-danger">*</span></label>
                        <input type="text" class="form-control w-100" placeholder="Nome" name="firstName" v-model="form.firstName" required>
                    </div>
                    <div class="">
                        <label for="raca" class="form-label fw-bold">Sobrenome:<span class="text-danger">*</span></label>
                        <input type="text" class="form-control w-100" placeholder="Sobrenome" name="lastName" v-model="form.lastName" required>
                    </div>
                </div>

                <div class="mb-2">
                    <div class="">
                        <label for="especie" class="form-label fw-bold">Email:<span class="text-danger">*</span></label>
                        <input type="text" class="form-control w-100" placeholder="Email" name="email" v-model="form.email" required>
                    </div>
                </div>

                <div class="mb-2">
                    <div class="">
                        <label for="especie" class="form-label fw-bold">Cpf:<span class="text-danger">*</span></label>
                        <input type="text" class="form-control w-100" maxlength="11" placeholder="Cpf" name="cpf" v-model="form.cpf" required>
                    </div>
                </div>

                <div class="mb-2">
                    <div class="">
                        <label for="coloracao" class="form-label fw-bold">Endereço:<span class="text-danger">*</span></label>
                        <input type="text" class="form-control w-100" placeholder="Endereço" name="address" v-model="form.address" required>
                    </div>
                </div>

                <div class="mb-2">
                    <div class="">
                        <label for="coloracao" class="form-label fw-bold">Celular:<span class="text-danger">*</span></label>
                        <input type="text" class="form-control w-100" maxlength="11" placeholder="Celular" name="cellphone" v-model="form.cellphone" required>
                    </div>
                </div>
                <div class="mb-2">
                    <div class="">
                        <label for="coloracao" class="form-label fw-bold">Telefone Residencial:<span class="text-danger">*</span></label>
                        <input type="text" class="form-control w-100" maxlength="11" placeholder="Telefone Residencial" name="cellphone2" v-model="form.cellphone2" required>
                    </div>
                </div>

                <div class="mb-2">
                    <div class="col-md-12">
                        <input class="btn btn-success" type="submit" value="Cadastrar">
                    </div>
                </div>
            </div>
        </form>
    </div>

</template>

<script setup>
let csrfToken = useCookie("XSRF-TOKEN");
const bearerToken = useCookie("JWT-TOKEN");

const form = ref({});

async function handleOwnerRegister() {
    const response = await useFetch("http://localhost:8000/api/owners/update", {
        method: "POST",
        credentials: "include",
        watch: false,
        body: form.value,
        headers: {
            accept: "application/json",
            "X-XSRF-TOKEN": csrfToken.value,
            Authorization: "Bearer " + bearerToken.value
        }
    }).catch((error) => {
        console.log(error);
    });

    const { message, owner, status } = response.data.value;

    console.log(response.data.value);
    console.log(message);
    console.log(owner);
    console.log(status);
}

</script>

<style>

</style>