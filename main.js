// Your code here.

function getFirstName(object) {
  // returns the value of the firstName property of the given person object
  // * `getFirstName({firstName: 'Colin', lastName: 'Jaffe'}) // -> 'Colin'`
  // * `getFirstName({firstName: 'Petra', lastName: 'Solano'}) // -> 'Petra'`

  return object.firstName;
}

function getLastName(object) {
  // getLastName` - returns the value of the lastName property of the given person object
  //   * `getLastName({firstName: 'Colin', lastName: 'Jaffe'}) // -> 'Jaffe'`
  //   * `getLastName({firstName: 'Petra', lastName: 'Solano'}) // -> 'Petra'`

  return object.lastName;
}

function getFullName(object) {
  // `getFullName` - returns the value of the firstName property plus the lastName
  // property with a space in the middle for the given person object

  return object.firstName + " " + object.lastName;
}

function setFirstName(object) {
  // `setFirstName({firstName: 'Petra', lastName: 'Solano'}, 'Anthony') // -> {firstName: 'Anthony', lastName: 'Solano'}`
  object.firstName = "Kelly";
}

function setAge(object) {
  // `setAge` - changes the value of the age property of the given person object to the given value
  // `setAge({firstName: 'Colin', lastName: 'Jaffe', age: 39}, 45) // -> {firstName: 'Colin', lastName: 'Jaffe', age: 45}`
  object.age = 29;
}

function giveBirthday(object) {
  // * `giveBirthday` - increments by 1 the age property of the given person object,
  // or gives them an age of 1 if they don't have that property
  // * `giveBirthday({firstName: 'Colin', lastName: 'Jaffe', age: 39}) // -> {firstName: 'Colin', lastName: 'Jaffe', age: 40}`
  // * `giveBirthday({firstName: 'Petra', lastName: 'Solano', age: 29}) // -> {firstName: 'Solano', lastName: 'Solano', age: 30}`
  // * `giveBirthday({firstName: 'Baby', lastName: 'Jaffe'}) // -> {firstName: 'Baby', lastName: 'Jaffe', age: 1}`
}

function marry(object) {
  // * `marry` - sets the marital status of both given people to `true` and sets each person's
  // `spouseName` property to be the full name of the other
}

// Our code here. Don't touch!
if (typeof getFirstName === "undefined") {
  getFirstName = undefined;
}

if (typeof getLastName === "undefined") {
  getLastName = undefined;
}

if (typeof getFullName === "undefined") {
  getFullName = undefined;
}

if (typeof setFirstName === "undefined") {
  setFirstName = undefined;
}

if (typeof setAge === "undefined") {
  setAge = undefined;
}

if (typeof giveBirthday === "undefined") {
  giveBirthday = undefined;
}

if (typeof marry === "undefined") {
  marry = undefined;
}

if (typeof divorce === "undefined") {
  divorce = undefined;
}

module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
};
