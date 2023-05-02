namespace Subjects {
    interface Teacher {
      name: string;
      teachSubject(subject: string): void;
    }
  
    export class Subject {
      private teacher: Teacher;
  
      public setTeacher(teacher: Teacher): void {
        this.teacher = teacher;
      }
    }
  }
  