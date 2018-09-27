const NameLogger = function() {
  this.name = "Michell"

  console.log(this.name) // -> "Michell"

  document.querySelector('button').addEventListener('click', function() {
    console.log(this.name) // -> undefined
  })
}

new NameLogger()
