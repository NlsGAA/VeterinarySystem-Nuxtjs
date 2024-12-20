interface User {
    name: string
}

const user = ref <User | null> (null);
const authToken = ref (null);

async function fetchUser(cookie = useCookie("XSRF-TOKEN")) {
    if(authToken.value) {
        const response = await useApi("user");
        user.value = response.data.value.user;
        const userDataToCookie = JSON.stringify(user.value);
        document.cookie = `User=${userDataToCookie}`;
    }
}

async function login(form: any) {
    await useFetch("http://localhost:8000/sanctum/csrf-cookie", {
        credentials: "include",
    });

    const response = await useApi("login", {method: "POST", body: form.value});
    const data = response.data.value;

    if(data.status == 'success') {
        authToken.value = response.data.value?.data.token;
        document.cookie = "JWT-TOKEN=" + authToken.value;
        await fetchUser();
    }
    return response;
}

export { login, authToken, user };