// Task: Create a function that shows an ordered list from the items.

// Execute: node pets.js

//  Example output:
//  1. Cat
//  2. Dog
//  ...
const pets = ['Cat', 'Dog', 'Hamster', 'Guinea Pig', 'Salmon']

function createPetList() {
  let counter = 0
  for (const pet of pets) {
    counter++
    console.log(counter + '. ' + pet)
  }
}

function main() {
  createPetList()
}

main()

