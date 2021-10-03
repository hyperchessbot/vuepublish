<template>
    <div class="message">{{ msg }}</div>
</template>

<script>
    export default {
        name: "publishdemo",
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