import gsap from "gsap";

export default {
  name: "Input",
  props: {
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: [String, Number],
      default: ""
    }
  },
  watch: {
    modelValue($event) {
        this.handleLabelStyle($event);
    }
  },
  methods: {
    handleLabelStyle($event) {
        const label = $(this.$el).find("small");

        if ($event.length == 0) {
            return label.attr("style", "display: none;");
        }

        label.attr("style", "display: block;");

        if ($event.length == 1) {
            gsap.from(label, {
                duration: 0.2,
                y: 25,
                ease: "power2.inOut"
            });
        }
    }
  }
}