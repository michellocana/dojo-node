console.log('sync code running')

new Promise((resolve, reject) => {
  resolve(1)
}).then(result => {
  console.log('async code result: ' + result)
  return result++
}).then(result => {
  console.log('more async code: ' + result)
})

// -> "sync code running"
// -> "async code result: 1"
// -> "more async code: 2