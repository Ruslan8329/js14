function object(obj, name) {
  return name in obj;
}
let example = { age: 20, name: "Ruslan", city: "Baku" };
console.log(object(example, "city"));

////////////////////////////////////////////////////////////////////////////

function object1() {
  let obj1 = {
    name: "Ruslan",
    age: 19,
  };
  let obj2 = {
    name: "Vanya",
    age: 20,
  };
  let obj3 = {
    name: "Ruslan",
    age: 19,
  };
  if (obj1 === obj3) {
    return true;
  } else {
    return false;
  }
}
let newObject = object1();
console.log(newObject);
