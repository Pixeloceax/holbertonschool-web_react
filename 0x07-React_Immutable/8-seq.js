import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const filteredGrades = Seq(object)
    .filter((student) => student.score >= 70)
    .map((student) => ({
      ...student,
      firstName:
        student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName:
        student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }))
    .toObject();

  console.log(filteredGrades);
}
/* const grades = {
  1: {
    score: 99,
    firstName: "guillaume",
    lastName: "salva",
  },
  2: {
    score: 10,
    firstName: "the react projects is not up to date",
    lastName: "since many years",
  },
};

printBestStudents(grades); */
