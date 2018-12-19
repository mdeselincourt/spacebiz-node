<template>
    <div id="news">
       <h1>News</h1>
       <!-- <span v-if="worldstate.news">{{ worldstate.news }}</span> control to hide initial null state -->
       {{ worldstate.news }}
    </div>
</template>

<script>
//    module.exports = {
    export default {
        data: function() {
            return {} // Empty value until API call can be conducted
        },
        props: ['worldstate'] // Accept the entire world state from the app root in one object lump
    }
</script>

<style scoped>
#news {
    background: #fee;
}
</style>