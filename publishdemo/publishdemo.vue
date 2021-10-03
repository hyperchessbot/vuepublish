<template>
    <div class="message">{{ msg }}</div>
</template>

<script>
    export default {
        props: {
            msg: {
                type: String,
                default: "publishdemo"
            }
        }
    }
</script>

<style>
.message {
    font-size: 30px;
}
</style>