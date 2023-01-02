const { toRefs, reactive } = require("vue");

const person = {
  firstName: "Boris",
  lastName: "Paskhaver",
};

const refPerson = toRefs(reactive(person));
console.log(refPerson);
