<template>
    <div id="news">
       <h1>News</h1>
       {{ worldstate.news }}
    </div>
</template>

<script>
//    module.exports = {
    export default {
        data: function() {
            return { }
        },
        props: ['worldstate'] // Accept the entire world state from the app root in one object lump
    }
</script>

<style scoped>
#news {
    background: #efe;
}
</style>