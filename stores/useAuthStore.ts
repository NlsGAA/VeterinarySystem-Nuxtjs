export const useAuthStore = defineStore('auth', () => {

    const user = ref <object|null> (null);
    const isAuth = ref(false);

    async function login(form: any) {

        console.log(form.value);

        await useFetch("http://localhost:8000/sanctum/csrf-cookie", {
            credentials: "include",
          });
        
        const cookie = useCookie("XSRF-TOKEN") ;
    
        const response = await useFetch("http://localhost:8000/api/login", {
            method: "POST",
            body: form.value,
            credentials: "include",
            watch: false,
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
                "X-XSRF-TOKEN": cookie.value as string,
            }
        });

        const userData = response.data.value?.data.user;

        if (userData != null || userData != undefined) {
            user.value = userData;
            isAuth.value = true;
        }

        return response;
    }

    return {login, user, isAuth};
})