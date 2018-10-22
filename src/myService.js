export default {

  promesseUn(shouldResolve) {
    return new Promise((resolve, reject) => {
      if (shouldResolve) {
        setTimeout(() => {
          resolve('promesse 1 exec')
        }, 500)
      } else {
        reject('promesse 1 echec')
      }
    })
  },
  promesseDeux(shouldResolve) {
    return new Promise((resolve, reject) => {
      if (shouldResolve) {
        setTimeout(() => {
          resolve('promesse 2 exec')
        }, 100)
      } else {
        reject('promesse 2 echec')
      }
    })
  },

}
