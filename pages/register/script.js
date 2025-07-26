import VButton from "~/components/Buttons/VButton.vue";

export default {
    name: "Register",
    components: {
        VButton
    },
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
            }
        };
    },
    methods: {
        async handleRegister() {
            const registerData = await useApi("register", {
                method: "POST",
                body: this.form
            });

            if (registerData.data.value.status == 200) {
                return navigateTo("/login");
            }
        }
    }
}