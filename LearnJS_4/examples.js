function createUser(name, age) {
  let user = {
    name: this.name,
    age: age,
  };
  return user;
}

console.log(createUser("ewr", "123"));

function SmallUser() {
  this.name = "DON";
  return;
}
console.log(new SmallUser().name);
