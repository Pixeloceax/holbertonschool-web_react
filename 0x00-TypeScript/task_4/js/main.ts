const { Cpp, Java, React } = require('./Subjects');

let cTeacher = {
  firstName: 'teststs',
  lastName: 'tststst',
  experienceTeachingC: 10,
};

console.log('C++');
const cpp = new Cpp();
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
const java = new Java();
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
const react = new React();
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

module.exports = {
  cpp,
  java,
  react,
  cTeacher,
};
