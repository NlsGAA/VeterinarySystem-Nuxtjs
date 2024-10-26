<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { showToast } from '~/utilities/toast';

definePageMeta({layout: "default"});

const patientId = ref(null);
const patientsPayload = ref(null);
const showModal = ref(false);
const showWarningModal = ref(false);
const showEditPatientModal = ref(false);
const csrfToken = useCookie("XSRF-TOKEN");
const bearerToken = useCookie("JWT-TOKEN");

function getPatients() {
  return useFetch(
    "http://localhost:8000/api/patients/dashboard",
    {
      method: "GET",
      credentials: "include",
      watch: false,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + bearerToken.value,
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": csrfToken.value,
      },
    }
  );
}

function selectAllCheckboxes() {
  console.log('entrou');
}

function filterPatients() {
  console.log('está filtrando');
}

function openEditPatientModal(patientId) {
  this.patientId = patientId;
  this.showEditPatientModal = true;
}

async function destroy(endpoint) {
    const response = await useFetch("http://localhost:8000/api/" + endpoint, {
        method: "GET",
        credentials: "include",
        watch: false,
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": csrfToken.value,
            Authorization: "Bearer " + bearerToken.value
        }
    }).catch((error) => {
        console.log(error);
    });
    this.patientId = null;

    const { message, status } = response.data.value;

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
            <input class="form-control me-2 w-auto input-border-disable" type="text" placeholder="Nome do paciente" style="box-shadow: none; outline: none"/>
            <button class="btn no-wrap .m" type="submit">
              <font-awesome-icon icon="fa-solid fa-search" />
              Filtrar resultados
            </button>
        </form>
      </div>

      <div>
        <button class="btn btn-primary" @click="showModal = true">
          <font-awesome-icon icon="fa-solid fa-plus-circle" />
          Novo paciente
        </button>
      </div>

      <CreatePatientForm
        :isVisible="showModal"
        @close="showModal = false" 
      />
  </div>

  <div class="col-md-12 p-3 d-flex-inline body-table-content">
    <table class="col-md-12">
      <thead>
        <tr>
            <th><input type="checkbox" class="select-all-on-check" @change="selectAllCheckboxes()" /></th>
            <th>ID</th>
            <th>Nome</th>
            <th>Espécie</th>
            <th>Raça</th>
            <th>Status</th>
            <th>Dono</th>
            <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="patient in patientsPayload" :key="patient.id">
          <td><input type="checkbox" :key="patient.id"/></td>
          <td>{{patient.id}}</td>
          <td>{{patient.name}}</td>
          <td>{{patient.species}}</td>
          <td>{{patient.breed}}</td>
          <td>ainda n tem</td>
          <td>{{patient.owner_id}}</td>
          <td>
            <div class="">
                <button type="button" @click="openEditPatientModal(patient.id)" class="btn btn-outline-primary">Editar</button>
                <button type="button" @click="openWarningModal(patient.id)" class="btn btn-outline-danger ms-2">Deletar</button>
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
