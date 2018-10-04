class Person {
  constructor(name) {
    this.name = name
  }

  greet() {
    console.log(`Olá, ${this.name}`)
  }
}

const isPerson = person => {
  return person instanceof Person
}

const michell = new Person('Michell')

isPerson(michell) && michell.greet() // -> Olá, Michell
