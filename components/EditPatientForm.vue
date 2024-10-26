<template>
    <div v-if="isVisible" class="modal-overlay">
        <div class="modal-content">
            <div class="d-flex justify-content-end fs-4">
                <font-awesome-icon icon="fa-solid fa-xmark" class="text-grey pe-auto close-modal-icon" @click="$emit('close')" />
            </div>
            <span class="fs-2 fw-bold mb-2">Edtiar paciente:</span>
            <form @submit.prevent="handlePatientRegister" method="POST" enctype="multipart/form-data">
                <div class="row p-3 w-100">
                    <div class="row mb-2">
                        <div class="col-md-5">
                            <label for="image" class="form-label fw-bold fw-bold">Imagem:</label>
                            <input type="file" class="form-control-file" id="image" name="image[]" @change="handleImageFiles" multiple>
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
                            <label for="peso" class="form-label fw-bold">Tipo peso:<span class="text-danger">*</span></label>
                            <div class="col-md-6 d-flex">
                                <div class="me-2">
                                    <input type="radio" class="me-1" id="kilos" value="0" v-model="form.weightType" checked required>
                                    <label for="kilos">Kilos</label>
                                </div>
                                <div class="ms-2">
                                    <input type="radio" class="me-1" id="gramas" value="1" v-model="form.weightType" required>
                                    <label for="gramas">Gramas</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-md-12">
                            <label class="form-label fw-bold">Responsável:<span class="text-danger">*</span></label>
                            <div class="d-flex align-items-center">
                                <select class="form-select me-4" name="patientOwner" id="patientOwner" v-model="form.owner" required>
                                    <option v-for="owner in ownersData" :key="owner.id" :value="owner.id">
                                        {{ owner.firstName }} {{ owner.lastName }}]
                                    </option>
                                </select>
                                <button class="btn btn-success w-25" type="button">
                                    <font-awesome-icon icon="fa-solid fa-plus-circle" />
                                    Novo responsável
                                </button>
                            </div>
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
                            <label for="peso" class="form-label fw-bold">Tipo peso:<span class="text-danger">*</span></label>
                            <div class="col-md-6 d-flex">
                                <div class="me-2">
                                    <input type="radio" class="me-1" id="anos" value="0" v-model="form.ageType" checked required>
                                    <label for="anos">Anos</label>
                                </div>
                                <div class="ms-2">
                                    <input type="radio" class="me-1" id="meses" value="1" v-model="form.ageType" required>
                                    <label for="meses">Meses</label>
                                </div>
                            </div>
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
                            <select class="form-select" name="motivoCadastro" id="motivoCadastro" @change="handleHospitalizedInput()" v-model="form.reason" required>
                                <option value="1" selected>Serviços gerais</option>
                                <option value="2">Internamento</option>
                                <option value="3">Consulta</option>
                            </select>
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div v-if="showHospitalizedInput" id="internamentoSituacao" >
                            <div class="row mb-2">
                                <div class="col-md-12">
                                    <label for="situacaoInternacao" class="form-label fw-bold">Situação:<span class="text-danger">*</span></label>
                                    <select class="form-select" name="situacaoInternacao" id="situacaoInternacao" v-model="form.situation" v-bind:required="showHospitalizedInput">
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
                                    <select class="form-select" name="drResponsavel" id="drResponsavel" v-model="form.doctor" v-bind:required="showHospitalizedInput">
                                        <option v-for="doctor in doctorsData" :key="doctor.id" :value="doctor.id">{{ doctor.name }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-md-12">
                            <input class="btn btn-success" type="submit" value="Editar">
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
let csrfToken = useCookie("XSRF-TOKEN");
const bearerToken = useCookie("JWT-TOKEN");

const form = ref({});
const ownersData = ref([]);
const doctorsData = ref([]);
const showHospitalizedInput = ref(false);

const props = defineProps({
    isVisible: {
        type: Boolean,
        default: false
    },
    patientId: {
        type: Number,
        required: true,
        default: null
    }
})

function handleHospitalizedInput() {
    showHospitalizedInput.value = false;
    if (this.form.reason == 2) {
        showHospitalizedInput.value = true;
    };
}

function handleImageFiles(event) {
    const files = event.target.files;
    const imagesData = Array.from(files);
    imagesData.forEach((image) => {
        form.value.images = image;
    })
    console.log(form.value.images);
}

const handlePatientData = async () => {
    const response = await useFetch("http://localhost:8000/api/patients/findPatient/" + props.patientId, {
        method: "GET",
        credentials: "include",
        watch: false,
        headers: {
            accept: "application/json",
            "X-XSRF-TOKEN": csrfToken.value,
            Authorization: "Bearer " + bearerToken.value
        }
    }).catch((error) => {
        console.log(error);
    });

    return response.data.value.paciente;
}

const handlePatientRegister = async () => {
    const response = await useFetch("http://localhost:8000/api/patients/update", {
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
    form.value = await handlePatientData();
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

.close-modal-icon {
    cursor: pointer;
}

</style>
