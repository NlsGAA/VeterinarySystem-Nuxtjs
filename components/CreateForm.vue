<template>
    <div v-if="isVisible" class="modal-overlay">
        <div class="modal-content">
            <div class="d-flex justify-content-end fs-4">
                <font-awesome-icon icon="fa-solid fa-xmark" class="text-grey pe-auto" @click="$emit('close')" />
            </div>
            <span class="fs-2 fw-bold mb-2">Cadastrar paciente:</span>
            <form @submit.prevent="handlePatientRegister" method="POST" enctype="multipart/form-data">
                <div class="row p-3 w-100">
                    <div class="row mb-2">
                        <div class="col-md-5">
                            <label for="image" class="form-label fw-bold fw-bold">Imagem:</label>
                            <input type="file" class="form-control-file" id="image" name="image[]" multiple>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-6">
                            <label for="nome" class="form-label fw-bold">Nome:<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" placeholder="Nome" name="nome" id="nome" v-model="form.name" required>
                        </div>
                        <div class="col-md-6">
                            <label for="raca" class="form-label fw-bold">Raça:<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" placeholder="Raça" name="raca" id="raca" v-model="form.breed" required>
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-md-12">
                            <label for="especie" class="form-label fw-bold">Espécie:<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" placeholder="Espécie" name="especie" id="especie" v-model="form.species" required>
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-md-6">
                            <label for="peso" class="form-label fw-bold">Peso:<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" placeholder="Peso" name="peso" id="peso" v-model="form.weight" required>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label fw-bold">Tipo de Peso:<span class="text-danger">*</span></label>
                            <select class="form-select" name="tipoPeso" id="tipoPeso" v-model="form.weightType" required>
                                <option value="0">Kilos</option>
                                <option value="1">Gramas</option>
                            </select>
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-md-12">
                            <label class="form-label fw-bold">Responsável:<span class="text-danger">*</span></label>
                            <select class="form-select" name="patientOwner" id="patientOwner" v-model="form.owner" required>
                                <option v-for="owner in ownersData" :key="owner.id" :value="owner.id">{{ owner.firstName }} {{ owner.lastName }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-md-12">
                            <label for="coloracao" class="form-label fw-bold">Coloração:<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" placeholder="Coloração" name="coloracao" id="coloracao" v-model="form.color" required>
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-md-6">
                            <label for="idade" class="form-label fw-bold">Idade:<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" placeholder="Idade" name="idade" id="idade" v-model="form.age" required>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label fw-bold">Tipo de Idade:<span class="text-danger">*</span></label>
                            <select class="form-select" name="tipoIdade" id="tipoIdade" v-model="form.ageType" required>
                                <option value="0">Anos</option>
                                <option value="1">Meses</option>
                            </select>
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-md-12">
                            <label for="procedencia" class="form-label fw-bold">Procedência:<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" placeholder="Procedência" name="procedencia" id="procedencia" v-model="form.origin" required>
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-md-12">
                            <label for="motivoCadastro" class="form-label fw-bold">Motivo do cadastro:<span class="text-danger">*</span></label>
                            <select class="form-select" name="motivoCadastro" id="motivoCadastro" v-on:change="internamento()" v-model="form.reason" required>
                                <option value="1" selected>Serviços gerais</option>
                                <option value="2">Internamento</option>
                                <option value="3">Consulta</option>
                            </select>
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div style="display: none" id="internamentoSituacao" >
                            <div class="row mb-2">
                                <div class="col-md-12">
                                    <label for="situacaoInternacao" class="form-label fw-bold">Situação:<span class="text-danger">*</span></label>
                                    <select class="form-select" name="situacaoInternacao" id="situacaoInternacao" v-model="form.situation" required>
                                        <option value="1" selected>Urgência</option>
                                        <option value="2">Clínica</option>
                                        <option value="3">Cirúgico</option>
                                        <option value="4">Terapêutico</option>
                                        <option value="5">Observação</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row mb-2">
                                <div class="col-md-12">
                                    <label class="form-label fw-bold">Dr(a) responsável:<span class="text-danger">*</span></label>
                                    <select class="form-select" name="drResponsavel" id="drResponsavel" v-model="form.doctor" required>
                                        <option v-for="doctor in doctorsData" :key="doctor.id" :value="doctor.id">{{ doctor.name }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-md-12">
                            <input class="btn btn-success" type="submit" value="Registrar">
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
function internamento(){
    if($('#motivoCadastro').val() == 2){
        $('#internamentoSituacao').show();
    }else{
        $('#internamentoSituacao').hide();
    }
}
</script>

<script setup>
let csrfToken = useCookie("XSRF-TOKEN");
const bearerToken = useCookie("JWT-TOKEN");

const props = defineProps({
    isVisible: {
        type: Boolean,
        default: false
    },
})

const doctorsData = ref([]);
const ownersData = ref([]);
const form = ref({});

const handlePatientRegister = async () => {
    const response = await useFetch("http://localhost:8000/api/patients/create", {
        method: "POST",
        credentials: "include",
        watch: false,
        body: form.value,
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": csrfToken.value,
            Authorization: "Bearer " + bearerToken.value
        }
    }).catch((error) => {
        console.log(error);
    });

    const { message, patient, status } = response.data.value;

    alert(message);
    window.location.reload();
}

async function fetchDrs() {
    const response = await useFetch("http://localhost:8000/api/doctors", {
        method: "GET",
        credentials: "include",
        watch: false,
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": csrfToken.value,
            Authorization: "Bearer " + bearerToken.value
        }
    });

    return response.data.value.doutores;
}

async function fetchOwnersData() {
    const response = await useFetch("http://localhost:8000/api/owners", {
        method: "GET",
        credentials: "include",
        watch: false,
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": csrfToken.value,
            Authorization: "Bearer " + bearerToken.value
        }
    });

    return response.data.value;
}

onMounted(async () => {
    doctorsData.value = await fetchDrs();
    ownersData.value = await fetchOwnersData();
});

</script>

<style>
.modal-overlay {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 90%;
    max-width: 1000px;
}
</style>
