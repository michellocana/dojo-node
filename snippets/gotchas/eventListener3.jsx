const NameLogger = function() {
  this.name = "Michell"

  console.log(this.name) // -> "Michell"

  document.querySelector('button').addEventListener('click', () => {
    console.log(this.name) // -> "Michell"
  })
}

new NameLogger()
