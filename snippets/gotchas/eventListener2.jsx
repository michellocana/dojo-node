const NameLogger = function() {
  this.name = "Michell"

  console.log(this.name) // -> "Michell"

  let handleClick = function() {
    console.log(this.name) // -> "Michell"
  };

  handleClick = handleClick.bind(this)

  document.querySelector('button').addEventListener('click', handleClick)
}

new NameLogger()
