<script setup>
// const props = defineProps({
//   id: {
//     type: String,
//     default: "",
//   },
//   name: {
//     type: String,
//     default: "",
//   },
//   kind: {
//     type: String,
//     default: "",
//   },
//   breed: {
//     type: String,
//     default: "",
//   },
//   status: {
//     type: String,
//     default: "",
//   },
//   owner: {
//     type: String,
//     default: "",
//   },
// });
</script>

<template>
    <table class="table col-md-12">
        <thead>
            <tr>
                <th>#ID:</th>
                <th>Nome:</th>
                <th>Espécie:</th>
                <th>Raça:</th>
                <th>Status:</th>
                <th>Dono:</th>
                <th>Ações:</th>
            </tr>
        </thead>
        <tbody>
            <slot/>
        </tbody>
    </table>
</template>