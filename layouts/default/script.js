import { gsap } from "gsap";

export default {
    methods: {
        toggleMenu() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('show');
        },

        toggleDropdown(list) {
            const dropDownTarget = list.target.id;
            this.isDropDownVisible[dropDownTarget] = !this.isDropDownVisible[dropDownTarget];
        }
    },

    data() {
        return {
            user,
            isDropDownVisible: {}
        }
    },

    mounted() {
        this.user = useCookie("User").value;
         
        $("ul li").each(function (index, element) {
            let listItemAnimation;
            $(element).hover(
                () => {
                    listItemAnimation = gsap.to(element, {
                        scale: 1.1,
                        duration: 0.3,
                        ease: "easeInOut"
                    })
                }, () => {
                    listItemAnimation.reverse()
                    
                }
            )
        })
    }
}