import gsap from "gsap";

export default {
    name: "Collapse",
    props: {
        startOppened: {
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
            openByDefault: !this.startOppened
        }
    },
    computed: {
        toggleCollapse() {
            const content = this.$refs.content;

            this.openByDefault = !this.openByDefault;

            gsap.to(content, {
                duration: 0.4,
                height: this.openByDefault ? "auto" : 0,
                opacity: this.openByDefault ? 1 : 0,
                ease: "power2.inOut"
            });
        }
    }
    // methods: {
    //     toggle() {
    //         const content = this.$refs.content;

    //         this.openByDefault = !this.openByDefault;

    //         gsap.to(content, {
    //             duration: 0.4,
    //             height: this.openByDefault ? "auto" : 0,
    //             opacity: this.openByDefault ? 1 : 0,
    //             ease: "power2.inOut"
    //         });
    //     }
    // }
}