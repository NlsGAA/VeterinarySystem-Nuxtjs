interface User {
    name: string
}

const user = ref <User | null> (null);
const authToken = ref <string | null> (null);
const errors = ref <string | null> (null);

async function fetchUser() {
    if(authToken.value) {
        await useApi("user").then((response: any) => {
            user.value = response.data?.value.user
            document.cookie = `User=${JSON.stringify(user.value)}`
        });
    }
}

async function login(form: object) {
    await useFetch("http://localhost:8000/sanctum/csrf-cookie", {
        credentials: "include",
    });

    return await useApi("login", {method: "POST", body: form})
        .then( async (response: any) => {
            if(response?.error.value?.statusCode) {
                throw new Error(response?.error.value?.data.message)
            }

            const data: any = response?.data.value
            authToken.value = data.data.token
            document.cookie = "JWT-TOKEN=" + authToken.value
            await fetchUser()
        }
    );
}

async function handleLogin(loginData: object) {
    await login(loginData).then(() => {
        navigateTo("/app/patients");
    }).catch((error) => {
        errors.value = error.message;
    });
}

export { authToken, user, handleLogin, errors };