<template>
    <div class="d-flex justify-between justify-content-center">
        <div class="col-md-9" v-if="patient">
            <div class="ms-5">
                <div class="d-flex flex-column align-items-left">
                    <h2>Detalhes do Paciente</h2>
                    <span class="text-body-secondary">Informações completas sobre o paciente selecionado</span>
                </div>
                <div class="d-flex flex-column mt-4">
                    <div class="col-md-6 d-flex align-items-center">
                        <img 
                            src="https://tudodebicho.vtexassets.com/arquivos/adoravel-cachorrinho-pequines-ruivo-la-fora-com-os-olhos-fechados.jpg" 
                            alt="patient_image"
                            class="w-25 rounded-circle border pe-none"
                        />
                        <div class="d-flex flex-column ms-4">
                            <h4>{{ patient.name }}</h4>
                            <span class="text-body-secondary">{{ patient.species }}, {{ patient.breed }}</span>
                            <span class="text-body-secondary">ID: {{ patient.id }}</span>
                        </div>
                    </div>
                    <div class="mt-2">
                        <button class="btn see-all-images-button">
                            <font-awesome-icon icon="fa-solid fa-camera" />
                            <span> Ver todas</span>
                        </button>
                    </div>
                    <div class="col-md-12 align-items-center p-2 mt-4">
                        <h4>Informações Gerais</h4>
                        <div class="d-flex flex-column mt-5">
                            <div class="d-flex col-md-12 border-top mb-3 pt-2">
                                <div class="col-md-6 d-flex flex-column justify-content-center">
                                    <span class="text-body-secondary">Nome Completo</span>
                                    <span>{{ patient.name }}</span>
                                </div>
                                <div class="col-md-6 d-flex flex-column">
                                    <span class="text-body-secondary">Espécie</span>
                                    <span>{{ patient.species }}</span>
                                </div>
                            </div>
                            <div class="d-flex col-md-12 border-top mb-3 pt-2">
                                <div class="col-md-6 d-flex flex-column">
                                    <span class="text-body-secondary">Raça</span>
                                    <span>{{ patient.breed }}</span>
                                </div>
                                <div class="col-md-6 d-flex flex-column">
                                    <span class="text-body-secondary">Data de Nascimento</span>
                                    <span>Fake date</span>
                                </div>
                            </div>
                            <div class="d-flex col-md-12 border-top mb-3 pt-2">
                                <div class="col-md-6 d-flex flex-column">
                                    <span class="text-body-secondary">Sexo</span>
                                    <span>Fake sexo</span>
                                </div>
                                <div class="col-md-6 d-flex flex-column">
                                    <span class="text-body-secondary">Peso</span>
                                    <span>{{ patient.weight }} {{ patient.weight_type }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 align-items-center p-2 mt-4">
                        <h4>Histórico Médico</h4>
                        <div class="d-flex flex-column mt-5">
                            <div class="d-flex col-md-12 border-top mb-3 pt-2">
                                <div class="d-flex col-md-4">
                                    <span class="text-body-secondary col-md-12">Alergias</span>
                                </div>
                                <div class="col-md-6">
                                    <span>Nenhuma alergia conhecida</span>
                                </div>
                            </div>
                            <div class="d-flex col-md-12 border-top mb-3 pt-2">
                                    <div class="d-flex col-md-4">
                                    <span class="text-body-secondary col-md-12">Vacinas</span>
                                </div>
                                <div class="col-md-6">
                                    <span>Vacinação completa</span>
                                </div>
                            </div>
                            <div class="d-flex col-md-12 border-top mb-3 pt-2">
                                    <div class="d-flex col-md-4">
                                    <span class="text-body-secondary col-md-12">Doenças Pré-existentes</span>
                                </div>
                                <div class="col-md-6">
                                    <span>Nenhuma doença pré-existente</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 align-items-center p-2 mt-4">
                        <h4>Consultas Recentes</h4>
                        <div class="d-flex flex-column mt-5">
                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Data</th>
                                        <th scope="col">Motivo</th>
                                        <th scope="col">Veterinário</th>
                                        <th scope="col">Observações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     <tr>
                                         <td>01/01/2023</td>
                                         <td>Teste</td>
                                         <td>Teste</td>
                                         <td>Teste</td>
                                     </tr>
                                     <tr>
                                         <td>01/01/2023</td>
                                         <td>Teste</td>
                                         <td>Teste</td>
                                         <td>Teste</td>
                                     </tr>
                                     <tr>
                                         <td>01/01/2023</td>
                                         <td>Teste</td>
                                         <td>Teste</td>
                                         <td>Teste</td>
                                     </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-12 align-items-center p-2 mt-4">
                        <h4>Tratamentos e Medicamentos</h4>
                        <div class="d-flex flex-column mt-5">
                            <div class="d-flex col-md-12 border-top mb-3 pt-2">
                                    <div class="d-flex col-md-4">
                                    <span class="text-body-secondary col-md-12">Tratamentos Realizados</span>
                                </div>
                                <div class="col-md-6">
                                    <span>Nenhum tratamento realizado recentemente</span>
                                </div>
                            </div>
                            <div class="d-flex col-md-12 border-top mb-3 pt-2">
                                    <div class="d-flex col-md-4">
                                    <span class="text-body-secondary col-md-12">Medicamentos Prescritos</span>
                                </div>
                                <div class="col-md-6">
                                    <span>Nenhuma medicamento prescrito recentemente</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 align-items-center p-2 mt-4">
                        <h4>Informações do Tutor</h4>
                        <div class="d-flex flex-column mt-5">
                            <div class="d-flex col-md-12 border-top mb-3 pt-2">
                                <div class="col-md-6 d-flex flex-column justify-content-center">
                                    <span class="text-body-secondary">Nome do Tutor</span>
                                    <span>{{  patient.owner.name }}</span>
                                </div>
                                <div class="col-md-6 d-flex flex-column">
                                    <span class="text-body-secondary">Telefone</span>
                                    <span>{{ formatPhone(patient.owner.cellphone) }}</span>
                                </div>
                            </div>
                            <div class="d-flex col-md-12 border-top mb-3 pt-2">
                                <div class="col-md-6 d-flex flex-column">
                                    <span class="text-body-secondary">Email</span>
                                    <span>{{ patient.owner.email }}</span>
                                </div>
                                <div class="col-md-6 d-flex flex-column">
                                    <span class="text-body-secondary">Endereço</span>
                                    <span>{{ patient.owner.address }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 my-4">
                        <div class="d-flex">
                            <button class="btn btn-primary me-3" @click="handlePatientForm">
                                Editar paciente
                            </button>
                            <button class="btn btn-light" @click="handlePatientForm">
                                Agendar Consulta
                            </button>
                        </div>
                    </div>

                    <!-- <div class="col-md-8">
                        <h4 class="">Descrição do paciente:</h4>
                        <form @submit.prevent="updatePatientDescription">
                            <textarea class="col-md-12" :disabled="!isEditing" :readonly="!isEditing">{{ patient?.description }}</textarea>
                            <button class="btn btn-success me-2" v-if="isEditing">Salvar</button>
                            <button class="btn btn-primary" type="button" @click="handlePatientDescriptionForm">Editar</button>
                        </form>
                    </div> -->
                </div>
            </div>
        </div>
        <!-- <div class="col-md-3 p-2 ms-3 d-flex justify-content-center rounded bg-white">
            <div class="">
                <span class="fw-semibold fs-5">Histórico do paciente:</span>
                <div class="d-flex-column mt-2" id="patient-history">
                    <p v-for="log in patientLog">
                        {{ log.created_at_formatted }} - {{ log.message }}
                    </p>
                </div>
            </div>
        </div> -->
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