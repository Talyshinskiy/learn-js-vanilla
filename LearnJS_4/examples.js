function createUser(name, age) {
  let user = {
    name: this.name,
    age: age,
  };
  return user;
}

// console.log(createUser("ewr", "123"));

function SmallUser() {
  this.name = "DON";
  return;
}
// console.log(new SmallUser().name);

("use strict");

const myObj = {
  name: "Bahtiyar",
  doLogThis: function () {
    console.log("this is:", this);
  },
};

let newMyObj = myObj.doLogThis;
newMyObj();
// setTimeout(myObj.doLogThis, 1);

function findThis() {
  console.log("this is: ", this);
}

const objThis = {
  value: "value",
};

objThis.findThis = findThis;

// objThis.findThis()

// API call

function doHandleClick() {
  console.log("this is:", this, 22);
}

// document.body.addEventListener("click", doHandleClick);
