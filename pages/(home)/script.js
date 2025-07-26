import gsap from "gsap";
import { handleLogin, errors, isLoading } from "~/stores/useAuthStore";

export default {
    name: "Login",
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
        };
    },
    watch: {
        "form.email"() {
            // this.maskEmailName();
        },
    },
    methods: {
        maskEmailName() {
            const email = this.form.email;
            const name = email.split("@")[0];
            form.nameMasked = name;
        },

        submitLoginForm() {
            gsap.to('#arrow-login-icon', {
                duration: 0.7,
                x: 300,
                ease: "power2.inOut",
                onComplete: () => {
                    handleLogin(this.form);
                }
            })
        },
    }
}