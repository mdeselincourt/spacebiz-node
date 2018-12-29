<template>
  <div id="app">
    <h1>Spacebiz</h1><!-- Everything static in this component is universally present -->
    <router-view/><!-- This loads a component based upon the URL i.e.: is routed by ./router/index.js -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
    /* By putting these in app.vue they apply across the entire frontend */
    /* CSS comment rules apply */
    /* This works for me; the more powerful? @font-face did not, immediately */
    @import url('https://fonts.googleapis.com/css?family=Rajdhani');

    #app {
        font-family: "Rajdhani", Calibri, sens-serif;
        background: #062938;
        color: white;
    }

    .component { /* put this class in each component for a nice style */
        background: #315166;
        color: white;
    }

    table {
        table-layout: fixed;
        border-style: solid;
        border-collapse: collapse;
        border-width: 1px;
    }

    /* th, td {} */

    .tooltipped {
        position: relative;
        display: inline-block;
        border-width: 0px;
        /* border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
    }

    /* Tooltip text */
    .tooltipped .tooltip {
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        position: absolute; /* Position the tooltip text - see examples below! */
        z-index: 1;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    .tooltipped:hover .tooltip {
        visibility: visible;
        width: 120px;
        top: -5px;
        left: 105%;
    }

    input
    {
        font-family: "Rajdhani", Calibri, sens-serif;
    }

    .buttonClass {
        background-color: green; /* Green */
        color: white;

        border: black;
        border-style: solid;
        border-width: 4px;
        border-radius: 5px;
        padding: 16px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
        cursor: pointer;
    }

.buttonClass:hover {
  background-color: palegreen;
  color: black;
}

    .asciiart {
        background: black;
        color: slategray;
        font-family: 'Courier New', Courier, monospace;
    }
</style>
