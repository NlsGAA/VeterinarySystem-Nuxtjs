<template>

<div class="col-md-12 d-flex justify-between">
    <div class="col-md-9 shadow p-3 rounded" v-if="patient">
         <div class="col-md-12">
            <div class="col-md-12 row">
                <div class="d-flex flex-column align-items-center">
                    <h3 class="underline">{{ patient.name }}</h3>
                    <span>Paciente em: {{ patient.reason }}</span>
                </div>
                <div class="d-flex mt-4">
                    <div class="d-flex-column">
                        <div class="">
                            <img src="https://tudodebicho.vtexassets.com/arquivos/adoravel-cachorrinho-pequines-ruivo-la-fora-com-os-olhos-fechados.jpg" alt="patient_image" class="w-75 rounded border pe-none"/>
                        </div>
                        <div class="mt-2">
                            <button class="btn see-all-images-button">
                                <font-awesome-icon icon="fa-solid fa-camera" />
                                <span> Ver todas</span>
                            </button>
                        </div>
                        <div class="col-md-9 bg-white rounded align-items-center p-2">
                            <div class="col-md-12">
                                <div class="d-flex align-items-center">
                                    <table class="w-100">
                                        <tbody>
                                            <tr class="mb-4">
                                                <td class="w-25 fw-bold fs-5">Raça:</td>
                                                <td>{{ patient.breed }}</td>
                                            </tr>
                                            <tr class="mb-4">
                                                <td class="w-25 fw-bold fs-5">Espécie:</td>
                                                <td>{{ patient.species }}</td>  
                                            </tr>
                                            <tr class="mb-4">
                                                <td class="w-25 fw-bold fs-5">Peso:</td>
                                                <td>{{ patient.weight }} {{ patient.weight_type }}</td>
                                            </tr>
                                            <tr class="mb-4">
                                                <td class="w-25 fw-bold fs-5">Idade:</td>
                                                <td>{{ patient.age }} {{ patient.age_type }}</td>
                                            </tr>
                                            <tr class="mb-4">
                                                <td class="w-25 fw-bold fs-5">Origem:</td>
                                                <td>{{ patient.origin }}</td>
                                            </tr>
                                            <tr class="mb-4">
                                                <td class="w-25 fw-bold fs-5">Coloração:</td>
                                                <td>{{ patient.color }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <h4 class="">Descrição do paciente:</h4>
                        <form @submit.prevent="updatePatientDescription">
                            <textarea class="col-md-12" :disabled="!isEditing" :readonly="!isEditing">{{ patient?.description }}</textarea>
                            <button class="btn btn-success me-2" v-if="isEditing">Salvar</button>
                            <button class="btn btn-primary" type="button" @click="handlePatientDescriptionForm">Editar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-3 p-2 ms-3 d-flex justify-content-center rounded bg-white">
        <div class="">
            <span class="fw-semibold fs-5">Histórico do paciente:</span>
            <div class="d-flex-column mt-2" id="patient-history">
                <p v-for="log in patientLog">
                    {{ log.created_at_formatted }} - {{ log.message }}
                </p>
            </div>
        </div>
    </div>
</div>

</template>

<script src="./index.js"></script>

<style>
.see-all-images-button:focus,
.see-all-images-button:active {
    outline: none;
    box-shadow: none;    
}

.see-all-images-button:hover {
    border: 1px solid #6bb120;
}

#patient-history {
    max-height: 600px;
    overflow-y: auto;
}
</style>