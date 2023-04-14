let persons = ['jules', 'laure', 'vincent', 'emma'];
let personsLength = persons.length - 1;

for (let main = 0; main < personsLength; main++) {
  for (let cell = 0; cell < personsLength - main; cell++) {
    if (persons[cell] > persons[cell + 1]) {
      
      let temp;
      temp = persons[cell];
      persons[cell] = persons[cell + 1];
      persons[cell + 1] = temp;
    }
  }
}
console.log(persons);