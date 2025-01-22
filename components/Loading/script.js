import { gsap } from "gsap";

export default {
    name: "Loading",
    props: {
        height: {
            type: Number,
            default: 50
        },
        width: {
            type: Number,
            default: 50
        }
    },
    mounted() {
        gsap.to(".inside-circle", {
            rotation: 360,
            ease: "linear",
            duration: 2,
            repeat: -1
        });
    }
}