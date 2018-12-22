<template>
    <div id="spacebizuserbar">
       <p>You are: {{ username }}. You have Ⴥ{{ balance }}</p>
    </div>
</template>

<script>
    //module.exports = {
    export default {
        data: function() {
            return {
                username: 'Brapp Zannigan',
                balance: 9000
            }
        }
    }
</script>

<style scoped>
#spacebizuserbar {
    background: #eef;
}
</style>