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
        const userData = useCookie("User").value;
        this.user = userData;
    }
}