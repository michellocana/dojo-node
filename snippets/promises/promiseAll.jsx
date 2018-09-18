const p1 = new Promise(resolve => resolve(1))
const p2 = new Promise(resolve => resolve(2))

const promises = [p1, p2]

Promise.all(promises).then(result => {
  console.log(result)
})

// -> [1, 2]