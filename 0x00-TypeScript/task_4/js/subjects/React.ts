namespace Subjects {
    interface Teacher {
        firstName: string;
        lastName: string;
        experienceTeachingReact?: number;
    }

    export class React extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        getAvailableTeacher(teachers: Teacher[]): string {
            const availableTeachers = teachers.filter(
                (teacher) => teacher.experienceTeachingReact !== undefined
            );
            if (availableTeachers.length > 0) {
                return `Available Teacher: ${availableTeachers[0].firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}