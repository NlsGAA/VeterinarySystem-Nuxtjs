<template>
    <div class="d-flex col-md-12">
        <div class="flex-column justify-content-center mt-5">
            <div class="image-container">
                <img
                    class="rounded-circle border border-warning shadow-sm"
                    :src="userData.profile_photo_url"
                    alt="profile-image"
                />
                <div>
                    <font-awesome-icon icon="fa-solid fa-pen-to-square" class="edit-profile-img-icon" />
                </div>
            </div>
            <h2>{{ userData.name }}</h2>
        </div>
        <div class="ms-5 col-md-8 p-3">
            <div class="w-100 d-flex justify-content-end mb-3">
                <button v-if="localIsEditing" type="button" class="btn btn-danger me-2 active-none" @click="handleUserForm(true)">
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                    Cancelar
                </button>
                <button class="btn btn-primary" @click="handleUserForm()">
                    <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                    Editar
                </button>
            </div>
            <fieldset disabled>
                <div class="d-flex">
                    <div class="flex-column w-100 me-4">
                        <label class="fw-bold">Cellphone:</label>
                        <input class="form-control" id="cellphone" v-model="userData.cellphone"/>
                    </div>
                    <div class="flex-column w-100">
                        <label class="fw-bold">Phone:</label>
                        <input class="form-control" v-model="userData.phone"/>
                    </div>
                </div>
                <div class="mt-3 flex-column w-100">
                    <label class="fw-bold">Email:</label>
                    <input class="form-control" v-model="userData.email" required/>
                </div>
                <div class="d-flex mt-3">
                    <div class="flex-column w-100 me-4">
                        <label class="fw-bold">CEP:</label>
                        <div class="d-flex">
                            <input class="form-control" id="cepInput" @keyup="searchCep()" v-model="userData.cep" :disabled="isLoading"/>
                            <Loading :height="25" :width="25" v-if="isLoading" style="margin-left: -30px; margin-top: 6px;"></Loading>
                        </div>
                        <span class="text-danger fw-bold" v-if="errors">{{ errors }}</span>
                    </div>
                    <div class="flex-column w-100">
                        <label class="fw-bold">City:</label>
                        <input class="form-control" name="city" id="city" v-model="userData.city"/>
                    </div>
                </div>
                <div class="d-flex w-100 mt-3">
                    <div class="flex-column w-50 me-4">
                        <label class="fw-bold">Complement:</label>
                        <input class="form-control" v-model="userData.complement"/>
                    </div>
                    <div class="d-flex w-100">
                        <div class="flex-column col-md-10 me-2">
                            <label class="fw-bold">Street:</label>
                            <input class="form-control" v-bind:value="userData.street"/>
                        </div>
                        <div class="flex-column w-25">
                            <label class="fw-bold">N°:</label>
                            <input class="form-control" v-model="userData.number"/>
                        </div>
                    </div>
                </div>
                <button class="btn btn-success mt-3 w-25" @click="updateUserData()">Salvar</button>
            </fieldset>
        </div>
    </div>
</template>

<script src="./script.js"></script>

<style>

.image-container{
    position: relative;
    display: inline-block;
}

.edit-profile-img-icon {
    position: absolute;
    top: 75px;
    right: 70px;
    display: none;
    color: #fff;
    font-size: 40px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px;
    border-radius: 50%;
}

.image-container:hover {
    & .edit-profile-img-icon {
        display: block; 
    }
    cursor: pointer;
}

.image-container img {
    width: 200px;
}

div h2 {
    margin-top: 1rem;
}

</style>