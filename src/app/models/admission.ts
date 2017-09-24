import { Contact } from './contact';
import { Student } from './student';
import { ScolarYear } from './scolar-year';

export class Admission {
    public scolarYear: ScolarYear;
    public tuitionFees = [];
    public student: Student;
    public contact: Contact;
    public facility: any;
    public createdBy: any;
    public academicYear: any;

    attachments = {};

}
