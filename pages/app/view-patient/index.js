export default {
    name: "ViewPatient",

    props: {
        patientData: {
            type: Object,
            default: null
        }
    },

    methods: {
        async findPatientById(patientId) {
            return await useApi("patients/findPatient/" + patientId)
        },

        handlePatientDescriptionForm() {
            this.isEditing = true
        },

        async updatePatientDescription() {
            this.isEditing = false

            if (this.patientData) {
                return await useApi("patients/update", {
                    method: "POST",
                    body: this.patient
                })
            }
        }
    },

    data() {
        return {
            patient: null,
            isEditing: false
        }
    },

    mounted() {
        const patientId = this.$route.params.id
        
        this.findPatientById(patientId)
            .then((response) => {
                const { paciente, status } = response.data.value
                this.patient = { ...paciente }
            })
            .catch((error) => {
                console.error(error.message)
            })
    }
}