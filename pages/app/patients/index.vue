<template>

  <div class="mb-3">
    <span class="fs-1 fw-bold">Pacientes:</span>
  </div>

  <div class="d-flex justify-content-between mb-3 col-md-12">
      <div class="">
        <form @submit.prevent="filterPatients" class="d-flex">
            <input class="form-control me-2 w-auto input-border-disable" v-model="filterBy.filter" type="text" placeholder="Nome do paciente" style="box-shadow: none; outline: none"/>
            <button class="btn no-wrap .m" type="submit">
              <font-awesome-icon icon="fa-solid fa-search" />
              Filtrar resultados
            </button>
        </form>
      </div>

      <div>
        <button class="btn btn-primary" @click="createPatientModal = !createPatientModal">
          <font-awesome-icon icon="fa-solid fa-plus-circle" />
          Novo paciente
        </button>
        <CreatePatientForm
          :isVisible="createPatientModal"
          @close="createPatientModal = false" 
        />
      </div>

  </div>

  <div class="col-md-12 p-3 d-flex-block body-table-content" v-if="patients.length !== 0">
    <Loading class="offset-md-5" v-if="isFilteringPatients"></Loading>
    <table class="col-md-12" v-if="!isFilteringPatients">
      <thead>
        <tr>
            <th><input type="checkbox" class="select-all-on-check" @change="selectAllCheckboxes()" /></th>
            <th class="fs-5">Dt. cadastro</th>
            <th class="fs-5">Nome</th>
            <th class="fs-5">Espécie</th>
            <th class="fs-5">Raça</th>
            <th class="fs-5">Status</th>
            <th class="fs-5">Dono</th>
            <th class="fs-5">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="patient in patients" :key="patient.id">
          <td><input type="checkbox" :key="patient.id"/></td>
          <td><span class="fs-5">{{patient.created_at}}</span></td>
          <td><span class="fs-5">{{patient.name}}</span></td>
          <td><span class="fs-5">{{patient.species}}</span></td>
          <td><span class="fs-5">{{patient.breed}}</span></td>
          <td><span class="fs-5">{{patient.reason}}</span></td>
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

  <div v-else class="col-md-12 p-3 d-flex-inline body-table-content">
    <div class="text-center">
      <h3>Você ainda não possui pacientes cadastrados!</h3>
    </div>
  </div>
  
  <EditPatientForm v-if="editPatientModal"
    :isVisible="editPatientModal"
    :patientId="patientId"
    @close="editPatientModal = false"
  />

  <WarningModal v-if="warningModal"
    :isVisible="warningModal"
    @close="warningModal = false"
    @confirmed="destroy(`patients/delete/${patientId}`)"
  />
</template>


<script src="./script.js"></script>

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
