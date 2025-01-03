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
                $.ajax({
                    url: 'https://viacep.com.br/ws/' + cep + '/json/',
                    method: 'GET',
                    success: (response) => {
                        this.userData.cep = response.cep
                        this.userData.city = response.localidade
                        this.userData.street = response.logradouro
                        console.log(this.userData)
                    },
                    error: function(error) {
                        console.log(error)
                    }
                });
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
            userData: { ...this.user }
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