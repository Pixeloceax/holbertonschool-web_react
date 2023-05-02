namespace Subjects {
    interface Teacher {
        firstName: string;
        lastName: string;
        experienceTeachingJava?: number;
    }

    export class Java extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        getAvailableTeacher(teachers: Teacher[]): string {
            const availableTeachers = teachers.filter(
                (teacher) => teacher.experienceTeachingJava !== undefined
            );
            if (availableTeachers.length > 0) {
                return `Available Teacher: ${availableTeachers[0].firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}