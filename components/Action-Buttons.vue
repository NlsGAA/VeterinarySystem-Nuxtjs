<script setup>

const csrfToken = useCookie("XSRF-TOKEN");
const bearerToken = useCookie("JWT-TOKEN");

const props = defineProps({
    id: {
        type: String,
        Required: true
    },
    endpoint: {
        type: String,
        Required: true
    }
})
async function destroy() {
    const response = await useFetch("http://localhost:8000/api/" + props.endpoint, {
        method: "GET",
        credentials: "include",
        watch: false,
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": csrfToken.value,
            Authorization: "Bearer " + bearerToken.value
        }
    }).catch((error) => {
        console.log(error);
    });

    const { message, status } = response.data.value;

    if(status == 200) {
        alert(message);
        window.location.reload();
    }
}

</script>

<template>
    <div class="">
        <button type="button" class="btn btn-outline-primary">Editar</button>
        <button type="button" @click="destroy()" class="btn btn-outline-danger ms-2">Deletar</button>
    </div>
</template>
