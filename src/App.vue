<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Vue lab for Javascript</h1>
        </div>
      </div>
    </div>

    <div class="container">
      <promises></promises>
    </div>

  </div>
</template>

<script>

  import Promises from './components/promises/Promises'

  export default {
    name: 'app',

    components: {
      Promises
    },
  }
</script>

<style>

</style>
