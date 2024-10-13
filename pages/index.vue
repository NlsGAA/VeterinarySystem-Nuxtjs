<script setup>
definePageMeta({layout: "default"});

const patientsPayload = ref(null);

function getPatients() {
  const cookie = useCookie("XSRF-TOKEN");
  const authToken = useCookie("JWT-TOKEN");
  
  return useFetch(
    "http://localhost:8000/api/patients/dashboard",
    {
      method: "GET",
      credentials: "include",
      watch: false,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + authToken.value,
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": cookie.value,
      },
    }
  );
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
