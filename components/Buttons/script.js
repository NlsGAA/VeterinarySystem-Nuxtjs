export default {
    name: "VButton",
    props: {
        label: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "button"
        },
        method: {
            type: Function,
            default: () => {}
        }
    }
}