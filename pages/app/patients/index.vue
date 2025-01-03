<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { showToast } from '~/utilities/toast';

definePageMeta({layout: "default"});

const patientId = ref(null);
const patientsPayload = ref(null);
const showModal = ref(false);
const showWarningModal = ref(false);
const showEditPatientModal = ref(false);
const filters = ref({patientInfoParam: ""});

async function getPatients() {
  return await useApi("patients/dashboard", {method: "POST"});
}

function selectAllCheckboxes() {
  console.log('entrou');
}

async function filterPatients() {
  const filteredPatientsData = await useApi("patients/dashboard", {method: "POST", body: filters.value});
  const { message, pacientes } = filteredPatientsData.data.value;

  patientsPayload.value = pacientes || [];
  showToast({message, status: 'success'});
}

function openEditPatientModal(patientId) {
  this.patientId = patientId;
  this.showEditPatientModal = true;
}

async function destroy(endpoint) {
    const response = await useApi(endpoint);
    const { message, status } = response.data.value;
    this.patientId = null;

    if(status == 200) {
      showWarningModal.value = false;
      showToast({message, status: 'success'});
    }
}

function openWarningModal(patientId){
  this.patientId = patientId;
  showWarningModal.value = true;
}

onMounted(async () => {
  try {
    var response =  await getPatients();
    const patientsData = response.data.value

    if(patientsData) {
      patientsPayload.value = patientsData.pacientes || [];
    }
  } catch (error) {
    console.error("Erro ao buscar pacientes!", error)
    patientsPayload.value = [];
  }
});

</script>

<template>

  <div class="mb-3">
    <span class="fs-1 fw-bold">Pacientes:</span>
  </div>

  <div class="d-flex justify-content-between mb-3 col-md-12">
      <div class="">
        <form @submit.prevent="filterPatients" class="d-flex">
            <input class="form-control me-2 w-auto input-border-disable" v-model="filters.patientInfoParam" type="text" placeholder="Nome do paciente" style="box-shadow: none; outline: none"/>
            <button class="btn no-wrap .m" type="submit">
              <font-awesome-icon icon="fa-solid fa-search" />
              Filtrar resultados
            </button>
        </form>
      </div>

      <div>
        <button class="btn btn-primary" @click="showModal = !showModal">
          <font-awesome-icon icon="fa-solid fa-plus-circle" />
          Novo paciente
        </button>
        <CreatePatientForm
          :isVisible="showModal"
          @close="showModal = false" 
        />
      </div>

  </div>

  <div class="col-md-12 p-3 d-flex-inline body-table-content">
    <table class="col-md-12">
      <thead>
        <tr>
            <th><input type="checkbox" class="select-all-on-check" @change="selectAllCheckboxes()" /></th>
            <th class="fs-5">ID</th>
            <th class="fs-5">Nome</th>
            <th class="fs-5">Espécie</th>
            <th class="fs-5">Raça</th>
            <th class="fs-5">Status</th>
            <th class="fs-5">Dono</th>
            <th class="fs-5">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="patient in patientsPayload" :key="patient.id">
          <td><input type="checkbox" :key="patient.id"/></td>
          <td><span class="fs-5">{{patient.id}}</span></td>
          <td><span class="fs-5">{{patient.name}}</span></td>
          <td><span class="fs-5">{{patient.species}}</span></td>
          <td><span class="fs-5">{{patient.breed}}</span></td>
          <td><span class="fs-5">ainda n tem</span></td>
          <td><span class="fs-5">{{patient.owner_name}}</span></td>
          <td>
            <div class="">
                <button type="button" @click="openEditPatientModal(patient.id)" class="btn btn-outline-primary">Editar</button>
                <button type="button" @click="openWarningModal(patient.id)" class="btn btn-outline-danger ms-2">Deletar</button>
                <button type="button" @click="navigateTo(`/app/view-patient/${patient.id}`)" class="btn btn-outline-info ms-2">Visualizar</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <EditPatientForm v-if="showEditPatientModal"
    :isVisible="showEditPatientModal"
    :patientId="patientId"
    @close="showEditPatientModal = false"
  />

  <WarningModal v-if="showWarningModal"
    :isVisible="showWarningModal"
    @close="showWarningModal = false"
    @confirmed="destroy(`patients/delete/${patientId}`)"
  />
</template>

<style>

.body-table-content {
  border: 2px solid #f6f6f6;
  border-radius: 10px;
}

table {
  border-collapse: separate;
  border-spacing: 0 10px;
}

table thead tr {
  margin-bottom: 50px;
}

table thead th {
  color: #a9a9a9;
}

table tbody td {
    border-bottom: 2px solid #f6f6f6 !important;
    color: #000;
}

</style>
