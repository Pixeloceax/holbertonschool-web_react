interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string) {
  return `${firstName.charAt(0)}. ${lastName}`;
}

class StudentClass {
  constructor(public firstName: string, public lastName: string) {}
  workOnHomework() {
    return "Currently working";
  }
  displayName() {
    return this.firstName;
  }
}
