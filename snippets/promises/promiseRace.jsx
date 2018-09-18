const p1 = new Promise(resolve => {
  setTimeout(() => resolve(1), 2000)
})

const p2 = new Promise(resolve => resolve(2))

const promises = [p1, p2]

Promise.race(promises).then(result => {
  console.log(result)
})

// -> 2