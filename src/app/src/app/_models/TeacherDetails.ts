import { User } from './user';

export class TeacherDetails {
    details: User;
    isHeadTeacher: boolean;
    schoolClassesId: number[];
    taughtSubjectId: number;
    ledClassId: number;
}