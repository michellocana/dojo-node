const HardCodedPromise = function(callback) {
  let result = null
  let didResolve = false
  let didReject = false

  const resolve = (data) => {
    result = data
    didResolve = true
  }

  const reject = (reason) => {
    result = reason
    didReject = true
  }

  const checkState = (successCb, failureCb) => {
    setTimeout(() => {
      if (didResolve) {
        if (successCb) {
          try {
            successCb(result)
          } catch (error) {
            failureCb(error.message)
          }
        }
      } else if (didReject) {
        if (failureCb) {
          failureCb(result)
        }
      } else {
        checkState(successCb, failureCb)
      }
    }, 1)
  }

  return () => {
    callback(resolve, reject)

    return {
      then: resolveCb => {
        const chainedPromise = new HardCodedPromise((resolve, reject) => {
          checkState(result => {
            resolve(resolveCb(result))
          }, reason => {
            reject(reason)
          })
        })

        return chainedPromise()
      },

      catch: rejectCb => {
        checkState(null, rejectCb)        
      }
    }
  }
}

module.exports = HardCodedPromise