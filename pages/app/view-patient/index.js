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
        },

        async getPatientLog(patientId) {
            return await useApi("logs/patient/" + patientId)
        },

        formatPhone(phone) {
            if ( !phone || phone == "" ) {
                return phone
            }
            return phone.toString().replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
        },
    },

    data() {
        return {
            patient: null,
            isEditing: false,
            patientLog: [],
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
        
        this.getPatientLog(patientId)
            .then((response) => {
                const { logs } = response.data.value

                const sortedLogs = logs.sort((a, b) => {
                    return new Date(b.created_at_formatted) - new Date(a.created_at_formatted)
                })

                this.patientLog = sortedLogs
            })
            .catch((error) => {
                console.error(error.message)
            })
    }
}