namespace Subjects {
    interface Teacher {
      firstName: string;
      lastName: string;
      experienceTeaching: number;
      experienceTeachingC?: number;
    }
  
    export class Cpp extends Subject {
      getRequirements(): string {
        return "Here is the list of requirements for Cpp";
      }
  
      getAvailableTeacher(teachers: Teacher[]): string {
        const availableTeachers = teachers.filter(
          (teacher) => teacher.experienceTeachingC !== undefined
        );
        if (availableTeachers.length > 0) {
          return `Available Teacher: ${availableTeachers[0].firstName}`;
        } else {
          return "No available teacher";
        }
      }
    }
  }
  