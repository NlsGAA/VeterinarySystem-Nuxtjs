<template>

<div class="col-md-12 shadow p-3 rounded" v-if="patientData">
    <div class="col-md-12">
        <div class="col-md-12 row">
            <div class="d-flex flex-column align-items-center">
                <h3 class="underline">{{ patientData.name }}</h3>
                <span>Status: {{ patientData.reason }}</span>
            </div>
            <div class="d-flex">
                <div class="d-flex-column">
                    <div class="">
                        <img src="https://tudodebicho.vtexassets.com/arquivos/adoravel-cachorrinho-pequines-ruivo-la-fora-com-os-olhos-fechados.jpg" alt="patient_image" class="w-75 rounded border pe-none"/>
                    </div>
                    <div class="mt-2">
                        <button class="btn">
                            <font-awesome-icon icon="fa-solid fa-camera" />
                            Ver todas
                        </button>
                    </div>
                    <div class="col-md-6 bg-white rounded align-items-center p-2">
                        <div class="col-md-12">
                            <div class="d-flex align-items-center">
                                <table class="w-100">
                                    <tr class="mb-4">
                                        <td class="w-25 fw-bold fs-5">Raça:</td>
                                        <td>{{ patientData.breed }}</td>
                                    </tr>
                                    <tr class="mb-4">
                                        <td class="w-25 fw-bold fs-5">Espécie:</td>
                                        <td>{{ patientData.species }}</td>  
                                    </tr>
                                    <tr class="mb-4">
                                        <td class="w-25 fw-bold fs-5">Peso:</td>
                                        <td>{{ patientData.weight }} {{ patientData.weight_type }}</td>
                                    </tr>
                                    <tr class="mb-4">
                                        <td class="w-25 fw-bold fs-5">Idade:</td>
                                        <td>{{ patientData.age }} {{ patientData.age_type }}</td>
                                    </tr>
                                    <tr class="mb-4">
                                        <td class="w-25 fw-bold fs-5">Origem:</td>
                                        <td>{{ patientData.origin }}</td>
                                    </tr>
                                    <tr class="mb-4">
                                        <td class="w-25 fw-bold fs-5">Coloração:</td>
                                        <td>{{ patientData.color }}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-dark col-md-8">
                    <p class="text-white">Aqui pode ser colocado qualquer info</p>
                    <p class="text-white">Aqui pode ser colocado qualquer info</p>
                    <p class="text-white">Aqui pode ser colocado qualquer info</p>
                    <p class="text-white">Aqui pode ser colocado qualquer info</p>
                    <p class="text-white">Aqui pode ser colocado qualquer info</p>
                    <p class="text-white">Aqui pode ser colocado qualquer info</p>
                    <p class="text-white">Aqui pode ser colocado qualquer info</p>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script setup>
const patientData = ref(null); 

async function findPatientById(id) {

    const response = await useApi("patients/findPatient/" + id);
    const { paciente, status } = response.data.value;
    return paciente;
}

const patientId = useRoute().params.id

onMounted( async () => {
    patientData.value = await findPatientById(patientId);
})
</script>