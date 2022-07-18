/*function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }*/

  //write an ES2015 version of the above.

  function createInstructor(firstName, lastName) {
       return {firstName,
        lastName
       }
  };

  //re-write the below - Computer property names
  
//   var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

let favoriteNumber = 42;

let instructor = {
  firstName: 'Colt',
  [favoriteNumber]: 'That is my favourite number'
}
//Object methods - re-write the below to ES2015

// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

const instructor1 = {
 firstName: 'Colt',
 sayHi() {
  return "Hi!";
 },
 sayBye() {
  return this.firstName + "Says bye!"
 }
};


/*Write a function which generates an animal object. The function should accepts 3 arguments:
species: the species of animal (‘cat’, ‘dog’)
verb: a string used to name a function (‘bark’, ‘bleet’)
noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
Use one or more of the object enhancements we’ve covered.*/

function createAnimal(species, verb, noise) {
  return {
    species, [verb]() {
      return noise;
    }
  }
}

const d = createAnimal('cat', 'roar', 'meow');





