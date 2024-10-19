interface User {
    name: string
}

export const useAuthStore = defineStore('auth', () => {

    const user = ref <User | null> (null);
    const authToken = ref (null);

    async function fetchUser(cookie = useCookie("XSRF-TOKEN")) {
        const response = await useFetch("http://localhost:8000/api/user", {
            credentials: "include",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
                "X-XSRF-TOKEN": cookie.value as string,
                "authorization": "Bearer " + authToken.value
            }
        });

        user.value = response.data.value.user;

        document.cookie = "User=" + user.value?.name;
    }

    async function login(form: any) {
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

        authToken.value = response.data.value?.data.token;

        await fetchUser();

        document.cookie = "JWT-TOKEN=" + authToken.value;

        return response;
    }

    return {login, user, fetchUser, authToken};
})