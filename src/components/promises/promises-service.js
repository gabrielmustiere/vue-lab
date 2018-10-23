export default {

  promiseOne(shouldResolve) {
    return new Promise((resolve, reject) => {
      if (shouldResolve) {
        setTimeout(() => {
          resolve('promise 1 exec')
        }, 500)
      } else {
        reject('promise 1 echec')
      }
    })
  },
  promiseTwo(shouldResolve) {
    return new Promise((resolve, reject) => {
      if (shouldResolve) {
        setTimeout(() => {
          resolve('promise 2 exec')
        }, 100)
      } else {
        reject('promise 2 echec')
      }
    })
  },

}
