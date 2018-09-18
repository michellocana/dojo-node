button.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('p1'))
  console.log('1');
})

button.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('p2'))
  console.log('2');
})

// Em que ordem vão aparecer os logs?
// p1, 1, p2, 2
// 1, p1, 2, p2
// 1, 2, p1, p2
// NaN, NaN, NaN, Infinity