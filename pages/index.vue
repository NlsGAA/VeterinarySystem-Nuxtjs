<script setup>
definePageMeta({middleware: "auth", layout: "default"});

const patientsPayload = ref(null);

function getPatients() {
  const cookie = useCookie("XSRF-TOKEN");
  
  return useFetch(
    "http://localhost:8000/api/patients/dashboard",
    {
      method: "GET",
      credentials: "include",
      watch: false,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + useCookie("authToken").value,
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": cookie.value,
      },
    }
  );
}

onMounted( () => {
  var patients =  getPatients();
  console.log(patients);
  // patientsPayload.value = patients.data.value?.pacientes;
})


</script>

<template>
  <div class="mt-4">
    <div class="mx-auto col-md-12">
      <div class="w-100">
        <TableDashboardTable>
          <tr v-for="patient in patientsPayload">
              <th>{{patient.id}}</th>
              <th>{{patient.nome}}</th>
              <th>{{patient.especie}}</th>
              <th>{{patient.raca}}</th>
              <th>ainda n tem</th>
              <th>{{patient.owner_id}}</th>
              <th><ActionButtons/></th>
          </tr>
        </TableDashboardTable>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #fff;
}
</style>
