<template>
  <div id="app"
       class="container">
    <div class="row">
      <h1>Hello world</h1>
    </div>

    <div class="row">
      <ul class="list-unstyled">
        <li v-for="(log,i) in this.logs"
            :key="i">{{log}}
        </li>
      </ul>
    </div>

    <div class="row">
      <ul class="list-unstyled">
        <li v-for="(log,i) in this.logsTwo"
            :key="i">{{log}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  import myService from './myService'

  export default {
    name: 'app',
    data() {
      return {
        logs: [],
        logsTwo: []
      }
    },
    components: {},
    created() {
      myService.promesseUn(true).then(responsePromesseUn => {
        this.logs.push(responsePromesseUn)

        myService.promesseDeux(true).then(responsePromesseDeux => {
          this.logs.push(responsePromesseDeux)
          // eslint-disable-next-line
          console.log(responsePromesseUn)

          // eslint-disable-next-line
          console.log(responsePromesseDeux)
        })
      })

      Promise.all([
        myService.promesseUn(true),
        myService.promesseDeux(true)
      ]).then(response => {
        this.logsTwo = response
      }).catch((error) => {
        // eslint-disable-next-line
        console.log(error)
      })
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2C3E50;
    margin-top: 60px;
  }
</style>
