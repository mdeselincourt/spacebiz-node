<template>
    <div id="spacebizuserbar">
       <p>You are: {{ username }}</p>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                username: 'Brapp Zannigan'
            }
        }
    }
</script>

<style scoped>
#spacebizuserbar {
    background: #eef;
}
</style>