<template>
  <div>

    <div class="row">
      <div class="col">
        <ul class="list-unstyled">
          <li v-for="(log,i) in this.nestedPromisesLog"
              :key="i">{{log}}
          </li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <ul class="list-unstyled">
          <li v-for="(log,i) in this.allPromisesLog"
              :key="i">{{log}}
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>

  import promisesService from './promises-service'

  export default {
    name: 'Promises',
    data() {
      return {
        nestedPromisesLog: [],
        allPromisesLog: []
      }
    },
    components: {},
    created() {
      promisesService.promiseOne(true).then(promiseOneResponse => {
        this.nestedPromisesLog.push(promiseOneResponse)

        promisesService.promiseTwo(true).then(promiseTwoResponse => {
          this.nestedPromisesLog.push(promiseTwoResponse)
          // eslint-disable-next-line
          console.log(promiseOneResponse)

          // eslint-disable-next-line
          console.log(promiseTwoResponse)
        })
      })

      Promise.all([
        promisesService.promiseOne(true),
        promisesService.promiseTwo(true)
      ]).then(response => {
        this.allPromisesLog = response
      }).catch((error) => {
        // eslint-disable-next-line
        console.log(error)
      })
    }
  }
</script>

<style scoped>

</style>
