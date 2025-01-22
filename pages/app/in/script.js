export default {
    props: {
        isVisible: {
            type: Boolean,
            default: false
        },
        user: {
            type: Object,
            default: null
        },
        isEditing: {
            type: Boolean,
            default: false
        },
        isLoadingContent: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        handleUserForm(cancel) {
            if($("fieldset").attr("disabled")) {
                $("fieldset").attr("disabled", false)
                this.localIsEditing = true
            } 
            if(cancel) {
                $("fieldset").attr("disabled", true)
                this.localIsEditing = false
            }
            this.$emit('update:isEditing', this.localIsEditing)
        },

        searchCep() {
            const cep = $('#cepInput').val();
            if(cep.length == 8) {
                this.isLoading = true
                useFetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
                    const residence = response.data.value
                    this.userData.cep = residence.cep
                    this.userData.city = residence.localidade
                    this.userData.street = residence.logradouro
                }).catch((error) => {
                    this.errors = error.message
                }).finally(() => {
                    this.isLoading = false
                })
            }
        },

        async updateUserData() {
            await useApi("user/update", {method: "POST", body: this.userData}).then(() => {
                this.getUserInfo().then((user) => {
                    this.userData = user;
                });
                this.handleUserForm(true)
            });
        },

        async getUserInfo() {
            const response = await useApi("user");
            const { message, user } = response.data.value
            return user
        }
    },

    data() {
        return {
            localIsEditing: this.isEditing,
            userData: { ...this.user },
            isLoading: this.isLoadingContent,
            errors: ""
        }
    },

    watch: {
        isEditing(newVal) {
            this.localIsEditing = newVal
        }
    },

    mounted() {
        this.getUserInfo().then((user) => {
            this.userData = user;
        })
    }
}