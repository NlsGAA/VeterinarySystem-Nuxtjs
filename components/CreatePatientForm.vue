<template>
    <div v-if="isVisible" class="modal-overlay" ref="createPatientForm">
        <div class="modal-content">
            <div class="d-flex justify-content-end fs-4">
                <font-awesome-icon icon="fa-solid fa-xmark" class="text-grey pe-auto close-modal-icon" @click="$emit('close')" />
            </div>
            <span class="fs-2 fw-bold mb-2">Cadastrar paciente:</span>
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
                            <input type="text" class="form-control" placeholder="Nome" name="nome" id="nome" v-model="form.name" >
                        </div>
                        <div class="col-md-6">
                            <label for="raca" class="form-label fw-bold">Raça:<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" placeholder="Raça" name="raca" id="raca" v-model="form.breed" >
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-md-12">
                            <label for="especie" class="form-label fw-bold">Espécie:<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" placeholder="Espécie" name="especie" id="especie" v-model="form.species" >
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-md-6">
                            <label for="peso" class="form-label fw-bold">Peso:<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" placeholder="Peso" name="peso" id="peso" v-model="form.weight" >
                        </div>
                        <div class="col-md-6">
                            <label for="peso" class="form-label fw-bold">Tipo peso:<span class="text-danger">*</span></label>
                            <div class="col-md-6 d-flex">
                                <div class="me-2">
                                    <input type="radio" class="me-1" id="kilos" value="0" v-model="form.weight_type" checked >
                                    <label for="kilos">Kilos</label>
                                </div>
                                <div class="ms-2">
                                    <input type="radio" class="me-1" id="gramas" value="1" v-model="form.weight_type" >
                                    <label for="gramas">Gramas</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-md-12 no-wrap">
                            <label class="form-label fw-bold">Responsável:<span class="text-danger">*</span></label>
                            <div class="d-flex align-items-center">
                                <select class="form-select me-4" name="patientOwner" id="patientOwner" v-model="form.owner">
                                    <option v-for="owner in ownersData" :key="owner.id" :value="owner.id">
                                        {{ owner.firstName }} {{ owner.lastName }}
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
                            <input type="text" class="form-control" placeholder="Coloração" name="coloracao" id="coloracao" v-model="form.color" >
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-md-6">
                            <label for="idade" class="form-label fw-bold">Idade:<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" placeholder="Idade" name="idade" id="idade" v-model="form.age" >
                        </div>
                        <div class="col-md-6">
                            <label for="peso" class="form-label fw-bold">Tipo peso:<span class="text-danger">*</span></label>
                            <div class="col-md-6 d-flex">
                                <div class="me-2">
                                    <input type="radio" class="me-1" id="anos" value="0" v-model="form.age_type" checked >
                                    <label for="anos">Anos</label>
                                </div>
                                <div class="ms-2">
                                    <input type="radio" class="me-1" id="meses" value="1" v-model="form.age_type" >
                                    <label for="meses">Meses</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-md-12">
                            <label for="procedencia" class="form-label fw-bold">Procedência:<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" placeholder="Procedência" name="procedencia" id="procedencia" v-model="form.origin" >
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-md-12">
                            <label for="motivoCadastro" class="form-label fw-bold">Motivo do cadastro:<span class="text-danger">*</span></label>
                            <select class="form-select" name="motivoCadastro" id="motivoCadastro" @change="handleHospitalizedInput()" v-model="form.reason" >
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
                            <input class="btn btn-success" type="submit" value="Registrar">
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const form = ref({});
const ownersData = ref([]);
const doctorsData = ref([]);
const showHospitalizedInput = ref(false);
const createPatientForm = ref(null);

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
});

onMounted(async () => {
  doctorsData.value = await fetchDrs();
  ownersData.value = await fetchOwnersData();
});

async function fetchDrs() {
  const response = await useApi("doctors");
  return response.data.value.doutores;
}

async function fetchOwnersData() {
  const response = await useApi("owners");
  return response.data.value;
}

function handleHospitalizedInput() {
  showHospitalizedInput.value = form.value.reason == 2;
}

async function handlePatientRegister() {
  const formData = new FormData();
  formData.append('name', form.value.name);
  formData.append('age', form.value.age);
  formData.append('age_type', form.value.age_type);
  formData.append('origin', form.value.origin);
  formData.append('reason', form.value.reason);
  formData.append('situation', form.value.situation);
  formData.append('doctor', form.value.doctor);
  formData.append('owner', form.value.owner);
  formData.append('color', form.value.color);
  formData.append('breed', form.value.breed);
  formData.append('weight', form.value.weight);
  formData.append('weight_type', form.value.weight_type);
  formData.append('species', form.value.species);
  
  const response = await useApi("patients/create", { method: "POST", body: formData });
  const { message, patient, status } = response.data.value;
  showToast({ message, status });
  form.value = {};
}
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
  overflow-y: auto;
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
