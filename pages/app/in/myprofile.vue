<template>
    <div class="flex col-md-12">
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
            <div class="w-100 flex justify-content-end mb-3">
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
                <div class="flex">
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
                <div class="flex mt-3">
                    <div class="flex-column w-100 me-4">
                        <label class="fw-bold">CEP:</label>
                        <input class="form-control" id="cepInput" @keyup="searchCep()" v-model="userData.cep"/>
                    </div>
                    <div class="flex-column w-100">
                        <label class="fw-bold">City:</label>
                        <select class="form-select" name="city" id="city" v-model="userData.city">
                            <option value="1">São Paulo</option>
                            <option value="2">Rio de Janeiro</option>
                            <option value="3" selected>Curitiba</option>
                        </select>
                    </div>
                </div>
                <div class="flex w-100 mt-3">
                    <div class="flex-column w-50 me-4">
                        <label class="fw-bold">Complement:</label>
                        <input class="form-control" v-model="userData.complement"/>
                    </div>
                    <div class="flex w-100">
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

<script src="./script.js">

// async function updateUserData() {
//     const response = await useApi(
//         "user/update",
//         {method: "POST", body: userData.value}
//     );

//     console.log(response);
// }

// function searchCep() {
//     const cep = $('#cepInput').val();
    
//     if(cep.length == 8) {
//         const self = this;
//         $.ajax({
//             url: 'https://viacep.com.br/ws/' + cep + '/json/',
//             method: 'GET',
//             success: function(response) {
//                 self.userData.cep = response.cep;
//                 self.userData.city = response.localidade;
//                 self.userData.street = response.logradouro;
//             },
//             error: function(error) {
//                 console.log(error);
//             }
//         });
//     }

//     // $('#cepInput').mask('00000-000');
// }
</script>

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