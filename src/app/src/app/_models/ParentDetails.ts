import { User } from './user';
import { StudentDetails } from './StudentDetails';

export class ParentDetails {
    details: User;
    children: StudentDetails[];
}