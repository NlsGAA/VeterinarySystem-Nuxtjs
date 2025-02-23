import { showToast } from '~/utilities/toast';

export default {
    props: {
        showNewPatientModal: {
            type: Boolean,
            default: false
        },
        showWarningModal: {
            type: Boolean,
            default: false
        },
        showEditPatientModal: {
            type: Boolean,
            default: false
        },
        patientNumber: {
            type: Number,
            default: null
        },
        filteringBy: {
            type: String,
            default: null
        },
        patientsPayload: {
            type: Object,
            default: []
        },
        isFiltering: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        async getPatients() {
            return await useApi("patients/dashboard", {method: "POST"});
        },
          
        selectAllCheckboxes() {
            console.log('entrou');
        },
          
        async filterPatients() {
            this.isFilteringPatients = true;
            await useApi("patients/dashboard", {method: "POST", body: this.filterBy})
                .then((patientsFiltered) => {
                    const { message, pacientes } = patientsFiltered.data.value;
                    this.patients = pacientes;
                })
                .finally(() => {
                    this.isFilteringPatients = false
                })
        },
          
        openEditPatientModal(patientId) {
            this.patientId = patientId;
            this.editPatientModal = true;
        },
        
        async destroy(endpoint) {
            const response = await useApi(endpoint);
            const { message, status } = response.data.value;
            this.patientId = null;
    
            if(status == 200) {
                this.warningModal = false;
                showToast({message, status: 'success'});
            }
        },
          
        openWarningModal(patientId){
            this.patientId = patientId;
            this.warningModal = true;
        }
    },

    data() {
        return {
            createPatientModal: this.showNewPatientModal,
            warningModal: this.showWarningModal,
            editPatientModal: this.showEditPatientModal,
            patientId: this.patientNumber,
            filterBy: {
                filter: this.filteringBy
            },
            patients: {...this.patientsPayload},
            isFilteringPatients: this.isFiltering
        }
    },

    mounted() {
        try {
            this.getPatients().then((data) => {
                this.patients = data.data?.value?.pacientes || [];
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}