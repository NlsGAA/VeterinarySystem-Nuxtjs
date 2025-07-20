import gsap from "gsap";

export default {
    name: "Collapse",
    props: {
        oppenedByDefault: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleCollapse() {
            const content = this.$refs.content;
            this.isOpen   = !this.isOpen;

            gsap.to(content, {
                duration: 0.4,
                height: this.isOpen ? "auto" : 0,
                opacity: this.isOpen ? 1 : 0,
                ease: "power2.inOut"
            });
        }
    },
    mounted() {
        this.isOpen   = this.oppenedByDefault;
        const content = this.$refs.content;

        gsap.set(content, {
            height: this.isOpen ? "auto" : 0,
            opacity: this.isOpen ? 1 : 0
        });
    }
}