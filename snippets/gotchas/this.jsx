const person = {
  name: "Michell",
  greet: function() {
    console.log(`Olá, ${this.name}`)
  }
}

person.greet() // -> Olá, Michell
